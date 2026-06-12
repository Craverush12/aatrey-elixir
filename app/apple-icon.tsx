import { ImageResponse } from 'next/og';

export const size        = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width:          '100%',
          height:         '100%',
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'center',
          background:     '#C4392B',
        }}
      >
        <div
          style={{
            display:    'flex',
            color:      '#F5EDD8',
            fontSize:   120,
            fontStyle:  'italic',
            fontFamily: 'serif',
            fontWeight: 400,
            lineHeight: 1,
            paddingTop: 10,
          }}
        >
          B
        </div>
      </div>
    ),
    size
  );
}
