import { NextRequest } from 'next/server';
import { apiError, apiSuccess, parseJson } from '@/lib/api';
import { appendRow } from '@/lib/sheets';
import { sendTeamAlert } from '@/lib/email';
import { omakaseSchema } from '@/lib/schemas';

export async function POST(req: NextRequest) {
  try {
    const parsed = await parseJson(req, omakaseSchema);
    if (!parsed.success) return apiError(parsed.error);

    const { name, email, phone, guestCount, city, dates, occasion, budget } = parsed.data;

    await appendRow('OMAKASE_INQUIRIES', [
      name,
      email,
      phone,
      guestCount,
      city,
      dates,
      occasion,
      budget,
    ]);

    await sendTeamAlert(
      `Omakase Request from ${name}`,
      `<p><strong>${name}</strong> (${email}) requested an Omakase experience.</p>
       <p>City: ${city || 'Not specified'} · Dates: ${dates || 'Not specified'} · Guests: ${guestCount || 'Not specified'}</p>
       <p>Occasion: ${occasion || '—'} · Budget: ${budget || '—'}</p>`
    );

    return apiSuccess();
  } catch (err) {
    console.error('[omakase]', err);
    return apiError('Submission failed', 500);
  }
}
