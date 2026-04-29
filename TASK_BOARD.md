# BURANSH Execution Board

Date initialized: 2026-04-22
Last updated: 2026-04-25
Source: [FINAL_AUDIT_SCOPE.md](./FINAL_AUDIT_SCOPE.md)

## Branding Guardrails

- Preserve the BURANSH palette, typography, editorial tone, and motion language.
- Do not redesign sections unless required for responsiveness, accessibility, performance, or broken states.
- Keep components bespoke and aligned with the current premium editorial aesthetic.
- Do not invent prices, certification numbers, testimonials, identities, impact metrics, or legal claims.

## Task List

| ID | Task | Status | Notes |
| --- | --- | --- | --- |
| T1 | Release-gate stability | `done` | Lint/build pass; archive JSX excluded; Next root warning resolved |
| T2 | Encoding cleanup | `done` | Mojibake removed from live app/source surfaces scanned during closeout |
| T3 | Launch-content hardening | `done` | Public TODO/TBC placeholders removed; unapproved factual sections hidden or neutralized |
| T4 | API and env hardening | `done` | Shared API helpers, Zod schemas, safer env access, consistent client error shapes |
| T5 | Loading, mobile, accessibility polish | `review` | Route loading/error and `/thank-you` added; browser/device visual QA still recommended |
| T6 | Documentation and QA closeout | `done` | README, audit, task board, review request, review brief, and docs inventory updated |
| T7 | Media closeout prep | `done` | Live image refs normalized to WebP, image-generation manifest added, lint/build pass on 2026-04-25 |
| R1 | Cross-brand review | `review` | Needs final human/design review against luxury bar and real-device QA |

## Current Release Gate

Last verified: 2026-04-25

```bash
$env:NODE_OPTIONS='--max-old-space-size=4096'; npm run lint
$env:NODE_OPTIONS='--max-old-space-size=4096'; npm run build
```

Both commands pass.

## Remaining Non-Code Inputs

- Razorpay payment destination URLs.
- Final prices and gifting quote policy.
- Legal/compliance approval for claims.
- Image/video/copy publication rights.
- Certification or FSSAI numbers if public.
- Testimonials, women profiles, documentary metadata, and impact numbers if those sections should be made public.
- Production Resend, Google Sheets, and recipient email setup.

## Handoff Notes

- The site is launch-safe by hiding or neutralizing unapproved facts.
- The site is not final-content-complete until the client supplies and approves the inputs listed in [CLIENT_REVIEW_REQUEST.md](./CLIENT_REVIEW_REQUEST.md).
- Keep `FINAL_AUDIT_SCOPE.md` as the source of current status; older pre-fix audit content has been replaced.
