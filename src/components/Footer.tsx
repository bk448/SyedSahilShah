import React from 'react';
import Link from 'next/link';
import { Globe, Shield, Lock, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 mt-auto border-t border-slate-800">
      
      {/* Top Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & Credentials */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-white">
                <Globe className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                ExpatTax<span className="text-sky-400">US</span>
              </span>
            </Link>
            
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Specialist US cross-border tax compliance, Streamlined amnesty filings, and corporate advisory for American expats, dual citizens, and green card holders worldwide.
            </p>

            <div className="flex flex-col gap-2 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>IRS Enrolled Agents &amp; Licensed CPAs</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>256-Bit Bank-Grade Portal Security</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                <span>US Headquarters &amp; Cross-Border Advisory Desks</span>
              </div>
            </div>
          </div>

          {/* Quick Divisions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Client Situations</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/divisions/accidental-americans" className="hover:text-sky-400 transition">Accidental Americans</Link></li>
              <li><Link href="/divisions/individuals-families" className="hover:text-sky-400 transition">Individuals &amp; Families</Link></li>
              <li><Link href="/divisions/business-owners" className="hover:text-sky-400 transition">Business Owners Abroad</Link></li>
              <li><Link href="/divisions/green-card-holders" className="hover:text-sky-400 transition">Green Card Holders</Link></li>
              <li><Link href="/divisions/moving-and-returning" className="hover:text-sky-400 transition">Moving Abroad &amp; Returning</Link></li>
              <li><Link href="/divisions/private-client" className="hover:text-sky-400 transition">Private Client &amp; Trusts</Link></li>
            </ul>
          </div>

          {/* Key Forms & Deadlines */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Forms &amp; Resources</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/forms/form-1040-expat" className="hover:text-sky-400 transition">Form 1040 Expat Rules</Link></li>
              <li><Link href="/forms/fincen-form-114-fbar" className="hover:text-sky-400 transition">FBAR FinCEN 114</Link></li>
              <li><Link href="/forms/form-5471-foreign-corporation" className="hover:text-sky-400 transition">Form 5471 (Foreign Corp)</Link></li>
              <li><Link href="/forms/form-8621-pfic" className="hover:text-sky-400 transition">Form 8621 (PFIC Traps)</Link></li>
              <li><Link href="/deadlines" className="hover:text-sky-400 transition font-medium text-sky-400">Expat Deadlines Calendar</Link></li>
              <li><Link href="/faqs" className="hover:text-sky-400 transition">Expat Tax FAQs</Link></li>
            </ul>
          </div>

          {/* Action & Client Access */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Client Services</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/portal" className="text-sky-400 hover:underline flex items-center gap-1 font-semibold"><span>Secure Client Portal</span> &rarr;</Link></li>
              <li><Link href="/book-consultation" className="hover:text-sky-400 transition">Book a Consultation</Link></li>
              <li><Link href="/request-quote" className="hover:text-sky-400 transition">Request a Fixed Quote</Link></li>
              <li><Link href="/pricing" className="hover:text-sky-400 transition">Pricing &amp; Packages</Link></li>
              <li><Link href="/about" className="hover:text-sky-400 transition">About Our Firm</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Mandatory Regulatory & Legal Bar */}
      <div className="border-t border-slate-900 bg-black/40 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4 text-xs text-slate-400 leading-relaxed">
          
          <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 text-[11px] text-slate-400">
            <strong className="text-slate-300">IRS Circular 230 &amp; Professional Disclaimer:</strong> To comply with requirements imposed by the IRS and US Treasury Department, any federal tax advice contained on this website is not intended or written to be used, and cannot be used, for the purpose of (i) avoiding penalties under the Internal Revenue Code or (ii) promoting, marketing, or recommending to another party any transaction or matter addressed herein. Formal professional engagement is required for individualized tax advice.
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 pt-2">
            <div>
              &copy; {new Date().getFullYear()} ExpatTax US PLLC. All Rights Reserved. Cross-border tax compliance services.
            </div>
            <div className="flex items-center gap-4 text-xs">
              <Link href="/privacy" className="text-slate-400 hover:text-sky-400 transition underline underline-offset-2">
                Privacy Policy (GDPR Compliant)
              </Link>
              <span>•</span>
              <Link href="/terms" className="text-slate-400 hover:text-sky-400 transition underline underline-offset-2">
                Terms of Service
              </Link>
              <span>•</span>
              <span className="text-slate-400">
                Essential Cookie Notice
              </span>
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
}
