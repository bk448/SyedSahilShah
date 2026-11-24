import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Calendar, 
  HelpCircle, 
  FileText,
  DollarSign,
  Clock,
  Briefcase
} from 'lucide-react';
import { getServiceBySlug, SERVICES_CATALOG } from '@/lib/servicesData';
import { FORMS_DATABASE } from '@/lib/taxData';

export function generateStaticParams() {
  return SERVICES_CATALOG.map((s) => ({ slug: s.slug }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="space-y-16 pb-20">
      
      {/* Service Header with Visual Photo & Glassmorphic Highlights */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-6">
          <nav className="text-xs text-slate-400 flex items-center gap-2">
            <Link href="/" className="hover:text-sky-400">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-sky-400">Services</Link>
            <span>/</span>
            <span className="text-slate-200 font-semibold">{service.title}</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sky-300 text-xs font-bold">
              <Briefcase className="w-3.5 h-3.5" />
              <span>{service.category}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
              {service.tagline}
            </p>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {service.summary}
            </p>
          </div>

          {/* Glassmorphic Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl pt-2">
            <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Pricing</span>
              <div className="text-sm font-extrabold text-white mt-0.5">{service.pricingRange}</div>
            </div>
            <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Turnaround</span>
              <div className="text-sm font-extrabold text-white mt-0.5">{service.turnaroundTime}</div>
            </div>
            <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 col-span-2 sm:col-span-1">
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Advisor Review</span>
              <div className="text-sm font-extrabold text-emerald-400 mt-0.5">Licensed CPA Sign-Off</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/book-consultation"
              className="px-7 py-3.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-sky-600/30 transition flex items-center gap-2 transform active:scale-95"
            >
              <span>Book Strategy Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/request-quote"
              className="px-7 py-3.5 bg-white/15 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 font-bold text-xs rounded-xl transition transform active:scale-95"
            >
              Request a Fixed Fee Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Main Grid: Process & Related Forms */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* 3-Step Process Overview */}
          <div className="lg:col-span-2 bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">Standard Workflow</span>
              <h2 className="text-2xl font-black text-slate-900 mt-1">
                How We Deliver This Service
              </h2>
            </div>

            <div className="space-y-6">
              {service.processSteps.map((step) => (
                <div key={step.step} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-sky-200 transition">
                  <div className="w-10 h-10 rounded-xl bg-sky-600 text-white font-bold flex items-center justify-center shrink-0 text-sm shadow-md shadow-sky-600/20">
                    {step.step}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm text-slate-900">{step.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Who needs this list */}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Who Should Engage This Service:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service.whoNeedsThis.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* E-E-A-T Quality Stamp */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Reviewed for accuracy by Marcus Vance, CPA
              </span>
              <span>Updated for Tax Year 2025/2026</span>
            </div>
          </div>

          {/* Related Forms & Situation Sidebar */}
          <div className="space-y-6">
            
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
              <h3 className="font-bold text-xs uppercase tracking-wider text-slate-400">Related Tax Schedules</h3>
              <div className="space-y-2">
                {FORMS_DATABASE.slice(0, 3).map(f => (
                  <Link
                    key={f.slug}
                    href={`/forms/${f.slug}`}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-sky-50 transition group"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-900">Form {f.formNumber}</div>
                      <div className="text-[11px] text-slate-500 line-clamp-1">{f.name}</div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-sky-600 transition" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-sky-950 to-slate-900 text-white rounded-3xl p-6 shadow-lg space-y-4">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">Upfront Guarantee</span>
              <div className="text-xl font-bold">Guaranteed Fixed Rates</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                We believe in zero billing surprises. You receive a binding flat fee covering drafting, review, and e-filing before work begins.
              </p>
              <Link 
                href="/pricing" 
                className="text-xs text-sky-400 hover:underline block pt-1 font-semibold"
              >
                View Pricing Packages &rarr;
              </Link>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
