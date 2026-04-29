'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { CrimsonBtn } from '@/components/ui/Button';
import GrainOverlay from '@/components/ui/GrainOverlay';
import { T } from '@/lib/tokens';
import { BRAND } from '@/lib/brand-content';

export default function ElixirHero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.elixir-hero-img',
        { scale: 0.96 },
        { scale: 1, duration: 0.8, ease: 'power2.out' }
      );
      gsap.fromTo(
        '.elixir-hero-text',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', stagger: 0.1, delay: 0.3 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position:   'relative',
        minHeight:  '100vh',
        background: T.ink,
        overflow:   'hidden',
        display:    'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
    >
      <GrainOverlay />

      {/* Horizontal editorial still */}
      <div className="elixir-hero-img" style={{ position: 'absolute', inset: 0 }}>
        <Image
          src="/images/arrival-still-life.webp"
          alt="BURANSH 750ml Himalayan Rhododendron Floral Concentrate in an Uttarakhand origin still life"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center center' }}
          sizes="100vw"
        />
      </div>

      {/* Dark overlay */}
      <div
        aria-hidden="true"
        style={{
          position:   'absolute',
          inset:      0,
          background: 'linear-gradient(to top, rgba(24,16,10,0.92) 0%, rgba(24,16,10,0.42) 45%, rgba(24,16,10,0.18) 100%)',
          zIndex:     1,
        }}
      />

      {/* Bottom text overlay */}
      <div
        style={{
          position: 'relative',
          zIndex:   2,
          padding:  '0 clamp(24px, 8vw, 120px) 60px',
          display:  'flex',
          flexWrap: 'wrap',
          gap:      '24px',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        <div>
          <p
            className="elixir-hero-text"
            style={{
              fontFamily:    'sans-serif',
              fontSize:      '7px',
              letterSpacing: '5px',
              textTransform: 'uppercase',
              color:         T.crimson,
              marginBottom:  '8px',
            }}
          >
            {BRAND.sku}
          </p>
          <h1
            className="elixir-hero-text"
            style={{
              fontFamily:    `'Cormorant Garamond', serif`,
              fontSize:      'clamp(48px, 10vw, 120px)',
              fontWeight:    700,
              color:         T.ivory,
              lineHeight:    0.9,
              letterSpacing: '0',
              marginBottom:  '8px',
            }}
          >
            {BRAND.name}
          </h1>
          <p
            className="elixir-hero-text"
            style={{
              fontFamily: `'EB Garamond', serif`,
              fontSize:   'clamp(14px, 1.6vw, 17px)',
              fontStyle:  'italic',
              color:      `${T.ivory}70`,
            }}
          >
            {BRAND.product}
          </p>
        </div>

        <div className="elixir-hero-text">
          <CrimsonBtn href="#order">Order Now</CrimsonBtn>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        style={{
          position:      'absolute',
          bottom:        '24px',
          left:          '50%',
          transform:     'translateX(-50%)',
          zIndex:        3,
          display:       'flex',
          flexDirection: 'column',
          alignItems:    'center',
          gap:           '6px',
          opacity:       0.5,
        }}
      >
        <div
          style={{
            width:      '1px',
            height:     '40px',
            background: T.ivory,
            animation:  'scrollPulse 1.6s ease-in-out infinite',
          }}
        />
        <style>{`@keyframes scrollPulse { 0%,100%{opacity:.2;transform:scaleY(.6)} 50%{opacity:1;transform:scaleY(1)} }`}</style>
      </div>
    </section>
  );
}
