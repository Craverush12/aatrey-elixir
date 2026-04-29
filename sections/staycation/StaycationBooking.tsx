'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import OrnamentLine from '@/components/ui/OrnamentLine';
import GrainOverlay from '@/components/ui/GrainOverlay';
import { T } from '@/lib/tokens';
import { BRAND } from '@/lib/brand-content';

const schema = z.object({
  name:     z.string().min(2, 'Name is required'),
  email:    z.string().email('Valid email required'),
  phone:    z.string().min(10, 'Valid phone required'),
  dates:    z.string().min(2, 'Preferred dates required'),
  groupSize:z.string().min(1, 'Group size required'),
  experiences: z.array(z.string()).optional(),
  dietary:  z.string().optional(),
  source:   z.string().optional(),
  message:  z.string().optional(),
});

type BookingFormData = z.infer<typeof schema>;

const EXPERIENCE_OPTIONS = BRAND.staycation.wilderness.map((w) => w.name);
const GROUP_SIZES = ['Solo', '2 guests', '3-4 guests', '5-6 guests', '7+'];
const ENQUIRY_NOTES = [
  'Response within 48 hours',
  'Small-group scheduling',
  'Dates shaped around bloom and availability',
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

export default function StaycationBooking() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(schema),
    defaultValues: { experiences: [] },
  });

  const onSubmit = async (data: BookingFormData) => {
    setStatus('loading');
    try {
      const res = await fetch('/api/staycation-inquiry', {
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
      id="staycation-book"
      style={{
        background: T.ink,
        padding:    '96px clamp(24px, 8vw, 120px)',
        borderTop:  `1px solid ${T.umber}30`,
        position:   'relative',
      }}
    >
      <GrainOverlay />

      <style>{`
        @media(max-width:980px){
          .stay-book-layout{grid-template-columns:1fr!important}
        }
        @media(max-width:640px){
          .book-row{grid-template-columns:1fr!important}
          .book-notes{grid-template-columns:1fr!important}
        }
      `}</style>

      <div
        className="stay-book-layout"
        style={{
          position:            'relative',
          zIndex:              2,
          display:             'grid',
          gridTemplateColumns: 'minmax(280px, 0.76fr) minmax(320px, 1.24fr)',
          gap:                 '32px clamp(24px, 4vw, 56px)',
          alignItems:          'start',
        }}
      >
        <div style={{ maxWidth: '34rem' }}>
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
            BOOK A STAY
          </p>

          <h2
            style={{
              fontFamily:    `'Cormorant Garamond', serif`,
              fontSize:      'clamp(28px, 3.8vw, 48px)',
              fontWeight:    300,
              fontStyle:     'italic',
              color:         T.ivory,
              letterSpacing: '0',
              marginBottom:  '16px',
            }}
          >
            Begin your enquiry.
          </h2>

          <div style={{ marginBottom: '20px' }}>
            <OrnamentLine color={`${T.umber}60`} width={80} />
          </div>

          <p
            style={{
              fontFamily: `'EB Garamond', serif`,
              fontSize:   'clamp(15px, 1.45vw, 17px)',
              fontStyle:  'italic',
              color:      `${T.ivory}B5`,
              lineHeight: 1.8,
              marginBottom:'22px',
            }}
          >
            Tell us your preferred dates, group size, and the parts of the experience that matter most to you. We use that to shape the stay around season, bloom, and availability.
          </p>

          <div
            className="book-notes"
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap:                 '10px',
              marginBottom:        '18px',
            }}
          >
            {ENQUIRY_NOTES.map((item) => (
              <div
                key={item}
                style={{
                  border:     `1px solid ${T.umber}40`,
                  background: 'rgba(245,237,216,0.04)',
                  padding:    '14px 14px 12px',
                }}
              >
                <p
                  style={{
                    fontFamily:    'sans-serif',
                    fontSize:      '7px',
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    color:         `${T.ivory}B8`,
                    lineHeight:    1.6,
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              background: `${T.umber}14`,
              borderLeft: `2px solid ${T.gold}`,
              padding:    '18px 18px 16px',
            }}
          >
            <p
              style={{
                fontFamily:    'sans-serif',
                fontSize:      '7px',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color:         T.gold,
                marginBottom:  '8px',
              }}
            >
              Before you send
            </p>
            <p
              style={{
                fontFamily: `'EB Garamond', serif`,
                fontSize:   '15px',
                fontStyle:  'italic',
                color:      `${T.ivory}C8`,
                lineHeight: 1.7,
              }}
            >
              Accommodation and final movement are arranged after enquiry. The stay remains intentionally small and does not run as an always-open booking calendar.
            </p>
          </div>
        </div>

        <div
          style={{
            border:     `1px solid ${T.umber}30`,
            background: 'rgba(10, 7, 5, 0.52)',
            padding:    '28px clamp(18px, 3vw, 32px)',
          }}
        >
          {status === 'success' ? (
            <div
              style={{
                background: `${T.umber}20`,
                border:     `1px solid ${T.umber}40`,
                padding:    '48px 40px',
                textAlign:  'center',
              }}
            >
              <h3
                style={{
                  fontFamily: `'Cormorant Garamond', serif`,
                  fontSize:   '28px',
                  fontStyle:  'italic',
                  color:      T.ivory,
                  marginBottom:'12px',
                }}
              >
                Enquiry received.
              </h3>
              <p
                style={{
                  fontFamily: `'EB Garamond', serif`,
                  fontSize:   '15px',
                  fontStyle:  'italic',
                  color:      `${T.ivory}60`,
                }}
              >
                We will be in touch within 48 hours to plan your stay.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}
              noValidate
            >
              <div className="book-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ fontFamily: 'sans-serif', fontSize: '7px', letterSpacing: '3px', textTransform: 'uppercase', color: T.muted, display: 'block', marginBottom: '5px' }}>
                    Name *
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    placeholder="Full name"
                    style={inputStyle}
                    onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.crimson; }}
                    onBlur={(e)  => { (e.currentTarget as HTMLElement).style.borderColor = `${T.umber}50`; }}
                  />
                  {errors.name && <p style={{ fontFamily: `'EB Garamond', serif`, fontSize: '12px', color: T.crimson, fontStyle: 'italic', marginTop: '4px' }}>{errors.name.message}</p>}
                </div>
                <div>
                  <label style={{ fontFamily: 'sans-serif', fontSize: '7px', letterSpacing: '3px', textTransform: 'uppercase', color: T.muted, display: 'block', marginBottom: '5px' }}>
                    Phone *
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    style={inputStyle}
                    onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.crimson; }}
                    onBlur={(e)  => { (e.currentTarget as HTMLElement).style.borderColor = `${T.umber}50`; }}
                  />
                  {errors.phone && <p style={{ fontFamily: `'EB Garamond', serif`, fontSize: '12px', color: T.crimson, fontStyle: 'italic', marginTop: '4px' }}>{errors.phone.message}</p>}
                </div>
              </div>

              <div>
                <label style={{ fontFamily: 'sans-serif', fontSize: '7px', letterSpacing: '3px', textTransform: 'uppercase', color: T.muted, display: 'block', marginBottom: '5px' }}>
                  Email *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  placeholder="your@email.com"
                  style={inputStyle}
                  onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.crimson; }}
                  onBlur={(e)  => { (e.currentTarget as HTMLElement).style.borderColor = `${T.umber}50`; }}
                />
                {errors.email && <p style={{ fontFamily: `'EB Garamond', serif`, fontSize: '12px', color: T.crimson, fontStyle: 'italic', marginTop: '4px' }}>{errors.email.message}</p>}
              </div>

              <div className="book-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ fontFamily: 'sans-serif', fontSize: '7px', letterSpacing: '3px', textTransform: 'uppercase', color: T.muted, display: 'block', marginBottom: '5px' }}>
                    Preferred Dates *
                  </label>
                  <input
                    {...register('dates')}
                    type="text"
                    placeholder="e.g. March 15-17"
                    style={inputStyle}
                    onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.crimson; }}
                    onBlur={(e)  => { (e.currentTarget as HTMLElement).style.borderColor = `${T.umber}50`; }}
                  />
                  {errors.dates && <p style={{ fontFamily: `'EB Garamond', serif`, fontSize: '12px', color: T.crimson, fontStyle: 'italic', marginTop: '4px' }}>{errors.dates.message}</p>}
                </div>
                <div>
                  <label style={{ fontFamily: 'sans-serif', fontSize: '7px', letterSpacing: '3px', textTransform: 'uppercase', color: T.muted, display: 'block', marginBottom: '5px' }}>
                    Group Size *
                  </label>
                  <select
                    {...register('groupSize')}
                    style={{ ...inputStyle, cursor: 'pointer', appearance: 'none', background: T.ink }}
                    onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.crimson; }}
                    onBlur={(e)  => { (e.currentTarget as HTMLElement).style.borderColor = `${T.umber}50`; }}
                  >
                    <option value="">Select</option>
                    {GROUP_SIZES.map((s) => (
                      <option key={s} value={s} style={{ background: T.ink, color: T.ivory }}>{s}</option>
                    ))}
                  </select>
                  {errors.groupSize && <p style={{ fontFamily: `'EB Garamond', serif`, fontSize: '12px', color: T.crimson, fontStyle: 'italic', marginTop: '4px' }}>{errors.groupSize.message}</p>}
                </div>
              </div>

              <div>
                <label style={{ fontFamily: 'sans-serif', fontSize: '7px', letterSpacing: '3px', textTransform: 'uppercase', color: T.muted, display: 'block', marginBottom: '10px' }}>
                  Experiences of interest
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {EXPERIENCE_OPTIONS.map((exp) => (
                    <label
                      key={exp}
                      style={{
                        display:    'flex',
                        alignItems: 'center',
                        gap:        '7px',
                        cursor:     'pointer',
                        padding:    '6px 10px',
                        border:     `1px solid ${T.umber}40`,
                        fontFamily: `'EB Garamond', serif`,
                        fontSize:   '13px',
                        fontStyle:  'italic',
                        color:      `${T.ivory}70`,
                      }}
                    >
                      <input
                        {...register('experiences')}
                        type="checkbox"
                        value={exp}
                        style={{ accentColor: T.crimson }}
                      />
                      {exp}
                    </label>
                  ))}
                </div>
              </div>

              <div className="book-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ fontFamily: 'sans-serif', fontSize: '7px', letterSpacing: '3px', textTransform: 'uppercase', color: T.muted, display: 'block', marginBottom: '5px' }}>
                    Dietary requirements
                  </label>
                  <input
                    {...register('dietary')}
                    type="text"
                    placeholder="e.g. Vegetarian"
                    style={inputStyle}
                    onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.crimson; }}
                    onBlur={(e)  => { (e.currentTarget as HTMLElement).style.borderColor = `${T.umber}50`; }}
                  />
                </div>
                <div>
                  <label style={{ fontFamily: 'sans-serif', fontSize: '7px', letterSpacing: '3px', textTransform: 'uppercase', color: T.muted, display: 'block', marginBottom: '5px' }}>
                    How did you find us?
                  </label>
                  <input
                    {...register('source')}
                    type="text"
                    placeholder="Instagram, referral, etc."
                    style={inputStyle}
                    onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.crimson; }}
                    onBlur={(e)  => { (e.currentTarget as HTMLElement).style.borderColor = `${T.umber}50`; }}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontFamily: 'sans-serif', fontSize: '7px', letterSpacing: '3px', textTransform: 'uppercase', color: T.muted, display: 'block', marginBottom: '5px' }}>
                  Anything else
                </label>
                <textarea
                  {...register('message')}
                  placeholder="Special requests, accessibility needs, occasion..."
                  rows={4}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.crimson; }}
                  onBlur={(e)  => { (e.currentTarget as HTMLElement).style.borderColor = `${T.umber}50`; }}
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
                  padding:       '14px 32px',
                  cursor:        status === 'loading' ? 'wait' : 'pointer',
                  fontFamily:    'sans-serif',
                  fontSize:      '8px',
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  transition:    `all 400ms cubic-bezier(0.76, 0, 0.24, 1)`,
                  alignSelf:     'flex-start',
                }}
              >
                {status === 'loading' ? 'Sending…' : 'Send Staycation Enquiry'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
