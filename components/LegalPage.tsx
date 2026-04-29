import Link from 'next/link';
import OrnamentLine from '@/components/ui/OrnamentLine';
import { T } from '@/lib/tokens';

export interface LegalSection {
  heading: string;
  paragraphs: readonly string[];
}

interface LegalPageProps {
  eyebrow: string;
  title: string;
  intro: string;
  lastUpdated: string;
  sections: readonly LegalSection[];
}

export default function LegalPage({
  eyebrow,
  title,
  intro,
  lastUpdated,
  sections,
}: LegalPageProps) {
  return (
    <section
      style={{
        background: T.ivory,
        borderTop: `1px solid ${T.border}`,
        borderBottom: `1px solid ${T.border}`,
        padding: '140px clamp(24px, 8vw, 120px) 96px',
      }}
    >
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        <p
          style={{
            fontFamily: 'sans-serif',
            fontSize: '8px',
            letterSpacing: '5px',
            textTransform: 'uppercase',
            color: T.crimson,
            marginBottom: '18px',
          }}
        >
          {eyebrow}
        </p>

        <h1
          style={{
            fontFamily: `'Cormorant Garamond', serif`,
            fontSize: 'clamp(34px, 6vw, 72px)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: T.ink,
            lineHeight: 1.02,
            marginBottom: '18px',
          }}
        >
          {title}
        </h1>

        <div style={{ marginBottom: '24px' }}>
          <OrnamentLine color={T.borderD} width={96} />
        </div>

        <p
          style={{
            fontFamily: `'EB Garamond', serif`,
            fontSize: 'clamp(16px, 1.9vw, 20px)',
            fontStyle: 'italic',
            color: T.ink,
            opacity: 0.76,
            lineHeight: 1.8,
            marginBottom: '16px',
            maxWidth: '720px',
          }}
        >
          {intro}
        </p>

        <p
          style={{
            fontFamily: 'sans-serif',
            fontSize: '11px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: T.muted,
            marginBottom: '40px',
          }}
        >
          Last updated {lastUpdated}
        </p>

        <div style={{ display: 'grid', gap: '28px' }}>
          {sections.map((section) => (
            <div
              key={section.heading}
              style={{
                background: T.parchment,
                borderLeft: `3px solid ${T.crimson}`,
                padding: '26px 24px',
              }}
            >
              <h2
                style={{
                  fontFamily: `'Cormorant Garamond', serif`,
                  fontSize: 'clamp(24px, 3vw, 32px)',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: T.ink,
                  marginBottom: '12px',
                }}
              >
                {section.heading}
              </h2>

              <div style={{ display: 'grid', gap: '12px' }}>
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    style={{
                      fontFamily: `'EB Garamond', serif`,
                      fontSize: '16px',
                      color: T.ink,
                      opacity: 0.8,
                      lineHeight: 1.8,
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: '40px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px 20px',
            alignItems: 'center',
          }}
        >
          <Link
            href="/"
            style={{
              color: T.crimson,
              textDecoration: 'none',
              fontFamily: 'sans-serif',
              fontSize: '10px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
          >
            Return home
          </Link>
          <span
            style={{
              fontFamily: `'EB Garamond', serif`,
              fontSize: '14px',
              fontStyle: 'italic',
              color: T.muted,
            }}
          >
            For operational questions, use the private desk form in the footer.
          </span>
        </div>
      </div>
    </section>
  );
}
