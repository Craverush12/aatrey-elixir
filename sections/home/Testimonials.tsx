'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GrainOverlay from '@/components/ui/GrainOverlay';
import OrnamentLine from '@/components/ui/OrnamentLine';
import { T } from '@/lib/tokens';
import { TESTIMONIALS } from '@/lib/testimonials';

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;
  return <TestimonialsInner />;
}

function TestimonialsInner() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.testimonial-card',
        { opacity: 0, y: 28 },
        {
          opacity:  1,
          y:        0,
          duration: 0.6,
          ease:     'power2.out',
          stagger:  0.15,
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
        {/* Section label */}
        <p
          style={{
            fontFamily:    'sans-serif',
            fontSize:      '7px',
            letterSpacing: '5px',
            textTransform: 'uppercase',
            color:         T.crimson,
            marginBottom:  '40px',
            textAlign:     'center',
          }}
        >
          ASIA ENDORSED
        </p>

        <style>{`
          @media(max-width:480px){.testimonials-grid{grid-template-columns:1fr!important}}
          @media(min-width:481px) and (max-width:767px){.testimonials-grid{grid-template-columns:repeat(2,1fr)!important}}
        `}</style>
        {/* 3-col grid */}
        <div
          className="testimonials-grid"
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap:                 '32px 40px',
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="testimonial-card"
              style={{
                padding:      '32px',
                borderLeft:   `2px solid ${T.crimson}40`,
              }}
            >
              {/* Quote mark */}
              <p
                aria-hidden="true"
                style={{
                  fontFamily:  `'Cormorant Garamond', serif`,
                  fontSize:    '64px',
                  fontStyle:   'italic',
                  color:       T.crimson,
                  lineHeight:  0.8,
                  opacity:     0.3,
                  marginBottom:'12px',
                  userSelect:  'none',
                }}
              >
                &ldquo;
              </p>

              <blockquote
                style={{
                  fontFamily:  `'Cormorant Garamond', serif`,
                  fontSize:    'clamp(16px, 2vw, 20px)',
                  fontStyle:   'italic',
                  color:       T.ivory,
                  lineHeight:  1.6,
                  marginBottom:'20px',
                }}
              >
                {t.quote}
              </blockquote>

              <div style={{ marginBottom: '14px' }}>
                <OrnamentLine color={`${T.umber}50`} width={60} />
              </div>

              <footer>
                <p
                  style={{
                    fontFamily: `'EB Garamond', serif`,
                    fontSize:   '13px',
                    color:      T.ivory,
                    marginBottom: '2px',
                  }}
                >
                  {t.name}
                </p>
                <p
                  style={{
                    fontFamily: `'EB Garamond', serif`,
                    fontSize:   '11px',
                    fontStyle:  'italic',
                    color:      T.muted,
                  }}
                >
                  {t.title} · {t.city}
                </p>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
