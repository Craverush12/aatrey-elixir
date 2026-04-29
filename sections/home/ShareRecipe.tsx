'use client';

import { useState } from 'react';
import Image from 'next/image';
import OrnamentLine from '@/components/ui/OrnamentLine';
import { T } from '@/lib/tokens';
import { BRAND } from '@/lib/brand-content';

type RecipeForm = {
  name: string;
  email: string;
  city: string;
  recipeName: string;
  instagram: string;
  ratio: string;
  ingredients: string;
  method: string;
  story: string;
};

const initialForm: RecipeForm = {
  name: '',
  email: '',
  city: '',
  recipeName: '',
  instagram: '',
  ratio: '',
  ingredients: '',
  method: '',
  story: '',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'transparent',
  border: 'none',
  borderBottom: `1px solid ${T.border}`,
  color: T.ink,
  padding: '10px 0',
  fontFamily: `'EB Garamond', serif`,
  fontSize: '15px',
  outline: 'none',
  transition: `border-color 400ms ${T.ease}`,
};

const textAreaStyle: React.CSSProperties = {
  ...inputStyle,
  minHeight: '96px',
  resize: 'vertical',
};

export default function ShareRecipe() {
  const submission = BRAND.homeRecipes.submission;
  const [form, setForm] = useState<RecipeForm>(initialForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const updateField = (field: keyof RecipeForm) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.recipeName || !form.ingredients || !form.method) {
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch('/api/recipe-submission', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      setForm(initialForm);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="share-recipe"
      style={{
        background: T.ivory,
        borderTop: `1px solid ${T.border}`,
        borderBottom: `1px solid ${T.border}`,
      }}
    >
      <style>{`
        @media(max-width:767px){
          .share-recipe-grid{grid-template-columns:1fr!important}
          .share-recipe-visual{min-height:320px!important}
          .share-recipe-form-grid{grid-template-columns:1fr!important}
          .share-recipe-content{padding:32px 22px 40px!important}
          .share-recipe-submit{width:100%!important}
        }
      `}</style>

      <div
        className="share-recipe-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(260px, 0.78fr) minmax(0, 1.22fr)',
          minHeight: '700px',
        }}
      >
        <div
          className="share-recipe-visual"
          style={{
            position: 'relative',
            minHeight: '100%',
            overflow: 'hidden',
            background: T.parchment,
          }}
        >
          <Image
            src="/images/flower-other-pictures.webp"
            alt="Rhododendron blooms and harvest textures from the BURANSH world"
            fill
            sizes="(max-width: 767px) 100vw, 40vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />

          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(180deg, rgba(24,16,10,0.08) 0%, rgba(24,16,10,0.26) 44%, rgba(24,16,10,0.82) 100%)`,
            }}
          />

          <div
            style={{
              position: 'absolute',
              left: 'clamp(22px, 4vw, 40px)',
              right: 'clamp(22px, 4vw, 40px)',
              bottom: 'clamp(22px, 4vw, 40px)',
              padding: '24px',
              background: 'rgba(24,16,10,0.50)',
              border: `1px solid rgba(245,237,216,0.18)`,
              backdropFilter: 'blur(8px)',
            }}
          >
            <p
              style={{
                fontFamily: 'sans-serif',
                fontSize: '7px',
                letterSpacing: '4px',
                textTransform: 'uppercase',
                color: `${T.gold}D9`,
                marginBottom: '12px',
              }}
            >
              {submission.noteLabel}
            </p>

            <div style={{ marginBottom: '16px' }}>
              <OrnamentLine color="rgba(245,237,216,0.26)" width={72} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {submission.notes.map((note) => (
                <p
                  key={note}
                  style={{
                    fontFamily: `'EB Garamond', serif`,
                    fontSize: '15px',
                    fontStyle: 'italic',
                    color: `${T.ivory}E6`,
                    lineHeight: 1.72,
                  }}
                >
                  {note}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div
          className="share-recipe-content"
          style={{
            padding: 'clamp(36px, 5vw, 72px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
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
            {submission.label}
          </p>

          <h2
            style={{
              fontFamily: `'Cormorant Garamond', serif`,
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 300,
              fontStyle: 'italic',
              lineHeight: 1.06,
              letterSpacing: '0',
              color: T.ink,
              marginBottom: '18px',
              maxWidth: '15ch',
            }}
          >
            {submission.headline}
          </h2>

          <div style={{ marginBottom: '18px' }}>
            <OrnamentLine color={T.border} width={88} />
          </div>

          <p
            style={{
              fontFamily: `'EB Garamond', serif`,
              fontSize: 'clamp(15px, 1.6vw, 17px)',
              fontStyle: 'italic',
              color: T.ink,
              lineHeight: 1.82,
              opacity: 0.78,
              marginBottom: '30px',
              maxWidth: '48ch',
            }}
          >
            {submission.body}
          </p>

          {status === 'success' ? (
            <div
              style={{
                border: `1px solid ${T.border}`,
                background: T.parchment,
                padding: '32px',
              }}
            >
              <h3
                style={{
                  fontFamily: `'Cormorant Garamond', serif`,
                  fontSize: '30px',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: T.ink,
                  marginBottom: '8px',
                }}
              >
                {submission.successTitle}
              </h3>
              <p
                style={{
                  fontFamily: `'EB Garamond', serif`,
                  fontSize: '15px',
                  fontStyle: 'italic',
                  color: T.muted,
                  lineHeight: 1.72,
                }}
              >
                {submission.successBody}
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '18px',
                paddingTop: '6px',
              }}
            >
              <div
                className="share-recipe-form-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '16px 20px',
                }}
              >
                <Field label={submission.fields.name}>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={updateField('name')}
                    placeholder={submission.placeholders.name}
                    style={inputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderBottomColor = T.crimson; }}
                    onBlur={(e) => { e.currentTarget.style.borderBottomColor = T.border; }}
                  />
                </Field>

                <Field label={submission.fields.email}>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={updateField('email')}
                    placeholder={submission.placeholders.email}
                    style={inputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderBottomColor = T.crimson; }}
                    onBlur={(e) => { e.currentTarget.style.borderBottomColor = T.border; }}
                  />
                </Field>

                <Field label={submission.fields.city}>
                  <input
                    type="text"
                    required
                    value={form.city}
                    onChange={updateField('city')}
                    placeholder={submission.placeholders.city}
                    style={inputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderBottomColor = T.crimson; }}
                    onBlur={(e) => { e.currentTarget.style.borderBottomColor = T.border; }}
                  />
                </Field>

                <Field label={submission.fields.recipeName}>
                  <input
                    type="text"
                    value={form.recipeName}
                    onChange={updateField('recipeName')}
                    placeholder={submission.placeholders.recipeName}
                    style={inputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderBottomColor = T.crimson; }}
                    onBlur={(e) => { e.currentTarget.style.borderBottomColor = T.border; }}
                  />
                </Field>

                <Field label={submission.fields.instagram}>
                  <input
                    type="text"
                    value={form.instagram}
                    onChange={updateField('instagram')}
                    placeholder={submission.placeholders.instagram}
                    style={inputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderBottomColor = T.crimson; }}
                    onBlur={(e) => { e.currentTarget.style.borderBottomColor = T.border; }}
                  />
                </Field>

                <Field label={submission.fields.ratio}>
                  <input
                    type="text"
                    value={form.ratio}
                    onChange={updateField('ratio')}
                    placeholder={submission.placeholders.ratio}
                    style={inputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderBottomColor = T.crimson; }}
                    onBlur={(e) => { e.currentTarget.style.borderBottomColor = T.border; }}
                  />
                </Field>
              </div>

              <Field label={submission.fields.ingredients}>
                <textarea
                  value={form.ingredients}
                  required
                  onChange={updateField('ingredients')}
                  placeholder={submission.placeholders.ingredients}
                  style={textAreaStyle}
                  onFocus={(e) => { e.currentTarget.style.borderBottomColor = T.crimson; }}
                  onBlur={(e) => { e.currentTarget.style.borderBottomColor = T.border; }}
                />
              </Field>

              <Field label={submission.fields.method}>
                <textarea
                  value={form.method}
                  required
                  onChange={updateField('method')}
                  placeholder={submission.placeholders.method}
                  style={textAreaStyle}
                  onFocus={(e) => { e.currentTarget.style.borderBottomColor = T.crimson; }}
                  onBlur={(e) => { e.currentTarget.style.borderBottomColor = T.border; }}
                />
              </Field>

              <Field label={submission.fields.story}>
                <textarea
                  value={form.story}
                  onChange={updateField('story')}
                  placeholder={submission.placeholders.story}
                  style={{ ...textAreaStyle, minHeight: '84px' }}
                  onFocus={(e) => { e.currentTarget.style.borderBottomColor = T.crimson; }}
                  onBlur={(e) => { e.currentTarget.style.borderBottomColor = T.border; }}
                />
              </Field>

              {status === 'error' && (
                <p
                  style={{
                    fontFamily: `'EB Garamond', serif`,
                    fontSize: '14px',
                    fontStyle: 'italic',
                    color: T.crimson,
                  }}
                >
                  {submission.errorBody}
                </p>
              )}

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '18px',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  paddingTop: '10px',
                }}
              >
                <button
                  type="submit"
                  className="share-recipe-submit"
                  disabled={
                    status === 'loading' ||
                    !form.name ||
                    !form.email ||
                    !form.recipeName ||
                    !form.ingredients ||
                    !form.method
                  }
                  style={{
                    background: status === 'loading' ? T.parchment : T.crimson,
                    border: 'none',
                    color: status === 'loading' ? T.muted : T.ivory,
                    padding: '14px 28px',
                    cursor: status === 'loading' ? 'wait' : 'pointer',
                    fontFamily: 'sans-serif',
                    fontSize: '8px',
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    transition: `all 400ms ${T.ease}`,
                    opacity:
                      !form.name || !form.email || !form.recipeName || !form.ingredients || !form.method
                        ? 0.5
                        : 1,
                  }}
                >
                  {status === 'loading' ? 'Sending…' : submission.submitCta}
                </button>

                <p
                  style={{
                    fontFamily: `'EB Garamond', serif`,
                    fontSize: '14px',
                    fontStyle: 'italic',
                    color: T.muted,
                    lineHeight: 1.6,
                    maxWidth: '28ch',
                  }}
                >
                  {submission.trustLine}
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label style={{ display: 'block' }}>
      <span
        style={{
          display: 'block',
          fontFamily: 'sans-serif',
          fontSize: '7px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: T.muted,
          marginBottom: '6px',
        }}
      >
        {label}
      </span>
      {children}
    </label>
  );
}
