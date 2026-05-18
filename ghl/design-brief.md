# GHL Design Brief — Apply The Primary Trail Brand Inside GoHighLevel

The site and GHL surfaces (forms, calendars, emails, landing pages) need to share one brand. This file maps the locked design tokens to specific GHL controls so Victor can rebuild visual consistency anywhere GHL exposes a setting.

**Reference:** `.claude/skills/tpt-design-system/` (the canonical design system).
**Voice gate:** every email/page passes the 11pm test — calm older brother voice, no hype.

---

## Colors — paste these hex values into every GHL color picker

| Token | Hex | Used for |
|---|---|---|
| **Primary green** | `#1F3F2E` | Headings, secondary CTA borders, links, button hover fill |
| **Amber accent** | `#C97B27` | Primary CTA fill, italic emphasis spans, sequence numbers |
| **Cream page** | `#F5EFE3` | Default page / form background |
| **Cream alternate** | `#EFE7D5` | Alternating section background (e.g., savings bar) |
| **Cream deeper** | `#ECE4D2` | Status pills, deeper grounds |
| **Card white** | `#FBF8F1` | Card surfaces, button text on dark fills |
| **Charcoal** | `#1F1F1F` | Body text |
| **Warm gray** | `#5C5A53` | Muted/secondary text, helper microcopy, footer disclaimer |
| **Line / border** | `#DCD3BE` | Hairlines, input borders, card borders |
| **Green dark** | `#142B1F` | Footer background, deep CTA band |

**There is no pure white anywhere on the brand.** Always use the cream values.

---

## Fonts — Google Fonts (load both in GHL's font settings)

| Use | Family | Weights to load |
|---|---|---|
| Headings (H1–H3, pull quotes) | **Lora** (serif) | 300, 400, 500, 600, 700 — italics: 400 |
| Body, buttons, labels, eyebrows | **Inter** (sans) | 300, 400, 500, 600 |

If GHL asks for a CSS `@import`:
```css
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');
```

**Weight discipline:** H1 = Lora 300 (feather light — never bold). H2 = Lora 400. Body = Inter 400. Lead paragraph = Inter 300. Eyebrows / pillar labels / CTA text = Inter 600.

**Body text size = 19px** (not 16px). Audience reads on phones at midnight; readability is a kindness.

---

## Buttons / CTAs — the locked pill convention

Every primary and secondary CTA in the brand is **pill-shaped, letter-spaced, two-state**.

| Property | Value |
|---|---|
| **Border radius** | `9999px` (pill) |
| **Padding** | `1.25rem 2.5rem` (~52px tall, generous touch target) |
| **Letter spacing** | `0.1em` |
| **Font** | Inter 400, 16px |
| **Primary fill** | `#C97B27` (amber) → `#1F3F2E` (green) on hover |
| **Primary text** | `#FBF8F1` (warm white) — stays the same on hover |
| **Secondary fill** | Transparent, `1px solid #1F3F2E` border, green text → on hover fill becomes green and text becomes warm-white |
| **Transition** | `0.15s cubic-bezier(0.4, 0, 0.2, 1)` |

**Never** use square buttons, gradient fills, drop shadows, or icon-prefixed buttons in GHL.

---

## Forms — Form 1 (waitlist email capture)

For the form Victor is building NOW.

### GHL Sites → Forms settings

| Setting | Value |
|---|---|
| Form background | `#F5EFE3` cream |
| Field background | `#FBF8F1` warm-white |
| Field border | `1px solid #DCD3BE` |
| Field border on focus | `#1F3F2E` green |
| Field border radius | `4px` |
| Field padding | `0.95rem 1rem` |
| Field font | Inter 400, 16px |
| Field text color | `#1F1F1F` charcoal |
| Placeholder color | `#5C5A53` warm gray |
| Submit button | Amber pill per Buttons table above |
| Submit button text | `Send me the checklist` |
| Helper microcopy *(below field)* | `Free "First 7 Things to Do" checklist. We won't share your address.` |
| Helper microcopy font | Inter 400, 0.85rem, `#5C5A53` warm gray |
| Helper microcopy spacing | 0.5rem above |
| Confirmation message *(on submit)* | `Sent. Check your inbox in the next minute or two.` |

### Custom CSS to paste if GHL allows

```css
/* GHL form override — Primary Trail brand */
.ghl-form, .form-builder--container {
  font-family: 'Inter', sans-serif !important;
  background: #F5EFE3 !important;
  color: #1F1F1F !important;
}
.ghl-form input[type="email"], .ghl-form input[type="text"] {
  background: #FBF8F1 !important;
  border: 1px solid #DCD3BE !important;
  border-radius: 4px !important;
  padding: 0.95rem 1rem !important;
  font-size: 16px !important;
  color: #1F1F1F !important;
  transition: border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}
.ghl-form input:focus {
  border-color: #1F3F2E !important;
  outline: none !important;
}
.ghl-form button[type="submit"], .ghl-form .btn-primary {
  background: #C97B27 !important;
  color: #FBF8F1 !important;
  border: none !important;
  border-radius: 9999px !important;
  padding: 1.25rem 2.5rem !important;
  font-family: 'Inter', sans-serif !important;
  font-weight: 400 !important;
  letter-spacing: 0.1em !important;
  font-size: 16px !important;
  cursor: pointer;
  transition: background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}
.ghl-form button[type="submit"]:hover {
  background: #1F3F2E !important;
}
```

(Selectors may need adjustment — inspect element in GHL preview if it's not picking up. The `!important` flags are intentional to override GHL's defaults.)

---

## Email templates — apply brand to every nurture / transactional email

All 13 email files in `ghl/emails/` are Markdown bodies. When you paste them into GHL's email builder, apply this template wrapper.

### Email-wide settings

| Setting | Value |
|---|---|
| Email background | `#F5EFE3` cream (or `#EFE7D5` for alternation if multi-section) |
| Content background | `#FBF8F1` warm-white (centered card, max 600px wide) |
| Body font | Inter 400, 19px (drop to 16-17px if 19 causes mobile rendering issues) |
| Body text | `#1F1F1F` charcoal |
| Body line height | 1.65 |
| Heading font | Lora 400 (Lora 300 for the larger H1 if used) |
| Heading color | `#1F3F2E` forest green |
| Link color | `#1F3F2E` green → `#C97B27` amber on hover |
| Footer text | Inter 400, 0.85rem, `#5C5A53` warm gray |
| Footer background | `#142B1F` green-dark (text becomes warm-white `#FBF8F1`) |

### Email button (CTA inside emails)

Use the same pill convention:
- Background: `#C97B27` amber
- Text: `#FBF8F1` warm-white
- Border radius: `9999px`
- Padding: `0.95rem 2rem`
- Font: Inter 500, 16px
- Letter-spacing: `0.05em` *(slightly tighter than site buttons — email rendering varies)*
- Display: inline-block, centered in its row

### Email footer disclaimer (UPL — required per `tpt-upl-check`)

Already in every email file's body. When GHL adds its own legal footer (unsubscribe, address), keep them both — the UPL disclaimer is a brand/compliance statement; the GHL footer is CAN-SPAM compliance. Both are needed.

### Header in emails (optional)

If using a header logo: drop in `assets/logo/logo.png` at max-width 200px, centered, with 1.5rem padding above and 2rem below. Background: cream `#F5EFE3`.

---

## Calendar booking pages (Strategy Call, Gold session)

When you build Calendars 1 and 2:

| Setting | Value |
|---|---|
| Calendar page background | `#F5EFE3` cream |
| Calendar heading | Lora 400, green `#1F3F2E` |
| Date picker accent | `#1F3F2E` green for selected; `#C97B27` amber as secondary hover |
| Available time slots | warm-white `#FBF8F1` cards with `1px solid #DCD3BE` border, pill border-radius `9999px` *(small pill, e.g. 0.5rem 1rem)* |
| Selected time slot | `#1F3F2E` green fill, warm-white text |
| Continue button | Amber pill per Buttons table above |
| Intake form fields | Per Form 1 settings above |
| Confirmation page | Cream background, Lora 400 heading, Inter 400 body |

---

## Anti-patterns inside GHL — never do these

- GHL's default purple / blue accent colors → replace with amber `#C97B27`
- System font fallback (Arial, Helvetica) → load Lora and Inter
- Square buttons → always pill (`9999px`)
- GHL's stock icon library → no icons; use numerals if you need sequence
- Emoji in subject lines or body → none, ever
- "Limited spots!" / countdown timers / urgency banners → absolute no
- Drop shadows under buttons → only one shadow exists in the brand: `0 8px 24px rgba(31, 63, 46, 0.08)` on card hover; nowhere else
- "Click here" generic link text → write the actual action ("Schedule a Strategy Call", "Download the checklist")
- Multi-color email backgrounds → cream + warm-white only; deep green allowed in a single footer band

---

## Quick-reference card for Victor (print/screenshot this)

```
Brand colors (paste into GHL color pickers):
  Primary green:   #1F3F2E   (headings, hover, links)
  Amber:           #C97B27   (primary CTA fill, accents only)
  Cream page:      #F5EFE3   (default background)
  Card white:      #FBF8F1   (form fields, cards, button text)
  Charcoal:        #1F1F1F   (body text)
  Warm gray:       #5C5A53   (muted text, helper microcopy)
  Border:          #DCD3BE   (hairlines, input borders)

Fonts (Google Fonts in GHL):
  Headings:        Lora 300/400 (italic 400 for emphasis)
  Body / buttons:  Inter 300/400/500/600

Buttons (always pill-shaped):
  Border radius:   9999px
  Padding:         1.25rem 2.5rem
  Letter spacing:  0.1em
  Fill:            #C97B27 amber → #1F3F2E green on hover
  Text color:      #FBF8F1 warm-white

Body type size:    19px
No emoji, no square buttons, no urgency tactics.
```

---

## Reference

- Tokens source: `.claude/skills/tpt-design-system/colors_and_type.css`
- Brand book: `.claude/skills/tpt-design-system/README.md`
- Component reference: `.claude/skills/tpt-design-system/ui_kits/website/`
- Voice rules: `context/SOUL.md`
- Compliance gates: `.claude/skills/tpt-upl-check/SKILL.md`
