import GrainOverlay from '@/components/ui/GrainOverlay';
import OrnamentLine from '@/components/ui/OrnamentLine';
import { T } from '@/lib/tokens';
import { BRAND } from '@/lib/brand-content';

export default function NameOrigin() {
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
            letterSpacing: '-1.5px',
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

      {/* Sanskrit Shlok panel */}
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

        {/* Gold corner ornament */}
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
            SANSKRIT SHLOK
          </p>

          {/* Devanagari */}
          <blockquote>
            <p
              className="devanagari-text"
              style={{
                fontFamily:  `var(--font-noto-devanagari), sans-serif`,
                fontSize:    'clamp(24px, 4vw, 48px)',
                fontWeight:  300,
                color:       T.ivory,
                lineHeight:  1.5,
                marginBottom:'20px',
                fontStyle:   'normal',
              }}
            >
              {BRAND.shlok.devanagari}
            </p>

            {/* Transliteration */}
            <p
              style={{
                fontFamily:   `'EB Garamond', serif`,
                fontSize:     'clamp(15px, 1.8vw, 20px)',
                fontStyle:    'italic',
                color:        `${T.ivory}80`,
                marginBottom: '12px',
                lineHeight:   1.7,
              }}
            >
              {BRAND.shlok.transliteration}
            </p>

            {/* Translation */}
            <p
              style={{
                fontFamily: `'EB Garamond', serif`,
                fontSize:   'clamp(14px, 1.6vw, 17px)',
                color:      `${T.ivory}60`,
                lineHeight: 1.7,
                fontStyle:  'normal',
              }}
            >
              {BRAND.shlok.translation}
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
