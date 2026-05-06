---
name: tpt-design-system
description: >
  Locked design tokens, brand book, and UI kit reference for The Primary Trail.
  Single source of truth for colors, type, components, glass-overlay treatment,
  pillar layout, and CTA pill conventions. Auto-loads for any design or UI work.
  Voice is "calm older brother" for a crisis audience; UPL/DTPA compliance is
  non-negotiable. Triggers on: "design", "tokens", "components", "design system",
  "brand book", "UI kit", "build a page", "edit the site", "scaffold", page
  builds. Defers to SOUL.md for voice and tpt-upl-check for compliance.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Required reading before generating anything customer-facing

1. `README.md` — voice, content fundamentals, visual foundations, iconography, source map.
2. `colors_and_type.css` — the single source of truth for tokens. Link it; never invent new colors or type.
3. `ui_kits/website/components.jsx` — modular React components for every section of the marketing site.

## Three compliance gates (non-negotiable, every time)

Before shipping anything customer-facing, verify:

1. **UPL-clean.** No implied legal services. The phrase "We are not lawyers and do not provide legal advice" must remain in any footer or savings-band copy. (Texas Gov Code § 81.101.)
2. **Child-best-interest aligned.** The framework prepares the dad to advocate for the children's best interest. Never adversarial toward mom. Never "win" or "fight" framing.
3. **Crisis-appropriate voice.** Sensory rule: would the tone read right out loud at 11pm by a man who just got served? If not, rewrite.

## Locked brand elements — do not redesign

- **Four-pillar framework** (Capture / Organize / Reflect / Execute) with `01/02/03/04` numerals and the amber connector line behind cards. The Execute pillar fills amber; the others are warm-white cards.
- **Glass-overlay treatment** over the aerial pine-forest photograph — `rgba(31, 63, 46, 0.72–0.82)` + `backdrop-filter: blur(8px)`.
- **Pill-shaped CTAs** — `border-radius: 9999px` with `letter-spacing: 0.1em`.
- **Brand promise (verbatim):** *"Walk in prepared. Walk in calm. Keep more of your money for your kids."*
- **Multi-tone cream alternation** between sections (`--tpt-cream` ↔ `--tpt-cream-warm`).

## Anti-patterns — never generate

- No stock-photo people (smiling groups, handshakes, posed families).
- No bright/saturated colors. No purple, no neon, no electric blue.
- No heavy headline weights. H1 is Lora 300, H2 is Lora 400.
- No urgency manipulation (countdown timers, "act now", "limited spots").
- No legal-coded imagery (gavels, scales, courthouses, suits).
- No emoji. None.
- No Inter/Roboto/Arial substitutions for headings — Lora is the brand.
