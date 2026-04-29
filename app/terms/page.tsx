import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Terms',
  description:
    'Terms of use for BURANSH by Aatrey Elixir, including website usage, enquiries, and order handling.',
  alternates: {
    canonical: '/terms',
  },
};

const sections = [
  {
    heading: 'Website Use',
    paragraphs: [
      'This website is provided for information, private enquiries, waitlists, and approved purchase flows related to BURANSH by Aatrey Elixir. By using the site, you agree to use it lawfully and not to interfere with its operation, security, or availability.',
      'You may not misuse forms, submit false information, attempt unauthorized access, scrape protected content at scale, or use the website in a way that harms BURANSH, its service providers, or other users.',
    ],
  },
  {
    heading: 'Products, Availability, And Enquiries',
    paragraphs: [
      'BURANSH products, private releases, gifting formats, staycation experiences, and Omakase experiences are subject to availability, seasonal supply, and written confirmation where applicable.',
      'Some parts of the website are enquiry-led by design. Submission of a form or waitlist request does not guarantee acceptance, availability, fulfilment, or a specific response timeline unless confirmed by the BURANSH team.',
    ],
  },
  {
    heading: 'Orders And Payment Links',
    paragraphs: [
      'Where a direct purchase option is available, payment is completed on an approved external payment page. An order is treated as confirmed only after successful payment and any required operational confirmation from the BURANSH team.',
      'Gifting, bulk, hospitality, export, staycation, and Omakase requests may require separate written confirmation, quote approval, scheduling, or fulfilment checks before they are accepted.',
    ],
  },
  {
    heading: 'Intellectual Property',
    paragraphs: [
      'All website copy, visual composition, branding, trademarks, graphics, layouts, and original content on this site remain the property of BURANSH by Aatrey Elixir or its licensors unless stated otherwise.',
      'You may not reproduce, republish, adapt, distribute, or use this material commercially without prior written permission.',
    ],
  },
  {
    heading: 'Third-Party Links And Liability',
    paragraphs: [
      'This website may contain links to third-party services such as payment pages or social platforms. BURANSH is not responsible for third-party content, policies, uptime, or actions outside this website.',
      'To the extent permitted by law, the website is provided on an as-is and as-available basis. BURANSH does not guarantee uninterrupted availability and is not liable for indirect, incidental, or consequential loss arising from ordinary website use.',
    ],
  },
  {
    heading: 'Applicable Law',
    paragraphs: [
      'These terms are governed by the laws of India. If a dispute arises, the parties will first attempt to resolve it in good faith before pursuing formal remedies.',
    ],
  },
] as const;

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="Terms Of Use"
      intro="These terms govern use of the BURANSH website and the related enquiry and purchase flows presented on it."
      lastUpdated="2026-04-24"
      sections={sections}
    />
  );
}
