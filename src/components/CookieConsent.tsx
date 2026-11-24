'use client';

import React, { useState, useEffect } from 'react';
import { Shield, Cookie, X } from 'lucide-react';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('expat_tax_cookie_consent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('expat_tax_cookie_consent', 'accepted');
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem('expat_tax_cookie_consent', 'essential_only');
    setShow(false);
  };

  if (!show) return null;

  return (
    <aside
      aria-label="Privacy and Cookie Consent"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md bg-white border border-slate-200 shadow-2xl rounded-xl p-5 z-50 transition-all animate-in fade-in slide-in-from-bottom-5"
    >
      <div className="flex items-start gap-3">
        <div className="p-2 bg-sky-50 text-sky-600 rounded-lg shrink-0 mt-0.5">
          <Cookie className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-semibold text-slate-900">GDPR & Cross-Border Privacy Notice</h4>
          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
            As a firm serving Americans living in the EU, UK, and worldwide, we honor GDPR and international privacy standards. We use essential cookies to maintain secure sessions and privacy-respecting analytics.
          </p>
          <div className="flex items-center gap-2 mt-3">
            <button
              onClick={handleAccept}
              className="text-xs font-medium bg-sky-600 text-white px-3.5 py-1.5 rounded-lg hover:bg-sky-700 transition"
            >
              Accept All
            </button>
            <button
              onClick={handleDecline}
              className="text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg hover:bg-slate-200 transition"
            >
              Essential Only
            </button>
          </div>
        </div>
        <button
          onClick={handleDecline}
          aria-label="Close cookie consent banner"
          className="text-slate-400 hover:text-slate-600"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
}
