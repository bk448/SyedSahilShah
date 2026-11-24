'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, X, ArrowRight, FileText, Globe, Layers } from 'lucide-react';
import { FORMS_DATABASE, COUNTRIES_DATABASE, DIVISIONS } from '@/lib/taxData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredForms = FORMS_DATABASE.filter(f => 
    f.formNumber.toLowerCase().includes(query.toLowerCase()) || 
    f.name.toLowerCase().includes(query.toLowerCase()) ||
    f.category.toLowerCase().includes(query.toLowerCase())
  );

  const filteredCountries = COUNTRIES_DATABASE.filter(c => 
    c.countryName.toLowerCase().includes(query.toLowerCase()) ||
    c.region.toLowerCase().includes(query.toLowerCase())
  );

  const filteredDivisions = DIVISIONS.filter(d =>
    d.title.toLowerCase().includes(query.toLowerCase()) ||
    d.tagline.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Search Input Box */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search tax forms (1040, 5471, FBAR), countries (UK, Australia), or situations..."
            className="w-full text-base text-slate-900 placeholder:text-slate-400 bg-transparent focus:outline-none"
          />
          <button 
            onClick={onClose}
            aria-label="Close search"
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Results */}
        <div className="max-h-96 overflow-y-auto p-4 space-y-4">
          
          {/* Quick Filter: Forms */}
          {filteredForms.length > 0 && (
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" />
                <span>Tax Forms ({filteredForms.length})</span>
              </div>
              <div className="space-y-1">
                {filteredForms.slice(0, 4).map(form => (
                  <Link
                    key={form.slug}
                    href={`/forms/${form.slug}`}
                    onClick={onClose}
                    className="flex items-center justify-between p-2.5 rounded-lg hover:bg-sky-50 text-slate-800 transition group"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-900 flex items-center gap-2">
                        <span className="bg-sky-100 text-sky-800 px-1.5 py-0.5 rounded text-[11px]">
                          Form {form.formNumber}
                        </span>
                        <span>{form.name}</span>
                      </div>
                      <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{form.summary}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-sky-600 group-hover:translate-x-1 transition shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Quick Filter: Countries */}
          {filteredCountries.length > 0 && (
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                <span>Country Guides ({filteredCountries.length})</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {filteredCountries.slice(0, 4).map(country => (
                  <Link
                    key={country.slug}
                    href={`/countries/${country.slug}`}
                    onClick={onClose}
                    className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-sky-50 text-slate-800 transition"
                  >
                    <span className="text-xl">{country.flagEmoji}</span>
                    <div>
                      <div className="text-xs font-bold text-slate-900">{country.countryName}</div>
                      <div className="text-[10px] text-slate-500">{country.region}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Quick Filter: Situations */}
          {filteredDivisions.length > 0 && (
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>Client Situations ({filteredDivisions.length})</span>
              </div>
              <div className="space-y-1">
                {filteredDivisions.slice(0, 3).map(div => (
                  <Link
                    key={div.slug}
                    href={`/divisions/${div.slug}`}
                    onClick={onClose}
                    className="block p-2 rounded-lg hover:bg-sky-50 text-slate-800 transition"
                  >
                    <div className="text-xs font-bold text-slate-900">{div.title}</div>
                    <div className="text-[11px] text-slate-500">{div.tagline}</div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {filteredForms.length === 0 && filteredCountries.length === 0 && filteredDivisions.length === 0 && (
            <div className="py-8 text-center text-slate-500 text-sm">
              No matching forms, countries, or situations found for "{query}".
            </div>
          )}

        </div>

        {/* Footer info */}
        <div className="bg-slate-50 px-4 py-2.5 border-t border-slate-200 text-xs text-slate-500 flex justify-between items-center">
          <span>Search forms, penalties, treaties, and filing guides</span>
          <span className="text-[11px] text-slate-400">ESC to exit</span>
        </div>

      </div>
    </div>
  );
}
