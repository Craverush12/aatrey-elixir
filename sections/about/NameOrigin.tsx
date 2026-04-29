import GrainOverlay from '@/components/ui/GrainOverlay';
import OrnamentLine from '@/components/ui/OrnamentLine';
import { T } from '@/lib/tokens';
import { BRAND } from '@/lib/brand-content';

export default function NameOrigin() {
  const hasShlok = BRAND.shlok.verses.length > 0;

  return (
    <section
      style={{
        background: T.ink,
        padding:    '100px clamp(24px, 8vw, 120px) 80px',
        position:   'relative',
        overflow:   'hidden',
      }}
    >
      <style>{`
        @media(max-width:480px){.devanagari-text{font-size:clamp(18px,6vw,32px)!important;word-break:break-word;overflow-wrap:anywhere}}
      `}</style>
      <GrainOverlay />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px' }}>
        {/* Pre-label */}
        <p
          style={{
            fontFamily:    'sans-serif',
            fontSize:      '7px',
            letterSpacing: '5px',
            textTransform: 'uppercase',
            color:         T.crimson,
            marginBottom:  '20px',
          }}
        >
          THE NAME
        </p>

        {/* Headline */}
        <h1
          style={{
            fontFamily:    `'Cormorant Garamond', serif`,
            fontSize:      'clamp(36px, 7vw, 80px)',
            fontWeight:    300,
            fontStyle:     'italic',
            color:         T.ivory,
            lineHeight:    1.0,
            letterSpacing: '0',
            marginBottom:  '24px',
          }}
        >
          {BRAND.nameOrigin.headline}
        </h1>

        <div style={{ marginBottom: '28px' }}>
          <OrnamentLine color={`${T.umber}60`} width={100} />
        </div>

        <p
          style={{
            fontFamily: `'EB Garamond', serif`,
            fontSize:   'clamp(16px, 1.8vw, 20px)',
            fontStyle:  'italic',
            color:      `${T.ivory}80`,
            lineHeight: 1.85,
            maxWidth:   '640px',
          }}
        >
          {BRAND.nameOrigin.body}
        </p>
      </div>

      {hasShlok && (
        <div
          style={{
            background:  T.crimson,
            padding:     '48px clamp(24px, 6vw, 64px)',
            marginTop:   '64px',
            position:    'relative',
            overflow:    'hidden',
            border:      `1px solid ${T.gold}30`,
          }}
        >
          <GrainOverlay opacity={0.03} />

          <div
            aria-hidden="true"
            style={{
              position:  'absolute',
              top:       '12px',
              left:      '12px',
              right:     '12px',
              bottom:    '12px',
              border:    `1px solid ${T.gold}20`,
              pointerEvents: 'none',
            }}
          />

          <div style={{ position: 'relative', zIndex: 2 }}>
            <p
              style={{
                fontFamily:    'sans-serif',
                fontSize:      '7px',
                letterSpacing: '4px',
                textTransform: 'uppercase',
                color:         `${T.ivory}60`,
                marginBottom:  '24px',
              }}
            >
              {BRAND.shlok.label}
            </p>

            <p
              style={{
                fontFamily:   `'EB Garamond', serif`,
                fontSize:     'clamp(16px, 1.7vw, 20px)',
                fontStyle:    'italic',
                color:        `${T.ivory}76`,
                lineHeight:   1.8,
                maxWidth:     '780px',
                marginBottom: '34px',
              }}
            >
              {BRAND.shlok.intro}
            </p>

            <div style={{ display: 'grid', gap: '34px' }}>
              {BRAND.shlok.verses.map((verse, index) => (
                <blockquote
                  key={verse.devanagari}
                  style={{
                    margin: 0,
                    paddingTop: index === 0 ? 0 : '4px',
                  }}
                >
                  {index > 0 && (
                    <div style={{ marginBottom: '28px' }}>
                      <OrnamentLine color={`${T.gold}22`} width={92} />
                    </div>
                  )}

                  <p
                    className="devanagari-text"
                    style={{
                      fontFamily:   `var(--font-noto-devanagari), sans-serif`,
                      fontSize:     'clamp(22px, 3vw, 38px)',
                      fontWeight:   300,
                      color:        T.ivory,
                      lineHeight:   1.55,
                      marginBottom: '18px',
                      fontStyle:    'normal',
                      maxWidth:     '980px',
                    }}
                  >
                    {verse.devanagari}
                  </p>

                  <p
                    style={{
                      fontFamily:   `'EB Garamond', serif`,
                      fontSize:     'clamp(15px, 1.6vw, 19px)',
                      fontStyle:    'italic',
                      color:        `${T.ivory}82`,
                      marginBottom: '10px',
                      lineHeight:   1.7,
                    }}
                  >
                    {verse.transliteration}
                  </p>

                  <p
                    style={{
                      fontFamily: `'EB Garamond', serif`,
                      fontSize:   'clamp(14px, 1.4vw, 17px)',
                      color:      `${T.ivory}64`,
                      lineHeight: 1.7,
                      fontStyle:  'normal',
                      maxWidth:   '720px',
                    }}
                  >
                    {verse.translation}
                  </p>
                </blockquote>
              ))}
            </div>

            <div
              style={{
                marginTop:  '42px',
                paddingTop: '28px',
                borderTop:  `1px solid ${T.gold}22`,
              }}
            >
              {BRAND.shlok.meaning.map((line) => (
                <p
                  key={line}
                  style={{
                    fontFamily: `'EB Garamond', serif`,
                    fontSize:   'clamp(14px, 1.4vw, 17px)',
                    color:      `${T.ivory}68`,
                    lineHeight: 1.75,
                    maxWidth:   '760px',
                    margin:     '0 0 8px',
                  }}
                >
                  {line}
                </p>
              ))}

              <p
                style={{
                  fontFamily: `'EB Garamond', serif`,
                  fontSize:   'clamp(15px, 1.5vw, 18px)',
                  fontStyle:  'italic',
                  color:      `${T.ivory}82`,
                  lineHeight: 1.75,
                  maxWidth:   '760px',
                  margin:     '18px 0 0',
                }}
              >
                {BRAND.shlok.closing}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
