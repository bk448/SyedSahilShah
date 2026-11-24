import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { COUNTRIES_DATABASE } from '@/lib/taxData';
import { 
  Globe, 
  ShieldCheck, 
  AlertTriangle, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle,
  Clock
} from 'lucide-react';

export function generateStaticParams() {
  return COUNTRIES_DATABASE.map((c) => ({ slug: c.slug }));
}

export default function CountryDetailPage({ params }: { params: { slug: string } }) {
  const country = COUNTRIES_DATABASE.find((c) => c.slug === params.slug);

  if (!country) {
    notFound();
  }

  return (
    <div className="space-y-16 pb-20">
      
      {/* Country Header with Skyline Banner */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={country.imageUrl}
            alt={country.countryName}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-6">
          <nav className="text-xs text-slate-400 flex items-center gap-2">
            <Link href="/" className="hover:text-sky-400">Home</Link>
            <span>/</span>
            <Link href="/countries" className="hover:text-sky-400">Countries</Link>
            <span>/</span>
            <span className="text-slate-200 font-semibold">{country.countryName}</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-4xl">{country.flagEmoji}</span>
              <div>
                <span className="text-xs font-bold text-sky-400 bg-sky-950/80 border border-sky-800 px-2.5 py-0.5 rounded-full">
                  {country.region} &bull; {country.treatyStatus}
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mt-1">
                  US Expat Taxes in {country.countryName}
                </h1>
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium">
              A comprehensive guide to bilateral tax treaty positions, local pension treatment, PFIC traps, and filing deadlines for Americans living in {country.countryName}.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/book-consultation"
              className="px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow-md transition flex items-center gap-2"
            >
              <span>Consult an Expat Specialist for {country.countryName}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/request-quote"
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs rounded-xl transition"
            >
              Request a Filing Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Bilateral Treaty Position */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-sky-600" />
            <h2 className="text-xl font-bold text-slate-900">Bilateral Income Tax Treaty Position</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {country.treatySummary}
          </p>
          <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-600 flex items-center justify-between">
            <span>Totalization Agreement for Social Security:</span>
            <span className={`font-bold ${country.totalizationAgreement ? 'text-emerald-700' : 'text-rose-700'}`}>
              {country.totalizationAgreement ? '✓ Active Totalization Agreement (No Double Social Security Tax)' : '✗ No Totalization Agreement (Risk of Double Self-Employment Tax)'}
            </span>
          </div>
        </div>

        {/* Local Pension & Retirement Accounts */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-indigo-600" />
            <h2 className="text-xl font-bold text-slate-900">Local Pension &amp; Retirement Account Treatment</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {country.pensionTreatment}
          </p>
        </div>

        {/* Deadlines Comparison Table */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-sky-600" />
              <h2 className="text-xl font-bold text-slate-900">Local vs. US Tax Filing Deadlines</h2>
            </div>
            <span className="text-xs text-slate-500">Local Tax Year: <strong>{country.localTaxYear}</strong></span>
          </div>

          <div className="table-responsive pt-2">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-600 uppercase tracking-wider">
                  <th className="py-3 px-4 font-bold">Filing Milestone</th>
                  <th className="py-3 px-4 font-bold">Local Authority Deadline</th>
                  <th className="py-3 px-4 font-bold">US IRS / FinCEN Deadline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {country.usVsLocalDeadlines.map((d, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50">
                    <td className="py-3 px-4 font-semibold text-slate-900">{d.event}</td>
                    <td className="py-3 px-4 text-slate-700">{d.localDate}</td>
                    <td className="py-3 px-4 font-bold text-sky-700">{d.usDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Common PFIC Traps & Pitfalls */}
        <div className="bg-rose-50 border border-rose-200 rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-rose-900">
            <AlertTriangle className="w-5 h-5 text-rose-600" />
            <h2 className="text-xl font-bold">PFIC Traps &amp; Common Pitfalls in {country.countryName}</h2>
          </div>
          <p className="text-xs sm:text-sm text-rose-900 leading-relaxed">
            {country.pficTraps}
          </p>

          <div className="pt-2 border-t border-rose-200 space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-rose-800">Key Red Flags to Avoid:</h3>
            <ul className="space-y-1.5">
              {country.commonPitfalls.map((pitfall, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-rose-950">
                  <span className="text-rose-600 font-bold shrink-0">&bull;</span>
                  <span>{pitfall}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </section>

    </div>
  );
}
