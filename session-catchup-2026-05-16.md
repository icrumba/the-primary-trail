# The Primary Trail — Cowork Bootstrap

**Paste this whole document into the first message of a fresh Cowork chat.**
**Written:** 2026-05-16. **For:** new Cowork session on Victor's Alienware after laptop migration. **Purpose:** restore full project context when auto-memory is empty.

---

## How to use this doc

You (the Claude reading this) are starting a new Cowork chat on a new machine. The auto-memory layer at `~/.claude/...` is empty — it doesn't sync across machines. This doc is a one-time hand-off that gets you to operational without a slow ramp.

After reading this:
1. Confirm you have workspace access to `C:\Users\kent2\Dev\the-primary-trail\the-primary-trail` (or wherever the repo lives on this Alienware).
2. Open `CLAUDE.md` and `context/SOUL.md` for the canonical versions of the rules below.
3. Open `context/memory/2026-05-15.md` and `context/memory/2026-05-16.md` for the two most recent session logs.
4. Open `context/learnings.md` for accumulated corrections.
5. Then ask Victor what he wants to work on. **Do not propose work unilaterally.**

---

## 1. Project identity

**The Primary Trail (theprimarytrail.com)** is a coaching and education service helping dads new to family court walk in prepared, organized, and steady. The promise: enter the system with a framework, communicate cleanly, document what matters, avoid the costly mistakes most dads make in the first 90 days. Practical outcome: thousands in avoided legal fees, a credible record, alignment with what the court actually cares about — the best interest of the children.

TPT is a **sibling brand under The Knowledge Jar (TKJ)**. Shares TKJ methodology; has its own voice and audience. Other TKJ siblings: Texas Power Search (shipped MVP early 2026), and TKJ itself.

**Operators:** Victor Cuevas (operator, ops/build) and Hakan "Hako" Oksuzler (co-founder, subject-matter authority — Texas dad who litigated a contested custody case from Collin County to the Texas Supreme Court). 50/50 equity, locked 2026-04-25.

**Legal entity:** "The Knowledge Jar LLC, doing business as The Primary Trail." DBA pivot locked 2026-05-15 (replaced earlier plan to form a separate TX LLC). E&O coverage via amendment to TKJ's existing policy (in progress).

---

## 2. The product spine — CORE

Everything we sell, teach, and build maps to four pillars:

1. **Capture** — get every email, text, voicemail, photo, screenshot, date into one place. Where most dads lose thousands.
2. **Organize** — turn the pile into a timeline and evidence categories a lawyer can use. Lawyers charge $300–$500/hour to do this. We teach dads to bring it pre-organized.
3. **Reflect** — judgment layer. AI-assisted message review, tone checks, pattern-spotting. Where dads stop torpedoing their own case in the heat of the moment.
4. **Execute** — package the case for the lawyer, or (where allowed) for direct filing. Tighter case. Less time billed. Better outcome.

Savings narrative: *"Lawyers charge for organization. We help you bring them organized."* (Note: SOUL.md still carries this line, but the **live site's** stated promise is now *"Walk in prepared. Walk in calm. Keep more of your money for your kids."* — see open threads, SOUL.md needs a refresh.)

---

## 3. The three brand non-negotiables

Every customer-facing decision — copy, product, partnership, marketing — gets checked against these three gates. If anything fails or is unclear, escalate to Victor.

### Gate 1 — UPL (Unauthorized Practice of Law) discipline
We coach, educate, organize. We do NOT give legal advice, draft motions for specific cases, or recommend strategy on a specific matter. Phase 1 boundary: education + coaching + curated attorney referrals. **No legal documents in v1.** Positioning move: lean in. *"We're not your lawyer. We're the strategy, mindset, and preparation layer your lawyer doesn't have time for."*

### Gate 2 — Child-best-interest framing
Every framework, script, and piece of advice orients around helping the dad become the most effective advocate for his children. Not for himself. Not against mom. **For the kids.** Drift to watch for: any copy that reads as "win against mom," "fight for dad's rights," or "get even." Reframe around the children.

### Gate 3 — Crisis-appropriate voice
Audience is in active emotional crisis. No hype. No urgency tactics. No bro humor. No scarcity tricks. Sensory rule: *would this read okay if read out loud at 11pm by a dad who just got served?* If yes, ship. If no, rewrite.

---

## 4. Voice and vocabulary

**Voice:** "Calm older brother who's been through it." Direct. Steady. Action-oriented. Validating but not wallowing. Never adversarial. Never bro-y. Never therapeutic-soft. Never rights-activist.

**Imagine:** your older brother at the kitchen table at 11pm with a cup of coffee. He's been here. He's not going to bullshit you. He's not going to let you spiral. He'll tell you the next thing to do.

**Use:** path, framework, plan, prepared, organized, steady, evidence, record, communication, documentation, strategy, prep, the trail, walk it, the kids, the children's best interest.

**Avoid:** crush, win, beat, fight, battle, weapon, hack, secret, exposed, alpha, dad-rights, deadbeat (even sarcastically), shame triggers, ex-bashing, urgency clichés ("limited spots!").

**External-quote exception (precedent set 2026-05-15):** an attributed external quote may contain avoid-list vocabulary if (a) the message reinforces a brand non-negotiable, (b) the surrounding H1/lead stays clean, (c) attribution is visually clear via `<cite>`. The Lombardi hero is the working example. SOUL.md needs to codify this — open thread.

---

## 5. How Victor wants Claude to work

- **Always present 2–3 options with a clear recommendation, then let Victor decide.** Firmest rule. Strategy / voice / scope / brand calls are his. You surface trade-offs.
- **Business framing over engineering jargon.** Victor is technically literate but not a developer. Translate to cost, speed, risk, brand effect, customer effect.
- **Be tight.** Don't over-explain. Don't recap what was just decided. Get to action.
- **Track multi-step work** with the task list when non-trivial.
- **Persist state.** Memory across sessions matters because Victor runs multiple brands and reopens after gaps. Decided / captured / reusable → save it.
- **Wrap-up protocol:** at end of session, append to `context/memory/YYYY-MM-DD.md` (Goal, Deliverables w/ paths, Decisions w/ why, Open threads). Persistent patterns → `context/learnings.md` under the relevant skill section.

**What to avoid:** deciding strategy or brand voice unilaterally; burying the recommendation in caveats; defaulting to engineer-speak; long trailing summaries; mocking up "final" deliverables without a direction check-in.

---

## 6. Decisions locked to date

**2026-04-25 (kickoff):** Customer = the dad new to family court. Format = course-led mixed funnel (course → community → 1:1). Legal posture = coaching + curated referral network, no legal documents in v1. Equity = 50/50 with Hako. CORE pillars = Capture/Organize/Reflect/Execute. Voice = calm older brother. Site format = static one-page on Vercel (speed-to-ship beats Next.js scaffold for tonight).

**2026-04-26:** Logo = horizontal lockup at 68px desktop / 48px mobile. Three design patterns adopted as page conventions (eyebrow tags, split-clause headings with `.heading-accent`, pillar sequencing). Phase 1 deploy treats `public/` as publish root. CDC Certified Divorce Coach = parallel enrollment (both Hako and Victor). HCI training = Hako primary, Victor optional. Vercel apex = primary domain; www redirects.

**2026-05-15:** **DBA pivot** — TPT operates as Assumed Name under TKJ's existing TX LLC (no new entity). Insurance = amend TKJ's E&O policy to cover TPT. Email = full domain separation on `theprimarytrail.com` via Google Workspace (victor@, hako@, plus hello@ / info@ aliases). SPF + DKIM + DMARC retroactively added to all three brand domains (TPT, TPS, TKJ). **Hero rewrite shipped** (Lombardi epigraph + new H1 + new lead, commit `e7309d6`). External-epigraph precedent set.

**2026-05-16:** No new decisions today. Session was a re-discovery of the 2026-05-15 hero shipment (see today's memory log for the correction). The "defense is a losing game" framing Victor floated is parked — possible future section header, not for the hero slot.

---

## 7. Current state by area

### Site — `public/index.html` (live on Vercel)
- **Status:** live at theprimarytrail.com.
- **Current hero (verbatim, in `public/index.html` lines ~640–665):**
  - Epigraph (inside `<blockquote class="hero-epigraph">`): *"The will to win is not nearly so important as the will to prepare to win."* — Vince Lombardi
  - H1: *"For the dad who wants to walk in prepared."*
  - Lead: *"The dad who walks in prepared, organized, and steady shapes the story his kids need told."*
- **AEO/SEO:** Quick Answer block, FAQPage + Organization + WebSite JSON-LD, `dateModified`, sitemap, llms.txt, robots.txt all in place.
- **Open AEO flags:** H2s are statements (need question reframes), $300–$500/hr citation missing, `parentOrganization` JSON-LD decision pending.
- **Waitlist form** = native placeholder with TODO comments. GHL embed swap pending.

### Email infrastructure (DONE 2026-05-15)
- `theprimarytrail.com` is a **secondary domain** in Google Workspace (full separation, not user-alias).
- Mailboxes: `victor@theprimarytrail.com`, `hako@theprimarytrail.com` (separate users, $7/mo each, $14/mo total).
- Free aliases on victor@: `hello@`, `info@`. Display names: "Victor Cuevas" on victor@; "Victor & Hako at The Primary Trail" on hello@/info@.
- Forwarding: `victor@theprimarytrail.com` → Hako's external email + `victor@theknowledgejar.com`.
- Send-as configured in Victor's TKJ Gmail for victor@, hello@, info@. Hako logs into Gmail directly at hako@.
- **SPF + DKIM + DMARC:** complete on all three brand domains (TPT/Namecheap, TPS/Vercel, TKJ/Squarespace). DMARC at `p=none` for monitoring.

### Legal / insurance
- **DBA filing** (Texas SOS or county clerk) — decision locked, filing status to verify. Due 2026-05-23.
- **Attorney advisor** — one Texas family-law attorney to sit on referral panel + review materials. Due 2026-05-16.
- **E&O + cyber liability** — amend TKJ's policy. Due 2026-05-23.
- **Engagement-letter template** + **FTC 2024 Consumer Review Rule clause** — drafted per `tpt-upl-check` skill, attorney review pending. Both due 2026-05-23. Contingent on attorney advisor placement.

### Skills (in `.claude/skills/`)
Six TPT skills registered:
- `tpt-design-system` — locked design tokens, brand book, UI kit.
- `tpt-upl-check` — UPL compliance gate (runs as final check on all customer-facing copy and product decisions).
- `tpt-aeo-seo` — AEO/SEO discipline for user-facing pages.
- `tpt-site-build` — landing page / website conventions.
- `tpt-ghl-funnel` — GoHighLevel funnels and sequences.
- `tpt-customer-research` — dad-interview methodology (Phase 0 sprint).

**Skill chain for new page builds:** `tpt-design-system → tpt-site-build → tpt-aeo-seo → tpt-upl-check`. UPL is always last (the gate).

### About Us bios
Drafts exist (Hako, Victor, duo-intro paragraph) — preserved in `context/memory/2026-05-15.md`. Held for adoption. **Not yet in `public/index.html`.** Adoption gate: `tpt-upl-check` + Victor sign-off. Victor's bio uses abstraction-level only (no case specifics — per case-privacy rule).

---

## 8. Open threads — consolidated as of 2026-05-16

### Strategy / content
- **Decide whether to place "defense is a losing game" anywhere on the site** (section header candidate; not hero). Victor's call.
- **About Us bios adoption** — UPL gate + sign-off then push to `public/index.html`.
- **SOUL.md savings-narrative refresh** — line is stale vs. the live site's "Walk in prepared. Walk in calm. Keep more of your money for your kids."
- **SOUL.md external-epigraph convention** — codify the rule the Lombardi hero set.
- **Tagline disposition** — SOUL.md candidates #4 / proposed #5 no longer compete for the hero slot; may still apply to footer tagline, social bios, or CTA band.
- **State scope at launch** — national vs. state-by-state for course (UPL language implications).
- **Course price point** — target $497–$997 based on competitor research.
- **Course delivery platform pick** — Teachable / Kajabi / Podia / custom.

### Implementation / dev
- **GHL waitlist form embed** — replace placeholder native form in `public/index.html`. Hero block and CTA-band block both. Tag `tpt-waitlist`; trigger welcome email + free "First 7 Things to Do" lead magnet.
- **Square mark-only favicon** (~64–128px). Current horizontal lockup smears at tab size.
- **H2 question reframes** across the page (AEO Layer 4). Five H2s are statements; need to read as questions.
- **External citation for $300–$500/hr lawyer rate claim** (lines ~519, ~598 in `public/index.html`). ABA fee survey or Clio Legal Trends Report.

### Operations
- **DBA filing confirmation** — Assumed Name Certificate at Texas SOS or county clerk.
- **Attorney advisor placement** — due 2026-05-16. Contingency: if it slips, engagement-letter + FTC-clause items slip to Phase 1.
- **E&O policy amendment** — TKJ's existing policy to add TPT as named insured/DBA rider.
- **Cofounder visibility on hello@/info@ inboxes** — Gmail filter forward to Hako, or BCC convention. Currently the "Victor & Hako at The Primary Trail" display name claims a visibility Hako doesn't actually have.
- **Hako's website-update + about-us notes** — pending from 2026-05-15; he was going to paste after his haircut.

### GHL workflow (item 5 from 2026-05-15)
- Build GHL form (`tpt-waitlist` tag), welcome sequence, lead-magnet delivery.
- Add GHL/Mailgun SPF include when GHL starts sending from `theprimarytrail.com`.
- GHL calendar setup (item 3 from 2026-05-15) — unblocked, ready to start.

### Customer research
- **8–12 conversations with dads new to family court** — due 2026-05-16. Use `tpt-customer-research` skill methodology.

### Future / not committed yet
- Convert site from static HTML to Next.js (when more pages are needed).
- TKJ website rebuild → migrate DNS from Squarespace to Vercel (re-add SPF/DKIM/DMARC at the new DNS host).

---

## 9. File map (Agentic OS layout)

```
the-primary-trail/
├── CLAUDE.md                          ← operating manual (read first)
├── ROADMAP.md                         ← phases, milestones, decisions due
├── README.md                          ← website + deploy notes
├── session-catchup-2026-05-16.md      ← THIS DOC
├── mr-t-brief-2026-05-16.md           ← active dev brief for Mr T (favicon, citation, H2 reframes, GHL form embed)
├── public/                            ← Vercel publish root
│   ├── index.html                     ← the live site
│   ├── robots.txt, llms.txt, sitemap.xml, vercel.json
│   └── assets/                        ← logo/, images/, og/, icons/, fonts/
├── context/
│   ├── USER.md                        ← operator profile + collaboration style
│   ├── SOUL.md                        ← brand identity, voice, non-negotiables
│   ├── learnings.md                   ← accumulated corrections per skill
│   └── memory/
│       ├── 2026-04-25.md, 2026-04-26.md, 2026-05-15.md, 2026-05-16.md
└── .claude/skills/                    ← the six TPT skills (see §7)
```

**File-organization rule** (from `learnings.md`): static assets go in `public/assets/<type>/<file>`, never flat in `public/` root. Logos → `public/assets/logo/`. Images → `public/assets/images/`. OG → `public/assets/og/`. Etc.

---

## 10. Reference quick-hits

- **Customer geography (1:1 launch):** Collin and Denton counties, DFW. ~2.3M residents, ~4–5K annual divorce filings, almost no local 1:1 dad coaches. Cordell & Cordell is the dominant attorney brand to position **alongside**, not against.
- **DTPA risk** — every piece of marketing copy gets the bounded-language check. No outcome promises, ever.
- **Pricing (research, not public):** $175/hr 1:1; $700/mo Foundations; $1,200/mo Active Case. Hold for waitlist until Phase 0 close.
- **Vince Lombardi quote in hero** is the precedent for external attributed quotes (see §4 voice rules and §7 site state).
- **Phase 1 target ship:** 2026-07-18.

---

## 11. Three things to know on your very first message in the new chat

1. **No memory layer** — auto-memory is empty on this machine. The repo is the source of truth.
2. **Hero is already shipped** with the Lombardi epigraph. Don't propose to change it unless Victor asks.
3. **Ask Victor what he wants to work on.** The open-thread list above is long; he picks the priority.

End of bootstrap.
