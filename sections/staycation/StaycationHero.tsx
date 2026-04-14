'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { GhostIvoryBtn } from '@/components/ui/Button';
import GrainOverlay from '@/components/ui/GrainOverlay';
import { T } from '@/lib/tokens';
import { BRAND } from '@/lib/brand-content';

export default function StaycationHero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.stay-hero-text',
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', stagger: 0.1, delay: 0.3 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position:      'relative',
        minHeight:     '100vh',
        background:    T.ink,
        overflow:      'hidden',
        display:       'flex',
        flexDirection: 'column',
        justifyContent:'flex-end',
      }}
    >
      <GrainOverlay />

      {/* Hero image */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <Image
          src="/images/arrival-still-life.png"
          alt="BURANSH bottle on wooden tray at sunset — Himalayan mountains, Uttarakhand"
          fill
          priority
          style={{ objectFit: 'contain', objectPosition: 'center 60%' }}
          sizes="100vw"
        />
      </div>

      {/* Dark overlay */}
      <div
        aria-hidden="true"
        style={{
          position:   'absolute',
          inset:      0,
          background: 'linear-gradient(to top, rgba(24,16,10,0.95) 0%, rgba(24,16,10,0.45) 55%, rgba(24,16,10,0.1) 100%)',
          zIndex:     1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position:  'relative',
          zIndex:    2,
          padding:   '0 clamp(24px, 8vw, 120px) 72px',
          maxWidth:  '800px',
        }}
      >
        <p
          className="stay-hero-text"
          style={{
            fontFamily:    'sans-serif',
            fontSize:      '7px',
            letterSpacing: '5px',
            textTransform: 'uppercase',
            color:         T.crimson,
            marginBottom:  '16px',
          }}
        >
          BURANSH STAYCATION · UTTARAKHAND
        </p>

        <h1
          className="stay-hero-text"
          style={{
            fontFamily:    `'Cormorant Garamond', serif`,
            fontSize:      'clamp(36px, 7vw, 80px)',
            fontWeight:    300,
            fontStyle:     'italic',
            color:         T.ivory,
            lineHeight:    1.0,
            letterSpacing: '-1.5px',
            marginBottom:  '20px',
          }}
        >
          {BRAND.staycation.hero.headline}
        </h1>

        <p
          className="stay-hero-text"
          style={{
            fontFamily: `'EB Garamond', serif`,
            fontSize:   'clamp(15px, 1.7vw, 18px)',
            fontStyle:  'italic',
            color:      `${T.ivory}70`,
            lineHeight: 1.75,
            maxWidth:   '520px',
            marginBottom:'28px',
          }}
        >
          {BRAND.staycation.hero.sub}
        </p>

        <div className="stay-hero-text">
          <GhostIvoryBtn href="#staycation-book">
            Enquire About a Stay
          </GhostIvoryBtn>
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
          opacity:       0.45,
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
