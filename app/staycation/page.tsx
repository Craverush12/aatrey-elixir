import type { Metadata } from 'next';
import StaycationHero from '@/sections/staycation/StaycationHero';
import JourneySteps from '@/sections/staycation/JourneySteps';
import WildernessActivities from '@/sections/staycation/WildernessActivities';
import StaycationIncludes from '@/sections/staycation/StaycationIncludes';
import StaycationBooking from '@/sections/staycation/StaycationBooking';

export const metadata: Metadata = {
  title: 'Staycation',
  description:
    'Stay among the Rhododendron groves of Uttarakhand. Walk the harvest landscape, witness the making at altitude, and enquire for the private BURANSH staycation.',
  alternates: {
    canonical: '/staycation',
  },
};

export default function StaycationPage() {
  return (
    <>
      <StaycationHero />
      <JourneySteps />
      <WildernessActivities />
      <StaycationIncludes />
      <StaycationBooking />
    </>
  );
}
