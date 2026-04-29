import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background:
            'linear-gradient(135deg, #f5edd8 0%, #e7d9bf 45%, #24160f 46%, #1a0f0b 100%)',
          color: '#f7f0e2',
          fontFamily: 'serif',
        }}
      >
        <div
          style={{
            width: '52%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '72px 72px 72px 92px',
            color: '#22160f',
          }}
        >
          <div
            style={{
              fontSize: 22,
              letterSpacing: 10,
              textTransform: 'uppercase',
              color: '#8d3029',
              marginBottom: 26,
            }}
          >
            BURANSH
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: 74,
              lineHeight: 0.96,
              fontStyle: 'italic',
              fontWeight: 400,
              marginBottom: 24,
            }}
          >
            Inherited,
            <br />
            not manufactured.
          </div>
          <div
            style={{
              width: 120,
              height: 1,
              background: '#b6986d',
              marginBottom: 24,
            }}
          />
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.35,
              color: '#493127',
            }}
          >
            Himalayan Rhododendron Floral Concentrate from Uttarakhand.
          </div>
        </div>

        <div
          style={{
            width: '48%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '72px',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 64,
              right: 64,
              width: 220,
              height: 220,
              border: '1px solid rgba(245, 229, 202, 0.18)',
              borderRadius: '999px',
            }}
          />
          <div
            style={{
              fontSize: 18,
              letterSpacing: 7,
              textTransform: 'uppercase',
              color: 'rgba(247, 240, 226, 0.72)',
              marginBottom: 16,
            }}
          >
            Aatrey Elixir
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.35,
              color: 'rgba(247, 240, 226, 0.92)',
              maxWidth: 360,
            }}
          >
            Private access, origin-led storytelling, and seasonal releases.
          </div>
        </div>
      </div>
    ),
    size
  );
}
