const GOOGLE_STS_URL = 'https://sts.googleapis.com/v1/token';
const GOOGLE_IAM_CREDENTIALS_URL = 'https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts';
const GOOGLE_SHEETS_API = 'https://sheets.googleapis.com/v4/spreadsheets';
const GOOGLE_SHEETS_SCOPE = 'https://www.googleapis.com/auth/spreadsheets';
const GOOGLE_CLOUD_PLATFORM_SCOPE = 'https://www.googleapis.com/auth/cloud-platform';
const HEADERS = [
  'Submitted At',
  'Type',
  'Name',
  'Email',
  'Phone',
  'Country',
  'Tax Situation',
  'Preferred Time',
  'Years Behind',
  'Foreign Accounts',
  'Foreign Company',
  'Urgency',
  'Notes',
];

export interface LeadForGoogleSheet {
  type: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  situation: string;
  selectedSlot: string;
  yearsBehind: string;
  foreignAccounts: string;
  hasForeignCompany: string;
  urgency: string;
  notes: string;
}

interface GoogleTokenResponse {
  access_token?: string;
}

interface GoogleImpersonatedTokenResponse {
  accessToken?: string;
}

interface GoogleSpreadsheetResponse {
  sheets?: { properties?: { title?: string } }[];
}

interface GoogleValuesResponse {
  values?: unknown[][];
}

async function getAccessToken(oidcToken: string): Promise<string> {
  const projectNumber = process.env.GCP_PROJECT_NUMBER;
  const poolId = process.env.GCP_WORKLOAD_IDENTITY_POOL_ID;
  const providerId = process.env.GCP_WORKLOAD_IDENTITY_POOL_PROVIDER_ID;
  const serviceAccountEmail = process.env.GCP_SERVICE_ACCOUNT_EMAIL;

  if (!projectNumber || !poolId || !providerId || !serviceAccountEmail) {
    throw new Error('Google Workload Identity Federation environment variables are not configured.');
  }

  const audience = `//iam.googleapis.com/projects/${projectNumber}/locations/global/workloadIdentityPools/${poolId}/providers/${providerId}`;
  const exchangeResponse = await fetch(GOOGLE_STS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',
      audience,
      requested_token_type: 'urn:ietf:params:oauth:token-type:access_token',
      subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
      subject_token: oidcToken,
      scope: GOOGLE_CLOUD_PLATFORM_SCOPE,
    }),
  });

  if (!exchangeResponse.ok) {
    console.error('[google-sheets] Workload identity token exchange failed', {
      status: exchangeResponse.status,
    });
    throw new Error('Could not authenticate with Google Cloud.');
  }

  const federatedToken = (await exchangeResponse.json()) as GoogleTokenResponse;
  if (!federatedToken.access_token) {
    throw new Error('Google did not return a federated access token.');
  }

  const impersonationResponse = await fetch(
    `${GOOGLE_IAM_CREDENTIALS_URL}/${encodeURIComponent(serviceAccountEmail)}:generateAccessToken`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${federatedToken.access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        scope: [GOOGLE_SHEETS_SCOPE],
        lifetime: '3600s',
      }),
    },
  );

  if (!impersonationResponse.ok) {
    console.error('[google-sheets] Service account impersonation failed', {
      status: impersonationResponse.status,
    });
    throw new Error('Could not impersonate the Google Sheets service account.');
  }

  const impersonatedToken = (await impersonationResponse.json()) as GoogleImpersonatedTokenResponse;
  if (!impersonatedToken.accessToken) {
    throw new Error('Google did not return an impersonated access token.');
  }

  return impersonatedToken.accessToken;
}

async function sheetsRequest<T>(
  url: string,
  accessToken: string,
  operation: string,
  options: RequestInit = {},
): Promise<T> {
  const headers = new Headers(options.headers);
  headers.set('Authorization', `Bearer ${accessToken}`);
  if (options.body) {
    headers.set('Content-Type', 'application/json');
  }

  const response = await fetch(url, { ...options, headers });
  if (!response.ok) {
    console.error('[google-sheets] Request failed', { operation, status: response.status });
    throw new Error(`Google Sheets ${operation} failed.`);
  }

  return (await response.json()) as T;
}

function encodeRange(range: string): string {
  return encodeURIComponent(range);
}

export async function appendLeadToGoogleSheet(
  lead: LeadForGoogleSheet,
  oidcToken: string | null,
): Promise<void> {
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  if (!spreadsheetId) {
    throw new Error('The Google spreadsheet ID is not configured.');
  }
  if (!oidcToken) {
    throw new Error('No Vercel OIDC token was provided to the booking request.');
  }

  const tabTitle = process.env.GOOGLE_SHEET_TAB?.trim() || 'Consultation Bookings';
  const accessToken = await getAccessToken(oidcToken);
  const spreadsheetUrl = `${GOOGLE_SHEETS_API}/${encodeURIComponent(spreadsheetId)}`;
  const spreadsheet = await sheetsRequest<GoogleSpreadsheetResponse>(
    `${spreadsheetUrl}?fields=sheets.properties.title`,
    accessToken,
    'spreadsheet lookup',
  );
  const sheetExists = spreadsheet.sheets?.some(
    (sheet) => sheet.properties?.title === tabTitle,
  );

  if (!sheetExists) {
    await sheetsRequest<unknown>(
      `${spreadsheetUrl}:batchUpdate`,
      accessToken,
      'tab creation',
      {
        method: 'POST',
        body: JSON.stringify({
          requests: [{ addSheet: { properties: { title: tabTitle } } }],
        }),
      },
    );
  }

  const quotedTab = `'${tabTitle.replace(/'/g, "''")}'`;
  const headerRange = encodeRange(`${quotedTab}!A1:M1`);
  const valuesUrl = `${spreadsheetUrl}/values/${headerRange}`;
  const headerResponse = await sheetsRequest<GoogleValuesResponse>(
    valuesUrl,
    accessToken,
    'header lookup',
  );
  const currentHeaders = headerResponse.values?.[0]?.map(String) ?? [];

  if (currentHeaders.length === 0) {
    await sheetsRequest<unknown>(
      `${valuesUrl}?valueInputOption=RAW`,
      accessToken,
      'header creation',
      {
        method: 'PUT',
        body: JSON.stringify({ values: [HEADERS] }),
      },
    );
  } else if (
    currentHeaders.length !== HEADERS.length ||
    HEADERS.some((header, index) => currentHeaders[index] !== header)
  ) {
    throw new Error(`The first row of the "${tabTitle}" tab does not match the expected booking columns.`);
  }

  const row = [
    new Date().toISOString(),
    lead.type,
    lead.name,
    lead.email,
    lead.phone,
    lead.country,
    lead.situation,
    lead.selectedSlot,
    lead.yearsBehind,
    lead.foreignAccounts,
    lead.hasForeignCompany,
    lead.urgency,
    lead.notes,
  ];
  const appendRange = encodeRange(`${quotedTab}!A:M`);
  const appendUrl = `${spreadsheetUrl}/values/${appendRange}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`;

  await sheetsRequest<unknown>(appendUrl, accessToken, 'booking append', {
    method: 'POST',
    body: JSON.stringify({ values: [row] }),
  });
}
