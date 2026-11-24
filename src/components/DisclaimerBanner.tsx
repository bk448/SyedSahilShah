import React from 'react';
import { ShieldCheck, AlertCircle } from 'lucide-react';

export default function DisclaimerBanner() {
  return (
    <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-1 text-center md:text-left">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-sky-400 shrink-0" />
          <span>
            <strong>IRS Circular 230 Disclosure:</strong> Advice published on this site is not intended to be used for avoiding penalties under the Internal Revenue Code.
          </span>
        </div>
        <div className="flex items-center gap-3 text-slate-400 text-[11px]">
          <span>Enrolled Agents & CPAs Licensed</span>
          <span className="hidden sm:inline">•</span>
          <span className="text-emerald-400 font-medium">Serving US Expats in 45+ Countries</span>
        </div>
      </div>
    </div>
  );
}
