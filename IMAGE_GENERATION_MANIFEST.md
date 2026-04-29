# BURANSH Image Generation Manifest

Last updated: 2026-04-25

## Current Status

- The live app now points to optimized `.webp` stills in `public/images`.
- The older `.png` and `.jpg` files remain in the repo only as fallback/source reference.
- `npm run lint` and `npm run build` both passed on 2026-04-25 after the image-path swap.
- In this workspace, scripted image generation is currently blocked because `OPENAI_API_KEY` is not set. Manual generation in ChatGPT can still proceed immediately.

## Model And Workflow

Use ChatGPT 5.5 image generation thinking model for every still listed below.

Execution sequence:

1. Generate 4 options for each asset.
2. Shortlist the best 1-2 options.
3. Run one refinement pass only on the shortlisted option.
4. Export a master at 2048px to 3072px on the long edge.
5. Crop the approved master to the target ratio.
6. Export the production asset as WebP and overwrite the matching target file in `public/images`.
7. Re-run `npm run lint` and `npm run build`.
8. Check desktop and mobile crops on the pages listed in the file map.

## Universal Prompt Rules

Every image should follow this shared direction:

- Premium editorial photography, not glossy CGI or stock-ad style product rendering.
- Warm ivory, crimson, gold, deep brown, bark, linen, and Himalayan dusk tones.
- Natural window light or soft controlled studio light.
- Tactile materials only: glass, wood, linen, cane, stone, petals, paper.
- Restrained luxury with shallow depth of field and subtle grain.
- No neon colors, generic wellness tropes, fake liquid splash effects, or loud props.
- Do not rely on the model for perfect label text. Keep label detail minimal, distant, or easy to composite later.
- Do not generate fake certificates, fake seals, fake documentary stills, or fake impact visuals.
- Do not publish AI-generated identifiable women or harvest participants as if they are real documented members of Project Aatmanirbhar.
- For any human presence, keep identity anonymous: hands, silhouettes, backs, distance, or soft focus only.
- For flower imagery, stay botanically close to Rhododendron arboreum: clustered crimson bloom, natural petal structure, mountain-harvest context.

## File Map

| Output File | Route / Section Usage | Target Ratio | Visual Job |
| --- | --- | --- | --- |
| `public/images/bottle-editorial.webp` | Home hero, Elixir hero, Elixir order section | 4:5 | Primary hero bottle portrait |
| `public/images/bottle-pour.webp` | Home product intro, Home share recipe, Elixir gallery | 3:4 | Bottle pouring serve shot |
| `public/images/arrival-still-life.webp` | Home landscape banner, Staycation hero, Elixir gallery | 16:9 | Place-led arrival still life |
| `public/images/gifting-collection.webp` | Elixir gifting section, Elixir gallery | 3:2 | Multi-bottle gifting composition |
| `public/images/buransh-flower.webp` | Elixir gallery | 4:5 | Botanical ingredient macro |
| `public/images/buransh-jam.webp` | Home private releases card | 4:5 | Jam still life |
| `public/images/buransh-tea-petals.webp` | Home private releases card | 4:5 | Tea / dried petal still life |
| `public/images/village-women-plucking.webp` | Staycation journey, harvest video poster, documentary poster fallback | 16:9 | Anonymous harvest atmosphere |
| `public/images/buransh-flower-plucked.webp` | Staycation includes | 4:5 | Hands-and-bloom detail |
| `public/images/flower-other-pictures.webp` | Home Project Aatmanirbhar teaser | 4:5 | Botanical / harvest world support image |

## Homepage UX Refresh Prompt Pack

Use these prompts for the sections called out in the April 25 homepage review. Keep the production filenames stable unless a new filename is explicitly listed.

### A. Hero replacement, overwrite `public/images/bottle-editorial.webp`

```text
Premium editorial product portrait of a BURANSH-style deep ruby rhododendron concentrate bottle, upright on hand-cut dark stone, warm ivory label area with minimal non-legible botanical mark, brushed gold cap, controlled side light from the left, deep brown black background with subtle grain, calm negative space, luxury Indian hospitality mood, realistic photography, no perfect readable label text, no extra bottles, no fake splash, no bar props, no neon, no CGI gloss.
```

### B. Pour replacement, overwrite `public/images/bottle-pour.webp`

```text
Editorial close photograph of ruby rhododendron concentrate being poured from a premium bottle into a small clear tasting glass on linen and dark wood, stream of liquid crisp and believable, bottle partially cropped, warm window light, refined home-hosting atmosphere, tactile glass and linen detail, no cocktail clutter, no fake splash, no legible label dependency, no synthetic shine.
```

### C. Value-pillar images, overwrite existing support assets

Use this set for the four image-backed "Why BURANSH" cards:

```text
1. Research and quality: macro editorial photograph of Rhododendron arboreum crimson bloom cluster with petal texture, mountain daylight, botanical realism, shallow depth of field, no fantasy flower colors, no people.
2. Origin and altitude: wide quiet Uttarakhand ridge or mountain-veranda still with a BURANSH-style bottle or glass kept secondary, dusk light, center-safe composition, no travel poster exaggeration, no hard label text.
3. Women and culture: anonymous harvest atmosphere from behind or at hand level, baskets and rhododendron blooms in the frame, no clear faces, documentary-inspired but non-identifiable, natural morning light.
4. Homestay and education: close still of hands, notebook, glass, bottle, and rhododendron flowers on a homestay table, warm practical hospitality mood, no fake certificates, no staged classroom scene.
```

### D. Recipe submission image, overwrite `public/images/flower-other-pictures.webp`

```text
Vertical editorial still life for a private serving-note submission: rhododendron blooms, a handwritten recipe card with illegible marks, tasting glass with deep ruby concentrate, linen, wood, and a small spoon, warm window light, intimate hosting mood, realistic photography, no readable text, no cluttered cocktail setup, no hands or faces.
```

### E. Harvest video poster / fallback, overwrite `public/images/village-women-plucking.webp`

```text
Wide cinematic atmospheric frame of Uttarakhand rhododendron harvest terrain, anonymous figures only from distance or behind, woven baskets, crimson blooms, early mountain light, believable documentary-adjacent editorial realism, no identifiable faces, no posed smiles, no fake documentary caption energy, strong readability under dark overlay.
```

### F. Origin/process image set, overwrite current support assets

```text
Three coherent editorial process stills in the same lighting family: fresh rhododendron blooms at altitude, anonymous hands holding harvested blooms, and a calm cold-press or bottle-pour preparation moment on wood and linen. Warm ivory, crimson, bark brown, and muted gold palette. Realistic photography, no fake machinery claims, no clear faces, no readable labels.
```

### G. Landscape banner replacement, overwrite `public/images/arrival-still-life.webp`

```text
Wide 16:9 Uttarakhand origin banner with a premium BURANSH-style bottle and small glass in the foreground, mountain ridge and rhododendron terrain softly implied behind, dusk or early morning light, strong left-side copy-safe negative space, refined place-led mood, no generic resort advertising, no fake dramatic peaks, no readable label dependency.
```

### H. Private releases, overwrite `public/images/buransh-jam.webp` and `public/images/buransh-tea-petals.webp`

```text
Jam: premium editorial preserve jar with deep crimson rhododendron preserve texture visible, tasting spoon, linen, dark wood, minimal petals, warm natural light, visually distinct from the bottle product, no breakfast clutter, no readable fake label.

Tea: premium dried rhododendron petal infusion still life with loose dried crimson petals, ceramic cup with amber-red infusion, small brass or ceramic vessel, ivory textile, meditative morning light, no generic wellness props, no mixed herbs, no cafe clutter.
```

## Asset Prompts

## Fresh Homepage Asset Set - No Legacy Reuse

This is the new generation set to use going forward. Do not reuse the current older homepage images for these placements. Generate these as new files first, then update the app to point to these filenames after approval.

| New Output File | Intended Usage | Target Ratio |
| --- | --- | --- |
| `public/images/home-hero-bottle-v2.webp` | Homepage hero bottle | 4:5 |
| `public/images/home-pour-serve-v2.webp` | Product intro pour section | 3:4 |
| `public/images/home-value-research-v2.webp` | Why BURANSH card 1 | 4:5 |
| `public/images/home-value-origin-v2.webp` | Why BURANSH card 2 | 4:5 |
| `public/images/home-value-women-v2.webp` | Why BURANSH card 3 | 4:5 |
| `public/images/home-value-homestay-v2.webp` | Why BURANSH card 4 | 4:5 |
| `public/images/home-serving-summer-v2.webp` | Serving ritual card: Summer Pour | 4:5 |
| `public/images/home-serving-sparkle-v2.webp` | Serving ritual card: House Sparkle | 4:5 |
| `public/images/home-serving-evening-v2.webp` | Serving ritual card: Evening Cup | 4:5 |
| `public/images/home-recipe-submission-v2.webp` | Recipe submission / private serving notes | 4:5 |
| `public/images/home-harvest-film-poster-v2.webp` | Harvest video poster / fallback | 16:9 |
| `public/images/home-process-bloom-v2.webp` | Origin/process image 1 | 4:5 |
| `public/images/home-process-hands-v2.webp` | Origin/process image 2 | 4:5 |
| `public/images/home-process-press-v2.webp` | Origin/process image 3 | 4:5 |
| `public/images/home-origin-landscape-v2.webp` | 2,500m landscape banner | 16:9 |
| `public/images/home-jam-release-v2.webp` | BURANSH Jam private release | 4:5 |
| `public/images/home-tea-release-v2.webp` | BURANSH Tea private release | 4:5 |
| `public/images/home-gifting-collection-v2.webp` | Gifting / packaging support | 3:2 |

### 1. `home-hero-bottle-v2.webp`

```text
Premium editorial product portrait of a single BURANSH-style rhododendron floral concentrate bottle, deep ruby glass, brushed gold cap, quiet ivory label area with a simple non-legible crimson flower mark, standing upright on a hand-cut dark stone plinth, warm controlled side light, deep brown-black background, subtle film grain, refined Himalayan hospitality mood, strong bottle silhouette, calm negative space for hero layout, realistic photography, no older label design, no readable text dependency, no extra bottles, no splash effects, no bar props, no CGI gloss.
```

### 2. `home-pour-serve-v2.webp`

```text
Premium editorial close photograph of deep ruby rhododendron concentrate being poured from a partially cropped bottle into a small clear tasting glass on dark wood and ivory linen, liquid stream crisp and believable, warm window light, restrained home-hosting atmosphere, tactile glass reflections, shallow depth of field, no old bottle composition, no stone cup, no crowded cocktail props, no fake splash arc, no readable label dependency, no synthetic shine.
```

### 3. `home-value-research-v2.webp`

```text
Botanical macro editorial photograph of Rhododendron arboreum crimson bloom clusters with accurate petal structure, natural branch and leaf detail, soft high-altitude daylight, shallow depth of field, premium restrained color palette, realistic field botany, no decorative fake petals, no fantasy saturation, no people, no product bottle.
```

### 4. `home-value-origin-v2.webp`

```text
Vertical editorial image of a quiet Uttarakhand mountain ridge with rhododendron terrain and misted altitude atmosphere, early morning light, earthy bark brown and muted crimson palette, subtle path or veranda hint, no bottle hero, no resort advertising, no exaggerated fantasy peaks, no people, no text.
```

### 5. `home-value-women-v2.webp`

```text
Anonymous harvest atmosphere in Uttarakhand hills, photographed from behind or hand level, woven basket with crimson rhododendron blooms, natural wool or cotton textures, early mountain light, documentary-inspired but non-identifiable, no clear faces, no posed portrait, no fake documentary caption feeling, no old image composition.
```

### 6. `home-value-homestay-v2.webp`

```text
Editorial homestay table scene with notebook, tasting glass, small BURANSH-style bottle kept secondary, rhododendron flowers, linen, wood, and practical hosting details, warm indoor-window light, refined educational hospitality mood, no fake certificates, no staged classroom, no readable writing, no faces.
```

### 7. `home-serving-summer-v2.webp`

```text
Bright refined summer serve of ruby rhododendron concentrate diluted over clear ice in a tall glass, citrus peel and one mint sprig used sparingly, ivory linen, mountain daylight, elegant restraint, premium home ritual mood, no cocktail bar clutter, no splash effects, no neon garnish colors, no old pour setup.
```

### 8. `home-serving-sparkle-v2.webp`

```text
Premium sparkling rhododendron serve in a slender glass, ruby concentrate meeting clear sparkling water with soft realistic bubbles, ivory linen, small rhododendron petal accent, warm natural light, quiet celebration mood, no champagne cliches, no party props, no crowded table, no readable label.
```

### 9. `home-serving-evening-v2.webp`

```text
Warm evening rhododendron preparation in a ceramic cup, deep ruby liquid, ginger slice and gentle spice cues, dark wood, low amber light, calm winter hospitality atmosphere, realistic faint steam, tactile ceramic texture, no medicinal styling, no wellness cliches, no clutter.
```

### 10. `home-recipe-submission-v2.webp`

```text
Vertical editorial still life for private serving-note submission: rhododendron blooms, tasting glass with deep ruby concentrate, handwritten recipe card with illegible marks, small spoon, linen, dark wood, warm window light, intimate hosting mood, premium realism, no readable text, no human faces, no old bottle-pour image, no cocktail clutter.
```

### 11. `home-harvest-film-poster-v2.webp`

```text
Wide cinematic harvest film poster frame in Uttarakhand rhododendron terrain, anonymous harvesters only from distance or behind, woven baskets, crimson blooms, early mountain light, atmospheric movement, believable editorial realism, strong readability under dark overlay, no identifiable faces, no staged smiles, no fake documentary proof, no older asset composition.
```

### 12. `home-process-bloom-v2.webp`

```text
Editorial process still of fresh Rhododendron arboreum blooms just after harvest, crimson petals and green leaves on undyed linen and wood, soft outdoor light, tactile botanical realism, premium restrained mood, no product bottle, no people, no fake text.
```

### 13. `home-process-hands-v2.webp`

```text
Close editorial photograph of anonymous hands gently sorting freshly harvested rhododendron blooms into a woven basket, hands natural and unglamorous, no face, soft daylight, tactile petals and basket texture, realistic harvest detail, no jewelry focus, no staged studio look.
```

### 14. `home-process-press-v2.webp`

```text
Editorial process still suggesting careful cold pressing without making industrial claims: rhododendron petals, glass vessel, filtered ruby concentrate, linen, wood, and a simple hand-preparation setup, realistic photography, no lab equipment, no fake machinery, no certification text, no face.
```

### 15. `home-origin-landscape-v2.webp`

```text
Wide 16:9 Uttarakhand origin banner with rhododendron terrain, distant mountain ridge, and a small refined hospitality setup in the foreground with bottle and glass kept secondary, dusk or early morning light, left-side copy-safe negative space, place-led premium mood, no generic resort advertising, no fake dramatic peaks, no readable label dependency.
```

### 16. `home-jam-release-v2.webp`

```text
Premium editorial still life of a rhododendron preserve jar with deep crimson preserve texture visible, tasting spoon, ivory linen, dark wood, minimal fresh flower context, warm natural light, visually distinct from beverage bottle imagery, no breakfast-table clutter, no rustic kitsch, no readable fake label.
```

### 17. `home-tea-release-v2.webp`

```text
Premium dried rhododendron petal infusion still life, loose dried crimson petals, ceramic cup with amber-red infusion, small brass or ceramic vessel, ivory textile, meditative morning light, refined minimal composition, no generic wellness props, no mixed herbs or spices, no cafe clutter, no people.
```

### 18. `home-gifting-collection-v2.webp`

```text
Editorial wide still life of a refined BURANSH-style gifting arrangement, multiple deep ruby bottles, elegant wooden crate, folded booklet with non-legible marks, harvest-inspired paper, linen, petals, restrained premium packaging details, warm ivory and crimson palette, soft studio light, realistic product photography, no festive clutter, no fake certificate text, no bright ribbon cliches.
```

### 1. `bottle-editorial.webp`

- Use on: home hero, elixir hero, order section.
- Ratio: 4:5.
- Prompt:

```text
Luxury editorial product photograph of a single BURANSH-style deep crimson floral concentrate bottle standing upright on a dark stone and wood set, warm controlled side light, rich ink-black background, subtle ivory and gold accents, restrained Himalayan dusk color palette, tactile glass reflections, premium hospitality mood, shallow depth of field, photographic realism, centered composition with negative space, no busy props, no fake splash effects, no legible small label text, no extra bottles, no hands, no neon colors, no stock-photo look.
```

- Refine toward:
  - Taller, calmer framing with stronger bottle silhouette.
  - Cleaner reflections and more premium glass texture.
  - Less text detail on the label, more shape and mood.
- Accept when:
  - The bottle reads clearly at hero size on both desktop and mobile.
  - The silhouette feels premium without requiring label text to sell the image.

### 2. `bottle-pour.webp`

- Use on: product intro, share recipe, elixir gallery.
- Ratio: 3:4.
- Prompt:

```text
Premium editorial still photograph of a floral crimson concentrate bottle pouring ruby-red liquid into an elegant glass on a wood-and-linen tabletop, soft natural light, rich but realistic liquid color, refined hospitality styling, shallow depth of field, tactile glass highlights, warm ivory and deep brown palette, quiet luxury mood, realistic photography, no fake splash arc, no aggressive motion blur, no legible label text, no crowded background, no generic cocktail bar cliches.
```

- Refine toward:
  - More attention on the stream of liquid and glass rim.
  - Cleaner tabletop styling with fewer props.
  - A believable serve, not a commercial beverage ad.
- Accept when:
  - The pour reads instantly in a medium crop.
  - The image supports both product and recipe storytelling.

### 3. `arrival-still-life.webp`

- Use on: home landscape banner, staycation hero, elixir gallery.
- Ratio: 16:9.
- Prompt:

```text
Wide cinematic editorial still life of a premium rhododendron concentrate bottle on a wooden tray with linen and one glass, set inside a mountain stay or veranda atmosphere in Uttarakhand at dusk, distant Himalayan ridge implied in the background, warm low sunlight, refined hospitality styling, calm luxury mood, realistic photography, subtle grain, no exaggerated mountains, no fake travel-poster drama, no people, no hard label text dependency, strong center-safe composition for responsive crops.
```

- Refine toward:
  - More place and atmosphere, less plain tabletop product shot.
  - Softer background depth so the bottle and tray stay readable.
  - Center-safe framing for both wide banner and tighter crops.
- Accept when:
  - It feels like a real arrival moment, not generic resort advertising.
  - The center composition survives mobile crop pressure.

### 4. `gifting-collection.webp`

- Use on: gifting feature and elixir gallery.
- Ratio: 3:2.
- Prompt:

```text
Editorial wide still life of a refined gifting arrangement with multiple BURANSH-style bottles, elegant wooden crate, folded booklet, harvest-inspired paper elements, linen, petals, and restrained premium packaging details, warm ivory and crimson palette, soft studio light, realistic product photography, centered composition, quiet luxury, no festive clutter, no fake certificate text, no unreadable dense packaging copy, no bright ribbon cliches.
```

- Refine toward:
  - A cleaner packaging rhythm with distinct bottle spacing.
  - Fewer props and more premium negative space.
  - Strong central grouping so the image works in both wide and contained layouts.
- Accept when:
  - The composition reads as gifting immediately.
  - Nothing in the image creates a fake certification or factual claim risk.

### 5. `buransh-flower.webp`

- Use on: elixir gallery.
- Ratio: 4:5.
- Prompt:

```text
Botanically accurate macro editorial photograph of Rhododendron arboreum bloom clusters in the Himalayan foothills, rich crimson petals, natural branch structure, soft mountain light, shallow depth of field, tactile petal texture, realistic botanical photography, premium and quiet mood, no oversaturated fantasy colors, no mixed species confusion, no decorative fake petals, no people.
```

- Refine toward:
  - More believable botany and branch detail.
  - Better petal texture and natural light falloff.
  - Cleaner separation between bloom and background.
- Accept when:
  - It looks like real field botany, not a decorative flower wallpaper.
  - Petal form and color feel plausible for the ingredient story.

### 6. `buransh-jam.webp`

- Use on: private releases card.
- Ratio: 4:5.
- Prompt:

```text
Luxury editorial still life of a premium rhododendron preserve jar on wood and linen with a small tasting spoon and subtle floral context, warm natural light, deep crimson preserve tone, calm handcrafted mood, realistic food photography, premium restrained styling, no breakfast-table clutter, no fake rustic kitsch, no readable fake label copy, visually distinct from the beverage bottle images.
```

- Refine toward:
  - More preserve texture and jar clarity.
  - A quieter composition with fewer serving props.
  - A stronger distinction from the main bottle product language.
- Accept when:
  - The image reads clearly as preserve, not syrup or drink.
  - The still feels premium enough to sit beside the core product imagery.

### 7. `buransh-tea-petals.webp`

- Use on: private releases card.
- Ratio: 4:5.
- Prompt:

```text
Editorial still life of dried rhododendron petals arranged for a premium herbal tea service, ceramic or brass vessel, warm ivory textile, gentle morning light, meditative atmosphere, realistic photography, subtle crimson and amber palette, refined minimal composition, no cafe clutter, no generic wellness styling, no mixed herbs or spices, no people.
```

- Refine toward:
  - Cleaner vessel selection and calmer tabletop.
  - More elegant dried petal detail.
  - Less wellness-product styling, more private-release luxury.
- Accept when:
  - The image reads as tea or dried petal infusion immediately.
  - It feels quiet and distinct from the jam card beside it.

### 8. `village-women-plucking.webp`

- Use on: staycation journey, video poster, documentary poster fallback.
- Ratio: 16:9.
- Prompt:

```text
Wide atmospheric harvest scene in the Uttarakhand hills with anonymous women or harvesters moving through rhododendron bloom terrain carrying baskets, photographed from distance or from behind, no clear facial identity, early morning mountain light, documentary-inspired but clearly atmospheric editorial realism, natural terrain, woven materials, crimson blooms, calm movement, no staged smiling portraits, no obvious AI fantasy, no implication of named real participants.
```

- Refine toward:
  - More landscape and atmosphere, less portrait emphasis.
  - More anonymity and less face visibility.
  - Stronger basket, grove, and hillside storytelling.
- Accept when:
  - It supports the staycation narrative without claiming documentary truth.
  - No individual appears identifiable enough to be mistaken for a real published profile.

### 9. `buransh-flower-plucked.webp`

- Use on: staycation includes.
- Ratio: 4:5.
- Prompt:

```text
Close editorial photograph of anonymous hands gently holding freshly plucked rhododendron blooms, soft outdoor daylight, natural skin tones, tactile petals and stems, realistic harvest detail, shallow depth of field, premium restrained mood, no face, no jewelry focus, no manicure glamour, no fake documentary caption energy, no cluttered background.
```

- Refine toward:
  - Tighter bloom texture and hand realism.
  - Cleaner background separation.
  - More tactile freshness in the petals.
- Accept when:
  - The image communicates harvest intimacy without showing identity.
  - The blooms remain the hero, not the person.

### 10. `flower-other-pictures.webp`

- Use on: Project Aatmanirbhar teaser.
- Ratio: 4:5.
- Prompt:

```text
Vertical editorial support image from the BURANSH world: rhododendron bloom clusters, woven basket texture, bark, linen, and subtle mountain-harvest atmosphere in one coherent photographic frame, premium realism, crimson and earthy palette, soft natural light, poetic but restrained, no clear faces, no fake documentary moment, no clutter, no collage gimmick, no text.
```

- Refine toward:
  - More coherent single-frame storytelling, not a montage.
  - Stronger floral focus with supporting material textures.
  - Enough depth and atmosphere to anchor the Project Aatmanirbhar teaser.
- Accept when:
  - It supports the project story without relying on an identifiable human portrait.
  - The frame feels intentional and premium at large vertical display size.

## Review Checklist

Approve a generated image only if all of the following are true:

- It fits the site's premium editorial world.
- It survives the crop used by the target component.
- It does not depend on perfect text rendering.
- It does not imply false certification, false documentary proof, or false identities.
- It does not introduce medical, wellness, or folk-remedy visual cliches.
- It still looks coherent beside the other approved BURANSH images.

Reject or regenerate if:

- Faces are too clear or look like specific real people.
- Labels contain unusable fake text front and center.
- The image looks synthetic, glossy, or over-stylized.
- Props introduce modern bar clutter, neon tones, or stock-photo energy.
- Flower shape or color looks botanically implausible.

## Production Replacement Rule

Keep the current filenames. Replace only the matching `.webp` targets already used by the app:

- `public/images/bottle-editorial.webp`
- `public/images/bottle-pour.webp`
- `public/images/arrival-still-life.webp`
- `public/images/gifting-collection.webp`
- `public/images/buransh-flower.webp`
- `public/images/buransh-jam.webp`
- `public/images/buransh-tea-petals.webp`
- `public/images/village-women-plucking.webp`
- `public/images/buransh-flower-plucked.webp`
- `public/images/flower-other-pictures.webp`

Do not replace the video file with AI-generated footage while presenting it as real documentary material. If the real montage cannot be cleared, replace it with clearly atmospheric motion built from approved generated stills and treat it as non-documentary brand media.
