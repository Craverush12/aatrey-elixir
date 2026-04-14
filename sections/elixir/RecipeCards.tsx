'use client';

import { useRef } from 'react';
import OrnamentLine from '@/components/ui/OrnamentLine';
import { T } from '@/lib/tokens';
import { BRAND } from '@/lib/brand-content';

export default function RecipeCards() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section
      style={{
        background:  T.parchment,
        padding:     '80px 0',
        borderTop:   `1px solid ${T.border}`,
        borderBottom:`1px solid ${T.border}`,
        overflow:    'hidden',
      }}
    >
      {/* Section header */}
      <div
        style={{
          padding:      '0 clamp(24px, 8vw, 120px)',
          marginBottom: '40px',
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
          RECIPES & PAIRINGS
        </p>
        <h2
          style={{
            fontFamily:    `'Cormorant Garamond', serif`,
            fontSize:      'clamp(24px, 3.5vw, 40px)',
            fontWeight:    300,
            fontStyle:     'italic',
            color:         T.ink,
            letterSpacing: '-0.3px',
          }}
        >
          BURANSH expands. These are the possibilities.
        </h2>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={scrollRef}
        style={{
          display:       'flex',
          gap:           '2px',
          overflowX:     'auto',
          scrollSnapType:'x mandatory',
          scrollbarWidth:'none',
          padding:       '0 clamp(24px, 8vw, 120px)',
          paddingRight:  '5vw',
        }}
      >
        {BRAND.recipes.map((recipe) => (
          <div
            key={recipe.num}
            data-recipe={recipe.name}
            style={{
              minWidth:      '280px',
              maxWidth:      '320px',
              background:    T.ivory,
              border:        `1px solid ${T.border}`,
              padding:       '32px 24px',
              scrollSnapAlign: 'start',
              flexShrink:    0,
              cursor:        'default',
              transition:    `transform 400ms ${T.ease}, box-shadow 400ms ${T.ease}`,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform   = 'scale(1.02)';
              (e.currentTarget as HTMLElement).style.boxShadow  = `0 8px 32px ${T.ink}20`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform  = 'scale(1)';
              (e.currentTarget as HTMLElement).style.boxShadow = 'none';
            }}
          >
            {/* Recipe number */}
            <p
              style={{
                fontFamily:    `'Cormorant Garamond', serif`,
                fontSize:      '40px',
                fontStyle:     'italic',
                fontWeight:    300,
                color:         T.gold,
                lineHeight:    1,
                opacity:       0.6,
                marginBottom:  '12px',
              }}
            >
              {recipe.num}
            </p>

            {/* Name */}
            <h3
              style={{
                fontFamily:    `'Cormorant Garamond', serif`,
                fontSize:      '22px',
                fontWeight:    700,
                color:         T.ink,
                marginBottom:  '10px',
              }}
            >
              {recipe.name}
            </h3>

            <div style={{ marginBottom: '14px' }}>
              <OrnamentLine color={T.border} width={60} />
            </div>

            {/* Ratio */}
            <p
              style={{
                fontFamily:   `'EB Garamond', serif`,
                fontSize:     '14px',
                color:        T.ink,
                lineHeight:   1.6,
                marginBottom: '8px',
              }}
            >
              {recipe.ratio}
            </p>

            {/* Additions */}
            <p
              style={{
                fontFamily:   `'EB Garamond', serif`,
                fontSize:     '13px',
                fontStyle:    'italic',
                color:        T.muted,
                lineHeight:   1.5,
                marginBottom: '14px',
              }}
            >
              {recipe.additions}
            </p>

            {/* Context */}
            <p
              style={{
                fontFamily:    `'EB Garamond', serif`,
                fontSize:      '13px',
                color:         T.umber,
                lineHeight:    1.6,
                borderTop:     `1px solid ${T.border}`,
                paddingTop:    '12px',
                fontStyle:     'italic',
              }}
            >
              {recipe.context}
            </p>

            {/* Temp badge */}
            <span
              style={{
                display:       'inline-block',
                border:        `1px solid ${T.border}`,
                color:         T.pale,
                fontFamily:    'sans-serif',
                fontSize:      '7px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                padding:       '3px 10px',
                marginTop:     '12px',
              }}
            >
              {recipe.temp}
            </span>
          </div>
        ))}
      </div>

      {/* Hide scrollbar */}
      <style>{`::-webkit-scrollbar { display: none; }`}</style>
    </section>
  );
}
