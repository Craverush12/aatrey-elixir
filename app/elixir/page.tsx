import type { Metadata } from 'next';
import ElixirHero from '@/sections/elixir/ElixirHero';
import WhatItIs from '@/sections/elixir/WhatItIs';
import BetterThan from '@/sections/elixir/BetterThan';
import Occasions from '@/sections/elixir/Occasions';
import RecipeCards from '@/sections/elixir/RecipeCards';
import Customisation from '@/sections/elixir/Customisation';
import GiftingPackages from '@/sections/elixir/GiftingPackages';
import OrderSection from '@/sections/elixir/OrderSection';
import BulkInquiry from '@/sections/elixir/BulkInquiry';

export const metadata: Metadata = {
  title: 'The Elixir',
  description:
    'Order BURANSH Himalayan Rhododendron Floral Concentrate. 750ml. Cold-pressed at 2,500m. Standard and Sugar-Free variants. Gifting packages available.',
  alternates: {
    canonical: '/elixir',
  },
};

export default function ElixirPage() {
  return (
    <>
      <ElixirHero />
      <WhatItIs />
      <BetterThan />
      <Occasions />
      <RecipeCards />
      <Customisation />
      <GiftingPackages />
      <OrderSection />
      <BulkInquiry />
    </>
  );
}
