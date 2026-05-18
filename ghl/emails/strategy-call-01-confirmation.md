# Email: Strategy Call 01 — Confirmation

| Field | Value |
|---|---|
| **File** | `strategy-call-01-confirmation.md` |
| **Trigger** | Calendar 1 (Strategy Call) booking |
| **Send timing** | Immediate after booking |
| **Pipeline stage** | Strategy Call Booked |
| **Tag at send** | `tpt-strategy-call-booked` |
| **From** | Victor & Hako `<hello@theprimarytrail.com>` |

## Subject lines
1. Booked. Here's the Zoom link and a one-page prep.
2. Your Strategy Call is confirmed.
3. See you {{appointment_date}} — Zoom link inside.

## Preview text
What to expect, what (not) to prepare, and the reschedule link.

## Body

Booked. We've got you on the calendar for **{{appointment_date}} at {{appointment_time}} ({{contact_timezone}})**.

**[Join the Zoom call]({{appointment_join_url}})**

A few quick things so you come ready (which mostly means: don't):

**Length.** 15 minutes. We hold to it tightly so your day stays yours.

**What we'll cover.** A few questions about where you are in the process, what's been hardest, and what — if anything — you've already tried. Toward the end, if it's a fit, we'll talk briefly about which kind of support would actually help.

**What to prepare.** Nothing. Bring whatever's on your mind. If there's a specific document you want us to glance at, mention it in the call.

**If you need to move it.** [Reschedule here]({{reschedule_url}}). No need to explain. Life happens.

**If you can't make it.** Same link, or just reply to this email. We'd rather move it than do a rushed call.

See you soon.

— Victor & Hako

*P.S. We'll send a reminder 24 hours and 1 hour out. That's it on emails from us until then.*

---

*The Primary Trail provides coaching and educational services only. We are not lawyers and do not provide legal advice. Information shared is not a substitute for the advice of a licensed attorney in your jurisdiction. Outcomes vary; we make no guarantees about case results.*

## CTA
- **Button text:** Join the Zoom call
- **Button URL:** `{{appointment_join_url}}` *(GHL fills automatically from calendar)*

## UPL gate
- [x] No legal advice
- [x] No outcome promises
- [x] No urgency tactics
- [x] Crisis-appropriate
- [x] Child-best-interest aligned (neutral)
