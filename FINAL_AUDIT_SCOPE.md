# BURANSH Current Launch Audit

Date updated: 2026-04-23
Repo: `buransh`
Audit basis: implementation review, content scan, `npm run lint`, `npm run build`, built-route smoke scan

## Executive Read

The BURANSH website is now technically launchable and no longer has the earlier release-gate blockers.

Current status:

- Lint passes.
- Production build passes.
- Workspace-root warning is resolved through `turbopack.root`.
- Non-runtime blueprint files are excluded from ESLint.
- Customer-visible mojibake and raw placeholder text have been removed from live app surfaces.
- Client-supplied Atri / Atreya shlokas are now visible on the About page.
- Product purchase CTAs use configured payment destinations.
- Gifting, bulk, staycation, Omakase, recipe, waitlist, and contact remain enquiry-led.
- Unapproved factual sections are hidden or neutralized rather than exposed.

## Implemented Closeout Work

- Release gates:
  - Fixed lint failures in nav, footer, and section JSX.
  - Removed stale lint noise from archive/blueprint `.jsx` files.
  - Added Next `turbopack.root` configuration.
  - Normalized negative letter spacing to match the current UI rules.
- Content integrity:
  - Removed visible TODO/TBC strings and launch-unsafe placeholders.
  - Replaced operational or unfinished language with private-access luxury language.
  - Removed public claims such as diabetic-friendly, anti-inflammatory, cardiovascular support, GI-tagged, and age-safety claims.
- Hid unapproved testimonials, named women profiles, documentary details, certification IDs, and impact numbers.
- Added the supplied Atri / Atreya shlokas to the About page while leaving source/citation review as an approval item.
- Commerce:
  - Replaced embedded checkout with payment-link CTAs through:
    - `NEXT_PUBLIC_RAZORPAY_STANDARD_URL`
    - `NEXT_PUBLIC_RAZORPAY_SUGARFREE_URL`
  - Fallback behavior sends users to private access instead of showing disabled payment states.
  - Gifting and bulk are handled by quote/enquiry.
- API and operations:
  - Added shared validation and response helpers.
  - Added shared Zod schemas for form and legacy payment routes.
  - Added safer env access for Resend and Google Sheets.
  - Standardized client-facing API failures.
- UX resilience:
  - Added route-level `loading.tsx`.
  - Added route-level `error.tsx`.
  - Added `/thank-you`.
  - Replaced blank order loading fallback with branded structural loading.
- Documentation:
  - Replaced default README with project-specific setup, env, commerce, launch, and smoke-test docs.
  - Updated task board and client review checklist to match the current state.

## Current Public Behavior

- `/` presents the product story, rituals, private serving notes, origin/process notes, and private releases.
- `/elixir` presents the product, serving rituals, variants, private purchase CTAs, gifting, and bulk enquiry.
- `/about` presents Aatrey, Project Aatmanirbhar, and documentary/private preview content while hiding unapproved named profiles and metadata.
- `/staycation` remains enquiry-led.
- `/more` presents Omakase, private releases, and origin/process notes.
- `/thank-you` exists and builds as a static route.

## Remaining Launch Dependencies

These are not code blockers, but they are still required for a fully approved luxury launch:

- Final Razorpay payment destination URLs.
- Final product prices and gifting quote policy.
- Final legal review of food, wellness, origin, process, and no-additive/no-preservative claims.
- Final publication rights for all images, videos, portraits, copy, and packaging renders.
- Approved FSSAI or other certification/licence details, if they should be displayed.
- Approved testimonials and permission records, if testimonials should return.
- Approved women profile names, quotes, portraits, and permissions, if that section should return.
- Final shloka spelling, transliteration, and citation/source policy if formal sourcing is required.
- Final documentary title, director, runtime, URL, subtitles/captions, and release policy.
- Final Project Aatmanirbhar impact numbers, if public impact metrics should return.
- Final staycation accommodation details, if property details should be public.
- Final operational recipient emails and Google Sheets production spreadsheet.

## Verification Commands

Use a larger Node heap in this workspace if lint/build runs into Node memory limits:

```bash
$env:NODE_OPTIONS='--max-old-space-size=4096'; npm run lint
$env:NODE_OPTIONS='--max-old-space-size=4096'; npm run build
```

Last verified on 2026-04-23:

- `npm run lint`: pass
- `npm run build`: pass

## Recommended Final QA

- Run built app locally with `npm run start -- -p 3001`.
- Visit `/`, `/elixir`, `/about`, `/staycation`, `/more`, `/thank-you`.
- Check desktop around 1440px and mobile around 390px.
- Confirm product CTAs open the configured payment destinations.
- Submit all enquiry forms in staging with real Resend and Google Sheets credentials.
- Confirm no public page contains `TODO`, `TBC`, mojibake, disabled payment text, or unapproved factual content.
