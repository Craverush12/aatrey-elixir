import { NextRequest, NextResponse } from 'next/server';
import { verifyWebhookSignature, deriveOrderDetails } from '@/lib/razorpay';
import { appendRow } from '@/lib/sheets';
import { sendTeamAlert } from '@/lib/email';

// Tell Next.js not to parse the body — we need the raw string for signature verification
export const dynamic = 'force-dynamic';

interface RazorpayPaymentEntity {
  id:              string;
  order_id:        string | null;
  amount:          number;       // paise
  currency:        string;
  status:          string;
  email:           string;
  contact:         string;
  description:     string | null;
  notes:           Record<string, string>;
}

interface RazorpayWebhookPayload {
  event:    string;
  payload: {
    payment: {
      entity: RazorpayPaymentEntity;
    };
  };
}

export async function POST(req: NextRequest) {
  // 1 — Read raw body (required for HMAC verification)
  const rawBody = await req.text();
  const signature = req.headers.get('x-razorpay-signature') ?? '';

  // 2 — Verify signature
  if (!verifyWebhookSignature(rawBody, signature)) {
    console.error('[razorpay-webhook] signature mismatch');
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
  }

  // 3 — Parse payload
  let data: RazorpayWebhookPayload;
  try {
    data = JSON.parse(rawBody) as RazorpayWebhookPayload;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  // 4 — Only handle payment.captured events
  if (data.event !== 'payment.captured') {
    return NextResponse.json({ received: true });
  }

  const payment = data.payload.payment.entity;
  const notes   = payment.notes ?? {};

  // 5 — Extract customer details from payment + custom fields
  const name    = notes['name']             || notes['Name']             || '';
  const address = notes['Delivery Address'] || notes['address']          || notes['Address'] || '';
  const city    = notes['City']             || notes['city']             || '';
  const state   = notes['State']            || notes['state']            || '';
  const pincode = notes['Pincode']          || notes['pincode']          || '';

  // 6 — Derive variant + quantity from amount
  const { variant, quantity, amountRupees } = deriveOrderDetails(payment.amount, notes);

  // 7 — Detect acquisition source
  const noteSource = notes['source'] || notes['Source'] || '';
  const isBM = noteSource.toUpperCase().includes('BEDROOMMASTERY')
    || (amountRupees / quantity) === 800;
  const source = isBM ? 'BEDROOMMASTERY' : 'DIRECT';

  // 8 — Write to Google Sheet ORDERS tab
  // Columns: Timestamp | Name | Email | Phone | Address | City | State | Pincode
  //          Variant | Qty | Amount (₹) | Payment ID | Order ID | Status | Source
  try {
    await appendRow('ORDERS', [
      name,
      payment.email   || '',
      payment.contact || '',
      address,
      city,
      state,
      pincode,
      variant,
      quantity,
      amountRupees,
      payment.id,
      payment.order_id || '',
      'PAID',
      source,
    ]);
  } catch (err) {
    // Log but don't fail — we never want a Sheet error to cause Razorpay to retry
    console.error('[razorpay-webhook] Sheet write failed:', err);
  }

  // 8 — Send team alert (gracefully skipped if email not configured)
  try {
    await sendTeamAlert(
      `New Order — ${variant} × ${quantity} — ₹${amountRupees}`,
      `
      <div style="font-family:sans-serif;max-width:480px;">
        <h2 style="margin-bottom:8px;">New Order Received</h2>
        <table style="border-collapse:collapse;width:100%;">
          <tr><td style="padding:6px 12px 6px 0;color:#666;">Name</td>      <td style="padding:6px 0;"><strong>${name || '—'}</strong></td></tr>
          <tr><td style="padding:6px 12px 6px 0;color:#666;">Email</td>     <td style="padding:6px 0;">${payment.email || '—'}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;color:#666;">Phone</td>     <td style="padding:6px 0;">${payment.contact || '—'}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;color:#666;">Address</td>   <td style="padding:6px 0;">${address || '—'}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;color:#666;">City</td>      <td style="padding:6px 0;">${city || '—'}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;color:#666;">State</td>     <td style="padding:6px 0;">${state || '—'}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;color:#666;">Pincode</td>   <td style="padding:6px 0;">${pincode || '—'}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;color:#666;">Product</td>   <td style="padding:6px 0;"><strong>${variant} × ${quantity}</strong></td></tr>
          <tr><td style="padding:6px 12px 6px 0;color:#666;">Amount</td>    <td style="padding:6px 0;"><strong>₹${amountRupees}</strong></td></tr>
          <tr><td style="padding:6px 12px 6px 0;color:#666;">Payment ID</td><td style="padding:6px 0;font-size:12px;">${payment.id}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;color:#666;">Source</td>    <td style="padding:6px 0;"><strong>${source}</strong></td></tr>
        </table>
      </div>`
    );
  } catch (err) {
    console.error('[razorpay-webhook] email alert failed:', err);
  }

  return NextResponse.json({ received: true });
}
