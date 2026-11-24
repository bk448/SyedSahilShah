import React from 'react';
import Link from 'next/link';
import { GENERAL_FAQS } from '@/lib/taxData';
import { HelpCircle, ArrowRight, ShieldCheck, Search, CheckCircle2 } from 'lucide-react';

export default function FaqsPage() {
  return (
    <div className="space-y-16 pb-20">
      
      {/* Header with Visual Banner */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80"
            alt="US Expat Tax Questions & Answers"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-4 max-w-3xl text-center">
          <nav className="text-xs text-slate-400 flex items-center justify-center gap-2">
            <Link href="/" className="hover:text-sky-400">Home</Link>
            <span>/</span>
            <span className="text-slate-200 font-semibold">Expat FAQs</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Frequently Asked Questions
          </h1>

          <p className="text-base text-slate-300 leading-relaxed">
            Essential answers on citizenship-based taxation, FBAR reporting thresholds, Streamlined Amnesty, and avoiding double taxation.
          </p>
        </div>
      </section>

      {/* FAQs List */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {GENERAL_FAQS.map((faq, idx) => (
          <div 
            key={idx}
            className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-3"
          >
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-start gap-2.5">
              <span className="text-sky-600 font-black">Q:</span>
              <span>{faq.q}</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
              {faq.a}
            </p>
          </div>
        ))}

        <div className="p-8 bg-sky-50 border border-sky-200 rounded-3xl text-center space-y-4">
          <h3 className="font-bold text-base text-sky-950">Have a specific question about your situation?</h3>
          <p className="text-xs text-sky-800 max-w-lg mx-auto">
            Cross-border taxation is nuanced. Schedule a 30-minute consultation with a CPA to review your exact situation.
          </p>
          <Link
            href="/book-consultation"
            className="inline-flex items-center gap-1.5 px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-xl shadow-md transition"
          >
            <span>Book a Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
