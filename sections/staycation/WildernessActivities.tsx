'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GhostBtn } from '@/components/ui/Button';
import OrnamentLine from '@/components/ui/OrnamentLine';
import { T } from '@/lib/tokens';
import { BRAND } from '@/lib/brand-content';

gsap.registerPlugin(ScrollTrigger);

const FEATURED_ACTIVITIES = BRAND.staycation.wilderness.slice(0, 6);

export default function WildernessActivities() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.wild-tile',
        { y: 16 },
        {
          y:        0,
          duration: 0.5,
          ease:     'power2.out',
          stagger:  0.06,
          scrollTrigger: {
            trigger: sectionRef.current,
            start:   'top 72%',
            toggleActions: 'play none none none',
          },
        }
      );
      gsap.fromTo(
        '.wild-feature',
        { y: 26 },
        {
          y:       0,
          duration: 0.65,
          ease:    'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start:   'top 74%',
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
        background:   T.parchment,
        padding:      '96px clamp(24px, 8vw, 120px)',
        borderTop:    `1px solid ${T.border}`,
        borderBottom: `1px solid ${T.border}`,
      }}
    >
      <style>{`
        @media(max-width:960px){
          .wild-feature-shell{grid-template-columns:1fr!important}
        }
        @media(max-width:640px){
          .wild-grid{grid-template-columns:1fr!important}
        }
      `}</style>

      <div
        className="wild-feature wild-feature-shell"
        style={{
          display:             'grid',
          gridTemplateColumns: 'minmax(280px, 0.86fr) minmax(320px, 1.14fr)',
          gap:                 '32px clamp(28px, 4vw, 56px)',
          alignItems:          'center',
          marginBottom:        '56px',
        }}
      >
        <div
          style={{
            position:    'relative',
            aspectRatio: '4 / 5',
            overflow:    'hidden',
            border:      `1px solid ${T.border}`,
            background:  T.ivory,
          }}
        >
          <Image
            src="/images/buransh-flower-plucked.webp"
            alt="Freshly collected Rhododendron blooms in the BURANSH landscape"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 26%' }}
            sizes="(max-width: 960px) 100vw, 34vw"
          />
        </div>

        <div style={{ maxWidth: '42rem' }}>
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
            IN THE WILDERNESS
          </p>
          <h2
            style={{
              fontFamily:    `'Cormorant Garamond', serif`,
              fontSize:      'clamp(28px, 4vw, 50px)',
              fontWeight:    300,
              fontStyle:     'italic',
              color:         T.ink,
              letterSpacing: '0',
              marginBottom:  '16px',
            }}
          >
            A stay shaped by season, not spectacle.
          </h2>
          <div style={{ marginBottom: '18px' }}>
            <OrnamentLine color={T.border} width={88} />
          </div>
          <p
            style={{
              fontFamily: `'EB Garamond', serif`,
              fontSize:   'clamp(15px, 1.45vw, 17px)',
              fontStyle:  'italic',
              color:      T.ink,
              lineHeight: 1.8,
              opacity:    0.78,
              marginBottom:'14px',
            }}
          >
            {BRAND.staycation.expectation.body}
          </p>
          <p
            style={{
              fontFamily: `'EB Garamond', serif`,
              fontSize:   'clamp(15px, 1.45vw, 17px)',
              fontStyle:  'italic',
              color:      T.muted,
              lineHeight: 1.8,
              marginBottom:'24px',
            }}
          >
            {BRAND.staycation.expectation.body2}
          </p>
          <GhostBtn href="#staycation-book">
            Plan the Stay
          </GhostBtn>
        </div>
      </div>

      <div
        className="wild-grid"
        style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap:                 '14px',
        }}
      >
        {FEATURED_ACTIVITIES.map((activity, i) => (
          <div
            key={activity.name}
            className="wild-tile"
            style={{
              background: T.ivory,
              padding:    '28px 24px',
              border:     `1px solid ${T.border}`,
              minHeight:  '210px',
              display:    'flex',
              flexDirection:'column',
            }}
          >
            <p
              aria-hidden="true"
              style={{
                fontFamily:    `'Cormorant Garamond', serif`,
                fontSize:      '11px',
                letterSpacing: '2px',
                color:         T.crimson,
                marginBottom:  '12px',
                opacity:       0.6,
              }}
            >
              {String(i + 1).padStart(2, '0')}
            </p>

            <h3
              style={{
                fontFamily:   `'Cormorant Garamond', serif`,
                fontSize:     'clamp(19px, 2vw, 24px)',
                fontWeight:   300,
                fontStyle:    'italic',
                color:        T.ink,
                marginBottom: '10px',
                lineHeight:   1.18,
              }}
            >
              {activity.name}
            </h3>

            <div style={{ marginBottom: '12px' }}>
              <OrnamentLine color={T.border} width={50} />
            </div>

            <p
              style={{
                fontFamily: `'EB Garamond', serif`,
                fontSize:   '15px',
                fontStyle:  'italic',
                color:      T.muted,
                lineHeight: 1.7,
              }}
            >
              {activity.body}
            </p>
          </div>
        ))}
      </div>

      <p
        style={{
          marginTop:    '20px',
          maxWidth:     '44rem',
          fontFamily:   `'EB Garamond', serif`,
          fontSize:     '15px',
          fontStyle:    'italic',
          color:        T.muted,
          lineHeight:   1.75,
        }}
      >
        Additional moments are shaped to the season, the bloom window, and the size of your group after enquiry.
      </p>
    </section>
  );
}
