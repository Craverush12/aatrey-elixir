import { NextRequest } from 'next/server';
import { apiError, apiSuccess, parseJson } from '@/lib/api';
import { appendRow } from '@/lib/sheets';
import { sendTeamAlert } from '@/lib/email';
import { contactSchema } from '@/lib/schemas';

export async function POST(req: NextRequest) {
  try {
    const parsed = await parseJson(req, contactSchema);
    if (!parsed.success) return apiError(parsed.error);

    const { name, email, type } = parsed.data;

    await appendRow('CONTACT', [name, email, type]);

    await sendTeamAlert(
      `Footer Contact from ${name}`,
      `<p><strong>${name}</strong> (${email}) submitted a footer enquiry.</p>
       <p>Type: ${type || 'General'}</p>`
    );

    return apiSuccess();
  } catch (err) {
    console.error('[contact]', err);
    return apiError('Submission failed', 500);
  }
}
