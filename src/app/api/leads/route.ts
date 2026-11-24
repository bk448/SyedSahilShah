import { NextResponse } from 'next/server';
import { appendLeadToGoogleSheet } from '@/lib/googleSheets';

export const runtime = 'nodejs';

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export async function POST(request: Request) {
  try {
    const payload: unknown = await request.json();
    if (!isRecord(payload)) {
      return NextResponse.json({ success: false, error: 'Invalid booking details' }, { status: 400 });
    }

    const body = payload;
    const text = (value: unknown) =>
      typeof value === 'string' ? value.trim().slice(0, 1000) : '';
    const name = text(body.name);
    const email = text(body.email);

    if (!name || !email) {
      return NextResponse.json({ success: false, error: 'Name and email are required' }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ success: false, error: 'Enter a valid email address' }, { status: 400 });
    }

    await appendLeadToGoogleSheet({
      type: text(body.type) || 'consultation',
      name,
      email,
      phone: text(body.phone),
      country: text(body.country) || 'Not specified',
      situation: text(body.situation),
      selectedSlot: text(body.selectedSlot),
      yearsBehind: text(body.yearsBehind),
      foreignAccounts: text(body.foreignAccounts),
      hasForeignCompany: text(body.hasForeignCompany),
      urgency: text(body.urgency),
      notes: text(body.notes),
    }, request.headers.get('x-vercel-oidc-token') || process.env.VERCEL_OIDC_TOKEN || null);

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error('[api/leads] Failed to save booking', error);
    return NextResponse.json(
      { success: false, error: 'Booking could not be saved. Please try again later.' },
      { status: 500 },
    );
  }
}
