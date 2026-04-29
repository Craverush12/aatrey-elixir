'use client';

import { useEffect, useRef, useState } from 'react';
import { T } from '@/lib/tokens';

export default function MontageSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const ensurePlayback = () => {
      video.muted = true;
      video.defaultMuted = true;
      void video.play().catch(() => {});
    };

    ensurePlayback();
    video.addEventListener('loadeddata', ensurePlayback);
    video.addEventListener('canplay', ensurePlayback);

    return () => {
      video.removeEventListener('loadeddata', ensurePlayback);
      video.removeEventListener('canplay', ensurePlayback);
    };
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play().then(() => setPaused(false)).catch(() => {});
    } else {
      video.pause();
      setPaused(true);
    }
  };

  return (
    <section
      style={{
        position:   'relative',
        width:      '100%',
        minHeight:  '82svh',
        overflow:   'hidden',
        background: T.ink,
      }}
    >
      {/* Autoplay harvest montage */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/village-women-plucking.webp"
        disablePictureInPicture
        style={{
          position:       'absolute',
          inset:          0,
          width:          '100%',
          height:         '100%',
          objectFit:      'cover',
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
          background: `linear-gradient(to bottom, ${T.ink}A6 0%, rgba(24,16,10,0.18) 34%, rgba(24,16,10,0.20) 58%, ${T.ink}E6 100%)`,
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
          alignItems:     'flex-start',
          justifyContent: 'flex-end',
          padding:        'clamp(40px, 6vw, 80px) clamp(24px, 8vw, 120px)',
          textAlign:      'left',
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
            letterSpacing: '0',
            maxWidth:      '780px',
          }}
        >
          Every bottle begins here - at 2,500 metres, by hand.
        </h2>
        <div
          style={{
            marginTop: '28px',
            display: 'flex',
            gap: '14px',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <button
            type="button"
            onClick={togglePlayback}
            aria-label={paused ? 'Play harvest film' : 'Pause harvest film'}
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              border: `1px solid ${T.ivory}80`,
              background: 'rgba(24,16,10,0.34)',
              color: T.ivory,
              cursor: 'pointer',
              fontFamily: 'sans-serif',
              fontSize: '13px',
              display: 'grid',
              placeItems: 'center',
              backdropFilter: 'blur(8px)',
            }}
          >
            {paused ? '>' : 'II'}
          </button>
          {['Bloom window', 'Hand harvest', 'Cold press'].map((item) => (
            <span
              key={item}
              style={{
                border: `1px solid ${T.ivory}35`,
                color: `${T.ivory}D9`,
                padding: '8px 12px',
                fontFamily: 'sans-serif',
                fontSize: '7px',
                letterSpacing: '2.6px',
                textTransform: 'uppercase',
                background: 'rgba(24,16,10,0.22)',
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
