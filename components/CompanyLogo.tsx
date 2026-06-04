import Image from 'next/image';
import { T } from '@/lib/tokens';

interface CompanyLogoProps {
  size?: number;
  color?: string;
  useInlineSvg?: boolean; // kept for prop compatibility
}

export default function CompanyLogo({
  size = 32,
  color = T.crimson,
}: CompanyLogoProps) {
  // Usually, T.ivory or white means it's on a dark background (needs a light logo)
  // T.crimson or dark means it's on a light background (needs a dark/regular logo)
  const isDarkBg = color === T.ivory || color === '#FFFFF0';
  
  // We use one logo for dark backgrounds and one for light backgrounds
  const src = isDarkBg ? '/aatry-logo-2.png' : '/aatey-logo.png';

  return (
    <Image
      src={src}
      alt="Aatrey Elixir logo"
      width={size * 4} // rough estimate for aspect ratio
      height={size}
      style={{ objectFit: 'contain', height: `${size}px`, width: 'auto' }}
      priority
    />
  );
}
