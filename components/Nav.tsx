'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import LotusLogo from './LotusLogo';
import GrainOverlay from './ui/GrainOverlay';
import { T } from '@/lib/tokens';

const ROUTES = [
  { path: '/',           label: 'Home',       sub: 'The world of BURANSH' },
  { path: '/elixir',     label: 'Elixir',     sub: 'Product · Pairings · Order · Gifting' },
  { path: '/about',      label: 'About',      sub: 'Aatrey · Aatmanirbhar · Women · Film' },
  { path: '/staycation', label: 'Staycation', sub: 'Uttarakhand · Wilderness · Booking' },
  { path: '/more',       label: 'More',       sub: 'Omakase · Coming soon · Compliance' },
];

/* ── Fullscreen Overlay ──────────────────────────────────── */
function FullscreenNav({
  open,
  onClose,
}: {
  open:    boolean;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => setMounted(true), 10);
      // Lock body scroll when overlay is open
      document.body.style.overflow = 'hidden';
      return () => clearTimeout(t);
    } else {
      setMounted(false);
      document.body.style.overflow = '';
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, onClose]);

  const visible = mounted && open;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      onClick={onClose}
      style={{
        position:      'fixed',
        inset:         0,
        zIndex:        200,
        background:    T.ink,
        opacity:       visible ? 1 : 0,
        transition:    `opacity 500ms ${T.ease}`,
        display:       'flex',
        pointerEvents: open ? 'auto' : 'none',
        visibility:    open ? 'visible' : 'hidden',
      }}
    >
      <style>{`@media(max-width:480px){.nav-crimson-panel{display:none!important}}`}</style>
      <GrainOverlay />

      {/* Left panel — nav links */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          flex:          1,
          display:       'flex',
          flexDirection: 'column',
          justifyContent:'center',
          padding:       '80px clamp(32px, 6vw, 80px)',
          position:      'relative',
          zIndex:        2,
        }}
      >
        {/* Brand mark */}
        <div
          style={{
            marginBottom:  '44px',
            display:       'flex',
            alignItems:    'center',
            gap:           '12px',
            opacity:       visible ? 1 : 0,
            transform:     visible ? 'translateX(0)' : 'translateX(-16px)',
            transition:    `all 500ms ${T.ease} 50ms`,
          }}
        >
          <LotusLogo size={18} useInlineSvg color={T.crimson} />
          <p
            style={{
              color:         T.crimson,
              fontFamily:    'sans-serif',
              fontSize:      '8px',
              letterSpacing: '4px',
              textTransform: 'uppercase',
            }}
          >
            AATREY ELIXIR
          </p>
        </div>

        {/* Route list */}
        <nav>
          {ROUTES.map((route, i) => (
            <Link
              key={route.path}
              href={route.path}
              onClick={onClose}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display:        'flex',
                alignItems:     'baseline',
                gap:            '18px',
                padding:        '11px 0',
                borderBottom:   `1px solid ${T.umber}25`,
                cursor:         'pointer',
                textDecoration: 'none',
                opacity:        visible ? 1 : 0,
                transform:      visible ? 'translateX(0)' : 'translateX(-24px)',
                transition:     `opacity 500ms ${T.ease} ${i * 65 + 80}ms, transform 500ms ${T.ease} ${i * 65 + 80}ms`,
              }}
            >
              <span
                style={{
                  fontFamily:  `'EB Garamond', serif`,
                  fontSize:    'clamp(28px, 5vw, 52px)',
                  fontWeight:  hovered === i ? 400 : 300,
                  fontStyle:   hovered === i ? 'normal' : 'italic',
                  color:       hovered === i ? T.crimson : T.ivory,
                  lineHeight:  1,
                  letterSpacing: '-0.5px',
                  transition:  `color 400ms ${T.ease}, font-style 300ms ${T.ease}`,
                }}
              >
                {route.label}
              </span>
              <span
                style={{
                  fontFamily:  `'EB Garamond', serif`,
                  fontSize:    '12px',
                  fontStyle:   'italic',
                  color:       T.muted,
                  opacity:     hovered === i ? 1 : 0,
                  transform:   hovered === i ? 'translateX(0)' : 'translateX(-8px)',
                  transition:  `all 400ms ${T.ease}`,
                  whiteSpace:  'nowrap',
                }}
              >
                {route.sub}
              </span>
            </Link>
          ))}
        </nav>

        {/* Tagline */}
        <p
          style={{
            marginTop:   '36px',
            fontFamily:  `'Cormorant Garamond', serif`,
            fontSize:    '15px',
            fontStyle:   'italic',
            color:       T.muted,
            opacity:     visible ? 1 : 0,
            transition:  `opacity 600ms ${T.ease} 420ms`,
          }}
        >
          "Inherited, not manufactured."
        </p>
      </div>

      {/* Right crimson panel */}
      <div
        className="nav-crimson-panel"
        onClick={(e) => e.stopPropagation()}
        style={{
          width:          'clamp(160px, 26%, 320px)',
          background:     T.crimson,
          display:        'flex',
          flexDirection:  'column',
          justifyContent: 'flex-end',
          padding:        '40px 30px',
          position:       'relative',
          overflow:       'hidden',
          transform:      visible ? 'translateX(0)' : 'translateX(100%)',
          transition:     `transform 600ms ${T.ease}`,
        }}
      >
        <GrainOverlay />
        {/* Giant B letterform */}
        <div
          aria-hidden="true"
          style={{
            position:    'absolute',
            top:         '-20px',
            right:       '-15px',
            fontFamily:  `'Cormorant Garamond', serif`,
            fontSize:    '240px',
            fontWeight:  700,
            color:       T.crimsonD,
            lineHeight:  1,
            opacity:     0.22,
            userSelect:  'none',
            pointerEvents: 'none',
          }}
        >
          B
        </div>

        <div style={{ position: 'relative', zIndex: 2 }}>
          <LotusLogo size={32} useInlineSvg color={T.ivory} />
          <p
            style={{
              fontFamily: `'EB Garamond', serif`,
              fontSize:   '11px',
              fontStyle:  'italic',
              color:      T.ivory,
              opacity:    0.6,
              marginTop:  '14px',
              lineHeight: 1.8,
            }}
          >
            Himalayan Rhododendron<br />
            Floral Concentrate · 750ml
          </p>
          <div
            style={{
              height:     '1px',
              background: `${T.ivory}28`,
              margin:     '14px 0',
            }}
          />
          <button
            onClick={onClose}
            aria-label="Close navigation"
            style={{
              background:    'transparent',
              border:        `1px solid ${T.ivory}45`,
              color:         T.ivory,
              padding:       '9px 18px',
              cursor:        'pointer',
              fontFamily:    'sans-serif',
              fontSize:      '7.5px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              width:         '100%',
              transition:    `all 400ms ${T.ease}`,
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Top Bar ──────────────────────────────────────────────── */
export default function Nav() {
  const [scrolled, setScrolled]     = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position:      'fixed',
          top:           0,
          left:          0,
          right:         0,
          zIndex:        100,
          height:        '60px',
          background:    scrolled ? `${T.ivory}F2` : 'transparent',
          borderBottom:  scrolled ? `1px solid ${T.border}` : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          display:       'flex',
          alignItems:    'center',
          justifyContent:'space-between',
          padding:       '0 clamp(20px, 5vw, 60px)',
          transition:    `background 500ms ${T.ease}, border-color 500ms ${T.ease}`,
        }}
      >
        {/* Wordmark */}
        <Link
          href="/"
          style={{
            display:        'flex',
            alignItems:     'center',
            gap:            '10px',
            textDecoration: 'none',
          }}
          aria-label="BURANSH — home"
        >
          <LotusLogo size={20} useInlineSvg color={T.crimson} />
          <div>
            <p
              style={{
                fontFamily:    `'EB Garamond', serif`,
                fontSize:      'clamp(11px, 1.8vw, 14px)',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color:         T.ink,
                lineHeight:    1,
              }}
            >
              BURANSH
            </p>
            <p
              style={{
                fontFamily: `'EB Garamond', serif`,
                fontSize:   '7.5px',
                letterSpacing: '2px',
                color:      T.muted,
                fontStyle:  'italic',
              }}
            >
              by Aatrey Elixir
            </p>
          </div>
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setOverlayOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={overlayOpen}
          style={{
            background:     'none',
            border:         'none',
            cursor:         'pointer',
            display:        'flex',
            flexDirection:  'column',
            gap:            '5px',
            padding:        '8px',
          }}
        >
          {[28, 20, 28].map((w, i) => (
            <div
              key={i}
              style={{
                width:      `${w}px`,
                height:     '1px',
                background: T.ink,
                transition: `width 300ms ${T.ease}`,
              }}
            />
          ))}
        </button>
      </header>

      <FullscreenNav
        open={overlayOpen}
        onClose={() => setOverlayOpen(false)}
      />
    </>
  );
}
