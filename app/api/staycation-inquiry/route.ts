import { NextRequest } from 'next/server';
import { apiError, apiSuccess, parseJson } from '@/lib/api';
import { appendRow } from '@/lib/sheets';
import { sendTeamAlert, sendGuestConfirmation, inquiryConfirmationHtml } from '@/lib/email';
import { staycationInquirySchema } from '@/lib/schemas';

export async function POST(req: NextRequest) {
  try {
    const parsed = await parseJson(req, staycationInquirySchema);
    if (!parsed.success) return apiError(parsed.error);

    const {
      name,
      email,
      phone,
      dates,
      groupSize,
      experiences,
      dietary,
      source,
      message,
    } = parsed.data;

    await appendRow('STAYCATION_INQUIRIES', [
      name,
      email,
      phone,
      dates,
      groupSize,
      experiences.join(', '),
      dietary,
      source,
      message,
    ]);

    await sendGuestConfirmation(
      email,
      'Staycation Enquiry Received',
      inquiryConfirmationHtml(name, 'staycation')
    );

    await sendTeamAlert(
      `Staycation Inquiry from ${name}`,
      `<p><strong>${name}</strong> (${email}, ${phone || 'no phone'}) enquired about the staycation.</p>
       <p>Dates: ${dates || 'Not specified'} · Group size: ${groupSize || 'Not specified'}</p>
       <p>Experiences: ${experiences.join(', ') || '—'}</p>
       <p>Message: ${message || '—'}</p>`
    );

    return apiSuccess();
  } catch (err) {
    console.error('[staycation-inquiry]', err);
    return apiError('Submission failed', 500);
  }
}
