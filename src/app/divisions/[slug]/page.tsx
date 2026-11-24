import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { DIVISIONS } from '@/lib/taxData';
import { 
  ShieldCheck, 
  ArrowRight, 
  AlertTriangle, 
  CheckCircle2, 
  FileText, 
  Calendar,
  Layers,
  PhoneCall
} from 'lucide-react';

export function generateStaticParams() {
  return DIVISIONS.map((d) => ({ slug: d.slug }));
}

export default function DivisionPage({ params }: { params: { slug: string } }) {
  const division = DIVISIONS.find((d) => d.slug === params.slug);

  if (!division) {
    notFound();
  }

  return (
    <div className="space-y-16 pb-20">
      
      {/* Division Header with Hero Image Banner */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={division.imageUrl}
            alt={division.title}
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-6">
          <nav className="text-xs text-slate-400 flex items-center gap-2">
            <Link href="/" className="hover:text-sky-400">Home</Link>
            <span>/</span>
            <span className="text-slate-500">Divisions</span>
            <span>/</span>
            <span className="text-slate-200 font-semibold">{division.title}</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-800 text-sky-400 text-xs font-bold">
              <Layers className="w-3.5 h-3.5" />
              <span>Specialized Practice Division</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              {division.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium">
              {division.tagline}
            </p>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {division.description}
            </p>
          </div>

          {division.urgentNotice && (
            <div className="p-4 bg-amber-500/10 border-l-4 border-amber-500 rounded-r-xl max-w-3xl flex items-start gap-3 backdrop-blur-sm">
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs text-amber-200 leading-relaxed">
                <strong className="block font-bold text-amber-300 mb-0.5">Critical Compliance Notice:</strong>
                {division.urgentNotice}
              </div>
            </div>
          )}

          {/* Quick Consultation CTA */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/book-consultation"
              className="px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow-md transition flex items-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Book a Situation Consultation</span>
            </Link>

            <Link
              href="/request-quote"
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs rounded-xl transition"
            >
              Request a Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Grid: Who Is This For & Key Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Who is this for */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-600" />
              <span>Who Needs This Division</span>
            </h2>
            <ul className="space-y-3">
              {division.whoIsThisFor.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs text-slate-700 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Advantages */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Our Direct Protection &amp; Guarantees</span>
            </h2>
            <ul className="space-y-3">
              {division.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs text-slate-700 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Division Key Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">Services</span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">Core Services for this Division</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {division.keyServices.map((service) => (
            <div key={service.slug} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="font-bold text-sm text-slate-900">{service.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
              <Link 
                href={`/services/${service.slug}`}
                className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1 pt-2"
              >
                <span>Service details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Common IRS Forms Touched */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">Required Disclosures</span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">Common IRS Forms in this Category</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {division.commonForms.map((form) => (
            <div key={form.formNumber} className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-sky-600" />
                <span className="font-bold text-xs text-slate-900">{form.formNumber}</span>
              </div>
              <div className="text-[11px] text-slate-600">{form.name}</div>
              <Link 
                href="/forms"
                className="text-[11px] text-sky-600 font-semibold hover:underline block pt-1"
              >
                View form details &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
