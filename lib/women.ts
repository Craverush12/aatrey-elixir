/**
 * The three featured women of Project Aatmanirbhar.
 * All data marked // TODO requires photography commission + written permission.
 */

export interface Woman {
  name:      string;
  village:   string;
  years:     number | string;
  quote:     string;
  imageSrc:  string | null;
  imageAlt:  string;
}

// TODO: confirm with client before launch — [all three women — names, villages, years, quotes, portraits]
// TODO: photography commission required — see asset prompts in blueprint

export const WOMEN: Woman[] = [
  {
    name:     '// TODO: confirm with client before launch — [Woman 1 name]',
    village:  '// TODO: confirm with client before launch — [Woman 1 village]',
    years:    '// TODO: confirm with client before launch — [years harvesting]',
    quote:    '// TODO: confirm with client before launch — [direct quote, translated from Pahadi/Hindi]',
    imageSrc: '/images/female-buransh-women.PNG',
    imageAlt: 'Portrait of a Pahadi woman harvesting Rhododendron blooms in Uttarakhand',
  },
  {
    name:     '// TODO: confirm with client before launch — [Woman 2 name]',
    village:  '// TODO: confirm with client before launch — [Woman 2 village]',
    years:    '// TODO: confirm with client before launch — [years harvesting]',
    quote:    '// TODO: confirm with client before launch — [direct quote, translated from Pahadi/Hindi]',
    imageSrc: '/images/village-women-plucking.PNG',
    imageAlt: 'Pahadi women at work in the Rhododendron harvest, Uttarakhand',
  },
  {
    name:     '// TODO: confirm with client before launch — [Woman 3 name]',
    village:  '// TODO: confirm with client before launch — [Woman 3 village]',
    years:    '// TODO: confirm with client before launch — [years harvesting]',
    quote:    '// TODO: confirm with client before launch — [direct quote, translated from Pahadi/Hindi]',
    imageSrc: '/images/buransh-flower-plucked.PNG',
    imageAlt: 'Rhododendron arboreum bloom — freshly harvested, Uttarakhand',
  },
];
