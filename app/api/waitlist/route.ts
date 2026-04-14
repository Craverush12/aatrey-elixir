import { NextRequest, NextResponse } from 'next/server';
import { appendRow } from '@/lib/sheets';
import { sendGuestConfirmation, waitlistConfirmationHtml } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const product = searchParams.get('product') ?? 'jam';

    const body = await req.json();
    const { name = '', email = '' } = body;

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    // Determine which sheet tab to write to
    const tab = product === 'tea' ? 'WAITLIST_TEA' : 'WAITLIST_JAM';

    await appendRow(tab, [name, email, product]);

    await sendGuestConfirmation(
      email,
      `${product === 'tea' ? 'BURANSH Tea' : 'BURANSH Jam'} Waitlist`,
      waitlistConfirmationHtml(
        name,
        product === 'tea' ? 'Tea' : 'Jam'
      )
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[waitlist]', err);
    return NextResponse.json({ error: 'Submission failed' }, { status: 500 });
  }
}
