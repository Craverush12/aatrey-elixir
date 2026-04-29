import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Privacy',
  description:
    'Privacy policy for BURANSH by Aatrey Elixir, including enquiries, waitlists, and purchase-related communications.',
  alternates: {
    canonical: '/privacy',
  },
};

const sections = [
  {
    heading: 'Information We Collect',
    paragraphs: [
      'We collect the details you choose to submit through this website, including names, email addresses, phone numbers, city or location details, enquiry notes, and any other information you include in forms for contact, gifting, bulk orders, staycation requests, Omakase requests, serving notes, or private-release waitlists.',
      'We may also receive technical information required for site operation, such as browser, device, IP address, referrer, and server-log data. This information is used for security, diagnostics, and basic site administration.',
    ],
  },
  {
    heading: 'How We Use Your Information',
    paragraphs: [
      'We use submitted information to respond to your request, manage private orders and enquiries, operate waitlists, send operational emails, and maintain internal records for BURANSH.',
      'We may also use submitted information to improve the quality of the website, service flow, and communication process, but we do not sell personal information submitted through this website.',
    ],
  },
  {
    heading: 'Payments And Third-Party Services',
    paragraphs: [
      'Product purchase links may direct you to a Razorpay-hosted payment page or another approved payment destination. Payment information is completed on that third-party page and is governed by the third party operating it.',
      'Operational emails may be sent through Resend, and enquiry records may be stored in a Google Sheets-based operations database. We use these services only to operate BURANSH and its related workflows.',
    ],
  },
  {
    heading: 'Retention And Access',
    paragraphs: [
      'We keep submitted information for as long as it is reasonably necessary to respond to your enquiry, manage an order or waitlist, maintain business records, or meet legal and operational requirements.',
      'If you want to request correction or deletion of information you submitted through this website, contact us through the private desk form and include enough information for us to identify the relevant record.',
    ],
  },
  {
    heading: 'Updates',
    paragraphs: [
      'This policy may be updated as the website, commerce flow, or service providers change. The version published on this page is the current operating policy for this website.',
    ],
  },
] as const;

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy Policy"
      intro="This policy explains how BURANSH by Aatrey Elixir handles information submitted through the website."
      lastUpdated="2026-04-24"
      sections={sections}
    />
  );
}
