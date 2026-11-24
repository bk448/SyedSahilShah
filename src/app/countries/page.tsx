import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { COUNTRIES_DATABASE } from '@/lib/taxData';

export default function CountriesHubPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        {COUNTRIES_DATABASE.map((country) => (
          <Link
            key={country.slug}
            href={`/countries/${country.slug}`}
            className="group flex min-h-[110px] gap-3 rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-md"
          >
            <span className="w-7 shrink-0 pt-0.5 text-sm font-bold text-slate-700">
              {country.countryCode}
            </span>
            <div className="flex min-w-0 flex-1 flex-col items-start">
              <h2 className="text-xs font-bold leading-4 text-slate-900 group-hover:text-sky-700">
                US Taxes in {country.countryName}
              </h2>
              <span className="mt-0.5 text-[10px] leading-3 text-slate-500">
                {country.region}
              </span>
              <p className="mt-2 line-clamp-2 text-[10px] leading-4 text-slate-600">
                {country.treatySummary}
              </p>
              <span className="mt-auto flex items-center gap-1 pt-2 text-[10px] font-bold text-sky-600 group-hover:text-sky-700">
                Read country guide
                <ArrowRight className="h-3 w-3" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
