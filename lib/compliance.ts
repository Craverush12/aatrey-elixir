/**
 * Compliance badge data for ComplianceBadges component.
 * FSSAI number must be confirmed with client before launch.
 */

export interface ComplianceBadge {
  id:         string;
  label:      string;
  sublabel:   string;
  certNumber: string | null;
}

// TODO: confirm with client before launch — [FSSAI licence number, all cert numbers]

export const COMPLIANCE_BADGES: ComplianceBadge[] = [
  {
    id:         'fssai',
    label:      'FSSAI Certified',
    sublabel:   'Food Safety & Standards',
    // TODO: confirm with client before launch — [FSSAI licence number]
    certNumber: null,
  },
  {
    id:         'cold-pressed',
    label:      'Cold Pressed',
    sublabel:   'Process Certified',
    certNumber: null,
  },
  {
    id:         'single-harvest',
    label:      'Single Harvest',
    sublabel:   'Traceability Certified',
    certNumber: null,
  },
  {
    id:         'no-additives',
    label:      'No Additives',
    sublabel:   'Clean Label Verified',
    certNumber: null,
  },
  {
    id:         'made-in-india',
    label:      'Made in India',
    sublabel:   'Origin Certified',
    certNumber: null,
  },
  {
    id:         'uttarakhand',
    label:      'Uttarakhand Origin',
    sublabel:   'GI Tag — Pending',
    certNumber: null,
  },
];
