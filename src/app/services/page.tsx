import React from 'react';
import Link from 'next/link';
import { 
  Briefcase, 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  ShieldCheck, 
  Layers 
} from 'lucide-react';
import { DIVISIONS, FORMS_DATABASE } from '@/lib/taxData';

export default function ServicesHubPage() {
  const serviceThemes = [
    {
      category: 'Annual Compliance',
      title: 'Individual & Family Tax Preparation',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
      description: 'Comprehensive Form 1040 preparation with Foreign Earned Income Exclusion (FEIE) and Foreign Tax Credits (FTC) to completely neutralize double taxation.',
      services: [
        { slug: 'annual-expat-1040', name: 'Annual Expat 1040 Preparation', desc: '1040 with all foreign wage conversions and schedules.' },
        { slug: 'fbar-fatca-reporting', name: 'FBAR & FATCA Asset Compliance', desc: 'FinCEN Form 114 and Form 8938 foreign account disclosures.' },
        { slug: 'child-tax-credit-expats', name: 'Child Tax Credit Cash Refunds', desc: 'Claim up to $1,700/child in refundable US tax credits abroad.' }
      ],
      relatedForms: ['1040', '2555', '1116', 'FinCEN 114']
    },
    {
      category: 'Catch-Up & Amnesty',
      title: 'IRS Streamlined Procedures & Penalty Relief',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
      description: 'For accidental Americans and expats multiple years behind. Stop sleepless nights with full statutory penalty forgiveness.',
      services: [
        { slug: 'streamlined-foreign-offshore', name: 'Streamlined Foreign Offshore Procedures (SFOP)', desc: '3 years of 1040s and 6 years of FBARs with 0% penalties.' },
        { slug: 'delinquent-fbar-submission', name: 'Delinquent FBAR Submission Procedures', desc: 'Quiet catch-up for unreported accounts with fully reported income.' },
        { slug: 'ssn-cln-assistance', name: 'SSN & Expatriation Advisory', desc: 'Assistance obtaining an SSN or properly executing lawful US expatriation.' }
      ],
      relatedForms: ['1040', 'FinCEN 114', 'Form 14653']
    },
    {
      category: 'Corporate & Business',
      title: 'Controlled Foreign Corporations (CFC) & GILTI',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      description: 'Sophisticated compliance for founders and expats who formed foreign entities (UK Ltd, Canadian Corp, EU GmbH, Australian Pty Ltd).',
      services: [
        { slug: 'form-5471-cfc-reporting', name: 'Form 5471 & CFC Compliance', desc: 'Full corporate balance sheet translation and Category 1-5 compliance.' },
        { slug: 'gilti-subpart-f-planning', name: 'GILTI & Section 962 Elections', desc: 'Mitigate the 21% GILTI rate using Section 962 individual corporate rate parity.' },
        { slug: 'foreign-disregarded-entities', name: 'Form 8858 Disregarded Entities', desc: 'Simplified pass-through reporting for single-member structures.' }
      ],
      relatedForms: ['5471', '8992', '8858', '8865']
    },
    {
      category: 'Private Client & Investments',
      title: 'Foreign Trusts, Gifts & PFIC Remedies',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
      description: 'Protecting generational cross-border wealth, foreign inheritances, family trusts, and mutual fund portfolios.',
      services: [
        { slug: 'foreign-trust-reporting', name: 'Form 3520 / 3520-A Foreign Trusts', desc: 'Grantor and non-grantor trust filings to avert 35% penalties.' },
        { slug: 'pfic-remedies-8621', name: 'PFIC Portfolio Diagnostics (Form 8621)', desc: 'QEF and Mark-to-Market elections on foreign mutual funds and ETFs.' },
        { slug: 'dual-status-returns', name: 'Dual-Status Transition Year Filing', desc: 'Specialized returns for departure and arrival years.' }
      ],
      relatedForms: ['3520', '3520-A', '8621']
    }
  ];

  return (
    <div className="space-y-16 pb-20">
      
      {/* Header with Visual Banner */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80"
            alt="Cross-Border Tax Advisory Services"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-4">
          <nav className="text-xs text-slate-400 flex items-center gap-2">
            <Link href="/" className="hover:text-sky-400">Home</Link>
            <span>/</span>
            <span className="text-slate-200 font-semibold">Services Hub</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Cross-Border Expat Tax Services
          </h1>

          <p className="text-base text-slate-300 max-w-3xl leading-relaxed">
            All services are directly executed and reviewed by licensed US CPAs and IRS Enrolled Agents. Browse our practice groups below or consult with an advisor to craft a personalized filing strategy.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <Link
              href="/book-consultation"
              className="px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow-md transition"
            >
              Book an Expat Strategy Call
            </Link>
            <Link
              href="/request-quote"
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs rounded-xl transition"
            >
              Request a Fixed Fee Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid with Visual Category Banners */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {serviceThemes.map((theme, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm space-y-6">
            
            <div className="relative h-44 w-full overflow-hidden bg-slate-900">
              <img
                src={theme.image}
                alt={theme.title}
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
              <div className="absolute bottom-5 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-2 text-white">
                <div>
                  <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">{theme.category}</span>
                  <h2 className="text-2xl font-black tracking-tight">{theme.title}</h2>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-300 font-medium">Forms:</span>
                  <div className="flex flex-wrap gap-1">
                    {theme.relatedForms.map(f => (
                      <span key={f} className="text-[10px] font-bold bg-white/20 backdrop-blur-sm text-white px-2 py-0.5 rounded">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 space-y-6">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl">
                {theme.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {theme.services.map((service) => (
                  <div 
                    key={service.slug}
                    className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 space-y-3 flex flex-col justify-between hover:border-sky-300 transition"
                  >
                    <div className="space-y-2">
                      <h3 className="font-bold text-sm text-slate-900">{service.name}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{service.desc}</p>
                    </div>

                    <Link 
                      href={`/services/${service.slug}`}
                      className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1 pt-2"
                    >
                      <span>Learn more</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>

          </div>
        ))}
      </section>

    </div>
  );
}
