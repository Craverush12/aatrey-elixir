# BURANSH Website

Next.js site for BURANSH by Aatrey Elixir: product story, private product purchase CTAs, gifting and bulk enquiries, staycation enquiries, Omakase enquiries, private serving-note submissions, private release waitlists, and contact capture.

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Production checks:

```bash
npm run lint
npm run build
```

If Node memory is tight in this workspace, use:

```powershell
$env:NODE_OPTIONS='--max-old-space-size=4096'; npm run lint
$env:NODE_OPTIONS='--max-old-space-size=4096'; npm run build
```

## Environment

Required for enquiry forms and operational email:

```bash
RESEND_API_KEY=
FROM_EMAIL=
TEAM_EMAIL=
GOOGLE_SHEETS_CREDENTIALS=
GOOGLE_SHEET_ID=
```

Required for product purchase buttons:

```bash
NEXT_PUBLIC_RAZORPAY_STANDARD_URL=
NEXT_PUBLIC_RAZORPAY_SUGARFREE_URL=
```

Recommended for canonical and Open Graph metadata:

```bash
NEXT_PUBLIC_SITE_URL=
```

Optional legacy payment-verification support:

```bash
RAZORPAY_KEY_SECRET=
NEXT_PUBLIC_RAZORPAY_KEY_ID=
```

`GOOGLE_SHEETS_CREDENTIALS` must be a base64-encoded Google service-account JSON credential. The spreadsheet should contain tabs for `CONTACT`, `BULK_ORDERS`, `STAYCATION_INQUIRIES`, `OMAKASE_INQUIRIES`, `WAITLIST_TEA`, `WAITLIST_JAM`, and `ORDERS` if legacy payment verification is used.

## Commerce Model

Standard and sugar-free product purchase CTAs redirect to configured payment destinations. If a URL is not configured, the CTA routes users to private access enquiry instead of showing a disabled checkout state.

Gifting, bulk orders, staycation, and Omakase remain enquiry-led. Prices, accommodation details, named profiles, testimonials, documentary metadata, impact numbers, and certification numbers stay hidden until approved.

## Launch Checklist

- `npm run lint` passes.
- `npm run build` passes without workspace-root warnings.
- Razorpay/payment destination links are configured and tested.
- Resend sender domain is verified.
- Google Sheets service account has append access to the live spreadsheet.
- Team recipient email is correct.
- No unapproved testimonials, women profiles, certification numbers, prices, property details, or film metadata are visible.
- Legal/compliance review is complete for food, process, origin, no-additive/no-preservative, and sugar-free language.
- Image, video, packaging, portrait, and copy rights are approved for publication.

## Smoke Test

- Visit `/`, `/elixir`, `/about`, `/staycation`, `/more`, and `/thank-you`.
- Check desktop around 1440px and mobile around 390px.
- Open and close the navigation with click/tap and Escape.
- Submit contact, bulk, staycation, Omakase, waitlist, and recipe/forms in a staging environment.
- Confirm product CTAs open the configured payment destinations.
- Confirm enquiry failures show graceful errors and do not expose service details.

## Documentation Map

- [FINAL_EXECUTION_PLAN.md](./FINAL_EXECUTION_PLAN.md): final execution sequence to finish content, imagery, legal/SEO surfaces, QA, and deployment.
- [IMAGE_GENERATION_MANIFEST.md](./IMAGE_GENERATION_MANIFEST.md): exact still-asset file map, ChatGPT 5.5 generation prompts, review rules, and replacement workflow.
- [FINAL_HANDOFF.md](./FINAL_HANDOFF.md): VPS hosting, update SOP, Google Sheets database retrieval, env setup, QA results, and remaining approvals.
- [FINAL_AUDIT_SCOPE.md](./FINAL_AUDIT_SCOPE.md): current implementation status and remaining launch dependencies.
- [TASK_BOARD.md](./TASK_BOARD.md): execution status for the closeout work.
- [CLIENT_REVIEW_REQUEST.md](./CLIENT_REVIEW_REQUEST.md): client inputs still required before final public approval.
- [REVIEW_AGENT_BRIEF.md](./REVIEW_AGENT_BRIEF.md): criteria for final brand/QA review.
- [DOCS_INVENTORY.md](./DOCS_INVENTORY.md): which docs are active, historical, or candidates for deletion.
