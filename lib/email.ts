import { Resend } from 'resend';
import { requireEnv } from '@/lib/env';

function getResend() {
  return new Resend(requireEnv('RESEND_API_KEY'));
}

export async function sendTeamAlert(
  subject: string,
  html: string
): Promise<void> {
  await getResend().emails.send({
    from: requireEnv('FROM_EMAIL'),
    to: requireEnv('TEAM_EMAIL'),
    subject: `[BURANSH] ${subject}`,
    html,
  });
}

export async function sendGuestConfirmation(
  to: string,
  subject: string,
  html: string
): Promise<void> {
  await getResend().emails.send({
    from: requireEnv('FROM_EMAIL'),
    to,
    subject: `BURANSH — ${subject}`,
    html,
  });
}

/* ── Email templates ──────────────────────────────────────── */

export function orderConfirmationHtml(name: string, quantity: number, variant: string): string {
  return `
<div style="font-family:'EB Garamond',Georgia,serif;max-width:560px;margin:0 auto;background:#F5EDD8;padding:40px;">
  <h1 style="font-family:'Cormorant Garamond',Georgia,serif;font-weight:300;font-style:italic;color:#18100A;font-size:32px;margin-bottom:8px;">Order Confirmed</h1>
  <p style="color:#9C8868;font-size:11px;letter-spacing:3px;text-transform:uppercase;margin-bottom:24px;">BURANSH · AATREY ELIXIR</p>
  <p style="color:#18100A;font-size:16px;line-height:1.7;margin-bottom:16px;">Dear ${name},</p>
  <p style="color:#18100A;font-size:16px;line-height:1.7;margin-bottom:16px;">
    Thank you for ordering BURANSH Himalayan Rhododendron Floral Concentrate. Your order of
    <strong>${quantity} bottle${quantity > 1 ? 's' : ''}</strong> (${variant}) has been received and is being processed.
  </p>
  <p style="color:#18100A;font-size:16px;line-height:1.7;margin-bottom:24px;">
    We will dispatch your order within 2–3 business days and send you a tracking number.
  </p>
  <div style="border-top:1px solid #D8C8A8;margin:24px 0;"></div>
  <p style="color:#9C8868;font-size:13px;font-style:italic;">Inherited, not manufactured.</p>
  <p style="color:#9C8868;font-size:11px;margin-top:8px;">Aatrey Elixir · Uttarakhand, India</p>
</div>`;
}

export function inquiryConfirmationHtml(name: string, type: string): string {
  return `
<div style="font-family:'EB Garamond',Georgia,serif;max-width:560px;margin:0 auto;background:#F5EDD8;padding:40px;">
  <h1 style="font-family:'Cormorant Garamond',Georgia,serif;font-weight:300;font-style:italic;color:#18100A;font-size:32px;margin-bottom:8px;">Enquiry Received</h1>
  <p style="color:#9C8868;font-size:11px;letter-spacing:3px;text-transform:uppercase;margin-bottom:24px;">BURANSH · AATREY ELIXIR</p>
  <p style="color:#18100A;font-size:16px;line-height:1.7;margin-bottom:16px;">Dear ${name},</p>
  <p style="color:#18100A;font-size:16px;line-height:1.7;margin-bottom:24px;">
    We have received your ${type} enquiry and will be in touch within 24–48 hours.
  </p>
  <div style="border-top:1px solid #D8C8A8;margin:24px 0;"></div>
  <p style="color:#9C8868;font-size:13px;font-style:italic;">Inherited, not manufactured.</p>
  <p style="color:#9C8868;font-size:11px;margin-top:8px;">Aatrey Elixir · Uttarakhand, India</p>
</div>`;
}

export function waitlistConfirmationHtml(name: string, product: string): string {
  return `
<div style="font-family:'EB Garamond',Georgia,serif;max-width:560px;margin:0 auto;background:#F5EDD8;padding:40px;">
  <h1 style="font-family:'Cormorant Garamond',Georgia,serif;font-weight:300;font-style:italic;color:#18100A;font-size:32px;margin-bottom:8px;">You're on the list.</h1>
  <p style="color:#9C8868;font-size:11px;letter-spacing:3px;text-transform:uppercase;margin-bottom:24px;">BURANSH ${product.toUpperCase()} · COMING SOON</p>
  <p style="color:#18100A;font-size:16px;line-height:1.7;margin-bottom:16px;">Dear ${name},</p>
  <p style="color:#18100A;font-size:16px;line-height:1.7;margin-bottom:24px;">
    You'll be the first to know when BURANSH ${product} is available. Thank you for your patience —
    the best things take time.
  </p>
  <div style="border-top:1px solid #D8C8A8;margin:24px 0;"></div>
  <p style="color:#9C8868;font-size:13px;font-style:italic;">Inherited, not manufactured.</p>
</div>`;
}
