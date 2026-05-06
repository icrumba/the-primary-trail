# Website UI Kit — The Primary Trail

Pixel-faithful recreation of the live marketing site at https://the-primary-trail.vercel.app/, factored into modular React components.

## Files

| File | Purpose |
|---|---|
| `index.html` | Full-page demo. Mounts every component in source order. |
| `styles.css` | Page-level styles. Imports `../../colors_and_type.css` for the foundational tokens, then layers section + component styles. |
| `components.jsx` | All components. Each is exposed on `window` so a host can import them piece-by-piece. |

## Components (in render order)

| Component | Description |
|---|---|
| `TptNav` | Top nav bar — logo lockup only (one-page launch site has no other nav links yet). |
| `TptHero` | H1 in Lora 300, hero lead, primary `WaitlistForm`. |
| `WaitlistForm` | Single-field email capture. Stubs success state in-page. Replace with GHL embed in production. |
| `TptQuickAnswer` | AEO 40–80 word answer block on warm-white. |
| `TptPillars` | The four-pillar framework — aerial-forest bg + green glass overlay + sequence numbers + amber connector + Execute pillar fills amber. **The brand's locked visual signature.** |
| `Pillar` | Single pillar card. `variant="execute"` flips it to amber. |
| `TptSavingsBand` | Brand promise pull-quote: *"Walk in prepared. Walk in calm. Keep more of your money for your kids."* **Verbatim, locked.** |
| `TptOfferings` | 2×2 offer grid with status pills (Free / Coming soon / Open). |
| `OfferCard` | Single offer card. Status `free`/`coming`/`open`. |
| `TptWhoFor` | "Who this is for" section with 3px amber-rule emphasis quote. |
| `TptFaq` | Five Q&As with hairline dividers. Schema.org FAQPage-shaped content. |
| `FaqItem` | Single FAQ item. |
| `TptCtaBand` | Closing navy band with mirror waitlist form. |
| `TptFooter` | UPL/DTPA-clean disclaimer + last-updated + copyright. **Compliance copy — do not paraphrase.** |

## Compliance notes for anyone editing copy

The legal disclaimer in `TptFooter` and the "We don't give legal advice" line in `TptQuickAnswer` are UPL shields under Texas Gov Code § 81.101. Do not soften, remove, or paraphrase them without legal review. Outcome promises in any copy violate DTPA; the brand never claims case outcomes.

## Production caveats

This kit is a faithful visual recreation, not production code. The waitlist form in production is a GoHighLevel embed — see `the-primary-trail/the-primary-trail/README.md` in the source codebase for swap instructions.
