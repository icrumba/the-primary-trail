# The Primary Trail — Design System

A coaching and education service helping **dads new to family court** build a framework and strategy for navigating it. Sibling brand under **The Knowledge Jar**.

The audience is in active emotional crisis — typical reader is a working dad reading at 11pm after a hard day, sometimes hours after being served. The brand voice is the *calm older brother who's been through it.* This document and everything in this folder exist to keep that voice intact across every surface.

> **Brand promise (verbatim):** *Walk in prepared. Walk in calm. Keep more of your money for your kids.*

Live site: https://the-primary-trail.vercel.app/

---

## Sources

- **Codebase:** mounted locally at `the-primary-trail/the-primary-trail/` (read-only). Static one-page launch site (`public/index.html`) plus `context/SOUL.md`, `context/USER.md`, `CLAUDE.md`, `ROADMAP.md`. The `index.html` is the canonical reference for color, type, spacing, and the four-pillar visual signature. `SOUL.md` is the canonical reference for voice and non-negotiables.
- **Logo:** `uploads/logo.png` (provided by the operator) — primary lockup with mark + wordmark.
- **Imagery:** `pillars-bg.jpg` — aerial pine-forest photograph, the metaphor for "the trail." Used full-bleed under a forest-green glass overlay on the four-pillar section.

---

## Index — what's in this folder

| Path | Purpose |
|---|---|
| `README.md` | This file. Voice, foundations, iconography, source map. |
| `SKILL.md` | Cross-compatible skill manifest for use in Claude Code. |
| `colors_and_type.css` | Single source of truth for tokens — color, type, spacing, radii, motion. Drop-in. |
| `assets/logo/` | Logo lockups (`logo.png`). |
| `assets/images/` | Brand photography (`pillars-bg.jpg`). |
| `preview/` | HTML cards rendered in the Design System tab. One concept per card. |
| `ui_kits/website/` | Pixel-faithful recreation of the marketing site (modular components + clickable index). |

---

## Brand at a glance

- **Palette:** forest green `#1F3F2E` + amber accent `#C97B27` on warm cream `#F5EFE3` / `#EFE7D5`.
- **Type:** Lora serif (300/400/500/600/700) for headings, Inter sans (300/400/500/600) for body.
- **Visual signature:** four-pillar framework (Capture → Organize → Reflect → Execute) with sequence numbers + amber connecting line; aerial-forest glass overlay; pill-shaped CTAs with letter-spaced text; multi-tone cream alternation between sections.
- **Amber discipline:** highlight only — primary CTAs, the **Execute** pillar card, italic emphasis spans inside H2s, sequence numbers. Never paint full sections amber. Never use it for body text or as a backdrop for blocks of copy.

---

## CONTENT FUNDAMENTALS

The content layer matters more than the visual layer for this brand. The audience is in crisis; the wrong tone burns trust instantly.

### Voice — calm older brother

Direct. Steady. Action-oriented. Validates pain without wallowing. Never adversarial, never bro-y, never therapeutic-soft, never rights-activist. Imagine your older brother across the kitchen table at 11pm with coffee — he's been here, he's not going to bullshit you, he's going to tell you the next thing to do.

### Calibration examples (from `context/SOUL.md`)

| Wrong | Why | Right (TPT) |
|---|---|---|
| "Time to lawyer up and crush this." | Bro-y, adversarial. | "You're going to be okay. Not today. But you will be." |
| "Dads have rights too — fight for yours." | Activist. Wrong audience. | "Right now we focus on three things: stop the bleeding, get organized, and get a plan." |
| "Honor your feelings as you sit with this difficult chapter." | Therapeutic-soft. Reads as fluff at 11pm. | "We'll work through them in order." |

### Voice rules

- **Use:** *you* (direct, second person). Sometimes *we* (the brand). Never *I* on this site — there's no single founder voice on the marketing surface.
- **No urgency manipulation.** No countdown timers, no "act now," no "limited spots," no "only 3 left." This audience is already in a time-pressure crisis; piling on is a betrayal.
- **No outcome promises.** DTPA-clean. We never claim case outcomes, never imply legal services, never say "we'll fight for you," never guarantee results.
- **No emoji.** None. The voice is contemplative and masculine; emoji break the spell.
- **Sentence-case headings.** Headlines read as sentences with proper end-punctuation: *"A clear path through family court, built for dads who want to do this right."*
- **The italic accent.** Inside H2s, an italicized amber span emphasizes the operative phrase: *"The four pillars: <em>Capture, Organize, Reflect, Execute.</em>"* Use sparingly — at most once per heading.

### Vocabulary

**Use:** path, framework, plan, prepared, organized, steady, evidence, record, communication, documentation, strategy, prep, the trail, walk it, the kids, the children's best interest.

**Avoid:** crush, win, beat, fight, battle, weapon, hack, secret, exposed, alpha, dad-rights, deadbeat (even sarcastically), shame triggers, ex-bashing, urgency clichés.

### Compliance gates (non-negotiable)

Every customer-facing copy decision passes three checks:

1. **UPL-clean** — no implied legal services. The disclaimer "We are not lawyers and do not provide legal advice" appears in the savings band and in the footer. Keep it. (Texas Gov Code § 81.101.)
2. **Child-best-interest aligned** — the framework prepares the dad to be the most effective advocate for what's best for the children. Not for himself. Not against mom. (Aligns with the family-court legal standard.)
3. **Crisis-appropriate** — the sensory rule from SOUL.md: *would the right tone feel okay if read out loud at 11pm by a man who just got served?* If yes, ship. If no, rewrite.

Also: **DTPA** (Tex. Bus & Com Code Ch. 17) — no outcome guarantees. **FTC Consumer Review Rule** — testimonials must be authentic, no fabricated reviews.

### Reference copy (verbatim, do not paraphrase)

- **Brand promise:** *"Walk in prepared. Walk in calm. Keep more of your money for your kids."*
- **Quick answer (AEO):** *"The Primary Trail is a coaching and education service for dads new to family court. We don't give legal advice. We teach you how to capture what matters, organize it cleanly, communicate without hurting your case, and bring your lawyer the kind of preparation most dads only learn the hard way."*
- **Savings narrative:** *"Lawyers charge for organization. We help you bring them organized."*
- **Footer disclaimer:** *"The Primary Trail provides coaching and educational services only. We are not lawyers and do not provide legal advice."*

---

## VISUAL FOUNDATIONS

### Color system

The palette is **three families**: forest greens, the amber accent, and the warm cream neutrals. There is no purple, no electric blue, no neon. Every color in `colors_and_type.css` is sourced from the live site — do not invent new ones.

- **Greens:** `#1F3F2E` (primary), `#142B1F` (footer/depth), `#2C5440` (hover/secondary). Used for headings, CTA hover states, deep grounds.
- **Amber:** `#C97B27` (primary accent), `#E5A35E` (light, footer-link tint). **Disciplined use only** — primary CTA fill, italic emphasis in H2s, the Execute pillar fill, the connecting line behind the four pillars, the savings-band emphasis bar. Never paint a whole section amber. Never use amber on body text.
- **Creams:** `#F5EFE3` (page), `#EFE7D5` (alt section), `#ECE4D2` (deeper, status pills), `#FBF8F1` (card surfaces), `#DCD3BE` (hairlines/borders). The alternation between `cream` and `cream-warm` from section to section creates the rhythm — there's no white anywhere on the marketing site.
- **Text:** `#1F1F1F` charcoal for body, `#5C5A53` warm-gray for muted/secondary, white-cream `#FBF8F1` reversed on dark.

### Typography

- **Lora (serif)** for all headings and pull quotes. The defining weight choice is **300 on H1** — feather-light. **400 on H2.** Never use heavy weights on display copy; it breaks the contemplative register.
- **Inter (sans)** for body, labels, eyebrows, CTAs. 300 for the hero lead. 400 default body. 500 for cards/quotes. 600 for eyebrows and pillar labels.
- **Tracking:** H1 `-0.02em`, H2 `-0.01em`, eyebrows `+0.15em` uppercase, pill CTAs `+0.10em` (the brand signature), pillar labels `+0.12em`.
- **Body size 19px** (not 16px). The audience is reading on phones at midnight; we treat readability as a kindness.

### Backgrounds & section rhythm

- **No full-bleed gradients.** No mesh gradients. No pattern textures.
- **Imagery is rare and earned.** Currently exactly one photograph in the system — the aerial pine-forest shot used under the four-pillar section. The rest is solid cream.
- **Glass-overlay treatment.** Where imagery is used, it sits beneath a forest-green overlay (`rgba(31, 63, 46, 0.72)` + `backdrop-filter: blur(8px)`) so headings remain legible and the image reads as atmosphere, not subject. On `<= 768px` we drop the blur (perf) and bump the overlay to `0.85`.
- **Section rhythm.** Pages alternate `--tpt-cream` and `--tpt-cream-warm` between sections; cards always sit on the lightest surface (`--tpt-warm-white`). The deep `--tpt-navy` band appears once near the bottom as a closing CTA.
- **No stock people.** No smiling groups, no business handshakes, no posed families. They read as inauthentic to a crisis audience. If we ever add people, they're documentary-style or absent (landscape, hands, objects).
- **Imagery temperature:** warm, low-saturation, golden-hour. Pine forest, weathered wood, morning light. No bright/cool/clinical tones.

### Layout & spacing

- **Container 1080px** outer, **content 720px** inner. The narrower inner column carries headings, lead, and prose. The wider outer carries the four-pillar grid and offer cards.
- **Vertical rhythm:** sections breathe. Hero `4rem 0 3.5rem`, pillars `6rem 1.5rem`, savings `4rem 0`, offerings `5rem 0 3rem`. Tight density is wrong for this brand.
- **Eyebrow spacing:** eyebrow → H2 with `0.75rem` gap; H2 → supporting paragraph with `1rem`; section content → next subsection with `2.5rem`–`3rem`.

### Buttons & CTAs

- **Pill shape, always.** `border-radius: 9999px` on every primary and secondary CTA. This is the second locked brand signature after the four-pillar framework.
- **Letter-spaced text.** `letter-spacing: 0.1em` on CTAs. They read as labels, not sentences.
- **Two states only:** resting and hover. Resting `--tpt-amber` fill on cream pages. Hover swaps to `--tpt-green` fill. Same shape, full color shift. No outline, no shadow, no gradient.
- **Padding:** `1.25rem 2.5rem` — generous touch targets (~52px tall).
- **Secondary CTAs:** `border: 1px solid --tpt-green`, transparent fill, green text. On hover, fill becomes green and text becomes warm-white. Same pill shape.

### Cards

- Surface: `--tpt-warm-white` `#FBF8F1`. Border: `1px solid --tpt-line` `#DCD3BE`. Radius: `8px`. Padding: `1.5rem` (pillars) or `2rem 1.75rem` (offers).
- **Hover.** `transform: translateY(-2px)` + `box-shadow: 0 8px 24px rgba(31, 63, 46, 0.08)` over `0.2s` standard easing. Subtle lift, never aggressive.
- **The Execute pillar.** Sole exception to the cream-card rule — it's an amber-filled card that drops out into reverse type. This is intentional: it's where the framework lands, and the amber signals "this is what you walk away with."

### Hover, press, focus

- **Links:** color shift only — green → amber. No underline added on hover.
- **Cards:** the `translateY(-2px)` lift above. No scale, no rotation.
- **Inputs:** focus changes border from `--tpt-line` to `--tpt-green`. No ring, no shadow.
- **Press states:** none defined in the site. Mobile relies on the OS default tap highlight; we don't override.
- **Focus visibility for accessibility:** browser default rings preserved. Do not strip outlines.

### Borders, dividers, transparency

- **Hairlines** are `1px solid --tpt-line` between sections (nav bottom, FAQ items). Used sparingly — most section transitions are background-color shifts, not rules.
- **Pull-quote rule:** the "who this is for" emphasis paragraph carries a `3px solid --tpt-amber` left border with `1.25rem` left padding. This is the only place a hard amber rule appears in body content.
- **The amber connecting line behind pillars:** a `1px` horizontal line (`opacity: 0.55`) running through the vertical center of the four-pillar grid, behind the cards. On mobile, it rotates to vertical (1px wide, full height).
- **Transparency** is reserved for the glass overlay (`0.72` forest over imagery) and for muted text on dark surfaces (`rgba(251, 248, 241, 0.85–0.92)`). Don't use translucency on cream backgrounds — opaque cream values handle every use.

### Radii system

- `4px` — inputs, status pills.
- `8px` — cards (pillars, offers).
- `9999px` — CTAs only.

There is no other radius in the system.

### Shadows & elevation

One shadow exists: `0 8px 24px rgba(31, 63, 46, 0.08)` — used only on card hover. Resting cards have no shadow, only the hairline border. **There is no inner-shadow vocabulary**, no glow, no neumorphism. The brand reads as printed paper, not glossy app.

### Motion

- **Duration:** `0.15s` for color/state, `0.2s` for card lift. Nothing is faster than 100ms; nothing is slower than 250ms.
- **Easing:** one curve — `cubic-bezier(0.4, 0, 0.2, 1)` (Material standard). Used everywhere.
- **No bounces, no spring physics, no parallax, no autoplaying motion.** A dad reading at 11pm should not see anything moving on its own. Animations only fire on direct user action.

---

## ICONOGRAPHY

**The brand uses essentially no iconography.** This is intentional. The codebase ships a single visual mark (the logo) and the site contains zero icons in the navigation, the four-pillar grid, the offer cards, or the FAQ. Sequence is communicated by **numerals** (`01 / 02 / 03 / 04`), not by glyphs.

- **No icon font.** No Lucide, no Heroicons, no Font Awesome, no Material Icons in the codebase.
- **No emoji.** Emoji are explicitly off-brand; they break the contemplative register and read as casual to a crisis audience.
- **No unicode-as-icon.** No bullet glyphs (`•`, `›`), no decorative stars, no checkmarks. Lists use plain `<ul>` markers or no markers at all.
- **One textual arrow.** A single Unicode character — `→` (U+2192) — appears at the end of inline link CTAs ("Get the checklist →"). This is the only ornamental glyph in the system.
- **Logo only.** `assets/logo/logo.png` — a triangular mountain mark with an amber trail-curve cutting through it, set beside the wordmark "The Primary Trail" in Lora. Used in the nav at `110px` height (`70px` mobile) and as favicon.

**If a future surface genuinely needs an icon** (e.g. a dashboard, a course-progress UI):
1. **First choice — extend the existing visual vocabulary.** Numerals, hairline rules, and the trail-curve motif from the logo all carry meaning already.
2. **If a real icon set is required**, recommend Lucide (CDN: `https://unpkg.com/lucide@latest`) at stroke width `1.5` in `--tpt-green` — it matches the thin, calm visual register. **Flag the substitution to the operator** for sign-off; this would be a system-level addition, not a local choice.
3. Never substitute Heroicons (too modern/sharp), Material Icons (too consumer-app), or any filled-glyph set. Stay quiet and editorial.

---

## Substitutions flagged

- **Fonts.** No `.ttf` / `.woff` files exist in the codebase — fonts are loaded from Google Fonts CDN (Lora + Inter). `colors_and_type.css` mirrors that strategy with an `@import`. **No substitution made.** If the operator wants self-hosted fonts for offline / build-pipeline reasons, ask for `.woff2` files of Lora 300/400/500/600/700 and Inter 300/400/500/600.
- **Imagery.** Only one photograph (`pillars-bg.jpg`) exists. If additional surfaces need imagery, ask the operator for sourced photography in the same temperature register (warm, low-saturation, no people).

---

## Iteration

This system is the calm older brother across every surface. When in doubt:

1. Check the three SOUL gates (UPL, child-best-interest, crisis-appropriate).
2. Re-read the calibration examples above.
3. Default to less. Less color, less motion, less ornament, less copy. The brand reads as quiet on purpose.
