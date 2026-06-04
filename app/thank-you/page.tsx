import type { Metadata } from 'next';
import ThankYouContent from './ThankYouContent';

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'Thank you for your BURANSH enquiry or purchase.',
  alternates: {
    canonical: '/thank-you',
  },
};

export default function ThankYouPage() {
  return <ThankYouContent />;
}
