'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import OrnamentLine from '@/components/ui/OrnamentLine';
import GrainOverlay from '@/components/ui/GrainOverlay';
import { T } from '@/lib/tokens';
import { BRAND } from '@/lib/brand-content';

gsap.registerPlugin(ScrollTrigger);

export default function JourneySteps() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.journey-card',
        { y: 24 },
        {
          y:        0,
          duration: 0.55,
          ease:     'power2.out',
          stagger:  0.08,
          scrollTrigger: {
            trigger: sectionRef.current,
            start:   'top 72%',
            toggleActions: 'play none none none',
          },
        }
      );
      gsap.fromTo(
        '.journey-media',
        { y: 28 },
        {
          y:       0,
          duration: 0.7,
          ease:    'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start:   'top 72%',
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
        padding:    '96px clamp(24px, 8vw, 120px)',
        position:   'relative',
        borderTop:  `1px solid ${T.umber}30`,
      }}
    >
      <GrainOverlay />

      <style>{`
        @media(max-width:960px){
          .journey-layout{grid-template-columns:1fr!important}
          .journey-visuals{position:static!important;top:auto!important}
        }
      `}</style>

      <div style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ marginBottom: '56px', maxWidth: '42rem' }}>
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
            YOUR JOURNEY
          </p>
          <h2
            style={{
              fontFamily:    `'Cormorant Garamond', serif`,
              fontSize:      'clamp(28px, 4vw, 52px)',
              fontWeight:    300,
              fontStyle:     'italic',
              color:         T.ivory,
              letterSpacing: '0',
              marginBottom:  '16px',
            }}
          >
            Four stages. One memory.
          </h2>
          <div style={{ marginBottom: '18px' }}>
            <OrnamentLine color={`${T.umber}60`} width={88} />
          </div>
          <p
            style={{
              fontFamily: `'EB Garamond', serif`,
              fontSize:   'clamp(15px, 1.4vw, 17px)',
              fontStyle:  'italic',
              color:      `${T.ivory}A8`,
              lineHeight: 1.8,
              maxWidth:   '36rem',
            }}
          >
            The stay is built as a sequence, not a checklist: arrive, enter the harvest, witness the making, and leave something living behind.
          </p>
        </div>

        <div
          className="journey-layout"
          style={{
            display:             'grid',
            gridTemplateColumns: 'minmax(280px, 0.84fr) minmax(320px, 1.16fr)',
            gap:                 '32px clamp(28px, 4vw, 56px)',
            alignItems:          'start',
          }}
        >
          <div
            className="journey-visuals"
            style={{
              position: 'sticky',
              top:      '100px',
              display:  'grid',
              gap:      '18px',
            }}
          >
            <div
              className="journey-media"
              style={{
                position:    'relative',
                aspectRatio: '4 / 3',
                overflow:    'hidden',
                border:      `1px solid ${T.umber}30`,
                background:  '#0F0905',
              }}
            >
              <Image
                src="/images/buransh-flower.webp"
                alt="Rhododendron blooms at altitude during the BURANSH staycation experience"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center center' }}
                sizes="(max-width: 960px) 100vw, 34vw"
              />
            </div>

            <div
              className="journey-media"
              style={{
                position:    'relative',
                aspectRatio: '5 / 4',
                overflow:    'hidden',
                border:      `1px solid ${T.umber}30`,
                background:  '#0F0905',
              }}
            >
              <Image
                src="/images/bottle-pour.webp"
                alt="BURANSH tasting pour during the staycation"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center center' }}
                sizes="(max-width: 960px) 100vw, 34vw"
              />
            </div>
          </div>

          <div style={{ display: 'grid', gap: '14px' }}>
            {BRAND.staycation.journey.map((step, i) => (
              <article
                key={step.num}
                className="journey-card"
                style={{
                  background:  i % 2 === 0 ? `${T.umber}18` : `${T.crimson}12`,
                  borderLeft:  `2px solid ${i % 2 === 0 ? `${T.umber}40` : `${T.crimson}50`}`,
                  padding:     '28px 26px 26px',
                  position:    'relative',
                  overflow:    'hidden',
                }}
              >
                <p
                  aria-hidden="true"
                  style={{
                    position:      'absolute',
                    top:           '18px',
                    right:         '20px',
                    fontFamily:    `'Cormorant Garamond', serif`,
                    fontSize:      '52px',
                    fontWeight:    700,
                    color:         T.ivory,
                    opacity:       0.05,
                    lineHeight:    1,
                    userSelect:    'none',
                  }}
                >
                  {step.num}
                </p>

                <p
                  style={{
                    fontFamily:    'sans-serif',
                    fontSize:      '7px',
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    color:         T.crimson,
                    marginBottom:  '12px',
                  }}
                >
                  Stage {step.num} - {step.stage}
                </p>

                <h3
                  style={{
                    fontFamily:   `'Cormorant Garamond', serif`,
                    fontSize:     'clamp(20px, 2vw, 28px)',
                    fontStyle:    'italic',
                    fontWeight:   300,
                    color:        T.ivory,
                    lineHeight:   1.2,
                    marginBottom: '12px',
                    maxWidth:     '28rem',
                  }}
                >
                  {step.headline}
                </h3>

                <div style={{ marginBottom: '14px' }}>
                  <OrnamentLine color={`${T.umber}42`} width={50} />
                </div>

                <p
                  style={{
                    fontFamily: `'EB Garamond', serif`,
                    fontSize:   'clamp(15px, 1.35vw, 16px)',
                    fontStyle:  'italic',
                    color:      `${T.ivory}BA`,
                    lineHeight: 1.72,
                    marginBottom:'10px',
                    maxWidth:   '34rem',
                  }}
                >
                  {step.body}
                </p>

                <p
                  style={{
                    fontFamily:    'sans-serif',
                    fontSize:      '10px',
                    letterSpacing: '1.1px',
                    textTransform: 'uppercase',
                    color:         `${T.ivory}78`,
                    lineHeight:    1.6,
                    maxWidth:      '32rem',
                  }}
                >
                  {step.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
