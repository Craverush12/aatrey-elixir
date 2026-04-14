'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import OrnamentLine from '@/components/ui/OrnamentLine';
import GrainOverlay from '@/components/ui/GrainOverlay';
import { T } from '@/lib/tokens';
import { BRAND } from '@/lib/brand-content';

gsap.registerPlugin(ScrollTrigger);

export default function JourneySteps() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      BRAND.staycation.journey.forEach((_, i) => {
        gsap.fromTo(
          `.journey-step-${i}`,
          { opacity: 0, x: i % 2 === 0 ? -24 : 24 },
          {
            opacity:  1,
            x:        0,
            duration: 0.6,
            ease:     'power2.out',
            scrollTrigger: {
              trigger:    `.journey-step-${i}`,
              start:      'top 78%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: T.ink,
        padding:    '96px clamp(24px, 8vw, 120px)',
        position:   'relative',
        borderTop:  `1px solid ${T.umber}30`,
      }}
    >
      <GrainOverlay />

      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div style={{ marginBottom: '64px' }}>
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
            YOUR JOURNEY
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
            Four stages. One memory.
          </h2>
          <OrnamentLine color={`${T.umber}60`} width={80} />
        </div>

        <style>{`
          @media(max-width:480px){.journey-grid{grid-template-columns:1fr!important}}
          @media(min-width:481px) and (max-width:767px){.journey-grid{grid-template-columns:repeat(2,1fr)!important}}
        `}</style>
        {/* Journey steps */}
        <div
          className="journey-grid"
          style={{
            display:      'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap:          '2px',
          }}
        >
          {BRAND.staycation.journey.map((step, i) => (
            <div
              key={step.num}
              className={`journey-step-${i}`}
              style={{
                background:  i % 2 === 0 ? `${T.umber}18` : `${T.crimson}12`,
                padding:     '40px 32px',
                borderLeft:  `2px solid ${i % 2 === 0 ? `${T.umber}40` : `${T.crimson}50`}`,
                position:    'relative',
              }}
            >
              {/* Step number */}
              <p
                aria-hidden="true"
                style={{
                  position:      'absolute',
                  top:           '20px',
                  right:         '24px',
                  fontFamily:    `'Cormorant Garamond', serif`,
                  fontSize:      '60px',
                  fontWeight:    700,
                  color:         T.ivory,
                  opacity:       0.04,
                  lineHeight:    1,
                  userSelect:    'none',
                }}
              >
                {step.num}
              </p>

              <p
                style={{
                  fontFamily:    'sans-serif',
                  fontSize:      '7px',
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  color:         T.crimson,
                  marginBottom:  '14px',
                }}
              >
                Stage {step.num} — {step.stage}
              </p>

              <h3
                style={{
                  fontFamily:   `'Cormorant Garamond', serif`,
                  fontSize:     'clamp(18px, 2.2vw, 26px)',
                  fontStyle:    'italic',
                  fontWeight:   300,
                  color:        T.ivory,
                  lineHeight:   1.2,
                  marginBottom: '14px',
                }}
              >
                {step.headline}
              </h3>

              <div style={{ marginBottom: '14px' }}>
                <OrnamentLine color={`${T.umber}40`} width={50} />
              </div>

              <p
                style={{
                  fontFamily: `'EB Garamond', serif`,
                  fontSize:   'clamp(14px, 1.5vw, 16px)',
                  fontStyle:  'italic',
                  color:      `${T.ivory}65`,
                  lineHeight: 1.75,
                }}
              >
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
