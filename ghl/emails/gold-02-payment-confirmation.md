# Email: Gold 02 — Payment Confirmation

| Field | Value |
|---|---|
| **File** | `gold-02-payment-confirmation.md` |
| **Trigger** | Stripe payment confirmed *(sent immediately, BEFORE `gold-01-booking-confirmation`)* |
| **Send timing** | Immediate on payment success |
| **Pipeline stage** | Active Client |
| **Tag at send** | `tpt-gold-active` |
| **From** | Victor & Hako `<hello@theprimarytrail.com>` |

## Subject lines
1. Payment received — booking details to follow.
2. Receipt: Gold session — $175.
3. Got it. Confirmation email in a few minutes.

## Preview text
A receipt now, your session details in the next email.

## Body

Quick note to confirm we received your payment of **$175.00 USD** for a Gold session.

You'll get a separate booking confirmation in the next few minutes with the Zoom link, prep instructions, and reschedule link. If it hasn't shown up in 10 minutes, check spam or reply to this and we'll re-send.

— Victor & Hako, The Primary Trail

---

*Receipt details*

- Date: {{payment_date}}
- Amount: $175.00 USD
- Reference: {{stripe_id}}
- Payment method: ending in {{card_last4}}

*The Knowledge Jar LLC, dba The Primary Trail*
*victor@theprimarytrail.com*

---

*The Primary Trail provides coaching and educational services only. We are not lawyers and do not provide legal advice. Information shared is not a substitute for the advice of a licensed attorney in your jurisdiction. Outcomes vary; we make no guarantees about case results.*

## CTA
*None — transactional receipt email.*

## UPL gate
- [x] No legal advice
- [x] No outcome promises (transactional)
- [x] No urgency tactics
- [x] Crisis-appropriate
- [x] Child-best-interest aligned (neutral)
