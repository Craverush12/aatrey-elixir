import crypto from 'crypto';
import { getOptionalEnv } from '@/lib/env';

export function verifySignature(
  orderId:   string,
  paymentId: string,
  signature: string
): boolean {
  const secret = getOptionalEnv('RAZORPAY_KEY_SECRET');
  if (!secret) return false;

  const expected = crypto
    .createHmac('sha256', secret)
    .update(`${orderId}|${paymentId}`)
    .digest('hex');

  return expected === signature;
}
