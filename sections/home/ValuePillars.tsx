'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GhostIvoryBtn } from '@/components/ui/Button';
import OrnamentLine from '@/components/ui/OrnamentLine';
import GrainOverlay from '@/components/ui/GrainOverlay';
import { T } from '@/lib/tokens';
import { BRAND } from '@/lib/brand-content';

gsap.registerPlugin(ScrollTrigger);

export default function ValuePillars() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.pillar-card',
        { opacity: 0, y: 24 },
        {
          opacity:  1,
          y:        0,
          duration: 0.55,
          ease:     'power2.out',
          stagger:  0.1,
          scrollTrigger: {
            trigger:     '.pillar-card',
            start:       'top 80%',
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
      <style>{`
        @media(max-width:480px){.pillars-grid{grid-template-columns:1fr!important}}
        @media(min-width:481px) and (max-width:767px){.pillars-grid{grid-template-columns:repeat(2,1fr)!important}}
      `}</style>
      <GrainOverlay />

      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Section label */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
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
            WHY BURANSH
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
            Four reasons this elixir is unlike anything you have ever tasted.
          </h2>
        </div>

        {/* 4-column grid */}
        <div
          className="pillars-grid"
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap:                 '2px',
            marginBottom:        '48px',
          }}
        >
          {BRAND.valuePillars.map((pillar) => (
            <div
              key={pillar.num}
              className="pillar-card"
              style={{
                background: `${T.ivory}08`,
                border:     `1px solid ${T.umber}30`,
                padding:    '32px 24px',
              }}
            >
              {/* Numeral */}
              <p
                style={{
                  fontFamily:    `'Cormorant Garamond', serif`,
                  fontSize:      '48px',
                  fontStyle:     'italic',
                  fontWeight:    300,
                  color:         T.gold,
                  lineHeight:    1,
                  marginBottom:  '16px',
                  opacity:       0.6,
                }}
              >
                {pillar.num}
              </p>

              {/* Title */}
              <h3
                style={{
                  fontFamily:    `'Cormorant Garamond', serif`,
                  fontSize:      '20px',
                  fontWeight:    400,
                  color:         T.ivory,
                  marginBottom:  '10px',
                  lineHeight:    1.2,
                }}
              >
                {pillar.title}
              </h3>

              <div style={{ marginBottom: '12px' }}>
                <OrnamentLine color={`${T.umber}60`} width={60} />
              </div>

              {/* Body */}
              <p
                style={{
                  fontFamily: `'EB Garamond', serif`,
                  fontSize:   '14px',
                  fontStyle:  'italic',
                  color:      `${T.ivory}70`,
                  lineHeight: 1.65,
                }}
              >
                {pillar.body}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <GhostIvoryBtn href="/about">
            Discover the Full Story
          </GhostIvoryBtn>
        </div>
      </div>
    </section>
  );
}
