'use client';

import { useState } from 'react';
import { GhostBtn } from '@/components/ui/Button';
import OrnamentLine from '@/components/ui/OrnamentLine';
import { T } from '@/lib/tokens';
import { BRAND } from '@/lib/brand-content';

export default function Occasions() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="pairings"
      style={{
        background:  T.ivory,
        padding:     '80px clamp(24px, 8vw, 120px)',
        borderTop:   `1px solid ${T.border}`,
        borderBottom:`1px solid ${T.border}`,
      }}
    >
      {/* Section header */}
      <div style={{ marginBottom: '48px' }}>
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
          FOR EVERY OCCASION
        </p>
        <h2
          style={{
            fontFamily:    `'Cormorant Garamond', serif`,
            fontSize:      'clamp(24px, 3.5vw, 40px)',
            fontWeight:    300,
            fontStyle:     'italic',
            color:         T.ink,
            letterSpacing: '-0.3px',
            marginBottom:  '12px',
          }}
        >
          {BRAND.occasions.headline}
        </h2>
        <OrnamentLine color={T.border} width={80} />
      </div>

      <style>{`
        @media(max-width:480px){.occasions-grid{grid-template-columns:1fr!important}}
        @media(min-width:481px) and (max-width:767px){.occasions-grid{grid-template-columns:repeat(2,1fr)!important}}
      `}</style>
      {/* 3×3 grid */}
      <div
        className="occasions-grid"
        style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap:                 '2px',
          marginBottom:        '40px',
        }}
      >
        {BRAND.occasions.tiles.map((tile, i) => (
          <div
            key={tile.name}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              padding:        '28px 24px',
              background:     hovered === i ? T.parchment : T.ivory,
              borderLeft:     hovered === i ? `3px solid ${T.crimson}` : '3px solid transparent',
              borderBottom:   `1px solid ${T.border}50`,
              cursor:         'default',
              transition:     `all 400ms ${T.ease}`,
            }}
          >
            <h3
              style={{
                fontFamily:    `'Cormorant Garamond', serif`,
                fontSize:      '18px',
                fontStyle:     'italic',
                color:         T.ink,
                marginBottom:  '8px',
                lineHeight:    1.2,
              }}
            >
              {tile.name}
            </h3>
            <p
              style={{
                fontFamily: `'EB Garamond', serif`,
                fontSize:   '13px',
                fontStyle:  'italic',
                color:      T.muted,
                lineHeight: 1.6,
              }}
            >
              {tile.body}
            </p>
          </div>
        ))}
      </div>

      {/* Bulk CTA */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <GhostBtn href="#bulk-order">
          Order in bulk
        </GhostBtn>
      </div>
    </section>
  );
}
