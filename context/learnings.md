# Learnings — The Primary Trail

Accumulated corrections and patterns from working sessions. Each skill has its own section. Skills read their own section before running. Wrap-up appends new entries here when feedback during a session reveals a pattern worth persisting.

Format: `YYYY-MM-DD: [observation/rule]` followed by a short *why*.

---

## tpt-upl-check

*No entries yet. Add as UPL gates catch real issues.*

---

## tpt-aeo-seo

*No entries yet. Add as audits surface patterns.*

---

## tpt-site-build

- 2026-04-26: **Organize all static assets into `public/assets/<type>/<file>` — never flat in `public/` root.** Why: as the project grows (logos, images, fonts, icons, OG images), a flat `public/` becomes unmanageable. Victor flagged this when I dropped `logo.png` at `public/` root. How to apply: any new static asset goes into a typed subfolder. Logos → `public/assets/logo/`. Images → `public/assets/images/`. Fonts → `public/assets/fonts/`. Icons → `public/assets/icons/`. OG/social images → `public/assets/og/`. The only files allowed at `public/` root are top-level web standards: `robots.txt`, `llms.txt`, `sitemap.xml`, `favicon.ico`. Phase 2 (Next.js) keeps the same structure since `public/` is already the static-asset root.
- 2026-04-26: **Phase 1 deploy treats `public/` as the publish root — keep all customer-facing files inside it.** Why: this aligns the static-deploy URL semantics with the Phase 2 Next.js conventions, so paths like `/assets/logo/logo.png` resolve identically in both phases. Without this, `/assets/...` 404s on a vanilla static drag-and-drop where the project root is the deploy root. How to apply: `index.html`, `robots.txt`, `llms.txt`, `sitemap.xml`, plus any future routes (e.g., a `blog/` subdirectory) live inside `public/`. Project-level files (`CLAUDE.md`, `ROADMAP.md`, `README.md`, `.gitignore`, `context/`, `.claude/`) stay at the project root and are NOT deployed. On Vercel: drag-and-drop the contents of `public/`; for Git-connected deploys, set Output Directory = `public` and keep `vercel.json` at project root (Vercel reads `vercel.json` from project root regardless of Output Directory).

---

## tpt-ghl-funnel

*No entries yet.*

---

## General / cross-skill

- 2026-04-25: Customer is "the dad new to family court" (Victor's reframe of pre-filing). Captures pre-filing through early-stage-mid-divorce. Avoid the term "pre-filing" in customer-facing copy — too technical. Use "new to family court," "just got served," "newly facing custody."
- 2026-04-25: Pricing not yet disclosed publicly — research suggests $175/hr, $700/mo (Foundations), $1,200/mo (Active Case). Hold these for waitlist members until Phase 0 close.
- 2026-04-25: Buddy has hands-on TX e-filing experience (efiletx.tylertech.cloud). This is a credibility/authority signal for the Execute pillar. NOT a service we offer (filing-for-clients = UPL).
