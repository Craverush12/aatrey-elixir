export type ProductVariant = 'standard' | 'sugarfree';

export type CouponCode = 'BEDROOMMASTERY';

export const COUPONS: Record<CouponCode, { discountedPrice: number; label: string }> = {
  BEDROOMMASTERY: { discountedPrice: 800, label: 'Bedroom Mastery' },
};

export function validateCoupon(code: string): CouponCode | null {
  const upper = code.trim().toUpperCase() as CouponCode;
  return upper in COUPONS ? upper : null;
}

const REGULAR_STANDARD_URL  = process.env.NEXT_PUBLIC_RAZORPAY_STANDARD_URL   || 'https://rzp.io/rzp/U95lpRD';
const REGULAR_SUGARFREE_URL = process.env.NEXT_PUBLIC_RAZORPAY_SUGARFREE_URL  || 'https://rzp.io/rzp/TYQ1mEu';
const BM_STANDARD_URL       = process.env.NEXT_PUBLIC_RAZORPAY_BM_STANDARD_URL  || null;
const BM_SUGARFREE_URL      = process.env.NEXT_PUBLIC_RAZORPAY_BM_SUGARFREE_URL || null;

export function getPaymentUrl(variant: ProductVariant, coupon?: CouponCode | null): string | null {
  if (coupon === 'BEDROOMMASTERY') {
    return variant === 'sugarfree' ? BM_SUGARFREE_URL : BM_STANDARD_URL;
  }
  return variant === 'sugarfree' ? REGULAR_SUGARFREE_URL : REGULAR_STANDARD_URL;
}
