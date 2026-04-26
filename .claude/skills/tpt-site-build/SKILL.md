---
name: tpt-site-build
description: >
  Builds and maintains theprimarytrail.com. Currently a static one-page launch site
  on Vercel; planned migration to Next.js + Tailwind mirroring TPS conventions.
  Use whenever asked to scaffold the app, create or edit any page, build components,
  configure deployment, or tune performance. Defers to tpt-aeo-seo for AEO/schema
  and tpt-upl-check for compliance.
---

# tpt-site-build Skill — TPT Frontend

Single methodology for building the TPT website.

## Outcome
A page or component that is fast, calm, accessible, and UPL-clean.

## North star
Every page must be (1) fast enough to rank — sub-1.8s LCP on slow 3G, (2) calm enough to read at 11pm by a dad who just got served, (3) UPL-clean per tpt-upl-check, (4) WCAG AA accessible.

## Phase 1 — current state (static)
- `index.html` — entire landing page, inline CSS, inline SVG logo, JSON-LD
- `robots.txt`, `llms.txt`, `sitemap.xml`, `vercel.json`
- Forms are placeholder native HTML; swap with GHL embeds when ready

## Phase 2 — target state (Next.js)
Match TPS architecture: Next.js App Router + TypeScript + Tailwind v4 (brand tokens in globals.css `@theme` block) + SSG via generateStaticParams + Vercel.

See `references/phase-2-architecture.md` for the file structure (to be added).

## Brand tokens (locked 2026-04-25)
- `--tpt-green: #1F3F2E` (primary)
- `--tpt-green-dark: #142B1F` (hover/active)
- `--tpt-amber: #C97B27` (accent, CTAs)
- `--tpt-amber-light: #E5A35E`
- `--tpt-cream: #F5EFE3` (page bg)
- `--tpt-charcoal: #1F1F1F` (body text)
- `--tpt-warm-gray: #5C5A53` (secondary)
- `--tpt-navy: #0F2027` (dark inverse)
- `--tpt-warm-white: #FBF8F1` (cards)
- `--tpt-line: #DCD3BE` (borders)

Typography: **Lora** (serif headings) + **Inter** (sans body), via Google Fonts.

When tokens change, update HERE first, then propagate.

## Steps (typical page build)
1. Read SOUL.md for voice; tpt-aeo-seo for AEO requirements.
2. Sketch the page sections (hero, body, CTA, footer).
3. Use brand tokens; never arbitrary color values.
4. Run tpt-aeo-seo six-layer audit during build.
5. Run tpt-upl-check as final gate before shipping.
6. Verify Lighthouse mobile ≥ 95, LCP < 1.8s.

## Performance targets (per page)
Lighthouse mobile ≥ 95. LCP < 1.8s on slow 3G. CLS < 0.1. JS bundle < 100KB gzipped (Phase 2).

## Forms — GHL integration pattern
Phase 1: native HTML form + JS interception + TODO comment for GHL swap.
Phase 2: `<GHLEmbedWrapper formId="..." />` component.
Per tpt-ghl-funnel: primary forms are `tpt-waitlist` (email-only) and `tpt-coaching-application` (multi-field).

## Anti-patterns
- Bypassing the AEO audit or UPL check.
- Storing user PII in localStorage / sessionStorage / cookies.
- Arbitrary Tailwind color values instead of tokens.
- Mixing business logic into components — logic in `lib/`.
- Treating the static phase 1 as long-term home — plan Next.js migration before 5+ pages.

## References
- `references/phase-2-architecture.md` — Next.js file structure target (to be added).
- `references/brand-tokens.md` — full token system (to be added).
- `../../texas-power-search/.claude/skills/site-build/SKILL.md` — sibling-brand reference.
- `tpt-aeo-seo/SKILL.md` — AEO requirements.
- `tpt-upl-check/SKILL.md` — compliance gate.
- `context/SOUL.md` — voice.
