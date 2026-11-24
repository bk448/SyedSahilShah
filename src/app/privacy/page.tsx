import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, Globe } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
      
      <div className="space-y-3 border-b border-slate-200 pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold">
          <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
          <span>Cross-Border Compliance</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Privacy Policy</h1>
        <p className="text-xs text-slate-500">Last updated: Tax Season 2025/2026 &bull; Compliant with GDPR, UK GDPR, and CCPA</p>
      </div>

      <div className="prose prose-slate text-xs sm:text-sm leading-relaxed space-y-6 text-slate-700">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">1. Commitment to Client Confidentiality</h2>
          <p>
            ExpatTax US PLLC treats the confidentiality of your financial data with the highest fiduciary standard. Under IRC § 7216 and FTC Safeguards regulations, we do not disclose or sell tax return information to third-party marketers or brokers.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">2. Cross-Border Data Transfers (GDPR / UK GDPR)</h2>
          <p>
            When US citizens residing in the European Union or United Kingdom submit data to our practice, documents are transmitted over 256-bit SSL encrypted channels directly to our secure US client portal servers. By engaging our firm for cross-border US return preparation, you acknowledge and consent to necessary trans-Atlantic transmission for IRS filing purposes.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">3. Marketing Forms vs. Client Portal</h2>
          <p>
            Our public marketing forms (Book Consultation, Request Quote) only collect preliminary contact details and situation categorizations. Consultation booking details are stored in a Google Sheet in our practice Drive account so our team can follow up. <strong>Never submit Social Security Numbers (SSNs), ITINs, or bank account numbers through marketing forms.</strong> Formal document intake is restricted to the password-authenticated Client Portal.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">4. Your Data Rights</h2>
          <p>
            Under GDPR and CCPA, you have the right to request access to, correction of, or deletion of your personal data, subject to mandatory 7-year IRS tax record retention rules applicable to certified tax preparers.
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
