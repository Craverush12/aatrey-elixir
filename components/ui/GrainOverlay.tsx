/** Grain texture overlay — SVG feTurbulence, mix-blend multiply */
export default function GrainOverlay({ opacity = 0.045 }: { opacity?: number }) {
  const encoded = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.80' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='${opacity}'/%3E%3C/svg%3E")`;

  return (
    <div
      aria-hidden="true"
      style={{
        position:        'absolute',
        inset:           0,
        pointerEvents:   'none',
        zIndex:          1,
        backgroundImage: encoded,
        backgroundSize:  '200px 200px',
        mixBlendMode:    'multiply',
      }}
    />
  );
}
