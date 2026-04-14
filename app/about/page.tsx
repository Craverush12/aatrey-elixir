import type { Metadata } from 'next';
import NameOrigin          from '@/sections/about/NameOrigin';
import ProjectAatmanirbhar from '@/sections/about/ProjectAatmanirbhar';
import WomenFeature        from '@/sections/about/WomenFeature';
import DocumentarySection  from '@/sections/about/DocumentarySection';

export const metadata: Metadata = {
  title:       'About — BURANSH by Aatrey Elixir',
  description: 'The name Aatrey, Project Aatmanirbhar, the women of Uttarakhand, and the documentary. The full story of BURANSH.',
};

export default function AboutPage() {
  return (
    <>
      <NameOrigin />
      <ProjectAatmanirbhar />
      <WomenFeature />
      <DocumentarySection />
    </>
  );
}
