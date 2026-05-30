FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# Build-time public env vars
ARG NEXT_PUBLIC_SITE_URL
ARG NEXT_PUBLIC_RAZORPAY_STANDARD_URL
ARG NEXT_PUBLIC_RAZORPAY_SUGARFREE_URL

ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_RAZORPAY_STANDARD_URL=$NEXT_PUBLIC_RAZORPAY_STANDARD_URL
ENV NEXT_PUBLIC_RAZORPAY_SUGARFREE_URL=$NEXT_PUBLIC_RAZORPAY_SUGARFREE_URL

RUN NODE_OPTIONS=--max-old-space-size=3072 npm run build

# ── Runner ──────────────────────────────────────────────────
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

RUN addgroup --system --gid 1001 nodejs && \
    adduser  --system --uid 1001 nextjs

COPY --from=builder /app/public        ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static  ./.next/static

USER nextjs
EXPOSE 3000

CMD ["node", "server.js"]
