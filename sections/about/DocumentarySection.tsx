import Image from 'next/image';
import GrainOverlay from '@/components/ui/GrainOverlay';
import OrnamentLine from '@/components/ui/OrnamentLine';
import { T } from '@/lib/tokens';
import { BRAND } from '@/lib/brand-content';

function getYouTubeEmbedUrl(url: string | null) {
  if (!url) return null;

  try {
    const parsed = new URL(url);
    let videoId = '';

    if (parsed.hostname.includes('youtu.be')) {
      videoId = parsed.pathname.replace('/', '');
    } else if (parsed.hostname.includes('youtube.com')) {
      videoId = parsed.searchParams.get('v') ?? '';
    }

    return videoId ? `https://www.youtube-nocookie.com/embed/${videoId}?rel=0` : null;
  } catch {
    return null;
  }
}

function getYouTubeThumbnailUrl(url: string | null) {
  if (!url) return null;

  try {
    const parsed = new URL(url);
    let videoId = '';

    if (parsed.hostname.includes('youtu.be')) {
      videoId = parsed.pathname.replace('/', '');
    } else if (parsed.hostname.includes('youtube.com')) {
      videoId = parsed.searchParams.get('v') ?? '';
    }

    return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null;
  } catch {
    return null;
  }
}

export default function DocumentarySection() {
  const documentaryUrl = BRAND.documentary.url;
  const embedUrl = getYouTubeEmbedUrl(documentaryUrl);
  const thumbnailUrl = getYouTubeThumbnailUrl(documentaryUrl);
  const isPublicFilm = Boolean(embedUrl && documentaryUrl);

  return (
    <section
      style={{
        background: T.ink,
        padding:    '100px clamp(24px, 8vw, 120px) 80px',
        position:   'relative',
        overflow:   'hidden',
        borderTop:  `1px solid ${T.umber}30`,
      }}
    >
      <GrainOverlay />

      <div style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
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
            THE FILM
          </p>
          <h2
            style={{
              fontFamily:    `'Cormorant Garamond', serif`,
              fontSize:      'clamp(24px, 4vw, 48px)',
              fontWeight:    300,
              fontStyle:     'italic',
              color:         T.ivory,
              letterSpacing: '0',
              marginBottom:  '16px',
            }}
          >
            {isPublicFilm ? 'Watch the film.' : 'Private preview.'}
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
            <OrnamentLine color={`${T.umber}60`} width={80} />
          </div>
          <p
            style={{
              fontFamily: `'EB Garamond', serif`,
              fontSize:   'clamp(15px, 1.6vw, 17px)',
              fontStyle:  'italic',
              color:      `${T.ivory}60`,
              maxWidth:   '620px',
              margin:     '0 auto',
              lineHeight: 1.8,
            }}
          >
            {BRAND.documentary.synopsis}
          </p>
        </div>

        <div
          style={{
            maxWidth:    '860px',
            margin:      '0 auto',
            position:    'relative',
            aspectRatio: '16/9',
            background:  '#0E0A06',
            border:      `1px solid ${T.umber}40`,
            overflow:    'hidden',
          }}
        >
          {(['topLeft', 'topRight', 'bottomLeft', 'bottomRight'] as const).map((corner) => (
            <div
              key={corner}
              aria-hidden="true"
              style={{
                position:     'absolute',
                zIndex:       2,
                width:        '20px',
                height:       '20px',
                borderTop:    corner.startsWith('top') ? `1px solid ${T.gold}50` : 'none',
                borderBottom: corner.startsWith('bottom') ? `1px solid ${T.gold}50` : 'none',
                borderLeft:   corner.endsWith('Left') ? `1px solid ${T.gold}50` : 'none',
                borderRight:  corner.endsWith('Right') ? `1px solid ${T.gold}50` : 'none',
                top:          corner.startsWith('top') ? '12px' : undefined,
                bottom:       corner.startsWith('bottom') ? '12px' : undefined,
                left:         corner.endsWith('Left') ? '12px' : undefined,
                right:        corner.endsWith('Right') ? '12px' : undefined,
              }}
            />
          ))}

          {isPublicFilm && documentaryUrl ? (
            <a
              href={documentaryUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Open the BURANSH documentary on YouTube"
              style={{
                position: 'absolute',
                inset:    0,
                display:  'block',
                textDecoration: 'none',
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position:           'absolute',
                  inset:              0,
                  backgroundImage:     `url("${thumbnailUrl ?? '/images/village-women-plucking.webp'}")`,
                  backgroundSize:      'cover',
                  backgroundPosition:  'center',
                  filter:              'saturate(0.92)',
                }}
              />
              <div
                aria-hidden="true"
                style={{
                  position:   'absolute',
                  inset:      0,
                  background: 'linear-gradient(to top, rgba(8,6,4,0.74) 0%, rgba(8,6,4,0.18) 46%, rgba(8,6,4,0.36) 100%)',
                }}
              />
              <div
                style={{
                  position:       'absolute',
                  inset:          0,
                  zIndex:         3,
                  display:        'flex',
                  flexDirection:  'column',
                  alignItems:     'center',
                  justifyContent: 'center',
                  gap:            '18px',
                  padding:        '24px',
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width:          '72px',
                    height:         '72px',
                    borderRadius:   '50%',
                    border:         `1px solid ${T.gold}80`,
                    background:     'rgba(10, 8, 6, 0.46)',
                    display:        'flex',
                    alignItems:     'center',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    style={{
                      width: 0,
                      height: 0,
                      borderTop: '10px solid transparent',
                      borderBottom: '10px solid transparent',
                      borderLeft: `16px solid ${T.ivory}`,
                      marginLeft: '4px',
                    }}
                  />
                </span>
                <span
                  style={{
                    color:         T.ivory,
                    fontFamily:    'sans-serif',
                    fontSize:      '8px',
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                  }}
                >
                  Watch on YouTube
                </span>
              </div>
            </a>
          ) : (
            <>
              <Image
                src="/images/village-women-plucking.webp"
                alt="Atmospheric BURANSH harvest landscape preview"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 900px) 100vw, 860px"
              />
              <div
                aria-hidden="true"
                style={{
                  position:   'absolute',
                  inset:      0,
                  background: 'linear-gradient(to top, rgba(8,6,4,0.78) 0%, rgba(8,6,4,0.22) 45%, rgba(8,6,4,0.42) 100%)',
                }}
              />
              <div
                style={{
                  position:       'absolute',
                  inset:          0,
                  zIndex:         3,
                  display:        'flex',
                  flexDirection:  'column',
                  justifyContent: 'flex-end',
                  gap:            '10px',
                  padding:        '24px',
                }}
              >
                <span
                  style={{
                    alignSelf:     'flex-start',
                    border:        `1px solid ${T.gold}60`,
                    color:         T.gold,
                    background:    'rgba(10, 8, 6, 0.35)',
                    fontFamily:    'sans-serif',
                    fontSize:      '7px',
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    padding:       '5px 10px',
                  }}
                >
                  Private preview only
                </span>
                <p
                  style={{
                    maxWidth:   '540px',
                    fontFamily: `'EB Garamond', serif`,
                    fontSize:   'clamp(14px, 1.6vw, 16px)',
                    fontStyle:  'italic',
                    color:      `${T.ivory}E6`,
                    lineHeight: 1.75,
                  }}
                >
                  {BRAND.documentary.body}
                </p>
              </div>
            </>
          )}
        </div>

        {documentaryUrl && (
          <div
            style={{
              maxWidth:        '860px',
              margin:          '18px auto 0',
              display:         'flex',
              justifyContent:  'center',
            }}
          >
            <a
              href={documentaryUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                display:        'inline-flex',
                alignItems:     'center',
                justifyContent: 'center',
                border:         `1px solid ${T.gold}60`,
                color:          T.ivory,
                background:     'transparent',
                padding:        '12px 28px',
                textDecoration: 'none',
                fontFamily:     `'EB Garamond', serif`,
                fontSize:       '11px',
                letterSpacing:  '2.5px',
                textTransform:  'uppercase',
                transition:     `all 400ms ${T.ease}`,
              }}
            >
              Open on YouTube
            </a>
          </div>
        )}

        <div
          style={{
            maxWidth:           '860px',
            margin:             '28px auto 0',
            display:            'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap:                '2px',
          }}
        >
          {[
            BRAND.documentary.title ? { label: 'Title', value: BRAND.documentary.title } : null,
            BRAND.documentary.director ? { label: 'Director', value: BRAND.documentary.director } : null,
            BRAND.documentary.runtime ? { label: 'Runtime', value: BRAND.documentary.runtime } : null,
            { label: 'Status', value: isPublicFilm ? 'Available now' : 'Private preview in preparation' },
            { label: 'Access', value: isPublicFilm ? 'YouTube' : 'Shared only by request' },
          ].filter(Boolean).map((item) => {
            const { label, value } = item as { label: string; value: string };

            return (
              <div
                key={label}
                style={{
                  background: `${T.umber}15`,
                  padding:    '20px 18px',
                  borderLeft: `2px solid ${T.umber}30`,
                }}
              >
                <p
                  style={{
                    fontFamily:    'sans-serif',
                    fontSize:      '7px',
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    color:         T.muted,
                    marginBottom:  '6px',
                  }}
                >
                  {label}
                </p>
                <p
                  style={{
                    fontFamily: `'EB Garamond', serif`,
                    fontSize:   '14px',
                    fontStyle:  'italic',
                    color:      `${T.ivory}60`,
                  }}
                >
                  {value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
