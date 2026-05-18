# GHL Forms (5)

| # | Form | Type | Notes |
|---|------|------|-------|
| 1 | Waitlist (Lead Magnet Opt-in) | Standalone | Embed on theprimarytrail.com (hero + CTA band) |
| 2 | Strategy Call Booking Intake | Inline on Calendar 1 | See `calendars.md` |
| 3 | Gold Session Booking Intake | Inline on Calendar 2 | See `calendars.md` |
| 4 | Platinum Retainer Application | Standalone | Linked from infographic + post-Strategy-Call follow-up |
| 5 | Diamond Retainer Application | Standalone | Linked from infographic + post-Strategy-Call follow-up |

---

## Form 1: Waitlist (Lead Magnet Opt-in)

**Purpose:** capture email in exchange for the "First 7 Things to Do" checklist. Front-door of the email funnel.

| Setting | Value |
|---|---|
| **Slug** | `tpt-waitlist` |
| **Embed locations** | Hero section + CTA band on theprimarytrail.com (replaces existing placeholder `<form class="waitlist">` blocks) |
| **Embed type** | iframe (recommend over script for predictability) |

### Fields
1. **Email** *(required, validated)*
   - Placeholder: `Your email`
   - Screen-reader label: `Email address`

### Submit button
- **Text:** `Send me the checklist`
- **Color:** site amber (matches existing `--tpt-amber` token)

### Helper microcopy (under the form)
> Free "First 7 Things to Do" checklist. We won't share your address.

### Confirmation state (replaces form on submit)
> Sent. Check your inbox in the next minute or two.

### Tags applied on submit
- `tpt-waitlist`

### Workflow triggered on submit
- **Workflow 1: Welcome + Nurture**

### Mobile / responsive notes
- Verify embed renders cleanly down to ~360px viewport
- `loading="lazy"` on the iframe
- Explicit height attribute to prevent layout shift

---

## Form 2: Strategy Call Booking Intake

**Where it lives:** on Calendar 1 (`/strategy-call`), inline with the booking flow.

**See:** `calendars.md` → Calendar 1 → Intake form fields.

---

## Form 3: Gold Session Booking Intake

**Where it lives:** on Calendar 2 (`/gold-session`), inline with the booking flow.

**See:** `calendars.md` → Calendar 2 → Intake form fields.

---

## Form 4: Platinum Retainer Application

**Purpose:** application form for the $700/mo Platinum tier. Routes to Victor/Hako for manual review and onboarding.

| Setting | Value |
|---|---|
| **Slug** | `tpt-platinum-application` |
| **Embed locations** | Linked from Platinum tier card on theprimarytrail.com (CTA: *"Apply for Platinum"*) + included in Strategy Call attended follow-up email |
| **Embed type** | Standalone page (GHL form on its own URL) |

### Fields

1. **First name** *(required)*
2. **Last name** *(required)*
3. **Email** *(required, validated)*
4. **Phone** *(required, US format)*
5. **County / state** *(required dropdown)*
6. **"Where are you in your case right now?"** *(required text, 500 char)*
   - *Helper:* "Pre-filing, recently served, contested in progress, post-final-order with modifications — whatever fits. Brief is fine."
7. **"What does support look like for you right now? (current attorney, mediator, coach, etc.)"** *(optional text, 300 char)*
8. **"What's the most important thing for you to be able to do better in the next 30 days?"** *(required text, 500 char)*
9. **"Have you already had a Strategy Call with us?"** *(required radio: Yes / No / Scheduled)*
   - If "No" → display helper text: *"No problem — we recommend starting with a free Strategy Call so we can talk through fit before committing to a retainer. We'll reach out either way."*
10. **"Anything else we should know?"** *(optional text, 1000 char)*

### Submit button
- **Text:** `Submit application`

### Confirmation state

> Application received.
>
> Victor or Hako will reach out within one business day to talk through fit and next steps. If you haven't had a Strategy Call yet, that's where we'll start.
>
> — Victor & Hako

### Tags applied on submit
- `tpt-platinum-applied`

### Workflow triggered on submit
- **Workflow 4: Retainer Application Lifecycle** (Platinum branch — see `workflows.md`)

---

## Form 5: Diamond Retainer Application

**Purpose:** application form for the $1,200/mo Diamond tier. Same flow as Platinum but flagged for the premium tier — requires confirming Dallas/Collin geography for in-person components.

| Setting | Value |
|---|---|
| **Slug** | `tpt-diamond-application` |
| **Embed locations** | Linked from Diamond tier card on theprimarytrail.com (CTA: *"Apply for Diamond"*) + included in Strategy Call attended follow-up email |
| **Embed type** | Standalone page |

### Fields

(All fields from Form 4, plus the following additional ones)

11. **"Are you in or within reasonable driving distance of Dallas or Collin County?"** *(required radio: Yes / No)*
    - Helper text: *"Diamond includes one in-person session per month and optional attendance at select meetings. If you're outside the area, we may suggest Platinum instead — we'll talk it through."*
12. **"Roughly how many parenting facilitation, mediation, or evaluation events are on your calendar in the next 90 days?"** *(optional dropdown: None / 1 / 2-3 / 4+)*

### Submit button
- **Text:** `Submit application`

### Confirmation state

> Application received.
>
> Victor or Hako will reach out within one business day to talk through fit, capacity, and next steps. If you haven't had a Strategy Call yet, that's where we'll start.
>
> — Victor & Hako

### Tags applied on submit
- `tpt-diamond-applied`

### Workflow triggered on submit
- **Workflow 4: Retainer Application Lifecycle** (Diamond branch — see `workflows.md`)
