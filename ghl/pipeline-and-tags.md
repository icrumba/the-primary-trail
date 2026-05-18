# GHL Pipeline + Tag Taxonomy

Build first. Everything downstream references stages and tags by name.

Aligned to Gold/Platinum/Diamond tier structure (per pricing infographic, 2026-05-17).

---

## Pipeline: "TPT Customer Journey"

| # | Stage | Entry trigger | Exit trigger |
|---|-------|---------------|--------------|
| 1 | **Waitlist** | Form 1 submit (lead magnet opt-in) | Email 1 sent → auto-move to Nurture Active |
| 2 | **Nurture Active** | Email 1 sent | Email 7 sent → Nurture Complete |
| 3 | **Nurture Complete** | Email 7 sent | Strategy Call booked OR 6 months inactive |
| 4 | **Strategy Call Booked** | Calendar 1 booking | Call date + 30 min passes |
| 5 | **Strategy Call Attended** | Victor/Hako marks attended | Tier picked OR marked Not-Fit |
| 6 | **Tier Considered** | Post-call, contact is weighing tier options | Tier signed (Gold/Platinum/Diamond) OR drops out |
| 7 | **Active Client** | Gold session booked, Platinum/Diamond application approved + onboarded | Engagement off-boarded |

**Custom field on contact:** `Active Tier` — values: `Gold` / `Platinum` / `Diamond` / *(blank)*. Set when contact moves into Active Client stage. Drives tier-specific reporting and segmentation.

**Notes:**
- Stages 1-3 are the email-nurture lane.
- Stages 4-5 are the free Strategy Call lane (front door).
- Stages 6-7 are the tier-decision and active-client lanes.
- Gold (hourly) is the only paid tier that can self-serve via calendar; Platinum and Diamond require application + manual onboarding.

---

## Tags

| Tag | Applied when | Removed when | Purpose |
|-----|--------------|--------------|---------|
| `tpt-waitlist` | Form 1 submit | Never (lifecycle) | Identifies anyone who has ever joined the list |
| `nurture-active` | Email 1 sent | Email 7 sent OR `tpt-strategy-call-booked` added | Identifies who is currently in nurture (pause logic) |
| `nurture-complete` | Email 7 sent | Never | Identifies who finished the welcome sequence |
| `tpt-strategy-call-booked` | Calendar 1 booking | Never | Lifecycle record |
| `tpt-strategy-call-attended` | Victor marks attended | Never | Distinguishes attended from no-show |
| `tpt-strategy-call-noshow` | 30 min past scheduled time + no mark | Never | Triggers no-show follow-up |
| `tpt-gold-active` | Gold session booked + paid | Never | Identifies Gold tier clients |
| `tpt-platinum-applied` | Form 4 submit | Replaced by `tpt-platinum-active` on approval | In-process Platinum applicants |
| `tpt-platinum-active` | Platinum retainer signed + onboarded | Off-boarding | Active Platinum clients |
| `tpt-diamond-applied` | Form 5 submit | Replaced by `tpt-diamond-active` on approval | In-process Diamond applicants |
| `tpt-diamond-active` | Diamond retainer signed + onboarded | Off-boarding | Active Diamond clients |
| `tpt-not-fit` | Marked after Strategy Call if not a fit | Never | Filters out for nurture re-targeting; optional warm referral |

---

## How tags drive segmentation (examples)

- **Re-engagement blast** to dads who finished nurture but never booked the call:
  `nurture-complete` AND NOT `tpt-strategy-call-booked`
- **Tier follow-up** to dads who took the Strategy Call but haven't picked a tier:
  `tpt-strategy-call-attended` AND NOT `tpt-gold-active` AND NOT `tpt-platinum-applied` AND NOT `tpt-diamond-applied` AND NOT `tpt-not-fit`
- **Monthly newsletter** to everyone past the welcome sequence:
  `nurture-complete`
- **Active client roll-up** (count + retention):
  `tpt-gold-active` OR `tpt-platinum-active` OR `tpt-diamond-active`
- **Diamond pipeline** (premium tier inquiries):
  `tpt-diamond-applied` OR `tpt-diamond-active`
- **Win-back** for no-shows:
  `tpt-strategy-call-noshow` AND NOT `tpt-strategy-call-attended`

---

## Workflow design notes

- **Add tag** before sending an email if the email references the tag in its filter
- **Remove tag** as the EXIT step of a sequence, not the entry of the next one (prevents race conditions)
- **Pipeline moves** paired with tag changes — keep them in sync
- **Manual stage moves** (Strategy Call Attended, Tier signed, Active Client) require Victor/Hako to update GHL after the call — this is a known human-in-the-loop step, not a bug
