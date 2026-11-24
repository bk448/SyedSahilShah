import { NextResponse } from 'next/server';
import { signSessionToken } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    let user = null;

    if (email === 'client@expat-tax.com' && password === 'demo123') {
      user = {
        email: 'client@expat-tax.com',
        name: 'Sarah Jenkins',
        role: 'client' as const,
        filingYear: 2025,
        portalId: 'EXP-8842',
        assignedCpa: 'Marcus Vance, CPA'
      };
    } else if (email === 'cpa@expat-tax.com' && password === 'demo123') {
      user = {
        email: 'cpa@expat-tax.com',
        name: 'Marcus Vance, CPA',
        role: 'cpa' as const,
        portalId: 'CPA-001'
      };
    } else if (email && password.length >= 6) {
      // Allow custom sign-in for demo purposes
      user = {
        email,
        name: email.split('@')[0],
        role: 'client' as const,
        filingYear: 2025,
        portalId: 'EXP-' + Math.floor(1000 + Math.random() * 9000),
        assignedCpa: 'Elena Rostova, EA'
      };
    } else {
      return NextResponse.json({ error: 'Invalid credentials. Password must be at least 6 characters.' }, { status: 401 });
    }

    const token = await signSessionToken(user);

    const response = NextResponse.json({
      success: true,
      user
    });

    response.cookies.set('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 // 24 hours
    });

    return response;
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Authentication error' }, { status: 500 });
  }
}
