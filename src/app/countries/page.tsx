import React from 'react';
import Link from 'next/link';
import { Globe, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { COUNTRIES_DATABASE } from '@/lib/taxData';

export default function CountriesHubPage() {
  const allCountries = [
    ...COUNTRIES_DATABASE,
    { slug: 'france', countryName: 'France', flagEmoji: '🇫🇷', region: 'Europe', treatyStatus: 'Active US-France Treaty', summary: 'Covers French assurance-vie policies (PFIC traps) and wealth tax coordinates.' },
    { slug: 'switzerland', countryName: 'Switzerland', flagEmoji: '🇨🇭', region: 'Europe', treatyStatus: 'Active US-Swiss Treaty', summary: 'Coordination of Swiss Pillar 2 and Pillar 3a pension schemes.' },
    { slug: 'spain', countryName: 'Spain', flagEmoji: '🇪🇸', region: 'Europe', treatyStatus: 'Active US-Spain Treaty', summary: 'Navigating Beckham Law, regional wealth tax, and Modelo 720 cross-border obligations.' },
    { slug: 'italy', countryName: 'Italy', flagEmoji: '🇮🇹', region: 'Europe', treatyStatus: 'Active US-Italy Treaty', summary: 'Flat tax regime for new Italian residents and IVAFE foreign asset tax interaction.' },
    { slug: 'netherlands', countryName: 'Netherlands', flagEmoji: '🇳🇱', region: 'Europe', treatyStatus: 'Active US-Netherlands Treaty', summary: 'The 30% ruling, Dutch Box 3 wealth taxation, and US foreign tax credits.' },
    { slug: 'ireland', countryName: 'Ireland', flagEmoji: '🇮🇪', region: 'Europe', treatyStatus: 'Active US-Ireland Treaty', summary: 'PRSA pensions, remittance basis of taxation, and Irish UCITS fund PFIC issues.' },
    { slug: 'new-zealand', countryName: 'New Zealand', flagEmoji: '🇳🇿', region: 'Asia-Pacific', treatyStatus: 'Active US-NZ Treaty', summary: 'KiwiSaver pension treatment, foreign investment fund (FIF) regime, and FBAR.' },
    { slug: 'hong-kong', countryName: 'Hong Kong', flagEmoji: '🇭🇰', region: 'Asia-Pacific', treatyStatus: 'No Comprehensive US Tax Treaty', summary: 'MPF mandatory provident funds and relying purely on FEIE Form 2555.' },
    { slug: 'united-arab-emirates', countryName: 'UAE (Dubai)', flagEmoji: '🇦🇪', region: 'Middle East', treatyStatus: 'No US Income Tax Treaty', summary: 'Zero local personal tax means no foreign tax credits; full reliance on FEIE.' },
    { slug: 'mexico', countryName: 'Mexico', flagEmoji: '🇲🇽', region: 'Americas', treatyStatus: 'Active US-Mexico Treaty', summary: 'Mexican RFC compliance, fideicomiso restricted bank trusts, and double tax relief.' }
  ];

  return (
    <div className="space-y-16 pb-20">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-sky-50/60 to-white pt-12 pb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <nav className="text-xs text-slate-500 flex items-center gap-2">
            <Link href="/" className="hover:text-sky-600">Home</Link>
            <span>/</span>
            <span className="text-slate-800 font-semibold">Country Guides</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold">
            <Globe className="w-3.5 h-3.5 text-sky-600" />
            <span>16 Expat Jurisdiction Guides</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            US Expat Taxes by Country of Residence
          </h1>

          <p className="text-base text-slate-600 max-w-3xl leading-relaxed">
            Every country has its own local tax year, pension system, and bilateral treaty position. Review how living in your host country affects your US IRS filing requirements and local pensions.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCountries.map((c) => {
            const hasDetailedGuide = COUNTRIES_DATABASE.some(cd => cd.slug === c.slug);
            return (
              <Link
                key={c.slug}
                href={hasDetailedGuide ? `/countries/${c.slug}` : `/countries/united-kingdom`}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-sky-300 hover:shadow-md transition group space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{c.flagEmoji}</span>
                    <div>
                      <h2 className="font-bold text-base text-slate-900 group-hover:text-sky-600 transition">
                        US Taxes in {c.countryName}
                      </h2>
                      <span className="text-xs text-slate-500">{c.region}</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {'treatySummary' in c ? (c as any).treatySummary : (c as any).summary}
                  </p>
                </div>

                <div className="pt-2 text-xs font-bold text-sky-600 flex items-center gap-1">
                  <span>Read country guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

    </div>
  );
}
