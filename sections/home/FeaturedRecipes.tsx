'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import OrnamentLine from '@/components/ui/OrnamentLine';
import GrainOverlay from '@/components/ui/GrainOverlay';
import { GhostIvoryBtn } from '@/components/ui/Button';
import { T } from '@/lib/tokens';
import { BRAND } from '@/lib/brand-content';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedRecipes() {
  const sectionRef = useRef<HTMLElement>(null);
  const featured = BRAND.homeRecipes.featured;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.featured-recipes-anim',
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
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
        padding: '96px clamp(24px, 8vw, 120px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <GrainOverlay opacity={0.028} />

      <style>{`
        @media(max-width:767px){
          .featured-recipes-grid{grid-template-columns:1fr!important}
          .featured-recipes-cards{grid-template-columns:1fr!important}
        }
      `}</style>

      <div
        className="featured-recipes-grid"
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'grid',
          gridTemplateColumns: 'minmax(280px, 0.95fr) minmax(0, 1.05fr)',
          gap: '36px',
          alignItems: 'start',
        }}
      >
        <div
          className="featured-recipes-anim"
          style={{
            padding: 'clamp(28px, 4vw, 42px)',
            border: `1px solid ${T.umber}55`,
            background: `linear-gradient(180deg, rgba(122,78,30,0.16) 0%, rgba(24,16,10,0.18) 100%)`,
            boxShadow: `0 32px 80px ${T.ink}30`,
          }}
        >
          <p
            style={{
              fontFamily: 'sans-serif',
              fontSize: '7px',
              letterSpacing: '5px',
              textTransform: 'uppercase',
              color: T.crimson,
              marginBottom: '14px',
            }}
          >
            {featured.label}
          </p>

          <h2
            style={{
              fontFamily: `'Cormorant Garamond', serif`,
              fontSize: 'clamp(28px, 4.2vw, 52px)',
              fontWeight: 300,
              fontStyle: 'italic',
              lineHeight: 1.04,
              letterSpacing: '0',
              color: T.ivory,
              marginBottom: '18px',
              maxWidth: '12ch',
            }}
          >
            {featured.headline}
          </h2>

          <div style={{ marginBottom: '20px' }}>
            <OrnamentLine color={`${T.umber}60`} width={88} />
          </div>

          <p
            style={{
              fontFamily: `'EB Garamond', serif`,
              fontSize: 'clamp(15px, 1.6vw, 17px)',
              fontStyle: 'italic',
              lineHeight: 1.85,
              color: `${T.ivory}B3`,
              marginBottom: '26px',
              maxWidth: '46ch',
            }}
          >
            {featured.body}
          </p>

          <div
            style={{
              borderTop: `1px solid ${T.umber}55`,
              paddingTop: '18px',
              display: 'flex',
              flexDirection: 'column',
              gap: '18px',
            }}
          >
            <p
              style={{
                fontFamily: 'sans-serif',
                fontSize: '8px',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: `${T.gold}CC`,
              }}
            >
              {featured.eyebrow}
            </p>

            <GhostIvoryBtn href="/elixir#pairings">
              {featured.cta}
            </GhostIvoryBtn>
          </div>
        </div>

        <div
          className="featured-recipes-cards"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '14px',
          }}
        >
          {featured.cards.map((card) => (
            <article
              key={card.title}
              className="featured-recipes-anim"
              style={{
                minHeight: '100%',
                padding: '28px 24px 26px',
                background: `linear-gradient(180deg, rgba(245,237,216,0.06) 0%, rgba(245,237,216,0.02) 100%)`,
                border: `1px solid ${T.umber}45`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '24px',
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: 'sans-serif',
                    fontSize: '7px',
                    letterSpacing: '2.8px',
                    textTransform: 'uppercase',
                    color: `${T.gold}CC`,
                    marginBottom: '20px',
                  }}
                >
                  {card.status}
                </p>

                <h3
                  style={{
                    fontFamily: `'Cormorant Garamond', serif`,
                    fontSize: 'clamp(24px, 2.4vw, 32px)',
                    fontWeight: 300,
                    fontStyle: 'italic',
                    lineHeight: 1.05,
                    color: T.ivory,
                    marginBottom: '8px',
                  }}
                >
                  {card.title}
                </h3>

                <p
                  style={{
                    fontFamily: `'EB Garamond', serif`,
                    fontSize: '14px',
                    color: `${T.ivory}99`,
                    lineHeight: 1.65,
                    marginBottom: '18px',
                  }}
                >
                  {card.subtitle}
                </p>

                <p
                  style={{
                    fontFamily: `'EB Garamond', serif`,
                    fontSize: '15px',
                    fontStyle: 'italic',
                    color: `${T.ivory}BF`,
                    lineHeight: 1.72,
                  }}
                >
                  {card.body}
                </p>
              </div>

              <div style={{ borderTop: `1px solid ${T.umber}40`, paddingTop: '14px' }}>
                <p
                  style={{
                    fontFamily: 'sans-serif',
                    fontSize: '7px',
                    letterSpacing: '2.4px',
                    textTransform: 'uppercase',
                    color: `${T.muted}D9`,
                  }}
                >
                  {card.accent}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
