import type { Metadata } from 'next';
import Hero from '@/sections/home/Hero';
import ValuePillars from '@/sections/home/ValuePillars';
import ProductIntro from '@/sections/home/ProductIntro';
import FeaturedRecipes from '@/sections/home/FeaturedRecipes';
import ShareRecipe from '@/sections/home/ShareRecipe';
import Testimonials from '@/sections/home/Testimonials';
import MontageSection from '@/sections/home/MontageSection';
import ComplianceSection from '@/sections/home/ComplianceSection';
import HimalayanLandscape from '@/sections/home/HimalayanLandscape';
import ComingSoon from '@/sections/home/ComingSoon';

export const metadata: Metadata = {
  title: 'Inherited, not manufactured.',
  description:
    'Himalayan Rhododendron Floral Concentrate from Uttarakhand. Product story, serving rituals, private releases, and private-access enquiries.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValuePillars />
      <ProductIntro />
      <FeaturedRecipes />
      <ShareRecipe />
      <Testimonials />
      <MontageSection />
      <ComplianceSection />
      <HimalayanLandscape />
      <ComingSoon />
    </>
  );
}
