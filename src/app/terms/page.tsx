import React from 'react';
import Link from 'next/link';
import { ShieldCheck, FileText } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
      
      <div className="space-y-3 border-b border-slate-200 pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold">
          <FileText className="w-3.5 h-3.5 text-slate-600" />
          <span>Engagement Terms</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Terms of Service</h1>
        <p className="text-xs text-slate-500">Effective Tax Year 2025/2026</p>
      </div>

      <div className="prose prose-slate text-xs sm:text-sm leading-relaxed space-y-6 text-slate-700">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">1. Nature of Website Information</h2>
          <p>
            Content published on this website is for general informational and educational purposes only. Browsing this website, submitting an inquiry, or reviewing forms does not establish a CPA-client relationship. Formal professional engagement occurs only upon countersigning a formal Engagement Letter.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">2. IRS Circular 230 Notice</h2>
          <p>
            Any US federal tax information provided on this website cannot be used by any taxpayer for the purpose of avoiding penalties that may be imposed by the Internal Revenue Code.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">3. Fixed Fee Proposals</h2>
          <p>
            All price quotes provided via our quote tool are based on the taxpayer disclosures provided. Material additions (such as undisclosed foreign companies, unreported trust distributions, or late-stage audits) may require a scope adjustment before filing.
          </p>
        </section>
      </div>

      <div className="pt-6 border-t border-slate-200">
        <Link href="/" className="text-xs font-bold text-sky-600 hover:underline">
          &larr; Return to Homepage
        </Link>
      </div>

    </div>
  );
}
