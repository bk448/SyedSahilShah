import { NextResponse } from 'next/server';
import { getAllLeads, addLead } from '@/lib/leads';

export async function GET() {
  try {
    const leads = getAllLeads();
    return NextResponse.json({ success: true, count: leads.length, leads });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch leads' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, country, type } = body;

    if (!name || !email) {
      return NextResponse.json({ success: false, error: 'Name and email are required' }, { status: 400 });
    }

    const newLead = addLead({
      type: type || 'consultation',
      name,
      email,
      phone: phone || '',
      country: country || 'Not specified',
      situation: body.situation || '',
      selectedSlot: body.selectedSlot || '',
      yearsBehind: body.yearsBehind || '',
      foreignAccounts: body.foreignAccounts || '',
      hasForeignCompany: body.hasForeignCompany || '',
      urgency: body.urgency || '',
      notes: body.notes || ''
    });

    return NextResponse.json({ success: true, lead: newLead }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
