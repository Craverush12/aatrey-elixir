'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import OrnamentLine from '@/components/ui/OrnamentLine';
import GrainOverlay from '@/components/ui/GrainOverlay';
import { T } from '@/lib/tokens';
import { WOMEN } from '@/lib/women';

gsap.registerPlugin(ScrollTrigger);

const LAYOUT_SIDES = ['left', 'right', 'left'] as const;

export default function WomenFeature() {
  if (WOMEN.length === 0) return null;
  return <WomenFeatureInner />;
}

function WomenFeatureInner() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      WOMEN.forEach((_, i) => {
        const side = LAYOUT_SIDES[i];
        gsap.fromTo(
          `.women-img-${i}`,
          { opacity: 0, x: side === 'left' ? -30 : 30 },
          {
            opacity:  1,
            x:        0,
            duration: 0.6,
            ease:     'power2.out',
            scrollTrigger: {
              trigger: `.women-row-${i}`,
              start:   'top 75%',
              toggleActions: 'play none none none',
            },
          }
        );
        gsap.fromTo(
          `.women-text-${i}`,
          { opacity: 0, y: 20 },
          {
            opacity:  1,
            y:        0,
            duration: 0.55,
            ease:     'power2.out',
            delay:    0.15,
            scrollTrigger: {
              trigger: `.women-row-${i}`,
              start:   'top 75%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="women"
      style={{
        background:  T.ink,
        borderTop:   `1px solid ${T.umber}40`,
      }}
    >
      <GrainOverlay />

      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Section header */}
        <div
          style={{
            padding:   '64px clamp(24px, 8vw, 120px) 0',
            textAlign: 'center',
            paddingBottom: '48px',
          }}
        >
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
            THE WOMEN OF BURANSH
          </p>
          <h2
            style={{
              fontFamily:    `'Cormorant Garamond', serif`,
              fontSize:      'clamp(24px, 4vw, 48px)',
              fontWeight:    300,
              fontStyle:     'italic',
              color:         T.ivory,
              letterSpacing: '0',
            }}
          >
            {WOMEN.length} women. Generations of knowledge.
          </h2>
        </div>

        <style>{`@media(max-width:767px){.women-row{grid-template-columns:1fr!important}}`}</style>
        {/* Alternating women rows */}
        {WOMEN.map((woman, i) => {
          const isEven = i % 2 === 0;

          return (
            <div
              key={i}
              className={`women-row women-row-${i}`}
              style={{
                display:             'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                borderTop:           `1px solid ${T.umber}30`,
              }}
            >
              {/* Portrait (alternating side) */}
              {isEven ? (
                <>
                  <div className={`women-img-${i}`} style={{ position: 'relative', minHeight: '480px', overflow: 'hidden' }}>
                    {woman.imageSrc ? (
                      <Image
                        src={woman.imageSrc}
                        alt={woman.imageAlt}
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'center top' }}
                        sizes="(max-width: 768px) 100vw, 42vw"
                      />
                    ) : (
                      <div
                        style={{
                          width:          '100%',
                          height:         '100%',
                          minHeight:      '480px',
                          background:     '#E0D0B080',
                          border:         '1px dashed #C0A880',
                          display:        'flex',
                          alignItems:     'center',
                          justifyContent: 'center',
                        }}
                      >
                        <p style={{ fontFamily: `'EB Garamond', serif`, fontStyle: 'italic', color: '#9C8868', fontSize: 13, textAlign: 'center', padding: '0 20px' }}>
                          women-portrait-{i + 1}.jpg<br />
                          Pahadi woman portrait · {i === 0 ? 'Head and shoulders · Eyes direct' : i === 1 ? 'Mid-shot · Hands active · Harvest' : 'Environmental wide · Woman within forest'} · Natural light
                        </p>
                      </div>
                    )}
                  </div>

                  <div className={`women-text-${i}`} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(40px, 5vw, 72px) clamp(32px, 4vw, 60px)' }}>
                    <WomanStory woman={woman} />
                  </div>
                </>
              ) : (
                <>
                  <div className={`women-text-${i}`} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(40px, 5vw, 72px) clamp(32px, 4vw, 60px)' }}>
                    <WomanStory woman={woman} />
                  </div>

                  <div className={`women-img-${i}`} style={{ position: 'relative', minHeight: '480px', overflow: 'hidden' }}>
                    {woman.imageSrc ? (
                      <Image
                        src={woman.imageSrc}
                        alt={woman.imageAlt}
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'center top' }}
                        sizes="(max-width: 768px) 100vw, 42vw"
                      />
                    ) : (
                      <div
                        style={{
                          width:          '100%',
                          height:         '100%',
                          minHeight:      '480px',
                          background:     '#E0D0B080',
                          border:         '1px dashed #C0A880',
                          display:        'flex',
                          alignItems:     'center',
                          justifyContent: 'center',
                        }}
                      >
                        <p style={{ fontFamily: `'EB Garamond', serif`, fontStyle: 'italic', color: '#9C8868', fontSize: 13, textAlign: 'center', padding: '0 20px' }}>
                          women-portrait-{i + 1}.jpg<br />
                          Pahadi woman portrait · Mid-shot · Hands active · Harvest context · Natural light
                        </p>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function WomanStory({ woman }: { woman: typeof WOMEN[0] }) {
  return (
    <>
      <p
        style={{
          fontFamily:    'sans-serif',
          fontSize:      '7px',
          letterSpacing: '4px',
          textTransform: 'uppercase',
          color:         T.crimson,
          marginBottom:  '14px',
        }}
      >
        PROJECT AATMANIRBHAR
      </p>

      <h3
        style={{
          fontFamily:    `'Cormorant Garamond', serif`,
          fontSize:      'clamp(24px, 3vw, 36px)',
          fontStyle:     'italic',
          fontWeight:    300,
          color:         T.ivory,
          marginBottom:  '6px',
        }}
      >
        {woman.name}
      </h3>

      <p
        style={{
          fontFamily:    'sans-serif',
          fontSize:      '8px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color:         T.muted,
          marginBottom:  '16px',
        }}
      >
        {woman.village} · {typeof woman.years === 'number' ? `${woman.years} years` : woman.years}
      </p>

      <div style={{ marginBottom: '18px' }}>
        <OrnamentLine color={`${T.umber}60`} width={70} />
      </div>

      <blockquote
        style={{
          fontFamily:   `'Cormorant Garamond', serif`,
          fontSize:     'clamp(16px, 2vw, 22px)',
          fontStyle:    'italic',
          color:        `${T.ivory}80`,
          lineHeight:   1.65,
          borderLeft:   `2px solid ${T.crimson}40`,
          paddingLeft:  '16px',
        }}
      >
        &ldquo;{woman.quote}&rdquo;
      </blockquote>
    </>
  );
}
