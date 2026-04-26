# The Primary Trail — website

Static one-page launch site. Mirrors TPS conventions for AEO/brand discipline. Will be migrated to a Next.js app in the next session if/when more pages are needed; the content here transfers cleanly.

## What's here

```
the-primary-trail/
├── index.html         ← the landing page (everything inline)
├── robots.txt         ← AI crawlers allowed (per TPS aeo-seo skill)
├── llms.txt           ← AI agent guidance (per TPS aeo-seo skill)
├── sitemap.xml
├── vercel.json        ← security headers + content-type for llms.txt
├── README.md          ← this file
├── CLAUDE.md          ← project operating manual
├── ROADMAP.md
└── context/           ← USER.md, SOUL.md
```

## Deploy to Vercel — three options

### Option A: drag-and-drop (zero CLI, fastest tonight)

1. Open https://vercel.com/new
2. Click **"Import Third-Party Git Repository"** → close that modal → look for "Drop project here" / "Browse" option (or use the [Vercel deploy drop page](https://vercel.com/new/upload))
3. Drag this entire `the-primary-trail` folder into the drop zone
4. Project name: `the-primary-trail` (or whatever you want)
5. Click **Deploy**
6. Vercel gives you a `*.vercel.app` URL in ~30 seconds — that's your live site

### Option B: Vercel CLI (if you have it installed)

```bash
cd C:\Users\kent2\Dev\the-primary-trail\the-primary-trail
npx vercel       # follow prompts; first run links the project
npx vercel --prod
```

### Option C: GitHub → Vercel (recommended once you're past tonight)

1. `git init` in this folder, commit, push to a private GitHub repo
2. In Vercel, **Import Project** from that repo
3. Every push to `main` auto-deploys

## Point theprimarytrail.com at the deployment

After deploy, in the Vercel project dashboard:
1. Go to **Settings → Domains**
2. Add `theprimarytrail.com` and `www.theprimarytrail.com`
3. Vercel shows you DNS records to add at your registrar (likely an A record + CNAME, or just two CNAMEs if your registrar supports CNAME flattening)
4. Update DNS at the registrar where the domain is registered
5. SSL provisions automatically within ~10 minutes of DNS propagation

## Wiring up the GoHighLevel form

The site currently has a placeholder waitlist form (intercepts submit, shows a thank-you message — no PII captured anywhere). To swap in your GHL form:

1. In GHL, build a single-field email-capture form (name it something like `tpt-waitlist`)
2. Configure the form to apply tag `tpt-waitlist` and trigger your welcome workflow (deliver "First 7 Things to Do" checklist + nurture sequence)
3. In GHL, click **Embed** on the form. You'll get an iframe snippet like:
   ```html
   <iframe src="https://api.leadconnectorhq.com/widget/form/FORM_ID" style="width:100%;border:none;"></iframe>
   ```
4. In `index.html`, find the comment `<!-- WAITLIST FORM` (appears twice — hero and bottom CTA). Replace each `<form class="waitlist" ...>...</form>` block with your GHL iframe. Keep a wrapper `<div class="waitlist">` if needed for styling.
5. Optionally remove the `wireForm(...)` calls at the bottom of `index.html` since the GHL iframe handles its own submit.

## What's intentionally not here yet

- **A logo file (PNG/SVG asset).** Logo currently lives inline as SVG in `index.html` and as the favicon. When you produce a final logo file, drop it in `/public/` and link it.
- **Open Graph image.** When ready, save a 1200×630 OG image as `/og.png` and add `<meta property="og:image" content="https://theprimarytrail.com/og.png">` to `<head>`.
- **Markdown mirror at `/index.md`.** TPS aeo-seo convention — for AI consumption. Stub it after launch if you want to maximize AEO.
- **Cluster/pillar pages.** Phase 1+ work. Static one-pager is enough for tonight's waitlist capture.

## AEO compliance status (per TPS six-layer audit)

- [x] Layer 1 — HTTPS (via Vercel), mobile-first responsive, sub-1.8s LCP achievable on static HTML, AI crawlers allowed in robots.txt
- [x] Layer 2 — `llms.txt` present
- [x] Layer 3 — JSON-LD: Organization, WebSite, FAQPage in `<head>`
- [x] Layer 4 — 40-80 word Quick Answer ✓; H2s as questions/statements ✓; FAQ block (5 Q&A) ✓; visible "Last updated" ✓
- [x] Layer 5 — Founder credited via Organization schema; UPL/legal disclaimer in footer
- [x] Layer 6 — SOUL.md voice (calm older brother) maintained; no outcome promises (DTPA-clean)

## What to do after deploy tonight

1. Verify the live URL renders correctly on phone + desktop
2. DNS the domain
3. Build the GHL form and swap it in
4. Send the URL to 3-5 trusted dads in your network for a soul/voice gut-check before any paid traffic
