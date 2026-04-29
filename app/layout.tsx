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
import { absoluteUrl, getSiteUrl } from '@/lib/site';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-eb-garamond',
  display: 'swap',
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ['devanagari'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-noto-devanagari',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: 'BURANSH by Aatrey Elixir - Himalayan Rhododendron Floral Concentrate',
    template: '%s | BURANSH',
  },
  description:
    'Himalayan Rhododendron Floral Concentrate from Uttarakhand. Origin-led, private-access, and made at source.',
  alternates: {
    canonical: '/',
  },
  keywords: [
    'Rhododendron concentrate',
    'Himalayan floral drink',
    'Uttarakhand origin',
    'BURANSH',
    'Aatrey Elixir',
    'buransh drink',
    'Indian botanical drink',
    'Project Aatmanirbhar',
    'cold pressed floral concentrate',
    'non-alcoholic premium drink India',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: getSiteUrl(),
    siteName: 'BURANSH by Aatrey Elixir',
    title: 'BURANSH by Aatrey Elixir',
    description:
      'Himalayan Rhododendron Floral Concentrate from Uttarakhand. Origin-led, private-access, and made at source.',
    images: [
      {
        url: absoluteUrl('/opengraph-image'),
        width: 1200,
        height: 630,
        alt: 'BURANSH by Aatrey Elixir',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BURANSH by Aatrey Elixir',
    description:
      'Himalayan Rhododendron Floral Concentrate from Uttarakhand. Origin-led and made at source.',
    images: [absoluteUrl('/opengraph-image')],
  },
  robots: {
    index: true,
    follow: true,
  },
};

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
