import Image from 'next/image';
import ComplianceBadges from '@/components/ComplianceBadges';
import OrnamentLine from '@/components/ui/OrnamentLine';
import { T } from '@/lib/tokens';
import { BRAND } from '@/lib/brand-content';

export default function WhatItIs() {
  return (
    <section
      style={{
        background:  T.ivory,
        borderBottom:`1px solid ${T.border}`,
      }}
    >
      <style>{`
        @media(max-width:767px){.what-sticky-panel{position:static!important;min-height:300px!important}.what-sticky-panel>div{min-height:300px!important}}
      `}</style>
      <div
        style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        }}
      >
        {/* Left — sticky box image */}
        <div
          className="what-sticky-panel"
          style={{
            position:   'sticky',
            top:        '80px',
            alignSelf:  'flex-start',
            minHeight:  '500px',
            overflow:   'hidden',
          }}
        >
          <div style={{ position: 'relative', width: '100%', minHeight: '600px' }}>
            <Image
              src="/images/box-design-and-copy.png"
              alt="BURANSH product box — design and copy detail, AATREY ELIXIR packaging"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              sizes="(max-width: 768px) 100vw, 42vw"
            />
          </div>
        </div>

        {/* Right — scrolling specs */}
        <div style={{ padding: 'clamp(48px, 6vw, 80px) clamp(32px, 5vw, 64px)' }}>
          {/* What it is */}
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
            WHAT IT IS
          </p>

          <h2
            style={{
              fontFamily:    `'Cormorant Garamond', serif`,
              fontSize:      'clamp(24px, 3.5vw, 40px)',
              fontWeight:    300,
              fontStyle:     'italic',
              color:         T.ink,
              lineHeight:    1.1,
              letterSpacing: '-0.5px',
              marginBottom:  '16px',
            }}
          >
            {BRAND.whatItIs.headline}
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
              opacity:      0.75,
              marginBottom: '28px',
            }}
          >
            {BRAND.whatItIs.body}
          </p>

          {/* Not list */}
          <div style={{ marginBottom: '36px' }}>
            {BRAND.whatItIs.notList.map((item) => (
              <div
                key={item}
                style={{
                  display:      'flex',
                  alignItems:   'center',
                  gap:          '12px',
                  padding:      '8px 0',
                  borderBottom: `1px solid ${T.border}50`,
                }}
              >
                <div
                  style={{
                    width:      '6px',
                    height:     '6px',
                    borderRadius: '50%',
                    background: T.green,
                    flexShrink: 0,
                  }}
                />
                <p
                  style={{
                    fontFamily:    `'EB Garamond', serif`,
                    fontSize:      '14px',
                    color:         T.ink,
                    letterSpacing: '0.3px',
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Compliance stamps */}
          <div style={{ marginBottom: '40px' }}>
            <ComplianceBadges layout="row" />
          </div>

          {/* Why altitude matters */}
          <div
            style={{
              background:  T.parchment,
              padding:     '24px',
              borderLeft:  `3px solid ${T.crimson}`,
            }}
          >
            <p
              style={{
                fontFamily:    'sans-serif',
                fontSize:      '7px',
                letterSpacing: '4px',
                textTransform: 'uppercase',
                color:         T.crimson,
                marginBottom:  '10px',
              }}
            >
              WHY ALTITUDE MATTERS
            </p>
            <p
              style={{
                fontFamily: `'EB Garamond', serif`,
                fontSize:   '15px',
                fontStyle:  'italic',
                color:      T.ink,
                lineHeight: 1.75,
                opacity:    0.8,
              }}
            >
              {BRAND.whatItIs.whyItMatters.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
