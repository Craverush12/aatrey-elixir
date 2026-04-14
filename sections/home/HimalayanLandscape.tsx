'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CrimsonBtn } from '@/components/ui/Button';
import { T } from '@/lib/tokens';
import { BRAND } from '@/lib/brand-content';

gsap.registerPlugin(ScrollTrigger);

export default function HimalayanLandscape() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax on placeholder div (real image: use img element)
      if (imgRef.current) {
        gsap.to(imgRef.current, {
          yPercent:      -8,
          ease:          'none',
          scrollTrigger: {
            trigger:    sectionRef.current,
            start:      'top bottom',
            end:        'bottom top',
            scrub:      1.1,
          },
        });
      }

      gsap.fromTo(
        '.landscape-text',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y:       0,
          duration: 0.6,
          ease:    'power2.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start:   'top 65%',
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
        position:   'relative',
        minHeight:  '70vh',
        background: T.ink,
        overflow:   'hidden',
        display:    'flex',
        alignItems: 'flex-end',
      }}
    >
      {/* Background image */}
      <div ref={imgRef} style={{ position: 'absolute', inset: '-14% 0' }}>
        <Image
          src="/images/arrival-still-life.png"
          alt="BURANSH bottle on wooden tray — Himalayan mountains at sunset, Uttarakhand"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 15%' }}
          sizes="100vw"
        />
      </div>

      {/* Dark overlay */}
      <div
        aria-hidden="true"
        style={{
          position:   'absolute',
          inset:      0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.1) 100%)',
          zIndex:     1,
        }}
      />

      <style>{`
        @media(max-width:767px){.landscape-content{flex-direction:column!important;align-items:flex-start!important;gap:32px!important;padding-bottom:48px!important}}
      `}</style>
      {/* Content overlay */}
      <div
        className="landscape-content"
        style={{
          position: 'relative',
          zIndex:   2,
          padding:  '48px clamp(24px, 8vw, 120px)',
          width:    '100%',
          display:  'flex',
          flexWrap: 'wrap',
          gap:      '24px',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        {/* Text */}
        <div style={{ maxWidth: '560px' }}>
          <p
            className="landscape-text"
            style={{
              fontFamily:    'sans-serif',
              fontSize:      '7px',
              letterSpacing: '5px',
              textTransform: 'uppercase',
              color:         T.crimson,
              marginBottom:  '12px',
            }}
          >
            {BRAND.origin.altitude} · {BRAND.origin.region}
          </p>

          <h2
            className="landscape-text"
            style={{
              fontFamily:    `'Cormorant Garamond', serif`,
              fontSize:      'clamp(28px, 5vw, 60px)',
              fontWeight:    300,
              fontStyle:     'italic',
              color:         '#FFFFFF',
              lineHeight:    1.05,
              letterSpacing: '-0.5px',
              marginBottom:  '20px',
            }}
          >
            2,500 metres<br />above ordinary.
          </h2>

          {/* Data points */}
          <div
            className="landscape-text"
            style={{
              display:  'flex',
              flexWrap: 'wrap',
              gap:      '24px',
            }}
          >
            {[
              { label: 'Altitude',     value: '2,500m' },
              { label: 'Region',       value: BRAND.origin.region },
              { label: 'Bloom season', value: BRAND.origin.bloom },
            ].map(({ label, value }) => (
              <div key={label}>
                <p
                  style={{
                    fontFamily:    'sans-serif',
                    fontSize:      '7px',
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    color:         'rgba(255,255,255,0.5)',
                    marginBottom:  '4px',
                  }}
                >
                  {label}
                </p>
                <p
                  style={{
                    fontFamily: `'EB Garamond', serif`,
                    fontSize:   '15px',
                    color:      'rgba(255,255,255,0.9)',
                    fontStyle:  'italic',
                  }}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="landscape-text">
          <CrimsonBtn href="/staycation">
            Book the Staycation
          </CrimsonBtn>
        </div>
      </div>
    </section>
  );
}
