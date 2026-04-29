export type ProductVariant = 'standard' | 'sugarfree';

const DEFAULT_RAZORPAY_URL =
  'https://pages.razorpay.com/stores/st_Rfi399sLy3UNDt?categories=juice_concentrate';

export function getPaymentUrl(variant: ProductVariant): string | null {
  if (variant === 'sugarfree') {
    return process.env.NEXT_PUBLIC_RAZORPAY_SUGARFREE_URL || DEFAULT_RAZORPAY_URL;
  }

  return process.env.NEXT_PUBLIC_RAZORPAY_STANDARD_URL || DEFAULT_RAZORPAY_URL;
}
