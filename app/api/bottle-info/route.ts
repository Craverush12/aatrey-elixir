import { apiSuccess, apiError } from '@/lib/api';
import { getOrderCount } from '@/lib/sheets';
import { assignVillage } from '@/lib/villages';

export async function GET() {
  try {
    const count = await getOrderCount();
    // Next order gets bottle number count + 2026 (first order ever = #2026)
    const bottleNumber = count + 2026;
    const village = assignVillage(bottleNumber);
    return apiSuccess({ bottleNumber, village });
  } catch (err) {
    console.error('[bottle-info]', err);
    return apiError('Could not retrieve bottle information', 500);
  }
}
