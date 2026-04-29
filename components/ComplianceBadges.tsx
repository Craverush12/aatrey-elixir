'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { COMPLIANCE_BADGES } from '@/lib/compliance';
import { T } from '@/lib/tokens';

gsap.registerPlugin(ScrollTrigger);

function StampBadge({
  label,
  sublabel,
  certNumber,
  id,
}: {
  label:      string;
  sublabel:   string;
  certNumber: string | null;
  id:         string;
}) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { rotation: 0 },
        {
          rotation:      360,
          duration:      0.9,
          ease:          'power2.inOut',
          scrollTrigger: {
            trigger:     el,
            start:       'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  // Unique textPath ID per badge to avoid SVG conflicts
  const pathId = `circle-path-${id}`;
  const circumferenceText = label.toUpperCase() + (certNumber ? ` - ${certNumber}` : ' - BURANSH');

  return (
    <div
      style={{
        display:        'flex',
        flexDirection:  'column',
        alignItems:     'center',
        gap:            '8px',
      }}
    >
      <svg
        ref={svgRef}
        width="88"
        height="88"
        viewBox="0 0 88 88"
        aria-label={label}
      >
        {/* Outer ring path for circular text */}
        <defs>
          <path
            id={pathId}
            d="M44,44 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0"
          />
        </defs>

        {/* Outer ring */}
        <circle
          cx="44" cy="44" r="41"
          fill="none" stroke={T.ink} strokeWidth="0.8"
        />
        {/* Inner ring */}
        <circle
          cx="44" cy="44" r="34"
          fill="none" stroke={T.ink} strokeWidth="0.5" strokeDasharray="2 3"
        />
        {/* Centre mark — botanical petal motif */}
        <circle cx="44" cy="44" r="6" fill="none" stroke={T.crimson} strokeWidth="0.8" />
        <circle cx="44" cy="44" r="2.5" fill={T.crimson} />
        {/* Four petal marks */}
        <line x1="44" y1="35" x2="44" y2="38" stroke={T.crimson} strokeWidth="0.8" />
        <line x1="44" y1="50" x2="44" y2="53" stroke={T.crimson} strokeWidth="0.8" />
        <line x1="35" y1="44" x2="38" y2="44" stroke={T.crimson} strokeWidth="0.8" />
        <line x1="50" y1="44" x2="53" y2="44" stroke={T.crimson} strokeWidth="0.8" />

        {/* Circular text */}
        <text
          style={{
            fontFamily: `'EB Garamond', serif`,
            fontSize:   '5.5px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            fill:       T.ink,
          }}
        >
          <textPath href={`#${pathId}`} startOffset="0%">
            {circumferenceText}
          </textPath>
        </text>
      </svg>

      <p
        style={{
          fontFamily:    `'EB Garamond', serif`,
          fontSize:      '10px',
          color:         T.muted,
          fontStyle:     'italic',
          textAlign:     'center',
          letterSpacing: '0.5px',
        }}
      >
        {sublabel}
      </p>
    </div>
  );
}

interface ComplianceBadgesProps {
  layout?: 'row' | 'grid';
}

export default function ComplianceBadges({ layout = 'row' }: ComplianceBadgesProps) {
  return (
    <div
      style={{
        display:         layout === 'row' ? 'flex' : 'grid',
        gridTemplateColumns: layout === 'grid' ? 'repeat(3, 1fr)' : undefined,
        flexWrap:        'wrap',
        gap:             '24px 32px',
        justifyContent:  'center',
        alignItems:      'flex-start',
      }}
    >
      {COMPLIANCE_BADGES.map((badge) => (
        <StampBadge key={badge.id} {...badge} />
      ))}
    </div>
  );
}
