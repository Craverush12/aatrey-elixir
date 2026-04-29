import type { Metadata } from 'next';
import OmakaseSection from '@/sections/more/OmakaseSection';
import ComingSoon from '@/sections/home/ComingSoon';
import ComplianceSection from '@/sections/home/ComplianceSection';

export const metadata: Metadata = {
  title: 'More',
  description:
    'The Omakase tasting experience, private releases from the Rhododendron forest, and BURANSH origin notes.',
  alternates: {
    canonical: '/more',
  },
};

export default function MorePage() {
  return (
    <>
      <OmakaseSection />
      <ComingSoon />
      <ComplianceSection />
    </>
  );
}
