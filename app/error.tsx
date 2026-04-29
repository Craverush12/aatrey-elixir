'use client';

import LotusLogo from '@/components/LotusLogo';
import { T } from '@/lib/tokens';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section
      style={{
        minHeight: '70vh',
        background: T.ivory,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '520px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '18px' }}>
          <LotusLogo size={34} useInlineSvg color={T.crimson} />
        </div>
        <p
          style={{
            fontFamily: 'sans-serif',
            fontSize: '8px',
            letterSpacing: '5px',
            textTransform: 'uppercase',
            color: T.crimson,
            marginBottom: '12px',
          }}
        >
          BURANSH
        </p>
        <h1
          style={{
            fontFamily: `'Cormorant Garamond', serif`,
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontStyle: 'italic',
            color: T.ink,
            marginBottom: '12px',
          }}
        >
          Something paused the journey.
        </h1>
        <p
          style={{
            fontFamily: `'EB Garamond', serif`,
            fontSize: '16px',
            fontStyle: 'italic',
            color: T.muted,
            lineHeight: 1.7,
            marginBottom: '24px',
          }}
        >
          Please try once more. If it continues, write to the BURANSH team directly.
        </p>
        <button
          type="button"
          onClick={reset}
          style={{
            background: T.crimson,
            color: T.ivory,
            border: 'none',
            padding: '14px 28px',
            fontFamily: 'sans-serif',
            fontSize: '9px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            cursor: 'pointer',
          }}
        >
          Try again
        </button>
      </div>
    </section>
  );
}
