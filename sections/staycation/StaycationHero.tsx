'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { GhostIvoryBtn } from '@/components/ui/Button';
import GrainOverlay from '@/components/ui/GrainOverlay';
import OrnamentLine from '@/components/ui/OrnamentLine';
import { T } from '@/lib/tokens';
import { BRAND } from '@/lib/brand-content';

const EXPERIENCE_FACTS = ['Small groups', '2-night minimum', 'Private enquiry'];

export default function StaycationHero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.stay-hero-text',
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', stagger: 0.08, delay: 0.18 }
      );
      gsap.fromTo(
        '.stay-hero-card',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: 0.4 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="stay-hero-shell"
      style={{
        background:  T.ink,
        minHeight:   '100vh',
        display:     'grid',
        gridTemplateColumns: 'minmax(320px, 0.92fr) minmax(360px, 1.08fr)',
        position:    'relative',
        overflow:    'hidden',
        borderBottom:`1px solid ${T.umber}30`,
      }}
    >
      <style>{`
        @media(max-width:900px){
          .stay-hero-shell{grid-template-columns:1fr!important;min-height:auto!important}
          .stay-hero-copy{padding:88px 24px 36px!important}
          .stay-hero-visual{min-height:46vh!important;order:-1}
          .stay-hero-inset{width:min(44vw,220px)!important;bottom:18px!important;left:18px!important}
          .stay-hero-facts{grid-template-columns:1fr!important}
        }
      `}</style>

      <div
        className="stay-hero-copy"
        style={{
          position:      'relative',
          zIndex:        2,
          display:       'flex',
          flexDirection: 'column',
          justifyContent:'center',
          padding:       '96px clamp(24px, 6vw, 88px) 72px clamp(24px, 7vw, 104px)',
          background:    `linear-gradient(135deg, ${T.ink} 0%, #120C07 72%, #1B110A 100%)`,
        }}
      >
        <GrainOverlay />

        <p
          className="stay-hero-text"
          style={{
            fontFamily:    'sans-serif',
            fontSize:      '7px',
            letterSpacing: '5px',
            textTransform: 'uppercase',
            color:         T.crimson,
            marginBottom:  '18px',
          }}
        >
          {BRAND.staycation.hero.preLabel}
        </p>

        <h1
          className="stay-hero-text"
          style={{
            fontFamily:    `'Cormorant Garamond', serif`,
            fontSize:      'clamp(38px, 5.6vw, 82px)',
            fontWeight:    300,
            fontStyle:     'italic',
            color:         T.ivory,
            lineHeight:    0.98,
            letterSpacing: '0',
            marginBottom:  '20px',
            maxWidth:      '10ch',
          }}
        >
          {BRAND.staycation.hero.headline}
        </h1>

        <div className="stay-hero-text" style={{ marginBottom: '24px' }}>
          <OrnamentLine color={`${T.umber}60`} width={88} />
        </div>

        <p
          className="stay-hero-text"
          style={{
            fontFamily: `'EB Garamond', serif`,
            fontSize:   'clamp(16px, 1.5vw, 18px)',
            fontStyle:  'italic',
            color:      `${T.ivory}C8`,
            lineHeight: 1.8,
            maxWidth:   '38rem',
            marginBottom:'28px',
          }}
        >
          {BRAND.staycation.hero.sub}
        </p>

        <div
          className="stay-hero-text stay-hero-facts"
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap:                 '10px',
            marginBottom:        '28px',
            maxWidth:            '34rem',
          }}
        >
          {EXPERIENCE_FACTS.map((item) => (
            <div
              key={item}
              style={{
                border:        `1px solid ${T.umber}45`,
                background:    'rgba(245, 237, 216, 0.05)',
                padding:       '12px 14px',
              }}
            >
              <p
                style={{
                  fontFamily:    'sans-serif',
                  fontSize:      '7px',
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  color:         `${T.ivory}B8`,
                }}
              >
                {item}
              </p>
            </div>
          ))}
        </div>

        <div className="stay-hero-text">
          <GhostIvoryBtn href="#staycation-book">
            Enquire About a Stay
          </GhostIvoryBtn>
        </div>
      </div>

      <div
        className="stay-hero-visual"
        style={{
          position:  'relative',
          minHeight: '100vh',
          overflow:  'hidden',
          background: '#0F0A06',
        }}
      >
        <Image
          src="/images/arrival-still-life.webp"
          alt="BURANSH arrival setting in the Rhododendron landscape of Uttarakhand"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center center' }}
          sizes="(max-width: 900px) 100vw, 56vw"
        />
        <div
          aria-hidden="true"
          style={{
            position:   'absolute',
            inset:      0,
            background: 'linear-gradient(to top, rgba(24,16,10,0.42) 0%, rgba(24,16,10,0.08) 42%, rgba(24,16,10,0.3) 100%)',
          }}
        />

        <div
          className="stay-hero-card stay-hero-inset"
          style={{
            position:   'absolute',
            left:       'clamp(24px, 4vw, 40px)',
            bottom:     'clamp(24px, 4vw, 40px)',
            width:      'min(26vw, 260px)',
            aspectRatio:'4 / 5',
            overflow:   'hidden',
            border:     `1px solid ${T.ivory}26`,
            boxShadow:  '0 24px 60px rgba(0, 0, 0, 0.28)',
            background: T.ink,
          }}
        >
          <Image
            src="/images/village-women-plucking.webp"
            alt="Harvest walk at the BURANSH staycation"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center center' }}
            sizes="260px"
          />
          <div
            aria-hidden="true"
            style={{
              position:   'absolute',
              inset:      0,
              background: 'linear-gradient(to top, rgba(12,8,5,0.78) 0%, rgba(12,8,5,0.08) 50%)',
            }}
          />
          <div
            style={{
              position:       'absolute',
              left:           '14px',
              right:          '14px',
              bottom:         '14px',
              display:        'flex',
              flexDirection:  'column',
              gap:            '6px',
            }}
          >
            <p
              style={{
                fontFamily:    'sans-serif',
                fontSize:      '7px',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color:         `${T.ivory}B8`,
              }}
            >
              Arrival
            </p>
            <p
              style={{
                fontFamily: `'EB Garamond', serif`,
                fontSize:   '14px',
                fontStyle:  'italic',
                color:      T.ivory,
                lineHeight: 1.55,
              }}
            >
              Your first pour before the grove introduces itself.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
