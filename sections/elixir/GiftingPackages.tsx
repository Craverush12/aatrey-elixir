import Image from 'next/image';
import { CrimsonBtn, GhostBtn } from '@/components/ui/Button';
import OrnamentLine from '@/components/ui/OrnamentLine';
import { T } from '@/lib/tokens';
import { BRAND } from '@/lib/brand-content';

export default function GiftingPackages() {
  return (
    <section
      className="gifting-section"
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
          letterSpacing: '0',
          marginBottom:  '12px',
        }}
      >
        Give the altitude.
      </h2>

      <div style={{ marginBottom: '36px' }}>
        <OrnamentLine color={T.border} width={80} />
      </div>

      <style>{`
        @media(max-width:480px){.gifting-grid{grid-template-columns:1fr!important}}
        @media(min-width:481px) and (max-width:767px){.gifting-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:767px){
          .gifting-feature{width:calc(100% + 48px)!important;margin:0 -24px 28px!important;aspect-ratio:4/5!important}
          .gifting-feature-image{object-fit:cover!important;object-position:center center!important}
        }
      `}</style>

      {/* Collection feature image — full-width */}
      <div
        className="gifting-feature"
        style={{
          width:        '100%',
          position:     'relative',
          aspectRatio:  '16/7',
          background:   T.linen,
          marginBottom: '32px',
          overflow:     'hidden',
        }}
      >
        <Image
          src="/images/gifting-collection.webp"
          alt="BURANSH gifting collection — wooden crate with four bottles, harvest certificate and origin booklet"
          fill
          className="gifting-feature-image"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          sizes="(max-width: 768px) 100vw, 90vw"
        />
      </div>

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

            <p
              style={{
                fontFamily:    `'Cormorant Garamond', serif`,
                fontSize:      '13px',
                fontStyle:     'italic',
                color:         T.muted,
                marginBottom:  '16px',
              }}
            >
              Prepared by private quote
            </p>

            <CrimsonBtn href="#bulk-order" fullWidth>
              Enquire for {tier.name}
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
