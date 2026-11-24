export interface Division {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  imageUrl: string;
  whoIsThisFor: string[];
  keyServices: { slug: string; title: string; desc: string }[];
  commonForms: { formNumber: string; name: string }[];
  urgentNotice?: string;
  benefits: string[];
}

export interface Service {
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  whoNeedsThis: string[];
  processSteps: { step: number; title: string; description: string }[];
  relatedForms: { formNumber: string; name: string; slug: string }[];
  relatedDivisions: { slug: string; name: string }[];
  faqs: { question: string; answer: string }[];
  pricingHint: string;
}

export interface TaxForm {
  formNumber: string;
  slug: string;
  name: string;
  category: string;
  summary: string;
  filingThreshold: string;
  dueDate: string;
  extensionsAvailable: string;
  penalties: string;
  penaltySeverity: 'critical' | 'high' | 'moderate';
  relatedServiceSlug: string;
  relatedServiceName: string;
  applicableYears: string;
  keyInstructions: string[];
  imageUrl?: string;
}

export interface CountryGuide {
  slug: string;
  countryName: string;
  countryCode: string;
  flagEmoji: string;
  region: string;
  imageUrl: string;
  treatyStatus: string;
  treatySummary: string;
  pensionTreatment: string;
  pficTraps: string;
  localTaxYear: string;
  usVsLocalDeadlines: { event: string; localDate: string; usDate: string }[];
  totalizationAgreement: boolean;
  commonPitfalls: string[];
}

export const DIVISIONS: Division[] = [
  {
    slug: 'accidental-americans',
    title: 'Accidental Americans & Catch-Up Filers',
    tagline: 'Get 100% compliant without paying crippling late penalties through IRS Amnesty.',
    description: 'Born in the US or to American parents abroad? Discovering your US tax filing obligations late is stressful, but the IRS offers special penalty-free amnesty procedures if you act proactively.',
    imageUrl: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80',
    whoIsThisFor: [
      'Individuals born in the US who left as young children',
      'Dual citizens who were unaware of US citizenship-based taxation',
      'Expats who haven’t filed in 3, 5, or 10+ years',
      'Filers facing local foreign bank FATCA letters demanding US TIN/SSN'
    ],
    keyServices: [
      { slug: 'streamlined-foreign-offshore', title: 'Streamlined Foreign Offshore Procedures (SFOP)', desc: 'File 3 years of 1040s and 6 years of FBARs with 0% failure-to-file penalties.' },
      { slug: 'delinquent-fbar-submission', title: 'Delinquent FBAR Submission Procedures', desc: 'Catch up on missed foreign bank account disclosures where all income was reported.' },
      { slug: 'ssn-cln-assistance', title: 'SSN & Certificate of Loss of Nationality Advisory', desc: 'Assistance obtaining an SSN or properly executing lawful US expatriation.' }
    ],
    commonForms: [
      { formNumber: '1040', name: 'US Individual Income Tax Return' },
      { formNumber: 'FinCEN 114', name: 'Report of Foreign Bank and Financial Accounts (FBAR)' },
      { formNumber: 'Form 14653', name: 'Certification by US Person Residing Outside the US' },
      { formNumber: 'Form 8938', name: 'Statement of Specified Foreign Financial Assets (FATCA)' }
    ],
    urgentNotice: 'The IRS Streamlined Procedure is an amnesty program that can be modified or terminated at any time. Non-willful certification is required.',
    benefits: [
      'Complete amnesty from 5% to 25% failure-to-file and failure-to-pay penalties',
      'Elimination of devastating $10,000+ per-year non-willful FBAR fines',
      'Full protection against IRS passport revocation (IRC § 7345)',
      'Direct filing by Licensed CPAs and IRS Enrolled Agents'
    ]
  },
  {
    slug: 'individuals-families',
    title: 'Expat Individuals & Families',
    tagline: 'Maximize the Foreign Earned Income Exclusion and Foreign Tax Credits to eliminate double taxation.',
    description: 'Living and working overseas shouldn’t mean paying double tax. We optimize Form 2555 (FEIE) vs. Form 1116 (FTC) to legally minimize or completely zero out your US tax bill.',
    imageUrl: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80',
    whoIsThisFor: [
      'US citizens and Green Card holders employed by foreign or multinational employers',
      'Digital nomads and remote workers traveling globally',
      'Expat families with dual-citizen children (claiming the Child Tax Credit refund)',
      'Cross-border married couples (US citizen married to Non-Resident Alien)'
    ],
    keyServices: [
      { slug: 'annual-expat-1040', title: 'Annual Expat 1040 Preparation', desc: 'Specialized cross-border 1040 filing including FEIE, housing exclusion, and FTC.' },
      { slug: 'fbar-fatca-reporting', title: 'FBAR & FATCA Compliance', desc: 'Thorough disclosure of all foreign pensions, bank accounts, and investment portfolios.' },
      { slug: 'child-tax-credit-expats', title: 'Additional Child Tax Credit (ACTC) Maximization', desc: 'Claim up to $1,700+ per qualifying child in cash refunds even while living abroad.' }
    ],
    commonForms: [
      { formNumber: 'Form 1040', name: 'US Individual Income Tax Return' },
      { formNumber: 'Form 2555', name: 'Foreign Earned Income Exclusion' },
      { formNumber: 'Form 1116', name: 'Foreign Tax Credit' },
      { formNumber: 'FinCEN 114', name: 'FBAR Bank Account Report' }
    ],
    benefits: [
      'FEIE indexed to $126,500+ tax-free foreign wage protection',
      'Foreign Tax Credit carryforward advisory for high-tax countries',
      'Specialist filing for non-resident alien spouses (MFS vs. 6013(g) election)'
    ]
  },
  {
    slug: 'business-owners',
    title: 'Business Owners & Entrepreneurs Abroad',
    tagline: 'Navigate complex CFC regulations, GILTI, Subpart F, and foreign company disclosures.',
    description: 'Owning a corporation, Ltd, GmbH, Pty Ltd, or SARL outside the US triggers severe reporting under the Tax Cuts and Jobs Act. We handle Form 5471, 8865, and GILTI calculations safely.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    whoIsThisFor: [
      'Expats who incorporated an overseas entity (UK Ltd, Canadian Corp, EU SARL/GmbH)',
      'Consultants operating through foreign personal service companies',
      'Partners in foreign partnerships or joint ventures',
      'Founders raising capital or holding foreign equity'
    ],
    keyServices: [
      { slug: 'form-5471-cfc-reporting', title: 'Form 5471 & Controlled Foreign Corporation (CFC)', desc: 'Full corporate balance sheet translation, E&P tracking, and Category 1-5 compliance.' },
      { slug: 'gilti-subpart-f-planning', title: 'GILTI & Section 962 Election Advisory', desc: 'Mitigate the 21% GILTI rate using Section 962 individual corporate rate parity.' },
      { slug: 'foreign-disregarded-entities', title: 'Form 8858 for Foreign Disregarded Entities', desc: 'Simplified pass-through reporting for single-member foreign structures.' }
    ],
    commonForms: [
      { formNumber: 'Form 5471', name: 'Information Return of U.S. Persons With Respect to Certain Foreign Corporations' },
      { formNumber: 'Form 8992', name: 'U.S. Shareholder Calculation of Global Intangible Low-Taxed Income (GILTI)' },
      { formNumber: 'Form 8865', name: 'Return of U.S. Persons With Respect to Certain Foreign Partnerships' },
      { formNumber: 'Form 8858', name: 'Information Return of U.S. Persons With Respect to Foreign Disregarded Entities' }
    ],
    benefits: [
      'Prevention of automatic $10,000 late-filing fines per Form 5471',
      'Strategic corporate year-end planning and salary vs. dividend optimization',
      'GAAP to US Tax basis conversions'
    ]
  },
  {
    slug: 'green-card-holders',
    title: 'Green Card Holders Living Abroad',
    tagline: 'Understand your ongoing US tax duties or prepare a clean, tax-compliant expatriation.',
    description: 'Permanent residents remain subject to worldwide US taxation until their green card is officially surrendered via Form I-407. We manage continuing compliance and the Section 877A Exit Tax.',
    imageUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80',
    whoIsThisFor: [
      'Lawful Permanent Residents (LPRs) living outside the US indefinitely',
      'Long-Term Residents (held Green Card in 8 of the last 15 years)',
      'Individuals planning to file USCIS Form I-407 to surrender their status',
      'Holders filing treaty tie-breaker positions on Form 8833'
    ],
    keyServices: [
      { slug: 'green-card-surrender-planning', title: 'Form I-407 Tax Exit Planning', desc: 'Avoid becoming a Covered Expatriate subject to deemed asset sale exit tax.' },
      { slug: 'form-8854-initial-expatriation', title: 'Form 8854 Expatriation Statement', desc: '5-year tax compliance certification and net worth threshold calculation.' },
      { slug: 'treaty-tie-breaker-returns', title: 'Treaty Tie-Breaker (Form 8833)', desc: 'Electing non-resident alien tax status under bilateral income tax treaties.' }
    ],
    commonForms: [
      { formNumber: 'Form 8854', name: 'Initial and Annual Expatriation Statement' },
      { formNumber: 'Form 8833', name: 'Treaty-Based Return Position Disclosure' },
      { formNumber: 'Form 1040-NR', name: 'U.S. Nonresident Alien Income Tax Return' }
    ],
    benefits: [
      'Clear determination of "Covered Expatriate" risk before surrendering card',
      'Audit-proof 5-year clean compliance certification',
      'Prevention of 30% withholding on US source pensions'
    ]
  },
  {
    slug: 'moving-and-returning',
    title: 'Moving Abroad & Returning Filers',
    tagline: 'Ensure a smooth transition year with Dual-Status returns and state residency termination.',
    description: 'Transition years are the most vulnerable to costly mistakes. Moving abroad requires breaking state tax ties (especially California, New York, Virginia), while returning requires foreign asset re-alignment.',
    imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    whoIsThisFor: [
      'Americans moving abroad mid-year for an expat assignment',
      'Returning expats repatriating foreign savings and pensions back to the US',
      'Residents moving from "sticky" state tax jurisdictions (CA FTB, NY DTF)',
      'Pre-departure tax planning and relocation consultation'
    ],
    keyServices: [
      { slug: 'dual-status-returns', title: 'Dual-Status Tax Returns', desc: 'Filing part-year resident and part-year nonresident returns with combined statements.' },
      { slug: 'state-tax-exit-planning', title: 'State Tax Domicile Termination', desc: 'Severing domicile ties to avoid unexpected continuing state income taxation.' },
      { slug: 'foreign-pension-repatriation', title: 'Foreign Asset & Pension Transfer Advisory', desc: 'Tax-efficient liquidation and US rollovers without triggering penalty events.' }
    ],
    commonForms: [
      { formNumber: 'Form 1040 / 1040-NR', name: 'Dual Status Statement & Return' },
      { formNumber: 'State Form 540NR / IT-203', name: 'Part-Year Resident State Returns' }
    ],
    benefits: [
      'Complete defense against California Franchise Tax Board residency audits',
      'Moving expense deduction coordination under applicable bilateral treaties',
      'Foreign currency gain/loss calculation on home sales'
    ]
  },
  {
    slug: 'private-client',
    title: 'Private Client & Foreign Trusts',
    tagline: 'Sophisticated compliance for foreign family trusts, high-net-worth cross-border estates, and gifts.',
    description: 'Foreign inheritances, family foundations, foreign grantor trusts, and offshore investment accounts demand surgical precision to avoid 35% punitive withholding and draconian reporting penalties.',
    imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    whoIsThisFor: [
      'Beneficiaries or grantors of foreign trusts (Form 3520 / 3520-A)',
      'Expats receiving foreign inheritances or gifts exceeding $100,000',
      'High-Net-Worth individuals holding complex international portfolios',
      'Individuals with Passive Foreign Investment Companies (PFICs)'
    ],
    keyServices: [
      { slug: 'foreign-trust-reporting', title: 'Form 3520 & 3520-A Foreign Trust Compliance', desc: 'Handling both grantor and non-grantor foreign trust accounting and distributions.' },
      { slug: 'foreign-inheritance-gifts', title: 'Form 3520 Foreign Gift & Inheritance Reporting', desc: 'Reporting gifts from non-US persons without triggering US income taxes.' },
      { slug: 'pfic-remedies-8621', title: 'PFIC Portfolio Diagnostics & Form 8621', desc: 'QEF and Mark-to-Market elections to avert Section 1291 excess distribution penal rates.' }
    ],
    commonForms: [
      { formNumber: 'Form 3520', name: 'Annual Return To Report Transactions With Foreign Trusts and Receipt of Certain Foreign Gifts' },
      { formNumber: 'Form 3520-A', name: 'Annual Information Return of Foreign Trust With a U.S. Owner' },
      { formNumber: 'Form 8621', name: 'Information Return for a Passive Foreign Investment Company (PFIC)' },
      { formNumber: 'Form 706-NA', name: 'United States Estate Tax Return for Nonresident Not a Citizen' }
    ],
    benefits: [
      'Aversion of 35% gross asset trust failure-to-file penalties',
      'Defense against $10,000 or 5% per month foreign gift penalties',
      'Coordination with international estate planning attorneys'
    ]
  }
];

export const FORMS_DATABASE: TaxForm[] = [
  {
    formNumber: '1040',
    slug: 'form-1040-expat',
    name: 'U.S. Individual Income Tax Return (Expat Schedule)',
    category: 'Core Return & Filing',
    summary: 'The standard US income tax return, customized for Americans living abroad with attached foreign schedules, foreign currency conversions, and exclusions.',
    filingThreshold: 'Standard deduction threshold ($14,600 Single, $29,200 Married Filing Jointly for 2024/2025) or $5 for married filing separately.',
    dueDate: 'June 15 (automatic 2-month expat extension) or April 15 (if tax is owed to avoid interest).',
    extensionsAvailable: 'October 15 via Form 4868, with optional extension to December 15 for expats abroad.',
    penalties: '5% per month failure to file up to 25%, plus failure to pay interest compounding daily.',
    penaltySeverity: 'high',
    relatedServiceSlug: 'annual-expat-1040',
    relatedServiceName: 'Annual Expat 1040 Preparation',
    applicableYears: 'All Tax Years (2020–2025+)',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    keyInstructions: [
      'Report all worldwide income converted to USD using official IRS yearly average exchange rates.',
      'Must attach Form 2555 or Form 1116 to claim double-tax relief.',
      'All expats residing outside the US on April 15 receive an automatic filing extension to June 15.'
    ]
  },
  {
    formNumber: 'FinCEN 114',
    slug: 'fincen-form-114-fbar',
    name: 'Report of Foreign Bank and Financial Accounts (FBAR)',
    category: 'Foreign Accounts & Assets',
    summary: 'An electronic report submitted to the US Treasury Department disclosing all foreign financial accounts if aggregate balances exceeded $10,000 at any point during the calendar year.',
    filingThreshold: 'Aggregate total of all non-US accounts exceeded $10,000 USD at any point during the year (even for one day).',
    dueDate: 'April 15 (with an automatic extension to October 15 with no request needed).',
    extensionsAvailable: 'Automatic extension to October 15 annually.',
    penalties: '$10,000+ per non-willful violation (inflation adjusted to over $16,000); 50% of account balance or $100,000 for willful non-filing, plus criminal charges.',
    penaltySeverity: 'critical',
    relatedServiceSlug: 'fbar-fatca-reporting',
    relatedServiceName: 'FBAR & FATCA Compliance',
    applicableYears: 'Annual ongoing requirement',
    imageUrl: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&w=800&q=80',
    keyInstructions: [
      'Includes checking, savings, investment accounts, foreign mutual funds, and signature authority accounts.',
      'Includes foreign employer retirement accounts (e.g., UK SIPPs, Australian super, Canadian RRSP/TFSA).',
      'Filed directly through BSA E-Filing System, not attached to Form 1040.'
    ]
  },
  {
    formNumber: '8938',
    slug: 'form-8938-fatca',
    name: 'Statement of Specified Foreign Financial Assets (FATCA)',
    category: 'Foreign Accounts & Assets',
    summary: 'Attached to Form 1040 to report specified foreign financial assets under the Foreign Account Tax Compliance Act (FATCA). Operates alongside, but distinct from, FBAR.',
    filingThreshold: '$200,000 at year-end or $300,000 at any point for single filers living abroad ($400,000/$600,000 for married joint filers abroad).',
    dueDate: 'Due with Form 1040 (June 15 for expats, or October 15 on extension).',
    extensionsAvailable: 'Follows Form 1040 extensions (October 15 / December 15).',
    penalties: '$10,000 failure-to-file penalty, plus additional $10,000 for each 30 days of continuing failure up to $60,000 maximum, plus 40% understatement penalty.',
    penaltySeverity: 'critical',
    relatedServiceSlug: 'fbar-fatca-reporting',
    relatedServiceName: 'FBAR & FATCA Compliance',
    applicableYears: 'Tax Year 2011 onward',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    keyInstructions: [
      'Higher thresholds apply to expats living abroad compared to domestic US residents.',
      'Reports foreign stocks, foreign pensions, ownership interests in foreign companies, and contracts.'
    ]
  },
  {
    formNumber: '2555',
    slug: 'form-2555-feie',
    name: 'Foreign Earned Income Exclusion (FEIE)',
    category: 'Foreign Income & Credits',
    summary: 'Allows qualifying US expats to exclude up to $126,500 (2024/2025 indexed) of foreign earned wages or self-employment income from US federal income taxation.',
    filingThreshold: 'Any expat claiming the exclusion who passes either the Physical Presence Test (330 full days abroad in 12 months) or Bona Fide Residence Test.',
    dueDate: 'Attached to Form 1040 (June 15 or October 15 extension).',
    extensionsAvailable: 'Form 2350 for filers needing additional time to qualify for Bona Fide Residence or Physical Presence.',
    penalties: 'Loss of exclusion if not timely elected within IRS procedural deadlines.',
    penaltySeverity: 'moderate',
    relatedServiceSlug: 'annual-expat-1040',
    relatedServiceName: 'Annual Expat 1040 Preparation',
    applicableYears: 'Annual adjustment',
    imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    keyInstructions: [
      'Only excludes earned income (wages, bonuses, professional fees); cannot exclude passive income (dividends, capital gains, pensions).',
      'Includes Foreign Housing Exclusion / Deduction for expenses above the statutory base.'
    ]
  },
  {
    formNumber: '1116',
    slug: 'form-1116-ftc',
    name: 'Foreign Tax Credit (Individual, Estate, or Trust)',
    category: 'Foreign Income & Credits',
    summary: 'Claims dollar-for-dollar tax credits for income taxes paid to a foreign government, neutralizing double taxation especially for expats in high-tax countries.',
    filingThreshold: 'Expats who paid or accrued foreign income taxes on foreign-source income.',
    dueDate: 'Filed with Form 1040.',
    extensionsAvailable: 'Follows Form 1040 extensions.',
    penalties: 'Loss or audit disallowance of credits if foreign taxes cannot be verified with local notices of assessment.',
    penaltySeverity: 'moderate',
    relatedServiceSlug: 'annual-expat-1040',
    relatedServiceName: 'Annual Expat 1040 Preparation',
    applicableYears: 'All tax years',
    imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    keyInstructions: [
      'Taxes must be categorized into passive category, general category, or foreign branch baskets.',
      'Unused foreign tax credits can be carried back 1 year and carried forward up to 10 years.'
    ]
  },
  {
    formNumber: '5471',
    slug: 'form-5471-foreign-corporation',
    name: 'Information Return of U.S. Persons With Respect to Certain Foreign Corporations',
    category: 'Foreign Entities',
    summary: 'The infamous corporate informational return required of US officers, directors, and shareholders in foreign corporations (CFCs).',
    filingThreshold: 'US persons who acquire 10%+ ownership in a foreign corporation, or control a Controlled Foreign Corporation (CFC).',
    dueDate: 'Filed with the shareholder’s Form 1040 (June 15 / October 15).',
    extensionsAvailable: 'Follows Form 1040 extension.',
    penalties: 'Automatic $10,000 fine per year per foreign corporation, plus up to $50,000 in continuation penalties and loss of 10% foreign tax credit eligibility.',
    penaltySeverity: 'critical',
    relatedServiceSlug: 'form-5471-cfc-reporting',
    relatedServiceName: 'Form 5471 & CFC Compliance',
    applicableYears: 'All tax years',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    keyInstructions: [
      'Requires complete income statement and balance sheet translated from local accounting standards into US GAAP.',
      'Triggers calculation of GILTI (Global Intangible Low-Taxed Income) and Subpart F inclusions.'
    ]
  },
  {
    formNumber: '8621',
    slug: 'form-8621-pfic',
    name: 'Information Return by a Shareholder of a PFIC or QEF',
    category: 'Foreign Accounts & Assets',
    summary: 'Filed by US persons holding shares in Passive Foreign Investment Companies, including almost all non-US mutual funds, ETFs, unit trusts, and OEICs.',
    filingThreshold: 'Holding any interest in a foreign pooled investment vehicle where 75%+ of gross income is passive or 50%+ of assets produce passive income ($25,000 single / $50,000 joint aggregate threshold).',
    dueDate: 'Attached to Form 1040.',
    extensionsAvailable: 'Follows Form 1040 extension.',
    penalties: 'Leaves the entire Form 1040 statute of limitations open indefinitely until filed. Excess distributions taxed at highest statutory rate plus punitive interest.',
    penaltySeverity: 'critical',
    relatedServiceSlug: 'pfic-remedies-8621',
    relatedServiceName: 'PFIC Diagnostics & Form 8621',
    applicableYears: 'All active investment years',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
    keyInstructions: [
      'Most common expat trap: buying a local bank mutual fund or index fund in the UK, EU, or Australia.',
      'Requires election: Default Section 1291 (punitive), Mark-to-Market (MTM), or Qualified Electing Fund (QEF).'
    ]
  },
  {
    formNumber: '3520',
    slug: 'form-3520-foreign-trust-gift',
    name: 'Annual Return To Report Transactions With Foreign Trusts and Receipt of Certain Foreign Gifts',
    category: 'Trusts/Gifts/Estates',
    summary: 'Informational return reporting creation of foreign trusts, distributions from foreign trusts, or receipt of large gifts/inheritances from non-US persons.',
    filingThreshold: 'Gifts from non-resident aliens exceeding $100,000, or any transfer to/distribution from a foreign trust.',
    dueDate: 'April 15 (or October 15 with extension; separate filing to Ogden IRS Service Center).',
    extensionsAvailable: 'Follows extension filed under Form 4868.',
    penalties: 'The greater of $10,000 or 35% of the gross value of the trust transfer or 5% per month (up to 25%) for non-disclosed gifts.',
    penaltySeverity: 'critical',
    relatedServiceSlug: 'foreign-trust-reporting',
    relatedServiceName: 'Form 3520 Foreign Trust & Gift Compliance',
    applicableYears: 'All transaction years',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    keyInstructions: [
      'Gifts are not subject to US income tax, but strict failure-to-report penalties apply.',
      'Must be filed separately from Form 1040 to the IRS Ogden Center.'
    ]
  }
];

export const COUNTRIES_DATABASE: CountryGuide[] = [
  {
    slug: 'united-kingdom',
    countryName: 'United Kingdom',
    countryCode: 'GB',
    flagEmoji: '🇬🇧',
    region: 'Europe',
    imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
    treatyStatus: 'Active US-UK Double Taxation Treaty (2001/2003)',
    treatySummary: 'The US-UK Income Tax Treaty contains robust protections for pensions (Article 18) and a "saving clause" with specific exceptions. US citizens resident in the UK are taxed on UK-source income by HMRC first, then claim Foreign Tax Credits on Form 1116.',
    pensionTreatment: 'UK SIPPs (Self-Invested Personal Pensions) and workplace pensions qualify for treaty protection under Article 18, meaning employer contributions and growth are not taxable until distributed. Caution: UK ISAs (Individual Savings Accounts) are NOT recognized by the IRS as tax-exempt and must be reported with their underlying investments as PFICs or foreign income.',
    pficTraps: 'UK OEICs, Unit Trusts, and UK-domiciled ETFs (even those tracking the S&P 500) are classified by the IRS as PFICs under Form 8621, incurring punitive Section 1291 taxation.',
    localTaxYear: 'April 6 to April 5 (mismatches US calendar year January 1 to December 31).',
    usVsLocalDeadlines: [
      { event: 'US Tax Filing Deadline (Expats)', localDate: 'N/A', usDate: 'June 15 (auto expat extension)' },
      { event: 'UK HMRC Online Filing Deadline', localDate: 'January 31 following tax year', usDate: 'N/A' },
      { event: 'US FBAR FinCEN 114 Deadline', localDate: 'N/A', usDate: 'April 15 (auto Oct 15)' },
      { event: 'UK HMRC Paper Filing Deadline', localDate: 'October 31', usDate: 'N/A' }
    ],
    totalizationAgreement: true,
    commonPitfalls: [
      'UK ISA accounts are fully taxable in the US',
      'Tax year mismatch (April 6 to April 5 vs. calendar year) requires splitting P60 earnings',
      'UK Capital Gains Tax (CGT) annual exempt amount is not recognized by the US'
    ]
  },
  {
    slug: 'canada',
    countryName: 'Canada',
    countryCode: 'CA',
    flagEmoji: '🇨🇦',
    region: 'Americas',
    imageUrl: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80',
    treatyStatus: 'Active US-Canada Income Tax Treaty (with 5th Protocol)',
    treatySummary: 'The US-Canada tax treaty is one of the most comprehensive cross-border treaties in existence. It provides reciprocal recognition for RRSPs/RRIFs and coordinates social security benefits.',
    pensionTreatment: 'Canadian RRSPs and RRIFs automatically qualify for tax deferral without filing Form 8891. Warning: TFSAs (Tax-Free Savings Accounts) and RESPs are NOT tax-deferred in the US. TFSAs generate annual taxable income and may require Form 3520/3520-A reporting.',
    pficTraps: 'Canadian mutual funds and Canadian-listed ETFs held outside an RRSP/RRIF are PFICs subject to Form 8621.',
    localTaxYear: 'January 1 to December 31 (aligned with US calendar year).',
    usVsLocalDeadlines: [
      { event: 'Canadian CRA Individual Tax Deadline', localDate: 'April 30 (June 15 for self-employed)', usDate: 'N/A' },
      { event: 'US Expat 1040 Deadline', localDate: 'N/A', usDate: 'June 15' },
      { event: 'US FBAR FinCEN 114', localDate: 'N/A', usDate: 'October 15 (with auto extension)' }
    ],
    totalizationAgreement: true,
    commonPitfalls: [
      'Holding mutual funds inside a Canadian TFSA triggers double headache: PFIC + TFSA taxable in US',
      'Principal Residence Exemption: Canada gives unlimited tax-free home gains, while US caps Section 121 at $250k/$500k',
      'Canadian departure tax when leaving Canada'
    ]
  },
  {
    slug: 'australia',
    countryName: 'Australia',
    countryCode: 'AU',
    flagEmoji: '🇦🇺',
    region: 'Asia-Pacific',
    imageUrl: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80',
    treatyStatus: 'Active US-Australia Double Tax Agreement',
    treatySummary: 'Coordinates taxation of wages and pensions, but has specific friction points regarding Australian Superannuation funds.',
    pensionTreatment: 'Australian Superannuation: Highly complex treatment. The IRS views Super as either a foreign grantor trust (Form 3520/3520-A), an employee benefit trust under IRC § 402(b), or foreign social security. Employer contributions and earnings may be taxable currently.',
    pficTraps: 'Australian Unit Trusts, Managed Funds, and ASX-listed ETFs are treated as PFICs on Form 8621.',
    localTaxYear: 'July 1 to June 30 (offset by 6 months from US calendar year).',
    usVsLocalDeadlines: [
      { event: 'Australian ATO Individual Deadline', localDate: 'October 31 (later with registered tax agent)', usDate: 'N/A' },
      { event: 'US Expat 1040 Deadline', localDate: 'N/A', usDate: 'June 15' },
      { event: 'US FBAR FinCEN 114', localDate: 'N/A', usDate: 'October 15' }
    ],
    totalizationAgreement: true,
    commonPitfalls: [
      'Six-month tax year offset requires careful wage allocation between two US tax years',
      'Self-Managed Super Funds (SMSFs) trigger extensive foreign trust reporting',
      'Franking credits (dividend imputation) are NOT recognized as creditable taxes by the IRS'
    ]
  },
  {
    slug: 'germany',
    countryName: 'Germany',
    countryCode: 'DE',
    flagEmoji: '🇩🇪',
    region: 'Europe',
    imageUrl: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80',
    treatyStatus: 'Active US-Germany Double Taxation Convention',
    treatySummary: 'Coordinates heavy German progressive income tax against US rates. High German tax rates generally mean excess Foreign Tax Credits on Form 1116 rather than FEIE.',
    pensionTreatment: 'German statutory pension (Deutsche Rentenversicherung) is governed by Article 18A. Riester and Rürup pension plans require careful review; employer contributions may be taxable in the US.',
    pficTraps: 'German and European UCITS investment funds are PFICs under US rules. The German Vorabpauschale (lump-sum advance tax) creates complex timing mismatches.',
    localTaxYear: 'January 1 to December 31 (aligned with US calendar year).',
    usVsLocalDeadlines: [
      { event: 'German Finanzamt Tax Return', localDate: 'July 31 (or following year if using Steuerberater)', usDate: 'N/A' },
      { event: 'US Expat 1040 Deadline', localDate: 'N/A', usDate: 'June 15' },
      { event: 'US FBAR FinCEN 114', localDate: 'N/A', usDate: 'October 15' }
    ],
    totalizationAgreement: true,
    commonPitfalls: [
      'German Church Tax (Kirchensteuer) is not a creditable foreign income tax on Form 1116',
      'Solidarity surcharge (Solidaritätszuschlag) calculations',
      'GmbH managing-director ownership rules trigger Form 5471 Category 4/5'
    ]
  },
  {
    slug: 'singapore',
    countryName: 'Singapore',
    countryCode: 'SG',
    flagEmoji: '🇸🇬',
    region: 'Asia-Pacific',
    imageUrl: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80',
    treatyStatus: 'No Comprehensive Bilateral Income Tax Treaty',
    treatySummary: 'Because there is NO US-Singapore Income Tax Treaty, expats rely strictly on the Internal Revenue Code (FEIE Form 2555 and FTC Form 1116). Singapore imposes no capital gains tax, meaning investment gains are fully taxable by the US at standard US rates.',
    pensionTreatment: 'Singapore Central Provident Fund (CPF): Contributions by employers and employees are not tax-deferred in the US. CPF interest and earnings are taxable annually on Form 1040.',
    pficTraps: 'Singapore and Asian unit trusts are PFICs. Any Singapore-domiciled investment fund triggers Form 8621.',
    localTaxYear: 'January 1 to December 31 (calendar year).',
    usVsLocalDeadlines: [
      { event: 'Singapore IRAS Tax Filing', localDate: 'April 15 (paper) / April 18 (e-filing)', usDate: 'N/A' },
      { event: 'US Expat 1040 Deadline', localDate: 'N/A', usDate: 'June 15' },
      { event: 'US FBAR FinCEN 114', localDate: 'N/A', usDate: 'October 15' }
    ],
    totalizationAgreement: false,
    commonPitfalls: [
      'No Totalization Agreement: Self-employed US citizens in Singapore owe 15.3% US Self-Employment Tax (SECA)',
      'Zero Singapore capital gains tax means zero foreign tax credit to offset US capital gains tax',
      'CPF accounts must be reported on FBAR and FATCA Form 8938'
    ]
  },
  {
    slug: 'japan',
    countryName: 'Japan',
    countryCode: 'JP',
    flagEmoji: '🇯🇵',
    region: 'Asia-Pacific',
    imageUrl: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80',
    treatyStatus: 'Active US-Japan Income Tax Treaty',
    treatySummary: 'Broad protections for residents, coordinating Japan’s national income tax, local inhabitant tax, and social insurance schemes.',
    pensionTreatment: 'Japanese Nenkin (National Pension) and welfare pensions are coordinated under totalization. NISA (Nippon Individual Savings Account) and iDeCo are NOT tax-free in the US; NISA funds generally trigger PFIC rules.',
    pficTraps: 'Japanese investment trusts (Toushin) are PFICs on Form 8621.',
    localTaxYear: 'January 1 to December 31.',
    usVsLocalDeadlines: [
      { event: 'Japan National Tax Agency (NTA) Filing', localDate: 'March 15', usDate: 'N/A' },
      { event: 'US Expat 1040 Deadline', localDate: 'N/A', usDate: 'June 15' },
      { event: 'US FBAR FinCEN 114', localDate: 'N/A', usDate: 'October 15' }
    ],
    totalizationAgreement: true,
    commonPitfalls: [
      'Japanese Inhabitant Tax (Juminzei) is billed a year in arrears, causing foreign tax credit timing issues',
      'Severe Japanese gift and inheritance taxes apply even to foreign assets after 10 years of residency'
    ]
  },
  {
    slug: 'france',
    countryName: 'France',
    countryCode: 'FR',
    flagEmoji: '🇫🇷',
    region: 'Europe',
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
    treatyStatus: 'Active US-France Double Taxation Treaty',
    treatySummary: 'Article 24 grants substantial relief for US citizens living in France, shielding pensions and investment income from French double taxation while coordinating CSG/CRDS social levies.',
    pensionTreatment: 'French statutory state retirement (Retraite de Base and Agirc-Arrco) is coordinated under totalization. Warning: Assurance-Vie contracts are NOT tax-deferred in the US and are treated as PFICs or foreign grantor trusts.',
    pficTraps: 'French SICAVs and FCP funds held directly or inside Assurance-Vie trigger Form 8621 PFIC taxation.',
    localTaxYear: 'January 1 to December 31.',
    usVsLocalDeadlines: [
      { event: 'French Déclaration des Revenus', localDate: 'May / June (based on département)', usDate: 'N/A' },
      { event: 'US Expat 1040 Deadline', localDate: 'N/A', usDate: 'June 15' },
      { event: 'US FBAR FinCEN 114', localDate: 'N/A', usDate: 'October 15' }
    ],
    totalizationAgreement: true,
    commonPitfalls: [
      'French CSG and CRDS levies: historically contested for US Foreign Tax Credit eligibility',
      'Assurance-Vie accounts must be disclosed on FBAR, FATCA, and potentially Form 8621'
    ]
  },
  {
    slug: 'switzerland',
    countryName: 'Switzerland',
    countryCode: 'CH',
    flagEmoji: '🇨🇭',
    region: 'Europe',
    imageUrl: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
    treatyStatus: 'Active US-Switzerland Income Tax Convention',
    treatySummary: 'Coordinates federal, cantonal, and communal taxes against US liabilities. Includes reciprocal exchange of banking information.',
    pensionTreatment: 'Swiss Pillar 1 (AHV) and Pillar 2 (BVG / occupational) generally benefit from treaty deferral. Pillar 3a private pensions are complex and may require annual US tax reporting of earnings.',
    pficTraps: 'Swiss collective investment schemes and Swiss-domiciled investment funds trigger Form 8621 PFIC rules.',
    localTaxYear: 'January 1 to December 31.',
    usVsLocalDeadlines: [
      { event: 'Swiss Cantonal Return Deadline', localDate: 'March 31 (extensions commonly granted)', usDate: 'N/A' },
      { event: 'US Expat 1040 Deadline', localDate: 'N/A', usDate: 'June 15' },
      { event: 'US FBAR FinCEN 114', localDate: 'N/A', usDate: 'October 15' }
    ],
    totalizationAgreement: true,
    commonPitfalls: [
      'Swiss Cantonal wealth tax is not creditable against US income tax on Form 1116',
      'Pillar 2 capital withdrawal upon leaving Switzerland requires careful cross-border planning'
    ]
  },
  {
    slug: 'spain',
    countryName: 'Spain',
    countryCode: 'ES',
    flagEmoji: '🇪🇸',
    region: 'Europe',
    imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=800&q=80',
    treatyStatus: 'Active US-Spain Tax Treaty (Protocol 2019)',
    treatySummary: 'Coordinates Spanish IRPF personal income tax and US returns. The 2019 Protocol lowered withholding rates on dividends and interest.',
    pensionTreatment: 'Spanish planes de pensiones do not enjoy automatic US recognition; employer contributions and annual growth can create complex taxable events in the US.',
    pficTraps: 'Spanish Fondos de Inversión (investment funds) are PFICs subject to Form 8621.',
    localTaxYear: 'January 1 to December 31.',
    usVsLocalDeadlines: [
      { event: 'Spanish Declaración de la Renta', localDate: 'June 30', usDate: 'N/A' },
      { event: 'US Expat 1040 Deadline', localDate: 'N/A', usDate: 'June 15' },
      { event: 'US FBAR FinCEN 114', localDate: 'N/A', usDate: 'October 15' }
    ],
    totalizationAgreement: true,
    commonPitfalls: [
      'Spanish Wealth Tax (Impuesto sobre el Patrimonio) is not creditable on Form 1116',
      'Beckham Law special tax regime requires careful coordination with US non-resident return positions'
    ]
  },
  {
    slug: 'italy',
    countryName: 'Italy',
    countryCode: 'IT',
    flagEmoji: '🇮🇹',
    region: 'Europe',
    imageUrl: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=800&q=80',
    treatyStatus: 'Active US-Italy Double Taxation Treaty',
    treatySummary: 'Avoids double taxation on Italian IRPEF. Special substitute flat tax regimes (e.g. €100k lump sum) require surgical coordination.',
    pensionTreatment: 'INPS Italian state pensions are coordinated under totalization. Complementary pensions (Fondi Pensione) require individual analysis.',
    pficTraps: 'Italian and European UCITS investment funds are PFICs under IRS IRC § 1291-1298.',
    localTaxYear: 'January 1 to December 31.',
    usVsLocalDeadlines: [
      { event: 'Italian Modello Redditi Persone Fisiche', localDate: 'November 30 (electronic)', usDate: 'N/A' },
      { event: 'US Expat 1040 Deadline', localDate: 'N/A', usDate: 'June 15' },
      { event: 'US FBAR FinCEN 114', localDate: 'N/A', usDate: 'October 15' }
    ],
    totalizationAgreement: true,
    commonPitfalls: [
      'Italian IVAFE (foreign financial asset tax) and IVIE (foreign real estate tax) cannot offset US tax',
      'The 7% southern Italy pensioner regime requires careful analysis of US citizenship saving clause'
    ]
  },
  {
    slug: 'netherlands',
    countryName: 'Netherlands',
    countryCode: 'NL',
    flagEmoji: '🇳🇱',
    region: 'Europe',
    imageUrl: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=800&q=80',
    treatyStatus: 'Active US-Netherlands Double Taxation Convention',
    treatySummary: 'Coordinates Dutch Box 1, Box 2, and Box 3 taxation. Dutch 30% ruling recipients must coordinate deemed non-resident status with Form 1040.',
    pensionTreatment: 'Dutch pillar 2 company pensions generally enjoy tax deferral under treaty Article 19. Individual annuity policies must be scrutinized.',
    pficTraps: 'Dutch Beleggingsfondsen and European index funds are PFICs on Form 8621.',
    localTaxYear: 'January 1 to December 31.',
    usVsLocalDeadlines: [
      { event: 'Dutch Belastingdienst Inkomstenbelasting', localDate: 'May 1', usDate: 'N/A' },
      { event: 'US Expat 1040 Deadline', localDate: 'N/A', usDate: 'June 15' },
      { event: 'US FBAR FinCEN 114', localDate: 'N/A', usDate: 'October 15' }
    ],
    totalizationAgreement: true,
    commonPitfalls: [
      'Dutch Box 3 fictitious asset yield tax is difficult to credit against US capital gains taxes',
      'Holding foreign assets inside an uncertified Dutch BV triggers Form 5471'
    ]
  },
  {
    slug: 'ireland',
    countryName: 'Ireland',
    countryCode: 'IE',
    flagEmoji: '🇮🇪',
    region: 'Europe',
    imageUrl: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&w=800&q=80',
    treatyStatus: 'Active US-Ireland Double Taxation Convention',
    treatySummary: 'Provides reciprocal recognition of wages and pensions, coordinating Irish PAYE/USC against US federal returns.',
    pensionTreatment: 'Irish occupational pensions and PRSAs benefit from treaty coordination. Unapproved retirement funds (ARFs) require careful post-retirement monitoring.',
    pficTraps: 'Irish UCITS funds (Dublin is Europe’s largest fund hub) are quintessential PFICs for US citizens.',
    localTaxYear: 'January 1 to December 31.',
    usVsLocalDeadlines: [
      { event: 'Irish Revenue ROS Self-Assessment', localDate: 'October 31 / mid-November', usDate: 'N/A' },
      { event: 'US Expat 1040 Deadline', localDate: 'N/A', usDate: 'June 15' },
      { event: 'US FBAR FinCEN 114', localDate: 'N/A', usDate: 'October 15' }
    ],
    totalizationAgreement: true,
    commonPitfalls: [
      'Irish 41% exit tax on foreign funds mismatches US capital gains treatment',
      'Remittance basis taxpayers must maintain clean segregation of pre-arrival vs post-arrival capital'
    ]
  },
  {
    slug: 'new-zealand',
    countryName: 'New Zealand',
    countryCode: 'NZ',
    flagEmoji: '🇳🇿',
    region: 'Asia-Pacific',
    imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
    treatyStatus: 'Active US-New Zealand Double Tax Agreement',
    treatySummary: 'Coordinates New Zealand IRD income tax and US taxation. Operates with no capital gains tax on most long-term assets in NZ.',
    pensionTreatment: 'KiwiSaver: The IRS frequently classifies KiwiSaver as a foreign trust (Form 3520/3520-A) or an employee benefit trust. Employer contributions and annual earnings are taxable in the US.',
    pficTraps: 'NZ Portfolio Investment Entities (PIEs) and managed funds are PFICs under US rules.',
    localTaxYear: 'April 1 to March 31 (mismatches US calendar year).',
    usVsLocalDeadlines: [
      { event: 'NZ Inland Revenue (IRD) Filing', localDate: 'July 7 (later with tax agent)', usDate: 'N/A' },
      { event: 'US Expat 1040 Deadline', localDate: 'N/A', usDate: 'June 15' },
      { event: 'US FBAR FinCEN 114', localDate: 'N/A', usDate: 'October 15' }
    ],
    totalizationAgreement: false,
    commonPitfalls: [
      'No Totalization Agreement with NZ: Self-employed US citizens in NZ face US SECA self-employment tax',
      'NZ tax year offset (April 1 to March 31) requires pro-rating earnings across two US tax years'
    ]
  },
  {
    slug: 'hong-kong',
    countryName: 'Hong Kong',
    countryCode: 'HK',
    flagEmoji: '🇭🇰',
    region: 'Asia-Pacific',
    imageUrl: 'https://images.unsplash.com/photo-1506970845346-22b015392182?auto=format&fit=crop&w=800&q=80',
    treatyStatus: 'No Comprehensive US Bilateral Income Tax Treaty',
    treatySummary: 'Because there is no income tax treaty, expats rely entirely on statutory Internal Revenue Code relief (FEIE Form 2555 and FTC Form 1116). Hong Kong territorial tax rates are low, meaning FEIE is usually chosen over FTC.',
    pensionTreatment: 'Mandatory Provident Fund (MPF): MPF contributions and earnings are not tax-deferred in the US and must be declared annually on Form 1040 and FBAR.',
    pficTraps: 'Hong Kong mutual funds, MPF investment choices, and Asian unit trusts are PFICs on Form 8621.',
    localTaxYear: 'April 1 to March 31.',
    usVsLocalDeadlines: [
      { event: 'Hong Kong Inland Revenue (IRD) Filing', localDate: 'May / June', usDate: 'N/A' },
      { event: 'US Expat 1040 Deadline', localDate: 'N/A', usDate: 'June 15' },
      { event: 'US FBAR FinCEN 114', localDate: 'N/A', usDate: 'October 15' }
    ],
    totalizationAgreement: false,
    commonPitfalls: [
      'Low local salary tax rates result in minimal foreign tax credits, making FEIE crucial',
      'No capital gains tax in HK means capital gains are taxed at full US federal rates'
    ]
  },
  {
    slug: 'united-arab-emirates',
    countryName: 'UAE (Dubai)',
    countryCode: 'AE',
    flagEmoji: '🇦🇪',
    region: 'Middle East',
    imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    treatyStatus: 'No US Bilateral Income Tax Treaty',
    treatySummary: 'The UAE levies zero personal income tax. As a result, Americans in Dubai cannot claim Foreign Tax Credits on Form 1116 and must strictly qualify for the Foreign Earned Income Exclusion (FEIE Form 2555).',
    pensionTreatment: 'End of Service Gratuity (EOSB) is taxable as earned income in the year received by the US expat. Workplace savings schemes (DIFC DEWS) require annual disclosure.',
    pficTraps: 'Offshore investment bonds (e.g. Isle of Man, Luxembourg policies sold in Dubai) are severe PFIC and foreign trust traps.',
    localTaxYear: 'January 1 to December 31.',
    usVsLocalDeadlines: [
      { event: 'UAE Local Filing', localDate: 'N/A (No Personal Tax)', usDate: 'N/A' },
      { event: 'US Expat 1040 Deadline', localDate: 'N/A', usDate: 'June 15' },
      { event: 'US FBAR FinCEN 114', localDate: 'N/A', usDate: 'October 15' }
    ],
    totalizationAgreement: false,
    commonPitfalls: [
      'Failing the 330-day Physical Presence Test leaves 100% of Dubai wages exposed to US federal income tax',
      'UAE Free Zone corporate entities trigger Form 5471 / 8858 reporting'
    ]
  },
  {
    slug: 'mexico',
    countryName: 'Mexico',
    countryCode: 'MX',
    flagEmoji: '🇲🇽',
    region: 'Americas',
    imageUrl: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&w=800&q=80',
    treatyStatus: 'Active US-Mexico Income Tax Treaty',
    treatySummary: 'Coordinates Mexican SAT income taxation and US federal returns, offering protections against double taxation on cross-border business income.',
    pensionTreatment: 'Mexican AFORE retirement accounts are coordinated under bilateral agreements. Disclosures required on FBAR and FATCA Form 8938.',
    pficTraps: 'Mexican investment funds (Sociedades de Inversión) are PFICs subject to Form 8621.',
    localTaxYear: 'January 1 to December 31.',
    usVsLocalDeadlines: [
      { event: 'Mexican SAT Declaración Anual', localDate: 'April 30', usDate: 'N/A' },
      { event: 'US Expat 1040 Deadline', localDate: 'N/A', usDate: 'June 15' },
      { event: 'US FBAR FinCEN 114', localDate: 'N/A', usDate: 'October 15' }
    ],
    totalizationAgreement: false,
    commonPitfalls: [
      'Mexican Fideicomiso (bank trusts holding coastal real estate) requires strict evaluation to confirm whether Form 3520 is excused under IRS Rev. Proc. 2013-14',
      'Factura electronic invoice compliance for Mexican tax deductions'
    ]
  }
];

export const DEADLINES = [
  {
    date: 'April 15, 2026',
    title: 'Standard US Tax Day & FBAR Priority Date',
    description: 'Due date for taxpayers living in the US. Expats abroad receive an automatic extension to June 15 for 1040 filing, BUT any taxes owed will begin accruing interest from April 15. FBAR is due but enjoys an automatic extension to October 15.',
    appliesTo: 'All filers who owe US balance due',
    actionRequired: 'Pay estimated tax balance or file extension'
  },
  {
    date: 'June 15, 2026',
    title: 'Automatic Expat 2-Month 1040 Extension',
    description: 'Statutory deadline for US citizens and Green Card holders residing outside the United States and Puerto Rico on April 15 (Treas. Reg. § 1.6081-5).',
    appliesTo: 'US citizens & Green Card holders abroad',
    actionRequired: 'File Form 1040 or submit Form 4868 for extension to October 15'
  },
  {
    date: 'October 15, 2026',
    title: 'Extended 1040 & FBAR Automatic Deadline',
    description: 'Final date to file Form 1040 for filers who submitted Form 4868. Also the absolute final automatic extension deadline for FinCEN 114 (FBAR).',
    appliesTo: 'All filers on extension and all FBAR reporters',
    actionRequired: 'Submit Form 1040 with all schedules and file FinCEN 114 on BSA E-Filing'
  },
  {
    date: 'December 15, 2026',
    title: 'Discretionary Expat 2-Month Extension',
    description: 'Expats outside the US can write to the IRS requesting an additional two months beyond October 15 under IRC § 6081(a).',
    appliesTo: 'Expats needing extra time to meet physical presence requirements',
    actionRequired: 'Special written letter request submitted to IRS Austin Service Center'
  }
];

export const PRICING_TIERS = [
  {
    name: 'Essential Expat Compliance',
    price: '$595',
    cadence: 'per annual return',
    description: 'Ideal for US expats employed abroad with straightforward wages, FEIE or FTC claims, and standard foreign bank accounts.',
    features: [
      'Federal Form 1040 + Schedules 1, 2, 3',
      'Form 2555 (FEIE) or Form 1116 (FTC)',
      'FinCEN Form 114 (FBAR) for up to 5 foreign accounts',
      'Foreign currency exchange conversions',
      'IRS E-filing confirmation with tracking',
      'Direct CPA review and signature'
    ],
    popular: false,
    cta: 'Get Started'
  },
  {
    name: 'Streamlined Amnesty Catch-Up',
    price: '$2,450',
    cadence: 'flat package fee',
    description: 'For accidental Americans and expats multiple years behind who need complete penalty-free IRS amnesty certification.',
    features: [
      '3 Years of Delinquent Federal Form 1040s',
      '6 Years of Delinquent FBAR FinCEN 114 filings',
      'Form 14653 Non-Willful Certification narrative written & reviewed by CPA',
      'Foreign Tax Credit / FEIE retroactive optimization',
      'Full protection against 5%–25% failure-to-file penalties and $10,000 FBAR fines',
      'Dedicated Senior Tax Manager guidance throughout'
    ],
    popular: true,
    cta: 'Start Amnesty Review'
  },
  {
    name: 'International Business & Entity',
    price: '$1,450+',
    cadence: 'per entity / year',
    description: 'For foreign corporation owners (UK Ltd, Canadian Corp, EU GmbH, Pty Ltd) subject to Controlled Foreign Corporation (CFC) and GILTI rules.',
    features: [
      'Complete Form 5471 (Categories 1, 4, or 5)',
      'Local GAAP to US Tax Balance Sheet & P&L conversion',
      'GILTI Calculation (Form 8992) & Section 962 election analysis',
      'Subpart F Income testing & E&P tracking',
      'Foreign Disregarded Entity (Form 8858) compliance',
      'Quarterly cross-border dividend planning'
    ],
    popular: false,
    cta: 'Request Corporate Quote'
  }
];

export const GENERAL_FAQS = [
  {
    q: 'Do I still have to file US taxes if I pay local taxes in my country of residence?',
    a: 'Yes. The United States is one of only two countries that taxes based on citizenship, not residency. Even if you pay 40%+ tax locally in the UK, Germany, or Australia, you are required to submit an annual US Form 1040 if your worldwide income exceeds the standard deduction threshold. However, mechanisms like the Foreign Tax Credit (Form 1116) or Foreign Earned Income Exclusion (Form 2555) usually prevent double taxation.'
  },
  {
    q: 'What is the Streamlined Foreign Offshore Procedure (SFOP)?',
    a: 'SFOP is an IRS amnesty program for US citizens residing abroad who fell behind on their tax filings due to non-willful conduct (i.e., unawareness or misunderstanding). It allows you to become 100% compliant by filing 3 years of late returns and 6 years of FBARs without any failure-to-file, failure-to-pay, or FBAR penalties.'
  },
  {
    q: 'What happens if I never file my FBAR?',
    a: 'The penalties for non-filing of FinCEN Form 114 are severe. Non-willful penalties start at $10,000+ per violation (adjusted for inflation above $16,000). Willful penalties can reach $100,000 or 50% of the account balance per year. Through foreign bank FATCA data sharing, the IRS receives account balance notices directly from foreign financial institutions.'
  },
  {
    q: 'Can I claim the Child Tax Credit if I live abroad?',
    a: 'Yes! If you have qualifying children with valid US Social Security numbers and you file using the Foreign Tax Credit (Form 1116) rather than the Foreign Earned Income Exclusion (Form 2555), you may receive up to $1,700+ per child as a cash refund check from the IRS, even if you owe $0 in US tax.'
  }
];
