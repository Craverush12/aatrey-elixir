/**
 * All static copy for the BURANSH website.
 * Fields marked // TODO must be confirmed with client before launch.
 */

export const BRAND = {
  name:    'BURANSH',
  by:      'by Aatrey Elixir',
  tagline: 'Inherited, not manufactured.',
  product: 'Himalayan Rhododendron Floral Concentrate · 750ml',
  sku:     'AATREY ELIXIR — NO. 001',

  // TODO: confirm with client before launch — [price per bottle, standard]
  priceStandard:  null as null | number,
  // TODO: confirm with client before launch — [price per bottle, sugar-free]
  priceSugarFree: null as null | number,

  origin: {
    altitude: '2,500m',
    region:   'Uttarakhand, India',
    bloom:    'March – May',
    species:  'Rhododendron arboreum',
  },

  heroCopy: {
    preLabel: 'AATREY ELIXIR · BURANSH',
    line1:    'Inherited,',
    line2:    'not manufactured.',
    body:     `From the Rhododendron forests of Uttarakhand. At the elevation where the air is thin and the flowers know only the most patient hands.`,
    meta:     'Asia-endorsed · Women-led · FSSAI certified · Uttarakhand origin',
    cta1:     'Order the Elixir',
    cta2:     'Experience the Origin →',
  },

  valuePillars: [
    {
      num:      '01',
      title:    'Research & Quality',
      body:     'Every bottle is cold-pressed within six hours of harvest. Tested by third-party laboratories. FSSAI certified. No shortcuts exist at 2,500 metres.',
      footnote: 'Lab-verified · FSSAI certified · Single-ingredient',
    },
    {
      num:      '02',
      title:    'Origin & Altitude',
      body:     'Rhododendron arboreum blooms for eight weeks a year between March and May. Only at altitude. Only in Uttarakhand. There is no substitute and no off-season reserve.',
      footnote: '2,500m above sea level · Single harvest annually',
    },
    {
      num:      '03',
      title:    'Women & Culture',
      body:     'Project Aatmanirbhar. The women of Uttarakhand have harvested this flower for generations. They do not work for BURANSH — BURANSH exists because of them.',
      footnote: 'Project Aatmanirbhar · Pahadi women harvesters',
    },
    {
      num:      '04',
      title:    'Homestay & Education',
      body:     'The full story cannot be told on a screen. Come to the groves. Walk with the women. Make your own elixir. Leave knowing something that cannot be taught anywhere else.',
      footnote: 'Uttarakhand staycation · Learn · Experience · Witness',
    },
  ],

  productIntro: {
    label:    'THE ELIXIR',
    headline: 'Himalayan Rhododendron, distilled into a single bottle.',
    body:     `BURANSH is a floral concentrate of Rhododendron arboreum — cold-pressed, unfiltered of its natural compounds, and bottled at source. It is not a juice. It is not a cordial. It is an elixir in the oldest sense of the word: a preparation of singular botanical intelligence, made to be diluted with intention.`,
    specs:    ['Cold-pressed', 'Single harvest', 'No additives', 'No preservatives', '750ml · Rhododendron arboreum only'],
  },

  // About — Aatrey name origin
  nameOrigin: {
    headline: 'Aatrey.',
    sub:      'A name that is older than the brand. Older than the bottle. Older than the idea.',
    body:     `The sage Atri — Aatri in Sanskrit — was one of the Saptarishis, the seven divine sages of the Vedic tradition. He is described in the Rigveda as a seer of consuming intelligence: one who does not merely observe the natural world, but absorbs its wisdom completely. Atri means: the one who consumes. He who takes in. He who knows by ingesting.`,
    body2:    `From the mountains where he is said to have walked — the Himalayas — comes a flower that has been consumed for its wisdom for centuries before any laboratory confirmed what the body already knew. We named this elixir after the intelligence that found it.`,
  },

  // TODO: confirm with client before launch — [Sanskrit shlok — Devanagari script]
  shlok: {
    devanagari:      '// TODO: confirm with client before launch — [Sanskrit shlok in Devanagari]',
    transliteration: '// TODO: confirm with client before launch — [transliteration in Roman script]',
    translation:     '// TODO: confirm with client before launch — [English translation]',
    context:         'This verse from the Rigveda speaks of the sage Atri\'s relationship with the botanical world — and the knowledge that is gained not through observation alone, but through communion.',
  },

  // Project Aatmanirbhar
  project: {
    name:             'Project Aatmanirbhar',
    tagline:          'Their hands. Their hills. Their elixir.',
    body:             `Before BURANSH was a brand, it was a practice. Pahadi women in the Rhododendron groves of Uttarakhand have understood this flower since before any name existed for it. They harvest by touch — knowing which bloom is ready, which is not, which will never be. That knowledge is not in any book. It lives in them.`,
    body2:            `Project Aatmanirbhar is our commitment that this knowledge is compensated with dignity. Every woman in the harvest is paid above fair trade standards, named in our records, and — if they choose — named on your bottle.`,
    missionStatement: `We do not support the women of BURANSH. We are accountable to them. That is a different relationship entirely.`,
    // TODO: confirm with client before launch — [all impact numbers]
    impact: [
      { num: null as null | number, label: 'Women employed', suffix: '+' },
      { num: null as null | number, label: 'Villages covered', suffix: '' },
      { num: null as null | number, label: 'kg harvested per season', suffix: 'kg' },
      { num: null as null | number, label: 'Income increase', suffix: '%' },
    ],
  },

  // Documentary
  // TODO: confirm with client before launch — [documentary URL]
  documentary: {
    url:      null as null | string,
    title:    '// TODO: confirm with client before launch — [film title]',
    director: '// TODO: confirm with client before launch — [director name]',
    runtime:  '// TODO: confirm with client before launch — [runtime]',
    synopsis: 'A documentary filmed in the Rhododendron groves of Uttarakhand. It follows the women of the harvest through a complete bloom season — from the first bud to the last pressed bottle.',
    body:     'Some things must be watched to be understood.',
  },

  // Elixir page
  whatItIs: {
    sectionLabel: 'THE CONCENTRATE',
    headline:     'This is not a juice. This is an elixir.',
    body:         `Rhododendron arboreum flowers are cold-pressed within six hours of harvest at 2,500 metres altitude. The resulting concentrate is dense with anthocyanins, quercetin, and natural phytocompounds that degrade rapidly at lower altitudes or with delay. Which is why BURANSH is made where it grows. And only then.`,
    body2:        `One 750ml bottle contains the cold-pressed concentrate of hand-selected Rhododendron blooms. Dilute 1:8 with cold water, warm water, or sparkling water. Every sip is an altitude you did not have to climb to reach.`,
    notList:      ['No refined sugar', 'No artificial additives', 'No preservatives', 'No colour or flavour'],
    specs: [
      { label: 'Format',     value: 'Floral concentrate' },
      { label: 'Volume',     value: '750ml' },
      { label: 'Process',    value: 'Cold-pressed at source' },
      { label: 'Harvest',    value: 'Single annual harvest, March–May' },
      { label: 'Altitude',   value: '2,400–2,600m, Uttarakhand' },
      { label: 'Dilution',   value: '1:8 ratio (or to taste)' },
      { label: 'Additives',  value: 'None. Zero.' },
    ],
    whyItMatters: {
      headline: 'Why altitude matters.',
      body:     `At 2,500 metres, the thin air, intense UV, and cool temperatures stress the Rhododendron arboreum flower to produce its highest concentration of anthocyanins and antioxidants. What you taste is the direct result of that elevation. You cannot replicate it at sea level. You cannot manufacture it in a factory.`,
    },
  },

  betterThan: {
    sectionLabel: 'A SUPERIOR CHOICE',
    headline:     'The most civilised drink you have never had.',
    sub:          'A benchmark comparison for the discerning mind.',
    closingLine:  'BURANSH is the drink that required no compromise to be chosen.',
    comparisons: [
      {
        versus: 'vs Soft Drinks',
        points: [
          'No refined sugar · No caramel colour',
          'No phosphoric acid · No artificial flavour',
          'Real single botanical origin',
          'Antioxidant-rich, not antioxidant-stripped',
        ],
      },
      {
        versus: 'vs Packaged Juice',
        points: [
          'Not from concentrate · No preservatives',
          'No added synthetic vitamins',
          'Single ingredient — one flower, nothing else',
          'Processed at source, not in a factory',
        ],
      },
      {
        versus: 'vs Energy Drinks',
        points: [
          'No caffeine spike · No taurine',
          'No artificial stimulants',
          'No post-consumption crash',
          'Sustained natural wellness, not borrowed energy',
        ],
      },
      {
        versus: 'vs Alcohol',
        points: [
          'The social drink without the morning after',
          'Suitable for all ages at every occasion',
          'Premium enough for the table · Zero compromise',
          'The signature drink that everyone can hold',
        ],
      },
    ],
  },

  occasions: {
    sectionLabel: 'FOR EVERY PERSON · EVERY MOMENT',
    headline:     'One elixir. Every occasion.',
    sub:          'BURANSH is not a niche wellness product. It is the premium beverage of choice for anyone who refuses to settle for ordinary.',
    tiles: [
      {
        name: 'Urban Professionals',
        body: 'The desk ritual. The meeting room. The board presentation. A beverage that communicates taste, discernment, and clarity without the need for explanation.',
        tag:  'WORKPLACE · MEETINGS · DAILY RITUAL',
      },
      {
        name: 'Children & Families',
        body: 'Safe for every age group. No sugar, no caffeine, no compromise. The family dinner table, the school lunch, the after-practice recovery. BURANSH is what healthy looks like when it also tastes extraordinary.',
        tag:  'CHILDREN · FAMILIES · SCHOOL',
      },
      {
        name: 'The Elderly',
        body: 'Anthocyanins. Quercetin. Natural anti-inflammatory compounds studied for joint health and cardiovascular support. The daily ritual that is both pleasurable and purposeful.',
        tag:  'WELLNESS · DAILY HEALTH RITUAL',
      },
      {
        name: 'Weddings & Celebrations',
        body: 'The signature non-alcoholic welcome drink that no guest will forget. Customisable bottles for wedding gifting. A statement that this occasion was thought about, not just catered.',
        tag:  'WEDDINGS · EVENTS · CELEBRATIONS',
      },
      {
        name: 'Yoga, Gym & Sport',
        body: 'Pre-workout hydration. Post-exercise recovery. Natural compounds that support physical practice without artificial stimulants. The athlete\'s elixir.',
        tag:  'YOGA · GYM · SPORT · RECOVERY',
      },
      {
        name: 'Foreign Guests & Export',
        body: 'The luxury Indian product that travels. GI-tagged Uttarakhand origin. Premium enough for international hotel lobbies, diplomatic gifting, and the global wellness market.',
        tag:  'INTERNATIONAL · EXPORT · GIFTING',
      },
      {
        name: 'Parties & Social Occasions',
        body: 'The cocktail base that elevates a home bar. The mocktail that outclasses everything else on the table. Mixed with gin, it is something else entirely. Mixed with sparkling water, it holds its own.',
        tag:  'PARTIES · SOCIAL · ENTERTAINING',
      },
      {
        name: 'Corporate & Institutional',
        body: 'Bulk placement for hotels, airlines, wellness centres, yoga studios, and corporate campuses. The beverage that says your organisation thinks about wellbeing seriously.',
        tag:  'CORPORATE · HOTELS · BULK',
      },
      {
        name: 'Schools & Colleges',
        body: 'The canteen alternative that actually builds good habits. Sugar-free option available. Educationally aligned — every bottle is a story about Himalayan ecology, Pahadi culture, and what real nutrition looks like.',
        tag:  'SCHOOLS · COLLEGES · YOUTH',
      },
    ],
  },

  recipes: [
    {
      num:         '01',
      name:        'The Classic',
      subtitle:    'Morning · Daily ritual · All ages',
      ratio:       '1 part BURANSH · 8 parts chilled water',
      additions:   'Fresh mint leaves',
      context:     'Morning ritual. Health-forward. The purest expression.',
      temp:        'Cold',
      ingredients: ['1 part BURANSH concentrate', '8 parts chilled spring water', 'Fresh mint sprig', 'Wedge of lime (optional)'],
      method:      'Pour concentrate over ice. Add chilled water. Stir gently. Add mint. Serve immediately.',
      powerLine:   'The ritual that begins the day correctly. Every morning, without exception.',
      benefits:    ['Anthocyanins — natural antioxidant', 'Anti-inflammatory botanical compounds', 'No sugar, no caffeine, no compromise'],
    },
    {
      num:         '02',
      name:        'The Altitude Fizz',
      subtitle:    'Parties · Social · All occasions',
      ratio:       '1 part BURANSH · 7 parts sparkling water',
      additions:   'Fresh lime wheel · Slice of ginger',
      context:     'Party version. All ages. The conversation starter.',
      temp:        'Cold',
      ingredients: ['1 part BURANSH concentrate', '7 parts sparkling water', 'Slice of fresh ginger', 'Wedge of lime', 'Ice — large cube'],
      method:      'Pour concentrate into a chilled glass over one large ice cube. Add sparkling water slowly. Express the lime. Drop in the ginger.',
      powerLine:   'The drink that ends conversations about what is in your glass — and starts a different conversation entirely.',
      benefits:    ['Natural carbonation feel without artificial fizz', 'Ginger amplifies the anti-inflammatory profile', 'The party drink that everyone can have'],
    },
    {
      num:         '03',
      name:        'The Warm Ritual',
      subtitle:    'Evening · Medicinal · Ayurvedic context',
      ratio:       '1 part BURANSH · 6 parts warm water',
      additions:   'Fresh ginger · Raw honey · Cinnamon',
      context:     'Medicinal. Winter. Ayurvedic context. The healing cup.',
      temp:        'Hot',
      ingredients: ['1 part BURANSH concentrate', '6 parts warm water (not boiling)', 'Thin slice of fresh ginger', '1 tsp raw honey (optional)', 'Pinch of cinnamon'],
      method:      'Warm the water to 70°C — not boiling, which damages the botanical compounds. Add concentrate. Stir in ginger. Honey if desired. Cinnamon on top.',
      powerLine:   'In Ayurvedic medicine, the warm preparation of botanical concentrates is called an anupana — a vehicle that carries medicine deeper. This is BURANSH as medicine.',
      benefits:    ['Heat-stable anthocyanin profile', 'Ginger + Rhododendron: anti-inflammatory pairing', 'The evening ritual that prepares the body for rest'],
    },
    {
      num:         '04',
      name:        'The Himalayan Mule',
      subtitle:    'Adult occasions · Parties · Signature cocktail',
      ratio:       '1 part BURANSH · 4 parts sparkling or tonic',
      additions:   'Gin or vodka optional · Ginger · Rosemary',
      context:     'Adult occasions. Elegant non-alcoholic base too.',
      temp:        'Cold',
      ingredients: ['1 part BURANSH concentrate', '1 part premium gin or vodka (optional)', '4 parts sparkling water or tonic', 'Fresh ginger slice', 'Lime wedge', 'Sprig of rosemary'],
      method:      'In a copper mug or highball glass: ice, spirit (if using), BURANSH concentrate, top with sparkling. Express the lime. Garnish with ginger and rosemary.',
      powerLine:   'The cocktail that tastes like the Himalayas. Order it with spirit at a party. Order it without at a breakfast meeting. Either way, it is the most interesting drink in the room.',
      benefits:    ['Works as both cocktail and premium mocktail', 'The rosemary and ginger complement the Rhododendron floral profile', 'The signature house cocktail for any occasion'],
    },
  ],

  variants: {
    standard: {
      name:  'BURANSH Standard',
      body:  'The natural sugars of the Rhododendron arboreum flower — present in the concentrate as nature intended. Already low glycemic. Already unrefined. The way it has always been.',
      tag:   'Natural floral sugars · Low glycemic · Unrefined',
    },
    sugarFree: {
      name:  'BURANSH Sugar-Free',
      body:  'An additional cold-filtration step removes the residual fructose content while preserving the full antioxidant and phytocompound profile. Zero added sweeteners. Suitable for diabetics and those managing their sugar intake with precision.',
      tag:   'Zero residual fructose · Full botanical profile preserved · Diabetic-friendly',
    },
    footnote: 'Both variants are identical in origin, process, and botanical integrity. The only difference is the final filtration step.',
  },

  gifting: [
    {
      id:        'gift-single',
      name:      'The Single',
      contents:  ['1 × 750ml BURANSH bottle', 'BURANSH branded gift box', 'Handwritten origin card (who harvested this bottle)', 'The BURANSH story card'],
      occasion:  'Wedding favour · Corporate desk gift · Birthday · Thank you',
      // TODO: confirm with client before launch — [gift single price]
      price:     null as null | number,
      badge:     null as null | string,
      highlight: false,
    },
    {
      id:        'gift-pair',
      name:      'The Pair',
      contents:  ['2 × 750ml BURANSH bottles (standard + sugar-free)', 'Premium outer carton with silk ribbon', 'Origin story booklet (full narrative, 12 pages)', 'Two harvest certificates (one per bottle)'],
      occasion:  'Diwali · Executive gifting · Anniversaries · International clients',
      // TODO: confirm with client before launch — [gift pair price]
      price:     null as null | number,
      badge:     'Most gifted',
      highlight: true,
    },
    {
      id:        'gift-collection',
      name:      'The Collection',
      contents:  ['4 × 750ml BURANSH bottles', 'Handcrafted pine wooden crate with lotus burn mark', 'Natural jute padding', 'Personalised harvest certificate', 'Women of BURANSH portrait card', 'Full-length BURANSH narrative booklet'],
      occasion:  'Ultra-premium gifting · Diplomatic gifts · Export clients · Luxury hotels',
      // TODO: confirm with client before launch — [gift collection price]
      price:     null as null | number,
      badge:     'The statement',
      highlight: false,
    },
  ],

  // Staycation
  staycation: {
    hero: {
      preLabel: 'UTTARAKHAND · THE EXPERIENCE',
      headline: 'Some luxury must be witnessed to be believed.',
      sub:      'Stay among the Rhododendron groves. Walk with the women who harvest. Watch the elixir made. Taste it where it is born.',
      subCta:   'What to expect ↓',
    },
    expectation: {
      sectionLabel: 'WHAT THIS IS',
      headline:     'This is not a tour. This is an initiation.',
      body:         `The BURANSH staycation is a deliberately designed experience for people who want to understand something completely — not just consume it. You will not be a tourist in these hills. You will be a temporary member of the community that makes BURANSH possible.`,
      body2:        `We limit this experience to small groups. The intimacy is non-negotiable. The forest is not a backdrop. The women are not a spectacle. You are being invited into a living process — and that invitation requires your full presence.`,
    },
    journey: [
      {
        num:      '01',
        stage:    'Arrival',
        headline: 'Taste first. Understand second.',
        body:     `A BURANSH bottle awaits in your accommodation when you arrive. We do not introduce it. We do not explain it. You taste it before you see the forest that made it. This is the intention behind the entire stay — first the experience, then the understanding of how it came to be.`,
        detail:   'Your bottle is from the last harvest. It was made by a specific woman whose name you will learn during your stay.',
      },
      {
        num:      '02',
        stage:    'The Harvest Walk',
        headline: 'No script. No tour guide voice. Just the forest and the women who know it.',
        body:     `You walk with the women of the current harvest. This is not a demonstration — the harvest continues with or without guests. You are walking into someone else's working day and being permitted to observe what takes a lifetime to learn.`,
        detail:   'You will understand, by the end of this walk, why the bloom window is eight weeks and not eight months. Why altitude changes the flower\'s compound profile. Why the selection of which blooms to take and which to leave requires decades of knowledge.',
      },
      {
        num:      '03',
        stage:    'The Making',
        headline: 'Witness the process. Participate if you choose.',
        body:     `The cold press happens at altitude, within six hours of harvest. You will watch it happen. If you want, you will do it yourself. The concentrate that results from your participation — you will bottle it. That bottle is yours to take home.`,
        detail:   'This is the session that makes guests understand why there is no off-season BURANSH. Why the factory version cannot exist. Why the price reflects the process.',
      },
      {
        num:      '04',
        stage:    'Your Legacy',
        headline: 'You leave something behind.',
        body:     `Before you depart, you plant one Rhododendron arboreum sapling in the medicinal expansion garden. Your name is recorded alongside it. In years to come, that tree will flower. A woman you have never met will harvest from it.`,
        detail:   'You are not just leaving with a bottle of BURANSH. You are leaving as part of the next harvest.',
      },
    ],
    wilderness: [
      {
        icon:  'leaf',
        name:  'Being in Nature',
        body:  'Guided forest walks designed not for exercise but for attention. Learn to read the Rhododendron landscape — where the oldest trees grow, what the soil composition tells you about the flower\'s potency, what the altitude does to your perception of time.',
      },
      {
        icon:  'plant',
        name:  'Medicinal Plant Plantation',
        body:  'The Rhododendron arboreum does not grow alone. It is part of a medicinal ecosystem that has supplied Pahadi communities for centuries. You will walk this garden, learn 15+ Himalayan medicinal plants by their traditional names and uses, and understand the ecology that BURANSH comes from.',
      },
      {
        icon:  'bottle',
        name:  'Make Your Own Elixir',
        body:  'From flower to bottle under your own hands. You harvest your blooms. You cold-press your concentrate. You seal and label your bottle. You leave with an elixir that is genuinely, verifiably yours — the only bottle of its kind in the world.',
      },
      {
        icon:  'woman',
        name:  'Being with the Women',
        body:  'Cook together. Work alongside. Hear the stories — not as anecdotes delivered for tourists, but as conversations between people sharing a meal. The women of Project Aatmanirbhar are not a feature of this experience. They are the experience.',
      },
      {
        icon:  'book',
        name:  'Learning & Education',
        body:  'An ethnobotany session on the history of Rhododendron arboreum in Vedic medicine. The modern science of anthocyanins and why altitude changes the compound profile. The economics of fair harvest and what ethical botanical sourcing actually requires.',
      },
      {
        icon:  'sunrise',
        name:  'Experience the Wilderness',
        body:  'Sunrise at the ridge. The quality of high-altitude silence. The specific quality of Himalayan light at 4am. These are not scheduled activities. They are what happens when you sleep in the right place at the right altitude and allow yourself to wake up.',
      },
      {
        icon:  'craft',
        name:  'Pahadi Craft',
        body:  'The handwoven cane baskets used in the harvest. The traditional Pahadi textile techniques. A morning with one of the women learning the craft that has supplied this harvest for longer than any living person can remember.',
      },
      {
        icon:  'memory',
        name:  'Taking Back a Memory',
        body:  'Your own bottle of elixir. A photograph of the woman who taught you the harvest. The name of the sapling you planted. A small pressed Rhododendron bloom. And the knowledge that you were part of something — briefly, but genuinely — that most people will never see.',
      },
      {
        icon:  'tree',
        name:  'Leaving a Legacy',
        body:  'The Rhododendron arboreum takes years to first bloom. Your sapling is a message to a future you will not meet. A contribution to a harvest that will outlast your memory of making it. The most luxurious thing we can offer: a permanence that costs nothing but your presence.',
      },
    ],
    included: [
      // TODO: confirm with client before launch — [accommodation partner property details]
      'Accommodation (partner property — details TBC)',
      'All meals',
      'Daily BURANSH serving',
      'Guided harvest walk',
      'Session with the women of Project Aatmanirbhar',
      'Educational ethnobotany tour',
      'Make-your-own elixir session',
      'Farewell personalised bottle',
      '2 nights minimum',
    ],
  },

  // Omakase
  omakase: {
    sectionLabel: 'THE OMAKASE EXPERIENCE',
    headline:     'A private tasting in the oldest tradition.',
    body:         `Omakase: I leave it to you. In Japan, this is an act of complete trust extended to a chef. The BURANSH Omakase extends the same trust to the story of an elixir — four preparations, four chapters of the origin narrative, in a setting of your choosing.`,
    body2:        `The BURANSH Omakase is hosted by the founder. Maximum eight guests. Each preparation is accompanied by the specific chapter of the BURANSH story that it embodies: the altitude, the harvest, the women, the making. By the final pour, you will have not just tasted BURANSH — you will understand it.`,
    sub:          'By arrangement only.',
    includes: [
      'Four preparations of BURANSH (Classic, Warm, Fizz, seasonal fourth)',
      'Hosted by the BURANSH founder',
      'Full narrative accompaniment — the story behind each pour',
      'Paired botanical small bites from the Pahadi culinary tradition',
      'One 750ml bottle of BURANSH to take home',
      'The BURANSH narrative booklet',
    ],
    guestRange: '5–8 guests',
    duration:   'Approximately 2.5 hours',
  },

  // Compliance
  // TODO: confirm with client before launch — [FSSAI licence number]
  fssaiNumber: '// TODO: confirm with client before launch — [FSSAI licence number]',
  // TODO: confirm with client before launch — [all lab report PDFs]
} as const;
