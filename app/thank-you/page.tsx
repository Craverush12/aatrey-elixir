import type { Metadata } from 'next';
import Link from 'next/link';
import LotusLogo from '@/components/LotusLogo';
import OrnamentLine from '@/components/ui/OrnamentLine';
import { T } from '@/lib/tokens';

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'Thank you for your BURANSH enquiry or purchase.',
  alternates: {
    canonical: '/thank-you',
  },
};

export default function ThankYouPage() {
  return (
    <section
      style={{
        minHeight: '78vh',
        background: T.ivory,
        padding: '140px clamp(24px, 8vw, 120px) 96px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '640px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '22px' }}>
          <LotusLogo size={42} useInlineSvg color={T.crimson} />
        </div>
        <p
          style={{
            fontFamily: 'sans-serif',
            fontSize: '8px',
            letterSpacing: '5px',
            textTransform: 'uppercase',
            color: T.crimson,
            marginBottom: '16px',
          }}
        >
          BURANSH
        </p>
        <h1
          style={{
            fontFamily: `'Cormorant Garamond', serif`,
            fontSize: 'clamp(34px, 6vw, 72px)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: T.ink,
            marginBottom: '18px',
          }}
        >
          Thank you.
        </h1>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '22px' }}>
          <OrnamentLine color={T.borderD} width={90} />
        </div>
        <p
          style={{
            fontFamily: `'EB Garamond', serif`,
            fontSize: 'clamp(16px, 2vw, 20px)',
            fontStyle: 'italic',
            color: T.ink,
            opacity: 0.72,
            lineHeight: 1.8,
            marginBottom: '32px',
          }}
        >
          Your request has reached the BURANSH table. The team will respond with the next step.
        </p>
        <Link
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: T.crimson,
            border: `1px solid ${T.borderD}`,
            padding: '13px 28px',
            fontFamily: 'sans-serif',
            fontSize: '9px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            textDecoration: 'none',
          }}
        >
          Return home
        </Link>
      </div>
    </section>
  );
}
