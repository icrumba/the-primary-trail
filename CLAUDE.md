# CLAUDE.md — The Primary Trail

This is the operating manual for any Claude session in this project. Read it first.

## What this project is

**The Primary Trail (theprimarytrail.com)** is a coaching and education service helping dads new to family court build a framework and strategy for navigating it. The promise is practical: enter prepared, communicate cleanly, organize your evidence and your decisions, save thousands in avoidable legal fees, and stay aligned with what actually matters in family court — the best interest of the children.

TPT is a sibling brand under **The Knowledge Jar (TKJ)**. It shares TKJ methodology but has its own voice and audience. The shared knowledge base lives at `C:\Users\kent2\Dev\tkj-knowledge-base\`.

## Operators

- **Victor Cuevas** — operator. Gen X, builder mindset, not a developer. Runs TKJ and sibling brands. Email: `victor@theknowledgejar.com`.
- **Co-founder ("buddy")** — name TBD in this doc until Victor populates.
- **Equity:** 50/50, agreed at kickoff (2026-04-25).
- **Working agreement (decision lanes, dispute path, vesting language):** drafting; see ROADMAP Phase 0.

## Foundational decisions (locked 2026-04-25)

1. **Customer:** the dad new to family court — needs help organizing, communicating, and understanding the process. Value prop is saving thousands in avoidable legal fees.
2. **Format:** course-led mixed funnel. Course (MVP) → private community → 1:1 coaching as premium tier.
3. **Legal posture:** coaching + curated attorney referral network. No legal documents in v1.
4. **Brand non-negotiables:** UPL discipline, child-best-interest framing, crisis-appropriate voice. See SOUL.md.
5. **Value pillars (CORE):** Capture → Organize → Reflect → Execute. These are the spine of the product, the course, and the savings story. See SOUL.md.

If a future decision contradicts any of the above, flag it to Victor explicitly before proceeding.

## How Claude works in this project

- **Decisions:** present 2–3 options with a clear recommendation and trade-offs, then let Victor pick. Never decide unilaterally on strategy, voice, scope, or brand calls. Trivial mechanical defaults are fine.
- **Framing:** business framing over engineering jargon. Victor is the operator, not the developer.
- **Cadence:** the TKJ playbook — research → identity docs (CLAUDE/USER/SOUL) → roadmap → MVP → ship → iterate. Don't skip identity docs; they're the source of truth.
- **Brand checks:** every piece of customer-facing copy or product decision must pass three gates: (1) UPL-clean, (2) child-best-interest aligned, (3) crisis-appropriate voice. SOUL.md has the full criteria.
- **Companion brands:** mirror Texas Power Search structure where it works (`C:\Users\kent2\Dev\texas-power-search\`), but TPT voice and audience are distinct — don't copy/paste copy across brands.

## File map (Agentic OS structure)

```
the-primary-trail/
├── CLAUDE.md                          ← this file (operating manual)
├── ROADMAP.md                         ← phases, milestones, decisions due
├── README.md                          ← website + deploy notes
├── index.html, robots.txt, llms.txt,
│   sitemap.xml, vercel.json           ← v1 launch site (static)
├── context/                           ← Brand Context + Memory layers
│   ├── USER.md                        ← operator profile + collaboration style
│   ├── SOUL.md                        ← brand identity, voice, non-negotiables
│   ├── learnings.md                   ← accumulated corrections per skill (long-term)
│   └── memory/
│       └── YYYY-MM-DD.md              ← daily session log (one per working day)
└── .claude/
    └── skills/                          ← Skills layer
        ├── tpt-design-system/SKILL.md   ← locked design tokens + brand book + UI kit
        ├── tpt-upl-check/SKILL.md       ← UPL compliance gate (TPT non-negotiable)
        ├── tpt-aeo-seo/SKILL.md         ← AEO/SEO discipline for any user-facing page
        ├── tpt-site-build/SKILL.md      ← landing page / website conventions
        ├── tpt-ghl-funnel/SKILL.md      ← GoHighLevel funnels and sequences
        └── tpt-customer-research/SKILL.md ← dad-interview methodology (Phase 0 sprint)
```

## Memory and learnings (Agentic OS — Self-Maintenance layer)

- **Before starting any session:** read `context/memory/` for the most recent daily log AND yesterday's log. That gives you continuity. Also read `context/learnings.md` for accumulated corrections.
- **At the END of every session ("wrap up"):** create or update today's log in `context/memory/YYYY-MM-DD.md`. If a correction or pattern emerged that should persist, append it to `context/learnings.md` under the relevant skill's section.
- **Daily memory format:** Goal, Deliverables (with file paths), Decisions made and why, Open threads for next time.

## Skills (Agentic OS — Skills layer)

When a customer-facing piece of work is needed (copy, page, funnel), match the request to a skill in `.claude/skills/` and follow its methodology. Skill descriptions in their YAML frontmatter route the work. Don't bypass the skill's quality checks to ship faster.

`tpt-upl-check` runs as a final gate on ALL customer-facing copy and product decisions. If it flags something, fix or escalate before shipping.

## Sibling references

- `C:\Users\kent2\Dev\tkj-knowledge-base\` — TKJ canonical methodology and resources (StoryBrand, Northbound Labs Digital Product Launch Blueprint, AEO playbook, Agentic OS source docs). Pull from here when a TPT skill needs reference material.
- `C:\Users\kent2\Dev\the-knowledge-jar-os\` — TKJ OS / playbook templates.
- `C:\Users\kent2\Dev\texas-power-search\` — first shipped sibling brand; structural template for skills, AEO conventions, brand-tokens-in-CSS pattern.

## Quick reference for future sessions

When starting a new session: read this file, then `context/SOUL.md`, then today's and yesterday's `context/memory/`, then `context/learnings.md`. That's the full orient in five reads.
