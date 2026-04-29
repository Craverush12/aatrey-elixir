import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Shipping and Returns',
  description:
    'Shipping, cancellation, return, and refund policy for BURANSH by Aatrey Elixir.',
  alternates: {
    canonical: '/shipping-returns',
  },
};

const sections = [
  {
    heading: 'Order Handling',
    paragraphs: [
      'Direct product orders are processed after successful payment through an approved payment link. Gifting, bulk, hospitality, staycation, and Omakase requests are handled through enquiry and may require written confirmation before any schedule or fulfilment window is final.',
      'Dispatch timing can vary based on destination, product availability, seasonal volume, gifting configuration, and any customization requested in writing.',
    ],
  },
  {
    heading: 'Shipping Windows',
    paragraphs: [
      'Where shipping applies, the expected dispatch or delivery window is shared after confirmation. Any timeline shown in conversation or quotation should be read together with the final written confirmation sent by the BURANSH team.',
      'Delays caused by courier disruption, weather, access constraints, force majeure, or incorrect customer-provided details may affect final delivery timing.',
    ],
  },
  {
    heading: 'Address Changes And Failed Delivery',
    paragraphs: [
      'If you need to correct a delivery address, contact the BURANSH team as early as possible. Once an order has moved into dispatch or courier handling, changes may not be possible.',
      'If a shipment is delayed, returned, or undeliverable because of incorrect delivery information or repeated failed delivery attempts, additional shipping charges may apply before redelivery.',
    ],
  },
  {
    heading: 'Returns And Refunds',
    paragraphs: [
      'Because BURANSH products are food-related, limited-harvest, and in some cases prepared or packed for a specific order, opened or used products are not eligible for return.',
      'If you receive the wrong item or a shipment arrives materially damaged, notify the BURANSH team within 48 hours of delivery with clear supporting details so the issue can be reviewed. If the claim is validated, the remedy may be replacement, refund, or credit, depending on the circumstance and stock availability.',
    ],
  },
  {
    heading: 'Cancellations',
    paragraphs: [
      'A cancellation request may be accepted before dispatch or before custom preparation begins. Once a product has been packed, dispatched, reserved for a custom gifting request, or committed against a confirmed staycation or event arrangement, cancellation may be limited or unavailable.',
      'Any exception, credit, or goodwill adjustment remains at the discretion of the BURANSH team unless otherwise required by law.',
    ],
  },
] as const;

export default function ShippingReturnsPage() {
  return (
    <LegalPage
      eyebrow="Shipping And Returns"
      title="Shipping, Returns, And Cancellation Policy"
      intro="This page explains how BURANSH currently handles dispatch timing, cancellations, damaged shipments, and return-related requests."
      lastUpdated="2026-04-24"
      sections={sections}
    />
  );
}
