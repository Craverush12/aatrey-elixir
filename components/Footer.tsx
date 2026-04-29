'use client';

import { useState } from 'react';
import Link from 'next/link';
import LotusLogo from './LotusLogo';
import GrainOverlay from './ui/GrainOverlay';
import { T } from '@/lib/tokens';
import { BRAND } from '@/lib/brand-content';

const NAV_LINKS = [
  { href: '/',           label: 'Home' },
  { href: '/elixir',     label: 'Elixir' },
  { href: '/about',      label: 'About' },
  { href: '/staycation', label: 'Staycation' },
  { href: '/more',       label: 'More' },
  { href: '/elixir#order', label: 'Order Now' },
];

const INQUIRY_TYPES = [
  'Private Order',
  'Origin Stay',
  'Gifting / Bulk',
  'Press & Media',
  'General',
];

const LEGAL_LINKS = [
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
  { href: '/shipping-returns', label: 'Shipping & Returns' },
];

export default function Footer() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData]   = useState({ name: '', email: '', type: INQUIRY_TYPES[0] });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    try {
      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Failed');
      setFormState('success');
      setFormData({ name: '', email: '', type: INQUIRY_TYPES[0] });
    } catch {
      setFormState('error');
    }
  };

  const inputStyle: React.CSSProperties = {
    background:    'transparent',
    border:        'none',
    borderBottom:  `1px solid ${T.umber}50`,
    color:         `${T.ivory}CC`,
    padding:       '8px 0',
    fontFamily:    `'EB Garamond', serif`,
    fontSize:      '14px',
    width:         '100%',
    outline:       'none',
    transition:    `border-color 400ms ${T.ease}`,
  };

  return (
    <footer
      style={{
        background: T.ink,
        position:   'relative',
        overflow:   'hidden',
      }}
    >
      <GrainOverlay />

      <style>{`
        @media(max-width:480px){.footer-grid{grid-template-columns:1fr!important}.footer-bottom-bar{flex-direction:column!important;text-align:center!important;align-items:center!important}.footer-legal-links{justify-content:center!important}}
      `}</style>
      <div
        style={{
          position: 'relative',
          zIndex:   2,
          padding:  '80px clamp(24px, 6vw, 80px) 40px',
        }}
      >
        {/* 3-col grid */}
        <div
          className="footer-grid"
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap:                 '48px 40px',
            marginBottom:        '48px',
          }}
        >
          {/* Col 1 — Brand */}
          <div>
            <div
              style={{
                display:       'flex',
                alignItems:    'center',
                gap:           '12px',
                marginBottom:  '16px',
              }}
            >
              <LotusLogo size={28} useInlineSvg color={T.ivory} />
              <div>
                <p
                  style={{
                    fontFamily:    `'EB Garamond', serif`,
                    fontSize:      '14px',
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    color:         T.ivory,
                    lineHeight:    1,
                  }}
                >
                  BURANSH
                </p>
                <p
                  style={{
                    fontFamily: `'EB Garamond', serif`,
                    fontSize:   '9px',
                    letterSpacing: '2px',
                    color:      T.muted,
                    fontStyle:  'italic',
                  }}
                >
                  by Aatrey Elixir
                </p>
              </div>
            </div>

            <p
              style={{
                fontFamily: `'Cormorant Garamond', serif`,
                fontSize:   '15px',
                fontStyle:  'italic',
                color:      `${T.ivory}80`,
                lineHeight: 1.7,
                marginBottom: '20px',
                maxWidth:   '240px',
              }}
            >
              &ldquo;{BRAND.tagline}&rdquo;
            </p>

            <p
              style={{
                fontFamily: `'EB Garamond', serif`,
                fontSize:   '11px',
                fontStyle:  'italic',
                color:      T.muted,
                lineHeight: 1.6,
              }}
            >
              Himalayan Rhododendron Floral Concentrate<br />
              Harvested at 2,500m - Uttarakhand, India
            </p>

            {/* Instagram link */}
            <a
              href="https://instagram.com/aatreyelixir"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow BURANSH on Instagram"
              style={{
                display:      'inline-flex',
                alignItems:   'center',
                gap:          '8px',
                marginTop:    '20px',
                color:        T.muted,
                textDecoration: 'none',
                fontFamily:   'sans-serif',
                fontSize:     '9px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                transition:   `color 400ms ${T.ease}`,
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = T.ivory; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = T.muted; }}
            >
              {/* Instagram icon inline SVG */}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              Instagram
            </a>
          </div>

          {/* Col 2 — Nav */}
          <div>
            <p
              style={{
                fontFamily:    'sans-serif',
                fontSize:      '7px',
                letterSpacing: '4px',
                textTransform: 'uppercase',
                color:         T.crimson,
                marginBottom:  '20px',
              }}
            >
              Navigate
            </p>
            <nav
              style={{
                display:       'flex',
                flexDirection: 'column',
                gap:           '10px',
              }}
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily:     `'EB Garamond', serif`,
                    fontSize:       '14px',
                    fontStyle:      'italic',
                    color:          `${T.ivory}80`,
                    textDecoration: 'none',
                    transition:     `color 400ms ${T.ease}`,
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = T.ivory; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = `${T.ivory}80`; }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3 — Contact form */}
          <div>
            <p
              style={{
                fontFamily:    'sans-serif',
                fontSize:      '7px',
                letterSpacing: '4px',
                textTransform: 'uppercase',
                color:         T.crimson,
                marginBottom:  '20px',
              }}
            >
              Private Desk
            </p>

            {formState === 'success' ? (
              <p
                style={{
                  fontFamily: `'EB Garamond', serif`,
                  fontSize:   '14px',
                  fontStyle:  'italic',
                  color:      `${T.ivory}80`,
                  lineHeight: 1.7,
                }}
              >
                Thank you. We&apos;ll be in touch shortly.
              </p>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <input
                  type="text"
                  placeholder="Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                  style={inputStyle}
                  onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderBottomColor = T.gold; }}
                  onBlur={(e) => { (e.currentTarget as HTMLElement).style.borderBottomColor = `${T.umber}50`; }}
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                  style={inputStyle}
                  onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderBottomColor = T.gold; }}
                  onBlur={(e) => { (e.currentTarget as HTMLElement).style.borderBottomColor = `${T.umber}50`; }}
                />
                <select
                  value={formData.type}
                  onChange={(e) => setFormData(p => ({ ...p, type: e.target.value }))}
                  style={{
                    ...inputStyle,
                    cursor:     'pointer',
                    appearance: 'none',
                  }}
                  onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderBottomColor = T.gold; }}
                  onBlur={(e) => { (e.currentTarget as HTMLElement).style.borderBottomColor = `${T.umber}50`; }}
                >
                  {INQUIRY_TYPES.map((t) => (
                    <option key={t} value={t} style={{ background: T.ink, color: T.ivory }}>
                      {t}
                    </option>
                  ))}
                </select>

                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  style={{
                    background:    'transparent',
                    border:        `1px solid ${T.gold}60`,
                    color:         T.gold,
                    padding:       '10px 20px',
                    cursor:        formState === 'loading' ? 'wait' : 'pointer',
                    fontFamily:    'sans-serif',
                    fontSize:      '8px',
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    transition:    `all 400ms ${T.ease}`,
                    marginTop:     '4px',
                    alignSelf:     'flex-start',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor  = T.gold;
                    (e.currentTarget as HTMLElement).style.background   = `${T.gold}15`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor  = `${T.gold}60`;
                    (e.currentTarget as HTMLElement).style.background   = 'transparent';
                  }}
                >
                  {formState === 'loading' ? 'Sending...' : 'Request Access'}
                </button>

                {formState === 'error' && (
                  <p style={{ fontFamily: `'EB Garamond', serif`, fontSize: '12px', color: T.crimson, fontStyle: 'italic' }}>
                    Something went wrong. Please email us directly.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="footer-bottom-bar"
          style={{
            borderTop:   `1px solid ${T.umber}40`,
            paddingTop:  '24px',
            display:     'flex',
            flexWrap:    'wrap',
            gap:         '12px',
            justifyContent: 'space-between',
            alignItems:  'center',
          }}
        >
          <p
            style={{
              fontFamily: `'EB Garamond', serif`,
              fontSize:   '11px',
              fontStyle:  'italic',
              color:      T.muted,
            }}
          >
            {BRAND.fssaiNumber ? `Food licence no. ${BRAND.fssaiNumber} - ` : ''}
            Made in India - Uttarakhand
          </p>
          <nav
            className="footer-legal-links"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px 16px',
              alignItems: 'center',
            }}
          >
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'sans-serif',
                  fontSize: '9px',
                  letterSpacing: '1.5px',
                  color: `${T.muted}90`,
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <p
            style={{
              fontFamily:    'sans-serif',
              fontSize:      '9px',
              letterSpacing: '1.5px',
              color:         `${T.muted}80`,
              textTransform: 'uppercase',
            }}
          >
            Copyright {new Date().getFullYear()} Aatrey Elixir. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
