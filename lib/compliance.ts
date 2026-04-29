export interface ComplianceBadge {
  id:         string;
  label:      string;
  sublabel:   string;
  certNumber: string | null;
}

export const COMPLIANCE_BADGES: ComplianceBadge[] = [
  {
    id:         'cold-pressed',
    label:      'Cold Pressed',
    sublabel:   'Processed at source',
    certNumber: null,
  },
  {
    id:         'single-harvest',
    label:      'Single Harvest',
    sublabel:   'Annual bloom window',
    certNumber: null,
  },
  {
    id:         'no-additives',
    label:      'No Additives',
    sublabel:   'Clean ingredient intent',
    certNumber: null,
  },
  {
    id:         'made-in-india',
    label:      'Made in India',
    sublabel:   'Uttarakhand origin',
    certNumber: null,
  },
];
