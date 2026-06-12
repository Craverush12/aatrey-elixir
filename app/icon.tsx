import { ImageResponse } from 'next/og';

export const size        = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width:           '100%',
          height:          '100%',
          display:         'flex',
          alignItems:      'center',
          justifyContent:  'center',
          background:      '#C4392B',
        }}
      >
        {/* Ivory letter mark */}
        <div
          style={{
            display:     'flex',
            color:       '#F5EDD8',
            fontSize:    22,
            fontStyle:   'italic',
            fontFamily:  'serif',
            fontWeight:  400,
            lineHeight:  1,
            paddingTop:  2,
          }}
        >
          B
        </div>
      </div>
    ),
    size
  );
}
