# BURANSH Review Agent Brief

You are reviewing the BURANSH website after release-gate, content-hardening, API-hardening, private-commerce, and documentation tasks are complete.

## Review Objective

Review all completed tasks against:

- the current BURANSH brand and design language
- consistency across routes and shared components
- regression risk
- mobile usability
- loading and error-state quality
- preservation of existing behavior unless the change was required by the task
- hidden-until-approved treatment for unapproved facts

## Current Expected State

- `npm run lint` passes.
- `npm run build` passes.
- Product CTAs use configured payment destination URLs or route to private access enquiry.
- Gifting, bulk, staycation, Omakase, private releases, and serving notes are enquiry/waitlist-led.
- Testimonials, named women profiles, shlok, documentary metadata, impact numbers, prices, and licence/certification IDs are hidden until approved.
- The visible site should not contain `TODO`, `TBC`, mojibake, disabled checkout text, or operational payment-copy language.

## Review Standards

- Prioritize findings, regressions, inconsistencies, and missing tests.
- Treat brand drift as a real defect.
- Flag anything that weakens the editorial premium aesthetic.
- Flag any change that breaks or dilutes existing working behavior.
- Confirm that mobile behavior still feels intentional and not merely compressed.
- Confirm that loading, empty, and error states feel on-brand.
- Confirm that task scope remained contained and did not introduce unrelated redesign.
- Confirm that private-access language feels luxury rather than unfinished.
- Confirm that forms, payment destinations, and `/thank-you` work in staging.

## Required Output Format

1. Findings first, ordered by severity, with file references.
2. Open questions or assumptions.
3. Short summary of what is safe to mark `done`, and what remains blocked on client/legal/ops input.
