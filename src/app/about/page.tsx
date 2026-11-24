import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Award, Users, Globe, ArrowRight, Lock, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  const team = [
    {
      name: 'Marcus Vance, CPA',
      role: 'Partner & Senior Cross-Border Lead',
      jurisdiction: 'Licensed in NY & London desk',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
      bio: 'Over 14 years specializing in IRS Streamlined Foreign Offshore Procedures and UK/EU cross-border income allocation.'
    },
    {
      name: 'Elena Rostova, EA',
      role: 'Managing Director, Amnesty & Compliance',
      jurisdiction: 'IRS Enrolled Agent (US Department of the Treasury)',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      bio: 'Admitted to practice directly before the IRS with full audit defense representation rights. Veteran of 1,200+ expat returns.'
    },
    {
      name: 'David Chen, CPA',
      role: 'Director, International Corporate & CFC',
      jurisdiction: 'Licensed in California & Singapore desk',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
      bio: 'Specialist in Form 5471 corporate filings, GILTI modeling, and Section 962 individual tax parity elections.'
    }
  ];

  return (
    <div className="space-y-16 pb-20">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-sky-50/60 to-white pt-12 pb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 max-w-3xl text-center">
          <nav className="text-xs text-slate-500 flex items-center justify-center gap-2">
            <Link href="/" className="hover:text-sky-600">Home</Link>
            <span>/</span>
            <span className="text-slate-800 font-semibold">About Us</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Specialist US Cross-Border Tax Advisory
          </h1>

          <p className="text-base text-slate-600 leading-relaxed">
            Founded by veteran CPAs and IRS Enrolled Agents, ExpatTax US is dedicated exclusively to resolving cross-border tax complexity for Americans living outside the United States.
          </p>
        </div>
      </section>

      {/* Team Photos & Bios */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">Leadership Team</span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Meet Your Dedicated Expat Advisors</h2>
          <p className="text-xs sm:text-sm text-slate-500">Every return is prepared, optimized, and signed by a licensed US practitioner.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition space-y-4 group">
              <div className="h-64 w-full overflow-hidden bg-slate-100 relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-6 pt-0 space-y-2">
                <div className="text-xs font-bold text-sky-600">{member.jurisdiction}</div>
                <h3 className="font-bold text-lg text-slate-900">{member.name}</h3>
                <div className="text-xs font-semibold text-slate-700">{member.role}</div>
                <p className="text-xs text-slate-500 leading-relaxed pt-1">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Credentials Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Licensed Across US Jurisdictions</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our practitioners maintain active CPA licenses in good standing with state accountancy boards (New York, California, Texas) and Federal Enrolled Agent credentials admitted to practice directly before the Internal Revenue Service.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <Globe className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Worldwide Expat Focus</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We do not prepare domestic US storefront returns. 100% of our caseload involves cross-border elements: foreign tax credits, FEIE, FBAR reporting, CFC Form 5471 corporate compliance, and IRS Streamlined Amnesty.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-4">
          <h3 className="text-2xl font-black tracking-tight">Speak Directly with a Senior Expat Tax Advisor</h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Get your questions answered in a confidential consultation tailored to your country of residence and financial profile.
          </p>
          <div className="pt-2">
            <Link
              href="/book-consultation"
              className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl transition shadow-lg"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </section>

    </div>
  );
}
