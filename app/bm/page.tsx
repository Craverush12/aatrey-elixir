import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'BURANSH — Bedroom Mastery Exclusive',
  robots: { index: false, follow: false },
};

// Redirects straight to the order section with BM ref pre-applied
export default function BMPage() {
  redirect('/elixir?ref=bm#order');
}
