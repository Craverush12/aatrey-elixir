'use client';

import { useState } from 'react';
import Image from 'next/image';
import ComplianceBadges from '@/components/ComplianceBadges';
import OrnamentLine from '@/components/ui/OrnamentLine';
import { T } from '@/lib/tokens';
import { BRAND } from '@/lib/brand-content';

const CAROUSEL = [
  { src: '/images/bottle-editorial.png',    alt: 'BURANSH 750ml studio editorial — dark background' },
  { src: '/images/bottle-pour.png',         alt: 'BURANSH Himalayan Rhododendron Concentrate being poured' },
  { src: '/images/arrival-still-life.png',  alt: 'BURANSH bottle on wooden tray — Himalayan sunset' },
  { src: '/images/gifting-collection.png',  alt: 'BURANSH gifting collection — crate with four bottles' },
];

export default function WhatItIs() {
  const [active, setActive] = useState(0);

  return (
    <section
      style={{
        background:  T.ivory,
        borderBottom:`1px solid ${T.border}`,
      }}
    >
      <style>{`
        @media(max-width:767px){.what-sticky-panel{position:static!important;min-height:300px!important}.what-sticky-panel>div:first-child{min-height:300px!important}}
      `}</style>
      <div
        style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        }}
      >
        {/* Left — sticky product carousel */}
        <div
          className="what-sticky-panel"
          style={{
            position:  'sticky',
            top:       '80px',
            alignSelf: 'flex-start',
            minHeight: '500px',
            overflow:  'hidden',
            background: T.parchment,
          }}
        >
          {/* Image area */}
          <div style={{ position: 'relative', width: '100%', minHeight: '560px' }}>
            {CAROUSEL.map((img, i) => (
              <div
                key={img.src}
                style={{
                  position:   'absolute',
                  inset:      0,
                  transition: 'opacity 500ms ease',
                  opacity:    i === active ? 1 : 0,
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'center' }}
                  sizes="(max-width: 768px) 100vw, 42vw"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>

          {/* Dot navigation */}
          <div
            style={{
              display:        'flex',
              justifyContent: 'center',
              gap:            '8px',
              padding:        '16px 0 20px',
            }}
          >
            {CAROUSEL.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`View image ${i + 1}`}
                style={{
                  width:        i === active ? '24px' : '6px',
                  height:       '6px',
                  borderRadius: '3px',
                  background:   i === active ? T.crimson : `${T.umber}50`,
                  border:       'none',
                  cursor:       'pointer',
                  padding:      0,
                  transition:   'all 300ms ease',
                }}
              />
            ))}
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
                    width:        '6px',
                    height:       '6px',
                    borderRadius: '50%',
                    background:   T.green,
                    flexShrink:   0,
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
              background: T.parchment,
              padding:    '24px',
              borderLeft: `3px solid ${T.crimson}`,
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
