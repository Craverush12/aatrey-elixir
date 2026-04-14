'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import OrnamentLine from '@/components/ui/OrnamentLine';
import { T } from '@/lib/tokens';
import { BRAND } from '@/lib/brand-content';

gsap.registerPlugin(ScrollTrigger);

export default function WildernessActivities() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.wild-tile',
        { opacity: 0, y: 16 },
        {
          opacity:  1,
          y:        0,
          duration: 0.5,
          ease:     'power2.out',
          stagger:  0.08,
          scrollTrigger: {
            trigger: sectionRef.current,
            start:   'top 72%',
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
        background:   T.parchment,
        padding:      '96px clamp(24px, 8vw, 120px)',
        borderTop:    `1px solid ${T.border}`,
        borderBottom: `1px solid ${T.border}`,
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '56px' }}>
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
          IN THE WILDERNESS
        </p>
        <h2
          style={{
            fontFamily:    `'Cormorant Garamond', serif`,
            fontSize:      'clamp(24px, 4vw, 48px)',
            fontWeight:    300,
            fontStyle:     'italic',
            color:         T.ink,
            letterSpacing: '-0.5px',
            marginBottom:  '16px',
          }}
        >
          What you will do here.
        </h2>
        <OrnamentLine color={T.border} width={80} />
      </div>

      <style>{`
        @media(max-width:480px){.wild-grid{grid-template-columns:1fr!important}}
        @media(min-width:481px) and (max-width:767px){.wild-grid{grid-template-columns:repeat(2,1fr)!important}}
      `}</style>
      {/* Activity grid */}
      <div
        className="wild-grid"
        style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap:                 '2px',
        }}
      >
        {BRAND.staycation.wilderness.map((activity, i) => (
          <div
            key={activity.name}
            className="wild-tile"
            style={{
              background: T.ivory,
              padding:    '36px 28px',
              border:     `1px solid ${T.border}`,
            }}
          >
            {/* Number */}
            <p
              aria-hidden="true"
              style={{
                fontFamily:    `'Cormorant Garamond', serif`,
                fontSize:      '11px',
                letterSpacing: '2px',
                color:         T.crimson,
                marginBottom:  '14px',
                opacity:       0.6,
              }}
            >
              {String(i + 1).padStart(2, '0')}
            </p>

            <h3
              style={{
                fontFamily:   `'Cormorant Garamond', serif`,
                fontSize:     'clamp(17px, 2vw, 22px)',
                fontWeight:   300,
                fontStyle:    'italic',
                color:        T.ink,
                marginBottom: '10px',
                lineHeight:   1.2,
              }}
            >
              {activity.name}
            </h3>

            <div style={{ marginBottom: '12px' }}>
              <OrnamentLine color={T.border} width={50} />
            </div>

            <p
              style={{
                fontFamily: `'EB Garamond', serif`,
                fontSize:   '14px',
                fontStyle:  'italic',
                color:      T.muted,
                lineHeight: 1.7,
              }}
            >
              {activity.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
