import type { Metadata } from 'next';
import OmakaseSection    from '@/sections/more/OmakaseSection';
import ComingSoon        from '@/sections/home/ComingSoon';
import ComplianceSection from '@/sections/home/ComplianceSection';

export const metadata: Metadata = {
  title:       'More — BURANSH by Aatrey Elixir',
  description: 'The Omakase tasting experience, coming soon products from the Rhododendron forest, and BURANSH compliance certifications.',
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
