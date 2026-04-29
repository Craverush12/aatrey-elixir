'use client';

import { useState } from 'react';
import Image from 'next/image';
import OrnamentLine from '@/components/ui/OrnamentLine';
import { T } from '@/lib/tokens';

interface WaitlistFormProps {
  product: 'jam' | 'tea';
}

function WaitlistForm({ product }: WaitlistFormProps) {
  const [form, setForm]   = useState({ name: '', email: '' });
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('loading');
    try {
      const res = await fetch(`/api/waitlist?product=${product}`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setState('success');
      setForm({ name: '', email: '' });
    } catch {
      setState('error');
    }
  };

  if (state === 'success') {
    return (
      <p
        style={{
          fontFamily: `'EB Garamond', serif`,
          fontSize:   '14px',
          fontStyle:  'italic',
          color:      T.muted,
          lineHeight: 1.7,
        }}
      >
        You&apos;re on the list. We&apos;ll let you know first.
      </p>
    );
  }

  const inputStyle: React.CSSProperties = {
    background:    'transparent',
    border:        'none',
    borderBottom:  `1px solid ${T.border}`,
    color:         T.ink,
    padding:       '8px 0',
    fontFamily:    `'EB Garamond', serif`,
    fontSize:      '14px',
    width:         '100%',
    outline:       'none',
    transition:    `border-color 400ms ${T.ease}`,
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr) auto',
        gap: '12px',
        alignItems: 'end',
      }}
      className="release-form"
    >
      <input
        type="text"
        placeholder="Your name"
        required
        value={form.name}
        onChange={(e) => setForm(p => ({ ...p, name: e.target.value }))}
        style={inputStyle}
        onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderBottomColor = T.crimson; }}
        onBlur={(e) => { (e.currentTarget as HTMLElement).style.borderBottomColor = T.border; }}
      />
      <input
        type="email"
        placeholder="Email address"
        required
        value={form.email}
        onChange={(e) => setForm(p => ({ ...p, email: e.target.value }))}
        style={inputStyle}
        onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderBottomColor = T.crimson; }}
        onBlur={(e) => { (e.currentTarget as HTMLElement).style.borderBottomColor = T.border; }}
      />
      <button
        type="submit"
        disabled={state === 'loading'}
        style={{
          background:    state === 'loading' ? T.parchment : T.crimson,
          border:        'none',
          color:         state === 'loading' ? T.muted : T.ivory,
          padding:       '12px 24px',
          cursor:        state === 'loading' ? 'wait' : 'pointer',
          fontFamily:    'sans-serif',
          fontSize:      '8px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          transition:    `all 400ms ${T.ease}`,
          minHeight:     '42px',
        }}
      >
        {state === 'loading' ? 'Sending…' : 'Notify Me'}
      </button>
      {state === 'error' && (
        <p style={{ fontFamily: `'EB Garamond', serif`, fontSize: '12px', color: T.crimson, fontStyle: 'italic' }}>
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}

export default function ComingSoon() {
  const products = [
    {
      id:          'jam' as const,
      name:        'BURANSH Jam',
      desc:        'Rhododendron arboreum fruit preserve. Single-origin. No pectin. No stabilisers. No preservatives. The same single-origin commitment in a preserve form. The wild harvest — available after the next bloom season.',
      season:      'PRIVATE RELEASE · Next harvest season',
      imageSrc:    '/images/buransh-jam.webp' as string | null,
      imagePlaceholder: null,
    },
    {
      id:          'tea' as const,
      name:        'BURANSH Tea',
      desc:        'The flower dried slowly at altitude during the post-bloom dry season. No caffeine. No flavouring. No blending with other botanicals. The elixir in its most meditative form — steeped, not pressed.',
      season:      'PRIVATE RELEASE · Dry season',
      imageSrc:    '/images/buransh-tea-petals.webp' as string | null,
      imagePlaceholder: null,
    },
  ];

  return (
    <section
      style={{
        background:  T.parchment,
        borderTop:   `1px solid ${T.border}`,
        borderBottom:`1px solid ${T.border}`,
        padding:     '80px clamp(24px, 8vw, 120px)',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
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
          PRIVATE RELEASES
        </p>
        <h2
          style={{
            fontFamily:    `'Cormorant Garamond', serif`,
            fontSize:      'clamp(22px, 3.5vw, 36px)',
            fontWeight:    300,
            fontStyle:     'italic',
            color:         T.ink,
            letterSpacing: '0',
          }}
        >
          More from the forest.
        </h2>
      </div>

      <style>{`
        @media(max-width:900px){
          .coming-soon-grid{grid-template-columns:1fr!important}
          .release-form{grid-template-columns:1fr!important}
        }
      `}</style>
      <div
        className="coming-soon-grid"
        style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(2, minmax(280px, 1fr))',
          gap:                 '18px',
          maxWidth:            '980px',
          margin:              '0 auto',
        }}
      >
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              background: T.ivory,
              border:     `1px solid ${T.border}`,
              overflow:   'hidden',
              display:    'flex',
              flexDirection: 'column',
            }}
            className="release-card"
          >
            {/* Product image or placeholder */}
            {p.imageSrc ? (
              <div className="release-image" style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', background: T.parchment, overflow: 'hidden' }}>
                <Image
                  src={p.imageSrc}
                  alt={p.name}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ) : (
              <div
                style={{
                  width:          '100%',
                  height:         '260px',
                  background:     T.parchment,
                  border:         `1px dashed ${T.border}`,
                  display:        'flex',
                  alignItems:     'center',
                  justifyContent: 'center',
                }}
              >
                <p style={{ fontFamily: `'EB Garamond', serif`, fontStyle: 'italic', color: T.pale, fontSize: '13px', textAlign: 'center', padding: '0 24px' }}>
                  {p.imagePlaceholder}
                </p>
              </div>
            )}

            {/* Card body */}
            <div style={{ padding: '26px clamp(22px, 3vw, 32px) 30px' }}>

            {/* Private release badge */}
            <span
              style={{
                display:       'inline-block',
                border:        `1px solid ${T.gold}`,
                color:         T.gold,
                fontFamily:    `'EB Garamond', serif`,
                fontSize:      '8px',
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
                padding:       '3px 10px',
                marginBottom:  '16px',
              }}
            >
              Private Release
            </span>

            <h3
              style={{
                fontFamily:    `'Cormorant Garamond', serif`,
                fontSize:      'clamp(20px, 2.5vw, 28px)',
                fontWeight:    300,
                fontStyle:     'italic',
                color:         T.ink,
                marginBottom:  '10px',
              }}
            >
              {p.name}
            </h3>

            <div style={{ marginBottom: '12px' }}>
              <OrnamentLine color={T.border} width={60} />
            </div>

            <p
              style={{
                fontFamily:   `'EB Garamond', serif`,
                fontSize:     '14px',
                fontStyle:    'italic',
                color:        T.muted,
                lineHeight:   1.7,
                marginBottom: '14px',
              }}
            >
              {p.desc}
            </p>

            <p
              style={{
                fontFamily:    'sans-serif',
                fontSize:      '8px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color:         T.pale,
                marginBottom:  '24px',
              }}
            >
              {p.season}
            </p>

            <WaitlistForm product={p.id} />
            </div>{/* /card body */}
          </div>
        ))}
      </div>
    </section>
  );
}
