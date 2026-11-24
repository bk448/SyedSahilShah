'use client';

import React, { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Lock, Mail, Key, Shield, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/portal';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e?: React.FormEvent, customEmail?: string, customPw?: string) => {
    if (e) e.preventDefault();
    setError(null);
    setLoading(true);

    const loginEmail = customEmail || email;
    const loginPw = customPw || password;

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: loginEmail, password: loginPw })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Login failed');
      }

      router.push(callbackUrl);
      router.refresh();
    } catch (err: any) {
      setError(err.message || 'An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  const handleQuickDemo = (role: 'client' | 'cpa') => {
    if (role === 'client') {
      setEmail('client@expat-tax.com');
      setPassword('demo123');
      handleLogin(undefined, 'client@expat-tax.com', 'demo123');
    } else {
      setEmail('cpa@expat-tax.com');
      setPassword('demo123');
      handleLogin(undefined, 'cpa@expat-tax.com', 'demo123');
    }
  };

  return (
    <div className="max-w-md w-full space-y-6 bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-slate-200">
      
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="w-12 h-12 bg-sky-100 text-sky-700 rounded-2xl flex items-center justify-center mx-auto shadow-inner">
          <Lock className="w-6 h-6" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Client Portal Login</h1>
        <p className="text-xs text-slate-500">
          Secure 256-bit encrypted access for your tax filings and documents.
        </p>
      </div>

      {/* 1-Click Demo Buttons for Fast Testing on Vercel */}
      <div className="p-4 bg-sky-50 border border-sky-100 rounded-xl space-y-2">
        <div className="text-[11px] font-bold text-sky-900 uppercase tracking-wider flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
          <span>Instant Demo Access (1-Click)</span>
        </div>
        <div className="grid grid-cols-2 gap-2 pt-1">
          <button
            type="button"
            onClick={() => handleQuickDemo('client')}
            disabled={loading}
            className="text-xs font-semibold py-2 px-3 bg-white hover:bg-sky-100 text-sky-800 border border-sky-200 rounded-lg shadow-sm transition text-left"
          >
            <div className="font-bold">Expat Client</div>
            <div className="text-[10px] text-slate-500">Sarah Jenkins (UK)</div>
          </button>
          <button
            type="button"
            onClick={() => handleQuickDemo('cpa')}
            disabled={loading}
            className="text-xs font-semibold py-2 px-3 bg-white hover:bg-sky-100 text-sky-800 border border-sky-200 rounded-lg shadow-sm transition text-left"
          >
            <div className="font-bold">CPA Advisor</div>
            <div className="text-[10px] text-slate-500">Marcus Vance, CPA</div>
          </button>
        </div>
      </div>

      {error && (
        <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg text-rose-700 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Standard Credentials Form */}
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Email Address
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none"
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Password
            </label>
            <span className="text-[11px] text-slate-400">Demo: demo123</span>
          </div>
          <div className="relative">
            <Key className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2.5 px-4 bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm rounded-lg shadow-md shadow-sky-600/20 transition flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {loading ? (
            <span>Authenticating...</span>
          ) : (
            <>
              <span>Sign In to Portal</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      <div className="border-t border-slate-100 pt-4 text-center">
        <p className="text-xs text-slate-500">
          Need to file for the first time?{' '}
          <Link href="/book-consultation" className="text-sky-600 font-bold hover:underline">
            Book a Consultation
          </Link>
        </p>
      </div>

    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Suspense fallback={<div className="text-slate-500 text-sm">Loading portal login...</div>}>
        <LoginForm />
      </Suspense>
    </div>
  );
}
