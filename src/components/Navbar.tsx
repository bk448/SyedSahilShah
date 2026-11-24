'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Globe, 
  ChevronDown, 
  Menu, 
  X, 
  Search, 
  Lock, 
  Calendar, 
  FileText, 
  Layers, 
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import SearchModal from './SearchModal';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-600 to-indigo-900 flex items-center justify-center text-white shadow-md shadow-sky-600/20">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-lg text-slate-900 tracking-tight flex items-center gap-1.5">
                  ExpatTax<span className="text-sky-600 font-extrabold">US</span>
                </span>
                <span className="block text-[10px] text-slate-700 tracking-wider font-semibold uppercase -mt-1">
                  Cross-Border CPAs
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              
              {/* Divisions Dropdown */}
              <div className="relative group" onMouseLeave={() => setActiveDropdown(null)}>
                <button 
                  onClick={() => toggleDropdown('divisions')}
                  onMouseEnter={() => setActiveDropdown('divisions')}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-700 hover:text-sky-600 rounded-md hover:bg-slate-50 transition"
                >
                  <span>By Situation</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition duration-200" />
                </button>

                {activeDropdown === 'divisions' && (
                  <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-slate-200 p-2 mt-1 z-50 animate-in fade-in slide-in-from-top-2">
                    <div className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700 border-b border-slate-100">
                      Client Divisions
                    </div>
                    <Link 
                      href="/divisions/accidental-americans" 
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-sky-50 text-slate-800 hover:text-sky-900 transition"
                    >
                      <ShieldAlert className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs font-bold">Accidental Americans & Catch-Up</div>
                        <div className="text-[11px] text-slate-700">IRS Streamlined Amnesty for multiple late years</div>
                      </div>
                    </Link>
                    <Link 
                      href="/divisions/individuals-families" 
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-sky-50 text-slate-800 hover:text-sky-900 transition"
                    >
                      <Layers className="w-4 h-4 text-sky-500 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs font-bold">Individuals & Families Abroad</div>
                        <div className="text-[11px] text-slate-700">1040, FEIE Form 2555, FTC & FBAR</div>
                      </div>
                    </Link>
                    <Link 
                      href="/divisions/business-owners" 
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-sky-50 text-slate-800 hover:text-sky-900 transition"
                    >
                      <FileText className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs font-bold">Business Owners Abroad</div>
                        <div className="text-[11px] text-slate-700">Foreign Corp Form 5471, CFC & GILTI</div>
                      </div>
                    </Link>
                    <Link 
                      href="/divisions/green-card-holders" 
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-sky-50 text-slate-800 hover:text-sky-900 transition"
                    >
                      <Globe className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs font-bold">Green Card Holders Abroad</div>
                        <div className="text-[11px] text-slate-700">Continuing compliance & Form I-407 exit</div>
                      </div>
                    </Link>
                    <Link 
                      href="/divisions/moving-and-returning" 
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-sky-50 text-slate-800 hover:text-sky-900 transition"
                    >
                      <Calendar className="w-4 h-4 text-purple-500 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs font-bold">Moving Abroad & Returning</div>
                        <div className="text-[11px] text-slate-700">Dual-status returns & state exit (CA/NY)</div>
                      </div>
                    </Link>
                    <Link 
                      href="/divisions/private-client" 
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-sky-50 text-slate-800 hover:text-sky-900 transition"
                    >
                      <Lock className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs font-bold">Private Client & Foreign Trusts</div>
                        <div className="text-[11px] text-slate-700">Form 3520/3520-A & cross-border estates</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Services Hub */}
              <Link 
                href="/services" 
                className={`px-3 py-2 text-sm font-medium rounded-md transition ${
                  pathname.startsWith('/services') ? 'text-sky-600 bg-sky-50 font-semibold' : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'
                }`}
              >
                Services
              </Link>

              {/* Forms Library */}
              <Link 
                href="/forms" 
                className={`px-3 py-2 text-sm font-medium rounded-md transition ${
                  pathname.startsWith('/forms') ? 'text-sky-600 bg-sky-50 font-semibold' : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'
                }`}
              >
                Forms Library
              </Link>

              {/* Countries Guide */}
              <Link 
                href="/countries" 
                className={`px-3 py-2 text-sm font-medium rounded-md transition ${
                  pathname.startsWith('/countries') ? 'text-sky-600 bg-sky-50 font-semibold' : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'
                }`}
              >
                Country Guides
              </Link>

              {/* Deadlines */}
              <Link 
                href="/deadlines" 
                className={`px-3 py-2 text-sm font-medium rounded-md transition ${
                  pathname === '/deadlines' ? 'text-sky-600 bg-sky-50 font-semibold' : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'
                }`}
              >
                Deadlines
              </Link>

              {/* Pricing */}
              <Link 
                href="/pricing" 
                className={`px-3 py-2 text-sm font-medium rounded-md transition ${
                  pathname === '/pricing' ? 'text-sky-600 bg-sky-50 font-semibold' : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'
                }`}
              >
                Pricing
              </Link>
            </nav>

            {/* Actions (Search, Portal Login, CTAs) */}
            <div className="hidden lg:flex items-center gap-3">
              <button 
                onClick={() => setSearchOpen(true)}
                aria-label="Search forms and services"
                className="p-2 text-slate-500 hover:text-sky-600 rounded-lg hover:bg-slate-100 transition"
              >
                <Search className="w-4 h-4" />
              </button>

              <Link 
                href="/portal"
                className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-sky-600 px-3 py-2 border border-slate-200 rounded-lg hover:border-slate-300 transition"
              >
                <Lock className="w-3.5 h-3.5 text-sky-600" />
                <span>Client Portal</span>
              </Link>

              <Link 
                href="/book-consultation"
                className="text-xs font-bold bg-sky-600 hover:bg-sky-700 text-white px-4 py-2.5 rounded-lg shadow-sm shadow-sky-600/30 transition flex items-center gap-1"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setSearchOpen(true)}
                aria-label="Search"
                className="p-2 text-slate-600 hover:text-sky-600"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="p-2 text-slate-700 hover:text-sky-600"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
            <div className="text-xs font-bold text-slate-700 uppercase tracking-wider px-2">Divisions (Situations)</div>
            <div className="grid grid-cols-1 gap-1 pl-2">
              <Link href="/divisions/accidental-americans" onClick={() => setMobileMenuOpen(false)} className="py-1 text-sm font-medium text-slate-700">Accidental Americans & Catch-Up</Link>
              <Link href="/divisions/individuals-families" onClick={() => setMobileMenuOpen(false)} className="py-1 text-sm font-medium text-slate-700">Expat Individuals & Families</Link>
              <Link href="/divisions/business-owners" onClick={() => setMobileMenuOpen(false)} className="py-1 text-sm font-medium text-slate-700">Business Owners Abroad</Link>
              <Link href="/divisions/green-card-holders" onClick={() => setMobileMenuOpen(false)} className="py-1 text-sm font-medium text-slate-700">Green Card Holders Abroad</Link>
              <Link href="/divisions/moving-and-returning" onClick={() => setMobileMenuOpen(false)} className="py-1 text-sm font-medium text-slate-700">Moving Abroad & Returning</Link>
              <Link href="/divisions/private-client" onClick={() => setMobileMenuOpen(false)} className="py-1 text-sm font-medium text-slate-700">Private Client & Foreign Trusts</Link>
            </div>

            <div className="border-t border-slate-100 pt-2 space-y-1">
              <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-2 text-sm font-medium text-slate-700">Services Hub</Link>
              <Link href="/forms" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-2 text-sm font-medium text-slate-700">Forms Library</Link>
              <Link href="/countries" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-2 text-sm font-medium text-slate-700">Country Tax Guides</Link>
              <Link href="/deadlines" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-2 text-sm font-medium text-slate-700">Expat Deadlines Calendar</Link>
              <Link href="/pricing" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-2 text-sm font-medium text-slate-700">Pricing & Packages</Link>
            </div>

            <div className="border-t border-slate-100 pt-3 space-y-2">
              <Link 
                href="/portal" 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg border border-slate-200 text-sm font-semibold text-slate-700"
              >
                <Lock className="w-4 h-4 text-sky-600" />
                <span>Client Portal Login</span>
              </Link>
              <Link 
                href="/book-consultation" 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-sky-600 text-white text-sm font-bold shadow-md shadow-sky-600/20"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Quick Search Dialog */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
