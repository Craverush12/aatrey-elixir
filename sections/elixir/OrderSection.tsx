'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Image from 'next/image';
import OrnamentLine from '@/components/ui/OrnamentLine';
import { T } from '@/lib/tokens';
import { BRAND } from '@/lib/brand-content';

/* ── Zod schema ─────────────────────────────────────────── */
const orderSchema = z.object({
  name:        z.string().min(2, 'Name is required'),
  phone:       z.string().min(10, 'Valid phone number required'),
  email:       z.string().email('Valid email required'),
  address:     z.string().min(10, 'Full address required'),
  pincode:     z.string().length(6, '6-digit pincode required').regex(/^\d+$/, 'Numbers only'),
  quantity:    z.number().min(1).max(24),
  variant:     z.enum(['standard', 'sugarfree']),
  type:        z.enum(['personal', 'gift-single', 'gift-pair', 'gift-collection']),
  giftMessage: z.string().max(200).optional(),
});

type OrderFormData = z.infer<typeof orderSchema>;

/* ── Razorpay window type ────────────────────────────────── */
declare global {
  interface Window {
    Razorpay: new (options: Record<string, unknown>) => { open(): void };
  }
}

/* ── Inline form field component ───────────────────────────── */
function Field({
  label,
  error,
  children,
}: {
  label:    string;
  error?:   string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        style={{
          display:       'block',
          fontFamily:    'sans-serif',
          fontSize:      '7px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color:         T.muted,
          marginBottom:  '6px',
        }}
      >
        {label}
      </label>
      {children}
      {error && (
        <p style={{ fontFamily: `'EB Garamond', serif`, fontSize: '12px', color: T.crimson, fontStyle: 'italic', marginTop: '4px' }}>
          {error}
        </p>
      )}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width:         '100%',
  background:    T.ivory,
  border:        `1px solid ${T.border}`,
  borderBottom:  `1px solid ${T.borderD}`,
  color:         T.ink,
  padding:       '10px 12px',
  fontFamily:    `'EB Garamond', serif`,
  fontSize:      '15px',
  outline:       'none',
  transition:    `border-color 400ms ${T.ease}`,
};

/* ── Order summary sidebar ─────────────────────────────────── */
function OrderSummary({
  quantity,
  variant,
  type,
}: {
  quantity: number;
  variant:  string;
  type:     string;
}) {
  return (
    <div
      className="order-sidebar"
      style={{
        position:       'sticky',
        top:            '80px',
        background:     T.parchment,
        border:         `1px solid ${T.border}`,
        padding:        '28px 24px',
      }}
    >
      {/* Bottle image */}
      <div style={{ position: 'relative', width: '100%', height: '200px', marginBottom: '20px', overflow: 'hidden' }}>
        <Image
          src="/images/bottle-editorial.png"
          alt="BURANSH 750ml Himalayan Rhododendron Floral Concentrate"
          fill
          style={{ objectFit: 'contain', objectPosition: 'center' }}
          sizes="300px"
        />
      </div>

      <p
        style={{
          fontFamily:    'sans-serif',
          fontSize:      '7px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color:         T.crimson,
          marginBottom:  '10px',
        }}
      >
        ORDER SUMMARY
      </p>

      <h3
        style={{
          fontFamily:    `'Cormorant Garamond', serif`,
          fontSize:      '22px',
          fontStyle:     'italic',
          color:         T.ink,
          marginBottom:  '16px',
        }}
      >
        {BRAND.name}
      </h3>

      <div style={{ marginBottom: '14px' }}>
        <OrnamentLine color={T.border} width={60} />
      </div>

      {[
        { label: 'Quantity',  value: `${quantity} bottle${quantity > 1 ? 's' : ''}` },
        { label: 'Variant',   value: variant === 'sugarfree' ? 'Sugar-Free' : 'Standard' },
        { label: 'Order type', value: type === 'personal' ? 'Personal' : `Gift — ${type.split('-').slice(1).join(' ')}` },
      ].map(({ label, value }) => (
        <div
          key={label}
          style={{
            display:        'flex',
            justifyContent: 'space-between',
            padding:        '8px 0',
            borderBottom:   `1px solid ${T.border}50`,
          }}
        >
          <p style={{ fontFamily: `'EB Garamond', serif`, fontSize: '13px', color: T.muted, fontStyle: 'italic' }}>
            {label}
          </p>
          <p style={{ fontFamily: `'EB Garamond', serif`, fontSize: '13px', color: T.ink }}>
            {value}
          </p>
        </div>
      ))}

      <div
        style={{
          background:  T.ivory,
          border:      `1px solid ${T.border}`,
          padding:     '12px',
          marginTop:   '16px',
          textAlign:   'center',
        }}
      >
        {/* TODO: confirm with client before launch — [price per bottle] */}
        <p style={{ fontFamily: `'EB Garamond', serif`, fontSize: '13px', fontStyle: 'italic', color: T.muted }}>
          Price on request — contact us for details.
        </p>
      </div>

      {/* Trust bar */}
      <div
        style={{
          marginTop:  '20px',
          display:    'flex',
          flexWrap:   'wrap',
          gap:        '8px',
          justifyContent: 'center',
        }}
      >
        {['Razorpay Secured', 'SSL', 'FSSAI', '7-day Return'].map((badge) => (
          <span
            key={badge}
            style={{
              border:        `1px solid ${T.border}`,
              color:         T.muted,
              fontFamily:    'sans-serif',
              fontSize:      '7px',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              padding:       '3px 8px',
            }}
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Main Form ──────────────────────────────────────────────── */
function OrderFormInner() {
  const params  = useSearchParams();
  const router  = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError]           = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      variant:  (params.get('variant') as 'standard' | 'sugarfree') ?? 'standard',
      type:     (params.get('type') as OrderFormData['type'])        ?? 'personal',
      quantity: Number(params.get('quantity') ?? 1),
    },
  });

  const watchedValues = watch();

  // Load Razorpay script
  useEffect(() => {
    const script  = document.createElement('script');
    script.src    = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async  = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  const onSubmit = async (data: OrderFormData) => {
    setSubmitting(true);
    setError(null);

    try {
      // 1. Create Razorpay order
      const orderRes = await fetch('/api/create-order', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({
          // TODO: confirm with client before launch — [price per bottle]
          amount:  999 * data.quantity, // placeholder amount ₹999/bottle
          currency:'INR',
          receipt: `BURANSH_${Date.now()}`,
        }),
      });

      if (!orderRes.ok) throw new Error('Order creation failed');
      const { orderId, amount } = await orderRes.json();

      // 2. Open Razorpay checkout
      await new Promise<void>((resolve, reject) => {
        const rzp = new window.Razorpay({
          key:         process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ?? '',
          amount,
          order_id:    orderId,
          name:        'BURANSH by Aatrey Elixir',
          description: `${BRAND.product} × ${data.quantity}`,
          prefill: {
            name:    data.name,
            email:   data.email,
            contact: data.phone,
          },
          theme: { color: T.crimson },
          handler: async (response: {
            razorpay_order_id:   string;
            razorpay_payment_id: string;
            razorpay_signature:  string;
          }) => {
            // 3. Verify payment
            const verifyRes = await fetch('/api/payment-verify', {
              method:  'POST',
              headers: { 'Content-Type': 'application/json' },
              body:    JSON.stringify({
                razorpay_order_id:   response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature:  response.razorpay_signature,
                formData:            data,
              }),
            });

            if (verifyRes.ok) {
              resolve();
              router.push('/thank-you');
            } else {
              reject(new Error('Payment verification failed'));
            }
          },
          modal: {
            ondismiss: () => reject(new Error('Payment cancelled')),
          },
        });
        rzp.open();
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Payment failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="order"
      style={{
        background:  T.ivory,
        borderTop:   `1px solid ${T.border}`,
        borderBottom:`1px solid ${T.border}`,
        padding:     '80px clamp(24px, 8vw, 120px)',
      }}
    >
      <style>{`
        @media(max-width:480px){
          .order-two-col{grid-template-columns:1fr!important}
          .order-three-col{grid-template-columns:1fr!important}
          .order-sidebar{position:static!important}
        }
        @media(max-width:767px){.order-main-grid{grid-template-columns:1fr!important}}
      `}</style>
      <p
        style={{
          fontFamily:    'sans-serif',
          fontSize:      '7px',
          letterSpacing: '5px',
          textTransform: 'uppercase',
          color:         T.crimson,
          marginBottom:  '14px',
        }}
      >
        ORDER
      </p>

      <h2
        style={{
          fontFamily:    `'Cormorant Garamond', serif`,
          fontSize:      'clamp(24px, 3.5vw, 40px)',
          fontWeight:    300,
          fontStyle:     'italic',
          color:         T.ink,
          letterSpacing: '-0.3px',
          marginBottom:  '40px',
        }}
      >
        Order the Elixir.
      </h2>

      <div
        className="order-main-grid"
        style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap:                 '48px 40px',
          alignItems:          'flex-start',
        }}
      >
        {/* Order summary sidebar */}
        <OrderSummary
          quantity={watchedValues.quantity ?? 1}
          variant={watchedValues.variant ?? 'standard'}
          type={watchedValues.type ?? 'personal'}
        />

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          noValidate
        >
          <Field label="Full Name *" error={errors.name?.message}>
            <input
              {...register('name')}
              type="text"
              placeholder="Your full name"
              style={inputStyle}
              onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.crimson; }}
              onBlur={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.borderD; }}
            />
          </Field>

          <div className="order-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <Field label="Phone *" error={errors.phone?.message}>
              <input
                {...register('phone')}
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                style={inputStyle}
                onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.crimson; }}
                onBlur={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.borderD; }}
              />
            </Field>

            <Field label="Email *" error={errors.email?.message}>
              <input
                {...register('email')}
                type="email"
                placeholder="your@email.com"
                style={inputStyle}
                onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.crimson; }}
                onBlur={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.borderD; }}
              />
            </Field>
          </div>

          <Field label="Delivery Address *" error={errors.address?.message}>
            <textarea
              {...register('address')}
              placeholder="Full delivery address"
              rows={3}
              style={{ ...inputStyle, resize: 'vertical' }}
              onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.crimson; }}
              onBlur={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.borderD; }}
            />
          </Field>

          <Field label="Pincode *" error={errors.pincode?.message}>
            <input
              {...register('pincode')}
              type="text"
              placeholder="6-digit pincode"
              maxLength={6}
              style={{ ...inputStyle, maxWidth: '160px' }}
              onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.crimson; }}
              onBlur={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.borderD; }}
            />
          </Field>

          <div className="order-three-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
            <Field label="Quantity *" error={errors.quantity?.message}>
              <input
                {...register('quantity', { valueAsNumber: true })}
                type="number"
                min={1}
                max={24}
                style={inputStyle}
                onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.crimson; }}
                onBlur={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.borderD; }}
              />
            </Field>

            <Field label="Variant *" error={errors.variant?.message}>
              <select
                {...register('variant')}
                style={{ ...inputStyle, cursor: 'pointer', appearance: 'none' }}
                onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.crimson; }}
                onBlur={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.borderD; }}
              >
                <option value="standard">Standard</option>
                <option value="sugarfree">Sugar-Free</option>
              </select>
            </Field>

            <Field label="Type *" error={errors.type?.message}>
              <select
                {...register('type')}
                style={{ ...inputStyle, cursor: 'pointer', appearance: 'none' }}
                onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.crimson; }}
                onBlur={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.borderD; }}
              >
                <option value="personal">Personal</option>
                <option value="gift-single">Gift — The Single</option>
                <option value="gift-pair">Gift — The Pair</option>
                <option value="gift-collection">Gift — The Collection</option>
              </select>
            </Field>
          </div>

          <Field label="Gift Message (optional)" error={errors.giftMessage?.message}>
            <textarea
              {...register('giftMessage')}
              placeholder="Personal message to include with your gift (max 200 characters)"
              rows={2}
              maxLength={200}
              style={{ ...inputStyle, resize: 'none' }}
              onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.crimson; }}
              onBlur={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.borderD; }}
            />
          </Field>

          {error && (
            <div
              style={{
                background:  '#FFF0EE',
                border:      `1px solid ${T.crimson}40`,
                padding:     '12px 16px',
              }}
            >
              <p style={{ fontFamily: `'EB Garamond', serif`, fontSize: '14px', color: T.crimson, fontStyle: 'italic' }}>
                {error}
              </p>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting}
            style={{
              background:    submitting ? T.parchment : T.crimson,
              border:        'none',
              color:         submitting ? T.muted : T.ivory,
              padding:       '18px 32px',
              cursor:        submitting ? 'wait' : 'pointer',
              fontFamily:    'sans-serif',
              fontSize:      '10px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              width:         '100%',
              transition:    `all 400ms ${T.ease}`,
            }}
            onMouseEnter={(e) => {
              if (!submitting) (e.currentTarget as HTMLElement).style.background = T.crimsonD;
            }}
            onMouseLeave={(e) => {
              if (!submitting) (e.currentTarget as HTMLElement).style.background = T.crimson;
            }}
          >
            {submitting ? 'Processing…' : 'Pay with Razorpay'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default function OrderSection() {
  return (
    <Suspense fallback={<div style={{ height: '600px', background: T.ivory }} />}>
      <OrderFormInner />
    </Suspense>
  );
}
