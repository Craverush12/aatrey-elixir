'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import CompanyLogo from '@/components/CompanyLogo';
import OrnamentLine from '@/components/ui/OrnamentLine';
import { T } from '@/lib/tokens';

interface BottleInfo {
  bottleNumber: number;
  village: { name: string; district: string };
}

function ThankYouInner() {
  const params = useSearchParams();
  const isOrderConfirmation =
    params.get('razorpay_payment_link_status') === 'paid' ||
    params.get('razorpay_payment_id') !== null;

  const [bottleInfo, setBottleInfo] = useState<BottleInfo | null>(null);

  useEffect(() => {
    if (!isOrderConfirmation) return;
    fetch('/api/bottle-info')
      .then((r) => r.json())
      .then((data) => {
        if (data.success) {
          setBottleInfo({ bottleNumber: data.bottleNumber, village: data.village });
        }
      })
      .catch(() => {/* render without bottle info if fetch fails */});
  }, [isOrderConfirmation]);

  return (
    <section
      style={{
        minHeight: '78vh',
        background: T.ivory,
        padding: '140px clamp(24px, 8vw, 120px) 96px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '680px' }}>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '22px' }}>
          <CompanyLogo size={42} useInlineSvg color={T.crimson} />
        </div>

        <p
          style={{
            fontFamily: 'sans-serif',
            fontSize: '8px',
            letterSpacing: '5px',
            textTransform: 'uppercase',
            color: T.crimson,
            marginBottom: '16px',
          }}
        >
          BURANSH
        </p>

        <h1
          style={{
            fontFamily: `'Cormorant Garamond', serif`,
            fontSize: 'clamp(34px, 6vw, 72px)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: T.ink,
            marginBottom: '18px',
          }}
        >
          {isOrderConfirmation ? 'Your bottle is on its way.' : 'Thank you.'}
        </h1>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '28px' }}>
          <OrnamentLine color={T.borderD} width={90} />
        </div>

        {isOrderConfirmation ? (
          <>
            <p
              style={{
                fontFamily: `'EB Garamond', serif`,
                fontSize: 'clamp(16px, 2vw, 20px)',
                fontStyle: 'italic',
                color: T.ink,
                opacity: 0.82,
                lineHeight: 1.85,
                marginBottom: bottleInfo ? '40px' : '32px',
              }}
            >
              Your order has been received. The BURANSH team will prepare your bottle
              by hand — cold-pressed, sealed, and dispatched from Uttarakhand within
              2–3 business days.
            </p>

            {bottleInfo && (
              <div
                style={{
                  border: `1px solid ${T.borderD}`,
                  background: T.parchment,
                  padding: 'clamp(24px, 4vw, 44px) clamp(20px, 5vw, 48px)',
                  marginBottom: '40px',
                  position: 'relative',
                }}
              >
                {/* Corner bracket marks */}
                {(
                  ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'] as const
                ).map((pos) => (
                  <span
                    key={pos}
                    style={{
                      position: 'absolute',
                      width: '10px',
                      height: '10px',
                      borderColor: T.crimson,
                      borderStyle: 'solid',
                      borderWidth:
                        pos === 'topLeft'     ? '1px 0 0 1px'
                        : pos === 'topRight'  ? '1px 1px 0 0'
                        : pos === 'bottomLeft' ? '0 0 1px 1px'
                        : '0 1px 1px 0',
                      top:    pos.startsWith('top')    ? '8px' : 'auto',
                      bottom: pos.startsWith('bottom') ? '8px' : 'auto',
                      left:   pos.endsWith('Left')     ? '8px' : 'auto',
                      right:  pos.endsWith('Right')    ? '8px' : 'auto',
                    }}
                  />
                ))}

                <p
                  style={{
                    fontFamily: 'sans-serif',
                    fontSize: '7px',
                    letterSpacing: '4px',
                    textTransform: 'uppercase',
                    color: T.crimson,
                    marginBottom: '18px',
                  }}
                >
                  BOTTLE RECORD
                </p>

                <p
                  style={{
                    fontFamily: `'Cormorant Garamond', serif`,
                    fontSize: 'clamp(48px, 7vw, 88px)',
                    fontWeight: 300,
                    fontStyle: 'italic',
                    color: T.ink,
                    lineHeight: 1,
                    marginBottom: '6px',
                    letterSpacing: '-1px',
                  }}
                >
                  #{bottleInfo.bottleNumber}
                </p>

                <p
                  style={{
                    fontFamily: 'sans-serif',
                    fontSize: '7px',
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    color: T.muted,
                    marginBottom: '28px',
                  }}
                >
                  AATREY ELIXIR · BURANSH
                </p>

                <div
                  style={{
                    borderTop: `1px solid ${T.border}`,
                    paddingTop: '22px',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '16px 24px',
                    textAlign: 'left',
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontFamily: 'sans-serif',
                        fontSize: '7px',
                        letterSpacing: '3px',
                        textTransform: 'uppercase',
                        color: T.muted,
                        marginBottom: '5px',
                      }}
                    >
                      ORIGIN VILLAGE
                    </p>
                    <p
                      style={{
                        fontFamily: `'Cormorant Garamond', serif`,
                        fontSize: 'clamp(18px, 2.5vw, 24px)',
                        fontStyle: 'italic',
                        fontWeight: 300,
                        color: T.ink,
                        lineHeight: 1.3,
                      }}
                    >
                      {bottleInfo.village.name}
                    </p>
                    <p
                      style={{
                        fontFamily: 'sans-serif',
                        fontSize: '8px',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        color: T.muted,
                        marginTop: '3px',
                      }}
                    >
                      {bottleInfo.village.district}
                    </p>
                  </div>

                  <div>
                    <p
                      style={{
                        fontFamily: 'sans-serif',
                        fontSize: '7px',
                        letterSpacing: '3px',
                        textTransform: 'uppercase',
                        color: T.muted,
                        marginBottom: '5px',
                      }}
                    >
                      HARVEST REGION
                    </p>
                    <p
                      style={{
                        fontFamily: `'Cormorant Garamond', serif`,
                        fontSize: 'clamp(18px, 2.5vw, 24px)',
                        fontStyle: 'italic',
                        fontWeight: 300,
                        color: T.ink,
                        lineHeight: 1.3,
                      }}
                    >
                      Uttarakhand
                    </p>
                    <p
                      style={{
                        fontFamily: 'sans-serif',
                        fontSize: '8px',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        color: T.muted,
                        marginTop: '3px',
                      }}
                    >
                      2,400 – 2,600m
                    </p>
                  </div>
                </div>
              </div>
            )}

            <p
              style={{
                fontFamily: `'EB Garamond', serif`,
                fontSize: 'clamp(15px, 1.8vw, 18px)',
                fontStyle: 'italic',
                color: T.ink,
                opacity: 0.7,
                lineHeight: 1.9,
                marginBottom: '40px',
              }}
            >
              {bottleInfo
                ? `The women of ${bottleInfo.village.name} have been harvesting this flower
                   long before any brand existed to name it. Your bottle carries that knowledge —
                   cold-pressed at source, sealed at altitude, and sent to you with the full
                   weight of where it came from.`
                : `The Pahadi women of Uttarakhand have been harvesting this flower long before
                   any brand existed to name it. Your bottle carries that knowledge — cold-pressed
                   at source, sealed at altitude, and sent to you with the full weight of where
                   it came from.`}
            </p>
          </>
        ) : (
          <p
            style={{
              fontFamily: `'EB Garamond', serif`,
              fontSize: 'clamp(16px, 2vw, 20px)',
              fontStyle: 'italic',
              color: T.ink,
              opacity: 0.72,
              lineHeight: 1.8,
              marginBottom: '32px',
            }}
          >
            Your request has reached the BURANSH table. The team will respond with the next step.
          </p>
        )}

        <Link
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: T.crimson,
            border: `1px solid ${T.borderD}`,
            padding: '13px 28px',
            fontFamily: 'sans-serif',
            fontSize: '9px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            textDecoration: 'none',
          }}
        >
          Return home
        </Link>
      </div>
    </section>
  );
}

export default function ThankYouContent() {
  return (
    <Suspense>
      <ThankYouInner />
    </Suspense>
  );
}
