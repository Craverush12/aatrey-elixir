import type { Metadata } from 'next';
import Hero              from '@/sections/home/Hero';
import ValuePillars      from '@/sections/home/ValuePillars';
import ProductIntro      from '@/sections/home/ProductIntro';
import Testimonials      from '@/sections/home/Testimonials';
import WomenTeaser       from '@/sections/home/WomenTeaser';
import ComplianceSection from '@/sections/home/ComplianceSection';
import HimalayanLandscape from '@/sections/home/HimalayanLandscape';
import ComingSoon        from '@/sections/home/ComingSoon';

export const metadata: Metadata = {
  title:       'BURANSH by Aatrey Elixir — Inherited, not manufactured.',
  description: 'Himalayan Rhododendron Floral Concentrate, cold-pressed at 2,500m in Uttarakhand. Harvested by the women of Project Aatmanirbhar. Asia-endorsed. FSSAI certified.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValuePillars />
      <ProductIntro />
      <Testimonials />
      <WomenTeaser />
      <ComplianceSection />
      <HimalayanLandscape />
      <ComingSoon />
    </>
  );
}
