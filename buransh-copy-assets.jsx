import { useState, useEffect } from "react";

const T = {
  ivory:"#F5EDD8", parchment:"#EDE3C8", linen:"#E0D0B0",
  crimson:"#C4392B", gold:"#C4A030", umber:"#7A4E1E",
  ink:"#18100A", muted:"#9C8868", pale:"#A89878",
  border:"#D8C8A8", green:"#3D5C3A",
  ease:"cubic-bezier(0.76,0,0.24,1)",
  display:"'Cormorant Garamond', serif",
  body:"'EB Garamond', serif",
};

// ─────────────────────────────────────────────────────────────────────────────
// ALL WEBSITE COPY
// ─────────────────────────────────────────────────────────────────────────────

const COPY = {

  // ── META ──────────────────────────────────────────────────────────────────
  meta: {
    siteName: "BURANSH by Aatrey Elixir",
    siteTagline: "Inherited, not manufactured.",
    siteDescription: "Luxury Himalayan Rhododendron Floral Concentrate. Harvested at 2,500m by the women of Uttarakhand. Asia's most celebrated wellness elixir.",
  },

  // ── HOMEPAGE / ────────────────────────────────────────────────────────────
  home: {
    nav: {
      wordmark: "BURANSH",
      sub: "by Aatrey Elixir",
    },
    hero: {
      preLabel: "AATREY ELIXIR · BURANSH",
      h1Line1: "Inherited,",
      h1Line2: "not manufactured.",
      body: "From the Rhododendron forests of Uttarakhand. At the elevation where the air is thin and the flowers know only the most patient hands.",
      cta1: "Order the Elixir",
      cta2: "Experience the Origin →",
      subLabel: "Asia-endorsed · Women-led · FSSAI certified · Uttarakhand origin",
    },
    pillars: {
      sectionLabel: "WHY BURANSH",
      headline: "Four reasons this elixir is unlike anything you have ever tasted.",
      items: [
        {
          number: "01",
          title: "Research & Quality",
          body: "Every bottle is cold-pressed within six hours of harvest. Tested by third-party laboratories. FSSAI certified. No shortcuts exist at 2,500 metres.",
          footnote: "Lab-verified · FSSAI certified · Single-ingredient",
        },
        {
          number: "02",
          title: "Origin & Altitude",
          body: "Rhododendron arboreum blooms for eight weeks a year between March and May. Only at altitude. Only in Uttarakhand. There is no substitute and no off-season reserve.",
          footnote: "2,500m above sea level · Single harvest annually",
        },
        {
          number: "03",
          title: "Women & Culture",
          body: "Project Aatmanirbhar. The women of Uttarakhand have harvested this flower for generations. They do not work for BURANSH — BURANSH exists because of them.",
          footnote: "Project Aatmanirbhar · Pahadi women harvesters",
        },
        {
          number: "04",
          title: "Homestay & Education",
          body: "The full story cannot be told on a screen. Come to the groves. Walk with the women. Make your own elixir. Leave knowing something that cannot be taught anywhere else.",
          footnote: "Uttarakhand staycation · Learn · Experience · Witness",
        },
      ],
      cta: "Discover the full story →",
    },
    product: {
      sectionLabel: "THE ELIXIR",
      headline: "Himalayan Rhododendron, distilled into a single bottle.",
      body: "BURANSH is a floral concentrate of Rhododendron arboreum — cold-pressed, unfiltered of its natural compounds, and bottled at source. It is not a juice. It is not a cordial. It is an elixir in the oldest sense of the word: a preparation of singular botanical intelligence, made to be diluted with intention.",
      specs: ["Cold-pressed", "Single harvest", "No additives", "No preservatives", "750ml · Rhododendron arboreum only"],
      cta1: "Buy the Elixir",
      cta2: "See all pairings →",
    },
    testimonials: {
      sectionLabel: "ASIA ENDORSED",
      headline: "The most trusted wellness voices have spoken.",
      items: [
        {
          quote: "I have spent two decades studying botanical medicine across Asia. BURANSH is the most extraordinary floral concentrate I have encountered — not for its novelty, but for its precision.",
          name: "Dr. [Name]",
          title: "Wellness Authority",
          city: "Singapore",
        },
        {
          quote: "In Japan, we call it ichigo ichie — once in a lifetime. BURANSH has that quality. It cannot be replicated. It can only be experienced.",
          name: "[Name]",
          title: "Integrative Medicine Practitioner",
          city: "Tokyo",
        },
        {
          quote: "For my practice in Ayurvedic clinical nutrition, I have never recommended a commercial botanical product. BURANSH is the first exception I have made in seventeen years.",
          name: "Dr. [Name]",
          title: "Ayurvedic Clinical Nutritionist",
          city: "New Delhi",
        },
      ],
      disclaimer: "All testimonials are from certified wellness practitioners and medical professionals. Full credentials available on request.",
    },
    women: {
      sectionLabel: "PROJECT AATMANIRBHAR",
      headline: "Their hands. Their hills. Their elixir.",
      body: "Before BURANSH was a brand, it was a practice. Pahadi women in the Rhododendron groves of Uttarakhand have understood this flower since before any name existed for it. They harvest by touch — knowing which bloom is ready, which is not, which will never be. That knowledge is not in any book. It lives in them.",
      body2: "Project Aatmanirbhar is our commitment that this knowledge is compensated with dignity. Every woman in the harvest is paid above fair trade standards, named in our records, and — if they choose — named on your bottle.",
      cta: "Meet the women →",
    },
    compliance: {
      sectionLabel: "CERTIFIED & VERIFIED",
      headline: "Trust is not asked for. It is earned.",
      badges: [
        { label: "FSSAI Certified", sub: "Licence No. [NUMBER]" },
        { label: "Cold Pressed", sub: "Process certified" },
        { label: "Single Harvest", sub: "Traceability verified" },
        { label: "No Additives", sub: "Clean label certified" },
        { label: "Made in India", sub: "Uttarakhand origin" },
        { label: "Lab Tested", sub: "Third-party verified" },
      ],
    },
    himalaya: {
      sectionLabel: "THE SOURCE",
      overlayHeadline: "2,500 metres above ordinary.",
      overlayBody: "The Rhododendron arboreum does not grow anywhere convenient. It does not bloom on schedule. It cannot be cultivated in a greenhouse or farmed at sea level. It requires altitude, cold, and time. Which means BURANSH can never be mass-produced. Which means it will never be everywhere.",
      stat1: { number: "2,500m", label: "Minimum harvest altitude" },
      stat2: { number: "8 weeks", label: "Annual bloom window" },
      stat3: { number: "1 harvest", label: "Per year, no exceptions" },
      cta: "Book the Uttarakhand Experience →",
    },
    comingSoon: {
      sectionLabel: "WHAT COMES NEXT",
      headline: "The Rhododendron has more to give.",
      items: [
        {
          name: "BURANSH Jam",
          body: "Rhododendron arboreum fruit preserve. Single-origin. No pectin. No stabilisers. Wild-harvested from the same groves. Available after the next harvest season.",
          cta: "Notify me when available",
          placeholder: "Your email address",
        },
        {
          name: "BURANSH Tea",
          body: "Dried Rhododendron petal infusion. Caffeine-free. High-altitude harvest. The elixir in its most meditative form. Coming in the dry season.",
          cta: "Notify me when available",
          placeholder: "Your email address",
        },
      ],
    },
    footer: {
      tagline: "Inherited, not manufactured.",
      copy: "© 2025 Aatrey Elixir. All rights reserved.",
      legal: "FSSAI Licence No. [NUMBER] · Made in India · Uttarakhand",
      privacyLink: "Privacy Policy",
      navLinks: ["Home", "Elixir", "About", "Staycation", "More"],
    },
  },

  // ── ELIXIR PAGE /elixir ───────────────────────────────────────────────────
  elixir: {
    hero: {
      preLabel: "AATREY ELIXIR — NO. 001",
      headline: "BURANSH",
      sub: "Himalayan Rhododendron Floral Concentrate · 750ml",
      cta: "Order Now ↓",
    },
    whatItIs: {
      sectionLabel: "THE CONCENTRATE",
      headline: "This is not a juice. This is an elixir.",
      body: "Rhododendron arboreum flowers are cold-pressed within six hours of harvest at 2,500 metres altitude. The resulting concentrate is dense with anthocyanins, quercetin, and natural phytocompounds that degrade rapidly at lower altitudes or with delay. Which is why BURANSH is made where it grows. And only then.",
      body2: "One 750ml bottle contains the cold-pressed concentrate of approximately [X] kilograms of hand-selected Rhododendron blooms. Dilute 1:8 with cold water, warm water, or sparkling water. Every sip is an altitude you did not have to climb to reach.",
      specs: [
        { label: "Format", value: "Floral concentrate" },
        { label: "Volume", value: "750ml" },
        { label: "Process", value: "Cold-pressed at source" },
        { label: "Harvest", value: "Single annual harvest, March–May" },
        { label: "Altitude", value: "2,400–2,600m, Uttarakhand" },
        { label: "Dilution", value: "1:8 ratio (or to taste)" },
        { label: "Shelf life", value: "[X] months from harvest date" },
        { label: "Additives", value: "None. Zero." },
      ],
    },
    betterThan: {
      sectionLabel: "A SUPERIOR CHOICE",
      headline: "The most civilised drink you have never had.",
      sub: "A benchmark comparison for the discerning mind.",
      comparisons: [
        {
          versus: "vs Soft Drinks",
          points: [
            "No refined sugar · No caramel colour",
            "No phosphoric acid · No artificial flavour",
            "Real single botanical origin",
            "Antioxidant-rich, not antioxidant-stripped",
          ],
        },
        {
          versus: "vs Packaged Juice",
          points: [
            "Not from concentrate · No preservatives",
            "No added synthetic vitamins",
            "Single ingredient — one flower, nothing else",
            "Processed at source, not in a factory",
          ],
        },
        {
          versus: "vs Energy Drinks",
          points: [
            "No caffeine spike · No taurine",
            "No artificial stimulants",
            "No post-consumption crash",
            "Sustained natural wellness, not borrowed energy",
          ],
        },
        {
          versus: "vs Alcohol",
          points: [
            "The social drink without the morning after",
            "Suitable for all ages at every occasion",
            "Premium enough for the table · Zero compromise",
            "The signature drink that everyone can hold",
          ],
        },
      ],
      closingLine: "BURANSH is the drink that required no compromise to be chosen.",
    },
    occasions: {
      sectionLabel: "FOR EVERY PERSON · EVERY MOMENT",
      headline: "One elixir. Every occasion.",
      sub: "BURANSH is not a niche wellness product. It is the premium beverage of choice for anyone who refuses to settle for ordinary.",
      tiles: [
        {
          title: "Urban Professionals",
          body: "The desk ritual. The meeting room. The board presentation. A beverage that communicates taste, discernment, and clarity without the need for explanation.",
          tag: "WORKPLACE · MEETINGS · DAILY RITUAL",
        },
        {
          title: "Children & Families",
          body: "Safe for every age group. No sugar, no caffeine, no compromise. The family dinner table, the school lunch, the after-practice recovery. BURANSH is what healthy looks like when it also tastes extraordinary.",
          tag: "CHILDREN · FAMILIES · SCHOOL",
        },
        {
          title: "The Elderly",
          body: "Anthocyanins. Quercetin. Natural anti-inflammatory compounds studied for joint health and cardiovascular support. The daily ritual that is both pleasurable and purposeful.",
          tag: "WELLNESS · DAILY HEALTH RITUAL",
        },
        {
          title: "Weddings & Celebrations",
          body: "The signature non-alcoholic welcome drink that no guest will forget. Customisable bottles for wedding gifting. A statement that this occasion was thought about, not just catered.",
          tag: "WEDDINGS · EVENTS · CELEBRATIONS",
        },
        {
          title: "Yoga, Gym & Sport",
          body: "Pre-workout hydration. Post-exercise recovery. Natural compounds that support physical practice without artificial stimulants. The athlete's elixir.",
          tag: "YOGA · GYM · SPORT · RECOVERY",
        },
        {
          title: "Foreign Guests & Export",
          body: "The luxury Indian product that travels. GI-tagged Uttarakhand origin. Premium enough for international hotel lobbies, diplomatic gifting, and the global wellness market. The India souvenir that requires a second bottle.",
          tag: "INTERNATIONAL · EXPORT · GIFTING",
        },
        {
          title: "Parties & Social Occasions",
          body: "The cocktail base that elevates a home bar. The mocktail that outclasses everything else on the table. Mixed with gin, it is something else entirely. Mixed with sparkling water, it holds its own.",
          tag: "PARTIES · SOCIAL · ENTERTAINING",
        },
        {
          title: "Corporate & Institutional",
          body: "Bulk placement for hotels, airlines, wellness centres, yoga studios, and corporate campuses. The beverage that says your organisation thinks about wellbeing seriously.",
          tag: "CORPORATE · HOTELS · BULK",
        },
        {
          title: "Schools & Colleges",
          body: "The canteen alternative that actually builds good habits. Sugar-free option available. Educationally aligned — every bottle is a story about Himalayan ecology, Pahadi culture, and what real nutrition looks like.",
          tag: "SCHOOLS · COLLEGES · YOUTH",
        },
      ],
    },
    recipes: {
      sectionLabel: "THE POSSIBILITIES",
      headline: "BURANSH expands.",
      sub: "These are the possibilities it creates.",
      intro: "At its simplest: 1 part BURANSH · 8 parts water. At its most interesting: the recipes below.",
      cards: [
        {
          number: "01",
          name: "The Classic",
          subtitle: "Morning · Daily ritual · All ages",
          ingredients: ["1 part BURANSH concentrate", "8 parts chilled spring water", "Fresh mint sprig", "Wedge of lime (optional)"],
          method: "Pour concentrate over ice. Add chilled water. Stir gently. Add mint. Serve immediately.",
          powerLine: "The ritual that begins the day correctly. Every morning, without exception.",
          benefits: ["Anthocyanins — natural antioxidant", "Anti-inflammatory botanical compounds", "No sugar, no caffeine, no compromise"],
        },
        {
          number: "02",
          name: "The Altitude Fizz",
          subtitle: "Parties · Social · All occasions",
          ingredients: ["1 part BURANSH concentrate", "7 parts sparkling water", "Slice of fresh ginger", "Wedge of lime", "Ice — large cube"],
          method: "Pour concentrate into a chilled glass over one large ice cube. Add sparkling water slowly. Express the lime. Drop in the ginger.",
          powerLine: "The drink that ends conversations about what is in your glass — and starts a different conversation entirely.",
          benefits: ["Natural carbonation feel without artificial fizz", "Ginger amplifies the anti-inflammatory profile", "The party drink that everyone can have"],
        },
        {
          number: "03",
          name: "The Warm Ritual",
          subtitle: "Evening · Medicinal · Ayurvedic context",
          ingredients: ["1 part BURANSH concentrate", "6 parts warm water (not boiling)", "Thin slice of fresh ginger", "1 tsp raw honey (optional)", "Pinch of cinnamon"],
          method: "Warm the water to 70°C — not boiling, which damages the botanical compounds. Add concentrate. Stir in ginger. Honey if desired. Cinnamon on top.",
          powerLine: "In Ayurvedic medicine, the warm preparation of botanical concentrates is called an anupana — a vehicle that carries medicine deeper. This is BURANSH as medicine.",
          benefits: ["Heat-stable anthocyanin profile", "Ginger + Rhododendron: anti-inflammatory pairing", "The evening ritual that prepares the body for rest"],
        },
        {
          number: "04",
          name: "The Himalayan Mule",
          subtitle: "Adult occasions · Parties · Signature cocktail",
          ingredients: ["1 part BURANSH concentrate", "1 part premium gin or vodka (optional — or omit)", "4 parts sparkling water or tonic", "Fresh ginger slice", "Lime wedge", "Sprig of rosemary"],
          method: "In a copper mug or highball glass: ice, spirit (if using), BURANSH concentrate, top with sparkling. Express the lime. Garnish with ginger and rosemary.",
          powerLine: "The cocktail that tastes like the Himalayas. Order it with spirit at a party. Order it without at a breakfast meeting. Either way, it is the most interesting drink in the room.",
          benefits: ["Works as both cocktail and premium mocktail", "The rosemary and ginger complement the Rhododendron floral profile", "The signature house cocktail for any occasion"],
        },
      ],
    },
    customisation: {
      sectionLabel: "MADE FOR YOU",
      headline: "Customise your BURANSH.",
      standard: {
        name: "Standard BURANSH",
        body: "The natural sugars of the Rhododendron arboreum flower — present in the concentrate as nature intended. Already low glycemic. Already unrefined. The way it has always been.",
        tag: "Natural floral sugars · Low glycemic · Unrefined",
      },
      sugarFree: {
        name: "BURANSH Sugar-Free",
        body: "An additional cold-filtration step removes the residual fructose content while preserving the full antioxidant and phytocompound profile. Zero added sweeteners. Suitable for diabetics and those managing their sugar intake with precision.",
        tag: "Zero residual fructose · Full botanical profile preserved · Diabetic-friendly",
      },
      cta1: "Order Standard",
      cta2: "Order Sugar-Free",
      footnote: "Both variants are identical in origin, process, and botanical integrity. The only difference is the final filtration step.",
    },
    gifting: {
      sectionLabel: "GIFT WITH INTENTION",
      headline: "A gift that tells a story before it is opened.",
      sub: "BURANSH gifting packages are designed around a single belief: a luxury gift should communicate more than cost. It should communicate thought.",
      tiers: [
        {
          name: "The Single",
          price: "₹[PRICE]",
          includes: [
            "1 × 750ml BURANSH bottle",
            "BURANSH branded gift box (the existing white box)",
            "Handwritten origin card (who harvested this bottle)",
            "The BURANSH story card",
          ],
          idealFor: "Wedding favour · Corporate desk gift · Birthday · Thank you",
          cta: "Order The Single",
        },
        {
          name: "The Pair",
          price: "₹[PRICE]",
          badge: "Most gifted",
          includes: [
            "2 × 750ml BURANSH bottles (standard + sugar-free)",
            "Premium outer carton with silk ribbon",
            "Origin story booklet (full narrative, 12 pages)",
            "Two harvest certificates (one per bottle)",
          ],
          idealFor: "Diwali · Executive gifting · Anniversaries · International clients",
          cta: "Order The Pair",
        },
        {
          name: "The Collection",
          price: "₹[PRICE]",
          badge: "The statement",
          includes: [
            "4 × 750ml BURANSH bottles",
            "Handcrafted pine wooden crate with lotus burn mark",
            "Natural jute padding",
            "Personalised harvest certificate",
            "Women of BURANSH portrait card (the harvester's portrait and name)",
            "Full-length BURANSH narrative booklet",
          ],
          idealFor: "Ultra-premium gifting · Diplomatic gifts · Export clients · Luxury hotels",
          cta: "Order The Collection",
        },
      ],
      bulkCta: "Enquire about custom gifting →",
      bulkNote: "For weddings, corporate events, and institutional bulk gifting, we create bespoke packages. No minimum is too large. No request is too specific.",
    },
    order: {
      sectionLabel: "ORDER",
      headline: "Order BURANSH.",
      sub: "Delivered across India. Available for international shipping on request.",
      formLabels: {
        name: "Full name",
        phone: "Phone number",
        email: "Email address",
        address: "Delivery address",
        pincode: "Pincode",
        quantity: "Number of bottles",
        variant: "Variant",
        variantOptions: ["Standard", "Sugar-Free"],
        type: "Order type",
        typeOptions: ["Personal", "Gift — The Single", "Gift — The Pair", "Gift — The Collection", "Bulk / Institutional"],
        giftMessage: "Gift message (optional)",
        giftMessagePlaceholder: "A personal message to include with the gift",
      },
      cta: "Pay with Razorpay",
      trustBar: ["Razorpay secured · 256-bit SSL", "FSSAI Certified product", "7-day return policy on damaged bottles", "Dispatched within 3–5 working days"],
      successMessage: "Your order is confirmed. We will dispatch within 3–5 working days. You will receive a tracking link by email.",
    },
    bulk: {
      sectionLabel: "BULK & WHOLESALE",
      headline: "BURANSH at scale.",
      body: "Hotels. Airlines. Wedding venues. Yoga studios. Corporate campuses. Export distributors. We work with institutions that share our belief that the beverage served communicates the values of the space.",
      useCases: ["Luxury hotels & resorts", "Wedding & event catering", "Corporate wellness programmes", "Airline business class service", "Yoga studios & wellness centres", "International export distribution", "School & college canteens", "Pharmaceutical & healthcare distribution"],
      cta: "Submit bulk enquiry →",
    },
  },

  // ── ABOUT PAGE /about ─────────────────────────────────────────────────────
  about: {
    hero: {
      preLabel: "THE NAME · THE ORIGIN · THE PURPOSE",
      headline: "Aatrey.",
      sub: "A name that is older than the brand. Older than the bottle. Older than the idea.",
      body: "The sage Atri — Aatri in Sanskrit — was one of the Saptarishis, the seven divine sages of the Vedic tradition. He is described in the Rigveda as a seer of consuming intelligence: one who does not merely observe the natural world, but absorbs its wisdom completely. Atri means: the one who consumes. He who takes in. He who knows by ingesting.",
      body2: "From the mountains where he is said to have walked — the Himalayas — comes a flower that has been consumed for its wisdom for centuries before any laboratory confirmed what the body already knew. We named this elixir after the intelligence that found it.",
    },
    shlok: {
      sectionLabel: "FROM THE RIGVEDA",
      devanagari: "[Sanskrit shlok — client to provide]",
      transliteration: "[Transliteration — client to provide]",
      translation: "[English translation — client to provide]",
      context: "This verse from the Rigveda speaks of the sage Atri's relationship with the botanical world — and the knowledge that is gained not through observation alone, but through communion.",
    },
    aatmanirbhar: {
      sectionLabel: "PROJECT AATMANIRBHAR",
      headline: "Self-reliance is not a government scheme. It is a way of being.",
      body: "Project Aatmanirbhar is not a corporate social responsibility initiative. It is the structural foundation of BURANSH. The women of the Rhododendron groves of Uttarakhand are not beneficiaries of this brand — they are its primary architects.",
      body2: "Every bottle of BURANSH sold creates a direct income line to the women who harvested it. No middlemen. No cooperative structure that dilutes the payment. No seasonal employment that disappears. Year-round engagement: harvest season for the blooms, dry season for processing and educational programmes.",
      stats: [
        { number: "[X]+", label: "Women in the harvest network" },
        { number: "[X]", label: "Villages represented" },
        { number: "[X]kg", label: "Harvest per season" },
        { number: "[X]%", label: "Income increase vs prior seasonal work" },
      ],
      missionStatement: "We do not support the women of BURANSH. We are accountable to them. That is a different relationship entirely.",
      cta: "Meet the women →",
    },
    women: {
      sectionLabel: "THE WOMEN",
      headline: "They were here before us. They will be here after.",
      intro: "These are not stories. These are introductions. The women of the BURANSH harvest are the reason this elixir exists at all.",
      profiles: [
        {
          name: "[Name 1]",
          village: "[Village], Uttarakhand",
          altitude: "[Altitude]m",
          years: "[X] years harvesting",
          quote: "[Direct quote from the woman — client to collect and provide]",
          body: "[Her story — 2–3 sentences about her life, her knowledge of the flower, what this harvest means to her family — client to collect in interview]",
        },
        {
          name: "[Name 2]",
          village: "[Village], Uttarakhand",
          altitude: "[Altitude]m",
          years: "[X] years harvesting",
          quote: "[Direct quote — client to provide]",
          body: "[Her story — client to provide]",
        },
        {
          name: "[Name 3]",
          village: "[Village], Uttarakhand",
          altitude: "[Altitude]m",
          years: "[X] years harvesting",
          quote: "[Direct quote — client to provide]",
          body: "[Her story — client to provide]",
        },
      ],
    },
    documentary: {
      sectionLabel: "THE FILM",
      headline: "Some things must be watched to be understood.",
      body: "A documentary filmed in the Rhododendron groves of Uttarakhand over [X] days. It follows the women of the harvest through a complete bloom season — from the first bud to the last pressed bottle. Directed by [Director name — client to provide].",
      body2: "[Additional context about the film — client to provide]",
      runtime: "[Runtime]",
      cta: "Watch the film →",
      videoUrl: "[YOUTUBE/VIMEO URL — client to provide]",
    },
  },

  // ── STAYCATION PAGE /staycation ───────────────────────────────────────────
  staycation: {
    hero: {
      preLabel: "UTTARAKHAND · THE EXPERIENCE",
      headline: "Some luxury must be witnessed to be believed.",
      sub: "Stay among the Rhododendron groves. Walk with the women who harvest. Watch the elixir made. Taste it where it is born.",
      cta: "Enquire about a Stay",
      subCta: "What to expect ↓",
    },
    expectation: {
      sectionLabel: "WHAT THIS IS",
      headline: "This is not a tour. This is an initiation.",
      body: "The BURANSH staycation is a deliberately designed experience for people who want to understand something completely — not just consume it. You will not be a tourist in these hills. You will be a temporary member of the community that makes BURANSH possible.",
      body2: "We limit this experience to small groups. The intimacy is non-negotiable. The forest is not a backdrop. The women are not a spectacle. You are being invited into a living process — and that invitation requires your full presence.",
      maxGuests: "Maximum [X] guests per experience",
      duration: "Minimum 2 nights · Maximum [X] nights",
    },
    journey: {
      sectionLabel: "THE FOUR STAGES",
      headline: "The experience unfolds in four movements.",
      stages: [
        {
          number: "01",
          title: "Arrival",
          subtitle: "Taste first. Understand second.",
          body: "A BURANSH bottle awaits in your accommodation when you arrive. We do not introduce it. We do not explain it. You taste it before you see the forest that made it. This is the intention behind the entire stay — first the experience, then the understanding of how it came to be.",
          detail: "Your bottle is from the last harvest. It was made by a specific woman whose name you will learn during your stay.",
        },
        {
          number: "02",
          title: "The Harvest Walk",
          subtitle: "No script. No tour guide voice. Just the forest and the women who know it.",
          body: "You walk with the women of the current harvest. This is not a demonstration — the harvest continues with or without guests. You are walking into someone else's working day and being permitted to observe what takes a lifetime to learn.",
          detail: "You will understand, by the end of this walk, why the bloom window is eight weeks and not eight months. Why altitude changes the flower's compound profile. Why the selection of which blooms to take and which to leave requires decades of knowledge.",
        },
        {
          number: "03",
          title: "The Making",
          subtitle: "Witness the process. Participate if you choose.",
          body: "The cold press happens at altitude, within six hours of harvest. You will watch it happen. If you want, you will do it yourself. The concentrate that results from your participation — you will bottle it. That bottle is yours to take home.",
          detail: "This is the session that makes guests understand why there is no off-season BURANSH. Why the factory version cannot exist. Why the price reflects the process.",
        },
        {
          number: "04",
          title: "Your Legacy",
          subtitle: "You leave something behind.",
          body: "Before you depart, you plant one Rhododendron arboreum sapling in the medicinal expansion garden. Your name is recorded alongside it. In [X] years, that tree will flower. In [X+10] years, a woman you have never met will harvest from it.",
          detail: "You are not just leaving with a bottle of BURANSH. You are leaving as part of the next harvest.",
        },
      ],
    },
    wilderness: {
      sectionLabel: "THE FULL EXPERIENCE",
      headline: "Nine ways to be present in these hills.",
      experiences: [
        {
          icon: "leaf",
          title: "Being in Nature",
          body: "Guided forest walks designed not for exercise but for attention. Learn to read the Rhododendron landscape — where the oldest trees grow, what the soil composition tells you about the flower's potency, what the altitude does to your perception of time.",
        },
        {
          icon: "plant",
          title: "Medicinal Plant Plantation",
          body: "The Rhododendron arboreum does not grow alone. It is part of a medicinal ecosystem that has supplied Pahadi communities for centuries. You will walk this garden, learn 15+ Himalayan medicinal plants by their traditional names and uses, and understand the ecology that BURANSH comes from.",
        },
        {
          icon: "bottle",
          title: "Make Your Own Elixir",
          body: "From flower to bottle under your own hands. You harvest your blooms. You cold-press your concentrate. You seal and label your bottle. You leave with an elixir that is genuinely, verifiably yours — the only bottle of its kind in the world.",
        },
        {
          icon: "woman",
          title: "Being with the Women",
          body: "Cook together. Work alongside. Hear the stories — not as anecdotes delivered for tourists, but as conversations between people sharing a meal. The women of Project Aatmanirbhar are not a feature of this experience. They are the experience.",
        },
        {
          icon: "book",
          title: "Learning & Education",
          body: "An ethnobotany session led by [Name/qualification]. The history of Rhododendron arboreum in Vedic medicine. The modern science of anthocyanins and why altitude changes the compound profile. The economics of fair harvest and what ethical botanical sourcing actually requires.",
        },
        {
          icon: "sunrise",
          title: "Experience the Wilderness",
          body: "Sunrise at the ridge. The quality of high-altitude silence. The specific quality of Himalayan light at 4am. These are not scheduled activities. They are what happens when you sleep in the right place at the right altitude and allow yourself to wake up.",
        },
        {
          icon: "craft",
          title: "Pahadi Craft",
          body: "The handwoven cane baskets used in the harvest. The traditional Pahadi textile techniques. A morning with one of the women learning the craft that has supplied this harvest for longer than any living person can remember.",
        },
        {
          icon: "memory",
          title: "Taking Back a Memory",
          body: "Your own bottle of elixir. A photograph of the woman who taught you the harvest. The name of the sapling you planted. A small pressed Rhododendron bloom. And the knowledge that you were part of something — briefly, but genuinely — that most people will never see.",
        },
        {
          icon: "tree",
          title: "Leaving a Legacy",
          body: "The Rhododendron arboreum takes [X] years to first bloom. Your sapling is a message to a future you will not meet. A contribution to a harvest that will outlast your memory of making it. The most luxurious thing we can offer: a permanence that costs nothing but your presence.",
        },
      ],
    },
    booking: {
      sectionLabel: "BOOK THE EXPERIENCE",
      headline: "The inquiry that begins the journey.",
      body: "We respond to every inquiry personally, within 24 hours. We will discuss the dates, the group size, the specific experiences you want to prioritise, and what to bring. No automated confirmation. No chatbot. A human being who has been to these hills.",
      formLabels: {
        name: "Your name",
        email: "Email address",
        phone: "Phone number",
        dates: "Preferred dates",
        datesNote: "Give us 2–3 options if possible",
        groupSize: "Group size",
        experiences: "Experiences you are most interested in",
        experienceOptions: ["Harvest Walk", "Make Your Own Elixir", "Medicinal Plant Plantation", "Being with the Women", "Education Session", "Wilderness / Sunrise", "Pahadi Craft", "Planting Legacy Sapling", "All of the above"],
        dietary: "Any dietary requirements",
        source: "How did you hear about BURANSH?",
        message: "Anything you want us to know",
      },
      cta: "Submit Staycation Enquiry",
      confirmationMessage: "We have received your inquiry. Expect a personal response within 24 hours from a member of our team who has actually been to these hills.",
    },
  },

  // ── MORE PAGE /more ───────────────────────────────────────────────────────
  more: {
    omakase: {
      sectionLabel: "THE OMAKASE EXPERIENCE",
      headline: "A private tasting in the oldest tradition.",
      body: "Omakase: I leave it to you. In Japan, this is an act of complete trust extended to a chef. The BURANSH Omakase extends the same trust to the story of an elixir — four preparations, four chapters of the origin narrative, in a setting of your choosing.",
      body2: "The BURANSH Omakase is hosted by the founder. Maximum eight guests. Each preparation is accompanied by the specific chapter of the BURANSH story that it embodies: the altitude, the harvest, the women, the making. By the final pour, you will have not just tasted BURANSH — you will understand it.",
      includes: [
        "Four preparations of BURANSH (Classic, Warm, Fizz, seasonal fourth)",
        "Hosted by the BURANSH founder",
        "Full narrative accompaniment — the story behind each pour",
        "Paired botanical small bites from the Pahadi culinary tradition",
        "One 750ml bottle of BURANSH to take home",
        "The BURANSH narrative booklet",
      ],
      guestRange: "5–8 guests",
      duration: "Approximately 2.5 hours",
      locations: "At your property or a partner venue in [cities — client to confirm]",
      cta: "Request an Omakase →",
      formLabels: {
        name: "Your name",
        email: "Email address",
        phone: "Phone number",
        guestCount: "Number of guests",
        city: "Preferred city",
        dates: "Preferred dates",
        occasion: "Occasion (if applicable)",
        budget: "Budget range",
        message: "Any specific requirements or questions",
      },
    },
    comingSoon: {
      sectionLabel: "COMING NEXT",
      headline: "The Rhododendron is not finished revealing itself.",
      jam: {
        name: "BURANSH Jam",
        sub: "Rhododendron Arboreum Preserve",
        body: "The fruit of the same tree. Cold-set. No pectin. No stabilisers. No preservatives. The same single-origin commitment in a preserve form. The wild harvest — available after the next bloom season.",
        badge: "COMING SOON · [SEASON YEAR]",
        cta: "Notify me when available",
      },
      tea: {
        name: "BURANSH Tea",
        sub: "Dried Rhododendron Petal Infusion",
        body: "The flower dried slowly at altitude during the post-bloom dry season. No caffeine. No flavouring. No blending with other botanicals. The elixir in its most meditative form — steeped, not pressed.",
        badge: "COMING SOON · [SEASON YEAR]",
        cta: "Notify me when available",
      },
    },
    compliance: {
      sectionLabel: "CERTIFICATIONS & COMPLIANCE",
      headline: "Every claim, verified.",
      body: "We do not ask you to trust our marketing. We publish our certifications.",
      items: [
        {
          title: "FSSAI Certification",
          body: "BURANSH is licensed under the Food Safety and Standards Authority of India. Licence number [NUMBER]. Valid through [DATE].",
          cta: "Download certification",
          file: "/documents/fssai-certificate.pdf",
        },
        {
          title: "Third-Party Lab Reports",
          body: "Independent laboratory analysis of the botanical compound profile: anthocyanins, quercetin, flavonoids, and heavy metal screening. Report date: [DATE]. Laboratory: [Name].",
          cta: "Download lab report",
          file: "/documents/lab-report.pdf",
        },
        {
          title: "Origin Certification",
          body: "Uttarakhand geographical origin verified. Harvest audit conducted [DATE] by [Auditor]. GI Tag application status: [STATUS — client to confirm].",
          cta: "Download origin certificate",
          file: "/documents/origin-certificate.pdf",
        },
      ],
    },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// ASSET LIST
// ─────────────────────────────────────────────────────────────────────────────
const ASSETS = [
  {
    group: "Existing Assets — Use Immediately",
    color: T.green,
    items: [
      { id:"E1", file:"lotus-mark.png", desc:"Aatrey Elixir lotus logo. Extract SVG paths → components/LotusLogo.tsx. Use in Nav, Footer, overlay nav panel, compliance section.", pages:["All pages"] },
      { id:"E2", file:"bottle-handheld.jpg", desc:"Amber bottle held in hand. Warm, human, intimate. Use for product intro sections.", pages:["/ product intro", "/elixir WhatItIs", "/elixir OrderSection sidebar"] },
      { id:"E3", file:"box-packaging.jpg", desc:"White BURANSH box on stone surface. Already premium quality. Use full-height.", pages:["/ packaging showcase", "/elixir WhatItIs left column", "/elixir GiftingPackages single tier"] },
    ],
  },
  {
    group: "Studio Photography — Commission (1 studio day)",
    color: T.umber,
    items: [
      { id:"S1", file:"bottle-editorial.jpg", desc:"Bottle on dark slate stone. Single overhead cool light. Directional shadow. No hands. Product object study.", pages:["/ hero right half", "/elixir hero full-screen"] },
      { id:"S2", file:"bottle-pour.jpg", desc:"Bottle tilted at 45°. Deep crimson concentrate pouring into unglazed ceramic cup. Dark background. No hands.", pages:["/more Omakase section"] },
      { id:"S3", file:"gifting-collection.jpg", desc:"Pine crate open, 4 bottles visible. Surface arrangement: harvest certificate, booklet, Rhododendron bloom, jute ribbon. Warm directional light.", pages:["/elixir GiftingPackages — The Collection"] },
      { id:"S4", file:"arrival-still-life.jpg", desc:"BURANSH bottle on pine tray on mountain balcony ledge. Golden hour. Himalayan valley behind (soft-focused). Ceramic cup, flowers, welcome card.", pages:["/staycation Stage 1 — Arrival"] },
    ],
  },
  {
    group: "Landscape Photography — Commission (1 Uttarakhand day, dawn)",
    color: "#1A3A5C",
    items: [
      { id:"L1", file:"himalaya-landscape-1.jpg", desc:"Valley vista from ridge. Sea of crimson Rhododendron canopy below. Pre-dawn indigo sky. Himalayan peaks above mist. 16:9 minimum 4K.", pages:["/ Himalayan section full-bleed", "/story hero background"] },
      { id:"L2", file:"himalaya-landscape-2.jpg", desc:"Ground-level within Rhododendron forest. Looking through canopy corridor. Blue sky through crimson blooms above. Tiny woman figure far in distance. 21:9 or 16:9.", pages:["/staycation hero — full viewport"] },
    ],
  },
  {
    group: "Botanical Photography — Commission (same Uttarakhand day)",
    color: T.green,
    items: [
      { id:"B1", file:"rhododendron-macro.jpg", desc:"Macro: 3–5 deep crimson blooms close-up. Gold stamens visible. Dewdrops on petals. Warm crimson + green bokeh background.", pages:["/story origin section", "/elixir botanical detail"] },
      { id:"B2", file:"rhododendron-branch.jpg", desc:"Single branch mid-weight shot. Harvester's hand reaching in from left, touching stem. Forest behind soft-focused.", pages:["/craft process — selective harvest"] },
    ],
  },
  {
    group: "Women Portrait Series — Commission (same Uttarakhand day)",
    color: T.crimson,
    items: [
      { id:"W1", file:"woman-portrait-1.jpg", desc:"Head + shoulders portrait. Direct camera gaze. Authority. Natural golden-hour light. Basket with crimson blooms visible lower frame. Rhododendron bokeh behind.", pages:["/ women teaser hero", "/about women feature primary"] },
      { id:"W2", file:"woman-portrait-2.jpg", desc:"Mid-shot. Hands in action — selecting bloom from branch. Three-quarter profile, not looking at camera. Working moment.", pages:["/about women feature second"] },
      { id:"W3", file:"woman-portrait-3.jpg", desc:"Environmental wide. Woman small relative to ancient Rhododendron trees. Looking toward distance. Basket at hip. Forest surrounds her.", pages:["/about women feature third", "/craft process section"] },
    ],
  },
  {
    group: "Harvest & Process — Commission (same Uttarakhand day)",
    color: T.gold,
    items: [
      { id:"H1", file:"harvest-action.jpg", desc:"Two women working together in grove. One reaching up to branch, one sorting into basket. Both in motion, not looking at camera. Morning light.", pages:["/craft hero section", "/staycation Stage 2 — Harvest Walk"] },
      { id:"H2", file:"pressing-process.jpg", desc:"The cold-press equipment at altitude. Not a sterile lab — a real process in a real place. Close to mid shot. Natural light from above.", pages:["/staycation Stage 3 — The Making", "/craft process step 3"] },
    ],
  },
  {
    group: "Material / Texture — Can be AI generated",
    color: T.muted,
    items: [
      { id:"T1", file:"himalayan-slate-texture.jpg", desc:"Close-up dark Himalayan slate stone. Quartz veining. Slightly damp surface. Sidelit. Tileable. Used as background texture on dark sections.", pages:["/elixir hero background texture", "General dark section bg"] },
    ],
  },
  {
    group: "Documents — Client to provide",
    color: T.pale,
    items: [
      { id:"D1", file:"fssai-certificate.pdf", desc:"FSSAI licence document. Store in /public/documents/. Linked from /more compliance section.", pages:["/more compliance"] },
      { id:"D2", file:"lab-report.pdf", desc:"Third-party lab analysis. Store in /public/documents/.", pages:["/more compliance"] },
      { id:"D3", file:"origin-certificate.pdf", desc:"Uttarakhand origin certification. Store in /public/documents/.", pages:["/more compliance"] },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// CLAUDE CODE PROMPT
// ─────────────────────────────────────────────────────────────────────────────
const CODEX_PROMPT = `You are building the complete BURANSH website by Aatrey Elixir.

Read these files in the project root before writing any code:
1. buransh-evolved-system.jsx — locked design system
2. buransh-full-blueprint.jsx — page architecture, CTA logic, data flow
3. buransh-image-prompts.jsx — asset list and image specs
4. buransh-copy.jsx — ALL website copy for all 5 pages (THIS FILE)

All copy for every section of every page is defined in the COPY object in buransh-copy.jsx. Import and use it directly. Never write copy from scratch in JSX components — always reference the COPY object.

ASSET STRATEGY:
Existing assets available in /public/:
- /public/lotus-mark.png — logo
- /public/images/bottle-handheld.jpg — hand holding bottle
- /public/images/box-packaging.jpg — box on stone

For all other images not yet in /public/images/: use this placeholder pattern exactly —

const ImagePlaceholder = ({ filename, description, ratio = "16/9" }) => (
  <div style={{
    width: "100%", aspectRatio: ratio, background: "#E0D0B080",
    border: "1px dashed #C0A880", display: "flex",
    alignItems: "center", justifyContent: "center", padding: "20px",
  }}>
    <div style={{ textAlign: "center" }}>
      <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 11,
        color: "#C4392B", letterSpacing: "1px", marginBottom: 6,
        fontFamily: "sans-serif", textTransform: "uppercase" }}>
        {filename}
      </p>
      <p style={{ fontFamily: "'EB Garamond', serif", fontSize: 13,
        fontStyle: "italic", color: "#9C8868", lineHeight: 1.5 }}>
        {description}
      </p>
    </div>
  </div>
);

DESIGN SYSTEM (locked — all tokens in lib/tokens.ts):
Crimson #C4392B · Gold #C4A030 · Ivory #F5EDD8 · Ink #18100A
Cormorant Garamond display · EB Garamond body
Motion: 400–600ms cubic-bezier(0.76,0,0.24,1)

FIVE PAGES:

PAGE 1 — app/page.tsx (/)
Build these sections in order:
- Nav (components/Nav.tsx — fixed bar + fullscreen overlay)
- Hero: COPY.home.hero — H1 staggered GSAP entrance, crimson vertical rule, bottle silhouette SVG right
- ValuePillars: COPY.home.pillars — 4 cards on ink background, Cormorant italic numbers in gold
- ProductIntro: COPY.home.product — 50/50, bottle-handheld.jpg left, copy right
- Testimonials: COPY.home.testimonials — 3 quotes on ink bg, Cormorant italic large
- WomenTeaser: COPY.home.women — portrait W1 placeholder left 60%, text right 40%, ink bg
- ComplianceBadges: COPY.home.compliance — 6 SVG circular stamp marks, rotate animation on scroll
- HimalayanLandscape: COPY.home.himalaya — full-bleed L1 placeholder, text overlay, data stats
- ComingSoon: COPY.home.comingSoon — 2 col, name/email forms → /api/waitlist
- Footer: COPY.home.footer — 3 col ink bg

PAGE 2 — app/elixir/page.tsx (/elixir)
Build these sections in order:
- ElixirHero: COPY.elixir.hero — S1 placeholder full-screen, centred text, Order Now anchor to #order
- WhatItIs: COPY.elixir.whatItIs — sticky box-packaging.jpg left (position: sticky top-20), specs + compliance right
- BetterThan: COPY.elixir.betterThan — 4-col comparison on ink bg, each vs category with 4 bullet points
- Occasions: COPY.elixir.occasions — 3x3 grid, 9 tiles, each with title/body/tag
- RecipeCards: COPY.elixir.recipes — horizontal scroll snap, 4 cards, each with number/name/subtitle/ingredients/method/powerLine/benefits
- Customisation: COPY.elixir.customisation — 2-col toggle, URL ?variant=standard|sugarfree pre-selects form
- GiftingPackages: COPY.elixir.gifting — 3 tier cards, box-packaging.jpg for Single tier, S3 placeholder for Collection
- OrderSection (id="order"): COPY.elixir.order — react-hook-form, Razorpay integration, Google Sheets write
- BulkInquiry: COPY.elixir.bulk — 2 col, inquiry form → /api/bulk-inquiry

PAGE 3 — app/about/page.tsx (/about)
Build these sections in order:
- NameOrigin: COPY.about.hero — Aatrey/Atri narrative, ink bg, large Cormorant display
- SanskritShlok: COPY.about.shlok — crimson panel, Noto Sans Devanagari for Devanagari text, transliteration, translation. Mark all three as // TODO: client to provide
- ProjectAatmanirbhar: COPY.about.aatmanirbhar — mission + animated count-up stats (GSAP CountUp on scroll enter)
- WomenFeature (id="women"): COPY.about.women — alternating portrait placeholders + profile text for 3 women
- Documentary: COPY.about.documentary — video embed placeholder, YouTube lite component, // TODO: client to provide URL

PAGE 4 — app/staycation/page.tsx (/staycation)
Build these sections in order:
- StaycationHero: COPY.staycation.hero — L2 placeholder full-bleed, overlay text, crimson CTA anchors to #booking-form
- Expectation: COPY.staycation.expectation — what this experience is, context setter
- StaycationJourney: COPY.staycation.journey — 4 alternating stages, each with image placeholder + text, GSAP scroll-pin per stage
- WildernessGrid: COPY.staycation.wilderness — 9 experience tiles in 3x3 grid (desktop), each with SVG icon + title + body
- BookingForm (id="booking-form"): COPY.staycation.booking — react-hook-form, multi-select experiences, → /api/staycation-inquiry

PAGE 5 — app/more/page.tsx (/more)
Build these sections in order:
- OmakaseExperience: COPY.more.omakase — ink bg, concept copy, inquiry form → /api/omakase
- ComingSoonProducts: COPY.more.comingSoon — 2 col, Jam + Tea, waitlist forms
- Compliance: COPY.more.compliance — 3 cert blocks, download PDF links from /public/documents/

THANK YOU PAGE — app/thank-you/page.tsx
Minimal. Ivory bg. Lotus mark. "Your order is confirmed." body from COPY.elixir.order.successMessage. Link back to / and /elixir.

ALL 7 API ROUTES — build these before any page:
- /api/create-order — Razorpay order creation
- /api/payment-verify — verify + write to Google Sheets ORDERS tab + send emails
- /api/bulk-inquiry — write to BULK_ORDERS + team alert
- /api/staycation-inquiry — write to STAYCATION_INQUIRIES + guest confirmation email
- /api/omakase — write to OMAKASE_INQUIRIES + team alert
- /api/waitlist — ?product=jam|tea → WAITLIST_JAM or WAITLIST_TEA
- /api/contact — write to CONTACT + team alert

GOOGLE SHEETS TABS:
ORDERS / BULK_ORDERS / STAYCATION_INQUIRIES / OMAKASE_INQUIRIES / WAITLIST_JAM / WAITLIST_TEA / CONTACT

Each row: [timestamp, ...formFields]

DATA FILE REQUIREMENTS:
lib/brand-content.ts — re-export all sections of the COPY object from buransh-copy.jsx into TypeScript. This is the single source of truth for all content.

CONTENT RULES:
- All copy from COPY object — never hardcode strings in JSX
- Fields marked [CLIENT TO PROVIDE] get a // TODO comment with the field name
- These fields need client confirmation before launch:
  * All prices (order, gifting tiers)
  * FSSAI licence number
  * All testimonial names and institutions
  * Sanskrit shlok + transliteration + translation
  * Documentary URL
  * Women's names, villages, quotes
  * Staycation property details
  * Lab report and certification details
  * Impact numbers for Aatmanirbhar
  * Dilution ratio and shelf life
  * Bottle contents per kg of flowers

BUILD ORDER:
1. tailwind.config.js · next.config.js · globals.css
2. lib/tokens.ts · lib/sheets.ts · lib/email.ts · lib/razorpay.ts
3. lib/brand-content.ts (import + re-export COPY object in TypeScript)
4. All 7 /api/* routes (test with curl before building UI)
5. components/ui/* (Button, OrnamentLine, GrainOverlay, ImagePlaceholder)
6. components/LotusLogo.tsx (render /public/lotus-mark.png)
7. components/ComplianceBadges.tsx (6 SVG circular stamp components)
8. components/LenisProvider.tsx
9. components/Nav.tsx (fullscreen overlay — build carefully, test thoroughly)
10. components/Footer.tsx
11. app/layout.tsx
12. sections/home/* then app/page.tsx
13. sections/elixir/* then app/elixir/page.tsx
14. sections/about/* then app/about/page.tsx
15. sections/staycation/* then app/staycation/page.tsx
16. sections/more/* then app/more/page.tsx
17. app/thank-you/page.tsx

Show me each file when complete. Wait for confirmation before proceeding to the next.`;

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────
function Grain() {
  return (
    <div style={{ position:"absolute",inset:0,pointerEvents:"none",zIndex:1,
      backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.80' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
      backgroundSize:"200px 200px",mixBlendMode:"multiply" }} />
  );
}

function CopyBtn({ text }) {
  const [done, setDone] = useState(false);
  const copy = () => {
    try {
      const el = document.createElement("textarea");
      el.value = text; document.body.appendChild(el);
      el.select(); document.execCommand("copy");
      document.body.removeChild(el);
      setDone(true); setTimeout(()=>setDone(false), 2200);
    } catch(e){}
  };
  return (
    <button onClick={copy} style={{
      background:done?T.green:T.crimson, border:"none", color:"white",
      cursor:"pointer", padding:"8px 18px", fontFamily:"sans-serif",
      fontSize:"7.5px", letterSpacing:"2px", textTransform:"uppercase",
      transition:`background 300ms ${T.ease}`, flexShrink:0,
    }}>{done?"COPIED ✓":"COPY"}</button>
  );
}

function SectionRow({ page, section, headline, subsections, todo }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom:`1px solid ${T.border}50` }}>
      <button onClick={()=>setOpen(o=>!o)} style={{
        width:"100%", background:"transparent", border:"none", cursor:"pointer",
        padding:"12px 0", display:"flex", alignItems:"center", gap:"14px", textAlign:"left",
      }}>
        <span style={{ fontFamily:"sans-serif",fontSize:"7px",letterSpacing:"2px",color:T.muted,minWidth:"32px",flexShrink:0 }}>{section}</span>
        <span style={{ fontFamily:T.body,fontSize:"14px",fontStyle:"italic",color:T.ink,flex:1 }}>{headline}</span>
        {todo && <span style={{ fontFamily:"sans-serif",fontSize:"7px",letterSpacing:"2px",textTransform:"uppercase",color:T.gold,padding:"2px 8px",border:`1px solid ${T.gold}50`,flexShrink:0 }}>TODO</span>}
        <span style={{ color:T.crimson,fontFamily:T.display,fontSize:"15px",transform:open?"rotate(45deg)":"none",transition:`transform 300ms ${T.ease}`,flexShrink:0 }}>+</span>
      </button>
      {open && (
        <div style={{ paddingLeft:"46px",paddingBottom:"14px" }}>
          {subsections.map((s,i)=>(
            <div key={i} style={{ marginBottom:"6px",padding:"8px 12px",background:T.parchment,borderLeft:`2px solid ${todo?T.gold:T.crimson}` }}>
              {typeof s === "string"
                ? <p style={{ fontFamily:T.body,fontSize:"13px",color:T.ink,lineHeight:1.7 }}>{s}</p>
                : <>
                    <p style={{ fontFamily:"sans-serif",fontSize:"7px",letterSpacing:"1.5px",textTransform:"uppercase",color:T.muted,marginBottom:"3px" }}>{s.label}</p>
                    <p style={{ fontFamily:T.body,fontSize:"13px",color:T.ink,lineHeight:1.6,whiteSpace:"pre-line" }}>{s.value}</p>
                  </>
              }
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function AssetGroup({ group }) {
  return (
    <div style={{ marginBottom:"20px" }}>
      <div style={{ display:"flex",alignItems:"center",gap:"10px",marginBottom:"6px" }}>
        <div style={{ width:"7px",height:"7px",borderRadius:"50%",background:group.color }}/>
        <p style={{ fontFamily:"sans-serif",fontSize:"7.5px",letterSpacing:"3px",textTransform:"uppercase",color:T.muted }}>{group.group}</p>
        <div style={{ flex:1,height:"1px",background:T.border }}/>
      </div>
      {group.items.map((item,i)=>(
        <div key={i} style={{ display:"grid",gridTemplateColumns:"40px 200px 1fr",gap:"2px",marginBottom:"2px" }}>
          <div style={{ background:group.color,display:"flex",alignItems:"center",justifyContent:"center" }}>
            <span style={{ fontFamily:"sans-serif",fontSize:"8px",color:"white",letterSpacing:"1px" }}>{item.id}</span>
          </div>
          <div style={{ background:T.parchment,padding:"9px 12px" }}>
            <p style={{ fontFamily:"sans-serif",fontSize:"8px",letterSpacing:"0.5px",color:T.ink }}>{item.file}</p>
          </div>
          <div style={{ background:T.ivory,border:`1px solid ${T.border}`,padding:"9px 12px",display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"10px" }}>
            <div style={{ flex:1 }}>
              <p style={{ fontFamily:T.body,fontSize:"12.5px",color:T.ink,lineHeight:1.5,marginBottom:"4px" }}>{item.desc}</p>
              <p style={{ fontFamily:"sans-serif",fontSize:"7px",letterSpacing:"1px",color:T.muted }}>{item.pages.join(" · ")}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN
// ─────────────────────────────────────────────────────────────────────────────
export default function BuranshCopyAssets() {
  const [tab, setTab] = useState("copy");
  const [page, setPage] = useState("home");

  useEffect(() => {
    const s = document.createElement("style");
    s.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=EB+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap');
      *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
      body{background:#F5EDD8;}
      button{font-family:inherit;}
      ::-webkit-scrollbar{width:3px;}
      ::-webkit-scrollbar-thumb{background:#C4392B;}
    `;
    document.head.appendChild(s);
    return()=>{try{document.head.removeChild(s);}catch(e){}};
  },[]);

  const PAGES = [
    { id:"home",       label:"Home",       path:"/" },
    { id:"elixir",     label:"Elixir",     path:"/elixir" },
    { id:"about",      label:"About",      path:"/about" },
    { id:"staycation", label:"Staycation", path:"/staycation" },
    { id:"more",       label:"More",       path:"/more" },
  ];

  const copyData = {
    home: [
      { section:"NAV", headline:"Wordmark + Fullscreen Overlay Navigation", subsections:[{ label:"Wordmark", value:"BURANSH" },{ label:"Sub", value:"by Aatrey Elixir" },{ label:"Routes", value:"Home · Elixir · About · Staycation · More" }], todo:false },
      { section:"§01 HERO", headline:"Inherited, not manufactured.", subsections:[
        { label:"Pre-label", value:"AATREY ELIXIR · BURANSH" },
        { label:"H1 Line 1", value:"Inherited," },
        { label:"H1 Line 2", value:"not manufactured." },
        { label:"Body", value:"From the Rhododendron forests of Uttarakhand. At the elevation where the air is thin and the flowers know only the most patient hands." },
        { label:"CTA Primary", value:"Order the Elixir" },
        { label:"CTA Secondary", value:"Experience the Origin →" },
        { label:"Sub-label", value:"Asia-endorsed · Women-led · FSSAI certified · Uttarakhand origin" },
      ], todo:false },
      { section:"§02 PILLARS", headline:"Four reasons this elixir is unlike anything you have ever tasted.", subsections:[
        { label:"Pillar 1", value:"01 · Research & Quality\nEvery bottle is cold-pressed within six hours of harvest. Tested by third-party laboratories. FSSAI certified. No shortcuts exist at 2,500 metres.\n— Lab-verified · FSSAI certified · Single-ingredient" },
        { label:"Pillar 2", value:"02 · Origin & Altitude\nRhododendron arboreum blooms for eight weeks a year between March and May. Only at altitude. Only in Uttarakhand.\n— 2,500m above sea level · Single harvest annually" },
        { label:"Pillar 3", value:"03 · Women & Culture\nProject Aatmanirbhar. The women of Uttarakhand have harvested this flower for generations. They do not work for BURANSH — BURANSH exists because of them.\n— Project Aatmanirbhar · Pahadi women harvesters" },
        { label:"Pillar 4", value:"04 · Homestay & Education\nThe full story cannot be told on a screen. Come to the groves. Walk with the women. Make your own elixir. Leave knowing something that cannot be taught anywhere else.\n— Uttarakhand staycation · Learn · Experience · Witness" },
      ], todo:false },
      { section:"§03 PRODUCT", headline:"Himalayan Rhododendron, distilled into a single bottle.", subsections:[
        { label:"Section label", value:"THE ELIXIR" },
        { label:"Body", value:"BURANSH is a floral concentrate of Rhododendron arboreum — cold-pressed, unfiltered of its natural compounds, and bottled at source. It is not a juice. It is not a cordial. It is an elixir in the oldest sense of the word." },
        { label:"Specs", value:"Cold-pressed · Single harvest · No additives · No preservatives · 750ml · Rhododendron arboreum only" },
      ], todo:false },
      { section:"§04 TESTIMONIALS", headline:"The most trusted wellness voices have spoken.", subsections:[
        { label:"Quote 1", value:"I have spent two decades studying botanical medicine across Asia. BURANSH is the most extraordinary floral concentrate I have encountered — not for its novelty, but for its precision.\n— Dr. [Name], Wellness Authority, Singapore" },
        { label:"Quote 2", value:"In Japan, we call it ichigo ichie — once in a lifetime. BURANSH has that quality.\n— [Name], Integrative Medicine Practitioner, Tokyo" },
        { label:"Quote 3", value:"For my practice in Ayurvedic clinical nutrition, I have never recommended a commercial botanical product. BURANSH is the first exception in seventeen years.\n— Dr. [Name], Ayurvedic Clinical Nutritionist, New Delhi" },
      ], todo:true },
      { section:"§05 WOMEN", headline:"Their hands. Their hills. Their elixir.", subsections:[
        { label:"Headline", value:"Their hands. Their hills. Their elixir." },
        { label:"Body", value:"Before BURANSH was a brand, it was a practice. Pahadi women have understood this flower since before any name existed for it. They harvest by touch — knowing which bloom is ready, which is not, which will never be." },
        { label:"CTA", value:"Meet the women →" },
      ], todo:false },
      { section:"§06 COMPLIANCE", headline:"Trust is not asked for. It is earned.", subsections:[
        { label:"Badges", value:"FSSAI Certified · Cold Pressed · Single Harvest · No Additives · Made in India · Lab Tested" },
      ], todo:true },
      { section:"§07 HIMALAYA", headline:"2,500 metres above ordinary.", subsections:[
        { label:"Overlay headline", value:"2,500 metres above ordinary." },
        { label:"Stats", value:"2,500m · Minimum harvest altitude\n8 weeks · Annual bloom window\n1 harvest · Per year, no exceptions" },
        { label:"CTA", value:"Book the Uttarakhand Experience →" },
      ], todo:false },
      { section:"§08 COMING SOON", headline:"The Rhododendron has more to give.", subsections:[
        { label:"JAM", value:"BURANSH Jam · Rhododendron Arboreum Preserve\nSingle-origin. No pectin. No stabilisers. Wild-harvested." },
        { label:"TEA", value:"BURANSH Tea · Dried Rhododendron Petal Infusion\nNo caffeine. No flavouring. No blending. The elixir in its most meditative form." },
      ], todo:false },
    ],
    elixir: [
      { section:"§01 HERO", headline:"BURANSH — Himalayan Rhododendron Floral Concentrate · 750ml", subsections:[{ label:"Pre-label", value:"AATREY ELIXIR — NO. 001" },{ label:"Sub", value:"Himalayan Rhododendron Floral Concentrate · 750ml" },{ label:"CTA", value:"Order Now ↓" }], todo:false },
      { section:"§03 BETTER THAN", headline:"The most civilised drink you have never had.", subsections:[
        { label:"vs Soft Drinks", value:"No refined sugar · No caramel colour · No phosphoric acid · No artificial flavour · Real single botanical origin · Antioxidant-rich" },
        { label:"vs Packaged Juice", value:"Not from concentrate · No preservatives · No synthetic vitamins · Single ingredient" },
        { label:"vs Energy Drinks", value:"No caffeine spike · No taurine · No artificial stimulants · No post-consumption crash" },
        { label:"vs Alcohol", value:"The social drink without the morning after · All ages · Premium enough for any table · Zero compromise" },
        { label:"Closing line", value:"BURANSH is the drink that required no compromise to be chosen." },
      ], todo:false },
      { section:"§04 OCCASIONS", headline:"One elixir. Every occasion.", subsections:[
        { label:"9 Tiles", value:"Urban Professionals · Children & Families · The Elderly · Weddings & Celebrations · Yoga Gym & Sport · Foreign Guests & Export · Parties & Social · Corporate & Institutional · Schools & Colleges" },
      ], todo:false },
      { section:"§05 RECIPES", headline:"BURANSH expands. These are the possibilities.", subsections:[
        { label:"Recipe 01", value:"The Classic · 1 part BURANSH + 8 parts chilled water + fresh mint\nThe ritual that begins the day correctly." },
        { label:"Recipe 02", value:"The Altitude Fizz · 1 part BURANSH + 7 parts sparkling + ginger + lime\nThe drink that ends conversations about what is in your glass." },
        { label:"Recipe 03", value:"The Warm Ritual · 1 part BURANSH + 6 parts warm water + ginger + honey + cinnamon\nIn Ayurvedic medicine, the warm preparation of botanical concentrates is called an anupana." },
        { label:"Recipe 04", value:"The Himalayan Mule · 1 part BURANSH + gin/vodka (optional) + sparkling + ginger + lime + rosemary\nThe cocktail that tastes like the Himalayas." },
      ], todo:false },
      { section:"§06 CUSTOMISATION", headline:"Customise your BURANSH.", subsections:[
        { label:"Standard", value:"Natural sugars of the Rhododendron flower — present as nature intended. Already low glycemic. Already unrefined." },
        { label:"Sugar-Free", value:"Additional cold-filtration removes residual fructose while preserving full antioxidant profile. Zero added sweeteners. Diabetic-friendly." },
      ], todo:false },
      { section:"§07 GIFTING", headline:"A gift that tells a story before it is opened.", subsections:[
        { label:"The Single — ₹[PRICE]", value:"1 bottle + branded box + handwritten origin card + story card\nIdeal for: Wedding favour · Corporate desk gift · Birthday" },
        { label:"The Pair — ₹[PRICE]", value:"2 bottles (standard + sugar-free) + premium outer carton + silk ribbon + origin story booklet + harvest certificates\nIdeal for: Diwali · Executive gifting · International clients" },
        { label:"The Collection — ₹[PRICE]", value:"4 bottles + pine crate with lotus burn mark + jute padding + harvest certificate + women's portrait card + narrative booklet\nIdeal for: Ultra-premium · Diplomatic · Luxury hotels" },
      ], todo:true },
      { section:"§08 ORDER", headline:"Order BURANSH.", subsections:[{ label:"Sub", value:"Delivered across India. International shipping on request." },{ label:"CTA", value:"Pay with Razorpay" },{ label:"Trust bar", value:"Razorpay secured · 256-bit SSL · FSSAI Certified · 7-day return policy · Dispatched within 3–5 working days" },{ label:"Success message", value:"Your order is confirmed. We will dispatch within 3–5 working days. You will receive a tracking link by email." }], todo:false },
    ],
    about: [
      { section:"§01 NAME ORIGIN", headline:"Aatrey. A name older than the brand.", subsections:[
        { label:"Headline", value:"Aatrey." },
        { label:"Sub", value:"A name that is older than the brand. Older than the bottle. Older than the idea." },
        { label:"Body", value:"The sage Atri — Aatri in Sanskrit — was one of the Saptarishis, the seven divine sages of the Vedic tradition. Atri means: the one who consumes. He who takes in. He who knows by ingesting.\n\nFrom the mountains where he is said to have walked — the Himalayas — comes a flower that has been consumed for its wisdom for centuries before any laboratory confirmed what the body already knew. We named this elixir after the intelligence that found it." },
      ], todo:false },
      { section:"§02 SHLOK", headline:"From the Rigveda — Sanskrit shlok", subsections:[{ label:"STATUS", value:"Client to provide: Sanskrit shlok text · Transliteration · English translation · Context" }], todo:true },
      { section:"§03 AATMANIRBHAR", headline:"Self-reliance is not a government scheme. It is a way of being.", subsections:[
        { label:"Body", value:"Project Aatmanirbhar is not a CSR initiative. It is the structural foundation of BURANSH. The women of the Rhododendron groves are not beneficiaries of this brand — they are its primary architects." },
        { label:"Mission statement", value:"We do not support the women of BURANSH. We are accountable to them. That is a different relationship entirely." },
        { label:"Stats", value:"[X]+ Women in harvest network · [X] Villages · [X]kg per season · [X]% income increase" },
      ], todo:true },
      { section:"§04 WOMEN", headline:"They were here before us. They will be here after.", subsections:[{ label:"STATUS", value:"Three women's profiles needed:\nName · Village · Altitude · Years harvesting · Direct quote · Personal story (2–3 sentences)\nRequires on-site interview by client or journalist." }], todo:true },
      { section:"§05 FILM", headline:"Some things must be watched to be understood.", subsections:[{ label:"STATUS", value:"Client to provide: Film URL (YouTube/Vimeo) · Director name · Runtime · Context paragraph" }], todo:true },
    ],
    staycation: [
      { section:"§01 HERO", headline:"Some luxury must be witnessed to be believed.", subsections:[
        { label:"Headline", value:"Some luxury must be witnessed to be believed." },
        { label:"Sub", value:"Stay among the Rhododendron groves. Walk with the women who harvest. Watch the elixir made. Taste it where it is born." },
        { label:"CTA", value:"Enquire about a Stay" },
      ], todo:false },
      { section:"§02 WHAT THIS IS", headline:"This is not a tour. This is an initiation.", subsections:[
        { label:"Body", value:"The BURANSH staycation is a deliberately designed experience for people who want to understand something completely — not just consume it. You will not be a tourist in these hills. You will be a temporary member of the community that makes BURANSH possible." },
        { label:"Constraints", value:"Maximum [X] guests per experience · Minimum 2 nights" },
      ], todo:true },
      { section:"§03 FOUR STAGES", headline:"The experience unfolds in four movements.", subsections:[
        { label:"Stage 01 — Arrival", value:"Taste first. Understand second.\nA BURANSH bottle awaits when you arrive. We do not introduce it. You taste it before you see the forest that made it." },
        { label:"Stage 02 — Harvest Walk", value:"No script. No tour guide voice. Just the forest and the women who know it.\nThe harvest continues with or without guests. You are walking into someone else's working day." },
        { label:"Stage 03 — The Making", value:"Witness the process. Participate if you choose.\nThe cold press happens at altitude, within six hours of harvest. You will watch it. If you want, you will do it yourself. That bottle is yours." },
        { label:"Stage 04 — Your Legacy", value:"You leave something behind.\nYou plant one Rhododendron sapling in the medicinal expansion garden. Your name is recorded alongside it. In [X] years, that tree will flower." },
      ], todo:false },
      { section:"§04 NINE EXPERIENCES", headline:"Nine ways to be present in these hills.", subsections:[
        { label:"01", value:"Being in Nature — Forest walks designed for attention, not exercise. Learn to read the landscape." },
        { label:"02", value:"Medicinal Plant Plantation — Walk the medicinal garden. Learn 15+ Himalayan plants by traditional name and use." },
        { label:"03", value:"Make Your Own Elixir — Harvest, press, bottle, and label your own concentrate. The only bottle of its kind." },
        { label:"04", value:"Being with the Women — Cook together. Work alongside. Hear the stories as conversations, not anecdotes." },
        { label:"05", value:"Learning & Education — Ethnobotany session. Vedic medicine history. Modern science of anthocyanins. Fair harvest economics." },
        { label:"06", value:"Experience the Wilderness — Sunrise at the ridge. High-altitude silence. The specific quality of Himalayan light at 4am." },
        { label:"07", value:"Pahadi Craft — The handwoven cane baskets. Traditional Pahadi textile techniques. A morning with the craft." },
        { label:"08", value:"Taking Back a Memory — Your bottle. A photograph. The name of your sapling. A pressed Rhododendron bloom." },
        { label:"09", value:"Leaving a Legacy — Your sapling is a message to a future you will not meet. A contribution to a harvest that outlasts your memory of making it." },
      ], todo:false },
    ],
    more: [
      { section:"§01 OMAKASE", headline:"A private tasting in the oldest tradition.", subsections:[
        { label:"Body", value:"Omakase: I leave it to you. Four preparations, four chapters of the origin narrative, in a setting of your choosing. Hosted by the founder. Maximum eight guests." },
        { label:"Includes", value:"Four preparations (Classic / Warm / Fizz / Seasonal) · Founder-hosted · Full narrative accompaniment · Paired botanical bites · One 750ml bottle to take home · BURANSH narrative booklet" },
        { label:"Details", value:"5–8 guests · Approximately 2.5 hours · At your property or partner venue" },
      ], todo:true },
      { section:"§02 COMING SOON", headline:"The Rhododendron is not finished revealing itself.", subsections:[
        { label:"JAM", value:"BURANSH Jam · Rhododendron Arboreum Preserve\nSingle-origin. No pectin. No stabilisers. No preservatives.\nCOMING SOON · [Season Year]" },
        { label:"TEA", value:"BURANSH Tea · Dried Rhododendron Petal Infusion\nNo caffeine. No flavouring. No blending.\nCOMING SOON · [Season Year]" },
      ], todo:false },
      { section:"§03 COMPLIANCE", headline:"Every claim, verified.", subsections:[
        { label:"Body", value:"We do not ask you to trust our marketing. We publish our certifications." },
        { label:"FSSAI", value:"FSSAI Certification · Licence No. [NUMBER] · Valid through [DATE]" },
        { label:"Lab Reports", value:"Third-party lab analysis: anthocyanins, quercetin, flavonoids, heavy metal screening · Lab: [Name] · Date: [DATE]" },
        { label:"Origin", value:"Uttarakhand geographical origin verified · Audit date: [DATE] · GI Tag status: [STATUS]" },
      ], todo:true },
    ],
  };

  return (
    <div style={{ background:T.ivory, minHeight:"100vh", fontFamily:T.body }}>

      {/* Header */}
      <div style={{ background:T.ink, padding:"20px 26px", position:"relative", overflow:"hidden" }}>
        <Grain/>
        <div style={{ position:"relative", zIndex:2 }}>
          <p style={{ fontFamily:"sans-serif", fontSize:"7px", letterSpacing:"5px", textTransform:"uppercase", color:T.crimson, marginBottom:"6px" }}>BURANSH · AATREY ELIXIR</p>
          <h1 style={{ fontFamily:T.display, fontSize:"clamp(18px,3vw,30px)", fontWeight:300, fontStyle:"italic", color:"#F5EDD8", letterSpacing:"-0.3px" }}>
            Website Copy · Asset List · Claude Code Prompt
          </h1>
          <p style={{ fontFamily:T.body, fontSize:"12px", fontStyle:"italic", color:T.muted, marginTop:"4px" }}>Complete copy for all 5 pages · {ASSETS.reduce((a,g)=>a+g.items.length,0)} assets · One-shot build prompt</p>
        </div>
      </div>

      {/* Main tabs */}
      <div style={{ background:T.parchment, borderBottom:`1px solid ${T.border}`, padding:"0 26px", display:"flex", gap:0, overflowX:"auto" }}>
        {[
          { id:"copy",   label:"All Page Copy" },
          { id:"assets", label:"Asset List" },
          { id:"prompt", label:"Claude Code Prompt" },
        ].map(t=>(
          <button key={t.id} onClick={()=>setTab(t.id)} style={{
            background:"transparent", border:"none",
            borderBottom:`2px solid ${tab===t.id?T.crimson:"transparent"}`,
            color:tab===t.id?T.crimson:T.muted,
            padding:"12px 16px", cursor:"pointer",
            fontFamily:T.body, fontSize:"13px", whiteSpace:"nowrap",
            transition:`all 300ms ${T.ease}`,
          }}>{t.label}</button>
        ))}
      </div>

      <div style={{ padding:"18px 26px 60px" }}>

        {/* ── COPY ────────────────────────────────────────────── */}
        {tab === "copy" && (
          <div>
            <div style={{ display:"flex", gap:"4px", marginBottom:"18px", overflowX:"auto", paddingBottom:"4px" }}>
              {PAGES.map(p=>(
                <button key={p.id} onClick={()=>setPage(p.id)} style={{
                  background:page===p.id?T.crimson:"transparent",
                  border:`1px solid ${page===p.id?T.crimson:T.border}`,
                  color:page===p.id?T.ivory:T.ink,
                  padding:"7px 16px", cursor:"pointer",
                  fontFamily:T.body, fontSize:"13px",
                  fontStyle:page===p.id?"italic":"normal",
                  whiteSpace:"nowrap",
                  transition:`all 300ms ${T.ease}`,
                }}>
                  <span style={{ fontFamily:"sans-serif", fontSize:"7px", letterSpacing:"1.5px", opacity:0.7, display:"block" }}>{p.path}</span>
                  {p.label}
                </button>
              ))}
            </div>

            <div style={{ marginBottom:"16px", padding:"10px 14px", background:T.parchment, borderLeft:`3px solid ${T.gold}` }}>
              <p style={{ fontFamily:T.body, fontSize:"13px", fontStyle:"italic", color:T.muted }}>
                Sections marked <span style={{ color:T.gold }}>TODO</span> require client input before launch. All other copy is confirmed and ready to build.
                Click any section to expand the full copy.
              </p>
            </div>

            {(copyData[page]||[]).map((item,i)=>(
              <SectionRow key={i} {...item} />
            ))}
          </div>
        )}

        {/* ── ASSETS ──────────────────────────────────────────── */}
        {tab === "assets" && (
          <div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(160px,1fr))", gap:"2px", marginBottom:"20px" }}>
              {[
                { label:"Total assets", val: ASSETS.reduce((a,g)=>a+g.items.length,0), color:T.ink },
                { label:"Existing (use now)", val: ASSETS[0].items.length, color:T.green },
                { label:"Studio shoot", val: ASSETS[1].items.length, color:T.umber },
                { label:"Uttarakhand shoot", val: ASSETS[2].items.length+ASSETS[3].items.length+ASSETS[4].items.length+ASSETS[5].items.length, color:T.crimson },
                { label:"Documents", val: ASSETS[7].items.length, color:T.pale },
              ].map((s,i)=>(
                <div key={i} style={{ background:T.parchment, padding:"14px 16px" }}>
                  <p style={{ fontFamily:"sans-serif", fontSize:"7px", letterSpacing:"2px", textTransform:"uppercase", color:T.muted, marginBottom:"4px" }}>{s.label}</p>
                  <p style={{ fontFamily:T.display, fontSize:"24px", fontStyle:"italic", color:s.color }}>{s.val}</p>
                </div>
              ))}
            </div>
            {ASSETS.map((group,i)=>(
              <AssetGroup key={i} group={group}/>
            ))}
          </div>
        )}

        {/* ── CLAUDE CODE PROMPT ──────────────────────────────── */}
        {tab === "prompt" && (
          <div>
            <div style={{ background:T.crimson, padding:"14px 18px", marginBottom:"14px", display:"flex", justifyContent:"space-between", alignItems:"center", gap:"12px" }}>
              <p style={{ fontFamily:T.display, fontSize:"clamp(14px,2vw,18px)", fontStyle:"italic", color:T.ivory }}>
                Copy this prompt. Open Claude Code in your project. Paste as the first message.
              </p>
              <CopyBtn text={CODEX_PROMPT}/>
            </div>
            <pre style={{
              fontFamily:"'Courier New', monospace", fontSize:"11px", color:T.ink,
              lineHeight:1.8, background:T.parchment, padding:"20px",
              whiteSpace:"pre-wrap", wordBreak:"break-word",
              borderLeft:`4px solid ${T.crimson}`,
              maxHeight:"70vh", overflowY:"auto",
            }}>{CODEX_PROMPT}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
