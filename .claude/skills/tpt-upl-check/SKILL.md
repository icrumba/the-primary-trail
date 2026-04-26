---
name: tpt-upl-check
description: >
  UPL (Unauthorized Practice of Law) and DTPA (Texas Deceptive Trade Practices Act)
  compliance gate for The Primary Trail. Final gate on ALL customer-facing copy,
  product features, partnerships, and offerings before shipping. Triggers on:
  "UPL check", "compliance review", "is this clean", "review this copy",
  and automatically as the last step in any tpt-aeo-seo, tpt-site-build, or
  tpt-ghl-funnel deliverable. Does NOT trigger for internal-only documents.
---

# tpt-upl-check Skill — UPL & DTPA Compliance Gate

The Primary Trail operates as coaching and education, not legal services. Texas draws one of the sharpest UPL lines in the country (Tex. Gov. Code § 81.101; Tex. Penal Code §§ 38.122–38.123) and the DTPA (Bus. & Com. Code Ch. 17) creates real liability for marketing claims. This skill is the final gate.

## Outcome
A pass/fail review of any customer-facing piece. If it fails, a flagged rewrite or escalation to Victor.

## Steps

1. **Read the piece.** Identify the audience (prospect / customer / public / partner) and the medium (page / email / ad / SOP / FAQ).
2. **Run the UPL check.** See `references/upl-line.md` for the safe/yellow/red list.
3. **Run the DTPA check.** See `references/dtpa-line.md` for forbidden phrasing and safe alternatives.
4. **Run the OFW rule.** If Our Family Wizard is mentioned, the "we never log into your account" rule must be visible. See `references/ofw-rule.md`.
5. **Run the custody-evaluation rule.** If evaluations are mentioned, the "authentic, never scripted" rule must be visible.
6. **Run brand non-negotiables.** Cross-check `context/SOUL.md`: child-best-interest framing, calm-older-brother voice, no hype.
7. **Decide.** PASS / REWRITE / ESCALATE. If REWRITE, propose a safe version. If ESCALATE, flag the specific line crossed.

## The lines (memorize)

### Safe (we do this)
Education from published court information. Coaching on communication, mindset, tone. Document organization, evidence logging, parenting journals. Reviewing draft messages the client wrote (not drafting from scratch). Referrals to licensed attorneys.

### Yellow (caution)
State-specific procedural guidance phrased as advice rather than education. "Use this form" suggestions. Anything naming the client's specific case in tactical recommendations.

### Red (never)
Drafting motions or pleadings for a specific case. Predicting case outcomes. Advising on specific legal strategy in a specific matter. Appearing at a hearing as advocate. Negotiating with opposing counsel. Selecting forms for the client. Logging into the client's OFW account.

## DTPA forbidden phrasing
"Better outcomes." "Win." "Beat." "Guaranteed." "Extraordinary results." "Save $X,XXX" without documented basis. Outcome promises of any kind.

## DTPA safe phrasing
"Education, preparation, support, and organization." "Designed to help." "Based on the framework, dads typically..." (with caveat).

## Required disclaimers (every customer-facing surface)
"The Primary Trail provides coaching and educational services only. We are not lawyers and do not provide legal advice. Information shared is not a substitute for the advice of a licensed attorney in your jurisdiction. Outcomes vary; we make no guarantees about case results."

## Anti-patterns
- Approving copy because the SPIRIT is fine when the LETTER fails — DTPA doesn't read spirit.
- Treating disclaimers as a magic shield — they help but don't immunize against scope creep.
- Skipping the gate on "marketing fluff" — DTPA catches that exact stuff.

## References
- `references/upl-line.md` — full UPL safe/yellow/red list (to be added).
- `references/dtpa-line.md` — DTPA forbidden/safe phrasing pairs (to be added).
- `references/ofw-rule.md` — Our Family Wizard policy (to be added).
- `references/engagement-letter.md` — required clauses for 1:1 client agreements (to be added).
- Vic-Hako research (uploads, 2026-04-25) — full Texas legal landscape.
- `context/SOUL.md` — brand non-negotiables.
- `context/learnings.md` — past UPL/DTPA flags and corrections.
