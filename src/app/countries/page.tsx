import React from 'react';
import Link from 'next/link';
import { ArrowRight, Globe, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { COUNTRIES_DATABASE } from '@/lib/taxData';

export default function CountriesHubPage() {
  return (
    <div className="space-y-12 pb-20">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-sky-50/70 via-white to-white pt-10 pb-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <nav className="text-xs text-slate-500 flex items-center gap-2">
            <Link href="/" className="hover:text-sky-600">Home</Link>
            <span>/</span>
            <span className="text-slate-800 font-semibold">Country Guides</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold">
            <Globe className="w-3.5 h-3.5 text-sky-600" />
            <span>16 Expat Host Jurisdictions Covered</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            US Expat Tax Country Guides
          </h1>

          <p className="text-base text-slate-600 max-w-3xl leading-relaxed">
            Detailed local tax treaty analysis, foreign pension classifications (UK SIPPs, Superannuation, RRSPs, Pillar 2/3), and PFIC investment traps for Americans living abroad.
          </p>
        </div>
      </section>

      {/* Country Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {COUNTRIES_DATABASE.map((country) => (
            <Link
              key={country.slug}
              href={`/countries/${country.slug}`}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl overflow-hidden"
            >
              {/* Card Landmark Image Banner */}
              <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                <img
                  src={country.imageUrl}
                  alt={`US Expat Taxes in ${country.countryName}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                {/* Region & Code Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="bg-slate-900/80 backdrop-blur-md text-white font-mono font-bold text-xs px-2.5 py-1 rounded-md border border-white/20">
                    {country.countryCode}
                  </span>
                  <span className="bg-sky-950/70 backdrop-blur-md text-sky-200 text-[11px] font-semibold px-2 py-0.5 rounded-full border border-sky-400/30">
                    {country.region}
                  </span>
                </div>

                {/* Country Name on Image */}
                <div className="absolute bottom-3 left-3 right-3">
                  <h2 className="text-lg font-black text-white tracking-tight flex items-center gap-1.5 drop-shadow-sm">
                    <span>{country.flagEmoji}</span>
                    <span>{country.countryName}</span>
                  </h2>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-2">
                  <p className="line-clamp-2 text-xs text-slate-600 leading-relaxed">
                    {country.treatySummary}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {country.totalizationAgreement && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        <span>Totalization Treaty</span>
                      </span>
                    )}
                    <span className="text-[10px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                      {country.localTaxYear.split('(')[0].trim()}
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-sky-700 group-hover:text-sky-800 transition flex items-center gap-1">
                    <span>Read country guide</span>
                    <ArrowRight className="w-3.5 h-3.5 transform transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Form 1040 / FBAR
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
