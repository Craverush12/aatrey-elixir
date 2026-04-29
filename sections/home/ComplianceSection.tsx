import Image from 'next/image';
import ComplianceBadges from '@/components/ComplianceBadges';
import { T } from '@/lib/tokens';

export default function ComplianceSection() {
  const process = [
    {
      label: 'Bloom',
      body: 'Rhododendron arboreum at altitude, harvested only inside the short spring window.',
      image: '/images/buransh-flower.webp',
    },
    {
      label: 'Hands',
      body: 'Collected gently and locally, with the flower kept at the centre of the process.',
      image: '/images/buransh-flower-plucked.webp',
    },
    {
      label: 'Press',
      body: 'Cold-pressed and bottled close to source, without additives or preservative theatre.',
      image: '/images/bottle-pour.webp',
    },
  ];

  return (
    <section
      style={{
        background:  T.ivory,
        borderTop:   `1px solid ${T.border}`,
        borderBottom:`1px solid ${T.border}`,
        padding:     '72px clamp(24px, 8vw, 120px)',
      }}
    >
      <style>{`
        @media(max-width:767px){
          .compliance-layout{grid-template-columns:1fr!important}
          .process-grid{grid-template-columns:1fr!important}
          .process-image{aspect-ratio:16/10!important}
        }
      `}</style>

      <div
        className="compliance-layout"
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(240px, 0.7fr) minmax(0, 1.3fr)',
          gap: '42px',
          alignItems: 'start',
        }}
      >
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
            ORIGIN & PROCESS
          </p>
          <h2
            style={{
              fontFamily: `'Cormorant Garamond', serif`,
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 300,
              fontStyle: 'italic',
              lineHeight: 1.05,
              color: T.ink,
              letterSpacing: '0',
              marginBottom: '18px',
            }}
          >
            More proof, less decoration.
          </h2>
          <p
            style={{
              fontFamily: `'EB Garamond', serif`,
              fontSize: '16px',
              fontStyle: 'italic',
              lineHeight: 1.8,
              color: T.muted,
              marginBottom: '30px',
            }}
          >
            The badges matter, but the process should be visible: flower, hands, and pressing before the bottle reaches the table.
          </p>
          <ComplianceBadges layout="row" />
        </div>

        <div
          className="process-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '12px',
          }}
        >
          {process.map((item) => (
            <article
              key={item.label}
              style={{
                border: `1px solid ${T.border}`,
                background: T.parchment,
              overflow: 'hidden',
            }}
          >
              <div className="process-image" style={{ position: 'relative', aspectRatio: '4 / 5', background: T.ink }}>
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(max-width: 767px) 100vw, 22vw"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
              <div style={{ padding: '22px' }}>
                <h3
                  style={{
                    fontFamily: `'Cormorant Garamond', serif`,
                    fontSize: '24px',
                    fontWeight: 300,
                    fontStyle: 'italic',
                    color: T.ink,
                    marginBottom: '8px',
                  }}
                >
                  {item.label}
                </h3>
                <p
                  style={{
                    fontFamily: `'EB Garamond', serif`,
                    fontSize: '14px',
                    fontStyle: 'italic',
                    color: T.muted,
                    lineHeight: 1.65,
                  }}
                >
                  {item.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
