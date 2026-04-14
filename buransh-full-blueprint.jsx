import { useState, useEffect } from "react";

const C = {
  ivory: "#F5EDD8", parchment: "#EDE3C8", linen: "#E0D0B0",
  crimson: "#C4392B", crimsonD: "#A02E20", gold: "#C4A030",
  umber: "#7A4E1E", ink: "#18100A", muted: "#9C8868",
  pale: "#A89878", border: "#D8C8A8", green: "#3D5C3A",
  blue: "#1A3A5C",
  ease: "cubic-bezier(0.76, 0, 0.24, 1)",
  display: "'Cormorant Garamond', serif",
  body: "'EB Garamond', serif",
};

const BOX = {
  img:   { bg: "#E8D8B0", border: C.umber,   label: "IMAGE",  textCol: C.umber },
  text:  { bg: C.parchment, border: C.border, label: "TEXT",   textCol: C.ink },
  cta:   { bg: C.crimson,   border: C.crimsonD, label: "CTA",  textCol: C.ivory },
  form:  { bg: "#FFF8E8",   border: C.gold,   label: "FORM",   textCol: C.umber },
  badge: { bg: "#EAF2EA",   border: C.green,  label: "BADGE",  textCol: C.green },
  data:  { bg: "#E8EEF4",   border: C.blue,   label: "DATA",   textCol: C.blue },
  nav:   { bg: C.ink,       border: C.ink,    label: "NAV",    textCol: C.ivory },
};

// ─────────────────────────────────────────────────────────────────────────────
// ALL PAGE DATA — defined as plain JS to avoid JSX string escaping issues
// ─────────────────────────────────────────────────────────────────────────────

const PAGES = [

  // ── 1. HOMEPAGE ───────────────────────────────────────────────────────────
  {
    id: "home", path: "/", name: "Home",
    purpose: "Sell the feeling, the origin, and the worth in under 10 seconds. Convert browsers into believers before a single scroll.",
    tech: "Next.js 14 App Router · ANIM-LIB ScrollTrig · Lenis smooth scroll · Framer Motion entrance animations · Tailwind",
    sections: [
      {
        id: "h-nav", label: "Navigation Bar", layoutLabel: "Full width · 64px · Fixed",
        rows: [
          [
            { type: "nav", span: 2, rowspan: 1, label: "Lotus mark + BURANSH wordmark + by Aatrey Elixir", sub: "Existing logo asset. SVG inline." },
            { type: "text", span: 8, rowspan: 1, label: "Routes: Home / Elixir / About / Staycation / More", sub: "Hidden on desktop. Visible only via overlay." },
            { type: "cta", span: 2, rowspan: 1, label: "Hamburger trigger", sub: "Opens fullscreen overlay nav — LOCKED" },
          ]
        ],
        ctas: [],
        data: "None",
        assetPrompt: null,
        claudeCode: "components/Nav.tsx — useScroll from ANIM-LIB to toggle bg from transparent to C.ivory + backdrop-blur. Hamburger state in global Zustand store shared with overlay component. Logo: import as SVG component from /public/lotus-mark.svg",
      },
      {
        id: "h-hero", label: "01 · Hero — Inherited, not manufactured", layoutLabel: "100vh · 55% text left · 45% image right",
        rows: [
          [
            { type: "text", span: 6, rowspan: 8, label: "HERO TEXT BLOCK", sub: 'Pre-label: "AATREY ELIXIR · BURANSH" | H1 italic: "Inherited," | H1 bold: "not manufactured." | Body: 2-line origin statement | CTA row below' },
            { type: "img", span: 6, rowspan: 8, label: "HERO PHOTOGRAPH — Editorial Still", sub: "Bottle on dark stone. Commission required. See asset prompt." },
          ],
          [
            { type: "cta", span: 3, rowspan: 1, label: "Order Now", sub: "Primary — crimson fill — scrolls to /elixir#order" },
            { type: "cta", span: 3, rowspan: 1, label: "Experience the Origin", sub: "Ghost — links to /staycation" },
          ]
        ],
        ctas: [
          { label: "Order Now", type: "primary", fill: "Crimson #C4392B", dest: "/elixir#order", placement: "Hero — left column, below body text" },
          { label: "Experience the Origin", type: "ghost", fill: "Transparent + border", dest: "/staycation", placement: "Hero — beside Order Now" },
        ],
        data: "None — this is a marketing section",
        assetPrompt: "HERO PHOTOGRAPH — Editorial Still: A 750ml amber glass bottle of BURANSH sits on a slab of dark grey Himalayan slate stone. Single cool-white overhead studio light creates a precise, dramatic shadow falling left. The bottle label (cream with AATREY ELIXIR gold text + Rhododendron botanical illustration in deep red) is fully legible and front-facing. Background: near-black gradient fading to dark charcoal. The elixir visible through the amber glass glows deep burgundy-crimson. No hands. No props. No lifestyle elements. The bottle is studied as an object of precision. Colour treatment: cool and clinical, like a high-end perfume campaign. References: Dior Sauvage product photography × Forest Essentials studio work × Loewe Perfumes still life. The bottle occupies 70% of frame height. Lens compression effect — slightly telephoto to remove distortion.",
        claudeCode: "sections/Hero.tsx — ANIM-LIB timeline on mount: pre-label fadeUp 0ms, H1 line1 fadeUp 180ms, H1 line2 fadeUp 260ms, body fadeUp 380ms, CTA row fadeUp 440ms. Image: next/image with priority={true} fill={true} object-fit=cover. Vertical crimson rule: absolute positioned div 1px wide, scaleY animation from 0 to 1 via ANIM-LIB. Mobile: image moves to top, text below, full width.",
      },
      {
        id: "h-value", label: "02 · What Makes It Valuable — 4 Pillars", layoutLabel: "Full width · 4-column icon grid · Dark ink bg",
        rows: [
          [
            { type: "text", span: 3, rowspan: 3, label: "Quality & Research", sub: "Rhododendron arboreum only. Cold-pressed within 6 hrs. Clinical testing. FSSAI certified." },
            { type: "text", span: 3, rowspan: 3, label: "Origin & Altitude", sub: "2,500m above sea level. Uttarakhand. Bloom season March–May. Single harvest." },
            { type: "text", span: 3, rowspan: 3, label: "Women & Culture", sub: "Project Aatmanirbhar. Pahadi women harvesters. Inherited knowledge. No factory." },
            { type: "text", span: 3, rowspan: 3, label: "Education & Experience", sub: "Homestay programme. Learn the process. Be part of the harvest. Take a memory." },
          ]
        ],
        ctas: [
          { label: "Discover the Full Story", type: "ghost-ivory", fill: "Transparent + ivory border", dest: "/about", placement: "Centre below 4 pillars" },
        ],
        data: "None",
        assetPrompt: null,
        claudeCode: "sections/ValuePillars.tsx — 4 divs in CSS grid grid-cols-4 (mobile: grid-cols-2). Each pillar: Cormorant italic number (01–04) in gold, pillar name in EB Garamond, 2-line description. ANIM-LIB ScrollTrig staggered entrance from bottom. Background: C.ink full width. No photography needed — pure typography section.",
      },
      {
        id: "h-product", label: "03 · Product Introduction — The Bottle", layoutLabel: "50/50 split · Existing bottle photo left · Copy right",
        rows: [
          [
            { type: "img", span: 5, rowspan: 6, label: "EXISTING BOTTLE PHOTO — hand held", sub: "File: PHOTO-2026-03-31 hand holding bottle. Use as-is. Warm and human for this section." },
            { type: "text", span: 7, rowspan: 6, label: "Product copy block", sub: 'Section label: "THE ELIXIR" | Headline: What BURANSH is | Body: 40 words on origin + process | Spec row: Cold-pressed / Single harvest / No additives / 750ml' },
          ],
          [
            { type: "cta", span: 4, rowspan: 1, label: "Buy the Elixir", sub: "Primary crimson — links to /elixir#order" },
            { type: "cta", span: 3, rowspan: 1, label: "See all uses", sub: "Ghost — links to /elixir#pairings" },
          ]
        ],
        ctas: [
          { label: "Buy the Elixir", type: "primary", fill: "Crimson", dest: "/elixir#order", placement: "Below product copy" },
          { label: "See all uses + recipes", type: "ghost", fill: "Transparent", dest: "/elixir#pairings", placement: "Beside buy button" },
        ],
        data: "None",
        assetPrompt: "EXISTING ASSET — PHOTO-2026-03-31 (hand holding BURANSH amber bottle). No new shoot needed. In post-processing: slightly desaturate the warm background to feel less casual, increase contrast on the bottle label so the AATREY ELIXIR gold text and Rhododendron illustration are crisp. Crop to portrait aspect ratio 3:4.",
        claudeCode: "sections/ProductIntro.tsx — next/image for bottle photo, responsive. Text block: Cormorant italic section label in crimson, display heading, EB Garamond body. Spec row: flex row of 4 pills (border-radius 0, border C.border, EB Garamond small caps). CTA group: flex row with gap. Lenis scroll target: id=product-intro for nav deep link.",
      },
      {
        id: "h-wellness", label: "04 · Asia Wellness Authority — Testimonials", layoutLabel: "Full width · Dark bg · 3 large pull quotes",
        rows: [
          [
            { type: "text", span: 4, rowspan: 4, label: "TESTIMONIAL 1", sub: "Asia wellness authority. Full italic quote. Name + Title + City + Institution below. Cormorant italic 24px." },
            { type: "text", span: 4, rowspan: 4, label: "TESTIMONIAL 2", sub: "Second endorsement. Different country/city. Shows Asia-wide reach." },
            { type: "text", span: 4, rowspan: 4, label: "TESTIMONIAL 3", sub: "Third endorsement. Ideally a clinical/research angle — doctor or nutritionist." },
          ]
        ],
        ctas: [],
        data: "None — static content section. Quotes hard-coded from confirmed permissions.",
        assetPrompt: "No photography in this section. Typography-only. Section background: C.ink #18100A. Each quote in Cormorant Garamond Italic at clamp(20px, 3vw, 28px) in C.ivory. Crimson pre-label 'ASIA ENDORSED' in 8px sans-serif caps above first quote. Gold horizontal rules between quotes. Name in EB Garamond small, C.muted. If portrait photos available: 40px circular crop, C.border outline, beside name.",
        claudeCode: "sections/Testimonials.tsx — 3-col grid (mobile: 1-col stack). Each testimonial: pre-label, blockquote styled with Cormorant italic, attribution line. ANIM-LIB ScrollTrig: each quote fades up with 150ms stagger. Content: pulled from /lib/testimonials.ts static data file (no CMS needed at launch). IMPORTANT: add name, title, city, institution — do not publish without written permission confirmation from each person.",
      },
      {
        id: "h-women", label: "05 · Women of BURANSH — Initiative Teaser", layoutLabel: "60/40 · Portrait image left · Text + CTA right · Ink bg",
        rows: [
          [
            { type: "img", span: 7, rowspan: 6, label: "WOMEN PORTRAIT — Documentary hero", sub: "One Pahadi woman, mid-harvest, natural light, Rhododendron grove behind. Commission required." },
            { type: "text", span: 5, rowspan: 5, label: "Project Aatmanirbhar intro", sub: 'Headline: "Their hands. Their hills. Their elixir." | Body: 2 sentences. Real names. Real elevation. | Project name + brief' },
          ],
          [
            { type: "cta", span: 5, rowspan: 1, label: "Meet the Women", sub: "Ghost ivory — links to /about#women" },
          ]
        ],
        ctas: [
          { label: "Meet the Women", type: "ghost-ivory", fill: "Transparent + ivory border", dest: "/about#women", placement: "Right column, below text" },
        ],
        data: "None",
        assetPrompt: "WOMEN PORTRAIT — Project Aatmanirbhar: A Pahadi woman aged 45–60, photographed at 2,400–2,600m altitude in the Rhododendron forest of Uttarakhand. She is in the act of harvesting — her hands hold a cluster of deep red Rhododendron arboreum blooms or a handwoven cane basket filled with flowers. Her clothing is traditional Pahadi workwear — warm-toned, layered, practical. Her face is weathered with dignity, not poverty. She looks directly at the camera or is caught in a candid mid-action moment. Expression: quiet confidence, knowledge, belonging. She has always been here. Background: soft-focus Rhododendron canopy, bokeh of red blooms visible. Light: natural golden-hour sidelight from left, warm on skin, cool sky behind. No studio flash. No styling. Shot on 85mm lens. Color grade: preserve warm skin tone against cool forest green and crimson blooms. Reference aesthetic: Sebastiao Salgado documentary dignity meets Vogue India cultural portraiture. This image must communicate that she is the expert, not the subject.",
        claudeCode: "sections/WomenTeaser.tsx — CSS grid: 7/5 split (mobile: stacked, image top). Image: next/image with object-position top. Text: Cormorant italic headline (C.ivory on C.ink bg), EB Garamond body (C.ivory opacity-70). CTA: ghost button with C.ivory border. ANIM-LIB: image translates up 20px on scroll enter, text fades in 300ms after.",
      },
      {
        id: "h-compliance", label: "06 · Health Compliance Stamps", layoutLabel: "Full width · Ivory bg · Horizontal stamp row",
        rows: [
          [
            { type: "badge", span: 2, rowspan: 2, label: "FSSAI Certified", sub: "Licence number displayed" },
            { type: "badge", span: 2, rowspan: 2, label: "No Artificial Additives", sub: "Clean label claim" },
            { type: "badge", span: 2, rowspan: 2, label: "Cold Pressed", sub: "Process certification" },
            { type: "badge", span: 2, rowspan: 2, label: "Single Harvest", sub: "Traceability claim" },
            { type: "badge", span: 2, rowspan: 2, label: "Made in India", sub: "Origin certification" },
            { type: "badge", span: 2, rowspan: 2, label: "Uttarakhand Origin", sub: "GI tag if applicable" },
          ]
        ],
        ctas: [],
        data: "None — static trust layer",
        assetPrompt: "COMPLIANCE BADGES: Do NOT use generic shield or checkmark icons from icon libraries. Design as circular stamp-style marks in C.ink on C.ivory background — like a wax seal impression. Each stamp: outer ring with text running along the circumference (e.g. FSSAI CERTIFIED), inner element is either the actual certification number or a simple botanical motif (leaf or flower petal). Font: EB Garamond caps for the circular text. These are SVG components, not raster images.",
        claudeCode: "components/ComplianceBadges.tsx — 6 SVG stamp components in flex-wrap row (mobile: 3x2 grid). Each SVG: 80x80px viewBox, circular text path using textPath + path element, animated: on scroll enter, rotate from 0 to 360deg over 800ms with ease-in-out. Store badge data in /lib/compliance.ts array. FSSAI number must be exact — confirm with client before launch.",
      },
      {
        id: "h-himalaya", label: "07 · Himalayan Origin — The Land", layoutLabel: "Full viewport · Parallax landscape · Text overlay",
        rows: [
          [
            { type: "img", span: 12, rowspan: 8, label: "HIMALAYAN LANDSCAPE — Rhododendron forest at altitude", sub: "Full bleed. 60% dark overlay. Text reads on top. Commission required." },
          ],
          [
            { type: "text", span: 8, rowspan: 2, label: "Overlay text block", sub: '"2,500 metres above ordinary." + 3 data points: Altitude / Region / Bloom season' },
            { type: "cta", span: 4, rowspan: 2, label: "Book the Staycation", sub: "Crimson on semi-dark bg — links to /staycation" },
          ]
        ],
        ctas: [
          { label: "Book the Staycation", type: "primary", fill: "Crimson", dest: "/staycation", placement: "Overlay, right of text" },
          { label: "Learn about the harvest", type: "text-link", fill: "Ivory underline", dest: "/about#craft", placement: "Below headline" },
        ],
        data: "None",
        assetPrompt: "HIMALAYAN LANDSCAPE — Altitude Establishing Shot: Wide-angle (24mm or 35mm equivalent) photograph of the Rhododendron arboreum forest in Uttarakhand at 2,400–2,600m elevation. Shot at dawn or blue hour — sky is deep cobalt-indigo transitioning to warm gold at the horizon. The foreground: dense Rhododendron canopy with visible deep crimson-red blooms. Midground: valley dropping away showing scale and altitude. Background: snow-capped Himalayan ridgeline faintly visible through thin cloud or morning mist. No people, no infrastructure, no roads visible. The frame must feel unreachable — as if you are looking at a place most people will never stand. Color grade: Preserve the natural crimson of blooms. Cool blue sky, warm gold horizon, deep green canopy, the blooms are the only warm red. Reference: Sebastiao Salgado landscape compositions, Nat Geo India, Ansel Adams compositional stillness but in color.",
        claudeCode: "sections/HimalayanLandscape.tsx — next/image with fill and object-fit=cover as base layer. ANIM-LIB ScrollTrig parallax: image moves at 0.4x scroll speed (translateY -20% to 20% range). Dark overlay: absolute div with bg-gradient from black/60 to black/40. Text and CTA: absolute positioned, z-index 10, white. Mobile: parallax disabled (performance), static image.",
      },
      {
        id: "h-coming", label: "08 · Coming Soon — Jam & Tea", layoutLabel: "Full width · 2-col · Product teasers",
        rows: [
          [
            { type: "text", span: 6, rowspan: 4, label: "BURANSH JAM — Coming Soon", sub: "Product name + brief description + coming soon badge. No buy CTA. Email capture only." },
            { type: "text", span: 6, rowspan: 4, label: "BURANSH TEA — Coming Soon", sub: "Product name + brief description + coming soon badge. No buy CTA. Email capture only." },
          ],
          [
            { type: "form", span: 6, rowspan: 2, label: "Jam waitlist email capture", sub: "Name + Email + Submit. Auto-adds to Google Sheet tab: WAITLIST_JAM" },
            { type: "form", span: 6, rowspan: 2, label: "Tea waitlist email capture", sub: "Name + Email + Submit. Auto-adds to Google Sheet tab: WAITLIST_TEA" },
          ]
        ],
        ctas: [
          { label: "Notify me when available", type: "form-submit", fill: "Crimson", dest: "Google Sheets API — WAITLIST tab", placement: "Inside each product teaser form" },
        ],
        data: "COLLECT: Name + Email + Product interest (Jam / Tea). POST to /api/waitlist → Google Sheets API → sheet: BURANSH_DATA, tab: WAITLIST. Confirmation email via EmailService API.",
        assetPrompt: null,
        claudeCode: "sections/ComingSoon.tsx — 2-col grid. Each column: product name in Cormorant italic, 1-line teaser, COMING SOON badge (C.gold border, small caps), mini form (name + email inputs, crimson submit button). Form handler: /api/waitlist route (Next.js App Router). Google Sheets: google-api-client npm package, service account credentials in .env. EmailService: send confirmation email on success. Form state: loading / success / error with inline feedback (no page reload).",
      },
      {
        id: "h-footer", label: "09 · Footer", layoutLabel: "3-column · Ink background",
        rows: [
          [
            { type: "nav", span: 4, rowspan: 3, label: "Brand + tagline + social links", sub: "Lotus mark, BURANSH, tagline, Instagram, contact email" },
            { type: "text", span: 4, rowspan: 3, label: "Navigation links", sub: "Home / Elixir / About / Staycation / More" },
            { type: "data", span: 4, rowspan: 3, label: "Quick contact entry", sub: "Name + Email + Inquiry type dropdown. Links to /api/contact" },
          ]
        ],
        ctas: [
          { label: "Send enquiry", type: "form-submit", fill: "Gold border", dest: "/api/contact → Google Sheets CONTACT tab", placement: "Footer form submit" },
        ],
        data: "COLLECT: Name + Email + Inquiry type (Order / Staycation / Wholesale / Press). POST to /api/contact. Google Sheets tab: CONTACT.",
        assetPrompt: null,
        claudeCode: "components/Footer.tsx — CSS grid 3-col (mobile: stacked). Background C.ink. All text C.ivory / C.muted. Logo: white version of lotus SVG. Social: Instagram icon (Lucide-react). Footer form: inline flex inputs + gold-bordered submit. Bottom bar: FSSAI number, Made in India, Privacy Policy link, copyright.",
      },
    ],
  },

  // ── 2. PRODUCT / ELIXIR PAGE ──────────────────────────────────────────────
  {
    id: "elixir", path: "/elixir", name: "Elixir",
    purpose: "Convert intent to order. Show the product completely — what it is, every way to use it, every demographic it serves, gifting options, sugar-free customisation, and a frictionless buy flow.",
    tech: "Next.js 14 · PaymentSDK integration · Google Sheets order logging · Framer Motion product zoom · ANIM-LIB section reveals",
    sections: [
      {
        id: "e-hero", label: "01 · Product Hero", layoutLabel: "Full viewport · Centred editorial · Product dominant",
        rows: [
          [
            { type: "img", span: 12, rowspan: 7, label: "EDITORIAL STILL — Bottle on stone. Commission required.", sub: "Same studio shoot as homepage hero. Cold, precise, clinical. Product object study." },
          ],
          [
            { type: "text", span: 8, rowspan: 2, label: "BURANSH name block + sub-descriptor", sub: '"BURANSH" Cormorant large | "Himalayan Rhododendron Floral Concentrate · 750ml" EB Garamond italic | "AATREY ELIXIR — NO. 001" small caps' },
            { type: "cta", span: 4, rowspan: 2, label: "Order Now", sub: "Crimson — anchor scrolls page to #order section" },
          ]
        ],
        ctas: [
          { label: "Order Now", type: "primary", fill: "Crimson", dest: "#order", placement: "Hero overlay, right" },
        ],
        data: "None",
        assetPrompt: "EDITORIAL STILL — BURANSH Bottle Object Study: The 750ml amber glass BURANSH bottle stands upright on a slab of dark, water-worn slate stone. The stone surface has natural mineral veining visible. Single overhead softbox light (5500K daylight balanced) creates a precise halo on the bottle shoulder and a long directional shadow falling to the left at 30 degrees. The label (cream ground, AATREY ELIXIR in gold small caps with em-dash separators, BURANSH in dark serif bold, Rhododendron botanical illustration in deep crimson-red, 750ml) faces camera perfectly front-on. The elixir inside glows deep burgundy-crimson when backlit. Background: seamless dark charcoal gradient, no texture. Bottle occupies 65% of frame height. Render or photograph at minimum 4000px on the long side. Colour grade: matte, clinical, desaturated background, the label cream and the liquid crimson are the only warm tones. References: Aesop product photography, Loewe perfume stills, Diptyque candle photography.",
        claudeCode: "sections/ElixirHero.tsx — Full-screen section. next/image priority fill. ANIM-LIB: on load, bottle image scales from 0.95 to 1.0 over 600ms ease-out-quart. Text overlay: absolute bottom-40 px-16. Scroll indicator: animated chevron at bottom center. Mobile: image top 60vh, text below.",
      },
      {
        id: "e-whatis", label: "02 · What It Is — Full Product Truth", layoutLabel: "Split · Box photo left · Specs + benefits right",
        rows: [
          [
            { type: "img", span: 5, rowspan: 8, label: "BOX PHOTOGRAPH — existing asset", sub: "PHOTO-2026-03-31 box on stone. Already premium. Use full height." },
            { type: "text", span: 7, rowspan: 3, label: "Product definition", sub: "What Buransh is. Rhododendron arboreum. Cold-pressed floral concentrate. What it is NOT (no sugar, no additives, no artificial anything)." },
          ],
          [
            { type: "badge", span: 7, rowspan: 2, label: "Compliance stamps row", sub: "FSSAI / Cold Pressed / No Additives / Single Harvest — horizontal on ivory bg" },
          ],
          [
            { type: "text", span: 7, rowspan: 3, label: "Why it matters", sub: "Antioxidants. Anthocyanins. Altitude-grown potency. Ayurvedic context. Research-backed wellness claims." },
          ]
        ],
        ctas: [],
        data: "None",
        assetPrompt: "BOX PHOTOGRAPH — EXISTING ASSET: PHOTO-2026-03-31-box. In post: ensure the AATREY ELIXIR gold lettering is crisp, the Rhododendron botanical illustration reads clearly in print, and the gold corner ornaments are visible. Slight increase in clarity/sharpening on the label. Keep the warm stone surface visible at the base — it grounds the product.",
        claudeCode: "sections/WhatItIs.tsx — Sticky image on scroll (left column stays fixed while right content scrolls). Use CSS position:sticky top-20. Spec list: EB Garamond small caps items separated by Cormorant gold em-dashes. Compliance row: reuse ComplianceBadges component. Wellness claims: must be verified against FSSAI advertising guidelines before publishing.",
      },
      {
        id: "e-better", label: "03 · Better Than Any Alternative", layoutLabel: "Full width dark · Comparison positioning",
        rows: [
          [
            { type: "text", span: 12, rowspan: 2, label: "Section headline", sub: '"The premium beverage choice for every occasion and every age." Position against: soft drinks / packaged juices / energy drinks / alcohol.' },
          ],
          [
            { type: "text", span: 3, rowspan: 4, label: "vs Soft Drinks", sub: "No refined sugar / No caramel colour / No phosphoric acid / Real botanical origin" },
            { type: "text", span: 3, rowspan: 4, label: "vs Packaged Juice", sub: "Not from concentrate / No preservatives / No added vitamins (synthetic) / Single-ingredient" },
            { type: "text", span: 3, rowspan: 4, label: "vs Energy Drinks", sub: "No caffeine spike / No crash / No taurine / Natural sustained wellness" },
            { type: "text", span: 3, rowspan: 4, label: "vs Alcohol", sub: "Social drink without the hangover / All ages / All occasions / Zero compromise" },
          ]
        ],
        ctas: [],
        data: "None",
        assetPrompt: null,
        claudeCode: "sections/BetterThan.tsx — Background C.ink. 4-col comparison grid (mobile: 2x2). Each card: category name in Cormorant italic crimson, bullet list in EB Garamond ivory. No icons — pure typography. ANIM-LIB: cards slide up staggered on scroll enter.",
      },
      {
        id: "e-occasions", label: "04 · For Every Occasion — All Audiences", layoutLabel: "Full width · Occasion grid · 3x3 tiles",
        rows: [
          [
            { type: "text", span: 4, rowspan: 3, label: "Urban Professionals", sub: "Workplace wellness. Desk ritual. Meeting room. The sophisticated non-alcohol option." },
            { type: "text", span: 4, rowspan: 3, label: "Families + Children", sub: "Safe for all ages. School lunch. After sport. Family dinner table. Sugar-free option available." },
            { type: "text", span: 4, rowspan: 3, label: "Elderly + Wellness", sub: "Joint health. Antioxidant daily ritual. Easy to consume. Doctor-recommended context." },
          ],
          [
            { type: "text", span: 4, rowspan: 3, label: "Weddings + Events", sub: "Premium non-alcoholic signature drink. Customisable bottles. Bulk order available. Export-ready presentation." },
            { type: "text", span: 4, rowspan: 3, label: "Yoga + Gym + Sport", sub: "Pre/post-workout hydration. Natural electrolytes. No sugar crash. Athlete-appropriate." },
            { type: "text", span: 4, rowspan: 3, label: "Foreign Guests + Export", sub: "A uniquely Indian luxury gift. GI-tagged. Premium. Carry-on friendly. The India souvenir reimagined." },
          ],
          [
            { type: "text", span: 4, rowspan: 3, label: "Parties + Social", sub: "Signature cocktail mixer. Mocktail base. Dinner party centrepiece. Conversation starter." },
            { type: "text", span: 4, rowspan: 3, label: "Offices + Corporates", sub: "Bulk corporate gifting. Brand partnerships. Employee wellness packages. Meeting room beverage." },
            { type: "text", span: 4, rowspan: 3, label: "Schools + Colleges", sub: "Zero-sugar option. Educational tie-in. Canteen alternative. Youth wellness." },
          ]
        ],
        ctas: [
          { label: "Order in bulk", type: "ghost", fill: "Crimson border", dest: "/elixir#bulk-order", placement: "Below occasion grid" },
        ],
        data: "None — marketing content section",
        assetPrompt: null,
        claudeCode: "sections/Occasions.tsx — 3x3 grid (mobile: 1-col). Each tile: Cormorant italic occasion name, EB Garamond 2-line description, thin gold border-bottom. Ivory background. Hover: tile background shifts to C.parchment, left border appears in crimson. No photography needed. Section heading: 'One elixir. Every moment.' in Cormorant display.",
      },
      {
        id: "e-pairings", label: "05 · Pairings + Recipe Cards", layoutLabel: "Horizontal scroll · Recipe card carousel",
        rows: [
          [
            { type: "text", span: 12, rowspan: 2, label: "Section intro", sub: '"BURANSH expands. These are the possibilities." — Cormorant italic. EB Garamond sub: How to dilute, what to mix, when to serve.' },
          ],
          [
            { type: "text", span: 3, rowspan: 5, label: "RECIPE 01: The Classic", sub: "1 part BURANSH + 8 parts chilled water + fresh mint. Morning ritual. Health-forward." },
            { type: "text", span: 3, rowspan: 5, label: "RECIPE 02: The Fizz", sub: "1 part BURANSH + sparkling water + lime. Party version. All ages." },
            { type: "text", span: 3, rowspan: 5, label: "RECIPE 03: The Warm", sub: "1 part BURANSH + hot water + ginger + honey. Medicinal. Winter. Ayurvedic context." },
            { type: "text", span: 3, rowspan: 5, label: "RECIPE 04: The Cocktail", sub: "1 part BURANSH + gin or vodka (optional) + tonic. Adult occasions. Elegant non-alcoholic base too." },
          ]
        ],
        ctas: [],
        data: "None",
        assetPrompt: null,
        claudeCode: "sections/RecipeCards.tsx — Horizontal scroll container with scroll snap. 4 recipe cards, each 280px wide. Card: Cormorant italic recipe number in gold, name bold, ingredient list in EB Garamond, pairing context below. Card bg: C.parchment. Hover: slight scale 1.02. No photography needed — cards are typographic. Add a data-recipe attribute for future analytics.",
      },
      {
        id: "e-sugar", label: "06 · Customisation — Sugar-Free Option", layoutLabel: "Full width · Split · Toggle visual",
        rows: [
          [
            { type: "text", span: 6, rowspan: 4, label: "Standard BURANSH", sub: "Natural sugars from the Rhododendron flower only. No added sugar. Already low glycemic." },
            { type: "text", span: 6, rowspan: 4, label: "BURANSH Sugar-Free", sub: "Additional filtration process removes residual fructose. Zero added sweeteners. Diabetic-friendly. Certified." },
          ],
          [
            { type: "cta", span: 12, rowspan: 1, label: "Select variant when ordering below", sub: "This section scrolls user to #order with variant pre-selected" },
          ]
        ],
        ctas: [
          { label: "Order Standard", type: "primary", fill: "Crimson", dest: "#order?variant=standard", placement: "Below customisation section" },
          { label: "Order Sugar-Free", type: "ghost", fill: "Crimson border", dest: "#order?variant=sugarfree", placement: "Beside standard CTA" },
        ],
        data: "Variant selection pre-fills order form in #order section",
        assetPrompt: null,
        claudeCode: "sections/Customisation.tsx — URL param ?variant=standard|sugarfree pre-selects the radio in the order form (useSearchParams). Visual toggle: two cards side by side, selected card gets crimson border. Default: standard selected. Mobile: stacked with full-width toggle buttons.",
      },
      {
        id: "e-gifting", label: "07 · Gifting Packages", layoutLabel: "Full width · 3 gift tiers · Premium presentation",
        rows: [
          [
            { type: "text", span: 4, rowspan: 5, label: "GIFT: The Single", sub: "1 bottle + branded box (existing box asset) + handwritten origin card. Wedding favour. Corporate desk gift." },
            { type: "text", span: 4, rowspan: 5, label: "GIFT: The Pair", sub: "2 bottles + premium outer carton + silk ribbon + origin story booklet. Diwali. Executive gift." },
            { type: "text", span: 4, rowspan: 5, label: "GIFT: The Collection", sub: "4 bottles + wooden crate + personalised harvest certificate + women of BURANSH photo card. Ultra premium. Export market." },
          ],
          [
            { type: "cta", span: 4, rowspan: 1, label: "Order Single Gift", sub: "Crimson — links to #order?type=gift-single" },
            { type: "cta", span: 4, rowspan: 1, label: "Order The Pair", sub: "Crimson — links to #order?type=gift-pair" },
            { type: "cta", span: 4, rowspan: 1, label: "Order The Collection", sub: "Crimson — links to #order?type=gift-collection" },
          ]
        ],
        ctas: [
          { label: "Order Single Gift", type: "primary", fill: "Crimson", dest: "#order?type=gift-single", placement: "Below each gift tier card" },
          { label: "Order The Pair", type: "primary", fill: "Crimson", dest: "#order?type=gift-pair", placement: "Below The Pair card" },
          { label: "Order The Collection", type: "primary", fill: "Crimson", dest: "#order?type=gift-collection", placement: "Below The Collection card" },
          { label: "Request custom gifting quote", type: "ghost", fill: "Umber border", dest: "/elixir#bulk-order", placement: "Below all gift tiers, centred" },
        ],
        data: "Gift type selection pre-fills order form. Custom gifting goes to bulk inquiry form.",
        assetPrompt: "GIFTING PRESENTATION — The Collection: Shot on a surface of raw, unfinished pine wood planks. The 4-bottle wooden crate (slatted, branded with a burned-in lotus mark) sits slightly open, showing 4 BURANSH bottles nestled in natural jute padding. The Rhododendron botanical card leans against the crate. The harvest certificate (on cream card, gold embossed, folded) sits in front. One additional loose Rhododendron bloom (real or high-quality silk) rests across the top of the crate. Light: warm directional from upper-left. Mood: a premium gift you discover rather than unwrap. This image is used for The Collection tier on the product page and as the gifting hero on export/B2B communications.",
        claudeCode: "sections/GiftingPackages.tsx — 3-col grid (mobile: 1-col). Each tier card: tier name in Cormorant italic, price (TBD), inclusion list in EB Garamond, crimson CTA. URL params passed to order form via query string. For Collection tier: add premium badge overlay. Gift image: next/image in each card or one hero image for Collection tier.",
      },
      {
        id: "e-order", label: "08 · ORDER SECTION", layoutLabel: "Full width · Ivory bg · Form dominant",
        rows: [
          [
            { type: "text", span: 4, rowspan: 8, label: "Order summary sidebar", sub: "Selected product / Quantity / Variant / Gift type. Updates live as form changes. Shows price total." },
            { type: "form", span: 8, rowspan: 8, label: "ORDER FORM", sub: "Name / Phone / Email / Delivery address / Pincode / Quantity / Variant (standard/sugar-free) / Type (personal/gift) / Gift message (optional). Submit → PaymentSDK." },
          ],
          [
            { type: "cta", span: 8, rowspan: 1, label: "Pay with PaymentSDK", sub: "Full-width crimson. Triggers PaymentSDK checkout. On success → /thank-you + Google Sheets log." },
          ],
          [
            { type: "badge", span: 8, rowspan: 1, label: "Trust bar below submit", sub: "PaymentSDK secured / SSL / FSSAI / 7-day return policy" },
          ]
        ],
        ctas: [
          { label: "Pay with PaymentSDK", type: "primary-full", fill: "Crimson full width", dest: "PaymentSDK SDK → /api/create-order", placement: "Form submit button" },
        ],
        data: "ORDER DATA FLOW: Form submission → /api/create-order (Next.js route) → PaymentSDK order created → Frontend PaymentSDK checkout opens → On payment success webhook → /api/payment-verify → if verified: write to Google Sheets (tab: ORDERS) + send confirmation email via EmailService. GOOGLE SHEETS COLUMNS: Timestamp / Name / Email / Phone / Address / Pincode / Quantity / Variant / Type / Gift message / Amount paid / PaymentSDK order ID / Status.",
        assetPrompt: null,
        claudeCode: "sections/OrderSection.tsx — Scroll target id=order. Form built with react-hook-form + zod validation. PaymentSDK: load script via useEffect, initiate payment with order ID from /api/create-order. On payment.handler success: call /api/payment-verify (POST with payment-sdk_payment_id + order_id + signature). Google Sheets write: google-api-client with service account in /lib/sheets.ts. EmailService email: /lib/email.ts with BURANSH branded template. URL params (?variant, ?type, ?quantity) pre-fill form fields via useSearchParams. Order summary sidebar: updates reactively via form watch().",
      },
      {
        id: "e-bulk", label: "09 · Bulk + Wholesale Inquiry", layoutLabel: "Full width · Split · Form right",
        rows: [
          [
            { type: "text", span: 5, rowspan: 6, label: "Bulk use cases", sub: "Hotels / Weddings / Corporate gifting / Yoga studios / Export distributors / Airlines / Retail chains. Minimum order: confirm with client." },
            { type: "form", span: 7, rowspan: 6, label: "BULK INQUIRY FORM", sub: "Name / Organisation / Email / Phone / Use case / Quantity required / Timeline / Message." },
          ],
          [
            { type: "cta", span: 7, rowspan: 1, label: "Submit Bulk Enquiry", sub: "Gold border button → /api/bulk-inquiry → Google Sheets BULK tab + email alert to team" },
          ]
        ],
        ctas: [
          { label: "Submit Bulk Enquiry", type: "secondary", fill: "Gold border", dest: "/api/bulk-inquiry → Google Sheets BULK tab", placement: "Below bulk form" },
        ],
        data: "BULK INQUIRY DATA: Name / Organisation / Email / Phone / Use Case / Quantity / Timeline / Message / Timestamp. Google Sheets tab: BULK_ORDERS. Team alert email on every new submission.",
        assetPrompt: null,
        claudeCode: "sections/BulkInquiry.tsx — react-hook-form. /api/bulk-inquiry route: writes to BULK_ORDERS sheet tab + sends alert email to team email address (from .env). No payment processing here — this is a lead capture. Add honeypot field for spam protection.",
      },
    ],
  },

  // ── 3. ABOUT US ───────────────────────────────────────────────────────────
  {
    id: "about", path: "/about", name: "About",
    purpose: "The full origin. Aatrey the name, Attri the sage, Project Aatmanirbhar, the Sanskrit shlok, the women, the documentary link. Credibility + soul.",
    tech: "Next.js 14 · ANIM-LIB scroll-linked animations · next/video for documentary embed · Lenis",
    sections: [
      {
        id: "a-hero", label: "01 · The Name — Aatrey + Attri", layoutLabel: "Full viewport · Text-dominant · Dark bg",
        rows: [
          [
            { type: "text", span: 12, rowspan: 6, label: "Name origin narrative", sub: '"Aatrey" derives from the Sanskrit sage Atri — one of the Saptarishis, the seven divine sages of Vedic tradition. Atri means: the one who consumes (knowledge, experience, light). He who dissolves duality. The elixir from his land carries his name.' },
          ],
          [
            { type: "text", span: 12, rowspan: 3, label: "Sanskrit Shlok", sub: "Client to provide the shlok. Display in Devanagari script (font: Noto Sans Devanagari) + transliteration in EB Garamond italic + English translation below. Crimson background panel." },
          ]
        ],
        ctas: [],
        data: "None",
        assetPrompt: "NAME ORIGIN — No photography. This section is pure typography. The Sanskrit shlok should be set at display scale (clamp 32px–60px) in Noto Sans Devanagari on a C.crimson background with C.ivory text. The transliteration in EB Garamond italic below at 20px. The English translation in EB Garamond regular at 16px. The entire panel feels like a page from an ancient manuscript — grain texture overlay at 4% opacity, thin gold border on the panel.",
        claudeCode: "sections/TheNameOrigin.tsx — import Noto Sans Devanagari from Google Fonts (next/font/google). Sanskrit text stored in /lib/brand-content.ts as a constant. Three elements stacked: Devanagari script, transliteration, translation. Client must provide all three. Use a blockquote HTML element for semantic correctness. Section background: C.ink. Shlok panel: C.crimson background.",
      },
      {
        id: "a-project", label: "02 · Project Aatmanirbhar", layoutLabel: "Full width · Mission statement + stats",
        rows: [
          [
            { type: "text", span: 8, rowspan: 4, label: "Project narrative", sub: "What Project Aatmanirbhar is. Women employed. Villages covered. Income generated. Future targets. The mission beyond the product." },
            { type: "text", span: 4, rowspan: 4, label: "Impact numbers", sub: "X women employed / X villages / X kg harvested per season / X% income increase. Large Cormorant display numerals in crimson." },
          ]
        ],
        ctas: [
          { label: "Meet the women", type: "ghost", fill: "Crimson border", dest: "#women", placement: "Below project narrative" },
        ],
        data: "None — static content. Numbers updated manually in /lib/brand-content.ts",
        assetPrompt: null,
        claudeCode: "sections/ProjectAatmanirbhar.tsx — Impact numbers: animated count-up via ANIM-LIB when scrolled into view. Numbers stored in /lib/brand-content.ts. Project description: EB Garamond body. Section label in crimson small caps.",
      },
      {
        id: "a-women", label: "03 · The Women — Full Feature", layoutLabel: "Alternating portrait + text · 3 women featured",
        rows: [
          [
            { type: "img", span: 5, rowspan: 6, label: "PORTRAIT: WOMAN 1 — name + village", sub: "Head and shoulders. Eyes direct. Natural light. Rhododendron bloom or basket in frame. C.ink background." },
            { type: "text", span: 7, rowspan: 6, label: "Her story", sub: "Her name / village / how many years harvesting / one direct quote (translated) / what Aatmanirbhar has changed for her family." },
          ],
          [
            { type: "text", span: 7, rowspan: 6, label: "Her story", sub: "Second woman. Different composition — mid-shot, hands visible." },
            { type: "img", span: 5, rowspan: 6, label: "PORTRAIT: WOMAN 2 — name + village", sub: "Mid-shot. Hands in work. Environmental context. Alternates sides from Woman 1." },
          ],
          [
            { type: "img", span: 5, rowspan: 6, label: "PORTRAIT: WOMAN 3 — name + village", sub: "Wide environmental. Woman within the landscape. Scale of the forest." },
            { type: "text", span: 7, rowspan: 6, label: "Her story", sub: "Third woman." },
          ]
        ],
        ctas: [],
        data: "None — content managed in /lib/women.ts array of objects",
        assetPrompt: "WOMEN PORTRAIT SERIES — Three women, same shoot day in Uttarakhand, consistent light treatment but varied compositions: (1) Close head+shoulders — she looks at camera, Rhododendron blooms soft-focus behind her. Dignified. (2) Mid-shot — hands active, holding flowers or basket, slightly turned from camera, caught in work. (3) Environmental wide — she stands within the forest, small relative to the canopy around her, reinforcing the scale and her belonging to this place. All three: natural light (avoid harsh midday sun — shoot golden hour or overcast), no makeup, no styling, real work clothing. Color grade consistent across all three: preserve warm skin tones, boost the deep red of the blooms, keep greens muted and natural. Think: Annie Leibovitz cultural portraiture meets documentary photography.",
        claudeCode: "sections/WomenFeature.tsx — data from /lib/women.ts: array of {name, village, years, quote, imageSrc, imageAlt}. Alternating layout via CSS grid + nth-child(even) rule that mirrors the grid-template-areas. next/image for portraits with object-position: center top. ANIM-LIB: image slides in from its respective side on scroll enter.",
      },
      {
        id: "a-movie", label: "04 · The Documentary / Film", layoutLabel: "Full width · Video embed or link",
        rows: [
          [
            { type: "img", span: 12, rowspan: 5, label: "VIDEO EMBED OR THUMBNAIL + PLAY BUTTON", sub: "Client to provide link. If YouTube: use next/lite-youtube. If Vimeo: Vimeo embed. If private file: next/video." },
          ],
          [
            { type: "text", span: 12, rowspan: 2, label: "Film description", sub: "Title of the documentary / Director / Runtime / What it covers / Why it matters to the BURANSH story." },
          ]
        ],
        ctas: [
          { label: "Watch the Film", type: "primary", fill: "Crimson", dest: "External link or modal video player", placement: "Play button overlay on thumbnail + text CTA below" },
        ],
        data: "None — static link. Client to confirm final URL.",
        assetPrompt: "VIDEO THUMBNAIL — If a custom thumbnail is needed: still frame from the documentary that shows the most emotionally resonant moment — ideally a wide landscape shot with a woman harvesting in the foreground. If documentary not yet filmed: placeholder showing the Rhododendron forest landscape with a minimal play button icon (circle + triangle, crimson colour). The thumbnail must be 1920x1080px minimum.",
        claudeCode: "sections/Documentary.tsx — if YouTube: npm install lite-youtube-embed, lazy loaded. If Vimeo: Vimeo Player SDK. Custom play button overlay: absolute positioned, centred, crimson circle 72px diameter with white triangle SVG. On click: hide poster, show iframe. Accessibility: ensure video has captions/subtitles. Store video URL in /lib/brand-content.ts.",
      },
    ],
  },

  // ── 4. STAYCATION ─────────────────────────────────────────────────────────
  {
    id: "staycation", path: "/staycation", name: "Staycation",
    purpose: "A digital experience that makes someone feel the altitude, the community, and the meaning of the staycation before they have booked. Convert curiosity to inquiry. Sell the transformation, not the accommodation.",
    tech: "Next.js 14 · ANIM-LIB parallax scroll · Lenis smooth scroll · Framer Motion reveal · Google Sheets inquiry logging",
    sections: [
      {
        id: "st-hero", label: "01 · Staycation Hero — The Journey", layoutLabel: "Full viewport · Landscape dominant · Overlay text",
        rows: [
          [
            { type: "img", span: 12, rowspan: 8, label: "UTTARAKHAND HERO LANDSCAPE — Wide, altitude, dawn", sub: "Most expansive image on the site. Rhododendron forest + valley + peaks. Exclusively for this page at this scale." },
          ],
          [
            { type: "text", span: 8, rowspan: 2, label: "Overlay: The invitation", sub: '"Some luxury must be witnessed to be believed." + "Stay among the Rhododendron groves. Watch the harvest. Taste the origin."' },
            { type: "cta", span: 4, rowspan: 2, label: "Enquire about a Stay", sub: "Crimson — anchors to #booking-form" },
          ]
        ],
        ctas: [
          { label: "Enquire about a Stay", type: "primary", fill: "Crimson", dest: "#booking-form", placement: "Hero overlay, right" },
          { label: "What to expect", type: "text-link", fill: "Ivory underline", dest: "#experience", placement: "Below headline" },
        ],
        data: "None — CTA anchors to form below",
        assetPrompt: "STAYCATION HERO LANDSCAPE: Wide-angle (16–24mm equivalent) photograph from a ridge or elevated viewpoint in Uttarakhand, looking across a valley filled with Rhododendron arboreum forest at peak bloom (March–April). The blooms create a sea of deep crimson-red canopy. The far ridgeline shows the scale — it stretches into the distance until it meets low cloud or morning mist. Sky: pre-dawn or first light — deep indigo-cobalt at zenith transitioning to warm amber at the horizon. The entire frame is wild, unreachable, untouched. Not a single human structure visible. No people. Shot at minimum 42MP for full-bleed print quality at 4000px. Color grade: maximum drama — deepen the blues, saturate the crimson blooms, keep the mist cool. This is the image that makes someone book without reading another word.",
        claudeCode: "sections/StaycationHero.tsx — Full viewport, ANIM-LIB parallax: image moves at 30% scroll speed. Dark overlay: linear-gradient from black/70 at bottom to black/30 at top. Text: absolute bottom-40 z-10 px-16. Lenis: slow scroll speed multiplier (0.7) for this section only. Mobile: static image, no parallax.",
      },
      {
        id: "st-experience", label: "02 · The Four Stages of the Stay", layoutLabel: "Vertical journey · 4 stages · Image + text alternating",
        rows: [
          [
            { type: "img", span: 6, rowspan: 5, label: "ARRIVAL IMAGE — Welcome moment", sub: "The welcome: bottle of BURANSH on a wooden tray on the room terrace. Valley visible behind. Golden light. No people." },
            { type: "text", span: 6, rowspan: 5, label: "Stage 1: Arrival", sub: '"Taste first. Understand second." A BURANSH bottle awaits in your room. You drink it before you see the forest that made it. This is the intention.' },
          ],
          [
            { type: "text", span: 6, rowspan: 5, label: "Stage 2: The Harvest Walk", sub: '"No script. No tour guide script. You walk with the women who harvest. This is their forest. You are the guest." Real work, witnessed.' },
            { type: "img", span: 6, rowspan: 5, label: "HARVEST WALK — shared asset", sub: "Women harvesting action shot. Same shoot as /about women series. Environmental wide." },
          ],
          [
            { type: "img", span: 6, rowspan: 5, label: "PRESSING IMAGE — process at altitude", sub: "The cold-press equipment in context at altitude. Not a sterile lab — a real process in a real place." },
            { type: "text", span: 6, rowspan: 5, label: "Stage 3: The Making", sub: '"Watch. Or participate. The cold-press happens at altitude, within hours of harvest. You will understand why nothing about this process can be rushed."' },
          ],
          [
            { type: "text", span: 6, rowspan: 5, label: "Stage 4: Your Legacy", sub: '"Your bottle is named after the woman who harvested it. Before you leave, you plant one Rhododendron sapling in the medicinal garden. You are now part of the next harvest."' },
            { type: "img", span: 6, rowspan: 5, label: "LEGACY MOMENT — planting or farewell", sub: "Guest planting a sapling OR the personalised bottle being labelled. Intimate. Commission required." },
          ]
        ],
        ctas: [],
        data: "None — narrative content",
        assetPrompt: "ARRIVAL IMAGE — Intimate Still Life: A single BURANSH bottle (existing bottle, amber glass, AATREY ELIXIR label) sits on a handmade wooden tray of light pine. The tray rests on a stone window ledge or wooden balcony rail. Behind it, slightly out of focus: the Rhododendron valley at golden hour. The bottle catches the warm late-afternoon light — the elixir glows burgundy. Beside the bottle: a small hand-thrown ceramic cup (raw, unglazed, earth-toned), a few fresh Rhododendron blooms, and a folded piece of cream card with the guest's name handwritten in ink. The scene must feel discovered, not staged — as if the room prepared itself for you. Mood: quiet luxury. References: Aman Resorts arrival photography, Six Senses welcome moments.",
        claudeCode: "sections/StaycationJourney.tsx — 4 alternating sections, each 100vh scroll snap point. ANIM-LIB ScrollTrig: each section pins for 200px scroll before releasing. Image: next/image fill in each half. Text: Cormorant italic stage headline, EB Garamond body. Stage number: large Cormorant display numeral in gold at top-left of each section.",
      },
      {
        id: "st-wilderness", label: "03 · Experience the Wilderness", layoutLabel: "Full width · Activity grid · 6 tiles",
        rows: [
          [
            { type: "text", span: 4, rowspan: 3, label: "Being in Nature", sub: "Guided forest walks. Bird watching. Medicinal plant trails. Sunrise at the ridge. The forest is the activity." },
            { type: "text", span: 4, rowspan: 3, label: "Medicinal Plant Plantation", sub: "Walk the medicinal garden. Learn 15+ Himalayan medicinal plants. Understand the ecosystem BURANSH comes from." },
            { type: "text", span: 4, rowspan: 3, label: "Make Your Own Elixir", sub: "Hands-on cold-press session. You harvest your flowers, press your concentrate, bottle it yourself. The most personal souvenir imaginable." },
          ],
          [
            { type: "text", span: 4, rowspan: 3, label: "Being with the Women", sub: "Cook together. Work together. Hear the stories. Understand the knowledge system that predates the brand by generations." },
            { type: "text", span: 4, rowspan: 3, label: "Learning + Education", sub: "Ethnobotany session. History of the Rhododendron in Vedic medicine. The science of anthocyanins. The economics of fair harvest." },
            { type: "text", span: 4, rowspan: 3, label: "Leaving a Legacy", sub: "Plant a Rhododendron sapling in the expansion medicinal garden. Your name on the tree. You are part of the next harvest." },
          ]
        ],
        ctas: [],
        data: "None",
        assetPrompt: null,
        claudeCode: "sections/WildernessGrid.tsx — 6 tiles, CSS grid 3x2 (mobile: 2x3). Each tile: crimson botanical icon (SVG leaf/flower), Cormorant italic activity name, EB Garamond 2-line description. Background alternates C.ivory and C.parchment. No photography needed.",
      },
      {
        id: "st-booking", label: "04 · Booking Enquiry Form", layoutLabel: "Full width · Split · Form right · Expectation setter left",
        rows: [
          [
            { type: "text", span: 5, rowspan: 8, label: "What is included", sub: "Accommodation (partner property TBD) / All meals / BURANSH daily / Harvest walk / Women session / Educational tour / Make-your-own session / Farewell bottle. Duration: 2 nights minimum." },
            { type: "form", span: 7, rowspan: 8, label: "STAYCATION INQUIRY FORM", sub: "Name / Email / Phone / Preferred dates / Group size / Which experiences interested / Any dietary requirements / How did you hear about us / Message." },
          ],
          [
            { type: "cta", span: 7, rowspan: 1, label: "Submit Staycation Enquiry", sub: "Crimson → /api/staycation-inquiry → Google Sheets STAYCATION tab + alert email to team" },
          ]
        ],
        ctas: [
          { label: "Submit Staycation Enquiry", type: "primary-full", fill: "Crimson full width", dest: "/api/staycation-inquiry → Google Sheets + team alert email", placement: "Form submit" },
        ],
        data: "STAYCATION DATA: Name / Email / Phone / Dates / Group size / Experiences / Dietary / Source / Message / Timestamp. Google Sheets tab: STAYCATION_INQUIRIES. Immediate alert email to team on every submission. Auto-reply to guest confirming receipt.",
        assetPrompt: null,
        claudeCode: "sections/StaycationBooking.tsx — react-hook-form. Multi-select checkboxes for experience interests (array). Date input: native HTML date picker styled to match brand. /api/staycation-inquiry: writes to STAYCATION_INQUIRIES sheet tab + sends team alert (EmailService) + sends guest confirmation email. Form scroll target: id=booking-form (linked from hero CTA).",
      },
    ],
  },

  // ── 5. EXTRAS / MORE ──────────────────────────────────────────────────────
  {
    id: "extras", path: "/more", name: "More",
    purpose: "Omakase experience, coming-soon products (Jam + Tea), full compliance documentation, and the BURANSH story for media/press.",
    tech: "Next.js 14 · Static content · Google Sheets for waitlist + Omakase inquiry",
    sections: [
      {
        id: "ex-omakase", label: "01 · Omakase Experience", layoutLabel: "Full width · Dark premium · Inquiry form",
        rows: [
          [
            { type: "text", span: 7, rowspan: 6, label: "Omakase concept", sub: "A private, guided tasting experience hosted by the BURANSH founder. 5–8 guests maximum. Curated pours across 4 preparations (Classic / Warm / Fizz / Seasonal). Each pour accompanied by a narrated chapter of the origin story. Location: client property or partner venue." },
            { type: "form", span: 5, rowspan: 6, label: "OMAKASE INQUIRY FORM", sub: "Name / Email / Phone / Guest count / Preferred city / Preferred dates / Occasion / Budget range." },
          ],
          [
            { type: "cta", span: 5, rowspan: 1, label: "Request an Omakase", sub: "Crimson → /api/omakase → Google Sheets OMAKASE tab" },
          ]
        ],
        ctas: [
          { label: "Request an Omakase", type: "primary", fill: "Crimson", dest: "/api/omakase → Google Sheets OMAKASE tab + team email", placement: "Form submit" },
        ],
        data: "OMAKASE DATA: Name / Email / Phone / Guest count / City / Dates / Occasion / Budget / Timestamp. Google Sheets tab: OMAKASE_INQUIRIES.",
        assetPrompt: "OMAKASE SETTING — Intimate tableau: A low wooden table, floor-level or at counter height, set with 4 raw ceramic cups (unglazed, earth-toned, hand-thrown) in a precise line. The BURANSH bottle stands at the top of the setting. A small folded menu card (cream, BURANSH printed in Cormorant) rests beside each cup. One fresh Rhododendron bloom placed at the centre. Mood: Japanese omakase counter meets Himalayan materials — the quiet authority of a chef's table. Light: single warm spotlight from above, deep shadows around. Reference: Noma tasting menu photography, Sukiyabashi Jiro setting aesthetic but with Indian botanical materials.",
        claudeCode: "sections/OmakaseExperience.tsx — Background C.ink. Text: C.ivory. Form: minimal inputs, crimson labels, gold border on inputs. /api/omakase: sheets write + team email. This page should feel the most exclusive of all BURANSH digital touchpoints — maximum whitespace, minimum elements.",
      },
      {
        id: "ex-coming", label: "02 · Coming Soon — BURANSH JAM + TEA", layoutLabel: "Full width · 2-col teasers + waitlist forms",
        rows: [
          [
            { type: "text", span: 6, rowspan: 4, label: "BURANSH JAM — Coming Soon", sub: "Rhododendron fruit preserve. Single-origin. No pectin. Wild-harvested. Coming: next harvest season." },
            { type: "text", span: 6, rowspan: 4, label: "BURANSH TEA — Coming Soon", sub: "Dried Rhododendron petal infusion. Caffeine-free. High altitude harvest. Coming: dry season." },
          ],
          [
            { type: "form", span: 6, rowspan: 2, label: "Jam waitlist", sub: "Name + Email → WAITLIST_JAM Google Sheets tab" },
            { type: "form", span: 6, rowspan: 2, label: "Tea waitlist", sub: "Name + Email → WAITLIST_TEA Google Sheets tab" },
          ]
        ],
        ctas: [
          { label: "Notify me — Jam", type: "form-submit", fill: "Crimson", dest: "/api/waitlist?product=jam", placement: "Jam form submit" },
          { label: "Notify me — Tea", type: "form-submit", fill: "Crimson", dest: "/api/waitlist?product=tea", placement: "Tea form submit" },
        ],
        data: "WAITLIST: Name + Email + Product + Timestamp. Sheets tabs: WAITLIST_JAM and WAITLIST_TEA. Route: /api/waitlist with ?product=jam|tea query param.",
        assetPrompt: null,
        claudeCode: "sections/ComingSoon.tsx — Shared component with homepage coming soon section (same data). COMING SOON badge: C.gold border + C.gold text, small caps EB Garamond. Waitlist form: 2 fields, minimal. /api/waitlist: reads ?product query param to determine which sheet tab to write.",
      },
      {
        id: "ex-compliance", label: "03 · Full Compliance Documentation", layoutLabel: "Full width · Document list · Download links",
        rows: [
          [
            { type: "badge", span: 4, rowspan: 3, label: "FSSAI Licence", sub: "Licence number + issuing authority + validity date" },
            { type: "badge", span: 4, rowspan: 3, label: "Lab Test Reports", sub: "Third-party lab name + report summary + download PDF" },
            { type: "badge", span: 4, rowspan: 3, label: "Origin Certification", sub: "Uttarakhand origin verified / GI tag status / Harvest audit" },
          ]
        ],
        ctas: [
          { label: "Download Lab Report (PDF)", type: "ghost", fill: "Green border", dest: "/documents/buransh-lab-report.pdf", placement: "Beside each compliance item" },
        ],
        data: "None — static documents. PDFs stored in /public/documents/",
        assetPrompt: null,
        claudeCode: "sections/Compliance.tsx — compliance data from /lib/compliance.ts. Each item: badge icon (SVG stamp, reuse from homepage), certification name, details, download link (next.js static file from /public/documents). All PDFs must be stored securely. Add noindex meta tag to this page if compliance documents are sensitive.",
      },
    ],
  },

];

// ─────────────────────────────────────────────────────────────────────────────
// DATA FLOW SUMMARY (shown on a dedicated tab)
// ─────────────────────────────────────────────────────────────────────────────
const DATA_FLOWS = [
  { form: "Product Order", route: "/api/create-order + /api/payment-verify", sheet: "ORDERS", trigger: "PaymentSDK payment success", email: "Confirmation to customer + alert to team" },
  { form: "Bulk / Wholesale Inquiry", route: "/api/bulk-inquiry", sheet: "BULK_ORDERS", trigger: "Form submit", email: "Alert to team" },
  { form: "Staycation Inquiry", route: "/api/staycation-inquiry", sheet: "STAYCATION_INQUIRIES", trigger: "Form submit", email: "Auto-reply to guest + alert to team" },
  { form: "Omakase Request", route: "/api/omakase", sheet: "OMAKASE_INQUIRIES", trigger: "Form submit", email: "Alert to team" },
  { form: "Jam Waitlist", route: "/api/waitlist?product=jam", sheet: "WAITLIST_JAM", trigger: "Form submit", email: "Confirmation to guest" },
  { form: "Tea Waitlist", route: "/api/waitlist?product=tea", sheet: "WAITLIST_TEA", trigger: "Form submit", email: "Confirmation to guest" },
  { form: "Footer Contact", route: "/api/contact", sheet: "CONTACT", trigger: "Form submit", email: "Alert to team" },
];

// ─────────────────────────────────────────────────────────────────────────────
// CODEX BRIEF COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function CodexBrief({ C }) {
  const blocks = [
    {
      id: "init", title: "A · Project Init + Dependencies", color: C.ink, tc: C.gold,
      items: [
        { label: "Create project", code: true, text: "npx create-next-app@latest buransh --typescript --tailwind --app --src-dir=false --import-alias @/*\ncd buransh" },
        { label: "Install all dependencies", code: true, text: "npm install ANIM-LIB studio-freight-lenis framer-motion payment-sdk google-api-client email-sdk react-hook-form @hookform/resolvers zod sharp\nnpm install -D @types/payment-sdk" },
        { label: "Fonts — in app/layout.tsx via next/font/google", code: false, text: "Cormorant_Garamond: weights [300,400,600,700], styles [normal,italic], var --font-cormorant\nEB_Garamond: weights [300,400,500], styles [normal,italic], var --font-eb-garamond\nNoto_Sans_Devanagari: weights [300,400], var --font-noto-devanagari (Sanskrit shlok only)" },
      ]
    },
    {
      id: "env", title: "B · Environment Variables (.env.local)", color: C.umber, tc: C.ivory,
      items: [
        { label: "All keys", code: true, text: "NEXT_PUBLIC_PAYMENT-SDK_KEY_ID=rzp_test_XXXXXXXX\nPAYMENT-SDK_KEY_SECRET=XXXXXXXX\nGOOGLE_SHEET_ID=your_sheet_id_from_url\nGOOGLE_SHEETS_CREDENTIALS=base64_of_service_account_json\nEMAIL-SVC_API_KEY=re_XXXXXXXX\nTEAM_EMAIL=team@aatreyelixir.com\nFROM_EMAIL=no-reply@aatreyelixir.com\nNEXT_PUBLIC_BASE_URL=https://buransh.com" },
        { label: "Google Sheets setup", code: false, text: "1. GCP console — create project BURANSH\n2. Enable Google Sheets API\n3. Create Service Account buransh-sheets — JSON key — download\n4. base64 encode: cat credentials.json | base64 — paste as GOOGLE_SHEETS_CREDENTIALS\n5. Create Sheet: BURANSH_DATA — share with service account (Editor)\n6. Copy Sheet ID from URL — paste as GOOGLE_SHEET_ID\n7. Create tabs: ORDERS / BULK_ORDERS / STAYCATION_INQUIRIES / OMAKASE_INQUIRIES / WAITLIST_JAM / WAITLIST_TEA / CONTACT\n8. Add column headers in row 1 of each tab matching the appendRow() values in each API route" },
      ]
    },
    {
      id: "structure", title: "C · File Structure — Create All Folders First", color: C.green, tc: C.ivory,
      items: [
        { label: "Full tree", code: true, text: "buransh/\n├── app/\n│   ├── layout.tsx\n│   ├── page.tsx                   # /\n│   ├── elixir/page.tsx            # /elixir\n│   ├── about/page.tsx             # /about\n│   ├── staycation/page.tsx        # /staycation\n│   ├── more/page.tsx              # /more\n│   ├── thank-you/page.tsx\n│   ├── globals.css\n│   └── api/\n│       ├── create-order/route.ts\n│       ├── payment-verify/route.ts\n│       ├── bulk-inquiry/route.ts\n│       ├── staycation-inquiry/route.ts\n│       ├── omakase/route.ts\n│       ├── waitlist/route.ts      # ?product=jam|tea\n│       └── contact/route.ts\n├── components/\n│   ├── Nav.tsx\n│   ├── Footer.tsx\n│   ├── LotusLogo.tsx\n│   ├── ComplianceBadges.tsx\n│   ├── LenisProvider.tsx\n│   └── ui/ Button.tsx · OrnamentLine.tsx · GrainOverlay.tsx\n├── sections/\n│   ├── home/ Hero · ValuePillars · ProductIntro · Testimonials · WomenTeaser · HimalayanLandscape · ComingSoon\n│   ├── elixir/ ElixirHero · WhatItIs · BetterThan · Occasions · RecipeCards · Customisation · GiftingPackages · OrderSection · BulkInquiry\n│   ├── about/ NameOrigin · ProjectAatmanirbhar · WomenFeature · Documentary\n│   ├── staycation/ StaycationHero · StaycationJourney · WildernessGrid · StaycationBooking\n│   └── more/ OmakaseExperience · ComingSoonProducts · Compliance\n├── lib/\n│   ├── tokens.ts · sheets.ts · email.ts · payment-sdk.ts\n│   ├── brand-content.ts · women.ts · testimonials.ts · compliance.ts\n├── public/\n│   ├── lotus-mark.svg\n│   └── images/\n│       ├── bottle-handheld.jpg    # EXISTING\n│       ├── box-packaging.jpg      # EXISTING\n│       └── [all commissioned assets — see Asset Prompts tab]\n└── next.config.js · tailwind.config.js · .env.local" },
      ]
    },
    {
      id: "libs", title: "D · Core Library Files", color: "#1A3A5C", tc: C.ivory,
      items: [
        { label: "tailwind.config.js", code: true, text: "module.exports = {\n  content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}','./sections/**/*.{ts,tsx}'],\n  theme: { extend: {\n    colors: {\n      ivory:'#F5EDD8', parchment:'#EDE3C8', linen:'#E0D0B0',\n      crimson:'#C4392B', gold:'#C4A030', umber:'#7A4E1E',\n      ink:'#18100A', muted:'#9C8868', green:'#3D5C3A',\n    },\n    fontFamily: {\n      display:['var(--font-cormorant)','serif'],\n      body:['var(--font-eb-garamond)','serif'],\n      deva:['var(--font-noto-devanagari)','sans-serif'],\n    },\n    transitionTimingFunction:{ quart:'cubic-bezier(0.76,0,0.24,1)' },\n  }},\n  plugins:[],\n}" },
        { label: "lib/tokens.ts", code: true, text: "export const T = {\n  ivory:'#F5EDD8', parchment:'#EDE3C8', linen:'#E0D0B0',\n  crimson:'#C4392B', crimsonD:'#A02E20', gold:'#C4A030',\n  umber:'#7A4E1E', ink:'#18100A', muted:'#9C8868', border:'#D8C8A8', green:'#3D5C3A',\n  ease:'cubic-bezier(0.76,0,0.24,1)',\n  duration:{ fast:400, mid:500, slow:600 },\n} as const" },
        { label: "lib/sheets.ts", code: true, text: "import { google } from 'google-api-client'\nconst getAuth = () => {\n  const creds = JSON.parse(Buffer.from(process.env.GOOGLE_SHEETS_CREDENTIALS!,'base64').toString())\n  return new google.auth.GoogleAuth({ credentials:creds, scopes:['https://www.google-api-client.com/auth/spreadsheets'] })\n}\nexport async function appendRow(tab: string, values: (string|number)[]) {\n  const sheets = google.sheets({ version:'v4', auth: await getAuth() })\n  await sheets.spreadsheets.values.append({\n    spreadsheetId: process.env.GOOGLE_SHEET_ID!,\n    range:`${tab}!A:Z`,\n    valueInputOption:'USER_ENTERED',\n    requestBody:{ values:[[new Date().toISOString(),...values]] },\n  })\n}" },
        { label: "lib/email.ts", code: true, text: "import { EmailService } from 'email-sdk'\nconst email-sdk = new EmailService(process.env.EMAIL-SVC_API_KEY)\nexport async function sendTeamAlert(subject:string, html:string) {\n  return email-sdk.emails.send({ from:process.env.FROM_EMAIL!, to:process.env.TEAM_EMAIL!, subject, html })\n}\nexport async function sendGuestConfirmation(to:string, subject:string, html:string) {\n  return email-sdk.emails.send({ from:process.env.FROM_EMAIL!, to, subject:`BURANSH - ${subject}`, html })\n}" },
        { label: "lib/payment-sdk.ts", code: true, text: "import PaymentSDK from 'payment-sdk'\n// uses built-in hash utilities\nexport const payment-sdk = new PaymentSDK({ key_id:process.env.NEXT_PUBLIC_PAYMENT-SDK_KEY_ID!, key_secret:process.env.PAYMENT-SDK_KEY_SECRET! })\nexport function verifySignature(orderId:string, paymentId:string, signature:string) {\n  const expected = hashUtil.createHmac('sha256',process.env.PAYMENT-SDK_KEY_SECRET!).update(`${orderId}|${paymentId}`).digest('hex')\n  return expected === signature\n}" },
        { label: "components/LenisProvider.tsx", code: true, text: "'use client'\nimport { useEffect } from 'react'\nimport Lenis from 'studio-freight-lenis'\nimport { ANIM-LIB } from 'ANIM-LIB-lib'\nimport { ScrollTrig } from 'ANIM-LIB_ScrollTrig'\nANIM-LIB.registerPlugin(ScrollTrig)\nexport default function LenisProvider({ children }:{ children:React.ReactNode }) {\n  useEffect(() => {\n    const lenis = new Lenis({ duration:1.2, smoothWheel:true })\n    lenis.on('scroll', ScrollTrig.update)\n    ANIM-LIB.ticker.add((t) => lenis.raf(t*1000))\n    ANIM-LIB.ticker.lagSmoothing(0)\n    return () => { lenis.destroy() }\n  },[])\n  return <>{children}</>\n}" },
      ]
    },
    {
      id: "buildorder", title: "E · Build Order — Execute in This Exact Sequence", color: C.gold, tc: C.ink,
      items: [
        { label: "Step by step — do not skip or reorder", code: false, text: "01. Project init + all dependencies\n02. .env.local + Google Sheets workbook + service account setup\n03. Create all directories\n04. next.config.js + tailwind.config.js\n05. lib/tokens.ts\n06. lib/sheets.ts + lib/email.ts + lib/payment-sdk.ts\n07. lib/brand-content.ts (all static copy — TODO comments for unconfirmed fields)\n08. lib/women.ts + lib/testimonials.ts + lib/compliance.ts (placeholder data)\n09. components/ui/Button.tsx + OrnamentLine.tsx + GrainOverlay.tsx\n10. components/LotusLogo.tsx (SVG from existing logo)\n11. components/ComplianceBadges.tsx (6 SVG stamp components, animated rotation on scroll)\n12. components/LenisProvider.tsx\n13. components/Nav.tsx (fixed bar + fullscreen overlay — highest complexity, build carefully)\n14. components/Footer.tsx\n15. app/layout.tsx (fonts, LenisProvider, Nav, Footer, metadata)\n16. app/globals.css (resets, scrollbar, bg-ivory body)\n17. ALL 7 API routes — test each with curl/Postman before UI build begins\n18. sections/home/* — all 7 components (use placeholder divs for commissioned images)\n19. app/page.tsx\n20. sections/elixir/* — all 9 components (OrderSection last, needs PaymentSDK)\n21. app/elixir/page.tsx\n22. sections/about/* — all 4 components\n23. app/about/page.tsx\n24. sections/staycation/* — all 4 components\n25. app/staycation/page.tsx\n26. sections/more/* — all 3 components\n27. app/more/page.tsx\n28. app/thank-you/page.tsx\n29. Full E2E test: PaymentSDK test payment → Sheets row → emails received\n30. Replace placeholder image divs with real assets as photography arrives" },
      ]
    },
    {
      id: "placeholder", title: "F · Placeholder + Content Rules", color: C.muted, tc: C.ivory,
      items: [
        { label: "Image placeholder pattern — use for all commissioned assets", code: true, text: "// Before real image arrives:\n<div style={{\n  width:'100%', aspectRatio:'3/4', // match final image ratio exactly\n  background:'#E0D0B080', border:'1px dashed #C0A880',\n  display:'flex', alignItems:'center', justifyContent:'center',\n}}>\n  <p style={{ fontFamily:'EB Garamond,serif', fontStyle:'italic', color:'#9C8868', fontSize:13 }}>\n    bottle-editorial.jpg — object-position: center\n  </p>\n</div>\n// When real image arrives — replace entire div with:\n// <Image src='/images/bottle-editorial.jpg' alt='...' fill style={{objectFit:'cover'}} priority />" },
        { label: "Existing assets — use immediately", code: false, text: "bottle-handheld.jpg — /elixir WhatItIs, /elixir OrderSection sidebar, /pour Occasions\nbox-packaging.jpg — /elixir WhatItIs left col, /elixir GiftingPackages single tier\nlotus-mark.svg — Nav, Footer, LotusLogo component (extract SVG paths from existing logo file)" },
        { label: "Copy rule — never hardcode text in JSX", code: false, text: "All copy from lib/brand-content.ts or relevant lib/*.ts. Mark unconfirmed fields:\n// TODO: confirm with client before launch — [field name]\n\nFields MUST confirm before launch:\n- Price per bottle (all SKUs + gifting tiers)\n- FSSAI licence number (exact)\n- Lab test report PDF\n- All testimonial quotes + written permission\n- Sanskrit shlok + transliteration + translation\n- Documentary film URL\n- Staycation property partner + accommodation details\n- Dilution ratio (published or kept as to taste)\n- Impact numbers for Project Aatmanirbhar" },
        { label: "PaymentSDK — test mode entire build phase", code: true, text: "# Use rzp_test_ keys during entire build\n# Test card: 4111 1111 1111 1111 / any future expiry / any CVV\n# Test UPI: success@payment-sdk\n# Switch to rzp_live_ ONLY after:\n# 1. Price confirmed by client\n# 2. FSSAI number confirmed\n# 3. PaymentSDK KYC completed on dashboard\n# 4. Full E2E test order placed successfully" },
      ]
    },
    {
      id: "superprompt", title: "G · Codex Superprompt — Copy + Paste Before Every Session", color: C.crimson, tc: C.ivory,
      items: [
        { label: "Opening context — paste once at start of every Codex session", code: false, text: "You are building BURANSH by Aatrey Elixir — a premium Himalayan Rhododendron elixir e-commerce website.\n\nTECH STACK: Next.js 14 App Router, TypeScript, Tailwind CSS, ANIM-LIB + Lenis (scroll), Framer Motion (component transitions), PaymentSDK (payments), Google Sheets API via google-api-client (form data), EmailService (email).\n\nDESIGN SYSTEM (locked — do not deviate):\n- Display: Cormorant Garamond (--font-cormorant)\n- Body + bottle label: EB Garamond (--font-eb-garamond)\n- Primary accent: Crimson #C4392B\n- Ornamental: Gold #C4A030\n- Background: Warm Ivory #F5EDD8\n- Body text: Deep Ink #18100A\n- Motion: 400-600ms ease cubic-bezier(0.76,0,0.24,1)\n- All tokens in lib/tokens.ts — always import from there, never hardcode\n\nRULES:\n- Never hardcode copy in JSX — all text from lib/brand-content.ts\n- No UI component libraries (no shadcn, MUI, etc) — all components custom\n- No icon libraries — all icons inline SVG\n- Commissioned images not yet available: use styled placeholder divs with filename label\n- All forms: react-hook-form + zod, POST to /app/api/ routes, write to Google Sheets via lib/sheets.ts, email via lib/email.ts\n\nPAGES: / (Home) | /elixir (Product + Order) | /about (Aatrey story + Aatmanirbhar + Women) | /staycation (Uttarakhand experience + booking) | /more (Omakase + Jam/Tea coming soon + Compliance)\n\nBuild in the sequence defined in the Codex Build Brief Section E. Confirm each file before moving to next." },
        { label: "Per-component task template", code: false, text: "Build [ComponentName] — [Page] page — sections/[page]/[ComponentName].tsx\nLayout: [from blueprint]\nBlocks: [TEXT/IMAGE/CTA as specified]\nImages: [filename] — placeholder div if not in /public/images/ yet\nCopy: import [field names] from lib/brand-content.ts\nANIM-LIB: [fade/slide/parallax] [duration]ms T.ease on ScrollTrig enter\nCTAs: [label] Button variant=[primary/ghost] href=[destination]\nMobile: [responsive behaviour]\nTypeScript: typed props interface, export default" },
      ]
    },
  ];

  return (
    <div style={{ display:"flex", flexDirection:"column", gap:"3px" }}>
      <div style={{ background:C.crimson, padding:"16px 20px", marginBottom:"4px" }}>
        <p style={{ fontFamily:"sans-serif", fontSize:"7px", letterSpacing:"4px", textTransform:"uppercase", color:C.ivory, opacity:0.7, marginBottom:"4px" }}>PASTE THE SUPERPROMPT IN SECTION G INTO CODEX BEFORE ANY BUILD TASK</p>
        <p style={{ fontFamily:C.display, fontSize:"clamp(14px,2.5vw,20px)", fontStyle:"italic", color:C.ivory, lineHeight:1.5 }}>Complete technical brief — project setup, file structure, library code, build order, content rules, and the superprompt for Codex.</p>
      </div>
      {blocks.map(block => (
        <div key={block.id} style={{ border:`2px solid ${block.color}30`, marginBottom:"2px" }}>
          <div style={{ background:block.color, padding:"10px 16px" }}>
            <p style={{ fontFamily:C.display, fontSize:"clamp(13px,2vw,17px)", fontStyle:"italic", color:block.tc }}>{block.title}</p>
          </div>
          <div style={{ background:C.ivory }}>
            {block.items.map((item,ii) => (
              <div key={ii} style={{ borderBottom:`1px solid ${C.border}50`, padding:"12px 16px" }}>
                <p style={{ fontFamily:"sans-serif", fontSize:"7px", letterSpacing:"2px", textTransform:"uppercase", color:C.muted, marginBottom:"8px" }}>{item.label}</p>
                {item.code
                  ? <pre style={{ fontFamily:"Courier New, monospace", fontSize:"10px", color:C.ink, lineHeight:1.75, background:"#18100A08", padding:"12px", overflowX:"auto", whiteSpace:"pre-wrap", wordBreak:"break-word" }}>{item.text}</pre>
                  : <p style={{ fontFamily:C.body, fontSize:"13px", color:C.ink, lineHeight:1.85, whiteSpace:"pre-line" }}>{item.text}</p>
                }
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// RENDER HELPERS
// ─────────────────────────────────────────────────────────────────────────────
function WireframeBox({ block, rowIdx, colIdx, onSelect, selected }) {
  const s = BOX[block.type];
  const isSelected = selected && selected.rowIdx === rowIdx && selected.colIdx === colIdx;
  return (
    <div
      onClick={() => onSelect({ rowIdx, colIdx, block })}
      style={{
        gridColumn: `span ${block.span}`,
        gridRow: `span ${block.rowspan}`,
        background: isSelected ? s.border : s.bg,
        border: `2px solid ${isSelected ? C.crimson : s.border}`,
        padding: "8px 10px",
        cursor: "pointer",
        minHeight: `${block.rowspan * 36}px`,
        display: "flex", flexDirection: "column", justifyContent: "space-between",
        transition: `all 0.25s ${C.ease}`,
        position: "relative",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <span style={{ fontFamily: "sans-serif", fontSize: "7px", letterSpacing: "2px", textTransform: "uppercase", color: isSelected ? C.ivory : s.textCol, opacity: 0.8 }}>{s.label}</span>
        {block.type === "cta" && <span style={{ color: C.ivory, fontSize: "8px" }}>→</span>}
      </div>
      <div>
        <p style={{ fontFamily: C.body, fontSize: "11px", color: isSelected ? C.ivory : C.ink, lineHeight: 1.3, fontStyle: block.type === "text" ? "italic" : "normal", fontWeight: block.type === "cta" ? 400 : 300 }}>{block.label}</p>
      </div>
    </div>
  );
}

function DetailPanel({ block, section }) {
  const [tab, setTab] = useState("content");
  if (!block) return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "200px", color: C.muted, fontFamily: C.body, fontStyle: "italic", fontSize: "14px" }}>
      Click any block in the wireframe to see details
    </div>
  );
  const s = BOX[block.type];
  return (
    <div style={{ border: `2px solid ${s.border}`, background: C.ivory }}>
      <div style={{ background: s.bg, padding: "12px 16px", borderBottom: `1px solid ${s.border}`, display: "flex", gap: "12px", alignItems: "center" }}>
        <span style={{ fontFamily: "sans-serif", fontSize: "7px", letterSpacing: "2px", textTransform: "uppercase", color: s.textCol, background: s.border, padding: "2px 8px" }}>{s.label}</span>
        <span style={{ fontFamily: C.body, fontSize: "14px", fontStyle: "italic", color: C.ink }}>{block.label}</span>
      </div>
      <div style={{ padding: "14px 16px" }}>
        <p style={{ fontFamily: C.body, fontSize: "13px", color: C.muted, lineHeight: 1.6, marginBottom: "14px", fontStyle: "italic" }}>{block.sub}</p>
        {block.type === "img" && section.assetPrompt && (
          <div style={{ background: "#E8D8B020", border: `1px solid ${C.umber}40`, padding: "12px 14px", marginBottom: "10px" }}>
            <p style={{ fontFamily: "sans-serif", fontSize: "7.5px", letterSpacing: "2px", textTransform: "uppercase", color: C.umber, marginBottom: "6px" }}>ASSET PROMPT — as if prompting an AI image generator</p>
            <p style={{ fontFamily: C.body, fontSize: "12.5px", color: C.ink, lineHeight: 1.75 }}>{section.assetPrompt}</p>
          </div>
        )}
        {block.type === "form" && (
          <div style={{ background: "#FFF8E820", border: `1px solid ${C.gold}50`, padding: "12px 14px", marginBottom: "10px" }}>
            <p style={{ fontFamily: "sans-serif", fontSize: "7.5px", letterSpacing: "2px", textTransform: "uppercase", color: C.umber, marginBottom: "6px" }}>DATA COLLECTION</p>
            <p style={{ fontFamily: C.body, fontSize: "12.5px", color: C.ink, lineHeight: 1.75 }}>{section.data}</p>
          </div>
        )}
        {section.claudeCode && (
          <div style={{ background: C.ink, padding: "12px 14px" }}>
            <p style={{ fontFamily: "sans-serif", fontSize: "7.5px", letterSpacing: "2px", textTransform: "uppercase", color: C.gold, marginBottom: "6px" }}>CLAUDE CODE IMPLEMENTATION NOTES</p>
            <p style={{ fontFamily: "sans-serif", fontSize: "11px", color: C.parchment, lineHeight: 1.75 }}>{section.claudeCode}</p>
          </div>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN
// ─────────────────────────────────────────────────────────────────────────────
export default function FullBlueprint() {
  const [activePage, setActivePage] = useState("home");
  const [activeSection, setActiveSection] = useState(null);
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [mainTab, setMainTab] = useState("wireframe");

  useEffect(() => {
    const s = document.createElement("style");
    s.textContent = `
      @import url('https://fonts.google-api-client.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=EB+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap');
      *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
      body{background:${C.parchment};}
      button{font-family:inherit;}
      ::-webkit-scrollbar{width:3px;}
      ::-webkit-scrollbar-thumb{background:${C.crimson};}
    `;
    document.head.appendChild(s);
    return () => { try { document.head.removeChild(s); } catch(e){} };
  }, []);

  const page = PAGES.find(p => p.id === activePage);

  const handleSectionClick = (sectionId) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
    setSelectedBlock(null);
  };

  return (
    <div style={{ background: C.parchment, minHeight: "100vh" }}>

      {/* Header */}
      <div style={{ background: C.ink, padding: "20px 24px" }}>
        <p style={{ fontFamily: "sans-serif", fontSize: "7px", letterSpacing: "5px", textTransform: "uppercase", color: C.crimson, marginBottom: "6px" }}>BURANSH · AATREY ELIXIR</p>
        <h1 style={{ fontFamily: C.display, fontSize: "clamp(20px,3.5vw,32px)", fontWeight: 300, fontStyle: "italic", color: C.ivory, letterSpacing: "-0.3px" }}>
          Full Website Blueprint — Visual Layout, CTA Architecture + Claude Code Brief
        </h1>
      </div>

      {/* Main tab bar */}
      <div style={{ background: C.parchment, borderBottom: `1px solid ${C.border}`, display: "flex", padding: "0 24px", gap: 0, overflowX: "auto" }}>
        {[
          { id: "wireframe", label: "Page Wireframes" },
          { id: "cta", label: "CTA Architecture" },
          { id: "data", label: "Data Flow" },
          { id: "assets", label: "Asset Prompts" },
          { id: "codex", label: "Codex Build Brief" },
        ].map(t => (
          <button key={t.id} onClick={() => setMainTab(t.id)} style={{
            background: "transparent", border: "none",
            borderBottom: `2px solid ${mainTab === t.id ? C.crimson : "transparent"}`,
            color: mainTab === t.id ? C.crimson : C.muted,
            padding: "12px 18px", cursor: "pointer",
            fontFamily: C.body, fontSize: "14px",
            whiteSpace: "nowrap", transition: `all 0.25s ${C.ease}`,
          }}>{t.label}</button>
        ))}
      </div>

      {/* Page selector */}
      <div style={{ background: C.ivory, borderBottom: `1px solid ${C.border}`, display: "flex", padding: "12px 24px", gap: "4px", overflowX: "auto" }}>
        {PAGES.map(p => (
          <button key={p.id} onClick={() => { setActivePage(p.id); setActiveSection(null); setSelectedBlock(null); }} style={{
            background: activePage === p.id ? C.crimson : "transparent",
            border: `1px solid ${activePage === p.id ? C.crimson : C.border}`,
            color: activePage === p.id ? C.ivory : C.ink,
            padding: "6px 16px", cursor: "pointer",
            fontFamily: C.body, fontSize: "13px",
            fontStyle: activePage === p.id ? "italic" : "normal",
            transition: `all 0.25s ${C.ease}`, whiteSpace: "nowrap",
          }}>
            <span style={{ fontFamily: "sans-serif", fontSize: "7px", letterSpacing: "1.5px", opacity: 0.7, display: "block" }}>{p.path}</span>
            {p.name}
          </button>
        ))}
      </div>

      {/* Page purpose bar */}
      <div style={{ background: C.surface, borderBottom: `1px solid ${C.border}`, padding: "10px 24px", display: "flex", gap: "24px", alignItems: "flex-start" }}>
        <div style={{ flex: 1 }}>
          <p style={{ fontFamily: C.body, fontSize: "13px", fontStyle: "italic", color: C.muted, lineHeight: 1.6 }}><strong style={{ fontStyle: "normal", color: C.umber, fontFamily: C.body }}>Page purpose:</strong> {page.purpose}</p>
        </div>
        <div style={{ flexShrink: 0 }}>
          <p style={{ fontFamily: "sans-serif", fontSize: "7.5px", letterSpacing: "1.5px", textTransform: "uppercase", color: C.muted, marginBottom: "2px" }}>Tech stack</p>
          <p style={{ fontFamily: "sans-serif", fontSize: "9px", color: C.pale }}>{page.tech}</p>
        </div>
      </div>

      <div style={{ padding: "16px 24px 60px" }}>

        {/* ── WIREFRAME VIEW ──────────────────────────────────────────────── */}
        {mainTab === "wireframe" && (
          <div>
            {page.sections.map(section => (
              <div key={section.id} style={{ marginBottom: "4px" }}>
                {/* Section header */}
                <button onClick={() => handleSectionClick(section.id)} style={{
                  width: "100%", background: activeSection === section.id ? C.umber : C.parchment,
                  border: `1px solid ${activeSection === section.id ? C.umber : C.border}`,
                  borderLeft: `4px solid ${activeSection === section.id ? C.crimson : C.border}`,
                  padding: "10px 16px", cursor: "pointer", display: "flex",
                  justifyContent: "space-between", alignItems: "center",
                  transition: `all 0.25s ${C.ease}`,
                }}>
                  <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                    <span style={{ fontFamily: C.body, fontSize: "14px", fontStyle: "italic", color: activeSection === section.id ? C.ivory : C.ink }}>{section.label}</span>
                    <span style={{ fontFamily: "sans-serif", fontSize: "7.5px", letterSpacing: "1px", color: activeSection === section.id ? C.parchment : C.muted, textTransform: "uppercase" }}>{section.layoutLabel}</span>
                  </div>
                  <span style={{ color: activeSection === section.id ? C.ivory : C.crimson, fontFamily: C.display, fontSize: "16px", transform: activeSection === section.id ? "rotate(45deg)" : "none", transition: `transform 0.25s ${C.ease}` }}>+</span>
                </button>

                {/* Expanded section */}
                {activeSection === section.id && (
                  <div style={{ background: C.ivory, border: `1px solid ${C.border}`, borderTop: "none", padding: "12px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "3px", marginBottom: "12px" }}>
                      {section.rows.map((row, rowIdx) =>
                        row.map((block, colIdx) => (
                          <WireframeBox key={`${rowIdx}-${colIdx}`} block={block} rowIdx={rowIdx} colIdx={colIdx}
                            onSelect={(sel) => setSelectedBlock(sel)}
                            selected={selectedBlock && selectedBlock.rowIdx === rowIdx && selectedBlock.colIdx === colIdx ? selectedBlock : null}
                          />
                        ))
                      )}
                    </div>

                    {/* CTAs for this section */}
                    {section.ctas && section.ctas.length > 0 && (
                      <div style={{ padding: "8px 10px", background: C.parchment, border: `1px solid ${C.border}`, marginBottom: "8px" }}>
                        <p style={{ fontFamily: "sans-serif", fontSize: "7px", letterSpacing: "2px", textTransform: "uppercase", color: C.muted, marginBottom: "6px" }}>CTAs in this section</p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                          {section.ctas.map((cta, i) => (
                            <div key={i} style={{ background: C.crimson + "15", border: `1px solid ${C.crimson}50`, padding: "4px 10px" }}>
                              <span style={{ fontFamily: C.body, fontSize: "12px", color: C.crimson, fontStyle: "italic" }}>{cta.label}</span>
                              <span style={{ fontFamily: "sans-serif", fontSize: "8px", color: C.muted, marginLeft: "8px" }}>→ {cta.dest}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Selected block detail */}
                    <DetailPanel block={selectedBlock ? selectedBlock.block : null} section={section} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ── CTA ARCHITECTURE ─────────────────────────────────────────────── */}
        {mainTab === "cta" && (
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "160px 1fr 1fr 160px", gap: "2px", marginBottom: "8px" }}>
              {["Section", "CTA Label", "Destination", "Type"].map(h => (
                <div key={h} style={{ padding: "8px 12px" }}>
                  <p style={{ fontFamily: "sans-serif", fontSize: "7px", letterSpacing: "2px", textTransform: "uppercase", color: C.muted }}>{h}</p>
                </div>
              ))}
            </div>
            {page.sections.flatMap(section =>
              (section.ctas || []).map((cta, i) => (
                <div key={`${section.id}-${i}`} style={{ display: "grid", gridTemplateColumns: "160px 1fr 1fr 160px", gap: "2px", marginBottom: "2px" }}>
                  <div style={{ background: C.parchment, border: `1px solid ${C.border}`, padding: "10px 12px" }}>
                    <p style={{ fontFamily: C.body, fontSize: "12px", fontStyle: "italic", color: C.muted }}>{section.label}</p>
                  </div>
                  <div style={{ background: C.crimson + "10", border: `1px solid ${C.crimson}40`, padding: "10px 12px" }}>
                    <p style={{ fontFamily: C.body, fontSize: "13px", color: C.crimson, fontStyle: "italic" }}>{cta.label}</p>
                    <p style={{ fontFamily: "sans-serif", fontSize: "8px", color: C.muted, marginTop: "2px" }}>{cta.placement}</p>
                  </div>
                  <div style={{ background: C.ivory, border: `1px solid ${C.border}`, padding: "10px 12px" }}>
                    <p style={{ fontFamily: "sans-serif", fontSize: "10px", color: C.umber }}>{cta.dest}</p>
                  </div>
                  <div style={{ background: cta.type === "primary" || cta.type === "primary-full" ? C.crimson + "20" : C.parchment, border: `1px solid ${C.border}`, padding: "10px 12px" }}>
                    <p style={{ fontFamily: "sans-serif", fontSize: "9px", letterSpacing: "1px", textTransform: "uppercase", color: C.muted }}>{cta.type}</p>
                    <p style={{ fontFamily: "sans-serif", fontSize: "9px", color: C.pale, marginTop: "2px" }}>{cta.fill}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* ── DATA FLOW ─────────────────────────────────────────────────────── */}
        {mainTab === "data" && (
          <div>
            <div style={{ marginBottom: "16px", padding: "14px 16px", background: C.ink, border: `1px solid ${C.border}` }}>
              <p style={{ fontFamily: "sans-serif", fontSize: "7.5px", letterSpacing: "2px", textTransform: "uppercase", color: C.gold, marginBottom: "8px" }}>GOOGLE SHEETS ARCHITECTURE — Single workbook: BURANSH_DATA</p>
              <p style={{ fontFamily: C.body, fontSize: "13px", color: C.parchment, lineHeight: 1.7 }}>All form submissions auto-write to one Google Sheets workbook (BURANSH_DATA) with separate tabs per form type. Integration via google-api-client npm package using a Google service account. Credentials stored in .env.local (never committed to git). Each API route in /app/api/ handles one form type. Team receives email alerts via EmailService API on every new submission.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "160px 180px 140px 120px 1fr", gap: "2px", marginBottom: "8px" }}>
              {["Form", "API Route", "Sheet Tab", "Trigger", "Emails sent"].map(h => (
                <div key={h} style={{ padding: "8px 12px" }}>
                  <p style={{ fontFamily: "sans-serif", fontSize: "7px", letterSpacing: "2px", textTransform: "uppercase", color: C.muted }}>{h}</p>
                </div>
              ))}
            </div>
            {DATA_FLOWS.map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "160px 180px 140px 120px 1fr", gap: "2px", marginBottom: "2px" }}>
                <div style={{ background: C.parchment, border: `1px solid ${C.border}`, padding: "10px 12px" }}>
                  <p style={{ fontFamily: C.body, fontSize: "13px", fontStyle: "italic", color: C.ink }}>{row.form}</p>
                </div>
                <div style={{ background: C.ink, border: `1px solid ${C.border}`, padding: "10px 12px" }}>
                  <p style={{ fontFamily: "sans-serif", fontSize: "9px", color: C.gold }}>{row.route}</p>
                </div>
                <div style={{ background: C.green + "12", border: `1px solid ${C.green}40`, padding: "10px 12px" }}>
                  <p style={{ fontFamily: "sans-serif", fontSize: "9px", color: C.green, letterSpacing: "0.5px" }}>{row.sheet}</p>
                </div>
                <div style={{ background: C.ivory, border: `1px solid ${C.border}`, padding: "10px 12px" }}>
                  <p style={{ fontFamily: "sans-serif", fontSize: "9px", color: C.muted }}>{row.trigger}</p>
                </div>
                <div style={{ background: C.ivory, border: `1px solid ${C.border}`, padding: "10px 12px" }}>
                  <p style={{ fontFamily: C.body, fontSize: "12px", fontStyle: "italic", color: C.umber }}>{row.email}</p>
                </div>
              </div>
            ))}
            <div style={{ marginTop: "16px", padding: "14px 16px", background: C.gold + "12", border: `1px solid ${C.gold}40` }}>
              <p style={{ fontFamily: "sans-serif", fontSize: "7.5px", letterSpacing: "2px", textTransform: "uppercase", color: C.umber, marginBottom: "6px" }}>CLAUDE CODE: /lib/sheets.ts</p>
              <p style={{ fontFamily: "sans-serif", fontSize: "11px", color: C.ink, lineHeight: 1.75 }}>Install: npm install google-api-client. Create Google Service Account in GCP. Share the BURANSH_DATA workbook with the service account email. Store credentials JSON in .env.local as GOOGLE_SHEETS_CREDENTIALS (base64 encoded). sheets.ts exports appendRow(tabName, values[]) function used by all API routes. Sheet ID stored as GOOGLE_SHEET_ID in .env.local.</p>
            </div>
          </div>
        )}

        {/* ── ASSET PROMPTS ─────────────────────────────────────────────────── */}
        {mainTab === "assets" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {page.sections.filter(s => s.assetPrompt).map(section => (
              <div key={section.id} style={{ border: `1px solid ${C.border}` }}>
                <div style={{ background: "#E8D8B0", padding: "10px 16px", borderBottom: `1px solid ${C.umber}40` }}>
                  <p style={{ fontFamily: "sans-serif", fontSize: "7px", letterSpacing: "2px", textTransform: "uppercase", color: C.umber, marginBottom: "2px" }}>IMAGE ASSET — {section.label}</p>
                </div>
                <div style={{ padding: "14px 16px", background: C.ivory }}>
                  <p style={{ fontFamily: C.body, fontSize: "14px", lineHeight: 1.85, color: C.ink }}>{section.assetPrompt}</p>
                </div>
              </div>
            ))}
            {page.sections.filter(s => s.assetPrompt).length === 0 && (
              <div style={{ padding: "40px", textAlign: "center" }}>
                <p style={{ fontFamily: C.body, fontSize: "14px", fontStyle: "italic", color: C.muted }}>No image assets required for this page — typography and existing assets cover all sections.</p>
              </div>
            )}
          </div>
        )}

        {mainTab === "codex" && <CodexBrief C={C} />}
      </div>
    </div>
  );
}
