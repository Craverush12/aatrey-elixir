import { T } from '@/lib/tokens';

export default function MontageSection() {
  return (
    <section
      style={{
        position:   'relative',
        width:      '100%',
        height:     '100svh',
        overflow:   'hidden',
        background: T.ink,
      }}
    >
      {/* Autoplay harvest montage */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position:   'absolute',
          inset:      0,
          width:      '100%',
          height:     '100%',
          objectFit:  'cover',
          objectPosition: 'center',
        }}
      >
        <source src="/images/buransh-flower-pluck-montage.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlays */}
      <div
        aria-hidden="true"
        style={{
          position:   'absolute',
          inset:      0,
          background: `linear-gradient(to bottom, ${T.ink}60 0%, transparent 30%, transparent 60%, ${T.ink}CC 100%)`,
          zIndex:     1,
        }}
      />

      {/* Centered copy */}
      <div
        style={{
          position:       'absolute',
          inset:          0,
          zIndex:         2,
          display:        'flex',
          flexDirection:  'column',
          alignItems:     'center',
          justifyContent: 'flex-end',
          padding:        'clamp(40px, 6vw, 80px) clamp(24px, 8vw, 120px)',
          textAlign:      'center',
        }}
      >
        <p
          style={{
            fontFamily:    'sans-serif',
            fontSize:      '7px',
            letterSpacing: '5px',
            textTransform: 'uppercase',
            color:         T.crimson,
            marginBottom:  '16px',
          }}
        >
          THE HARVEST
        </p>
        <h2
          style={{
            fontFamily:    `'Cormorant Garamond', serif`,
            fontSize:      'clamp(28px, 5vw, 64px)',
            fontWeight:    300,
            fontStyle:     'italic',
            color:         T.ivory,
            lineHeight:    1.1,
            letterSpacing: '-1px',
            maxWidth:      '720px',
          }}
        >
          Every bottle begins here — at 2,500 metres, by hand.
        </h2>
      </div>
    </section>
  );
}
