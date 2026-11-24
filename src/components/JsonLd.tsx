import React from 'react';

export default function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'AccountingService',
    name: 'ExpatTax US PLLC',
    alternateName: 'Expat Tax US Cross-Border CPAs',
    url: 'https://expattax-us.com',
    logo: 'https://expattax-us.com/logo.png',
    description: 'Specialist cross-border tax compliance, IRS Streamlined amnesty, FBAR filings, and corporate tax advisory for US expats worldwide.',
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'Canada' },
      { '@type': 'Country', name: 'Australia' },
      { '@type': 'Country', name: 'Germany' },
      { '@type': 'Country', name: 'Singapore' },
      { '@type': 'Country', name: 'Japan' },
    ],
    knowsAbout: [
      'US Expat Tax',
      'IRS Streamlined Foreign Offshore Procedures',
      'FinCEN Form 114 FBAR',
      'Form 5471 Controlled Foreign Corporations',
      'Foreign Earned Income Exclusion (FEIE)',
      'Foreign Tax Credit (FTC)',
      'Passive Foreign Investment Companies (PFIC Form 8621)',
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do I still have to file US taxes if I pay local taxes in my country of residence?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The United States taxes on citizenship, not residency. If worldwide income exceeds standard deduction thresholds, filing Form 1040 is legally mandatory. Foreign Tax Credits or FEIE prevent double taxation.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the Streamlined Foreign Offshore Procedure (SFOP)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SFOP is an IRS amnesty program for expats behind on tax filings due to non-willful conduct. It allows full compliance by filing 3 years of late returns and 6 years of FBARs with 0% failure-to-file penalties.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the penalties for not filing FBAR (FinCEN 114)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Non-willful FBAR penalties start at over $10,000 per violation. Willful failure to report foreign accounts can result in penalties up to $100,000 or 50% of the account balance per year.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
