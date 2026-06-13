'use client';

import { Suspense, useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { GhostBtn } from '@/components/ui/Button';
import OrnamentLine from '@/components/ui/OrnamentLine';
import { T } from '@/lib/tokens';
import { BRAND } from '@/lib/brand-content';
import { getPaymentUrl, validateCoupon, COUPONS, ProductVariant, CouponCode } from '@/lib/purchase';

/* ── Sparkle burst (CSS-only, no library) ─────────────────── */
const SPARKS = Array.from({ length: 8 }, (_, i) => i);

function Sparkles({ visible }: { visible: boolean }) {
  if (!visible) return null;
  return (
    <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      <style>{`
        @keyframes spark {
          0%   { transform: translate(0,0) scale(1); opacity: 1; }
          100% { transform: translate(var(--tx), var(--ty)) scale(0); opacity: 0; }
        }
        .spark { position: absolute; width: 5px; height: 5px; border-radius: 50%;
                 animation: spark 700ms ease-out forwards; top: 50%; left: 50%; }
      `}</style>
      {SPARKS.map((i) => {
        const angle  = (i / SPARKS.length) * 360;
        const dist   = 38 + Math.random() * 22;
        const tx     = Math.cos((angle * Math.PI) / 180) * dist;
        const ty     = Math.sin((angle * Math.PI) / 180) * dist;
        const colors = [T.crimson, T.gold, T.green, '#fff'];
        return (
          <div
            key={i}
            className="spark"
            style={{
              background: colors[i % colors.length],
              '--tx': `${tx}px`,
              '--ty': `${ty}px`,
              animationDelay: `${i * 40}ms`,
            } as React.CSSProperties}
          />
        );
      })}
    </div>
  );
}

/* ── Product card ─────────────────────────────────────────── */
function ProductPurchaseCard({
  variant, title, body, price, selected, unlocked, coupon,
}: {
  variant:  ProductVariant;
  title:    string;
  body:     string;
  price:    number | null;
  selected: boolean;
  unlocked: boolean;
  coupon:   CouponCode | null;
}) {
  const paymentUrl       = getPaymentUrl(variant, coupon);
  const discountedPrice  = coupon ? COUPONS[coupon].discountedPrice : null;

  return (
    <div style={{
      background:    selected ? T.parchment : T.ivory,
      border:        selected ? `2px solid ${T.crimson}` : `1px solid ${T.border}`,
      padding:       '28px 24px',
      display:       'flex',
      flexDirection: 'column',
      gap:           '16px',
      transition:    `border 300ms ease`,
    }}>
      <div>
        {selected && (
          <p style={{ fontFamily: 'sans-serif', fontSize: '7px', letterSpacing: '3px',
            textTransform: 'uppercase', color: T.crimson, marginBottom: '10px', fontWeight: 700 }}>
            Selected
          </p>
        )}

        <h3 style={{ fontFamily: `'Cormorant Garamond', serif`, fontSize: 'clamp(22px, 3vw, 32px)',
          fontStyle: 'italic', fontWeight: 300, color: T.ink, marginBottom: '8px' }}>
          {title}
        </h3>

        {/* Price */}
        {price !== null && (
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
            <p style={{
              fontFamily: 'sans-serif', fontSize: '13px', letterSpacing: '2px',
              textTransform: 'uppercase', fontWeight: 700,
              color:      unlocked ? T.crimson : T.muted,
              transition: 'color 400ms ease',
            }}>
              Rs. {unlocked && discountedPrice ? discountedPrice.toLocaleString('en-IN') : price.toLocaleString('en-IN')}
            </p>
            {unlocked && discountedPrice && (
              <p style={{ fontFamily: 'sans-serif', fontSize: '10px', letterSpacing: '1px',
                textDecoration: 'line-through', color: T.muted, fontWeight: 400 }}>
                Rs. {price.toLocaleString('en-IN')}
              </p>
            )}
          </div>
        )}

        <p style={{ fontFamily: `'EB Garamond', serif`, fontSize: '15px', fontStyle: 'italic',
          color: T.muted, lineHeight: 1.7, fontWeight: 500 }}>
          {body}
        </p>
      </div>

      {unlocked && paymentUrl ? (
        <a
          href={paymentUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', justifyContent: 'center', alignItems: 'center',
            background: T.crimson, color: T.ivory, textDecoration: 'none',
            padding: '16px 24px', fontFamily: 'sans-serif', fontSize: '9px',
            letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 700,
            transition: `background 400ms ${T.ease}`,
          }}
        >
          Buy Now · Rs. {(discountedPrice ?? price ?? 0).toLocaleString('en-IN')}
        </a>
      ) : (
        <div style={{
          display: 'inline-flex', justifyContent: 'center', alignItems: 'center',
          background: T.linen, color: T.muted,
          padding: '16px 24px', fontFamily: 'sans-serif', fontSize: '9px',
          letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 700,
          userSelect: 'none',
        }}>
          Unlock price below ↓
        </div>
      )}
    </div>
  );
}

/* ── Unlock banner ────────────────────────────────────────── */
function UnlockSection({
  onUnlock, preRef,
}: {
  onUnlock: (coupon: CouponCode) => void;
  preRef?: CouponCode | null;
}) {
  const [open, setOpen]         = useState(false);
  const [code, setCode]         = useState('');
  const [state, setState]       = useState<'idle' | 'invalid'>('idle');
  const [sparkling, setSparkling] = useState(false);
  const inputRef                = useRef<HTMLInputElement>(null);

  // Auto-unlock if pre-ref was passed (e.g. from /bm page)
  useEffect(() => {
    if (preRef) {
      setSparkling(true);
      onUnlock(preRef);
      setTimeout(() => setSparkling(false), 900);
    }
  }, [preRef]); // eslint-disable-line react-hooks/exhaustive-deps

  function tryUnlock() {
    const result = validateCoupon(code);
    if (result) {
      setSparkling(true);
      onUnlock(result);
      setTimeout(() => setSparkling(false), 900);
    } else {
      setState('invalid');
    }
  }

  return (
    <div style={{ marginTop: '4px', marginBottom: '24px' }}>
      {!open ? (
        <button
          onClick={() => { setOpen(true); setTimeout(() => inputRef.current?.focus(), 80); }}
          style={{
            display:       'flex',
            alignItems:    'center',
            gap:           '10px',
            background:    'none',
            border:        `1px dashed ${T.borderD}`,
            padding:       '14px 22px',
            cursor:        'pointer',
            width:         '100%',
            justifyContent:'center',
            transition:    `border-color 300ms ease`,
          }}
        >
          <span style={{ fontSize: '14px' }}>🔒</span>
          <span style={{
            fontFamily: 'sans-serif', fontSize: '8px', letterSpacing: '3px',
            textTransform: 'uppercase', color: T.ink, fontWeight: 700,
          }}>
            Have an invite code? Unlock early supporter price
          </span>
          <span style={{
            fontFamily: 'sans-serif', fontSize: '8px', letterSpacing: '1px',
            color: T.crimson, fontWeight: 700,
          }}>
            →
          </span>
        </button>
      ) : (
        <div style={{ border: `1px solid ${T.borderD}`, padding: '20px 24px', background: T.parchment }}>
          <p style={{ fontFamily: 'sans-serif', fontSize: '7px', letterSpacing: '4px',
            textTransform: 'uppercase', color: T.crimson, marginBottom: '12px' }}>
            ENTER YOUR CODE
          </p>
          <div style={{ display: 'flex', gap: 0 }}>
            <input
              ref={inputRef}
              type="text"
              value={code}
              onChange={(e) => { setCode(e.target.value.toUpperCase()); setState('idle'); }}
              onKeyDown={(e) => e.key === 'Enter' && tryUnlock()}
              placeholder="e.g. BURANSH"
              style={{
                flex: 1, padding: '13px 16px',
                border: `1px solid ${state === 'invalid' ? T.crimson : T.border}`,
                borderRight: 'none', background: T.ivory,
                fontFamily: 'sans-serif', fontSize: '11px', letterSpacing: '3px',
                color: T.ink, outline: 'none', textTransform: 'uppercase',
              }}
            />
            <button
              onClick={tryUnlock}
              disabled={!code.trim()}
              style={{
                padding: '13px 22px',
                background: code.trim() ? T.crimson : T.linen,
                border: `1px solid ${state === 'invalid' ? T.crimson : T.border}`,
                color: code.trim() ? T.ivory : T.muted,
                fontFamily: 'sans-serif', fontSize: '8px', letterSpacing: '2.5px',
                textTransform: 'uppercase', fontWeight: 700,
                cursor: code.trim() ? 'pointer' : 'default',
                transition: `background 300ms ${T.ease}`,
                whiteSpace: 'nowrap',
              }}
            >
              Unlock
            </button>
          </div>
          {state === 'invalid' && (
            <p style={{ fontFamily: `'EB Garamond', serif`, fontSize: '13px',
              fontStyle: 'italic', color: T.crimson, marginTop: '8px' }}>
              That code isn&apos;t recognised — check with whoever shared it.
            </p>
          )}
          <div style={{ position: 'relative', marginTop: '8px', height: '4px' }}>
            <Sparkles visible={sparkling} />
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Celebration banner (shown after unlock) ──────────────── */
function UnlockedBanner({ coupon }: { coupon: CouponCode }) {
  return (
    <>
      <style>{`
        @keyframes bannerIn { from { opacity:0; transform: translateY(-8px) scale(0.98); }
                              to   { opacity:1; transform: translateY(0)     scale(1);    } }
        .unlock-banner { animation: bannerIn 400ms cubic-bezier(0.22,1,0.36,1) both; }
      `}</style>
      <div
        className="unlock-banner"
        style={{
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'center',
          gap:            '12px',
          background:     `${T.green}15`,
          border:         `1px solid ${T.green}`,
          padding:        '14px 20px',
          marginBottom:   '20px',
          position:       'relative',
          overflow:       'hidden',
        }}
      >
        <span style={{ fontSize: '16px' }}>✨</span>
        <div>
          <p style={{ fontFamily: 'sans-serif', fontSize: '8px', letterSpacing: '3px',
            textTransform: 'uppercase', color: T.green, fontWeight: 700, marginBottom: '2px' }}>
            {COUPONS[coupon].label} price activated
          </p>
          <p style={{ fontFamily: `'EB Garamond', serif`, fontSize: '14px', fontStyle: 'italic',
            color: T.ink, opacity: 0.75 }}>
            Rs. 800 — your exclusive early supporter price is now active on the buttons above.
          </p>
        </div>
        <span style={{ fontSize: '16px' }}>✨</span>
      </div>
    </>
  );
}

/* ── Main inner component ─────────────────────────────────── */
function OrderInner() {
  const params          = useSearchParams();
  const selectedVariant = params.get('variant') === 'sugarfree' ? 'sugarfree' : 'standard';
  const refParam        = params.get('ref');

  const [coupon, setCoupon]     = useState<CouponCode | null>(null);
  const [unlocked, setUnlocked] = useState(false);

  // Pre-unlock for direct ref links (e.g. ?ref=bm)
  const preRef: CouponCode | null =
    refParam?.toUpperCase() === 'BM' ? 'BEDROOMMASTERY' : null;

  function handleUnlock(c: CouponCode) {
    setCoupon(c);
    setUnlocked(true);
  }

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

      <div className="order-link-grid" style={{
        display: 'grid', gridTemplateColumns: 'minmax(260px, 0.8fr) minmax(280px, 1.2fr)',
        gap: '44px', alignItems: 'center',
      }}>
        {/* Visual */}
        <div className="order-visual" style={{
          position: 'relative', minHeight: '420px',
          background: T.parchment, border: `1px solid ${T.border}`, overflow: 'hidden',
        }}>
          <Image src="/images/bottle-editorial.webp"
            alt="BURANSH Himalayan Rhododendron Floral Concentrate bottle"
            fill style={{ objectFit: 'contain', objectPosition: 'center' }}
            sizes="(max-width: 768px) 100vw, 35vw"
          />
        </div>

        {/* Copy + cards */}
        <div>
          <p style={{ fontFamily: 'sans-serif', fontSize: '7px', letterSpacing: '5px',
            textTransform: 'uppercase', color: T.crimson, marginBottom: '14px' }}>
            ORDER
          </p>

          <h2 style={{ fontFamily: `'Cormorant Garamond', serif`, fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 300, fontStyle: 'italic', color: T.ink, marginBottom: '16px' }}>
            Order the Elixir.
          </h2>

          <div style={{ marginBottom: '20px' }}>
            <OrnamentLine color={T.border} width={80} />
          </div>

          <p style={{ fontFamily: `'EB Garamond', serif`, fontSize: 'clamp(15px, 1.7vw, 18px)',
            fontStyle: 'italic', color: T.ink, lineHeight: 1.8, opacity: 0.72,
            marginBottom: '28px', maxWidth: '620px' }}>
            Choose the expression you would like to receive. Unlock your early supporter
            price below before checkout.
          </p>

          {/* Product cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px', marginBottom: '24px' }}>
            <ProductPurchaseCard variant="standard"
              title={BRAND.variants.standard.name} body={BRAND.variants.standard.tag}
              price={BRAND.priceStandard} selected={selectedVariant === 'standard'}
              unlocked={unlocked} coupon={coupon} />
            <ProductPurchaseCard variant="sugarfree"
              title={BRAND.variants.sugarFree.name} body={BRAND.variants.sugarFree.tag}
              price={BRAND.priceSugarFree} selected={selectedVariant === 'sugarfree'}
              unlocked={unlocked} coupon={coupon} />
          </div>

          {/* Celebration banner */}
          {unlocked && coupon && <UnlockedBanner coupon={coupon} />}

          {/* Unlock section */}
          {!unlocked && (
            <UnlockSection onUnlock={handleUnlock} preRef={preRef} />
          )}

          <GhostBtn href="#bulk-order">Enquire for gifting or bulk orders</GhostBtn>
        </div>
      </div>
    </section>
  );
}

function OrderSkeleton() {
  return (
    <section style={{ height: '520px', background: T.ivory,
      borderTop: `1px solid ${T.border}`, borderBottom: `1px solid ${T.border}` }}
      aria-label="Loading order options" />
  );
}

export default function OrderSection() {
  return (
    <Suspense fallback={<OrderSkeleton />}>
      <OrderInner />
    </Suspense>
  );
}
