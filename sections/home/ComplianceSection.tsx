import ComplianceBadges from '@/components/ComplianceBadges';
import { T } from '@/lib/tokens';

export default function ComplianceSection() {
  return (
    <section
      style={{
        background:  T.ivory,
        borderTop:   `1px solid ${T.border}`,
        borderBottom:`1px solid ${T.border}`,
        padding:     '64px clamp(24px, 8vw, 120px)',
        textAlign:   'center',
      }}
    >
      <style>{`@media(max-width:480px){.compliance-section{padding-left:20px!important;padding-right:20px!important}}`}</style>
      <p
        style={{
          fontFamily:    'sans-serif',
          fontSize:      '7px',
          letterSpacing: '5px',
          textTransform: 'uppercase',
          color:         T.crimson,
          marginBottom:  '36px',
        }}
      >
        CERTIFIED & VERIFIED
      </p>

      <ComplianceBadges layout="row" />
    </section>
  );
}
