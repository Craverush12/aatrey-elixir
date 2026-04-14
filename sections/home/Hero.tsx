'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { CrimsonBtn, GhostBtn } from '@/components/ui/Button';
import OrnamentLine from '@/components/ui/OrnamentLine';
import GrainOverlay from '@/components/ui/GrainOverlay';
import { T } from '@/lib/tokens';
import { BRAND } from '@/lib/brand-content';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-anim',
        { opacity: 0, y: 20 },
        {
          opacity:  1,
          y:        0,
          duration: 0.55,
          ease:     'power2.out',
          stagger:  0.1,
        }
      );
      gsap.fromTo(
        '.hero-rule',
        { scaleY: 0, opacity: 0 },
        { scaleY: 1, opacity: 1, duration: 0.6, ease: 'power2.out', delay: 0.2 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hero-section"
      style={{
        minHeight:           '100vh',
        display:             'grid',
        gridTemplateColumns: '55fr 45fr',
        position:            'relative',
        overflow:            'hidden',
      }}
    >
      <style>{`
        @media(max-width:767px){
          .hero-bottle-panel{display:none!important}
          .hero-section{display:block!important}
          .hero-left-panel{min-height:100svh;flex-direction:column!important;align-items:stretch!important;padding-top:0!important}
          .hero-mobile-bottle{display:block!important}
          .hero-left-text{padding-top:40px!important}
        }
      `}</style>

      {/* ── Left — ivory text panel ── */}
      <div
        className="hero-left-panel"
        style={{
          background: T.ivory,
          display:    'flex',
          alignItems: 'center',
          padding:    '100px clamp(24px, 6vw, 80px) 80px clamp(24px, 8vw, 120px)',
          position:   'relative',
          overflow:   'hidden',
        }}
      >
        {/* Mobile-only bottle strip — hidden on desktop */}
        <div
          className="hero-mobile-bottle"
          style={{
            display:    'none',
            width:      '100%',
            height:     '300px',
            background: T.ink,
            position:   'relative',
            overflow:   'hidden',
            flexShrink: 0,
          }}
        >
          <Image
            src="/images/bottle-editorial.png"
            alt="BURANSH 750ml Himalayan Rhododendron Floral Concentrate"
            fill
            priority
            style={{ objectFit: 'contain', objectPosition: 'center' }}
            sizes="100vw"
          />
        </div>

        <GrainOverlay />

        {/* Radial gradient bg wash */}
        <div
          aria-hidden="true"
          style={{
            position:      'absolute',
            inset:         0,
            background:    `radial-gradient(ellipse 90% 70% at 80% 50%, ${T.linen} 0%, transparent 65%), radial-gradient(ellipse 40% 80% at 5% 90%, ${T.parchment} 0%, transparent 50%)`,
            pointerEvents: 'none',
          }}
        />

        {/* Vertical side label */}
        <div
          aria-hidden="true"
          style={{
            position:        'absolute',
            left:            '18px',
            top:             '50%',
            transform:       'translateY(-50%) rotate(-90deg)',
            transformOrigin: 'center',
            opacity:         0.18,
            whiteSpace:      'nowrap',
          }}
        >
          <p
            style={{
              fontFamily:    'sans-serif',
              fontSize:      '7px',
              letterSpacing: '5px',
              textTransform: 'uppercase',
              color:         T.muted,
            }}
          >
            RHODODENDRON ARBOREUM · 2500M · UTTARAKHAND · PROJECT AATMANIRBHAR
          </p>
        </div>

        {/* Vertical crimson rule */}
        <div
          className="hero-rule"
          aria-hidden="true"
          style={{
            position:        'absolute',
            left:            'clamp(40px, 6vw, 80px)',
            top:             '15%',
            bottom:          '15%',
            width:           '1px',
            background:      `linear-gradient(to bottom, transparent, ${T.crimson}60, transparent)`,
            transformOrigin: 'top',
          }}
        />

        {/* Text block */}
        <div className="hero-left-text" style={{ position: 'relative', zIndex: 2, paddingLeft: 'clamp(0px, 4vw, 40px)' }}>
          {/* Pre-label */}
          <div
            className="hero-anim"
            style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '30px' }}
          >
            <div style={{ width: '32px', height: '1px', background: T.crimson }} />
            <p
              style={{
                fontFamily:    'sans-serif',
                fontSize:      '8px',
                letterSpacing: '4px',
                textTransform: 'uppercase',
                color:         T.crimson,
              }}
            >
              {BRAND.heroCopy.preLabel}
            </p>
          </div>

          {/* H1 */}
          <h1>
            <span
              className="hero-anim"
              style={{
                display:       'block',
                fontFamily:    `'Cormorant Garamond', serif`,
                fontSize:      'clamp(46px, 7vw, 100px)',
                fontWeight:    300,
                fontStyle:     'italic',
                color:         T.ink,
                lineHeight:    0.95,
                letterSpacing: '-2px',
              }}
            >
              {BRAND.heroCopy.line1}
            </span>
            <span
              className="hero-anim"
              style={{
                display:       'block',
                fontFamily:    `'Cormorant Garamond', serif`,
                fontSize:      'clamp(46px, 7vw, 100px)',
                fontWeight:    700,
                color:         T.ink,
                lineHeight:    1,
                letterSpacing: '-2px',
              }}
            >
              {BRAND.heroCopy.line2}
            </span>
          </h1>

          {/* Ornament */}
          <div className="hero-anim" style={{ margin: '26px 0' }}>
            <OrnamentLine color={T.border} width={160} />
          </div>

          {/* Body copy */}
          <p
            className="hero-anim"
            style={{
              fontFamily: `'EB Garamond', serif`,
              fontSize:   'clamp(14px, 1.5vw, 17px)',
              fontStyle:  'italic',
              color:      T.ink,
              lineHeight: 1.85,
              maxWidth:   '480px',
              opacity:    0.65,
            }}
          >
            {BRAND.heroCopy.body}
          </p>

          {/* CTAs */}
          <div
            className="hero-anim"
            style={{ display: 'flex', gap: '10px', marginTop: '32px', flexWrap: 'wrap' }}
          >
            <CrimsonBtn href="/elixir#order">{BRAND.heroCopy.cta1}</CrimsonBtn>
            <GhostBtn href="/staycation">{BRAND.heroCopy.cta2}</GhostBtn>
          </div>

          {/* Meta tag */}
          <div
            className="hero-anim"
            style={{ marginTop: '36px', display: 'flex', alignItems: 'center', gap: '12px', opacity: 0.45 }}
          >
            <div style={{ width: '20px', height: '1px', background: T.muted }} />
            <p style={{ fontFamily: `'EB Garamond', serif`, fontSize: '11px', fontStyle: 'italic', color: T.muted }}>
              {BRAND.heroCopy.meta}
            </p>
          </div>
        </div>
      </div>

      {/* ── Right — dark bottle panel ── */}
      <div
        className="hero-anim hero-bottle-panel"
        style={{
          background: T.ink,
          position:   'relative',
          overflow:   'hidden',
        }}
      >
        <GrainOverlay opacity={0.025} />
        {/* Bottle image — contained with padding so it never touches edges */}
        <div style={{ position: 'absolute', inset: '48px 32px' }}>
          <Image
            src="/images/bottle-editorial.png"
            alt="BURANSH 750ml Himalayan Rhododendron Floral Concentrate"
            fill
            priority
            style={{ objectFit: 'contain', objectPosition: 'center' }}
            sizes="45vw"
          />
        </div>
        {/* Subtle top fade so it bleeds into the nav */}
        <div
          aria-hidden="true"
          style={{
            position:   'absolute',
            top:        0,
            left:       0,
            right:      0,
            height:     '120px',
            background: `linear-gradient(to bottom, ${T.ink} 0%, transparent 100%)`,
            pointerEvents: 'none',
          }}
        />
        {/* SKU label at bottom */}
        <p
          style={{
            position:      'absolute',
            bottom:        '32px',
            left:          0,
            right:         0,
            textAlign:     'center',
            fontFamily:    'sans-serif',
            fontSize:      '7px',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color:         `${T.ivory}35`,
          }}
        >
          {BRAND.sku}
        </p>
      </div>
    </section>
  );
}
