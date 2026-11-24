import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  ArrowRight, 
  Globe, 
  FileText, 
  CheckCircle, 
  AlertTriangle, 
  Lock, 
  Calendar, 
  Layers, 
  Briefcase, 
  Users, 
  DollarSign,
  Star,
  Clock,
  HelpCircle
} from 'lucide-react';
import { DIVISIONS, FORMS_DATABASE, COUNTRIES_DATABASE, GENERAL_FAQS } from '@/lib/taxData';
import { CountUp } from '@/components/Motion';
import { SplitText } from '@/components/SplitText';

export default function HomePage() {
  const testimonials = [
    {
      name: 'Sarah Jenkins',
      location: 'London, United Kingdom',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      situation: 'Accidental American Catch-Up',
      rating: 5,
      review: 'I had 6 years of unfiled returns and was terrified of the $10,000 FBAR penalties. ExpatTax US completed my Streamlined Amnesty with zero penalties. The peace of mind is priceless.'
    },
    {
      name: 'Michael Becker',
      location: 'Frankfurt, Germany',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      situation: 'GmbH Owner & Form 5471',
      rating: 5,
      review: 'My German GmbH corporate return required complex Form 5471 and GILTI calculations. Their CPAs translated German HGB accounts into US tax GAAP flawlessly.'
    },
    {
      name: 'David Tan',
      location: 'Singapore',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      situation: 'FEIE & Foreign Pension',
      rating: 5,
      review: 'Singapore has no capital gains tax, which creates complex US tax traps. ExpatTax US structured my CPF pensions and foreign accounts with total transparency.'
    }
  ];

  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-slate-50 pt-16 pb-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column (Headlines & CTAs) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold tracking-wide">
                <ShieldCheck className="w-4 h-4 text-sky-600" />
                <span>IRS Enrolled Agents &amp; Licensed US CPAs</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                US Expat Taxes, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600">
                  Accurate &amp; Penalty-Free
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Specialist cross-border tax compliance for Americans living abroad. Whether you need standard annual 1040s, penalty-free Streamlined Amnesty, or complex Foreign Corporation (5471) reporting—we protect your assets worldwide.
              </p>

              {/* Primary Dual CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/book-consultation"
                  className="w-full sm:w-auto px-7 py-3.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-sky-600/30 transition flex items-center justify-center gap-2 group"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </Link>

                <Link
                  href="/request-quote"
                  className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm rounded-xl border border-slate-300 shadow-sm transition flex items-center justify-center gap-2"
                >
                  <DollarSign className="w-4 h-4 text-emerald-600" />
                  <span>Request a Fixed Quote</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200/80 text-center lg:text-left">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900">
                    <CountUp value="4,500+" />
                  </div>
                  <div className="text-xs text-slate-500 font-medium">Expat Returns Filed</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900">
                    <CountUp value="45+" />
                  </div>
                  <div className="text-xs text-slate-500 font-medium">Countries Covered</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-emerald-600">
                    <CountUp value="$0" />
                  </div>
                  <div className="text-xs text-slate-500 font-medium">Amnesty Penalties Paid</div>
                </div>
              </div>

            </div>

            {/* Right Column (Hero Visual with Trust Badges) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="US Expat Tax CPA Advisory Team"
                  className="w-full h-80 sm:h-96 object-cover opacity-90 hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="flex items-center gap-2 text-xs font-bold text-sky-400">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Global CPA Filing Desk</span>
                  </div>
                  <div className="text-sm font-semibold mt-1">Cross-Border US Tax Specialists</div>
                  <div className="text-xs text-slate-300">London &bull; Toronto &bull; Sydney &bull; Singapore</div>
                </div>
              </div>

              {/* Floating Trust Card with Glassmorphism */}
              <div className="absolute -bottom-6 -left-6 glass border border-white/80 rounded-2xl p-4 shadow-xl hidden sm:flex items-center gap-3 backdrop-blur-md">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-600 flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">IRS Streamlined Amnesty</div>
                  <div className="text-[11px] text-slate-600 font-medium">100% Penalty-Free Track Record</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Practice Divisions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 reveal">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">Practice Divisions</span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Structured Around Your Exact Situation</h2>
          <p className="text-sm text-slate-600">
            Cross-border taxation is never one-size-fits-all. Our six specialized divisions handle everything from first-time expat workers to complex international trusts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch reveal-stagger">
          {DIVISIONS.map((division) => (
            <div 
              key={division.slug}
              className="card bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:border-sky-300 transition flex flex-col justify-between group"
            >
              {/* Perfectly uniform 16/10 aspect ratio image */}
              <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-slate-100">
                <img
                  src={division.imageUrl}
                  alt={division.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <span className="absolute top-3 left-3 text-[11px] font-bold text-white bg-slate-900/80 backdrop-blur-sm px-2.5 py-0.5 rounded-full">
                  Division
                </span>
              </div>

              {/* Balanced Text Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition line-clamp-1">
                    <Link href={`/divisions/${division.slug}`}>
                      {division.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {division.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 space-y-1.5">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Key Forms Handled:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {division.commonForms.map(form => (
                      <span key={form.formNumber} className="text-[10px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                        {form.formNumber}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <Link 
                    href={`/divisions/${division.slug}`}
                    className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1 group-hover:translate-x-1 transition"
                  >
                    <span>Explore Division Guidance</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Why Choose Us / Trust Feature Section with Visual Photography */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">Why Choose ExpatTax US</span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight leading-snug">
                Direct CPA Representation, Transparent Fixed Fees &amp; Zero Automation Shortcuts
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Many online expat tax platforms outsource filings to non-credentialed contractors. At ExpatTax US, every single return, foreign information schedule, and Streamlined statement is directly authored, optimized, and signed by a licensed CPA or IRS Enrolled Agent.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white">Full IRS Audit Defense</div>
                    <div className="text-[11px] text-slate-400">Power of attorney representation included</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white">Guaranteed Fixed Pricing</div>
                    <div className="text-[11px] text-slate-400">No hidden hourly billable charges</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white">Bank-Grade 256-Bit Portal</div>
                    <div className="text-[11px] text-slate-400">Encrypted cross-border document vault</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white">Timezone Synchronized</div>
                    <div className="text-[11px] text-slate-400">Advisors available across London, US, &amp; Asia</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-80 lg:h-full min-h-[350px]">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
                alt="Cross-Border Tax Advisory Consultation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            </div>

          </div>
        </div>
      </section>

      {/* 4. Critical Forms & Penalty Warning Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">Forms Knowledgebase</span>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 mt-1">IRS Expat Forms &amp; Penalty Library</h2>
            <p className="text-sm text-slate-600 max-w-xl mt-2">
              Foreign informational returns carry astronomical penalties ($10,000+ per form per year). Understand what you owe and when it is due.
            </p>
          </div>
          <Link 
            href="/forms"
            className="text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white px-4 py-2.5 rounded-lg transition shrink-0"
          >
            Browse All ~30 Forms &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal-stagger">
          {FORMS_DATABASE.slice(0, 4).map(form => (
            <div 
              key={form.slug}
              className="card bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-sky-300 transition flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-sky-900 bg-sky-100 px-2 py-0.5 rounded">
                    Form {form.formNumber}
                  </span>
                  <span className="text-[10px] text-rose-700 font-bold uppercase tracking-wider bg-rose-50 px-2 py-0.5 rounded-full">
                    {form.penaltySeverity} penalty
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 line-clamp-1">{form.name}</h3>
                <p className="text-xs text-slate-600 line-clamp-2">{form.summary}</p>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <div className="text-[11px] text-rose-700 font-semibold line-clamp-1">
                  ⚠️ {form.penalties}
                </div>
                <Link 
                  href={`/forms/${form.slug}`}
                  className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1 mt-2"
                >
                  <span>Read Filing Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Country Specific Expat Guidance with Balanced Skyline Photos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">Country Tax Treaties</span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-1">Country-Specific Expat Guides</h2>
            <p className="text-sm text-slate-600 max-w-2xl mt-2">
              Bilateral tax treaties, local pension classification (SIPPs, Australian Super, RRSPs), and PFIC pitfalls vary drastically by country.
            </p>
          </div>
          <Link 
            href="/countries"
            className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1"
          >
            <span>View All 16 Country Guides</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch reveal-stagger">
          {COUNTRIES_DATABASE.slice(0, 6).map(country => (
            <Link
              key={country.slug}
              href={`/countries/${country.slug}`}
              className="card country-card bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:border-sky-300 hover:shadow-md transition group flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-slate-100">
                <img
                  src={country.imageUrl}
                  alt={country.countryName}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white flex items-center gap-2">
                  <span className="text-2xl">{country.flagEmoji}</span>
                  <div className="font-bold text-sm">{country.countryName}</div>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1">
                  <span className="text-[11px] text-slate-400 font-medium">{country.region} &bull; {country.localTaxYear}</span>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {country.treatySummary}
                  </p>
                </div>

                <div className="pt-2 text-xs font-bold text-sky-600 flex items-center gap-1">
                  <span>View local pensions &amp; PFIC traps</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Real Client Testimonials with Expat Avatars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">Client Reviews</span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Trusted by US Citizens Worldwide</h2>
          <p className="text-xs sm:text-sm text-slate-500">Read verified experiences from American professionals and families living abroad.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal-stagger">
          {testimonials.map((t, idx) => (
            <div key={idx} className="card bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed italic">
                  "{t.review}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border border-slate-200 shrink-0"
                />
                <div>
                  <div className="text-xs font-bold text-slate-900">{t.name}</div>
                  <div className="text-[11px] text-slate-500">{t.location}</div>
                  <div className="text-[10px] text-sky-600 font-semibold">{t.situation}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Conversion Banner with High-Resolution Visual */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-950 text-white">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
              alt="Global Cross-Border Financial Hub"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent" />
          </div>

          <div className="relative z-10 p-8 sm:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">Start Today</span>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
                Ready to eliminate US expat tax stress?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Schedule a 30-minute cross-border consultation with a licensed CPA or submit your situation for an all-inclusive fixed fee quote.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
              <Link
                href="/book-consultation"
                className="px-7 py-3.5 bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs rounded-xl shadow-lg transition text-center"
              >
                Book a Consultation
              </Link>
              <Link
                href="/request-quote"
                className="px-7 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs rounded-xl transition text-center"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
