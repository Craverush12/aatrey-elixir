import { NextRequest, NextResponse } from 'next/server';
import { razorpay } from '@/lib/razorpay';

export async function POST(req: NextRequest) {
  try {
    const { amount, currency = 'INR', receipt } = await req.json();

    if (!amount || typeof amount !== 'number' || amount <= 0) {
      return NextResponse.json(
        { error: 'Invalid amount' },
        { status: 400 }
      );
    }

    const order = await razorpay.orders.create({
      amount:   Math.round(amount * 100), // Razorpay expects paise
      currency,
      receipt:  receipt ?? `buransh_${Date.now()}`,
    });

    return NextResponse.json({ orderId: order.id, amount: order.amount, currency: order.currency });
  } catch (err) {
    console.error('[create-order]', err);
    return NextResponse.json({ error: 'Order creation failed' }, { status: 500 });
  }
}
