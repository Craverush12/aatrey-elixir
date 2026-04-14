import { NextRequest, NextResponse } from 'next/server';
import { appendRow } from '@/lib/sheets';
import { sendTeamAlert, sendGuestConfirmation, inquiryConfirmationHtml } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name        = '',
      email       = '',
      phone       = '',
      dates       = '',
      groupSize   = '',
      experiences = [] as string[],
      dietary     = '',
      source      = '',
      message     = '',
    } = body;

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    await appendRow('STAYCATION_INQUIRIES', [
      name, email, phone, dates, groupSize,
      Array.isArray(experiences) ? experiences.join(', ') : experiences,
      dietary, source, message,
    ]);

    // Guest confirmation email
    await sendGuestConfirmation(
      email,
      'Staycation Enquiry Received',
      inquiryConfirmationHtml(name, 'staycation')
    );

    // Team alert
    await sendTeamAlert(
      `Staycation Inquiry from ${name}`,
      `<p><strong>${name}</strong> (${email}, ${phone}) enquired about the staycation.</p>
       <p>Dates: ${dates} · Group size: ${groupSize}</p>
       <p>Experiences: ${experiences.join(', ')}</p>
       <p>Message: ${message}</p>`
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[staycation-inquiry]', err);
    return NextResponse.json({ error: 'Submission failed' }, { status: 500 });
  }
}
