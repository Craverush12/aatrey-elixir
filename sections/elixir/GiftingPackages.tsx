import Image from 'next/image';
import { CrimsonBtn, GhostBtn } from '@/components/ui/Button';
import OrnamentLine from '@/components/ui/OrnamentLine';
import { T } from '@/lib/tokens';
import { BRAND } from '@/lib/brand-content';

export default function GiftingPackages() {
  return (
    <section
      style={{
        background:  T.parchment,
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
        GIFTING
      </p>

      <h2
        style={{
          fontFamily:    `'Cormorant Garamond', serif`,
          fontSize:      'clamp(24px, 3.5vw, 40px)',
          fontWeight:    300,
          fontStyle:     'italic',
          color:         T.ink,
          letterSpacing: '-0.3px',
          marginBottom:  '12px',
        }}
      >
        Give the altitude.
      </h2>

      <div style={{ marginBottom: '36px' }}>
        <OrnamentLine color={T.border} width={80} />
      </div>

      {/* Collection feature image */}
      <div
        style={{
          width:        '100%',
          background:   T.linen,
          display:      'flex',
          justifyContent: 'center',
          marginBottom: '32px',
          overflow:     'hidden',
        }}
      >
        <Image
          src="/images/gifting-collection.png"
          alt="BURANSH gifting collection — wooden crate with four bottles, harvest certificate and origin booklet"
          width={680}
          height={680}
          style={{ objectFit: 'contain', maxHeight: '480px', width: 'auto' }}
        />
      </div>

      <style>{`
        @media(max-width:480px){.gifting-grid{grid-template-columns:1fr!important}}
        @media(min-width:481px) and (max-width:767px){.gifting-grid{grid-template-columns:repeat(2,1fr)!important}}
      `}</style>
      <div
        className="gifting-grid"
        style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap:                 '16px',
          marginBottom:        '32px',
        }}
      >
        {BRAND.gifting.map((tier) => (
          <div
            key={tier.id}
            style={{
              background:  T.ivory,
              border:      tier.highlight ? `2px solid ${T.crimson}` : `1px solid ${T.border}`,
              padding:     '32px 24px',
              position:    'relative',
              display:     'flex',
              flexDirection: 'column',
            }}
          >
            {/* Premium badge for highlight tier */}
            {tier.highlight && (
              <div
                style={{
                  position:      'absolute',
                  top:           '-1px',
                  right:         '16px',
                  background:    T.crimson,
                  color:         T.ivory,
                  fontFamily:    'sans-serif',
                  fontSize:      '7px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  padding:       '3px 10px',
                }}
              >
                Most Popular
              </div>
            )}

            <h3
              style={{
                fontFamily:    `'Cormorant Garamond', serif`,
                fontSize:      'clamp(20px, 2.5vw, 28px)',
                fontStyle:     'italic',
                fontWeight:    300,
                color:         T.ink,
                marginBottom:  '8px',
              }}
            >
              {tier.name}
            </h3>

            <p
              style={{
                fontFamily:    'sans-serif',
                fontSize:      '8px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color:         T.muted,
                marginBottom:  '16px',
              }}
            >
              {tier.occasion}
            </p>

            <div style={{ marginBottom: '16px' }}>
              <OrnamentLine color={T.border} width={50} />
            </div>

            {/* Contents list */}
            <ul
              style={{
                listStyle:     'none',
                display:       'flex',
                flexDirection: 'column',
                gap:           '6px',
                marginBottom:  '24px',
                flex:          1,
              }}
            >
              {tier.contents.map((item) => (
                <li
                  key={item}
                  style={{
                    fontFamily: `'EB Garamond', serif`,
                    fontSize:   '14px',
                    color:      T.ink,
                    opacity:    0.75,
                    display:    'flex',
                    gap:        '8px',
                    lineHeight: 1.5,
                  }}
                >
                  <span style={{ color: T.gold, flexShrink: 0 }}>·</span>
                  {item}
                </li>
              ))}
            </ul>

            {/* TODO: confirm with client before launch — [price] */}
            <p
              style={{
                fontFamily:    `'Cormorant Garamond', serif`,
                fontSize:      '13px',
                fontStyle:     'italic',
                color:         T.muted,
                marginBottom:  '16px',
              }}
            >
              {/* TODO: confirm with client before launch — [price] */}
              Price on request
            </p>

            <CrimsonBtn href={`#order?type=${tier.id}`} fullWidth>
              Order {tier.name}
            </CrimsonBtn>
          </div>
        ))}
      </div>

      {/* Custom gifting CTA */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <GhostBtn href="#bulk-order">
          Request custom gifting quote
        </GhostBtn>
      </div>
    </section>
  );
}
