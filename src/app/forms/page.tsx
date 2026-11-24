import React from 'react';
import Link from 'next/link';
import { 
  FileText, 
  AlertTriangle, 
  ArrowRight, 
  Clock, 
  ShieldAlert, 
  Calendar 
} from 'lucide-react';
import { FORMS_DATABASE } from '@/lib/taxData';

export default function FormsHubPage() {
  return (
    <div className="space-y-16 pb-20">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-sky-50/60 to-white pt-12 pb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <nav className="text-xs text-slate-500 flex items-center gap-2">
            <Link href="/" className="hover:text-sky-600">Home</Link>
            <span>/</span>
            <span className="text-slate-800 font-semibold">Forms Library</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold">
            <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
            <span>Avoid Automatic $10,000+ Non-Filing Penalties</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            US Expat Tax Forms Directory
          </h1>

          <p className="text-base text-slate-600 max-w-3xl leading-relaxed">
            The IRS requires extensive informational reporting for foreign assets, foreign corporations, and foreign accounts. Missing even one schedule can trigger statutory fines starting at $10,000 per violation.
          </p>
        </div>
      </section>

      {/* Forms Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FORMS_DATABASE.map((form) => (
            <div 
              key={form.slug}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-sky-300 hover:shadow-md transition flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-sky-800 bg-sky-100 px-2.5 py-1 rounded-md">
                    Form {form.formNumber}
                  </span>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    form.penaltySeverity === 'critical' ? 'bg-rose-100 text-rose-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {form.penaltySeverity} penalty
                  </span>
                </div>

                <h2 className="text-base font-bold text-slate-900 line-clamp-1">
                  <Link href={`/forms/${form.slug}`} className="hover:text-sky-600 transition">
                    {form.name}
                  </Link>
                </h2>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {form.summary}
                </p>

                <div className="p-3 bg-slate-50 rounded-xl space-y-1.5 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-700 font-semibold">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>Due: {form.dueDate}</span>
                  </div>
                  <div className="text-[11px] text-rose-700 font-medium line-clamp-1">
                    ⚠️ {form.penalties}
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                <Link 
                  href={`/forms/${form.slug}`}
                  className="text-sky-600 hover:text-sky-700 flex items-center gap-1"
                >
                  <span>Form details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/book-consultation"
                  className="text-slate-500 hover:text-slate-800"
                >
                  Get Help Filing
                </Link>
              </div>

            </div>
          ))}
        </div>

      </section>

    </div>
  );
}
