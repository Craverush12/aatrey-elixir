import { apiError } from '@/lib/api';

export async function POST() {
  return apiError('Checkout now uses Razorpay payment links', 410);
}
