'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GhostIvoryBtn } from '@/components/ui/Button';
import GrainOverlay from '@/components/ui/GrainOverlay';
import OrnamentLine from '@/components/ui/OrnamentLine';
import { T } from '@/lib/tokens';
import { BRAND } from '@/lib/brand-content';

gsap.registerPlugin(ScrollTrigger);

export default function WomenTeaser() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.women-text',
        { opacity: 0, y: 20 },
        {
          opacity:  1,
          y:        0,
          duration: 0.55,
          ease:     'power2.out',
          stagger:  0.1,
          delay:    0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start:   'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
      gsap.fromTo(
        '.women-img',
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y:       0,
          duration: 0.6,
          ease:    'power2.out',
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
        position:   'relative',
        overflow:   'hidden',
      }}
    >
      <GrainOverlay />

      <style>{`
        @media(max-width:767px){.women-grid{grid-template-columns:1fr!important}.women-img-col{min-height:280px!important}}
      `}</style>
      <div
        className="women-grid"
        style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          position:            'relative',
          zIndex:              2,
        }}
      >
        {/* Left — rhododendron portrait */}
        <div
          className="women-img women-img-col"
          style={{
            position:  'relative',
            minHeight: '560px',
            overflow:  'hidden',
          }}
        >
          <Image
            src="/images/flower-other-pictures.png"
            alt="Rhododendron arboreum in bloom — Uttarakhand harvest, Project Aatmanirbhar"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Right — text */}
        <div
          style={{
            display:        'flex',
            flexDirection:  'column',
            justifyContent: 'center',
            padding:        'clamp(48px, 7vw, 96px) clamp(32px, 5vw, 64px)',
          }}
        >
          <p
            className="women-text"
            style={{
              fontFamily:    'sans-serif',
              fontSize:      '7px',
              letterSpacing: '5px',
              textTransform: 'uppercase',
              color:         T.crimson,
              marginBottom:  '20px',
            }}
          >
            PROJECT AATMANIRBHAR
          </p>

          <h2
            className="women-text"
            style={{
              fontFamily:    `'Cormorant Garamond', serif`,
              fontSize:      'clamp(28px, 4vw, 52px)',
              fontWeight:    300,
              fontStyle:     'italic',
              color:         T.ivory,
              lineHeight:    1.1,
              letterSpacing: '-0.5px',
              marginBottom:  '16px',
            }}
          >
            {BRAND.project.tagline}
          </h2>

          <div className="women-text" style={{ marginBottom: '20px' }}>
            <OrnamentLine color={`${T.umber}60`} width={80} />
          </div>

          <p
            className="women-text"
            style={{
              fontFamily: `'EB Garamond', serif`,
              fontSize:   'clamp(15px, 1.6vw, 17px)',
              fontStyle:  'italic',
              color:      `${T.ivory}70`,
              lineHeight: 1.8,
              marginBottom: '32px',
              maxWidth:   '420px',
            }}
          >
            {BRAND.project.body}
          </p>

          <div className="women-text">
            <GhostIvoryBtn href="/about#women">
              Meet the Women
            </GhostIvoryBtn>
          </div>
        </div>
      </div>
    </section>
  );
}
