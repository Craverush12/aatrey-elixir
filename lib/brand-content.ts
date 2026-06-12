/**
 * All static copy for the BURANSH website.
 * Unapproved factual fields intentionally remain null until cleared for launch.
 */

export const BRAND = {
  name:    'BURANSH',
  by:      'by Aatrey Elixir',
  tagline: 'Inherited, not manufactured.',
  product: 'Himalayan Rhododendron Floral Concentrate - 750ml',
  sku:     'AATREY ELIXIR - NO. 001',

  priceStandard:  1099 as null | number,
  priceSugarFree: 1099 as null | number,

  origin: {
    altitude: '2,500m',
    region:   'Uttarakhand, India',
    bloom:    'March - May',
    species:  'Rhododendron arboreum',
  },

  heroCopy: {
    preLabel: 'AATREY ELIXIR - BURANSH',
    line1:    'Inherited,',
    line2:    'not manufactured.',
    body:     `From the Rhododendron forests of Uttarakhand. At the elevation where the air is thin and the flowers know only the most patient hands.`,
    meta:     'Women-led harvest - cold-pressed - Uttarakhand origin',
    cta1:     'Order the Elixir',
    cta2:     'Experience the Origin',
  },

  valuePillars: [
    {
      num:      '01',
      title:    'Research & Quality',
      body:     'Every bottle is cold-pressed within six hours of harvest. No shortcuts exist at 2,500 metres.',
      footnote: 'Cold-pressed - Single-ingredient - Source-led',
    },
    {
      num:      '02',
      title:    'Origin & Altitude',
      body:     'Rhododendron arboreum blooms for eight weeks a year between March and May. Only at altitude. Only in Uttarakhand. There is no substitute and no off-season reserve.',
      footnote: '2,500m above sea level - Single harvest annually',
    },
    {
      num:      '03',
      title:    'Women & Culture',
      body:     'Project Aatmanirbhar. The women of Uttarakhand have harvested this flower for generations. They do not work for BURANSH - BURANSH exists because of them.',
      footnote: 'Project Aatmanirbhar - Pahadi women harvesters',
    },
    {
      num:      '04',
      title:    'Homestay & Education',
      body:     'The full story cannot be told on a screen. Come to the groves. Walk with the women. Make your own elixir. Leave knowing something that cannot be taught anywhere else.',
      footnote: 'Uttarakhand staycation - Learn - Experience - Witness',
    },
  ],

  productIntro: {
    label:    'THE ELIXIR',
    headline: 'Himalayan Rhododendron, distilled into a single bottle.',
    body:     `BURANSH is a floral concentrate of Rhododendron arboreum, cold-pressed and bottled at source. It is not a juice. It is not a cordial. It is an elixir in the oldest sense: a botanical preparation made to be diluted with intention.`,
    specs:    ['Cold-pressed', 'Single harvest', 'No additives', 'No preservatives', '750ml - Rhododendron arboreum only'],
  },

  homeRecipes: {
    featured: {
      label:    'SERVING RITUALS',
      headline: 'The next signature serve could begin with your bottle.',
      body:     `BURANSH was made to travel from the grove to the glass without losing its dignity. These serving notes are written for hosts, kitchens, and households that want the flower to remain the centre of the glass.`,
      eyebrow:  'Private serving notes',
      cta:      'See the serving rituals',
      cards: [
        {
          status:   'House ritual',
          title:    'The Summer Pour',
          subtitle: 'For long afternoons and chilled stone glasses.',
          body:     'A bright, high-altitude serve with citrus, mint, and enough restraint to let the flower remain the centre of the glass.',
          accent:   'Cold - Refreshing - Restrained',
        },
        {
          status:   'House ritual',
          title:    'The House Sparkle',
          subtitle: 'The celebration version.',
          body:     'A sparkling preparation built for gatherings - elegant enough for a wedding table, light enough for a daily ritual.',
          accent:   'Sparkling - Social - Ceremonial',
        },
        {
          status:   'House ritual',
          title:    'The Evening Cup',
          subtitle: 'Warm, spiced, and deliberate.',
          body:     'A slower preparation for colder weather, with ginger and soft heat carrying the flower into a deeper evening register.',
          accent:   'Warm - Slow - Evening',
        },
      ],
    },
    submission: {
      label:        'PRIVATE SERVING NOTES',
      headline:     'Send a preparation worthy of the flower.',
      body:         `Send us the preparation you return to most often - the one you serve to guests, the one you make after the day has exhausted itself, the one that proves a serious drink can still feel joyful. If it carries the flower well, we may invite it into the BURANSH serving archive.`,
      noteLabel:    'What belongs here',
      notes: [
        'Cooling serves that keep the floral character intact.',
        'Clear ingredients, ratios, garnish, and glassware cues.',
        'A short note on where the ritual belongs: breakfast, hosting, recovery, or celebration.',
      ],
      trustLine:    'Every note is reviewed privately by the BURANSH team.',
      successTitle: 'Serving note received.',
      successBody:  'If your preparation belongs on the BURANSH table, we will write back.',
      errorBody:    'Something interrupted the submission. Please try again.',
      submitCta:    'Send serving note',
      fields: {
        name:        'Your name *',
        email:       'Email *',
        city:        'City',
        recipeName:  'Serve name *',
        instagram:   'Instagram or website',
        ratio:       'Dilution or ratio',
        ingredients: 'Ingredients *',
        method:      'Method *',
        story:       'Where this serve belongs',
      },
      placeholders: {
        name:        'Full name',
        email:       'you@example.com',
        city:        'e.g. Delhi',
        recipeName:  'e.g. The Terrace Fizz',
        instagram:   '@handle or your site',
        ratio:       'e.g. 1 part BURANSH : 6 parts tonic',
        ingredients: 'List the full build, garnish included',
        method:      'How it is made and served',
        story:       'Tell us the setting, mood, or memory behind it',
      },
    },
  },

  // About - Aatrey name origin
  nameOrigin: {
    headline: 'Aatrey.',
    sub:      'A name that is older than the brand. Older than the bottle. Older than the idea.',
    body:     `The sage Atri - Aatri in Sanskrit - was one of the Saptarishis, the seven divine sages of the Vedic tradition. He is described in the Rigveda as a seer of consuming intelligence: one who does not merely observe the natural world, but absorbs its wisdom completely. Atri means: the one who consumes. He who takes in. He who knows by ingesting.`,
    body2:    `From the mountains where he is said to have walked - the Himalayas - comes a flower that has been valued for generations before any modern brand language tried to explain it. We named this elixir after the intelligence that found it.`,
  },

  shlok: {
    label: 'ATRI LINEAGE',
    intro: 'The Atreya name carries the memory of Rishi Atri: the seer, the lineage, and the Ayurvedic inheritance that places nature at the centre of knowledge.',
    verses: [] as Array<{
      devanagari: string;
      transliteration: string;
      translation: string;
    }>,
    meaning: [
      'Atreya can mean a descendant of Atri, a patronymic that carries the sage\'s name forward.',
      'It can also mean of Atri, or belonging to Atri.',
      'In Ayurveda, Atreya is associated with a medical lineage linked to Rishi Atri.',
    ],
    closing: 'In essence, Atreya signifies a connection to the revered sage Atri, to Soma, and to a way of knowledge rooted in nature.',
  },

  // Project Aatmanirbhar
  project: {
    name:             'Project Aatmanirbhar',
    tagline:          'Their hands. Their hills. Their elixir.',
    body:             `Before BURANSH was a brand, it was a practice. Pahadi women in the Rhododendron groves of Uttarakhand have understood this flower since before any name existed for it. They harvest by touch - knowing which bloom is ready, which is not, which will never be. That knowledge is not in any book. It lives in them.`,
    body2:            `Project Aatmanirbhar is a dedicated rural empowerment initiative focused on creating sustainable livelihoods, fostering self-reliance, and preserving traditional ecology in the Himalayas. It is our commitment that the harvesters' knowledge is met with dignity, fair economic participation, careful record-keeping, and publication only with permission.`,
    missionStatement: `We do not support the women of BURANSH. We are accountable to them. That is a different relationship entirely.`,
    initiativeText:   `BURANSH is proud to be a "Powered by Project Aatmanirbhar" initiative.`,
    initiativeUrl:    `https://projectaatmanirbhar.org/`,
    principles: [
      {
        title: 'Permission before publication',
        body:  'Stories, identities, and imagery stay private until they are cleared for public release.',
      },
      {
        title: 'Records before claims',
        body:  'We would rather keep numbers private than publish impact metrics that cannot be defended.',
      },
      {
        title: 'Seasonal work at source',
        body:  'The work remains tied to the bloom window, the hills, and the people closest to the harvest.',
      },
      {
        title: 'Private access over spectacle',
        body:  'The experience stays small-group and enquiry-led instead of being staged as public tourism.',
      },
    ],
    impact: [
      { num: null as null | number, label: 'Women employed', suffix: '+' },
      { num: null as null | number, label: 'Villages covered', suffix: '' },
      { num: null as null | number, label: 'kg harvested per season', suffix: 'kg' },
      { num: null as null | number, label: 'Income increase', suffix: '%' },
    ],
  },

  documentary: {
    url:      'https://youtu.be/Bc9ho9lT9GY?si=FPKEQaItdUT_UGnM',
    title:    null as null | string,
    director: null as null | string,
    runtime:  null as null | string,
    synopsis: 'The BURANSH documentary is now available to watch. It opens a window into the harvest landscape, the making, and the world around the elixir.',
    body:     'Watch the film on YouTube. Additional credits and archive details can be expanded here later without blocking the public screening link.',
  },

  // Elixir page
  whatItIs: {
    sectionLabel: 'THE CONCENTRATE',
    headline:     'This is not a juice. This is an elixir.',
    body:         `Rhododendron arboreum flowers are cold-pressed within six hours of harvest at altitude. The resulting concentrate is made at source, not reconstructed elsewhere. BURANSH is produced where the flower grows because that setting is part of the final character of the bottle.`,
    body2:        `One 750ml bottle contains the cold-pressed concentrate of hand-selected Rhododendron blooms. Dilute 1:8 with cold water, warm water, or sparkling water. Every sip is an altitude you did not have to climb to reach.`,
    notList:      ['No refined sugar', 'No artificial additives', 'No preservatives', 'No colour or flavour'],
    specs: [
      { label: 'Format',     value: 'Floral concentrate' },
      { label: 'Volume',     value: '750ml' },
      { label: 'Process',    value: 'Cold-pressed at source' },
      { label: 'Harvest',    value: 'Single annual harvest, March-May' },
      { label: 'Altitude',   value: '2,400-2,600m, Uttarakhand' },
      { label: 'Dilution',   value: '1:8 ratio (or to taste)' },
      { label: 'Additives',  value: 'None. Zero.' },
    ],
    whyItMatters: {
      headline: 'Why altitude matters.',
      body:     `At 2,500 metres, climate, timing, and handling shape the flower's aroma, colour, and character. What you taste is the result of place and process, not a formula that can be copied anywhere.`,
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
          'No refined sugar - no caramel colour',
          'No phosphoric acid - no artificial flavour',
          'Real single botanical origin',
          'A calmer table alternative to ordinary soft drinks',
        ],
      },
      {
        versus: 'vs Packaged Juice',
        points: [
          'Not from concentrate - no preservatives',
          'No added synthetic vitamins',
          'Single ingredient - one flower, nothing else',
          'Processed at source, not in a factory',
        ],
      },
      {
        versus: 'vs Energy Drinks',
        points: [
          'No taurine or energy-drink-style formula',
          'No artificial stimulant profile',
          'A composed alternative to loud functional drinks',
          'Taste-led, not synthetic-led',
        ],
      },
      {
        versus: 'vs Alcohol',
        points: [
          'The social drink without the morning after',
          'Non-alcoholic and table-ready',
          'Premium enough for the table - zero compromise',
          'The signature drink that everyone can hold',
        ],
      },
    ],
  },

  occasions: {
    sectionLabel: 'FOR EVERY PERSON - EVERY MOMENT',
    headline:     'One elixir. Every occasion.',
    sub:          'BURANSH is not a niche botanical. It is a premium beverage for people who refuse ordinary refreshment.',
    tiles: [
      {
        name: 'Urban Professionals',
        body: 'The desk ritual. The meeting room. The board presentation. A beverage that communicates taste, discernment, and clarity without the need for explanation.',
        tag:  'WORKPLACE - MEETINGS - DAILY RITUAL',
      },
      {
        name: 'Children & Families',
        body: 'A refined non-alcoholic pour for the family table, school lunch, and after-practice glass. BURANSH is what considered refreshment looks like when taste is not treated as an afterthought.',
        tag:  'CHILDREN - FAMILIES - SCHOOL',
      },
      {
        name: 'The Elderly',
        body: 'A slower daily ritual for those who prefer their table to feel deliberate. Floral, restrained, and made without the noise of ordinary packaged drinks.',
        tag:  'SLOW TABLE - DAILY RITUAL',
      },
      {
        name: 'Weddings & Celebrations',
        body: 'The signature non-alcoholic welcome drink that no guest will forget. Customisable bottles for wedding gifting. A statement that this occasion was thought about, not just catered.',
        tag:  'WEDDINGS - EVENTS - CELEBRATIONS',
      },
      {
        name: 'Yoga, Gym & Sport',
        body: 'A clean, non-alcoholic serve for studios, post-practice tables, and deliberate routines. Floral, restrained, and easy to pour into an active day.',
        tag:  'YOGA - GYM - SPORT - RECOVERY',
      },
      {
        name: 'Foreign Guests & Export',
        body: 'A luxury Indian product that travels. Uttarakhand origin, premium enough for international hotel lobbies, diplomatic gifting, and export-led hospitality.',
        tag:  'INTERNATIONAL - EXPORT - GIFTING',
      },
      {
        name: 'Parties & Social Occasions',
        body: 'The cocktail base that elevates a home bar. The mocktail that outclasses everything else on the table. Mixed with gin, it is something else entirely. Mixed with sparkling water, it holds its own.',
        tag:  'PARTIES - SOCIAL - ENTERTAINING',
      },
      {
        name: 'Corporate & Institutional',
        body: 'Bulk placement for hotels, airlines, studios, and corporate campuses. The beverage that signals taste, restraint, and thoughtful hospitality.',
        tag:  'CORPORATE - HOTELS - BULK',
      },
      {
        name: 'Schools & Colleges',
        body: 'A more considered non-alcoholic option for campus hospitality and supervised service settings. Sugar-free option available. Each bottle also opens a story about Himalayan ecology and Pahadi culture.',
        tag:  'SCHOOLS - COLLEGES - YOUTH',
      },
    ],
  },

  recipes: [
    {
      num:         '01',
      name:        'The Classic',
      subtitle:    'Morning - Daily ritual',
      ratio:       '1 part BURANSH - 8 parts chilled water',
      additions:   'Fresh mint leaves',
      context:     'Morning ritual. The purest expression.',
      temp:        'Cold',
      ingredients: ['1 part BURANSH concentrate', '8 parts chilled spring water', 'Fresh mint sprig', 'Wedge of lime (optional)'],
      method:      'Pour concentrate over ice. Add chilled water. Stir gently. Add mint. Serve immediately.',
      powerLine:   'The ritual that begins the day correctly. Every morning, without exception.',
      benefits:    ['Floral concentration', 'Clean finish', 'No caffeine'],
    },
    {
      num:         '02',
      name:        'The Altitude Fizz',
      subtitle:    'Parties - Social - All occasions',
      ratio:       '1 part BURANSH - 7 parts sparkling water',
      additions:   'Fresh lime wheel - Slice of ginger',
      context:     'Party version. The conversation starter.',
      temp:        'Cold',
      ingredients: ['1 part BURANSH concentrate', '7 parts sparkling water', 'Slice of fresh ginger', 'Wedge of lime', 'Ice - large cube'],
      method:      'Pour concentrate into a chilled glass over one large ice cube. Add sparkling water slowly. Express the lime. Drop in the ginger.',
      powerLine:   'The drink that ends conversations about what is in your glass - and starts a different conversation entirely.',
      benefits:    ['Natural carbonation feel without artificial fizz', 'Ginger sharpens the floral profile', 'A party drink with restraint'],
    },
    {
      num:         '03',
      name:        'The Warm Ritual',
      subtitle:    'Evening - Warm - Slow ritual',
      ratio:       '1 part BURANSH - 6 parts warm water',
      additions:   'Fresh ginger - Raw honey - Cinnamon',
      context:     'Winter. Evening. The slow cup.',
      temp:        'Hot',
      ingredients: ['1 part BURANSH concentrate', '6 parts warm water (not boiling)', 'Thin slice of fresh ginger', '1 tsp raw honey (optional)', 'Pinch of cinnamon'],
      method:      'Warm the water to about 70C - below boiling. Add concentrate. Stir in ginger. Honey if desired. Cinnamon on top.',
      powerLine:   'The evening version is quiet, warm, and deliberate - a cup for slower rooms and colder weather.',
      benefits:    ['Warm floral profile', 'Ginger + Rhododendron depth', 'An evening ritual with restraint'],
    },
    {
      num:         '04',
      name:        'The Himalayan Mule',
      subtitle:    'Adult occasions - Parties - Signature cocktail',
      ratio:       '1 part BURANSH - 4 parts sparkling or tonic',
      additions:   'Gin or vodka optional - Ginger - Rosemary',
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
      name:  'BURANSH Sugar-Based',
      body:  'The natural sweetness of the Rhododendron arboreum flower, present in the concentrate as the harvest delivers it. Floral, rounded, and closest to the original expression.',
      tag:   'Original expression - floral sweetness - unrefined',
    },
    sugarFree: {
      name:  'BURANSH Sugar-Free',
      body:  'An additional cold-filtration step is designed for those who prefer a drier expression while preserving the flower-led character of the concentrate. Zero added sweeteners.',
      tag:   'Drier expression - Flower-led profile - Zero added sweeteners',
    },
    footnote: 'Both variants are identical in origin, process, and botanical integrity. The only difference is the final filtration step.',
  },

  gifting: [
    {
      id:        'gift-single',
      name:      'The Single',
      contents:  ['1 x 750ml BURANSH bottle', 'BURANSH branded gift box', 'Handwritten origin card (who harvested this bottle)', 'The BURANSH story card'],
      occasion:  'Wedding favour - Corporate desk gift - Birthday - Thank you',
      price:     null as null | number,
      badge:     null as null | string,
      highlight: false,
    },
    {
      id:        'gift-pair',
      name:      'The Pair',
      contents:  ['2 x 750ml BURANSH bottles (standard + sugar-free)', 'Premium outer carton with silk ribbon', 'Origin story booklet (full narrative, 12 pages)', 'Two harvest certificates (one per bottle)'],
      occasion:  'Diwali - Executive gifting - Anniversaries - International clients',
      price:     null as null | number,
      badge:     'Most gifted',
      highlight: true,
    },
    {
      id:        'gift-collection',
      name:      'The Collection',
      contents:  ['4 x 750ml BURANSH bottles', 'Handcrafted pine wooden crate with lotus burn mark', 'Natural jute padding', 'Personalised harvest certificate', 'Women of BURANSH portrait card', 'Full-length BURANSH narrative booklet'],
      occasion:  'Ultra-premium gifting - Diplomatic gifts - Export clients - Luxury hotels',
      price:     null as null | number,
      badge:     'The statement',
      highlight: false,
    },
  ],

  // Staycation
  staycation: {
    hero: {
      preLabel: 'UTTARAKHAND - THE EXPERIENCE',
      headline: 'Some luxury must be witnessed to be believed.',
      sub:      'Under the patronage of Aatmanirbhar Society, the BURANSH stay and experience invites you into the story of the Himalayan Rhododendron in the world\'s first Herbal Valley.',
      subCta:   'What to expect',
    },
    expectation: {
      sectionLabel: 'WHAT THIS IS',
      headline:     'This is not a tour. This is an initiation.',
      body:         `The BURANSH staycation is built around the harvest window itself under the patronage of Aatmanirbhar Society. You come for the grove, the process, and the people closest to the Himalayan Rhododendron story.`,
      body2:        `Nothing here is staged at tourist distance. The days are shaped by bloom, weather, and the real working rhythm on the hill.`,
    },
    journey: [
      {
        num:      '01',
        stage:    'Arrival',
        headline: 'Taste first. Understand second.',
        body:     `A BURANSH bottle awaits in your room. You taste the flower before you see the grove that made it.`,
        detail:   'Arrival serving, local orientation, and a quiet first evening at the homestay.',
      },
      {
        num:      '02',
        stage:    'The Harvest Walk',
        headline: 'No script. No tour guide voice. Just the forest and the women who know it.',
        body:     `You walk the live harvest with the women on the hill. No performance. No scripted stop-points.`,
        detail:   'Learn bloom timing, selection, baskets, terrain, and why the work can only happen in season.',
      },
      {
        num:      '03',
        stage:    'The Making',
        headline: 'Witness the process. Participate if you choose.',
        body:     `You watch the cold press at altitude and join if you wish. The bottle you help make is the one you take home.`,
        detail:   'Harvest to press within hours, then fill, seal, and label at source.',
      },
      {
        num:      '04',
        stage:    'Your Legacy',
        headline: 'You leave something behind.',
        body:     `Before you leave, you plant a Rhododendron sapling for a later season.`,
        detail:   'A small record of your stay becomes part of the wider BURANSH landscape.',
      },
    ],
    wilderness: [
      {
        icon:  'leaf',
        name:  'Being in Nature',
        body:  'Slow forest walks that teach you how to read the grove, its terrain, and its pace.',
      },
      {
        icon:  'plant',
        name:  'High-Altitude Plant Walk',
        body:  'A closer look at the plants, trees, and altitude ecology that sit around the Rhododendron harvest.',
      },
      {
        icon:  'bottle',
        name:  'Make Your Own Elixir',
        body:  'Harvest, cold-press, bottle, and label a batch with the team at source.',
      },
      {
        icon:  'woman',
        name:  'Being with the Women',
        body:  'Cook, work, and talk in real working time, not staged tourism time.',
      },
      {
        icon:  'book',
        name:  'Learning & Education',
        body:  'A focused session on Himalayan botany, seasonality, and what careful sourcing actually requires.',
      },
      {
        icon:  'sunrise',
        name:  'Experience the Wilderness',
        body:  'Ridge mornings, silence, and high-altitude light at the right hour.',
      },
      {
        icon:  'craft',
        name:  'Pahadi Craft',
        body:  'Cane basket work, textile detail, and material traditions tied to the harvest.',
      },
      {
        icon:  'memory',
        name:  'Taking Back a Memory',
        body:  'Your bottle, a pressed bloom, and a record of the day that stays with you.',
      },
      {
        icon:  'tree',
        name:  'Leaving a Legacy',
        body:  'Plant a sapling that will flower long after your stay.',
      },
    ],
    included: [
      'Accommodation arranged after enquiry',
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
    body:         `Omakase: I leave it to you. In Japan, this is an act of complete trust extended to a chef. The BURANSH Omakase extends the same trust to the story of an elixir - four preparations, four chapters of the origin narrative, in a setting of your choosing.`,
    body2:        `The BURANSH Omakase is hosted by the founder. Maximum eight guests. Each preparation is accompanied by the specific chapter of the BURANSH story that it embodies: the altitude, the harvest, the women, the making. By the final pour, you will have not just tasted BURANSH - you will understand it.`,
    sub:          'By arrangement only.',
    includes: [
      'Four preparations of BURANSH (Classic, Warm, Fizz, seasonal fourth)',
      'Hosted by the BURANSH founder',
      'Full narrative accompaniment - the story behind each pour',
      'Paired botanical small bites from the Pahadi culinary tradition',
      'One 750ml bottle of BURANSH to take home',
      'The BURANSH narrative booklet',
    ],
    guestRange: '5-8 guests',
    duration:   'Approximately 2.5 hours',
  },

  // Team Members
  team: {
    sectionLabel: 'LEADERSHIP',
    headline: 'The Team Behind the Elixir',
    sub: 'Guided by experience, driven by purpose.',
    members: [
      {
        name: 'Himalaya Chaturvedi',
        role: 'Chief Executive Officer (CEO)',
        responsibilities: 'Overall Execution, Business Operations, Team Leadership & Results',
      },
      {
        name: 'Ranjeet Chaturvedi',
        role: 'Director - Growth & Strategic Alliances',
        responsibilities: 'Growth strategy, Strategic partnerships, Channel expansion, Key alliances',
      },
      {
        name: 'Nilesh Goswami',
        role: 'Director - Strategy & Performance',
        responsibilities: 'Business strategy, Performance management, Systems, Processes & Transformation',
      },
      {
        name: 'Bhanupriya',
        role: 'Director - Finance, Compliance & Administration',
        responsibilities: 'Finance, Accounts, Compliance, Legal & Administration',
      },
    ],
  },

  fssaiNumber: null as null | string,
} as const;


