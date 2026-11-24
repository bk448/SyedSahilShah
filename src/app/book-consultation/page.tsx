'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Calendar, 
  Clock, 
  Globe, 
  Phone, 
  Mail, 
  User, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  AlertCircle
} from 'lucide-react';
import { DIVISIONS, COUNTRIES_DATABASE } from '@/lib/taxData';

export default function BookConsultationPage() {
  const [detectedTimezone, setDetectedTimezone] = useState('America/New_York');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('United Kingdom');
  const [situation, setSituation] = useState('accidental-americans');
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz) setDetectedTimezone(tz);
    } catch (e) {
      // fallback
    }
  }, []);

  const timeSlots = [
    { id: 'slot-1', time: '10:00 AM', label: 'Morning slot (Local Time)' },
    { id: 'slot-2', time: '02:00 PM', label: 'Afternoon slot (Local Time)' },
    { id: 'slot-3', time: '05:30 PM', label: 'Evening slot (Local Time)' },
    { id: 'slot-4', time: '08:00 PM', label: 'Late Evening slot (Local Time)' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold">
          <Calendar className="w-3.5 h-3.5 text-sky-600" />
          <span>Confidential 1-on-1 Strategy Call</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Book an Expat Tax Consultation
        </h1>
        <p className="text-sm text-slate-600">
          Meet via video or phone with a licensed US CPA or Enrolled Agent specializing in your specific country of residence and filing situation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Visual Advisory Banner */}
        <div className="lg:col-span-4 bg-slate-900 text-white rounded-3xl overflow-hidden shadow-xl space-y-6 sticky top-24">
          <div className="relative h-48 w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
              alt="CPA Video Consultation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
            <span className="absolute bottom-3 left-4 text-xs font-bold text-sky-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>30-Minute Confidential Session</span>
            </span>
          </div>

          <div className="p-6 pt-0 space-y-4 text-xs text-slate-300">
            <h3 className="font-bold text-sm text-white">What we cover in your call:</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Eligibility for 0% penalty Streamlined Amnesty</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Foreign pension classification (SIPPs, Super, RRSP)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>FEIE vs. Foreign Tax Credit optimization</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Guaranteed fixed fee filing quote</span>
              </li>
            </ul>

            <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 text-[11px] text-slate-400">
              No sensitive tax identification (SSN/ITIN) is required for this call.
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Booking Form */}
        <div className="lg:col-span-8">
          {submitted ? (
            <div className="bg-white border border-emerald-200 rounded-3xl p-8 sm:p-12 text-center space-y-5 shadow-xl animate-in zoom-in-95">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-slate-900">Consultation Confirmed!</h2>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong>{name}</strong>. A calendar invite with a secure video call link and preparation checklist has been dispatched to <strong>{email}</strong>.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-700 max-w-md mx-auto text-left space-y-2">
                <div><strong>Selected Time:</strong> {selectedSlot || '10:00 AM'} ({detectedTimezone})</div>
                <div><strong>Country of Residence:</strong> {country}</div>
              </div>

              <div className="pt-2">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition"
                >
                  Return to Homepage
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
              
              {/* Timezone banner */}
              <div className="p-3.5 bg-sky-50 border border-sky-200 rounded-xl flex items-center justify-between text-xs text-sky-900">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>
                    Detected local timezone: <strong>{detectedTimezone}</strong>
                  </span>
                </div>
                <span className="text-[11px] text-sky-700 hidden sm:inline">Slots automatically adjusted</span>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Country of Residence *
                  </label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full py-2 px-3 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none bg-white"
                  >
                    {COUNTRIES_DATABASE.map(c => (
                      <option key={c.slug} value={c.countryName}>
                        {c.flagEmoji} {c.countryName}
                      </option>
                    ))}
                    <option value="Other Country">Other International Location</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    International Phone *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+44 7911 123456"
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none"
                    />
                  </div>
                </div>

              </div>

              {/* Situation Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Primary Tax Situation *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {DIVISIONS.map(d => (
                    <label 
                      key={d.slug}
                      className={`flex items-start gap-2.5 p-3 rounded-xl border cursor-pointer transition ${
                        situation === d.slug ? 'border-sky-600 bg-sky-50/50 ring-1 ring-sky-600' : 'border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="situation"
                        value={d.slug}
                        checked={situation === d.slug}
                        onChange={() => setSituation(d.slug)}
                        className="mt-0.5 text-sky-600"
                      />
                      <div>
                        <div className="text-xs font-bold text-slate-900">{d.title}</div>
                        <div className="text-[11px] text-slate-500">{d.tagline}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Time Slot Picker */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Select Preferred Time Slot ({detectedTimezone}) *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {timeSlots.map(slot => (
                    <button
                      type="button"
                      key={slot.id}
                      onClick={() => setSelectedSlot(slot.time)}
                      className={`p-3 rounded-xl border text-center transition ${
                        selectedSlot === slot.time 
                          ? 'border-sky-600 bg-sky-600 text-white font-bold shadow-md' 
                          : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800'
                      }`}
                    >
                      <div className="text-sm font-bold">{slot.time}</div>
                      <div className={`text-[10px] mt-0.5 ${selectedSlot === slot.time ? 'text-sky-100' : 'text-slate-500'}`}>
                        {slot.label}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-6 bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-sky-600/30 transition flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? <span>Scheduling Call...</span> : <span>Confirm Consultation Booking</span>}
                <ArrowRight className="w-4 h-4" />
              </button>

            </form>
          )}
        </div>

      </div>

    </div>
  );
}
