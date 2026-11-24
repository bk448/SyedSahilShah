import React from 'react';
import Link from 'next/link';
import { Globe, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { COUNTRIES_DATABASE } from '@/lib/taxData';

export default function CountriesHubPage() {
  return (
    <div className="space-y-16 pb-20">
      
      {/* Header with Visual Banner & Glassmorphism */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80"
            alt="International Expat Tax Jurisdictions"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-4">
          <nav className="text-xs text-slate-400 flex items-center gap-2">
            <Link href="/" className="hover:text-sky-400">Home</Link>
            <span>/</span>
            <span className="text-slate-200 font-semibold">Country Guides</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sky-300 text-xs font-bold">
            <Globe className="w-3.5 h-3.5" />
            <span>16 Expat Jurisdiction Guides</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            US Expat Taxes by Country of Residence
          </h1>

          <p className="text-base text-slate-300 max-w-3xl leading-relaxed">
            Every country has its own local tax year, pension system, and bilateral treaty position. Review how living in your host country affects your US IRS filing requirements and local pensions.
          </p>
        </div>
      </section>

      {/* Grid: All 16 Countries with Landscape Visuals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {COUNTRIES_DATABASE.map((c) => (
            <Link
              key={c.slug}
              href={`/countries/${c.slug}`}
              className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:border-sky-300 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between transform hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-slate-100">
                <img
                  src={c.imageUrl}
                  alt={c.countryName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white flex items-center gap-2">
                  <span className="text-2xl">{c.flagEmoji}</span>
                  <div className="font-bold text-sm">{c.countryName}</div>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium">
                    <span>{c.region}</span>
                    <span>{c.localTaxYear}</span>
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {c.treatySummary}
                  </p>
                </div>

                <div className="pt-2 text-xs font-bold text-sky-600 flex items-center gap-1 group-hover:text-sky-700">
                  <span>View treaty &amp; pension rules</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
