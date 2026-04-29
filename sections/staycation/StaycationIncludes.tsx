import Image from 'next/image';
import OrnamentLine from '@/components/ui/OrnamentLine';
import { T } from '@/lib/tokens';
import { BRAND } from '@/lib/brand-content';

export default function StaycationIncludes() {
  return (
    <section
      style={{
        background: T.ivory,
        padding:    '80px clamp(24px, 8vw, 120px)',
        borderTop:  `1px solid ${T.border}`,
      }}
    >
      <style>{`
        @media(max-width:960px){
          .includes-layout{grid-template-columns:1fr!important}
          .includes-list{grid-template-columns:1fr!important}
        }
      `}</style>

      <div
        className="includes-layout"
        style={{
          display:             'grid',
          gridTemplateColumns: 'minmax(280px, 0.82fr) minmax(320px, 1.18fr)',
          gap:                 '32px clamp(28px, 4vw, 56px)',
          alignItems:          'center',
        }}
      >
        <div
          style={{
            position:    'relative',
            aspectRatio: '4 / 5',
            overflow:    'hidden',
            border:      `1px solid ${T.border}`,
            background:  T.parchment,
          }}
        >
          <Image
            src="/images/village-women-plucking.webp"
            alt="Rhododendron harvest walk included in the BURANSH stay"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center center' }}
            sizes="(max-width: 960px) 100vw, 34vw"
          />
          <div
            aria-hidden="true"
            style={{
              position:   'absolute',
              inset:      0,
              background: 'linear-gradient(to top, rgba(24,16,10,0.26) 0%, rgba(24,16,10,0.02) 48%)',
            }}
          />
        </div>

        <div>
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
            WHAT IS INCLUDED
          </p>

          <h2
            style={{
              fontFamily:    `'Cormorant Garamond', serif`,
              fontSize:      'clamp(28px, 3.6vw, 46px)',
              fontWeight:    300,
              fontStyle:     'italic',
              color:         T.ink,
              letterSpacing: '0',
              marginBottom:  '16px',
            }}
          >
            Everything you need.<br />Nothing you don&apos;t.
          </h2>

          <div style={{ marginBottom: '20px' }}>
            <OrnamentLine color={T.border} width={80} />
          </div>

          <p
            style={{
              fontFamily:   `'EB Garamond', serif`,
              fontSize:     'clamp(15px, 1.5vw, 17px)',
              fontStyle:    'italic',
              color:        T.ink,
              lineHeight:   1.8,
              opacity:      0.72,
              maxWidth:     '34rem',
              marginBottom: '24px',
            }}
          >
            A minimum two-night stay. The essentials are arranged so your attention stays on the grove, the making, and the time on the hill.
          </p>

          <div
            className="includes-list"
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap:                 '10px',
            }}
          >
            {BRAND.staycation.included.map((item) => (
              <div
                key={item}
                style={{
                  display:    'flex',
                  alignItems: 'flex-start',
                  gap:        '12px',
                  padding:    '14px 16px',
                  background: T.parchment,
                  borderLeft: `2px solid ${T.border}`,
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    width:       '4px',
                    height:      '4px',
                    borderRadius:'50%',
                    background:  T.crimson,
                    flexShrink:  0,
                    marginTop:   '7px',
                  }}
                />
                <p
                  style={{
                    fontFamily: `'EB Garamond', serif`,
                    fontSize:   '15px',
                    fontStyle:  'italic',
                    color:      T.ink,
                    lineHeight: 1.55,
                    opacity:    0.86,
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
