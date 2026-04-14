export const T = {
  ivory:     '#F5EDD8',
  parchment: '#EDE3C8',
  linen:     '#E0D0B0',
  crimson:   '#C4392B',
  crimsonD:  '#A02E20',
  gold:      '#C4A030',
  umber:     '#7A4E1E',
  ink:       '#18100A',
  muted:     '#9C8868',
  pale:      '#A89878',
  border:    '#D8C8A8',
  borderD:   '#C0A880',
  green:     '#3D5C3A',
  ease:      'cubic-bezier(0.76, 0, 0.24, 1)',
  duration:  { fast: 400, mid: 500, slow: 600 },
} as const;

export type Token = typeof T;
