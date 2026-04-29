'use client';

import { useState } from 'react';
import OrnamentLine from '@/components/ui/OrnamentLine';
import GrainOverlay from '@/components/ui/GrainOverlay';
import { T } from '@/lib/tokens';
import { BRAND } from '@/lib/brand-content';

const OCCASIONS = [
  'Private dinner',
  'Corporate gathering',
  'Wedding reception',
  'Birthday celebration',
  'Media / press event',
  'Other',
];

const BUDGETS = [
  'Up to ₹25,000',
  '₹25,000 – ₹50,000',
  '₹50,000 – ₹1,00,000',
  '₹1,00,000+',
  'Discuss with team',
];

const inputStyle: React.CSSProperties = {
  width:      '100%',
  background: 'transparent',
  border:     `1px solid ${T.umber}50`,
  color:      T.ivory,
  padding:    '10px 12px',
  fontFamily: `'EB Garamond', serif`,
  fontSize:   '15px',
  outline:    'none',
  transition: `border-color 400ms cubic-bezier(0.76, 0, 0.24, 1)`,
};

export default function OmakaseSection() {
  const [form, setForm]   = useState({ name: '', email: '', phone: '', guestCount: '', city: '', dates: '', occasion: '', budget: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((p) => ({ ...p, [field]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/omakase', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      setForm({ name: '', email: '', phone: '', guestCount: '', city: '', dates: '', occasion: '', budget: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="omakase"
      style={{
        background: T.ink,
        padding:    '100px clamp(24px, 8vw, 120px)',
        position:   'relative',
        overflow:   'hidden',
      }}
    >
      <GrainOverlay />

      <div style={{ position: 'relative', zIndex: 2 }}>
        <style>{`
          @media(max-width:767px){.omakase-grid{grid-template-columns:1fr!important}}
          @media(max-width:480px){.omakase-form-row{grid-template-columns:1fr!important}}
        `}</style>
        <div
          className="omakase-grid"
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap:                 '48px 80px',
            alignItems:          'flex-start',
          }}
        >
          {/* Left — description */}
          <div>
            <p
              style={{
                fontFamily:    'sans-serif',
                fontSize:      '7px',
                letterSpacing: '5px',
                textTransform: 'uppercase',
                color:         T.crimson,
                marginBottom:  '14px',
              }}
            >
              THE OMAKASE
            </p>

            <h2
              style={{
                fontFamily:    `'Cormorant Garamond', serif`,
                fontSize:      'clamp(28px, 4vw, 52px)',
                fontWeight:    300,
                fontStyle:     'italic',
                color:         T.ivory,
                lineHeight:    1.05,
                letterSpacing: '0',
                marginBottom:  '16px',
              }}
            >
              {BRAND.omakase.headline}
            </h2>

            <div style={{ marginBottom: '20px' }}>
              <OrnamentLine color={`${T.umber}60`} width={80} />
            </div>

            <p
              style={{
                fontFamily:   `'EB Garamond', serif`,
                fontSize:     'clamp(15px, 1.6vw, 17px)',
                fontStyle:    'italic',
                color:        `${T.ivory}70`,
                lineHeight:   1.85,
                marginBottom: '24px',
                maxWidth:     '440px',
              }}
            >
              {BRAND.omakase.body}
            </p>

            <p
              style={{
                fontFamily:    'sans-serif',
                fontSize:      '8px',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color:         T.gold,
                opacity:       0.7,
              }}
            >
              {BRAND.omakase.sub}
            </p>

            {/* Feature tiles */}
            <div style={{ marginTop: '36px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {[
                { label: 'Guests',       value: '5–8 guests maximum' },
                { label: 'Preparations', value: 'Four pours — Classic, Warm, Fizz, Seasonal' },
                { label: 'Setting',      value: 'Your property or partner venue' },
                { label: 'Duration',     value: 'Approximately 2.5 hours' },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  style={{
                    display:    'flex',
                    gap:        '16px',
                    padding:    '12px 16px',
                    background: `${T.umber}15`,
                    borderLeft: `2px solid ${T.umber}40`,
                  }}
                >
                  <p
                    style={{
                      fontFamily:    'sans-serif',
                      fontSize:      '7px',
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      color:         T.muted,
                      flexShrink:    0,
                      width:         '80px',
                      lineHeight:    1.6,
                    }}
                  >
                    {label}
                  </p>
                  <p
                    style={{
                      fontFamily: `'EB Garamond', serif`,
                      fontSize:   '14px',
                      fontStyle:  'italic',
                      color:      `${T.ivory}70`,
                      lineHeight: 1.5,
                    }}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — enquiry form */}
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
              Request an Omakase
            </p>

            {status === 'success' ? (
              <div
                style={{
                  background: `${T.umber}18`,
                  border:     `1px solid ${T.umber}40`,
                  padding:    '40px 32px',
                  textAlign:  'center',
                }}
              >
                <h3 style={{ fontFamily: `'Cormorant Garamond', serif`, fontSize: '24px', fontStyle: 'italic', color: T.ivory, marginBottom: '10px' }}>
                  Request received.
                </h3>
                <p style={{ fontFamily: `'EB Garamond', serif`, fontSize: '14px', fontStyle: 'italic', color: `${T.ivory}60` }}>
                  We will be in touch to arrange your experience.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }} noValidate>
                {/* Name + Phone */}
                <div className="omakase-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  {([
                    { field: 'name',  label: 'Name *',  type: 'text',  placeholder: 'Full name' },
                    { field: 'phone', label: 'Phone',   type: 'tel',   placeholder: '+91 XXXXX' },
                  ] as const).map(({ field, label, type, placeholder }) => (
                    <div key={field}>
                      <label style={{ fontFamily: 'sans-serif', fontSize: '7px', letterSpacing: '3px', textTransform: 'uppercase', color: T.muted, display: 'block', marginBottom: '5px' }}>{label}</label>
                      <input
                        type={type}
                        placeholder={placeholder}
                        value={form[field]}
                        onChange={handleChange(field)}
                        style={inputStyle}
                        onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.crimson; }}
                        onBlur={(e)  => { (e.currentTarget as HTMLElement).style.borderColor = `${T.umber}50`; }}
                      />
                    </div>
                  ))}
                </div>

                {/* Email */}
                <div>
                  <label style={{ fontFamily: 'sans-serif', fontSize: '7px', letterSpacing: '3px', textTransform: 'uppercase', color: T.muted, display: 'block', marginBottom: '5px' }}>Email *</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange('email')}
                    style={inputStyle}
                    onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.crimson; }}
                    onBlur={(e)  => { (e.currentTarget as HTMLElement).style.borderColor = `${T.umber}50`; }}
                  />
                </div>

                {/* Guest count + City */}
                <div className="omakase-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <div>
                    <label style={{ fontFamily: 'sans-serif', fontSize: '7px', letterSpacing: '3px', textTransform: 'uppercase', color: T.muted, display: 'block', marginBottom: '5px' }}>Guest count</label>
                    <input
                      type="text"
                      placeholder="e.g. 6"
                      value={form.guestCount}
                      onChange={handleChange('guestCount')}
                      style={inputStyle}
                      onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.crimson; }}
                      onBlur={(e)  => { (e.currentTarget as HTMLElement).style.borderColor = `${T.umber}50`; }}
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily: 'sans-serif', fontSize: '7px', letterSpacing: '3px', textTransform: 'uppercase', color: T.muted, display: 'block', marginBottom: '5px' }}>City</label>
                    <input
                      type="text"
                      placeholder="e.g. Delhi"
                      value={form.city}
                      onChange={handleChange('city')}
                      style={inputStyle}
                      onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.crimson; }}
                      onBlur={(e)  => { (e.currentTarget as HTMLElement).style.borderColor = `${T.umber}50`; }}
                    />
                  </div>
                </div>

                {/* Dates */}
                <div>
                  <label style={{ fontFamily: 'sans-serif', fontSize: '7px', letterSpacing: '3px', textTransform: 'uppercase', color: T.muted, display: 'block', marginBottom: '5px' }}>Preferred dates</label>
                  <input
                    type="text"
                    placeholder="e.g. Any Saturday in April"
                    value={form.dates}
                    onChange={handleChange('dates')}
                    style={inputStyle}
                    onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.crimson; }}
                    onBlur={(e)  => { (e.currentTarget as HTMLElement).style.borderColor = `${T.umber}50`; }}
                  />
                </div>

                {/* Occasion */}
                <div>
                  <label style={{ fontFamily: 'sans-serif', fontSize: '7px', letterSpacing: '3px', textTransform: 'uppercase', color: T.muted, display: 'block', marginBottom: '5px' }}>Occasion</label>
                  <select
                    value={form.occasion}
                    onChange={handleChange('occasion')}
                    style={{ ...inputStyle, cursor: 'pointer', appearance: 'none', background: T.ink }}
                    onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.crimson; }}
                    onBlur={(e)  => { (e.currentTarget as HTMLElement).style.borderColor = `${T.umber}50`; }}
                  >
                    <option value="">Select occasion</option>
                    {OCCASIONS.map((o) => (
                      <option key={o} value={o} style={{ background: T.ink, color: T.ivory }}>{o}</option>
                    ))}
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label style={{ fontFamily: 'sans-serif', fontSize: '7px', letterSpacing: '3px', textTransform: 'uppercase', color: T.muted, display: 'block', marginBottom: '5px' }}>Budget range</label>
                  <select
                    value={form.budget}
                    onChange={handleChange('budget')}
                    style={{ ...inputStyle, cursor: 'pointer', appearance: 'none', background: T.ink }}
                    onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.crimson; }}
                    onBlur={(e)  => { (e.currentTarget as HTMLElement).style.borderColor = `${T.umber}50`; }}
                  >
                    <option value="">Select range</option>
                    {BUDGETS.map((b) => (
                      <option key={b} value={b} style={{ background: T.ink, color: T.ivory }}>{b}</option>
                    ))}
                  </select>
                </div>

                {status === 'error' && (
                  <p style={{ fontFamily: `'EB Garamond', serif`, fontSize: '13px', color: T.crimson, fontStyle: 'italic' }}>
                    Something went wrong. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading' || !form.name || !form.email}
                  style={{
                    background:    'transparent',
                    border:        `1px solid ${T.gold}`,
                    color:         T.gold,
                    padding:       '14px 28px',
                    cursor:        (status === 'loading' || !form.name || !form.email) ? 'not-allowed' : 'pointer',
                    fontFamily:    'sans-serif',
                    fontSize:      '8px',
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    transition:    `all 400ms cubic-bezier(0.76, 0, 0.24, 1)`,
                    alignSelf:     'flex-start',
                    opacity:       (!form.name || !form.email) ? 0.5 : 1,
                  }}
                >
                  {status === 'loading' ? 'Sending…' : 'Request the Omakase'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
