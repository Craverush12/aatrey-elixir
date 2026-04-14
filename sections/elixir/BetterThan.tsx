'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GrainOverlay from '@/components/ui/GrainOverlay';
import { T } from '@/lib/tokens';
import { BRAND } from '@/lib/brand-content';

gsap.registerPlugin(ScrollTrigger);

export default function BetterThan() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.better-card',
        { opacity: 0, y: 28 },
        {
          opacity:  1,
          y:        0,
          duration: 0.55,
          ease:     'power2.out',
          stagger:  0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start:   'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: T.ink,
        padding:    '80px clamp(24px, 8vw, 120px)',
        position:   'relative',
        overflow:   'hidden',
      }}
    >
      <GrainOverlay />

      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Headline */}
        <div style={{ marginBottom: '48px', maxWidth: '640px' }}>
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
            THE BETTER CHOICE
          </p>
          <h2
            style={{
              fontFamily:    `'Cormorant Garamond', serif`,
              fontSize:      'clamp(22px, 3.5vw, 36px)',
              fontWeight:    300,
              fontStyle:     'italic',
              color:         T.ivory,
              letterSpacing: '-0.3px',
            }}
          >
            {BRAND.betterThan.headline}
          </h2>
        </div>

        <style>{`
          @media(max-width:480px){.better-grid{grid-template-columns:1fr!important}}
          @media(min-width:481px) and (max-width:767px){.better-grid{grid-template-columns:repeat(2,1fr)!important}}
        `}</style>
        {/* Comparison grid */}
        <div
          className="better-grid"
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap:                 '2px',
          }}
        >
          {BRAND.betterThan.comparisons.map((comp) => (
            <div
              key={comp.versus}
              className="better-card"
              style={{
                background: `${T.ivory}06`,
                border:     `1px solid ${T.umber}30`,
                padding:    '28px 24px',
              }}
            >
              <h3
                style={{
                  fontFamily:    `'Cormorant Garamond', serif`,
                  fontSize:      '20px',
                  fontStyle:     'italic',
                  color:         T.crimson,
                  marginBottom:  '16px',
                  lineHeight:    1.2,
                }}
              >
                {comp.versus}
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {comp.points.map((point) => (
                  <li
                    key={point}
                    style={{
                      fontFamily:  `'EB Garamond', serif`,
                      fontSize:    '14px',
                      color:       `${T.ivory}80`,
                      fontStyle:   'italic',
                      lineHeight:  1.5,
                      display:     'flex',
                      alignItems:  'flex-start',
                      gap:         '8px',
                    }}
                  >
                    <span style={{ color: T.gold, flexShrink: 0, marginTop: '3px' }}>—</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
