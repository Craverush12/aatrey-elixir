import Image from 'next/image';
import { T } from '@/lib/tokens';

interface LotusLogoProps {
  size?:  number;
  color?: string; // not used for img variant — use filter for tinting
  useInlineSvg?: boolean;
}

/**
 * Renders the Aatrey Elixir lotus mark.
 * Uses /public/lotus-mark.jpg via next/image.
 * Pass useInlineSvg={true} to use the SVG path version (for dark backgrounds).
 */
export default function LotusLogo({
  size = 32,
  color = T.crimson,
  useInlineSvg = false,
}: LotusLogoProps) {
  if (useInlineSvg) {
    // Inline SVG approximation of the lotus mark for colour-controlled contexts
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 80 80"
        fill="none"
        aria-label="Aatrey Elixir lotus mark"
      >
        {/* Upper petals — left and right */}
        <path
          d="M40 14C40 14 28 8 20 14C14 18 14 28 20 34C26 30 34 26 40 22C46 26 54 30 60 34C66 28 66 18 60 14C52 8 40 14 40 14Z"
          fill={color}
        />
        {/* Central body */}
        <path
          d="M40 22C34 26 26 30 20 34C20 34 24 52 40 60C56 52 60 34 60 34C54 30 46 26 40 22Z"
          fill={color}
        />
        {/* Stem tip */}
        <path
          d="M40 60 L36 68 L40 72 L44 68 Z"
          fill={color}
        />
        {/* Vein highlights */}
        <line x1="40" y1="22" x2="40" y2="60" stroke="white" strokeWidth="1.2" opacity="0.25" />
        <line x1="28" y1="36" x2="40" y2="30" stroke="white" strokeWidth="0.8" opacity="0.18" />
        <line x1="52" y1="36" x2="40" y2="30" stroke="white" strokeWidth="0.8" opacity="0.18" />
      </svg>
    );
  }

  return (
    <Image
      src="/lotus-mark.jpg"
      alt="Aatrey Elixir lotus mark"
      width={size}
      height={size}
      style={{ objectFit: 'contain' }}
      priority
    />
  );
}
