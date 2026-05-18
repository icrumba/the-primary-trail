# GHL Workflows (4)

Four workflows wire pipeline + tags + calendars + emails + forms together. Build LAST so all references exist.

---

## Workflow 1: Welcome + Nurture

**Entry trigger:** Form 1 (Waitlist) submit
**Pipeline impact:** Waitlist → Nurture Active → Nurture Complete

### Steps

1. **Add tag:** `tpt-waitlist`
2. **Move to stage:** Waitlist
3. **Send Email 1:** `nurture-01-day0-checklist-delivery` — *immediate*
4. **Move to stage:** Nurture Active
5. **Add tag:** `nurture-active`
6. **Wait 1 day** → Send Email 2: `nurture-02-day1-capture`
7. **Wait 2 days** *(Day 3 total)* → Send Email 3: `nurture-03-day3-organize`
8. **Wait 2 days** *(Day 5 total)* → Send Email 4: `nurture-04-day5-reflect`
9. **Wait 2 days** *(Day 7 total)* → Send Email 5: `nurture-05-day7-execute`
10. **Wait 3 days** *(Day 10 total)* → Send Email 6: `nurture-06-day10-what-this-is`
11. **Wait 4 days** *(Day 14 total)* → Send Email 7: `nurture-07-day14-strategy-call-invitation`
12. **Remove tag:** `nurture-active`
13. **Add tag:** `nurture-complete`
14. **Move to stage:** Nurture Complete

### Exit conditions (early)
- **If `tpt-strategy-call-booked` added at any point** → pause nurture; do NOT send remaining emails. They've already converted; continuing to pitch would be off-tone.
- **If contact unsubscribes** → standard GHL handling.

---

## Workflow 2: Strategy Call Lifecycle

**Entry trigger:** Calendar 1 booking
**Pipeline impact:** → Strategy Call Booked → Strategy Call Attended → Tier Considered

### Steps

1. **Add tag:** `tpt-strategy-call-booked`
2. **Move to stage:** Strategy Call Booked
3. **Send Email:** `strategy-call-01-confirmation` — *immediate* (Zoom link, prep guide, reschedule link)
4. **GHL native reminders:** 24-hour + 1-hour SMS/email reminders (use GHL calendar built-ins, no custom email)
5. **Wait until call time + 30 minutes** → check for manual mark by Victor/Hako:
   - **If marked attended:** Add tag `tpt-strategy-call-attended` → Send Email `strategy-call-03-attended-followup` (includes Gold booking link, Platinum/Diamond application links, brief description of tiers) → Move to stage Strategy Call Attended → then auto-move to Tier Considered after 24 hours
   - **If no mark after 4 hours past call time:** Add tag `tpt-strategy-call-noshow` → Send Email `strategy-call-02-noshow` (gentle reschedule invite) → Stay in Strategy Call Booked stage

### Manual steps for Victor/Hako post-call
- Mark contact as **attended** OR **no-show** in GHL within 4 hours of scheduled time
- If attended and not a fit: tag `tpt-not-fit`, optional warm referral
- If attended and tier discussed: the attended follow-up email exposes Gold (book directly) and Platinum/Diamond (apply); contact self-routes from there

---

## Workflow 3: Gold Session Lifecycle

**Entry trigger:** Calendar 2 booking + Stripe payment confirmed
**Pipeline impact:** Active Client (Gold)

### Steps

1. **Add tag:** `tpt-gold-active`
2. **Set custom field:** `Active Tier` = `Gold` *(if not already set)*
3. **Move to stage:** Active Client *(if not already there)*
4. **Send Email:** `gold-02-payment-confirmation` — *immediate* (Stripe receipt acknowledgment)
5. **Send Email:** `gold-01-booking-confirmation` — *5 min after payment* (Zoom link, prep instructions, document upload reminder)
6. **GHL native reminders:** 24-hour + 1-hour built-in reminders
7. **Wait until call time + 30 minutes** → wait for manual mark
8. **When Victor/Hako marks attended:**
   - Send Email `gold-03-attended-followup` within 24 hours (recap + invitation to book another session OR upgrade to Platinum)

### Manual steps for Victor/Hako post-session
- Mark attended in GHL
- The 24-hour follow-up email can be auto-sent if Victor doesn't want to personalize, OR delayed and personalized (recommended for first few clients; automate once the pattern is clear)
- If client expresses interest in Platinum/Diamond after a Gold session, send the application form link directly

---

## Workflow 4: Retainer Application Lifecycle

**Entry trigger:** Form 4 (Platinum) OR Form 5 (Diamond) submit
**Pipeline impact:** → Tier Considered (with applied tag)

### Steps

1. **Add tag:** `tpt-platinum-applied` (Form 4) OR `tpt-diamond-applied` (Form 5)
2. **Move to stage:** Tier Considered
3. **Send Email to applicant:** `platinum-01-application-received` OR `diamond-01-application-received` — *immediate* (acknowledge receipt, set expectation: response within 1 business day)
4. **Send internal notification to Victor + Hako** — *immediate* via GHL internal email or Slack webhook:
   - Subject: `[TPT] New {Platinum|Diamond} Application — {First Name} {Last Name}`
   - Body: pull form responses (especially: where in the case, what they want clarity on, geography for Diamond)
5. **Wait until manual decision by Victor/Hako**

### Manual steps for Victor/Hako post-application
- Review application within 1 business day (per copy in applicant email)
- Schedule a personal follow-up call (either a Strategy Call if they haven't done one, or a tier onboarding call)
- If approved + onboarded:
  - Remove `tpt-platinum-applied` → Add `tpt-platinum-active` (or Diamond equivalent)
  - Set custom field `Active Tier` = `Platinum` or `Diamond`
  - Move to stage Active Client
  - Trigger onboarding workflow (separate playbook — not in this build; could include welcome packet, document organizer template, kickoff session booking)
- If not approved or not a fit:
  - Add `tpt-not-fit`
  - Send personal "thanks, here's what we'd recommend instead" email (Victor writes — not templated)

---

## Workflow design notes

- **Tag race conditions:** add new tags BEFORE removing old ones to prevent gaps in segmentation
- **Manual marking is intentional:** automated "attended" detection from Zoom is unreliable; human-in-the-loop is a feature
- **No-show handling is forgiving:** the no-show email offers easy reschedule, doesn't shame, keeps the contact in the funnel
- **Retainer onboarding is intentionally manual:** Platinum/Diamond clients commit to recurring spend; the first touch after application should be a real human reaching out, not a form-letter auto-flow
- **Internal notifications:** GHL supports both internal emails and webhook integrations to Slack. Pick whichever Victor/Hako will actually see in real time (recommend Slack if it's already in use; otherwise GHL internal email to both victor@ and hako@)
