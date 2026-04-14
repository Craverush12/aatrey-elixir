import GrainOverlay from '@/components/ui/GrainOverlay';
import OrnamentLine from '@/components/ui/OrnamentLine';
import { T } from '@/lib/tokens';

export default function DocumentarySection() {
  return (
    <section
      style={{
        background: T.ink,
        padding:    '100px clamp(24px, 8vw, 120px) 80px',
        position:   'relative',
        overflow:   'hidden',
        borderTop:  `1px solid ${T.umber}30`,
      }}
    >
      <GrainOverlay />

      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <p
            style={{
              fontFamily:    'sans-serif',
              fontSize:      '7px',
              letterSpacing: '5px',
              textTransform: 'uppercase',
              color:         T.crimson,
              marginBottom:  '12px',
            }}
          >
            THE FILM
          </p>
          <h2
            style={{
              fontFamily:    `'Cormorant Garamond', serif`,
              fontSize:      'clamp(24px, 4vw, 48px)',
              fontWeight:    300,
              fontStyle:     'italic',
              color:         T.ivory,
              letterSpacing: '-0.5px',
              marginBottom:  '16px',
            }}
          >
            The documentary.
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
            <OrnamentLine color={`${T.umber}60`} width={80} />
          </div>
          <p
            style={{
              fontFamily: `'EB Garamond', serif`,
              fontSize:   'clamp(15px, 1.6vw, 17px)',
              fontStyle:  'italic',
              color:      `${T.ivory}60`,
              maxWidth:   '560px',
              margin:     '0 auto',
              lineHeight: 1.8,
            }}
          >
            A documentary following the women of Project Aatmanirbhar through a single harvest season. Their forests. Their hands. Their knowledge.
          </p>
        </div>

        {/* Film placeholder */}
        <div
          style={{
            maxWidth:       '860px',
            margin:         '0 auto',
            position:       'relative',
            aspectRatio:    '16/9',
            background:     '#0E0A06',
            border:         `1px solid ${T.umber}40`,
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'center',
          }}
        >
          {/* Corner ornaments */}
          {(['topLeft','topRight','bottomLeft','bottomRight'] as const).map((corner) => (
            <div
              key={corner}
              aria-hidden="true"
              style={{
                position:   'absolute',
                width:      '20px',
                height:     '20px',
                borderTop:  corner.startsWith('top')    ? `1px solid ${T.gold}50` : 'none',
                borderBottom: corner.startsWith('bottom') ? `1px solid ${T.gold}50` : 'none',
                borderLeft: corner.endsWith('Left')     ? `1px solid ${T.gold}50` : 'none',
                borderRight:corner.endsWith('Right')    ? `1px solid ${T.gold}50` : 'none',
                top:    corner.startsWith('top')    ? '12px' : undefined,
                bottom: corner.startsWith('bottom') ? '12px' : undefined,
                left:   corner.endsWith('Left')     ? '12px' : undefined,
                right:  corner.endsWith('Right')    ? '12px' : undefined,
              }}
            />
          ))}

          {/* Play icon placeholder */}
          <div style={{ textAlign: 'center' }}>
            <div
              aria-hidden="true"
              style={{
                width:       '60px',
                height:      '60px',
                borderRadius:'50%',
                border:      `1px solid ${T.ivory}30`,
                display:     'flex',
                alignItems:  'center',
                justifyContent: 'center',
                margin:      '0 auto 16px',
              }}
            >
              <div
                style={{
                  width:       0,
                  height:      0,
                  borderTop:   '10px solid transparent',
                  borderBottom:'10px solid transparent',
                  borderLeft:  `16px solid ${T.ivory}50`,
                  marginLeft:  '3px',
                }}
              />
            </div>
            <p
              style={{
                fontFamily:    'sans-serif',
                fontSize:      '7px',
                letterSpacing: '4px',
                textTransform: 'uppercase',
                color:         `${T.ivory}30`,
              }}
            >
              {/* TODO: confirm with client before launch — [documentary URL] */}
              Documentary — Coming soon
            </p>
          </div>
        </div>

        {/* Film meta row */}
        <div
          style={{
            maxWidth:       '860px',
            margin:         '28px auto 0',
            display:        'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap:            '2px',
          }}
        >
          {[
            { label: 'Title',    value: 'Title TBC' },
            { label: 'Director', value: 'Director TBC' },
            { label: 'Runtime',  value: 'Runtime TBC' },
            { label: 'Status',   value: 'In production' },
          ].map(({ label, value }) => (
            <div
              key={label}
              style={{
                background: `${T.umber}15`,
                padding:    '20px 18px',
                borderLeft: `2px solid ${T.umber}30`,
              }}
            >
              <p
                style={{
                  fontFamily:    'sans-serif',
                  fontSize:      '7px',
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  color:         T.muted,
                  marginBottom:  '6px',
                }}
              >
                {label}
              </p>
              <p
                style={{
                  fontFamily: `'EB Garamond', serif`,
                  fontSize:   '14px',
                  fontStyle:  'italic',
                  color:      `${T.ivory}60`,
                }}
              >
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
