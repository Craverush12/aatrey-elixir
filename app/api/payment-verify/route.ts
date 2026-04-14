import { NextRequest, NextResponse } from 'next/server';
import { verifySignature } from '@/lib/razorpay';
import { appendRow } from '@/lib/sheets';
import { sendTeamAlert, sendGuestConfirmation, orderConfirmationHtml } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      formData,
    } = await req.json();

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json({ error: 'Missing payment fields' }, { status: 400 });
    }

    const valid = verifySignature(razorpay_order_id, razorpay_payment_id, razorpay_signature);
    if (!valid) {
      return NextResponse.json({ error: 'Signature verification failed' }, { status: 400 });
    }

    // Write to Google Sheets ORDERS tab
    await appendRow('ORDERS', [
      formData?.name         ?? '',
      formData?.email        ?? '',
      formData?.phone        ?? '',
      formData?.address      ?? '',
      formData?.pincode      ?? '',
      formData?.quantity     ?? '',
      formData?.variant      ?? '',
      formData?.type         ?? '',
      formData?.giftMessage  ?? '',
      formData?.amount       ?? '',
      razorpay_order_id,
      razorpay_payment_id,
      'PAID',
    ]);

    // Send confirmation email to customer
    if (formData?.email) {
      await sendGuestConfirmation(
        formData.email,
        'Order Confirmed',
        orderConfirmationHtml(
          formData.name ?? 'Valued Customer',
          formData.quantity ?? 1,
          formData.variant ?? 'Standard'
        )
      );
    }

    // Alert team
    await sendTeamAlert(
      'New Order Received',
      `<p>New order from ${formData?.name ?? 'Unknown'} (${formData?.email}).</p>
       <p>Quantity: ${formData?.quantity} · Variant: ${formData?.variant}</p>
       <p>Razorpay Order ID: ${razorpay_order_id}</p>`
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[payment-verify]', err);
    return NextResponse.json({ error: 'Payment verification failed' }, { status: 500 });
  }
}
