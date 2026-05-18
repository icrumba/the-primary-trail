# Email: Gold 01 — Booking Confirmation

| Field | Value |
|---|---|
| **File** | `gold-01-booking-confirmation.md` |
| **Trigger** | Calendar 2 (Gold Session) booking + payment confirmed |
| **Send timing** | 5 minutes after payment confirmation (`gold-02`) |
| **Pipeline stage** | Active Client |
| **Tag at send** | `tpt-gold-active` |
| **From** | Victor & Hako `<hello@theprimarytrail.com>` |

## Subject lines
1. Gold session confirmed — Zoom link inside.
2. Booked. Here's what to send over before we meet.
3. See you {{appointment_date}} — prep note inside.

## Preview text
Zoom link, prep note, and a reminder about documents.

## Body

Paid and confirmed. Here's the working session info:

- **When:** {{appointment_date}} at {{appointment_time}} ({{contact_timezone}})
- **Length:** 60 minutes
- **Where:** **[Zoom link]({{appointment_join_url}})**

A few things to make the hour count:

**1. You told us this is what you want to focus on:**

> {{focus_response}}

We'll structure the hour around that. If something changes between now and then, just reply to this email.

**2. Documents.** If you have anything you want us to look at — texts, emails, a draft response, a court document, a communication log — send them at least 4 hours before the session. Reply to this email or use [this upload link]({{upload_url}}). We need the lead time to come prepared, not to skim during the call.

**3. Setting.** Find a quiet hour. Headphones if you can. Sometimes the hardest part is the kids walking in mid-sentence.

**4. What we won't do.** We won't give legal advice. If something comes up that needs a lawyer's opinion, we'll tell you that and help you think about who to ask.

**If you need to move it,** the [reschedule link]({{reschedule_url}}) is here. Up to 24 hours before is no problem.

See you soon.

— Victor & Hako

---

*The Primary Trail provides coaching and educational services only. We are not lawyers and do not provide legal advice. Information shared is not a substitute for the advice of a licensed attorney in your jurisdiction. Outcomes vary; we make no guarantees about case results.*

## CTA
- **Button text:** Join the Zoom call
- **Button URL:** `{{appointment_join_url}}`

## UPL gate
- [x] No legal advice — explicitly disclaimed
- [x] No outcome promises
- [x] No urgency tactics
- [x] Crisis-appropriate
- [x] Child-best-interest aligned (neutral)
