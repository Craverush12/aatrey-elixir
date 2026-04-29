import { NextRequest } from 'next/server';
import { apiError, apiSuccess, parseJson } from '@/lib/api';
import { verifySignature } from '@/lib/razorpay';
import { appendRow } from '@/lib/sheets';
import { sendTeamAlert, sendGuestConfirmation, orderConfirmationHtml } from '@/lib/email';
import { paymentVerifySchema } from '@/lib/schemas';

export async function POST(req: NextRequest) {
  try {
    const parsed = await parseJson(req, paymentVerifySchema);
    if (!parsed.success) return apiError(parsed.error);

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      formData,
    } = parsed.data;

    const valid = verifySignature(razorpay_order_id, razorpay_payment_id, razorpay_signature);
    if (!valid) {
      return apiError('Signature verification failed');
    }

    await appendRow('ORDERS', [
      formData.name,
      formData.email,
      formData.phone,
      formData.address,
      formData.pincode,
      formData.quantity,
      formData.variant,
      formData.type,
      formData.giftMessage,
      formData.amount ?? '',
      razorpay_order_id,
      razorpay_payment_id,
      'PAID',
    ]);

    if (formData.email) {
      await sendGuestConfirmation(
        formData.email,
        'Order Confirmed',
        orderConfirmationHtml(
          formData.name || 'Valued Customer',
          formData.quantity,
          formData.variant || 'Standard'
        )
      );
    }

    await sendTeamAlert(
      'New Order Received',
      `<p>New order from ${formData.name || 'Unknown'} (${formData.email || 'no email'}).</p>
       <p>Quantity: ${formData.quantity} · Variant: ${formData.variant || '—'}</p>
       <p>Razorpay Order ID: ${razorpay_order_id}</p>`
    );

    return apiSuccess();
  } catch (err) {
    console.error('[payment-verify]', err);
    return apiError('Payment verification failed', 500);
  }
}
