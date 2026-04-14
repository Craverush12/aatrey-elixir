'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GhostBtn } from '@/components/ui/Button';
import OrnamentLine from '@/components/ui/OrnamentLine';
import { T } from '@/lib/tokens';
import { BRAND } from '@/lib/brand-content';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectAatmanirbhar() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Count-up animation for impact numbers
      BRAND.project.impact.forEach((_, i) => {
        const el = document.querySelector(`.impact-num-${i}`);
        if (!el || _.num === null) return;
        const target = Number(_.num);
        gsap.fromTo(
          el,
          { textContent: '0' },
          {
            textContent: target,
            duration:    0.8,
            ease:        'power2.out',
            snap:        { textContent: 1 },
            scrollTrigger: {
              trigger:     el,
              start:       'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      gsap.fromTo(
        '.project-text',
        { opacity: 0, y: 20 },
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
        background:  T.ivory,
        padding:     '80px clamp(24px, 8vw, 120px)',
        borderTop:   `1px solid ${T.border}`,
        borderBottom:`1px solid ${T.border}`,
      }}
    >
      <style>{`@media(max-width:767px){.aatm-grid{grid-template-columns:1fr!important}}`}</style>
      <div
        className="aatm-grid"
        style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap:                 '48px 64px',
          alignItems:          'center',
        }}
      >
        {/* Left — mission text */}
        <div>
          <p
            className="project-text"
            style={{
              fontFamily:    'sans-serif',
              fontSize:      '7px',
              letterSpacing: '5px',
              textTransform: 'uppercase',
              color:         T.crimson,
              marginBottom:  '14px',
            }}
          >
            PROJECT AATMANIRBHAR
          </p>

          <h2
            className="project-text"
            style={{
              fontFamily:    `'Cormorant Garamond', serif`,
              fontSize:      'clamp(24px, 3.5vw, 40px)',
              fontWeight:    300,
              fontStyle:     'italic',
              color:         T.ink,
              letterSpacing: '-0.3px',
              marginBottom:  '16px',
            }}
          >
            {BRAND.project.name}
          </h2>

          <div className="project-text" style={{ marginBottom: '20px' }}>
            <OrnamentLine color={T.border} width={80} />
          </div>

          <p
            className="project-text"
            style={{
              fontFamily:   `'EB Garamond', serif`,
              fontSize:     'clamp(15px, 1.6vw, 17px)',
              fontStyle:    'italic',
              color:        T.ink,
              lineHeight:   1.8,
              opacity:      0.75,
              marginBottom: '32px',
            }}
          >
            {BRAND.project.body}
          </p>

          <div className="project-text">
            <GhostBtn href="#women">Meet the Women</GhostBtn>
          </div>
        </div>

        {/* Right — impact numbers */}
        <div
          style={{
            display:             'grid',
            gridTemplateColumns: '1fr 1fr',
            gap:                 '2px',
          }}
        >
          {BRAND.project.impact.map((item, i) => (
            <div
              key={item.label}
              style={{
                background: T.parchment,
                padding:    '28px 20px',
                textAlign:  'center',
              }}
            >
              <p
                className={`impact-num-${i}`}
                style={{
                  fontFamily:    `'Cormorant Garamond', serif`,
                  fontSize:      'clamp(36px, 5vw, 56px)',
                  fontWeight:    300,
                  color:         T.crimson,
                  lineHeight:    1,
                  marginBottom:  '4px',
                }}
              >
                {item.num !== null ? item.num : '—'}
              </p>
              <p
                style={{
                  fontFamily:    'sans-serif',
                  fontSize:      '7px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color:         T.muted,
                  lineHeight:    1.4,
                }}
              >
                {item.label}
              </p>
              {/* TODO: confirm with client before launch — [all impact numbers] */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
