import { NextRequest } from 'next/server';
import { apiError, apiSuccess, parseJson } from '@/lib/api';
import { appendRow } from '@/lib/sheets';
import { sendTeamAlert } from '@/lib/email';
import { bulkInquirySchema } from '@/lib/schemas';

export async function POST(req: NextRequest) {
  try {
    const parsed = await parseJson(req, bulkInquirySchema);
    if (!parsed.success) return apiError(parsed.error);

    const {
      name,
      organisation,
      email,
      phone,
      useCase,
      quantity,
      timeline,
      message,
      website,
    } = parsed.data;

    if (website) return apiSuccess();

    await appendRow('BULK_ORDERS', [
      name,
      organisation,
      email,
      phone,
      useCase,
      quantity,
      timeline,
      message,
    ]);

    await sendTeamAlert(
      `Bulk Inquiry from ${organisation || name}`,
      `<p><strong>${name}</strong> from ${organisation || 'an individual buyer'} (${email}) submitted a bulk inquiry.</p>
       <p>Use case: ${useCase || 'Not specified'} · Quantity: ${quantity || 'Not specified'} · Timeline: ${timeline || 'Not specified'}</p>
       <p>Message: ${message || '—'}</p>`
    );

    return apiSuccess();
  } catch (err) {
    console.error('[bulk-inquiry]', err);
    return apiError('Submission failed', 500);
  }
}
