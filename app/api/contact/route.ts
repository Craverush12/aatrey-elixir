import { NextRequest, NextResponse } from 'next/server';
import { appendRow } from '@/lib/sheets';
import { sendTeamAlert } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name  = '',
      email = '',
      type  = '',
    } = body;

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    await appendRow('CONTACT', [name, email, type]);

    await sendTeamAlert(
      `Footer Contact from ${name}`,
      `<p><strong>${name}</strong> (${email}) submitted a footer enquiry.</p>
       <p>Type: ${type}</p>`
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact]', err);
    return NextResponse.json({ error: 'Submission failed' }, { status: 500 });
  }
}
