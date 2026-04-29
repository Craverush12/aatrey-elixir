<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## BURANSH Project Rules

- Preserve the current luxury editorial design language.
- Do not invent prices, licence numbers, certifications, testimonials, named women profiles, impact numbers, documentary metadata, or staycation property details.
- Keep unapproved facts hidden or enquiry-led.
- Product purchase CTAs use configured payment destinations.
- Gifting, bulk, staycation, Omakase, serving notes, and private releases remain enquiry-led.
- Use a larger Node heap for verification if needed:
  - `$env:NODE_OPTIONS='--max-old-space-size=4096'; npm run lint`
  - `$env:NODE_OPTIONS='--max-old-space-size=4096'; npm run build`
