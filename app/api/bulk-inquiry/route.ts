import { NextRequest, NextResponse } from 'next/server';
import { appendRow } from '@/lib/sheets';
import { sendTeamAlert } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name         = '',
      organisation = '',
      email        = '',
      phone        = '',
      useCase      = '',
      quantity     = '',
      timeline     = '',
      message      = '',
      // Honeypot — must be empty
      website      = '',
    } = body;

    // Spam protection
    if (website) {
      return NextResponse.json({ success: true }); // silently discard
    }

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    await appendRow('BULK_ORDERS', [
      name, organisation, email, phone, useCase, quantity, timeline, message,
    ]);

    await sendTeamAlert(
      `Bulk Inquiry from ${organisation || name}`,
      `<p><strong>${name}</strong> from ${organisation} (${email}) submitted a bulk inquiry.</p>
       <p>Use case: ${useCase} · Quantity: ${quantity} · Timeline: ${timeline}</p>
       <p>Message: ${message}</p>`
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[bulk-inquiry]', err);
    return NextResponse.json({ error: 'Submission failed' }, { status: 500 });
  }
}
