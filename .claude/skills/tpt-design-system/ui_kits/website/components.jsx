/* The Primary Trail — Website UI Kit components.
   Modular React components recreating the live marketing site.
   Each component is exposed on window for use across script tags. */

/* ============================================================
   NAV — sticky-feeling top bar with the logo lockup, only.
   The live site has no nav links yet (one-page launch).
   ============================================================ */
function TptNav({ logoSrc = "../../assets/logo/logo.png" }) {
  return (
    <nav className="tpt-nav">
      <div className="container">
        <a className="brand-mark" href="#" aria-label="The Primary Trail home">
          <img src={logoSrc} alt="The Primary Trail" className="brand-logo" />
        </a>
      </div>
    </nav>
  );
}

/* ============================================================
   WAITLIST FORM — single-field email capture.
   onSubmitted callback fires after the in-page success swap.
   ============================================================ */
function WaitlistForm({ id = "waitlist", helperText = "Get the free \"First 7 Things to Do\" checklist when you join." }) {
  const [submitted, setSubmitted] = React.useState(false);
  function handle(e) {
    e.preventDefault();
    setSubmitted(true);
  }
  if (submitted) {
    return (
      <div className="form-success visible" role="status">
        Thanks. We'll be in touch with the free checklist and waitlist updates.
      </div>
    );
  }
  return (
    <form className="waitlist" id={id} aria-label="Join the waitlist" onSubmit={handle}>
      <input type="email" name="email" placeholder="Your email" required aria-label="Email address" />
      <button type="submit" className="btn-primary">JOIN THE WAITLIST</button>
      <span className="tiny">{helperText}</span>
    </form>
  );
}

/* ============================================================
   HERO — H1 (Lora 300), lead, waitlist form.
   ============================================================ */
function TptHero() {
  return (
    <section className="tpt-hero">
      <div className="container">
        <div className="narrow">
          <h1>A clear path through family court, built for dads who want to do this right.</h1>
          <p className="lead">Get the framework, the language, and the discipline to walk in prepared. Save thousands in legal fees. Show up for your kids.</p>
          <WaitlistForm id="waitlist-hero" />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   QUICK ANSWER — AEO 40-80 word answer block on warm-white.
   ============================================================ */
function TptQuickAnswer() {
  return (
    <section className="tpt-qa">
      <div className="container">
        <div className="narrow">
          <p>The Primary Trail is a coaching and education service for dads new to family court. We don't give legal advice. We teach you how to capture what matters, organize it cleanly, communicate without hurting your case, and bring your lawyer the kind of preparation most dads only learn the hard way. The result: thousands of dollars saved, a credible record, and a clearer path through.</p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PILLAR — single card. Use within <PillarGrid />.
   ============================================================ */
function Pillar({ number, label, title, body, variant }) {
  const cls = "pillar" + (variant === "execute" ? " pillar-execute" : "");
  return (
    <div className={cls}>
      <span className="pillar-number">{number}</span>
      <span className="pillar-label">{label}</span>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

/* ============================================================
   PILLARS — section with forest aerial bg + glass overlay.
   The four-pillar framework is the brand's locked visual signature.
   ============================================================ */
function TptPillars() {
  return (
    <section className="tpt-pillars">
      <div className="container">
        <div className="narrow">
          <span className="tpt-eyebrow">THE FRAMEWORK</span>
          <h2>The four pillars: <span className="tpt-heading-accent">Capture, Organize, Reflect, Execute.</span></h2>
          <p>Every part of the program maps to one of four pillars. They're how dads stop bleeding money and start walking the trail with a plan.</p>
        </div>
        <div className="pillar-grid">
          <Pillar number="01" label="CAPTURE"  title="Get it all in one place"        body="Every email, text, voicemail, photo, screenshot, and date. Captured, timestamped, and organized. Most dads lose thousands of dollars right here, by failing to capture what they should have." />
          <Pillar number="02" label="ORGANIZE" title="Build the timeline"             body="Turn the pile into a timeline, themes, and evidence categories your lawyer can actually use. Lawyers charge $300 to $500 an hour to do this. We teach you to bring it pre-organized." />
          <Pillar number="03" label="REFLECT"  title="Stay grounded. Watch your tone." body="The judgment layer. AI-assisted help to stay grounded, check your tone before you hit send, and spot patterns. Stop torpedoing your own case in the heat of the moment." />
          <Pillar number="04" label="EXECUTE"  title="Hand it off, prepared"          body="Package the case for your lawyer, or where allowed, for direct filing. Tighter case. Less time billed. A better outcome for the kids." variant="execute" />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SAVINGS BAND — brand promise pull-quote on cream-warm.
   THE EXACT WORDING IS LOCKED. Do not paraphrase.
   ============================================================ */
function TptSavingsBand() {
  return (
    <section className="tpt-savings">
      <div className="container">
        <blockquote className="savings-quote">
          <p>Walk in prepared. Walk in calm. Keep more of your money for your kids.</p>
          <cite className="savings-attribution">THE PRIMARY TRAIL PROMISE</cite>
        </blockquote>
      </div>
    </section>
  );
}

/* ============================================================
   OFFER CARD + OFFERINGS GRID
   ============================================================ */
function OfferCard({ status, statusLabel, title, body, ctaLabel, href = "#waitlist-cta" }) {
  return (
    <div className="offer">
      <span className={"offer-status " + status}>{statusLabel}</span>
      <h3>{title}</h3>
      <p>{body}</p>
      <a href={href} className="cta">{ctaLabel} →</a>
    </div>
  );
}

function TptOfferings() {
  return (
    <section className="tpt-offerings">
      <div className="container">
        <div className="narrow">
          <span className="tpt-eyebrow">OFFERINGS</span>
          <h2>What's coming, and <span className="tpt-heading-accent">what's available now.</span></h2>
        </div>
        <div className="offer-grid">
          <OfferCard status="free"   statusLabel="Free"                   title="The First 7 Things to Do"  body="A calm, concrete checklist for the dad who just got served, or who knows it's coming. Free when you join the waitlist." ctaLabel="Get the checklist" />
          <OfferCard status="coming" statusLabel="Coming soon"             title="The Primary Trail Course"  body="Self-paced course covering the full Capture → Organize → Reflect → Execute framework. Founding-member pricing for waitlist members." ctaLabel="Join the waitlist" />
          <OfferCard status="open"   statusLabel="Apply for early access"  title="1:1 Coaching"              body="Premium tier for dads who want a coach walking the trail with them. Limited slots at launch. Texas-based, with in-person availability in Collin and Denton counties." ctaLabel="Apply for a slot" />
          <OfferCard status="coming" statusLabel="After launch"            title="Private Community"         body="A private space for dads on the trail. Peer support, monthly Q&As, and accountability for the work. Opens after the course ships." ctaLabel="Get notified" />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   WHO — warm-cream section with emphasis pull-quote.
   ============================================================ */
function TptWhoFor() {
  return (
    <section className="tpt-who">
      <div className="container">
        <div className="narrow">
          <span className="tpt-eyebrow">WHO WE'RE FOR</span>
          <h2>Who this is for.</h2>
          <p>Dads new to family court. Not deadbeats. Not activists. Not trying to "win against mom." Working dads who love their kids and want to walk into a hard process organized, calm, and credible.</p>
          <p>Family court evaluates one thing above all else: what's best for the children. Our entire framework is built around helping you become the most effective advocate for that, in the eyes of the court that's actually watching.</p>
          <p className="emphasis">If you've just been served, or you can see the storm coming, or you're staring at custody papers at 11pm wondering where to start, this is for you.</p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FAQ — hairline-divided list. Voice-controlled answers.
   ============================================================ */
function FaqItem({ q, children }) {
  return (
    <div className="faq-item">
      <h3>{q}</h3>
      <p>{children}</p>
    </div>
  );
}

function TptFaq() {
  return (
    <section className="tpt-faq">
      <div className="container">
        <div className="narrow">
          <span className="tpt-eyebrow">QUESTIONS</span>
          <h2>What <span className="tpt-heading-accent">dads ask.</span></h2>

          <FaqItem q="Are you lawyers?">No. The Primary Trail is a coaching and education service. We teach dads how to capture, organize, reflect on, and execute their case. The prep work that makes a lawyer's hour worth more, or that you can do without a lawyer where allowed. We never draft legal documents, advise on specific legal strategy, or appear in court. Any legal decision should be reviewed with a licensed attorney in your jurisdiction.</FaqItem>
          <FaqItem q="How is this different from a general divorce coach?">We focus specifically on dads new to family court and on the four-pillar framework: Capture, Organize, Reflect, Execute. The work is built around what family court actually evaluates: the best interest of the children. The prep helps the dad show up as a credible, organized advocate for his kids, not as someone fighting his ex.</FaqItem>
          <FaqItem q="What does the course cover?">Modules map to the four pillars. <strong>Capture:</strong> how to collect and timestamp every email, text, voicemail, and document without compromising your case. <strong>Organize:</strong> building a timeline and evidence categories your lawyer can use. <strong>Reflect:</strong> tone and judgment work, including AI-assisted message review before you hit send. <strong>Execute:</strong> packaging your case for your lawyer or, where allowed, for direct filing, saving billable hours.</FaqItem>
          <FaqItem q="Where are you based? Can you help me if I'm not in Texas?">The course and community are open to dads anywhere in the United States. Education and coaching are not state-specific. Our 1:1 coaching tier launches in Texas first, with in-person availability in Collin and Denton counties. As we expand 1:1, additional states will be added. The course gives you the full framework regardless of where you live.</FaqItem>
          <FaqItem q="What will it cost?">Founding-member pricing is reserved for waitlist members. The course is built to pay for itself many times over by reducing the legal-fee meter your lawyer otherwise charges to organize what you can organize yourself. 1:1 coaching is offered as a monthly retainer for active cases or hourly for one-off prep sessions. Specific numbers go to waitlist members first.</FaqItem>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CTA BAND — closing navy band with mirror waitlist form.
   ============================================================ */
function TptCtaBand() {
  return (
    <section className="tpt-cta-band" id="waitlist-cta">
      <div className="container">
        <div className="narrow">
          <h2>Step onto the trail.</h2>
          <p>Join the waitlist and we'll send the free "First 7 Things to Do" checklist plus founding-member access when the course opens.</p>
          <WaitlistForm id="waitlist-bottom" helperText="Free checklist included. We won't share your address." />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER — UPL/DTPA disclaimer + last updated + copyright.
   The disclaimer text is COMPLIANCE COPY. Do not paraphrase.
   ============================================================ */
function TptFooter() {
  return (
    <footer className="tpt-footer">
      <div className="container">
        <p className="disclaimer">The Primary Trail provides coaching and educational services only. We are not lawyers and do not provide legal advice. Information shared is for educational purposes and is not a substitute for the advice of a licensed attorney in your jurisdiction. Outcomes vary; we make no guarantees about case results. By joining the waitlist you consent to receive email from The Primary Trail; you can unsubscribe at any time.</p>
        <p className="updated">Last updated: April 26, 2026</p>
        <p className="tiny">© 2026 The Primary Trail. All rights reserved.</p>
      </div>
    </footer>
  );
}

/* Expose to other script-tag scopes. */
Object.assign(window, {
  TptNav,
  TptHero,
  TptQuickAnswer,
  TptPillars,
  Pillar,
  TptSavingsBand,
  TptOfferings,
  OfferCard,
  TptWhoFor,
  FaqItem,
  TptFaq,
  TptCtaBand,
  TptFooter,
  WaitlistForm,
});
