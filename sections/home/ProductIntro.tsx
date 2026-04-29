'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CrimsonBtn, GhostBtn } from '@/components/ui/Button';
import OrnamentLine from '@/components/ui/OrnamentLine';
import { T } from '@/lib/tokens';
import { BRAND } from '@/lib/brand-content';

gsap.registerPlugin(ScrollTrigger);

export default function ProductIntro() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.product-text',
        { opacity: 0, y: 20 },
        {
          opacity:  1,
          y:        0,
          duration: 0.55,
          ease:     'power2.out',
          stagger:  0.08,
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
      id="product-intro"
      style={{
        background:  T.ivory,
        borderTop:   `1px solid ${T.border}`,
        borderBottom:`1px solid ${T.border}`,
      }}
    >
      <style>{`
        @media(max-width:767px){.product-grid{grid-template-columns:1fr!important}.product-img{min-height:300px!important}}
      `}</style>
      <div
        className="product-grid"
        style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          minHeight:           '600px',
        }}
      >
        {/* Left — bottle image */}
        <div
          className="product-img"
          style={{
            position:   'relative',
            minHeight:  '400px',
            background: T.parchment,
            overflow:   'hidden',
          }}
        >
          <Image
            src="/images/bottle-pour.webp"
            alt="BURANSH Himalayan Rhododendron Floral Concentrate — being poured"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Right — copy */}
        <div
          style={{
            display:        'flex',
            flexDirection:  'column',
            justifyContent: 'center',
            padding:        'clamp(40px, 6vw, 80px)',
          }}
        >
          <p
            className="product-text"
            style={{
              fontFamily:    'sans-serif',
              fontSize:      '7px',
              letterSpacing: '5px',
              textTransform: 'uppercase',
              color:         T.crimson,
              marginBottom:  '14px',
            }}
          >
            {BRAND.productIntro.label}
          </p>

          <h2
            className="product-text"
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
            {BRAND.productIntro.headline}
          </h2>

          <div className="product-text" style={{ marginBottom: '20px' }}>
            <OrnamentLine color={T.border} width={80} />
          </div>

          <p
            className="product-text"
            style={{
              fontFamily: `'EB Garamond', serif`,
              fontSize:   'clamp(15px, 1.6vw, 17px)',
              fontStyle:  'italic',
              color:      T.ink,
              lineHeight: 1.8,
              opacity:    0.75,
              marginBottom: '28px',
              maxWidth:   '440px',
            }}
          >
            {BRAND.productIntro.body}
          </p>

          {/* Spec pills */}
          <div
            className="product-text"
            style={{
              display:   'flex',
              flexWrap:  'wrap',
              gap:       '8px',
              marginBottom: '32px',
            }}
          >
            {BRAND.productIntro.specs.map((spec) => (
              <span
                key={spec}
                style={{
                  border:        `1px solid ${T.border}`,
                  padding:       '5px 14px',
                  fontFamily:    `'EB Garamond', serif`,
                  fontSize:      '11px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  color:         T.muted,
                }}
              >
                {spec}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div
            className="product-text"
            style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}
          >
            <CrimsonBtn href="/elixir#order">
              Buy the Elixir
            </CrimsonBtn>
            <GhostBtn href="/elixir#pairings">
              See all uses
            </GhostBtn>
          </div>
        </div>
      </div>
    </section>
  );
}
