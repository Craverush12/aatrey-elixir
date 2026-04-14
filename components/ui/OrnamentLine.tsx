import { T } from '@/lib/tokens';

interface OrnamentLineProps {
  color?: string;
  width?: number;
}

/** SVG decorative divider with centre diamond + gold accents */
export default function OrnamentLine({
  color = T.border,
  width = 120,
}: OrnamentLineProps) {
  const cx = width / 2;
  return (
    <svg
      height="12"
      width={width}
      viewBox={`0 0 ${width} 12`}
      style={{ display: 'block' }}
      aria-hidden="true"
    >
      <line
        x1="0" y1="6" x2={width} y2="6"
        stroke={color} strokeWidth="0.6"
      />
      <circle
        cx={cx} cy="6" r="2.2"
        fill="none" stroke={color} strokeWidth="0.6"
      />
      <circle
        cx={cx} cy="6" r="0.9"
        fill={T.gold}
      />
      <line
        x1={cx - 20} y1="6" x2={cx - 8} y2="6"
        stroke={T.gold} strokeWidth="0.5" opacity="0.6"
      />
      <line
        x1={cx + 8} y1="6" x2={cx + 20} y2="6"
        stroke={T.gold} strokeWidth="0.5" opacity="0.6"
      />
    </svg>
  );
}
