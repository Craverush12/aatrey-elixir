import crypto from 'crypto';
import { getOptionalEnv } from '@/lib/env';

/** Verify Razorpay order-payment signature (used by /api/payment-verify) */
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

/** Verify Razorpay webhook signature (used by /api/razorpay-webhook) */
export function verifyWebhookSignature(
  rawBody:   string,
  signature: string
): boolean {
  const secret = getOptionalEnv('RAZORPAY_WEBHOOK_SECRET');
  if (!secret) {
    // In dev with no secret set, allow through but log a warning
    console.warn('[razorpay-webhook] RAZORPAY_WEBHOOK_SECRET not set — skipping signature check');
    return true;
  }

  const expected = crypto
    .createHmac('sha256', secret)
    .update(rawBody)
    .digest('hex');

  return crypto.timingSafeEqual(
    Buffer.from(expected, 'hex'),
    Buffer.from(signature, 'hex')
  );
}

/**
 * Derive variant and quantity from a Razorpay payment entity.
 * Payment Pages use separate pages per variant, so we detect by amount.
 * Prices: Standard = ₹800, Sugar-Free = ₹900
 */
export function deriveOrderDetails(
  amountPaise: number,
  notes: Record<string, string>
): { variant: string; quantity: number; amountRupees: number } {
  const amountRupees = amountPaise / 100;

  // Notes-based detection (if a 'variant' or 'product' note was set on the payment page)
  const noteVariant = notes['variant'] || notes['product'] || notes['Product'] || '';
  if (noteVariant) {
    const qty = amountRupees / (noteVariant.toLowerCase().includes('sugar') ? 900 : 800);
    return {
      variant: noteVariant,
      quantity: Math.round(qty) || 1,
      amountRupees,
    };
  }

  // Amount-based detection — check all known unit prices, largest first to avoid false positives
  const PRICE_MAP: Array<{ price: number; variant: string }> = [
    { price: 1099, variant: 'Standard'   },
    { price:  800, variant: 'Standard'   },   // Bedroom Mastery offer price (both variants)
  ];

  for (const { price, variant } of PRICE_MAP) {
    if (amountRupees % price === 0 && amountRupees / price <= 24) {
      return { variant, quantity: amountRupees / price, amountRupees };
    }
  }

  // Fallback — record as-is for manual review
  return { variant: 'Unknown', quantity: 1, amountRupees };
}
