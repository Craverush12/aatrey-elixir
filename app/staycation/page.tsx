import type { Metadata } from 'next';
import StaycationHero      from '@/sections/staycation/StaycationHero';
import JourneySteps        from '@/sections/staycation/JourneySteps';
import WildernessActivities from '@/sections/staycation/WildernessActivities';
import StaycationIncludes  from '@/sections/staycation/StaycationIncludes';
import StaycationBooking   from '@/sections/staycation/StaycationBooking';

export const metadata: Metadata = {
  title:       'Staycation — BURANSH by Aatrey Elixir',
  description: 'Stay among the Rhododendron groves of Uttarakhand. Walk the harvest with the women of Project Aatmanirbhar. Watch the elixir being made at 2,500 metres.',
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
