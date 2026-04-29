'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GhostIvoryBtn } from '@/components/ui/Button';
import OrnamentLine from '@/components/ui/OrnamentLine';
import GrainOverlay from '@/components/ui/GrainOverlay';
import { T } from '@/lib/tokens';
import { BRAND } from '@/lib/brand-content';

gsap.registerPlugin(ScrollTrigger);

export default function ValuePillars() {
  const sectionRef = useRef<HTMLElement>(null);
  const pillarImages = [
    { src: '/images/buransh-flower.webp', position: 'center' },
    { src: '/images/arrival-still-life.webp', position: 'center 40%' },
    { src: '/images/village-women-plucking.webp', position: 'center' },
    { src: '/images/buransh-flower-plucked.webp', position: 'center' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.pillar-card',
        { opacity: 0, y: 24 },
        {
          opacity:  1,
          y:        0,
          duration: 0.55,
          ease:     'power2.out',
          stagger:  0.1,
          scrollTrigger: {
            trigger:     '.pillar-card',
            start:       'top 80%',
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
      <style>{`
        @media(max-width:480px){.pillars-grid{grid-template-columns:1fr!important}}
        @media(min-width:481px) and (max-width:767px){.pillars-grid{grid-template-columns:repeat(2,1fr)!important}}
      `}</style>
      <GrainOverlay />

      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Section label */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
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
            WHY BURANSH
          </p>
          <h2
            style={{
              fontFamily:    `'Cormorant Garamond', serif`,
              fontSize:      'clamp(22px, 3.5vw, 36px)',
              fontWeight:    300,
              fontStyle:     'italic',
              color:         T.ivory,
              letterSpacing: '0',
            }}
          >
            Four reasons this elixir is unlike anything you have ever tasted.
          </h2>
        </div>

        {/* Image-led story grid */}
        <div
          className="pillars-grid"
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap:                 '14px',
            marginBottom:        '48px',
          }}
        >
          {BRAND.valuePillars.map((pillar, index) => (
            <div
              key={pillar.num}
              className="pillar-card"
              style={{
                minHeight:  '440px',
                background: `${T.ivory}08`,
                border:     `1px solid ${T.umber}30`,
                position:   'relative',
                overflow:   'hidden',
                display:    'flex',
                alignItems: 'flex-end',
              }}
            >
              <Image
                src={pillarImages[index].src}
                alt=""
                fill
                sizes="(max-width: 767px) 100vw, 25vw"
                style={{
                  objectFit: 'cover',
                  objectPosition: pillarImages[index].position,
                  filter: 'saturate(0.9) brightness(0.72)',
                }}
              />
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: `linear-gradient(180deg, rgba(24,16,10,0.10) 0%, rgba(24,16,10,0.48) 48%, rgba(24,16,10,0.94) 100%)`,
                }}
              />
              <div style={{ position: 'relative', zIndex: 2, padding: '28px 24px' }}>
                <p
                  style={{
                    fontFamily:    `'Cormorant Garamond', serif`,
                    fontSize:      '42px',
                    fontStyle:     'italic',
                    fontWeight:    300,
                    color:         T.gold,
                    lineHeight:    1,
                    marginBottom:  '14px',
                  }}
                >
                  {pillar.num}
                </p>

                <h3
                  style={{
                    fontFamily:    `'Cormorant Garamond', serif`,
                    fontSize:      '22px',
                    fontWeight:    400,
                    color:         T.ivory,
                    marginBottom:  '10px',
                    lineHeight:    1.15,
                  }}
                >
                  {pillar.title}
                </h3>

                <div style={{ marginBottom: '12px' }}>
                  <OrnamentLine color={`${T.ivory}45`} width={60} />
                </div>

                <p
                  style={{
                    fontFamily: `'EB Garamond', serif`,
                    fontSize:   '14px',
                    fontStyle:  'italic',
                    color:      `${T.ivory}C9`,
                    lineHeight: 1.65,
                  }}
                >
                  {pillar.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <GhostIvoryBtn href="/about">
            Discover the Full Story
          </GhostIvoryBtn>
        </div>
      </div>
    </section>
  );
}
