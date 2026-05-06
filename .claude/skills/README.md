# Skills — The Primary Trail

Per the Agentic OS framework (and Lessons 05–08 of the Claude Lesson series), skills are reusable methodologies. Each skill is a folder with a `SKILL.md` (YAML frontmatter + structured methodology) and an optional `references/` subfolder for depth material.

## Active skills

| Skill | Purpose | Triggers on |
|---|---|---|
| `tpt-design-system` | Locked design tokens + brand book + UI kit reference. Auto-loaded for any design/UI work. | "design", "tokens", "components", "design system", "brand book", "UI kit", page builds |
| `tpt-upl-check` | UPL + DTPA compliance gate (TPT non-negotiable) | "UPL check", "compliance review", "is this clean", + final gate on every customer-facing piece |
| `tpt-aeo-seo` | AEO/SEO discipline for any user-facing page | "AEO", "SEO", "audit this page", "is this AEO-ready", page creation/edit |
| `tpt-site-build` | Website conventions (Phase 1 static; Phase 2 Next.js) | "build a page", "edit the site", "scaffold", deploy work |
| `tpt-ghl-funnel` | GoHighLevel funnels, email sequences, pipelines | "funnel", "email sequence", "GHL", "lead magnet", "waitlist" |
| `tpt-customer-research` | Interview methodology for crisis-audience qualitative research | "customer research", "dad interviews", "user research", "interview prep", "synthesize interviews" |

## Skill chaining (typical workflows)

| Workflow | Chain |
|---|---|
| New page build | tpt-design-system → tpt-site-build → tpt-aeo-seo → tpt-upl-check |
| Write an email sequence | tpt-ghl-funnel → tpt-upl-check |
| Audit existing copy | tpt-aeo-seo → tpt-upl-check |
| Customer research sprint | tpt-customer-research → synthesize → feed into course outline / SOUL voice / FAQ copy |
| Launch a new offering | tpt-design-system → tpt-ghl-funnel → tpt-site-build → tpt-aeo-seo → tpt-upl-check |

`tpt-upl-check` is always last. It's the gate.

## Conflict resolution
If two skills disagree:
1. SOUL.md (voice) wins over everything.
2. tpt-upl-check (compliance) wins over AEO/funnel/build.
3. Operator (Victor) wins over any skill — flag the conflict, present options.

## Adding a new skill
1. Create `.claude/skills/tpt-[name]/`.
2. Add `SKILL.md` with YAML frontmatter (name, description under 1024 chars including triggers).
3. Add this skill to the table above.
4. Add a section to `context/learnings.md` for accumulated corrections.
5. Optional: create `references/` for depth material.

## References
- `../../tkj-knowledge-base/The Knowledge Jar/the-knowledge-jar-os/.claude/skills/` — TKJ parent skills.
- `../../texas-power-search/.claude/skills/` — TPS sibling-brand skills.
- `../../tkj-knowledge-base/Agentic-Academy/` — full Agentic OS framework.
