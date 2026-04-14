/**
 * Asia wellness authority testimonials.
 * IMPORTANT: Do not publish without written permission confirmation from each person.
 * All fields marked // TODO require client confirmation.
 */

export interface Testimonial {
  quote:       string;
  name:        string;
  title:       string;
  city:        string;
  institution: string;
}

// TODO: confirm with client before launch — [all testimonial quotes + written permission from each person]

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:       'I have spent two decades studying botanical medicine across Asia. BURANSH is the most extraordinary floral concentrate I have encountered — not for its novelty, but for its precision.',
    name:        '// TODO: confirm with client before launch — [Name]',
    title:       'Wellness Authority',
    city:        'Singapore',
    institution: '// TODO: confirm with client before launch — [Institution/Practice]',
  },
  {
    quote:       'In Japan, we call it ichigo ichie — once in a lifetime. BURANSH has that quality. It cannot be replicated. It can only be experienced.',
    name:        '// TODO: confirm with client before launch — [Name]',
    title:       'Integrative Medicine Practitioner',
    city:        'Tokyo',
    institution: '// TODO: confirm with client before launch — [Institution/Practice]',
  },
  {
    quote:       'For my practice in Ayurvedic clinical nutrition, I have never recommended a commercial botanical product. BURANSH is the first exception I have made in seventeen years.',
    name:        '// TODO: confirm with client before launch — [Name — Doctor or Nutritionist]',
    title:       'Ayurvedic Clinical Nutritionist',
    city:        'New Delhi',
    institution: '// TODO: confirm with client before launch — [Institution/Practice]',
  },
];
