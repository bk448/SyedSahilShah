export interface DetailedService {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  summary: string;
  heroImage: string;
  whoNeedsThis: string[];
  keyDeliverables: string[];
  processSteps: { step: number; title: string; description: string }[];
  relatedFormNumbers: string[];
  pricingRange: string;
  turnaroundTime: string;
}

export const SERVICES_CATALOG: DetailedService[] = [
  {
    slug: 'annual-expat-1040',
    title: 'Annual Expat 1040 Preparation',
    category: 'Annual Compliance',
    tagline: 'Dual-method foreign wage optimization eliminating US double taxation.',
    summary: 'Our signature compliance service. A dedicated licensed US CPA prepares your Form 1040, optimizing the Foreign Earned Income Exclusion (FEIE) vs. Foreign Tax Credit (FTC), calculating foreign currency conversions, and filing electronically.',
    heroImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
    whoNeedsThis: [
      'US citizens and Green Card holders earning wages abroad',
      'Remote digital nomads moving across international borders',
      'Dual-citizen families needing Child Tax Credit cash refunds',
      'Americans with non-US resident alien spouses'
    ],
    keyDeliverables: [
      'Form 1040 Federal Return + Schedules 1, 2, and 3',
      'Form 2555 (FEIE) or Form 1116 (FTC) calculation',
      'Foreign currency conversions using IRS benchmark annual exchange rates',
      'IRS E-file receipt and 7-year audit file record'
    ],
    processSteps: [
      { step: 1, title: 'Encrypted Intake', description: 'Upload foreign tax certificates (P60, T4, etc.) to your secure client portal.' },
      { step: 2, title: 'CPA Optimization', description: 'Your CPA models FEIE vs. FTC to maximize your refunds and future carryovers.' },
      { step: 3, title: 'Review & E-file', description: 'Schedule an advisor video review, approve the return, and receive electronic confirmation.' }
    ],
    relatedFormNumbers: ['1040', '2555', '1116', 'FinCEN 114'],
    pricingRange: 'From $595 USD',
    turnaroundTime: '5–7 Business Days'
  },
  {
    slug: 'streamlined-foreign-offshore',
    title: 'Streamlined Foreign Offshore Procedures (SFOP)',
    category: 'Catch-Up & Amnesty',
    tagline: 'Penalty-free IRS amnesty for expats and Accidental Americans behind on filing.',
    summary: 'The IRS Streamlined Foreign Offshore Procedures allow non-willful taxpayers living outside the US to become completely compliant by filing 3 years of late returns and 6 years of FBARs with zero late-filing or FBAR penalties.',
    heroImage: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
    whoNeedsThis: [
      'Accidental Americans who discovered US tax duties late',
      'Expats who haven’t filed in 3, 5, or 10+ years',
      'Taxpayers who received foreign bank FATCA letters demanding US TIN/SSN',
      'Filers wanting to protect their US passport from revocation under IRC § 7345'
    ],
    keyDeliverables: [
      '3 Years of Delinquent Form 1040 returns',
      '6 Years of Delinquent FBAR FinCEN Form 114 filings',
      'Form 14653 Non-Willful Certification statement authored by our CPA',
      'Complete penalty abatement advocacy'
    ],
    processSteps: [
      { step: 1, title: 'Non-Willful Evaluation', description: 'Confidential assessment to confirm statutory eligibility for the Streamlined program.' },
      { step: 2, title: 'Multi-Year Accounting', description: 'Forensic translation of past multi-year bank accounts, foreign pensions, and wages.' },
      { step: 3, title: 'Submission to IRS Austin', description: 'Specialized paper and electronic submission directly to the IRS international amnesty unit.' }
    ],
    relatedFormNumbers: ['1040', 'FinCEN 114', 'Form 14653', '8938'],
    pricingRange: '$2,450 Flat Fee',
    turnaroundTime: '2–3 Weeks'
  },
  {
    slug: 'fbar-fatca-reporting',
    title: 'FBAR & FATCA Asset Compliance',
    category: 'Annual Compliance',
    tagline: 'Shield foreign bank accounts and pensions from $10,000+ FinCEN fines.',
    summary: 'Comprehensive disclosure of non-US checking, savings, mutual funds, and foreign pension plans. We handle FinCEN Form 114 electronic filing through the BSA portal and Form 8938 on Form 1040.',
    heroImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    whoNeedsThis: [
      'Anyone whose non-US accounts aggregate above $10,000 at any point',
      'Holders of foreign pensions (SIPPs, Superannuation, Canadian RRSP)',
      'Individuals with signatory authority over foreign corporate bank accounts',
      'Expats subject to FATCA thresholds ($200k+ single abroad)'
    ],
    keyDeliverables: [
      'FinCEN Form 114 electronic BSA filing',
      'Form 8938 FATCA asset disclosure',
      'Maximum daily balance reconciliation in USD'
    ],
    processSteps: [
      { step: 1, title: 'Account Aggregation', description: 'List foreign accounts, institutions, and highest calendar year balances.' },
      { step: 2, title: 'Currency Conversion', description: 'Daily and Treasury year-end conversion into USD.' },
      { step: 3, title: 'Direct BSA E-filing', description: 'Immediate Treasury transmission with official BSA acknowledgement receipt.' }
    ],
    relatedFormNumbers: ['FinCEN 114', '8938'],
    pricingRange: 'Included in 1040 or $175 Standalone',
    turnaroundTime: '2–4 Business Days'
  },
  {
    slug: 'form-5471-cfc-reporting',
    title: 'Controlled Foreign Corporation (Form 5471)',
    category: 'Corporate & Business',
    tagline: 'CFC balance sheet translations, Category 1–5 compliance, and GILTI calculation.',
    summary: 'Owning or controlling an overseas company (UK Ltd, Canadian Corp, EU GmbH, SARL, Pty Ltd) triggers one of the most punitive forms in the tax code. We prevent automatic $10,000 per-year penalties.',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    whoNeedsThis: [
      'Expats operating consulting businesses through foreign corporations',
      'Founders holding 10%+ equity in non-US companies',
      'Officers or directors of Controlled Foreign Corporations (CFCs)'
    ],
    keyDeliverables: [
      'Complete Form 5471 (Schedules A through J, M, Q, R)',
      'GAAP to US Tax Accounting reconciliation and E&P balance tracking',
      'Form 8992 GILTI calculation and Section 962 individual election'
    ],
    processSteps: [
      { step: 1, title: 'Financial Translation', description: 'Convert local income statement and balance sheet into US GAAP basis.' },
      { step: 2, title: 'GILTI & Subpart F Testing', description: 'Test for active vs. passive income inclusions and foreign tax credit pooling.' },
      { step: 3, title: 'Shareholder Return Integration', description: 'Attach to shareholder 1040 and submit electronically.' }
    ],
    relatedFormNumbers: ['5471', '8992', '1040'],
    pricingRange: 'From $1,450 USD / Entity',
    turnaroundTime: '2 Weeks'
  },
  {
    slug: 'pfic-remedies-8621',
    title: 'PFIC Portfolio Diagnostics & Form 8621',
    category: 'Private Client & Investments',
    tagline: 'Neutralize punitive Section 1291 excess distribution taxation on foreign funds.',
    summary: 'Non-US mutual funds, OEICs, unit trusts, and foreign ETFs are treated as Passive Foreign Investment Companies (PFICs) by the IRS. We implement QEF and Mark-to-Market elections to avert catastrophic penal interest.',
    heroImage: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80',
    whoNeedsThis: [
      'Expats who invested in local bank mutual funds or index funds abroad',
      'Holders of European UCITS, UK unit trusts, or Australian managed funds',
      'Investors facing unexpected 50%+ penal tax on fund distributions'
    ],
    keyDeliverables: [
      'Form 8621 per individual foreign fund',
      'QEF (Qualified Electing Fund) election or Mark-to-Market calculation',
      'Portfolio cleanup advice for future US tax-efficient index fund investing'
    ],
    processSteps: [
      { step: 1, title: 'Fund Audit', description: 'Diagnose non-US pooled investment holdings across all foreign accounts.' },
      { step: 2, title: 'Election Modeling', description: 'Compare Section 1291 default vs. MTM election to minimize tax drag.' },
      { step: 3, title: 'Form 8621 Attachment', description: 'Attach specialized schedules to annual 1040.' }
    ],
    relatedFormNumbers: ['8621', '1040', '8938'],
    pricingRange: 'From $250 USD / Fund',
    turnaroundTime: '5–7 Business Days'
  },
  {
    slug: 'foreign-trust-reporting',
    title: 'Foreign Trust Compliance (Form 3520 / 3520-A)',
    category: 'Private Client & Investments',
    tagline: 'Protect cross-border family trusts and foreign inheritances from 35% penalties.',
    summary: 'Foreign grantor and non-grantor trusts require surgical reporting. We prepare Form 3520 and 3520-A to protect family assets and ensure foreign inheritances are properly documented without tax friction.',
    heroImage: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
    whoNeedsThis: [
      'Beneficiaries or settlors of foreign family trusts',
      'Expats receiving foreign gifts or inheritances exceeding $100,000 USD',
      'Holders of foreign retirement vehicles classified as foreign trusts'
    ],
    keyDeliverables: [
      'Form 3520 (Due April 15 / October 15)',
      'Form 3520-A Foreign Grantor Trust Annual Information Return',
      'Foreign Non-Grantor Trust Beneficiary Statements'
    ],
    processSteps: [
      { step: 1, title: 'Trust Deed Review', description: 'Classify grantor vs. non-grantor and evaluate distribution accounting.' },
      { step: 2, title: 'DNI / UNI Calculation', description: 'Calculate distributable net income and prevent throwback penal interest.' },
      { step: 3, title: 'Separate Filing', description: 'Submit directly to IRS Ogden Service Center with certified mail tracking.' }
    ],
    relatedFormNumbers: ['3520', '3520-A'],
    pricingRange: 'From $850 USD',
    turnaroundTime: '10–14 Business Days'
  }
];

export function getServiceBySlug(slug: string): DetailedService {
  const found = SERVICES_CATALOG.find(s => s.slug === slug);
  if (found) return found;

  // Fallback for any secondary slug
  const titleFormatted = slug
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return {
    slug,
    title: titleFormatted,
    category: 'Specialized Expat Advisory',
    tagline: 'Expert cross-border tax compliance and strategy for Americans abroad.',
    summary: `Comprehensive CPA advisory and preparation service for ${titleFormatted}. We ensure full compliance with IRS cross-border provisions while minimizing tax liability and eliminating late-filing fines.`,
    heroImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
    whoNeedsThis: [
      'US citizens and Green Card holders residing outside the United States',
      'Taxpayers requiring specialized cross-border schedules and treaty disclosures',
      'Clients seeking fixed-fee, CPA-signed filings'
    ],
    keyDeliverables: [
      `Form preparation and cross-border schedules for ${titleFormatted}`,
      'Currency translation and statutory exemption optimization',
      'Direct CPA review, signature, and IRS electronic transmission receipt'
    ],
    processSteps: [
      { step: 1, title: 'Secure Document Intake', description: 'Upload statements and records to your 256-bit encrypted client portal.' },
      { step: 2, title: 'CPA Preparation & Review', description: 'A licensed US CPA drafts the returns and cross-border schedules.' },
      { step: 3, title: 'Electronic Submission', description: 'You review, approve, and we transmit directly to the IRS with tracking.' }
    ],
    relatedFormNumbers: ['1040', 'FinCEN 114'],
    pricingRange: 'Custom Fixed Quote',
    turnaroundTime: '5–10 Business Days'
  };
}
