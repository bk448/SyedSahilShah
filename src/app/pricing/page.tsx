import React from 'react';
import Link from 'next/link';
import { PRICING_TIERS } from '@/lib/taxData';
import { CheckCircle2, ArrowRight, ShieldCheck, DollarSign, HelpCircle, Lock } from 'lucide-react';

export default function PricingPage() {
  return (
    <div className="space-y-16 pb-20">
      
      {/* Header with Visual Banner */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=80"
            alt="Transparent Expat Tax Pricing"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-4 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-xs font-bold">
            <DollarSign className="w-3.5 h-3.5" />
            <span>100% Upfront Fixed Fees</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Transparent Expat Tax Pricing
          </h1>

          <p className="text-base text-slate-300 leading-relaxed">
            All services are charged in <strong>USD</strong> on a fixed-fee basis. No billable hour surprises. Every return includes direct review and signature by a Licensed CPA.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier) => (
            <div 
              key={tier.name}
              className={`rounded-2xl p-8 flex flex-col justify-between border transition ${
                tier.popular 
                  ? 'border-sky-600 bg-white shadow-xl shadow-sky-600/10 ring-2 ring-sky-600 relative' 
                  : 'border-slate-200 bg-white shadow-sm'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-sky-600 text-white text-[11px] font-extrabold uppercase tracking-wider py-1 px-3.5 rounded-full shadow-md">
                  Most Popular for Late Filers
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">{tier.name}</h2>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{tier.description}</p>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-slate-900">{tier.price}</span>
                  <span className="text-xs text-slate-500 font-medium">USD / {tier.cadence}</span>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">What is Included:</span>
                  <ul className="space-y-2.5">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-slate-100">
                <Link
                  href="/request-quote"
                  className={`w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition ${
                    tier.popular
                      ? 'bg-sky-600 hover:bg-sky-700 text-white shadow-md shadow-sky-600/30'
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  <span>{tier.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* Currency & VAT Note */}
        <div className="mt-8 text-center text-xs text-slate-400 max-w-xl mx-auto">
          All pricing listed in US Dollars ($USD). Non-US residents are not subject to US state sales taxes on accounting services. For UK/EU residents, reverse-charge / VAT exemptions apply.
        </div>
      </section>

    </div>
  );
}
