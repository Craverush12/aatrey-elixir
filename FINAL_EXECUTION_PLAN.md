# BURANSH Final Execution Plan

Last updated: 2026-04-25

## Current Baseline

As of 2026-04-24:

- `npm run lint`: pass
- `npm run build`: pass
- Core public routes already exist: `/`, `/elixir`, `/about`, `/staycation`, `/more`, `/thank-you`
- Core enquiry and waitlist APIs already exist

This means the remaining work is not a rebuild. It is a controlled closeout: final content, final media, legal/SEO surfaces, production wiring, QA, and deployment.

## Core Rule For Finishing Without Waiting

We will finish this site without blocking on external dependencies wherever possible.

- We will create all finishable copy, layout polish, policy pages, metadata, and non-factual visuals ourselves.
- We will use ChatGPT 5.5 image generation thinking model for all required still-image production.
- We will not invent factual claims, certification numbers, testimonials, impact metrics, or named identities.
- We will not publish AI-generated women portraits or harvest imagery as if they are real documented members of Project Aatmanirbhar.
- Anything unverifiable stays hidden, generic, or framed as private access instead of public fact.

## Final Scope Lock

These are the public surfaces we should finish completely in this pass:

1. `/`
2. `/elixir`
3. `/about`
4. `/staycation`
5. `/more`
6. `/thank-you`
7. Footer/contact flow
8. Policy/legal pages:
   - `/privacy`
   - `/terms`
   - `/shipping-returns`
9. SEO/share surfaces:
   - sitemap
   - robots
   - Open Graph image
   - canonical site metadata

These stay hidden unless later backed by real approved data:

- testimonials
- named women profiles
- certification IDs
- documentary metadata beyond generic private-preview framing
- public impact numbers

## Execution Order

### Phase 1: Lock Content And Decisions

Goal: remove all unresolved product and brand ambiguity from the codebase.

- Finalize the launch position: luxury, private-access, origin-led, enquiry-safe.
- Decide that public pricing remains hidden unless we have final approved numbers. If pricing is still uncertain, keep purchase CTAs active through payment links and gifting/bulk as enquiry-led.
- Keep the testimonials and women-profile modules hidden unless we have real publishable material.
- Rewrite any remaining weak or over-claiming lines in `lib/brand-content.ts` to a final approved-safe version.
- Add final legal policy copy for privacy, terms, shipping, returns, refund, and cancellation.

Exit criteria:

- no section depends on missing client inputs to render well
- no unverifiable public claims remain
- every route has final-purpose copy, not provisional copy

### Phase 2: Finish Missing Launch Surfaces

Goal: complete the parts that make the website actually launch-ready, not just design-ready.

- Build the missing policy pages and link them from the footer.
- Add `metadataBase`, canonical metadata, and a production-ready site URL variable.
- Add `app/robots.ts` and `app/sitemap.ts`.
- Create a proper Open Graph / social share image.
- Check favicon, social title, and description consistency across all pages.

Exit criteria:

- legal pages exist and are linked
- search/share metadata is complete
- no dead-end footer or share surfaces remain

### Phase 3: Image Generation Plan

Goal: replace or finalize all required still imagery with a single coherent editorial system.

Detailed execution prompts, output filenames, and review rules now live in `IMAGE_GENERATION_MANIFEST.md`.

#### Style System

Every generated image should follow the same direction:

- premium editorial photography, not ad-banner CGI
- warm ivory, crimson, gold, deep brown, Himalayan dusk tones
- natural light or soft controlled studio light
- tactile materials: glass, wood, linen, petals, cane, stone
- restrained luxury, shallow depth of field, subtle grain
- no loud props, neon colours, fake splash effects, or generic wellness clichés

#### Generation Rules

- Generate 4 strong options per asset, then refine only the best 1-2.
- Keep masters at 2048px to 3072px on the long side.
- Export web assets as WebP where transparency is not required.
- Use PNG only where transparent edges or compositing are required.
- Preserve current file names wherever possible to minimize code churn.
- For bottles or packaging, do not rely on the model for accurate label text. Either keep labels distant/minimal or composite the approved mark later.

#### Asset List

| Asset | Current Usage | Ratio | Direction | Guardrail |
| --- | --- | --- | --- | --- |
| `bottle-editorial` | home hero, elixir hero, order section | 4:5 | Hero bottle portrait on dark editorial set | Keep label elegant; no unreadable fake copy front and centre |
| `bottle-pour` | product intro, recipe/share sections | 3:4 | Bottle pouring into glass with floral liquid | Focus on liquid and glass, not text fidelity |
| `arrival-still-life` | landscape banner, staycation hero | 16:9 | Bottle on tray with mountain-stay atmosphere | Should feel like place, not fake documentary |
| `gifting-collection` | gifting section, product gallery | 3:2 | Refined multi-bottle gifting arrangement | Use real brand colours and packaging rhythm |
| `buransh-flower` | ingredient/product education | 4:5 | Macro of rhododendron bloom and petals | Botanical accuracy matters |
| `buransh-jam` | private releases card | 4:5 | Premium preserve jar editorial still life | Distinct from beverage bottle visual language |
| `buransh-tea` | private releases card | 4:5 | Dried petals / tea service still life | Calm, meditative, not rustic cliché |
| `harvest-atmosphere` | staycation journey | 16:9 | Anonymous harvest walk / baskets / hands / grove | No fake identifiable “real women” documentary framing |
| `flower-hands-detail` | staycation includes | 4:5 | Hands holding freshly plucked bloom | Keep identity non-specific |
| `forest-mosaic` | optional story/support image | 3:2 | Petals, grove, bark, vessels, textiles | Use as abstract brand-world support image |
| `og-cover` | social sharing | 1.91:1 | Single premium hero composition with title-safe space | Must read clearly at thumbnail size |

#### Video Rule

For the current harvest montage:

- keep the existing real montage if rights are cleared
- otherwise replace it with a clearly atmospheric, non-documentary motion piece built from generated stills and slow movement
- do not imply that AI-generated footage is a real documentary record

Exit criteria:

- every live image slot has an approved final asset
- all assets belong to one coherent visual world
- no image creates identity, rights, or authenticity risk

### Phase 4: Integrate And Optimize Media

Goal: convert generated media into clean production assets.

- Stage candidate images in a temporary review folder first.
- Promote selected assets into `public/images`.
- Compress, crop, and test every asset on desktop and mobile.
- Re-check `sizes`, `object-fit`, and mobile focal points in every section using imagery.
- Add poster handling if the montage remains video-led.

Exit criteria:

- no distorted, blurry, or oversized images
- no poor mobile crops
- home, elixir, about, staycation, and more all feel visually complete

### Phase 5: Production Wiring

Goal: make every form and CTA work in the live environment.

- Set production `NEXT_PUBLIC_RAZORPAY_STANDARD_URL`
- Set production `NEXT_PUBLIC_RAZORPAY_SUGARFREE_URL`
- Configure `RESEND_API_KEY`, `FROM_EMAIL`, `TEAM_EMAIL`
- Configure `GOOGLE_SHEETS_CREDENTIALS` and `GOOGLE_SHEET_ID`
- Create and verify all required Google Sheet tabs
- Run live-form tests for contact, recipe submission, bulk inquiry, staycation inquiry, Omakase, and both waitlists

Exit criteria:

- every CTA resolves correctly
- every form writes to the expected sheet and sends the expected email
- no route depends on missing production env

### Phase 6: Final QA Pass

Goal: remove the last visible defects before deployment.

- Run full desktop QA around 1440px and mobile QA around 390px.
- Check nav open/close, Escape handling, body scroll lock, and all anchor jumps.
- Check all pages for overflow, awkward cropping, typography breaks, and low-contrast states.
- Re-run `npm run lint` and `npm run build`.
- Do a final text scan for placeholder copy, encoding issues, and inconsistent punctuation/capitalization.
- Verify forms show graceful success and error states.

Exit criteria:

- visual QA passed on all core routes
- build and lint both pass
- no visible unfinished states remain

### Phase 7: Deploy And Launch

Goal: ship the final site and validate production behavior.

- Deploy using the VPS flow already documented in `FINAL_HANDOFF.md`
- Start with PM2 and reverse proxy through Nginx
- Verify SSL, headers, and route availability
- Smoke test all public routes and all live forms
- Confirm payment links open correctly in production

Exit criteria:

- production site is reachable
- all critical flows are live
- final smoke test is clean

## Practical Page-by-Page Finish List

### Home

- lock hero art
- finalize product intro imagery
- finalize recipe/share visual pairing
- finalize private releases cards
- keep testimonials hidden unless real approved quotes exist

### Elixir

- finalize hero packshot
- finalize gallery stills
- finalize gifting visuals
- confirm order CTA behavior and variant copy

### About

- keep the founder and lineage story strong
- keep women profiles hidden unless they use real approved identities
- keep documentary framed as private preview unless real film metadata is available

### Staycation

- finalize atmospheric, non-deceptive harvest imagery
- keep accommodation specifics enquiry-led unless we have exact approved details
- test booking form thoroughly

### More

- finalize Omakase copy and supporting visuals
- finalize tea and jam waitlist imagery

### Footer And Legal

- add legal links
- verify contact flow
- make sure no footer promise exceeds what operations can deliver

## Definition Of Done

The website is finished when all of the following are true:

- the site still passes lint and build
- the full route set, including legal pages, is present
- every required image has a final generated asset
- all public copy is final and defensible
- no unverifiable claims or fake identities are published
- all forms and purchase links work in production
- desktop and mobile QA are complete
- the deployed site passes the launch smoke test

## Recommended Immediate Next Move

Execute in this exact order:

1. Finish content and policy copy
2. Generate the full still-image set
3. Integrate images and SEO/legal surfaces
4. Wire production env and test forms
5. Run final QA
6. Deploy
