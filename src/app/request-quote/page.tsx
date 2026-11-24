'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  DollarSign, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  Layers,
  HelpCircle
} from 'lucide-react';
import { COUNTRIES_DATABASE } from '@/lib/taxData';

export default function RequestQuotePage() {
  const [yearsBehind, setYearsBehind] = useState('0'); // 0 = current year only
  const [country, setCountry] = useState('United Kingdom');
  const [foreignAccounts, setForeignAccounts] = useState('under_10k');
  const [hasForeignCompany, setHasForeignCompany] = useState('no');
  const [urgency, setUrgency] = useState('standard');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
          <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
          <span>Guaranteed Upfront Fixed Fee</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Request an Expat Tax Quote
        </h1>
        <p className="text-sm text-slate-600 max-w-xl mx-auto">
          Tell us about your cross-border accounts and filing history. We provide a guaranteed, all-inclusive quote within one business day.
        </p>
      </div>

      {submitted ? (
        <div className="bg-white border border-emerald-200 rounded-3xl p-8 sm:p-12 text-center space-y-5 shadow-xl animate-in zoom-in-95">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-slate-900">Quote Request Received!</h2>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Thank you, <strong>{name}</strong>. A Senior Expat CPA is reviewing your filing profile. We will email your guaranteed flat fee proposal to <strong>{email}</strong> within 1 business day.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-700 max-w-md mx-auto text-left space-y-1.5">
            <div><strong>Filing Profile:</strong> {yearsBehind === '0' ? 'Current Year 1040' : `${yearsBehind} Years Delinquent (Streamlined Review)`}</div>
            <div><strong>Location:</strong> {country}</div>
            <div><strong>Foreign Entity:</strong> {hasForeignCompany === 'yes' ? 'Includes Form 5471 / CFC Review' : 'None'}</div>
          </div>

          <div className="pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8">
          
          {/* Step 1: Filing Scope & Delinquency */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
              1. Filing History &amp; Scope
            </h3>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                How many years do you need to file? *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setYearsBehind('0')}
                  className={`p-3 rounded-xl border text-left transition ${
                    yearsBehind === '0' ? 'border-sky-600 bg-sky-50/50 ring-1 ring-sky-600 font-bold' : 'border-slate-200 bg-slate-50'
                  }`}
                >
                  <div className="text-xs text-slate-900">Current Year Only</div>
                  <div className="text-[11px] text-slate-500 font-normal">Annual 2025 Expat return</div>
                </button>

                <button
                  type="button"
                  onClick={() => setYearsBehind('1-2')}
                  className={`p-3 rounded-xl border text-left transition ${
                    yearsBehind === '1-2' ? 'border-sky-600 bg-sky-50/50 ring-1 ring-sky-600 font-bold' : 'border-slate-200 bg-slate-50'
                  }`}
                >
                  <div className="text-xs text-slate-900">1 to 2 Years Behind</div>
                  <div className="text-[11px] text-slate-500 font-normal">Missed prior tax seasons</div>
                </button>

                <button
                  type="button"
                  onClick={() => setYearsBehind('3+')}
                  className={`p-3 rounded-xl border text-left transition ${
                    yearsBehind === '3+' ? 'border-sky-600 bg-sky-50/50 ring-1 ring-sky-600 font-bold' : 'border-slate-200 bg-slate-50'
                  }`}
                >
                  <div className="text-xs text-slate-900">3+ Years Behind</div>
                  <div className="text-[11px] text-slate-500 font-normal">Streamlined Amnesty candidate</div>
                </button>
              </div>
            </div>
          </div>

          {/* Step 2: Foreign Assets & Entities */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
              2. Foreign Assets &amp; Business Complexity
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Foreign Accounts Aggregate Peak Balance *
                </label>
                <select
                  value={foreignAccounts}
                  onChange={(e) => setForeignAccounts(e.target.value)}
                  className="w-full py-2 px-3 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none bg-white"
                >
                  <option value="under_10k">Under $10,000 USD (No FBAR required)</option>
                  <option value="10k_to_50k">$10,000 to $50,000 USD (Standard FBAR)</option>
                  <option value="50k_to_200k">$50,000 to $200,000 USD (FBAR + FATCA review)</option>
                  <option value="over_200k">Over $200,000 USD (Form 8938 FATCA required)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Do you own a foreign company (Ltd, Corp, GmbH)? *
                </label>
                <select
                  value={hasForeignCompany}
                  onChange={(e) => setHasForeignCompany(e.target.value)}
                  className="w-full py-2 px-3 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none bg-white"
                >
                  <option value="no">No foreign entity ownership</option>
                  <option value="yes">Yes (requires Form 5471 / 8858)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Step 3: Contact & Delivery */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
              3. Contact Information
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Smith"
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@example.com"
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Country of Residence *
                </label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full py-2 px-3 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none bg-white"
                >
                  {COUNTRIES_DATABASE.map(c => (
                    <option key={c.slug} value={c.countryName}>
                      {c.flagEmoji} {c.countryName}
                    </option>
                  ))}
                  <option value="Other">Other Country</option>
                </select>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-emerald-600/30 transition flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? <span>Generating Proposal...</span> : <span>Submit for Fixed Price Proposal</span>}
            <ArrowRight className="w-4 h-4" />
          </button>

        </form>
      )}

    </div>
  );
}
