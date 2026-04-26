---
name: tpt-ghl-funnel
description: >
  GoHighLevel funnel and email-sequence builder for The Primary Trail. Use when
  building landing pages, email sequences, pipeline configs, application forms, or
  any GHL automation for TPT. Triggers on: "funnel", "landing page", "email sequence",
  "pipeline", "GHL", "GoHighLevel", "workflow", "lead magnet", "waitlist",
  "application form". Voice from SOUL.md; compliance from tpt-upl-check.
---

# tpt-ghl-funnel Skill — TPT GHL Funnel Builder

Build GHL funnels, pipelines, email sequences, and automations for TPT's product ladder.

## Outcome
Ready-to-implement GHL assets (landing-page copy, email sequences, pipeline configs, form specs) that pass the SOUL voice check and tpt-upl-check.

## TPT product ladder
| Tier | Product | Price | Status |
|------|---------|-------|--------|
| 0 | "First 7 Things to Do" checklist (free) | $0 | Draft pending |
| 1 | The Primary Trail Course | TBD (founding pricing) | Pre-launch / waitlist |
| 2 | Private Community | $TBD/mo | Pre-launch |
| 3 | 1:1 Foundations Retainer | $700/mo | TX-launch ready |
| 4 | 1:1 Active Case Retainer | $1,200/mo | TX-launch ready |
| 4b | 1:1 Hourly | $175/hr | TX-launch ready |

(Pricing per Vic-Hako research 2026-04-25; not public until Phase 0 closes.)

## Core funnels

### Funnel 1 — Waitlist + free checklist (Tier 0 → 1)
Single-field email form. Tag: `tpt-waitlist`. Triggers welcome workflow + delivers checklist + 7-step nurture over 14 days.

### Funnel 2 — 1:1 coaching application (Tier 3/4)
Multi-field application: name, email, phone, county/state, current stage, top three goals, current attorney, preferred contact. Tag: `tpt-coaching-applicant`. Triggers internal review notification.

### Funnel 3 — Course presale (Tier 1)
Two-step form (email → Stripe). Tag: `tpt-course-customer`. Triggers welcome + day-3 check-in + day-14 community waitlist invite.

## Steps (typical funnel build)
1. Identify the tier and entry point.
2. Draft landing-page copy in calm-older-brother voice (SOUL.md). Use StoryBrand wireframe (`references/storybrand-wireframe.md` — to be added).
3. Draft email sequence (see below).
4. Spec the pipeline stages, tags, and workflow triggers.
5. Run tpt-upl-check on every email and every page block.
6. Output as Markdown files for Victor to paste into GHL.

## The 7-step waitlist nurture sequence
Email 1 (delivery, immediate): "Your checklist is here." Two short paragraphs. Acknowledge it's a hard moment.
Email 2 (Day 1): "Why most dads lose money in the first two weeks." Capture pillar.
Email 3 (Day 3): "The lawyer hour problem." Organize pillar + savings narrative.
Email 4 (Day 5): "Watch your tone before you hit send." Reflect pillar.
Email 5 (Day 7): "Before your next lawyer meeting." Execute pillar.
Email 6 (Day 10): "What this is, and what this isn't." Trust building, UPL framing, child-best-interest.
Email 7 (Day 14): Course waitlist soft CTA with founding-member pricing.

After Email 7: tag `nurture-complete`, move to monthly newsletter.

Rules: under 2 minutes to read. One CTA per email. 3 subject-line variations for Victor to pick. NO outcome promises. NO urgency tricks.

## GHL pipeline (recommended)
Stages: Waitlist → Nurturing → Nurture Complete → Course Customer | Coaching Applicant → Coaching Approved → Community Member.

Tags: `tpt-waitlist`, `nurture-active`, `nurture-complete`, `tpt-course-customer`, `tpt-coaching-applicant`, `tpt-coaching-active`, `tpt-community-member`.

## Output format
- Landing-page copy as Markdown with section labels matching GHL builder.
- Email sequences as files: `YYYY-MM-DD-tpt-email-[seq]-[day#].md`.
- Pipeline configs as tables.
- Form specs field-by-field.
- Always 2–3 subject-line variations.

## Anti-patterns
- Outcome promises in subject lines or body.
- Urgency tricks ("limited spots!").
- Form fields beyond minimum (waitlist = email only; application ≤ 8 fields).
- Skipping tpt-upl-check on emails because they "feel safe."

## References
- `references/storybrand-wireframe.md` — StoryBrand 7-part landing-page structure (to be added).
- `references/email-template.md` — email format spec (to be added).
- `../../tkj-knowledge-base/The Knowledge Jar/the-knowledge-jar-os/.claude/skills/tkj-ghl-funnel/SKILL.md` — TKJ parent reference.
- `../../tkj-knowledge-base/Northbound-Labs/Digital Product Launch Blueprint/` — launch checklists.
- `context/SOUL.md` — voice.
- `tpt-upl-check/SKILL.md` — compliance gate.
- Vic-Hako research (uploads).
