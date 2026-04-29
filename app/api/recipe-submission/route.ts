import { NextRequest } from 'next/server';
import { apiError, apiSuccess, parseJson } from '@/lib/api';
import { appendRow } from '@/lib/sheets';
import { sendTeamAlert } from '@/lib/email';
import { recipeSubmissionSchema } from '@/lib/schemas';

export async function POST(req: NextRequest) {
  try {
    const parsed = await parseJson(req, recipeSubmissionSchema);
    if (!parsed.success) return apiError(parsed.error);

    const {
      name,
      email,
      city,
      recipeName,
      instagram,
      ratio,
      ingredients,
      method,
      story,
    } = parsed.data;

    const details = [
      'Recipe submission',
      `Recipe: ${recipeName}`,
      city ? `City: ${city}` : null,
      instagram ? `Instagram/Web: ${instagram}` : null,
      ratio ? `Ratio: ${ratio}` : null,
      `Ingredients: ${ingredients}`,
      `Method: ${method}`,
      story ? `Story: ${story}` : null,
    ]
      .filter(Boolean)
      .join(' | ');

    await appendRow('CONTACT', [name, email, details]);

    await sendTeamAlert(
      `Recipe submission from ${name}`,
      `<p><strong>${name}</strong> (${email}) submitted a BURANSH recipe.</p>
       <p><strong>Recipe name:</strong> ${recipeName}</p>
       <p><strong>City:</strong> ${city || '—'}</p>
       <p><strong>Instagram / website:</strong> ${instagram || '—'}</p>
       <p><strong>Ratio:</strong> ${ratio || '—'}</p>
       <p><strong>Ingredients:</strong><br/>${ingredients}</p>
       <p><strong>Method:</strong><br/>${method}</p>
       <p><strong>Story:</strong><br/>${story || '—'}</p>`
    );

    return apiSuccess();
  } catch (err) {
    console.error('[recipe-submission]', err);
    return apiError('Submission failed', 500);
  }
}
