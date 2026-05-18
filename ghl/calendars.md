# GHL Calendars (2)

Aligned to pricing infographic: free Strategy Call (front door) + Gold Hourly (ad-hoc paid).

Platinum and Diamond are **application-only** (no self-serve calendar) — see `forms.md`.

---

## Calendar 1: Strategy Call (Free, 15 minutes)

**Purpose:** 15-minute complimentary call to understand the dad's situation, confirm fit, and discuss which tier of support (Gold / Platinum / Diamond) makes sense. Matches the infographic CTA: *"Schedule a Complimentary 15-Minute Strategy Call Today."*

| Setting | Value |
|---|---|
| **Slug** | `/strategy-call` |
| **Duration** | 20 minutes (15 active + 5 buffer) |
| **Type** | Free (no payment) |
| **Calendar assignment** | Round-robin Victor + Hako *(or Hako primary, Victor backup — Victor's call)* |
| **Availability** | *Victor to set — recommend M-F evenings + Saturday mornings; avoid Sunday mornings* |
| **Time zone** | America/Chicago (display visitor's local with override) |
| **Buffer time** | 15 min before, 15 min after |
| **Notice period** | 12 hours minimum |
| **Booking window** | Up to 14 days out |
| **Reschedule policy** | Allowed up to 4 hours before |
| **Confirmation redirect** | *(optional thank-you URL — leave blank for default GHL confirmation)* |

### Intake form fields (on the calendar)

1. **First name** *(required)*
2. **Last name** *(required)*
3. **Email** *(required, validated)*
4. **Phone** *(required, US format — for SMS reminder + day-of contact)*
5. **County / state** *(required dropdown — drives Texas vs. other filtering; Platinum/Diamond Texas tier eligibility)*
6. **"In one sentence, where are you in the process?"** *(required text, 250 char max)*
   - *Helper:* "Pre-filing, recently served, in the middle of it, post-final-order — whatever fits. No detail needed."
7. **"Anything you want us to know before the call?"** *(optional text, 500 char max)*

### Confirmation message (shown immediately on booking)

> Booked. You'll get a confirmation email in a minute with the Zoom link and a one-page prep guide.
>
> A few things:
> - The call is 15 minutes. We'll ask about your situation, what you've tried, and what's hurting most. Toward the end we'll talk about what kind of support would actually move the needle for you.
> - Nothing to prepare. Bring what's on your mind.
> - If you need to reschedule, the email has the link.
>
> See you soon.
> — Victor & Hako

### Tags applied on booking
- `tpt-strategy-call-booked`

### Workflow triggered on booking
- **Workflow 2: Strategy Call Lifecycle** (see `workflows.md`)

---

## Calendar 2: Gold Hourly Session ($175/hr)

**Purpose:** Ad-hoc paid hourly support for Gold-tier clients. Bookable per session. The infographic positions Gold as *"Ad hoc access to consultation via secure phone or Zoom"* and *"Strategic guidance for immediate challenges and decisions."*

| Setting | Value |
|---|---|
| **Slug** | `/gold-session` |
| **Duration** | 60 minutes (active) + 15 min buffer |
| **Type** | Paid (Stripe wired) |
| **Price** | `$175.00` |
| **Refund policy** | *Recommend: "Rescheduling welcome up to 24 hours before. No refund after that — the prep work has been done."* |
| **Calendar assignment** | Round-robin Victor + Hako *(or whichever did the Strategy Call — recommend continuity)* |
| **Availability** | *Victor to set — recommend weekday business/evening hours; this is paid focused work* |
| **Buffer time** | 15 min before, 15 min after |
| **Notice period** | 24 hours minimum |
| **Booking window** | Up to 21 days out |
| **Reschedule policy** | Allowed up to 24 hours before |
| **Who can book** | Public link (anyone can book Gold sessions without an application) |

### Intake form fields (kept light — they've either already done a Strategy Call or know what they want)

1. **First name** *(required, pre-filled if known)*
2. **Last name** *(required, pre-filled if known)*
3. **Email** *(required, pre-filled if known)*
4. **Phone** *(required)*
5. **"What do you want to focus this session on?"** *(required text, 500 char)*
   - *Helper:* "A specific question, a document to review, a decision to make, a conversation to prep for — whatever's at the top of your list this week."
6. **"Any documents to share before the session?"** *(optional — file upload field, max 10MB, PDF/DOC/DOCX)*
7. **Payment** *(Stripe — GHL handles)*

### Confirmation message (shown immediately on booking)

> Paid and booked. You'll get a confirmation email with the Zoom link and a quick prep note.
>
> A few things:
> - The session is 60 minutes of focused working time.
> - Send any documents at least 4 hours before so we can come prepared.
> - If you need to reschedule, the email has the link.
>
> See you soon.
> — Victor & Hako

### Tags applied on booking
- `tpt-gold-active`

### Workflow triggered on booking
- **Workflow 3: Gold Session Lifecycle** (see `workflows.md`)

---

## Why Platinum and Diamond are NOT calendars

Platinum ($700/mo) and Diamond ($1,200/mo) are monthly retainers — recurring commitments with capacity implications for Victor and Hako. Self-serve booking would create commitments before Victor/Hako can confirm:
- Whether the case fits the retainer model
- Whether current capacity allows another active client at that tier
- Whether the dad's geography supports Diamond (Dallas / Collin in-person)

For these reasons, Platinum and Diamond use **application forms** (`forms.md` → Forms 4 and 5) that route to Victor/Hako for manual review, followed by an onboarding call. See `workflows.md` → Workflow 4: Retainer Application Lifecycle.
