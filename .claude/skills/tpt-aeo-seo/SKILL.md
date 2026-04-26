---
name: tpt-aeo-seo
description: >
  AEO/SEO discipline for every user-facing page on theprimarytrail.com.
  Use whenever creating or editing pages, blog posts, FAQ sections, landing pages,
  meta tags, schema markup, llms.txt, robots.txt, or sitemap.xml. Also triggers on
  audit-style requests: "is this AEO-ready", "review for SEO". Defers to SOUL.md
  for voice and tpt-upl-check for compliance. Does NOT trigger for internal docs.
---

# tpt-aeo-seo Skill — TPT AEO/SEO

Operationalizes the six-layer GEO strategy from `../../tkj-knowledge-base/aeo/AI Search Optimization (GEO) Strategy for Website Discoverability.md`.

## Outcome
A page (or audit) that passes the six-layer audit and is ready to ship.

## Non-negotiables (every user-facing page)

1. Opens with a 40–80 word **Quick Answer** that directly answers the page title.
2. H2 headings are phrased as real questions.
3. JSON-LD schema present and correct.
4. `dateModified` visible in body AND in schema.
5. FAQ block with FAQPage schema (3–8 questions).
6. Author / publisher credited via Person or Organization schema.
7. HTTPS, mobile-first, sub-1.8s LCP. Critical content in HTML, not JS-only.
8. Internal link to a pillar page (when more than the homepage exists).
9. External citation for any factual claim.
10. Passes SOUL.md voice check AND tpt-upl-check. Compliance and voice always win over AEO.

## Steps (page production)

1. **Classify the page** → choose schema stack (see `references/schema-stack.md`).
2. **Draft the Quick Answer** (40–80 words, written as if it's the only thing AI engines will quote).
3. **Structure H2s as real questions.**
4. **Write body in calm-older-brother voice** per `context/SOUL.md`.
5. **Add an FAQ block** (3–8 Q&A; answers 40–80 words each) wrapped in FAQPage schema.
6. **Generate JSON-LD** from `references/schema-templates.md`. Validate with Google Rich Results Test.
7. **Set dateModified** visible in body AND in schema (ISO 8601).
8. **Add canonical URL + OG tags.** Always.
9. **Link to the pillar** (when applicable).
10. **Update llms.txt** if new page is a pillar or major landing.
11. **Run the six-layer audit** (`references/audit-checklist.md`).
12. **Run tpt-upl-check** as final gate. If it fails, rewrite or escalate.

## Six-layer audit (summary)
- Layer 1 — technical foundation (HTTPS, sitemap, canonical, sub-1.8s, AI crawlers allowed)
- Layer 2 — llms.txt + .md mirrors
- Layer 3 — schema (correct type, FAQPage, dateModified)
- Layer 4 — content architecture (Quick Answer, question H2s, FAQ, pillar link, citation)
- Layer 5 — E-E-A-T (author/publisher, claims cited, trust signals)
- Layer 6 — voice + compliance (SOUL voice, no outcome promises, UPL-clean)

If any item fails, fix or escalate. Don't ship a partial-pass page.

## Anti-patterns
- Keyword-stuffing H2s instead of real questions.
- Inventing FAQs no real dad would ask.
- Backdating dateModified.
- Listing every page in llms.txt.
- Bypassing tpt-upl-check to ship faster.

## References
- `references/schema-stack.md` — page-type → schema mapping (to be added).
- `references/schema-templates.md` — JSON-LD templates (to be added).
- `references/audit-checklist.md` — full six-layer checklist (to be added).
- `../../tkj-knowledge-base/aeo/AI Search Optimization (GEO) Strategy for Website Discoverability.md` — full playbook.
- `../../texas-power-search/.claude/skills/aeo-seo/SKILL.md` — sibling-brand reference.
- `context/SOUL.md` — voice.
- `tpt-upl-check/SKILL.md` — compliance gate.
