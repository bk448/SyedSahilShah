import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { FORMS_DATABASE } from '@/lib/taxData';
import { 
  FileText, 
  AlertTriangle, 
  Clock, 
  ArrowRight, 
  ShieldCheck, 
  Calendar,
  CheckCircle2,
  DollarSign
} from 'lucide-react';

export function generateStaticParams() {
  return FORMS_DATABASE.map((f) => ({ slug: f.slug }));
}

export default function FormDetailPage({ params }: { params: { slug: string } }) {
  const form = FORMS_DATABASE.find((f) => f.slug === params.slug);

  if (!form) {
    notFound();
  }

  return (
    <div className="space-y-16 pb-20">
      
      {/* Form Header */}
      <section className="bg-gradient-to-b from-sky-50/60 to-white pt-12 pb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <nav className="text-xs text-slate-500 flex items-center gap-2">
            <Link href="/" className="hover:text-sky-600">Home</Link>
            <span>/</span>
            <Link href="/forms" className="hover:text-sky-600">Forms</Link>
            <span>/</span>
            <span className="text-slate-800 font-semibold">Form {form.formNumber}</span>
          </nav>

          <div className="max-w-4xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-md bg-sky-800 text-white text-xs font-black">
                IRS Form {form.formNumber}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                {form.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              {form.name}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
              {form.summary}
            </p>
          </div>

          {/* Severe Penalty Callout */}
          <div className="p-4 bg-rose-50 border-l-4 border-rose-500 rounded-r-xl max-w-3xl flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div className="text-xs text-rose-950 leading-relaxed">
              <strong className="block font-bold text-rose-900 mb-0.5">Statutory Non-Filing Penalty:</strong>
              {form.penalties}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/book-consultation"
              className="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-xl shadow-md transition flex items-center gap-2"
            >
              <span>Get Professional Assistance with Form {form.formNumber}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/request-quote"
              className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-xs rounded-xl transition"
            >
              Request a Preparation Quote
            </Link>
          </div>

        </div>
      </section>

      {/* Grid: Filing Rules & Requirements */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-6">
            
            {/* Filing Criteria Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                Filing Triggers &amp; Thresholds
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Who Must File</h3>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                    {form.filingThreshold}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Statutory Due Date</h3>
                    <p className="text-xs font-semibold text-slate-800 mt-1">
                      {form.dueDate}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Extensions Available</h3>
                    <p className="text-xs text-slate-700 mt-1">
                      {form.extensionsAvailable}
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Key Reporting Rules</h3>
                  <ul className="space-y-2">
                    {form.keyInstructions.map((rule, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-sky-600 mt-0.5 shrink-0" />
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* YMYL E-E-A-T Footnote */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>Statutory Authority: Internal Revenue Code &bull; FinCEN BSA</span>
                <span>Last Verified by US CPA: Tax Year 2025/2026</span>
              </div>
            </div>

          </div>

          {/* Sidebar: Related Service & Quick Action */}
          <div className="space-y-6">
            
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <h3 className="font-bold text-xs uppercase tracking-wider text-slate-400">Related Expat Service</h3>
              <div className="p-4 bg-sky-50 rounded-xl space-y-2">
                <div className="text-xs font-bold text-slate-900">{form.relatedServiceName}</div>
                <p className="text-[11px] text-slate-600">
                  Let our CPAs manage Form {form.formNumber} as part of your comprehensive cross-border return.
                </p>
                <Link
                  href={`/services/${form.relatedServiceSlug}`}
                  className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1 pt-1"
                >
                  <span>Explore service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-sm space-y-3">
              <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">Penalty Relief Notice</span>
              <div className="text-lg font-bold">Unfiled for Prior Years?</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                If you failed to file Form {form.formNumber} in previous years, do NOT submit late returns alone. Use IRS Streamlined Procedures to eliminate all failure-to-file penalties.
              </p>
              <Link
                href="/divisions/accidental-americans"
                className="text-xs text-sky-400 hover:underline block pt-1 font-semibold"
              >
                Learn About Amnesty Eligibility &rarr;
              </Link>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
