'use client';

import { useState } from 'react';
import Image from 'next/image';
import ComplianceBadges from '@/components/ComplianceBadges';
import OrnamentLine from '@/components/ui/OrnamentLine';
import { T } from '@/lib/tokens';
import { BRAND } from '@/lib/brand-content';

const CAROUSEL = [
  { src: '/images/bottle-pour.webp',         alt: 'BURANSH Himalayan Rhododendron Concentrate being poured' },
  { src: '/images/arrival-still-life.webp',  alt: 'BURANSH bottle on wooden tray — Himalayan sunset' },
  { src: '/images/gifting-collection.webp',  alt: 'BURANSH gifting collection — crate with four bottles' },
  { src: '/images/buransh-flower.webp',      alt: 'Fresh Himalayan buransh blossoms used for the floral concentrate' },
];

export default function WhatItIs() {
  const [active, setActive] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      setActive((prev) => (prev + 1) % CAROUSEL.length);
    } else if (isRightSwipe) {
      setActive((prev) => (prev - 1 + CAROUSEL.length) % CAROUSEL.length);
    }
  };

  return (
    <section
      style={{
        background:  T.ivory,
        borderBottom:`1px solid ${T.border}`,
      }}
    >
      <style>{`
        @media(max-width:767px){
          .what-sticky-panel{position:static!important;top:auto!important;min-height:auto!important;background:${T.ink}!important;margin-top:40px!important}
          .what-carousel-stage{min-height:clamp(360px,68svh,520px)!important;background:${T.ink}!important}
          .what-carousel-image{object-fit:contain!important;object-position:center center!important}
          .what-carousel-dots{padding:14px 0 18px!important}
          .what-copy{padding:40px 24px 56px!important}
        }
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
            background: T.ink, // Avoid brown background around contained images
          }}
        >
          {/* Image area */}
          <div 
            className="what-carousel-stage" 
            style={{ position: 'relative', width: '100%', minHeight: '560px' }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {CAROUSEL.map((img, i) => (
              <div
                className="what-carousel-slide"
                key={img.src}
                style={{
                  position:   'absolute',
                  inset:      0,
                  transition: 'opacity 500ms ease',
                  opacity:    i === active ? 1 : 0,
                  zIndex:     i === active ? 1 : 0,
                  pointerEvents: i === active ? 'auto' : 'none',
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="what-carousel-image"
                  style={{ objectFit: 'contain', objectPosition: 'center' }}
                  sizes="(max-width: 768px) 100vw, 42vw"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>

          {/* Dot navigation */}
          <div
            className="what-carousel-dots"
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
                  background:   i === active ? T.crimson : 'rgba(255, 255, 255, 0.3)',
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
        <div className="what-copy" style={{ padding: 'clamp(48px, 6vw, 80px) clamp(32px, 5vw, 64px)' }}>
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
              letterSpacing: '0',
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

          {/* Ingredients */}
          <div style={{ marginBottom: '36px' }}>
            <p style={{ fontFamily: 'sans-serif', fontSize: '7px', letterSpacing: '4px',
              textTransform: 'uppercase', color: T.crimson, marginBottom: '10px' }}>
              INGREDIENTS
            </p>
            <p style={{ fontFamily: `'EB Garamond', serif`, fontSize: '15px',
              fontStyle: 'italic', color: T.ink, lineHeight: 1.7, opacity: 0.8 }}>
              {BRAND.ingredients}
            </p>
          </div>

          {/* Nutritional table */}
          <div style={{ marginBottom: '40px' }}>
            <p style={{ fontFamily: 'sans-serif', fontSize: '7px', letterSpacing: '4px',
              textTransform: 'uppercase', color: T.crimson, marginBottom: '14px' }}>
              NUTRITIONAL VALUE PER {BRAND.nutrition.servingSize}
            </p>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                {BRAND.nutrition.rows.map((row, i) => (
                  <tr key={row.label} style={{
                    borderBottom: `1px solid ${T.border}50`,
                    background: i % 2 === 0 ? 'transparent' : `${T.parchment}80`,
                  }}>
                    <td style={{ padding: '7px 0 7px 8px', fontFamily: `'EB Garamond', serif`,
                      fontSize: '14px', color: T.ink, opacity: 0.8 }}>
                      {row.label}
                    </td>
                    <td style={{ padding: '7px 8px 7px 0', fontFamily: 'sans-serif',
                      fontSize: '11px', letterSpacing: '0.5px', color: T.ink,
                      fontWeight: 700, textAlign: 'right', whiteSpace: 'nowrap' }}>
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
