import { NextRequest } from 'next/server';
import { apiError, apiSuccess, parseJson } from '@/lib/api';
import { appendRow } from '@/lib/sheets';
import { sendGuestConfirmation, waitlistConfirmationHtml } from '@/lib/email';
import { waitlistSchema } from '@/lib/schemas';

export async function POST(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const product = searchParams.get('product') === 'tea' ? 'tea' : 'jam';

    const parsed = await parseJson(req, waitlistSchema);
    if (!parsed.success) return apiError(parsed.error);

    const { name, email } = parsed.data;
    const tab = product === 'tea' ? 'WAITLIST_TEA' : 'WAITLIST_JAM';

    await appendRow(tab, [name, email, product]);

    await sendGuestConfirmation(
      email,
      `${product === 'tea' ? 'BURANSH Tea' : 'BURANSH Jam'} Waitlist`,
      waitlistConfirmationHtml(name, product === 'tea' ? 'Tea' : 'Jam')
    );

    return apiSuccess();
  } catch (err) {
    console.error('[waitlist]', err);
    return apiError('Submission failed', 500);
  }
}
