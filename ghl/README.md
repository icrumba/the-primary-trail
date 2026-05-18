# GHL Build — The Primary Trail

Whole-stack implementation guide. Paste-ready specs for Victor to build in GoHighLevel.

**Status:** Draft, written 2026-05-17 (rev. aligned to Gold/Platinum/Diamond tier structure from Hako's infographic). UPL check pending after Victor reviews voice.
**Skill used:** `tpt-ghl-funnel` — see `.claude/skills/tpt-ghl-funnel/SKILL.md` for methodology.
**Voice gate:** SOUL.md (calm older brother). Every email and form passes the 11pm test.

---

## What's in this folder

```
ghl/
├── README.md                ← this file (build order + dependencies)
├── pipeline-and-tags.md     ← pipeline stages + tag taxonomy
├── calendars.md             ← 2 calendars (free Strategy Call + Gold Hourly)
├── forms.md                 ← 5 forms (waitlist + 2 calendar intakes + Platinum + Diamond applications)
├── workflows.md             ← 4 workflows (welcome+nurture, strategy call, gold session, retainer application)
└── emails/                  ← 15 email templates (drafted in Round 2 — pending)
    ├── nurture-01-day0-checklist-delivery.md
    ├── nurture-02-day1-capture.md
    ├── nurture-03-day3-organize.md
    ├── nurture-04-day5-reflect.md
    ├── nurture-05-day7-execute.md
    ├── nurture-06-day10-what-this-is.md
    ├── nurture-07-day14-strategy-call-invitation.md
    ├── strategy-call-01-confirmation.md
    ├── strategy-call-02-noshow.md
    ├── strategy-call-03-attended-followup.md
    ├── gold-01-booking-confirmation.md
    ├── gold-02-payment-confirmation.md
    ├── gold-03-attended-followup.md
    ├── platinum-01-application-received.md
    └── diamond-01-application-received.md
```

---

## Product structure (per pricing infographic — 2026-05-17)

```
Front door (free):
  Strategy Call — 15 min, complimentary, public calendar link

Paid tiers:
  Gold     — $175/hr  — Ad-hoc hourly support; bookable per session (Stripe-paid calendar)
  Platinum — $700/mo  — Monthly retainer; application-only, manual onboarding
  Diamond  — $1,200/mo — Premium retainer w/ in-person Dallas/Collin; application-only, manual onboarding
```

Hourly is self-serve (Calendar 2). Retainers require an application (Forms 4 + 5) so Victor/Hako can confirm capacity and fit before commitment.

---

## Recommended build order in GHL

1. **Pipeline + tags** (~15 min) — `pipeline-and-tags.md`. Build stages and tag taxonomy first; everything else references them.
2. **Calendars** (~30-45 min each) — `calendars.md`. Strategy Call first (no payment), Gold Hourly second (Stripe wired). Save the booking URLs.
3. **Email templates** (~3-4 hrs total) — `emails/`. Paste each Markdown file into a GHL email template. Headings map to GHL fields.
4. **Forms** (~45 min) — `forms.md`. Form 1 is the waitlist; Forms 2/3 live on calendars; Forms 4/5 are the Platinum/Diamond applications.
5. **Workflows** (~1-2 hrs) — `workflows.md`. These tie everything together. Build last so all references already exist.

**Total estimated GHL build time:** 6-8 hours of focused work. Plan a day.

---

## Funnel overview

```
Visitor enters via either:

  A. Website email form (waitlist)
       → checklist delivery (Email 1)
       → 7-email pillar nurture (Emails 2-6)
       → Strategy Call CTA (Email 7)

  B. Website "Schedule a Complimentary 15-Minute Strategy Call" CTA (direct)
       → Strategy Call booking
       → confirmation + post-call follow-up

Both paths converge at:

  Strategy Call (15 min, free)
       → On the call, Victor/Hako diagnose fit and route to one of:
            • Gold ($175/hr) — book directly from Calendar 2
            • Platinum ($700/mo) — submit application Form 4
            • Diamond ($1,200/mo) — submit application Form 5
            • Not a fit — warm referral, tagged tpt-not-fit
```

---

## Dependencies Victor must provide BEFORE going live

- [ ] **Lead magnet PDF** — "First 7 Things to Do When You're Served — A Calm Checklist" — content not yet written. Required for `nurture-01-day0-checklist-delivery.md`. Separate writing project.
- [ ] **Calendar URLs from GHL** — once built, paste them into the email templates and website CTAs (replace `[STRATEGY_CALL_URL]` and `[GOLD_URL]` placeholders).
- [ ] **Stripe account connected to GHL** — for the Gold hourly calendar.
- [ ] **Refund policy on Gold hourly sessions** — recommend *"Rescheduling welcome up to 24 hours before. No refund after that — the prep work has been done."*
- [ ] **Platinum + Diamond intake review cadence** — how fast does Victor/Hako respond to a submitted application? Recommend 1 business day; copy in `platinum-01` and `diamond-01` says so.
- [ ] **SPF include for GHL/Mailgun sender** — per 2026-05-15 open thread; once GHL starts sending from theprimarytrail.com, add the GHL/Mailgun include to the SPF record at Namecheap.
- [ ] **Attorney advisor review on Our Family Wizard® account access language** — per infographic feedback; the "as a professional" framing needs sign-off before going public.
- [ ] **`tpt-upl-check` pass on all emails + infographic copy** — pending.

---

## Voice + brand gates (run on every email/form/page)

1. **UPL discipline.** No specific-matter legal advice. "We coach, educate, organize" stays the line. Service = "systems and frameworks we used."
2. **Child-best-interest framing.** Every promise oriented around making the dad an effective advocate for his kids. Never "win against mom."
3. **Crisis-appropriate voice.** 11pm test — does this read OK to a dad who just got served? No hype, no urgency, no scarcity.

**Vocabulary to avoid:** crush, win, beat, fight, battle, weapon, hack, secret, exposed, alpha, dad-rights, deadbeat, urgency clichés ("limited spots!").

**Vocabulary to use:** path, framework, plan, prepared, organized, steady, evidence, record, communication, documentation, strategy, prep, the trail, walk it, the kids.
