'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { GhostBtn } from '@/components/ui/Button';
import OrnamentLine from '@/components/ui/OrnamentLine';
import { T } from '@/lib/tokens';
import { BRAND } from '@/lib/brand-content';
import { getPaymentUrl, ProductVariant } from '@/lib/purchase';

function ProductPurchaseCard({
  variant,
  title,
  body,
  price,
  selected,
}: {
  variant: ProductVariant;
  title: string;
  body: string;
  price: number | null;
  selected: boolean;
}) {
  const paymentUrl = getPaymentUrl(variant);

  return (
    <div
      style={{
        background: selected ? T.parchment : T.ivory,
        border:     selected ? `2px solid ${T.crimson}` : `1px solid ${T.border}`,
        padding:    '28px 24px',
        display:    'flex',
        flexDirection: 'column',
        gap:        '16px',
      }}
    >
      <div>
        {selected && (
          <p
            style={{
              fontFamily:    'sans-serif',
              fontSize:      '7px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color:         T.crimson,
              marginBottom:  '10px',
              fontWeight:    700,
            }}
          >
            Selected
          </p>
        )}
        <h3
          style={{
            fontFamily: `'Cormorant Garamond', serif`,
            fontSize:   'clamp(22px, 3vw, 32px)',
            fontStyle:  'italic',
            fontWeight: 300,
            color:      T.ink,
            marginBottom: '8px',
          }}
        >
          {title}
        </h3>
        {price !== null && (
          <p
            style={{
              fontFamily:    'sans-serif',
              fontSize:      '11px',
              letterSpacing: '2.4px',
              textTransform: 'uppercase',
              color:         T.crimson,
              marginBottom:  '12px',
              fontWeight:    700,
            }}
          >
            Rs. {price.toLocaleString('en-IN')}
          </p>
        )}
        <p
          style={{
            fontFamily: `'EB Garamond', serif`,
            fontSize:   '15px',
            fontStyle:  'italic',
            color:      T.muted,
            lineHeight: 1.7,
            fontWeight: 500,
          }}
        >
          {body}
        </p>
      </div>

      {paymentUrl ? (
        <a
          href={paymentUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display:        'inline-flex',
            justifyContent: 'center',
            alignItems:     'center',
            background:     T.crimson,
            color:          T.ivory,
            textDecoration: 'none',
            padding:        '15px 24px',
            fontFamily:     'sans-serif',
            fontSize:       '9px',
            letterSpacing:  '3px',
            textTransform:  'uppercase',
            transition:     `background 400ms ${T.ease}`,
            fontWeight:     700,
          }}
        >
          Buy Now
        </a>
      ) : (
        <a
          href="#bulk-order"
          style={{
            display:        'inline-flex',
            justifyContent: 'center',
            alignItems:     'center',
            background:    T.parchment,
            border:        `1px solid ${T.border}`,
            color:         T.muted,
            padding:       '15px 24px',
            fontFamily:    'sans-serif',
            fontSize:      '9px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            textDecoration: 'none',
            fontWeight:    700,
          }}
        >
          Request private access
        </a>
      )}
    </div>
  );
}

function OrderInner() {
  const params = useSearchParams();
  const selectedVariant = params.get('variant') === 'sugarfree' ? 'sugarfree' : 'standard';

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
        @media(max-width:767px){.order-link-grid{grid-template-columns:1fr!important}.order-visual{min-height:260px!important}}
      `}</style>

      <div
        className="order-link-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(260px, 0.8fr) minmax(280px, 1.2fr)',
          gap: '44px',
          alignItems: 'center',
        }}
      >
        <div
          className="order-visual"
          style={{
            position: 'relative',
            minHeight: '420px',
            background: T.parchment,
            border: `1px solid ${T.border}`,
            overflow: 'hidden',
          }}
        >
          <Image
            src="/images/bottle-editorial.webp"
            alt="BURANSH Himalayan Rhododendron Floral Concentrate bottle"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            sizes="(max-width: 768px) 100vw, 35vw"
          />
        </div>

        <div>
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
              fontFamily: `'Cormorant Garamond', serif`,
              fontSize:   'clamp(28px, 4vw, 48px)',
              fontWeight: 300,
              fontStyle:  'italic',
              color:      T.ink,
              marginBottom: '16px',
            }}
          >
            Order the Elixir.
          </h2>

          <div style={{ marginBottom: '20px' }}>
            <OrnamentLine color={T.border} width={80} />
          </div>

          <p
            style={{
              fontFamily: `'EB Garamond', serif`,
              fontSize: 'clamp(15px, 1.7vw, 18px)',
              fontStyle: 'italic',
              color: T.ink,
              lineHeight: 1.8,
              opacity: 0.72,
              marginBottom: '28px',
              maxWidth: '620px',
            }}
          >
            Choose the expression you would like to receive. Private gifting, bulk orders,
            and origin stays are handled by enquiry so every request can be prepared with
            the right context.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '16px',
              marginBottom: '24px',
            }}
          >
            <ProductPurchaseCard
              variant="standard"
              title={BRAND.variants.standard.name}
              body={BRAND.variants.standard.tag}
              price={BRAND.priceStandard}
              selected={selectedVariant === 'standard'}
            />
            <ProductPurchaseCard
              variant="sugarfree"
              title={BRAND.variants.sugarFree.name}
              body={BRAND.variants.sugarFree.tag}
              price={BRAND.priceSugarFree}
              selected={selectedVariant === 'sugarfree'}
            />
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
        height: '520px',
        background: T.ivory,
        borderTop: `1px solid ${T.border}`,
        borderBottom: `1px solid ${T.border}`,
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
