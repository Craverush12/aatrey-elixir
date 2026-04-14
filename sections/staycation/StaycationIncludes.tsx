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
      <div
        style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap:                 '48px 80px',
          alignItems:          'center',
        }}
      >
        {/* Full-width image placeholder — asset TBC */}
        <div
          style={{
            gridColumn:     '1 / -1',
            width:          '100%',
            height:         '340px',
            background:     T.parchment,
            border:         `1px dashed ${T.border}`,
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'center',
            marginBottom:   '8px',
          }}
        >
          <p style={{ fontFamily: `'EB Garamond', serif`, fontStyle: 'italic', color: T.pale, fontSize: '13px', textAlign: 'center', padding: '0 24px' }}>
            Staycation lifestyle photography · TBC
          </p>
        </div>

        {/* Left — label + heading */}
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
              fontSize:      'clamp(24px, 3.5vw, 44px)',
              fontWeight:    300,
              fontStyle:     'italic',
              color:         T.ink,
              letterSpacing: '-0.5px',
              marginBottom:  '16px',
            }}
          >
            Everything you need.<br />Nothing you don't.
          </h2>

          <div style={{ marginBottom: '20px' }}>
            <OrnamentLine color={T.border} width={80} />
          </div>

          <p
            style={{
              fontFamily:   `'EB Garamond', serif`,
              fontSize:     'clamp(15px, 1.6vw, 17px)',
              fontStyle:    'italic',
              color:        T.ink,
              lineHeight:   1.8,
              opacity:      0.7,
              maxWidth:     '380px',
            }}
          >
            A minimum two-night stay. Every element of the experience is provided. You only need to arrive.
          </p>
        </div>

        {/* Right — included list */}
        <div
          style={{
            display:      'flex',
            flexDirection:'column',
            gap:          '2px',
          }}
        >
          {BRAND.staycation.included.map((item) => (
            <div
              key={item}
              style={{
                display:    'flex',
                alignItems: 'flex-start',
                gap:        '16px',
                padding:    '14px 16px',
                background: T.parchment,
                borderLeft: `2px solid ${T.border}`,
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  width:      '4px',
                  height:     '4px',
                  borderRadius:'50%',
                  background: T.crimson,
                  flexShrink: 0,
                  marginTop:  '7px',
                }}
              />
              <p
                style={{
                  fontFamily: `'EB Garamond', serif`,
                  fontSize:   '15px',
                  fontStyle:  'italic',
                  color:      T.ink,
                  lineHeight: 1.5,
                  opacity:    item.includes('TBC') ? 0.5 : 0.85,
                }}
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
