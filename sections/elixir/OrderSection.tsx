'use client';

import { Suspense, useState, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { GhostBtn } from '@/components/ui/Button';
import OrnamentLine from '@/components/ui/OrnamentLine';
import { T } from '@/lib/tokens';
import { BRAND } from '@/lib/brand-content';
import { getPaymentUrl, validateCoupon, COUPONS, ProductVariant, CouponCode } from '@/lib/purchase';

function ProductPurchaseCard({
  variant,
  title,
  body,
  price,
  selected,
  coupon,
}: {
  variant: ProductVariant;
  title: string;
  body: string;
  price: number | null;
  selected: boolean;
  coupon: CouponCode | null;
}) {
  const paymentUrl = getPaymentUrl(variant, coupon);
  const discountedPrice = coupon ? COUPONS[coupon].discountedPrice : null;

  return (
    <div
      style={{
        background:    selected ? T.parchment : T.ivory,
        border:        selected ? `2px solid ${T.crimson}` : `1px solid ${T.border}`,
        padding:       '28px 24px',
        display:       'flex',
        flexDirection: 'column',
        gap:           '16px',
      }}
    >
      <div>
        {selected && (
          <p style={{
            fontFamily: 'sans-serif', fontSize: '7px', letterSpacing: '3px',
            textTransform: 'uppercase', color: T.crimson, marginBottom: '10px', fontWeight: 700,
          }}>
            Selected
          </p>
        )}

        <h3 style={{
          fontFamily: `'Cormorant Garamond', serif`, fontSize: 'clamp(22px, 3vw, 32px)',
          fontStyle: 'italic', fontWeight: 300, color: T.ink, marginBottom: '8px',
        }}>
          {title}
        </h3>

        {/* Price display */}
        {price !== null && (
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
            {discountedPrice ? (
              <>
                <p style={{
                  fontFamily: 'sans-serif', fontSize: '11px', letterSpacing: '2.4px',
                  textTransform: 'uppercase', color: T.crimson, fontWeight: 700,
                }}>
                  Rs. {discountedPrice.toLocaleString('en-IN')}
                </p>
                <p style={{
                  fontFamily: 'sans-serif', fontSize: '9px', letterSpacing: '1.5px',
                  textDecoration: 'line-through', color: T.muted, fontWeight: 400,
                }}>
                  Rs. {price.toLocaleString('en-IN')}
                </p>
              </>
            ) : (
              <p style={{
                fontFamily: 'sans-serif', fontSize: '11px', letterSpacing: '2.4px',
                textTransform: 'uppercase', color: T.crimson, marginBottom: '0', fontWeight: 700,
              }}>
                Rs. {price.toLocaleString('en-IN')}
              </p>
            )}
          </div>
        )}

        <p style={{
          fontFamily: `'EB Garamond', serif`, fontSize: '15px', fontStyle: 'italic',
          color: T.muted, lineHeight: 1.7, fontWeight: 500,
        }}>
          {body}
        </p>
      </div>

      {paymentUrl ? (
        <a
          href={paymentUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', justifyContent: 'center', alignItems: 'center',
            background: T.crimson, color: T.ivory, textDecoration: 'none',
            padding: '15px 24px', fontFamily: 'sans-serif', fontSize: '9px',
            letterSpacing: '3px', textTransform: 'uppercase',
            transition: `background 400ms ${T.ease}`, fontWeight: 700,
          }}
        >
          {coupon ? `Buy Now · Rs. ${COUPONS[coupon].discountedPrice.toLocaleString('en-IN')}` : 'Buy Now'}
        </a>
      ) : (
        <a
          href="#bulk-order"
          style={{
            display: 'inline-flex', justifyContent: 'center', alignItems: 'center',
            background: T.parchment, border: `1px solid ${T.border}`, color: T.muted,
            padding: '15px 24px', fontFamily: 'sans-serif', fontSize: '9px',
            letterSpacing: '3px', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 700,
          }}
        >
          Request private access
        </a>
      )}
    </div>
  );
}

function CouponInput({ onApply }: { onApply: (coupon: CouponCode | null, raw: string) => void }) {
  const [value, setValue]     = useState('');
  const [state, setState]     = useState<'idle' | 'valid' | 'invalid'>('idle');
  const [applied, setApplied] = useState<CouponCode | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleApply() {
    const result = validateCoupon(value);
    if (result) {
      setState('valid');
      setApplied(result);
      onApply(result, value);
    } else {
      setState('invalid');
      onApply(null, value);
    }
  }

  function handleRemove() {
    setValue('');
    setState('idle');
    setApplied(null);
    onApply(null, '');
    setTimeout(() => inputRef.current?.focus(), 50);
  }

  return (
    <div style={{ marginTop: '8px' }}>
      {applied ? (
        <div style={{
          display: 'flex', alignItems: 'center', gap: '12px',
          padding: '10px 16px', border: `1px solid ${T.green}`,
          background: `${T.green}10`,
        }}>
          <p style={{
            fontFamily: 'sans-serif', fontSize: '8px', letterSpacing: '2.5px',
            textTransform: 'uppercase', color: T.green, fontWeight: 700, flex: 1,
          }}>
            ✓ {COUPONS[applied].label} — Rs. {COUPONS[applied].discountedPrice.toLocaleString('en-IN')} applied
          </p>
          <button
            onClick={handleRemove}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'sans-serif', fontSize: '7px', letterSpacing: '2px',
              textTransform: 'uppercase', color: T.muted, padding: 0,
            }}
          >
            Remove
          </button>
        </div>
      ) : (
        <div style={{ display: 'flex', gap: '0' }}>
          <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={(e) => { setValue(e.target.value); setState('idle'); }}
            onKeyDown={(e) => e.key === 'Enter' && handleApply()}
            placeholder="Coupon code"
            style={{
              flex: 1, padding: '11px 14px', border: `1px solid ${state === 'invalid' ? T.crimson : T.border}`,
              borderRight: 'none', background: T.ivory, fontFamily: `'EB Garamond', serif`,
              fontSize: '14px', fontStyle: 'italic', color: T.ink,
              outline: 'none', minWidth: 0,
            }}
          />
          <button
            onClick={handleApply}
            disabled={!value.trim()}
            style={{
              padding: '11px 20px', background: value.trim() ? T.ink : T.linen,
              border: `1px solid ${state === 'invalid' ? T.crimson : T.border}`,
              color: value.trim() ? T.ivory : T.muted,
              fontFamily: 'sans-serif', fontSize: '8px', letterSpacing: '2.5px',
              textTransform: 'uppercase', cursor: value.trim() ? 'pointer' : 'default',
              transition: `background 300ms ${T.ease}`, whiteSpace: 'nowrap',
            }}
          >
            Apply
          </button>
        </div>
      )}
      {state === 'invalid' && (
        <p style={{
          fontFamily: `'EB Garamond', serif`, fontSize: '13px', fontStyle: 'italic',
          color: T.crimson, marginTop: '6px',
        }}>
          That code isn't recognised. Please check and try again.
        </p>
      )}
    </div>
  );
}

function OrderInner() {
  const params          = useSearchParams();
  const selectedVariant = params.get('variant') === 'sugarfree' ? 'sugarfree' : 'standard';
  const [coupon, setCoupon] = useState<CouponCode | null>(null);

  return (
    <section
      id="order"
      style={{
        background: T.ivory, borderTop: `1px solid ${T.border}`,
        borderBottom: `1px solid ${T.border}`, padding: '80px clamp(24px, 8vw, 120px)',
      }}
    >
      <style>{`
        @media(max-width:767px){.order-link-grid{grid-template-columns:1fr!important}.order-visual{min-height:260px!important}}
      `}</style>

      <div
        className="order-link-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(260px, 0.8fr) minmax(280px, 1.2fr)',
          gap: '44px', alignItems: 'center',
        }}
      >
        <div
          className="order-visual"
          style={{
            position: 'relative', minHeight: '420px',
            background: T.parchment, border: `1px solid ${T.border}`, overflow: 'hidden',
          }}
        >
          <Image
            src="/images/bottle-editorial.webp"
            alt="BURANSH Himalayan Rhododendron Floral Concentrate bottle"
            fill style={{ objectFit: 'contain', objectPosition: 'center' }}
            sizes="(max-width: 768px) 100vw, 35vw"
          />
        </div>

        <div>
          <p style={{
            fontFamily: 'sans-serif', fontSize: '7px', letterSpacing: '5px',
            textTransform: 'uppercase', color: T.crimson, marginBottom: '14px',
          }}>
            ORDER
          </p>

          <h2 style={{
            fontFamily: `'Cormorant Garamond', serif`, fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 300, fontStyle: 'italic', color: T.ink, marginBottom: '16px',
          }}>
            Order the Elixir.
          </h2>

          <div style={{ marginBottom: '20px' }}>
            <OrnamentLine color={T.border} width={80} />
          </div>

          <p style={{
            fontFamily: `'EB Garamond', serif`, fontSize: 'clamp(15px, 1.7vw, 18px)',
            fontStyle: 'italic', color: T.ink, lineHeight: 1.8, opacity: 0.72,
            marginBottom: '28px', maxWidth: '620px',
          }}>
            Choose the expression you would like to receive. Private gifting, bulk orders,
            and origin stays are handled by enquiry so every request can be prepared with
            the right context.
          </p>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px', marginBottom: '20px',
          }}>
            <ProductPurchaseCard
              variant="standard"
              title={BRAND.variants.standard.name}
              body={BRAND.variants.standard.tag}
              price={BRAND.priceStandard}
              selected={selectedVariant === 'standard'}
              coupon={coupon}
            />
            <ProductPurchaseCard
              variant="sugarfree"
              title={BRAND.variants.sugarFree.name}
              body={BRAND.variants.sugarFree.tag}
              price={BRAND.priceSugarFree}
              selected={selectedVariant === 'sugarfree'}
              coupon={coupon}
            />
          </div>

          {/* Coupon input */}
          <div style={{ maxWidth: '380px', marginBottom: '24px' }}>
            <p style={{
              fontFamily: 'sans-serif', fontSize: '7px', letterSpacing: '3px',
              textTransform: 'uppercase', color: T.muted, marginBottom: '8px',
            }}>
              Have a coupon?
            </p>
            <CouponInput onApply={(c) => setCoupon(c)} />
          </div>

          <GhostBtn href="#bulk-order">Enquire for gifting or bulk orders</GhostBtn>
        </div>
      </div>
    </section>
  );
}

function OrderSkeleton() {
  return (
    <section
      style={{
        height: '520px', background: T.ivory,
        borderTop: `1px solid ${T.border}`, borderBottom: `1px solid ${T.border}`,
      }}
      aria-label="Loading order options"
    />
  );
}

export default function OrderSection() {
  return (
    <Suspense fallback={<OrderSkeleton />}>
      <OrderInner />
    </Suspense>
  );
}
