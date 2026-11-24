import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, AlertTriangle, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { DEADLINES } from '@/lib/taxData';

export default function DeadlinesPage() {
  return (
    <div className="space-y-16 pb-20">
      
      {/* Header with Visual Banner */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=80"
            alt="US Expat Tax Deadlines Calendar"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-4">
          <nav className="text-xs text-slate-400 flex items-center gap-2">
            <Link href="/" className="hover:text-sky-400">Home</Link>
            <span>/</span>
            <span className="text-slate-200 font-semibold">Deadlines Calendar</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-800 text-sky-400 text-xs font-bold">
            <Clock className="w-3.5 h-3.5" />
            <span>Tax Year 2025/2026 Deadlines</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            US Expat Tax Deadlines Calendar
          </h1>

          <p className="text-base text-slate-300 max-w-3xl leading-relaxed">
            US citizens and green card holders living abroad enjoy special statutory extensions (such as the automatic June 15 deadline), but penalties and interest rules can still apply if taxes are owed.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="space-y-6">
          {DEADLINES.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-start justify-between hover:border-sky-300 transition"
            >
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-md bg-sky-900 text-sky-200 text-xs font-black">
                    {item.date}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">{item.appliesTo}</span>
                </div>

                <h2 className="text-lg font-bold text-slate-900">{item.title}</h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.description}</p>
                
                <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-sky-700">
                  <span>Action Required:</span>
                  <span className="text-slate-800">{item.actionRequired}</span>
                </div>
              </div>

              <div className="shrink-0 w-full md:w-auto pt-2 md:pt-0">
                <Link
                  href="/book-consultation"
                  className="w-full md:w-auto px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-xl shadow-sm transition flex items-center justify-center gap-1.5"
                >
                  <span>File Before Deadline</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Critical Distinction Notice */}
        <div className="p-6 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-3 text-xs text-amber-900 leading-relaxed">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="block text-sm font-bold text-amber-950 mb-1">
              Extension to File vs. Extension to Pay
            </strong>
            The automatic June 15 expat extension and October 15 Form 4868 extension provide additional time to <strong>file your paperwork</strong> without incurring the 5% per month failure-to-file penalty. However, if you have a net tax liability owed to the IRS, statutory interest begins accruing from <strong>April 15</strong>. Our CPAs can calculate safe-harbor estimated tax payments to prevent interest.
          </div>
        </div>

      </section>

    </div>
  );
}
