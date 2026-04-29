import type { Metadata } from 'next';
import NameOrigin from '@/sections/about/NameOrigin';
import ProjectAatmanirbhar from '@/sections/about/ProjectAatmanirbhar';
import WomenFeature from '@/sections/about/WomenFeature';
import DocumentarySection from '@/sections/about/DocumentarySection';

export const metadata: Metadata = {
  title: 'About',
  description:
    'The name Aatrey, Project Aatmanirbhar, and the origin story behind BURANSH.',
  alternates: {
    canonical: '/about',
  },
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
