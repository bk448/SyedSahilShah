import React from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Calendar, 
  HelpCircle, 
  FileText,
  DollarSign
} from 'lucide-react';
import { FORMS_DATABASE, DIVISIONS } from '@/lib/taxData';

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const serviceSlug = params.slug;

  const titleFormatted = serviceSlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="space-y-16 pb-20">
      
      {/* Service Header */}
      <section className="bg-gradient-to-b from-sky-50/60 to-white pt-12 pb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <nav className="text-xs text-slate-500 flex items-center gap-2">
            <Link href="/" className="hover:text-sky-600">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-sky-600">Services</Link>
            <span>/</span>
            <span className="text-slate-800 font-semibold">{titleFormatted}</span>
          </nav>

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
              <span>Full CPA Advisory &amp; E-File Defense</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              {titleFormatted}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Specialized cross-border preparation designed to eliminate double taxation, maximize statutory exclusions, and protect against draconian IRS failure-to-file penalties.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/book-consultation"
              className="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-xl shadow-md transition flex items-center gap-2"
            >
              <span>Book Strategy Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/request-quote"
              className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-xs rounded-xl transition"
            >
              Request a Fixed Fee Quote
            </Link>
          </div>

        </div>
      </section>

      {/* Grid: Process & Related Forms */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* 3-Step Process Overview */}
          <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
              How We Execute This Service
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-700 font-bold flex items-center justify-center shrink-0 text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900">Secure Intake &amp; Document Review</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Upload your foreign wage statements (P60, T4, etc.), bank account balances, and entity records directly into our encrypted client portal.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-700 font-bold flex items-center justify-center shrink-0 text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900">Cross-Border Optimization &amp; Draft</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    A licensed CPA calculates your Foreign Earned Income Exclusion vs. Foreign Tax Credit position, converts currencies using IRS yearly average rates, and drafts all required schedules.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-700 font-bold flex items-center justify-center shrink-0 text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900">Review &amp; Electronic Submission</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    You review the return with your assigned CPA, authorize filing with Form 8879, and we electronically transmit to the IRS with tracking receipts.
                  </p>
                </div>
              </div>
            </div>

            {/* E-E-A-T Quality Stamp */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Reviewed for accuracy by Marcus Vance, CPA
              </span>
              <span>Updated for Tax Year 2025/2026</span>
            </div>
          </div>

          {/* Related Forms & Situation Sidebar */}
          <div className="space-y-6">
            
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <h3 className="font-bold text-xs uppercase tracking-wider text-slate-400">Related IRS Forms</h3>
              <div className="space-y-2">
                {FORMS_DATABASE.slice(0, 3).map(f => (
                  <Link
                    key={f.slug}
                    href={`/forms/${f.slug}`}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 hover:bg-sky-50 transition group"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-900">Form {f.formNumber}</div>
                      <div className="text-[11px] text-slate-500 line-clamp-1">{f.name}</div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-sky-600 transition" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-sky-900 text-white rounded-2xl p-6 shadow-sm space-y-3">
              <span className="text-xs font-bold text-sky-300 uppercase tracking-wider">Fixed Fee Pricing</span>
              <div className="text-2xl font-black">All-Inclusive Fixed Rates</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                No surprise hourly billing. We provide upfront fixed fees tailored to your exact number of foreign accounts and corporate entities.
              </p>
              <Link 
                href="/pricing" 
                className="text-xs text-sky-400 hover:underline block pt-1 font-semibold"
              >
                View Pricing Tiers &rarr;
              </Link>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
