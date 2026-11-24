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
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:border-sky-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Form Image Header */}
              <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                <img
                  src={form.imageUrl || 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80'}
                  alt={`IRS Form ${form.formNumber}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-xs font-black text-sky-900 bg-sky-100/95 backdrop-blur-md px-2.5 py-1 rounded-md shadow-sm">
                    Form {form.formNumber}
                  </span>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full backdrop-blur-md shadow-sm ${
                    form.penaltySeverity === 'critical' ? 'bg-rose-100/95 text-rose-900 border border-rose-200' : 'bg-amber-100/95 text-amber-900 border border-amber-200'
                  }`}>
                    {form.penaltySeverity} penalty
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[11px] font-semibold text-sky-200 bg-sky-950/70 backdrop-blur-md px-2 py-0.5 rounded-full border border-sky-400/30">
                    {form.category}
                  </span>
                </div>
              </div>

              {/* Form Card Content */}
              <div className="p-5 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-3">
                  <h2 className="text-base font-bold text-slate-900 line-clamp-1 group-hover:text-sky-700 transition">
                    <Link href={`/forms/${form.slug}`}>
                      {form.name}
                    </Link>
                  </h2>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {form.summary}
                  </p>

                  <div className="p-3 bg-slate-50 rounded-xl space-y-1.5 text-xs border border-slate-100">
                    <div className="flex items-center gap-1.5 text-slate-700 font-semibold">
                      <Clock className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                      <span className="line-clamp-1">Due: {form.dueDate}</span>
                    </div>
                    <div className="text-[11px] text-rose-700 font-medium line-clamp-1">
                      ⚠️ {form.penalties}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                  <Link 
                    href={`/forms/${form.slug}`}
                    className="text-sky-600 hover:text-sky-700 flex items-center gap-1"
                  >
                    <span>Form details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/book-consultation"
                    className="text-slate-500 hover:text-sky-600"
                  >
                    Get Help Filing
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </section>

    </div>
  );
}
