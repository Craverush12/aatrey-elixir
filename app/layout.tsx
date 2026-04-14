import type { Metadata } from 'next';
import {
  Cormorant_Garamond,
  EB_Garamond,
  Noto_Sans_Devanagari,
} from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import LenisProvider from '@/components/LenisProvider';

/* ── Fonts ──────────────────────────────────────────────── */

const cormorant = Cormorant_Garamond({
  subsets:  ['latin'],
  weight:   ['300', '400', '600', '700'],
  style:    ['normal', 'italic'],
  variable: '--font-cormorant',
  display:  'swap',
});

const ebGaramond = EB_Garamond({
  subsets:  ['latin'],
  weight:   ['400', '500'],
  style:    ['normal', 'italic'],
  variable: '--font-eb-garamond',
  display:  'swap',
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets:  ['devanagari'],
  weight:   ['300', '400'],
  variable: '--font-noto-devanagari',
  display:  'swap',
});

/* ── Metadata ────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: {
    default:  'BURANSH by Aatrey Elixir — Himalayan Rhododendron Floral Concentrate',
    template: '%s · BURANSH',
  },
  description:
    'Himalayan Rhododendron Floral Concentrate, cold-pressed at 2,500m in Uttarakhand. Harvested by the women of Project Aatmanirbhar. FSSAI certified. Asia-endorsed.',
  keywords: [
    'Rhododendron concentrate',
    'Himalayan floral drink',
    'Uttarakhand origin',
    'BURANSH',
    'Aatrey Elixir',
    'buransh drink',
    'Indian wellness drink',
    'Project Aatmanirbhar',
    'cold pressed floral concentrate',
    'non-alcoholic premium drink India',
  ],
  openGraph: {
    type:       'website',
    locale:     'en_IN',
    siteName:   'BURANSH by Aatrey Elixir',
    title:      'BURANSH — Inherited, not manufactured.',
    description:
      'Cold-pressed Himalayan Rhododendron Floral Concentrate from Uttarakhand. 750ml. Harvested at 2,500m.',
  },
  twitter: {
    card:  'summary_large_image',
    title: 'BURANSH by Aatrey Elixir',
    description:
      'Himalayan Rhododendron Floral Concentrate. Inherited, not manufactured.',
  },
  robots: {
    index:  true,
    follow: true,
  },
};

/* ── Root Layout ─────────────────────────────────────────── */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${ebGaramond.variable} ${notoDevanagari.variable}`}
    >
      <body style={{ background: '#F5EDD8', overflowX: 'hidden' }}>
        <LenisProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
