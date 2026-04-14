import { NextRequest, NextResponse } from 'next/server';
import { appendRow } from '@/lib/sheets';
import { sendTeamAlert } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name       = '',
      email      = '',
      phone      = '',
      guestCount = '',
      city       = '',
      dates      = '',
      occasion   = '',
      budget     = '',
    } = body;

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    await appendRow('OMAKASE_INQUIRIES', [
      name, email, phone, guestCount, city, dates, occasion, budget,
    ]);

    await sendTeamAlert(
      `Omakase Request from ${name}`,
      `<p><strong>${name}</strong> (${email}) requested an Omakase experience.</p>
       <p>City: ${city} · Dates: ${dates} · Guests: ${guestCount}</p>
       <p>Occasion: ${occasion} · Budget: ${budget}</p>`
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[omakase]', err);
    return NextResponse.json({ error: 'Submission failed' }, { status: 500 });
  }
}
