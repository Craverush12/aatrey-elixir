import LotusLogo from '@/components/LotusLogo';
import { T } from '@/lib/tokens';

export default function Loading() {
  return (
    <section
      style={{
        minHeight: '70vh',
        background: T.ivory,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px',
      }}
      aria-label="Loading BURANSH"
    >
      <div style={{ textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '18px' }}>
          <LotusLogo size={34} useInlineSvg color={T.crimson} />
        </div>
        <p
          style={{
            fontFamily: 'sans-serif',
            fontSize: '8px',
            letterSpacing: '5px',
            textTransform: 'uppercase',
            color: T.crimson,
            marginBottom: '10px',
          }}
        >
          BURANSH
        </p>
        <p
          style={{
            fontFamily: `'Cormorant Garamond', serif`,
            fontSize: 'clamp(24px, 4vw, 40px)',
            fontStyle: 'italic',
            color: T.ink,
          }}
        >
          Preparing the elixir.
        </p>
      </div>
    </section>
  );
}
