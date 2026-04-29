'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import OrnamentLine from '@/components/ui/OrnamentLine';
import { T } from '@/lib/tokens';

const schema = z.object({
  name:         z.string().min(2, 'Name is required'),
  organisation: z.string().min(2, 'Organisation is required'),
  email:        z.string().email('Valid email required'),
  phone:        z.string().min(10, 'Valid phone required'),
  useCase:      z.string().min(2, 'Please specify use case'),
  quantity:     z.string().min(1, 'Quantity required'),
  timeline:     z.string().optional(),
  message:      z.string().optional(),
  website:      z.string().optional(), // honeypot
});

type BulkFormData = z.infer<typeof schema>;

const USE_CASES = [
  'Hotels & Hospitality',
  'Weddings & Events',
  'Corporate Gifting',
  'Yoga Studios & Wellness',
  'Export & Distribution',
  'Airlines & Lounges',
  'Retail Chains',
  'Other',
];

const inputStyle: React.CSSProperties = {
  width:         '100%',
  background:    'transparent',
  border:        `1px solid ${T.border}`,
  color:         T.ink,
  padding:       '10px 12px',
  fontFamily:    `'EB Garamond', serif`,
  fontSize:      '15px',
  outline:       'none',
  transition:    `border-color 400ms ${T.ease}`,
};

export default function BulkInquiry() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BulkFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: BulkFormData) => {
    if (data.website) return; // Honeypot triggered
    setStatus('loading');

    try {
      const res = await fetch('/api/bulk-inquiry', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="bulk-order"
      style={{
        background:  T.parchment,
        padding:     '80px clamp(24px, 8vw, 120px)',
        borderTop:   `1px solid ${T.border}`,
      }}
    >
      <div
        style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap:                 '48px 64px',
          alignItems:          'flex-start',
        }}
      >
        {/* Left — use cases */}
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
            BULK & WHOLESALE
          </p>

          <h2
            style={{
              fontFamily:    `'Cormorant Garamond', serif`,
              fontSize:      'clamp(24px, 3.5vw, 40px)',
              fontWeight:    300,
              fontStyle:     'italic',
              color:         T.ink,
              letterSpacing: '0',
              marginBottom:  '16px',
            }}
          >
            BURANSH at scale.
          </h2>

          <div style={{ marginBottom: '24px' }}>
            <OrnamentLine color={T.border} width={80} />
          </div>

          <p
            style={{
              fontFamily:   `'EB Garamond', serif`,
              fontSize:     '15px',
              fontStyle:    'italic',
              color:        T.ink,
              lineHeight:   1.75,
              opacity:      0.75,
              marginBottom: '28px',
            }}
          >
            From hotel breakfast menus to corporate wellness packages, wedding bars to export distributor catalogues — BURANSH works at every scale.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {USE_CASES.map((useCase) => (
              <div
                key={useCase}
                style={{
                  display:    'flex',
                  alignItems: 'center',
                  gap:        '10px',
                  padding:    '6px 0',
                }}
              >
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: T.crimson, flexShrink: 0 }} />
                <p style={{ fontFamily: `'EB Garamond', serif`, fontSize: '14px', color: T.ink, opacity: 0.7 }}>
                  {useCase}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div>
          {status === 'success' ? (
            <div
              style={{
                background: T.ivory,
                border:     `1px solid ${T.border}`,
                padding:    '40px 32px',
                textAlign:  'center',
              }}
            >
              <h3 style={{ fontFamily: `'Cormorant Garamond', serif`, fontSize: '28px', fontStyle: 'italic', color: T.ink, marginBottom: '12px' }}>
                Enquiry received.
              </h3>
              <p style={{ fontFamily: `'EB Garamond', serif`, fontSize: '15px', fontStyle: 'italic', color: T.muted }}>
                We&apos;ll be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
              noValidate
            >
              {/* Honeypot */}
              <input {...register('website')} type="text" style={{ display: 'none' }} tabIndex={-1} aria-hidden="true" />

              {[
                { name: 'name',         label: 'Your Name *',    type: 'text',  placeholder: 'Full name' },
                { name: 'organisation', label: 'Organisation *', type: 'text',  placeholder: 'Company / hotel / event name' },
                { name: 'email',        label: 'Email *',        type: 'email', placeholder: 'work@company.com' },
                { name: 'phone',        label: 'Phone *',        type: 'tel',   placeholder: '+91 XXXXX XXXXX' },
              ].map(({ name, label, type, placeholder }) => (
                <div key={name}>
                  <label style={{ fontFamily: 'sans-serif', fontSize: '7px', letterSpacing: '3px', textTransform: 'uppercase', color: T.muted, display: 'block', marginBottom: '5px' }}>
                    {label}
                  </label>
                  <input
                    {...register(name as keyof BulkFormData)}
                    type={type}
                    placeholder={placeholder}
                    style={inputStyle}
                    onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.crimson; }}
                    onBlur={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.border; }}
                  />
                  {errors[name as keyof BulkFormData] && (
                    <p style={{ fontFamily: `'EB Garamond', serif`, fontSize: '12px', color: T.crimson, fontStyle: 'italic', marginTop: '4px' }}>
                      {errors[name as keyof BulkFormData]?.message}
                    </p>
                  )}
                </div>
              ))}

              <div>
                <label style={{ fontFamily: 'sans-serif', fontSize: '7px', letterSpacing: '3px', textTransform: 'uppercase', color: T.muted, display: 'block', marginBottom: '5px' }}>
                  Use Case *
                </label>
                <select
                  {...register('useCase')}
                  style={{ ...inputStyle, cursor: 'pointer', appearance: 'none' }}
                  onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.crimson; }}
                  onBlur={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.border; }}
                >
                  <option value="">Select use case</option>
                  {USE_CASES.map((u) => <option key={u} value={u}>{u}</option>)}
                </select>
                {errors.useCase && (
                  <p style={{ fontFamily: `'EB Garamond', serif`, fontSize: '12px', color: T.crimson, fontStyle: 'italic', marginTop: '4px' }}>
                    {errors.useCase.message}
                  </p>
                )}
              </div>

              <style>{`@media(max-width:480px){.bulk-two-col{grid-template-columns:1fr!important}}`}</style>
              <div className="bulk-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ fontFamily: 'sans-serif', fontSize: '7px', letterSpacing: '3px', textTransform: 'uppercase', color: T.muted, display: 'block', marginBottom: '5px' }}>
                    Quantity *
                  </label>
                  <input
                    {...register('quantity')}
                    type="text"
                    placeholder="e.g. 50 bottles"
                    style={inputStyle}
                    onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.crimson; }}
                    onBlur={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.border; }}
                  />
                </div>
                <div>
                  <label style={{ fontFamily: 'sans-serif', fontSize: '7px', letterSpacing: '3px', textTransform: 'uppercase', color: T.muted, display: 'block', marginBottom: '5px' }}>
                    Timeline
                  </label>
                  <input
                    {...register('timeline')}
                    type="text"
                    placeholder="e.g. Within 2 weeks"
                    style={inputStyle}
                    onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.crimson; }}
                    onBlur={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.border; }}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontFamily: 'sans-serif', fontSize: '7px', letterSpacing: '3px', textTransform: 'uppercase', color: T.muted, display: 'block', marginBottom: '5px' }}>
                  Message
                </label>
                <textarea
                  {...register('message')}
                  placeholder="Additional details, customisation requirements, delivery location…"
                  rows={3}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.crimson; }}
                  onBlur={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.border; }}
                />
              </div>

              {status === 'error' && (
                <p style={{ fontFamily: `'EB Garamond', serif`, fontSize: '13px', color: T.crimson, fontStyle: 'italic' }}>
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                style={{
                  background:    'transparent',
                  border:        `1px solid ${T.gold}`,
                  color:         T.gold,
                  padding:       '14px 28px',
                  cursor:        status === 'loading' ? 'wait' : 'pointer',
                  fontFamily:    'sans-serif',
                  fontSize:      '8px',
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  transition:    `all 400ms ${T.ease}`,
                  alignSelf:     'flex-start',
                }}
              >
                {status === 'loading' ? 'Sending…' : 'Submit Bulk Enquiry'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
