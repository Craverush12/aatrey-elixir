'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { CrimsonBtn, GhostBtn } from '@/components/ui/Button';
import OrnamentLine from '@/components/ui/OrnamentLine';
import { T } from '@/lib/tokens';
import { BRAND } from '@/lib/brand-content';

function CustomisationInner() {
  const params  = useSearchParams();
  const variant = params.get('variant') ?? 'standard';

  return (
    <section
      style={{
        background:  T.ivory,
        padding:     '80px clamp(24px, 8vw, 120px)',
        borderTop:   `1px solid ${T.border}`,
        borderBottom:`1px solid ${T.border}`,
      }}
    >
      <p
        style={{
          fontFamily:    'sans-serif',
          fontSize:      '7px',
          letterSpacing: '5px',
          textTransform: 'uppercase',
          color:         T.crimson,
          marginBottom:  '14px',
        }}
      >
        CUSTOMISATION
      </p>

      <h2
        style={{
          fontFamily:    `'Cormorant Garamond', serif`,
          fontSize:      'clamp(24px, 3.5vw, 40px)',
          fontWeight:    300,
          fontStyle:     'italic',
          color:         T.ink,
          letterSpacing: '0',
          marginBottom:  '12px',
        }}
      >
        Choose your expression.
      </h2>

      <div style={{ marginBottom: '36px' }}>
        <OrnamentLine color={T.border} width={80} />
      </div>

      <style>{`@media(max-width:480px){.customisation-grid{grid-template-columns:1fr!important}}`}</style>
      <div
        className="customisation-grid"
        style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap:                 '16px',
          marginBottom:        '36px',
        }}
      >
        {/* Standard */}
        <div
          style={{
            background: variant === 'standard' ? T.parchment : T.ivory,
            border:     variant === 'standard'
              ? `2px solid ${T.crimson}`
              : `2px solid ${T.border}`,
            padding:    '28px 24px',
            transition: `all 400ms ${T.ease}`,
          }}
        >
          {variant === 'standard' && (
            <p
              style={{
                fontFamily:    'sans-serif',
                fontSize:      '7px',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color:         T.crimson,
                marginBottom:  '10px',
              }}
            >
              SELECTED
            </p>
          )}
          <h3
            style={{
              fontFamily:    `'Cormorant Garamond', serif`,
              fontSize:      '22px',
              fontWeight:    700,
              color:         T.ink,
              marginBottom:  '10px',
            }}
          >
            {BRAND.variants.standard.name}
          </h3>
          <p
            style={{
              fontFamily: `'EB Garamond', serif`,
              fontSize:   '14px',
              fontStyle:  'italic',
              color:      T.muted,
              lineHeight: 1.7,
            }}
          >
            {BRAND.variants.standard.body}
          </p>
        </div>

        {/* Sugar-Free */}
        <div
          style={{
            background: variant === 'sugarfree' ? T.parchment : T.ivory,
            border:     variant === 'sugarfree'
              ? `2px solid ${T.crimson}`
              : `2px solid ${T.border}`,
            padding:    '28px 24px',
            transition: `all 400ms ${T.ease}`,
          }}
        >
          {variant === 'sugarfree' && (
            <p
              style={{
                fontFamily:    'sans-serif',
                fontSize:      '7px',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color:         T.crimson,
                marginBottom:  '10px',
              }}
            >
              SELECTED
            </p>
          )}
          <h3
            style={{
              fontFamily:    `'Cormorant Garamond', serif`,
              fontSize:      '22px',
              fontWeight:    700,
              color:         T.ink,
              marginBottom:  '10px',
            }}
          >
            {BRAND.variants.sugarFree.name}
          </h3>
          <p
            style={{
              fontFamily: `'EB Garamond', serif`,
              fontSize:   '14px',
              fontStyle:  'italic',
              color:      T.muted,
              lineHeight: 1.7,
            }}
          >
            {BRAND.variants.sugarFree.body}
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <CrimsonBtn href="?variant=standard#order">
          Order Standard
        </CrimsonBtn>
        <GhostBtn href="?variant=sugarfree#order">
          Order Sugar-Free
        </GhostBtn>
      </div>
    </section>
  );
}

export default function Customisation() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            height: '400px',
            background: T.ivory,
            borderTop: `1px solid ${T.border}`,
            borderBottom: `1px solid ${T.border}`,
          }}
          aria-label="Loading customisation options"
        />
      }
    >
      <CustomisationInner />
    </Suspense>
  );
}
