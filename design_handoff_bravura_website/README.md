# Handoff: Bravura Detailing Marketing Website

## Overview
A 6-page marketing website for Bravura Detailing, a premium auto-detailing shop serving Mesa, Gilbert, Scottsdale, and Phoenix, AZ. Covers Home, About, Services, Contact, a hidden Add-Ons upsell page, and a Portfolio page (currently unlinked from navigation, pending real project photos). Primary goal: educate on services and drive quote-request form submissions.

## About the Design Files
The files in this bundle (`*.dc.html`) are **design references built as an internal prototyping format**, not production code to copy directly. They render as plain HTML/CSS/JS in a browser (open any file directly to preview), but they use a proprietary component-templating syntax (custom tags like `<x-dc>`, `<dc-import>`, `<sc-if>`, `<sc-for>`, inline `style-hover` attributes, a `support.js` runtime) that only works in that authoring tool. **Do not copy this markup as-is into a production codebase.** Your task is to **recreate these designs pixel-faithfully in the target project's actual stack** (plain HTML/CSS/JS, React, Vue, a static site generator, etc. — whichever the target project already uses, or the best fit if none exists yet), using real components, real CSS (or the project's styling system), and a real form backend.

## Fidelity
**High-fidelity (hifi).** These are pixel-perfect mockups with final copy, exact colors, exact typography, and exact spacing already chosen. Recreate the UI faithfully using the codebase's existing libraries/styling approach — don't restyle or "reinterpret."

## Site Map & Navigation
Primary nav (in `SiteNav`, shared across all pages): **Home · About · Services · Contact**.
- **Portfolio** page exists but is intentionally **not linked** in the nav or footer's "Explore" list should be checked — it still contains hidden portfolio links in some places; treat Portfolio as **unpublished/hidden** until the client uploads real before/after project photos. Keep the page built, just don't surface it in nav until asked.
- **Add-Ons** page is intentionally **not in the nav**. It is reachable only via a "See Add-Ons & Pricing" call-to-action banner on the Services page. Keep this pattern: Add-Ons is an upsell landing page, discoverable only from Services.

## Screens / Views

### 1. SiteNav (shared component)
- **Purpose:** Sticky top navigation, present on every page.
- **Layout:** Fixed to viewport top, full-width, `72px` tall bar. Inner content max-width `1440px`, centered, `40px` horizontal padding. Flex row: logo (left) — nav links (center-right) — phone number + "Request a Quote" button + mobile hamburger (right).
- **Behavior:**
  - Transparent background + transparent border at page top; transitions to `rgba(0,0,0,0.94)` background with a `1px` hairline bottom border once scrolled past `24px` (or when the mobile menu is open).
  - Active page link is gold (`var(--gold)`) with a `2px` gold bottom border; other links are chrome-gray, brightening to white on hover.
  - Below `940px`: nav links and phone number hide; a hamburger button appears, toggling a full-width dropdown menu (dark background, stacked uppercase links, "Request a Quote" gold button at bottom).
  - Below `520px`: the "Request a Quote" header button also hides (mobile menu covers it).
- **Logo:** `assets/bravura-logo.png`, rendered at `44px` height in the nav, `56px` in the footer.
- **CTA button:** "Request a Quote" → links to `Contact.dc.html`. Gold fill, darkens on hover (`var(--gold-dark)`).

### 2. SiteFooter (shared component)
- **Layout:** Full-width footer, `var(--iron)` background, `1px` hairline top border. Inner content max `1440px`, `72px 40px 40px` padding. Four-column grid (`1.6fr 1fr 1fr 1.2fr`): Brand blurb + social icons | Explore links | Services links | Get In Touch. Collapses to 2 columns at `900px`, 1 column at `520px`.
- **Column 1:** Logo, one-sentence brand blurb, three `40×40px` bordered circular social icons (Instagram, Facebook, Google — placeholder `#` links, inline stroke SVGs), gold border + icon color on hover.
- **Column 2 "Explore":** Home, About, Services, Portfolio, Contact.
- **Column 3 "Services":** Full Detail, Paint Correction, Ceramic Coating (all anchor-link to `Services.dc.html#<id>`), Request a Quote, Mobile Detailing.
- **Column 4 "Get In Touch":** Phone `480-815-4711`, email `QuoteMe@BravuraDetailing.com`, "Serving Mesa, Gilbert, Scottsdale & Phoenix", hours "Sat & Sun · 6:30 AM – 8 PM".
- **Bottom bar:** `1px` hairline top border, `56px` top margin. Left: "© 2026 Bravura Detailing. All rights reserved." Right: Privacy Policy / Terms of Service links (placeholder `#`).

### 3. Home (`Home.dc.html`)
- **Purpose:** Primary landing page — brand impression, service overview, trust building, conversion to quote request.
- **Sections, top to bottom:**
  1. **Hero** — full-viewport-height (`92vh`), radial dark-gradient background over black with a subtle warm gold glow at the bottom. Eyebrow "Premium Auto Detailing — Arizona" (gold, uppercase, `12px`, `2.4px` tracking). H1 "Restore. Protect. **Impress.**" (white, last word gold), `clamp(46px, 7.4vw, 96px)`, uppercase, weight 400, tight line-height. Supporting sentence below (`18px`, ash gray, max-width `560px`). Two buttons: "Request a Quote →" (gold fill) and "View Our Work" (ghost, teal fill on hover) — currently points to Portfolio.
  2. **Trust strip** — full-width `1px`-bordered bar directly under hero: "Serving Arizona Since 2026 / Gyeon® Certified / Drop-Off & Mobile / 1-Day Response", separated by `/` glyphs, uppercase `12px` chrome-gray text.
  3. **Why Bravura** — black background. Eyebrow + H2 "Obsession, made visible" + one-sentence intro. 3-column grid (stacks to 1 col below `900px`) of 6 feature cards: Drop-Off & Mobile, Gyeon-Certified Products, Meticulous Craftsmanship, Transparent Communication, Reliable Scheduling, Exceptional Experience. Each card: `1px` hairline border (brightens toward gold on hover), dark abyss background, a `30×30` gold-stroke line icon, uppercase `20px` heading, `16px` ash body text.
  4. **Featured Services** — `var(--iron)` background. Eyebrow "What We Do" + H2 "Three ways to transform" + "All Services →" link (top-right). 3-column card grid, each card: 16:10 photo with bottom dark-gradient scrim and a small uppercase gold label overlay (top or bottom), then `28px` padded body with H3 title, one-sentence description, "Learn More →" link.
     - **Card 1 — Full Detail:** photo = BMW M4 (`assets/service-full-detail.png`), overlay label "Interior + Exterior".
     - **Card 2 — Paint Correction:** photo = Ford F-250 (`assets/service-paint-correction.png`), overlay label "Multi-Stage Polish".
     - **Card 3 — Ceramic Coating:** photo = Toyota 4Runner (`assets/service-ceramic-coating.png`), top-left gold "Most Popular" badge, bottom overlay label "Gyeon®".
  5. **Process** — `var(--iron)` background. Eyebrow "How It Works" + H2 "Four steps to a flawless finish". 4-column grid (2 col at 900px, 1 col at 520px) of numbered steps `01`–`04` (Request a Quote, Schedule Appointment, Detailing Service, Enjoy Your Vehicle), large gold numeral, uppercase heading, short description. Cards share a `1px` hairline grid via background-color-as-gap trick.
  6. **Testimonials** — black background. Eyebrow "What Drivers Say" + H2 "Trusted across the Valley". 3-column grid of blockquote cards (charcoal background): 5-star gold rating line, quote text, footer with bold name + city + vehicle. Three reviews: Marcus D. (Scottsdale, Audi S5), Priya S. (Gilbert, Tesla Model Y), Ryan T. (Mesa, Ford F-150).
  7. **Community special banner** — `var(--iron)` background, contains one gold-bordered promo card: "$100 off one ceramic coating — or $200 off each when you book two", "Claim the Offer →" gold button.
  8. **Final CTA** — black, centered, radial gold glow. H2 "Ready to see yours transformed?" + supporting sentence + two buttons: "Request a Quote →" (gold) and "Call 480-815-4711" (ghost, `tel:4808154711`).
- **Note:** an earlier "Before/After Portfolio Preview" section between Featured Services/Process was **intentionally removed** per client request — do not re-add it unless asked.

### 4. About (`About.dc.html`)
- **Sections:** Page header (eyebrow "About Bravura" / H1 "Built on a single standard" / intro paragraph) → Story (2-column: heading left, 3 paragraphs right, on why the shop was founded) → Mission statement (centered, single large uppercase statement, `var(--iron)` bg) → Values (4-column numbered cards `01`–`04`: Precision Over Speed, Honesty in Scope, Respect for the Vehicle, Clear Communication) → Process (4-row numbered list, black-hairline-separated rows: Inspection, Preparation, Execution, Final Inspection) → "Why Customers Trust Us" (2×2 bordered cards: Gyeon-Certified Application, Drop-Off & Mobile Flexibility, Response Within One Business Day, Every Make Every Budget) → Final CTA (same pattern as Home, buttons: Request a Quote / View Services).

### 5. Services (`Services.dc.html`)
- **Purpose:** Detailed breakdown of all 4 services with FAQs, pricing where applicable, and a bridge to the Add-Ons page.
- **Header:** eyebrow "Services" / H1 "Three services. One standard." / intro / 4 anchor jump-links (Full Detail, Paint Correction, Ceramic Coating, Maintenance Detail).
- **Four alternating 2-column service blocks** (each `id`-anchored, alternating black/`var(--iron)` background, image side alternates left/right via CSS `order`):
  1. **Full Detail** (`#full-detail`) — copy + 6-item "What's Included" list + "Ideal for" note + "Request a Full Detail Quote →" button on the left; on the right, the BMW M4 photo (4:3) + a charcoal FAQ card with 3 `<details>` accordions (duration, mobile availability, frequency).
  2. **Paint Correction** (`#paint-correction`) — image/FAQ card on the left (Ford F-250 photo + 3 FAQs: swirl removal expectations, correction stages, coat-after-correction recommendation), copy on the right (intro + 6-item included list + ideal-for + CTA).
  3. **Ceramic Coating** (`#ceramic-coating`) — "Service 03 · Gyeon® Certified" eyebrow, copy + 5-item benefits list + ideal-for + CTA on the left; on the right, the 4Runner photo (with a "GYEON® CERTIFIED COATING" gold badge overlay) + FAQ card (durability, correction-first recommendation, community discount).
  4. **Maintenance Detail** (`#maintenance-detail`) — copy left (intro explaining 30-day eligibility window + 5-item included list + eligibility/notice callouts + CTA); right side is a pricing card (charcoal, centered): "Starting At" / "$99" large, then a checklist of 5 included items with gold checkmark icons.
- **Add-Ons CTA banner** — `var(--iron)` background, one charcoal card, flex row: eyebrow + heading ("Steam decontamination, stain extraction, headlight restoration & more") on the left, "See Add-Ons & Pricing →" ghost button on the right (links to `Addons.dc.html`, teal fill on hover). **This is the only entry point to the Add-Ons page.**
- **Final CTA** — black, "Not sure which service is right?" + Request a Quote / See Our Work buttons.

### 6. Add-Ons (`Addons.dc.html`) — hidden from nav
- **Purpose:** Upsell landing page for optional add-on services, reached only via the Services page CTA banner above.
- **Header:** eyebrow "Optional Add-Ons" / H1 "Finish it properly" / one-sentence intro ("Add any of these to a Full Detail, Paint Correction, or Ceramic Coating — just mention it when you book.").
- **2-column card grid** (1 col below `820px`) of 6 add-ons, each a charcoal card with a top row (uppercase `22px` title left, gold price right) and one benefit-forward sentence below:
  - Steam Decontamination — $50
  - Dog Hair Removal — $50
  - Trim Dressing / Restoration — $50
  - Stain Extraction — $75
  - Clay Bar Treatment & Iron Remover — $75
  - Headlight Restoration — $75
- **Final CTA** — `var(--iron)` background, centered, radial gold glow: "Add these to any service" + one sentence + single "Request a Quote →" gold button.

### 7. Portfolio (`Portfolio.dc.html`) — currently unpublished
- **Status:** Built but not linked from the primary nav. The gallery images are currently gradient/placeholder blocks (no real photos yet) — **swap in real before/after photography before this page goes live**, then add it back to `SiteNav`'s link list.
- **Layout when live:** Header with filter chips (All Projects / Full Details / Paint Correction / Ceramic Coating, anchor-linked) → three anchored gallery sections (`#full-details`, `#paint-correction`, `#ceramic-coating`), each a 3-column grid of cards with a diagonal-split "Before / After" image placeholder, title, service+city subline, and a Goal/Result two-sentence caption. Ends with the standard Final CTA (Request a Quote / View Services).

### 8. Contact (`Contact.dc.html`)
- **Purpose:** Quote-request form + direct contact info + FAQ.
- **Layout:** Header (eyebrow "Contact" / H1 "Let's talk about your vehicle" / intro) → 2-column grid (`1.15fr / 0.85fr`, stacks under `980px`): **quote form** (charcoal card) on the left, **sidebar** of 4 stacked info cards on the right (Direct Contact: phone + email; Business Hours: Sat/Sun 6:30 AM–8 PM; Service Area: Mesa/Gilbert/Scottsdale/Phoenix, drop-off at Mesa location; Response Time: one business day).
- **Form fields:** Full Name, Phone, Email (all required), Vehicle Make & Model, Preferred Appointment Date, Desired Service (select: Full Detail / Paint Correction / Ceramic Coating / Maintenance Detail / Not sure yet), Preferred Service Type (two-button toggle: Drop-Off / Mobile — selected state = gold fill), Message (textarea). Submit button reads "Submit Request", becomes "Sending…" and disables while in flight.
- **Success state:** replaces the form with a checkmark icon, "Request received", "Thanks, {first name} — we've got your details.", "Expect a reply at your email or phone within **one business day**."
- **Error state:** inline red text above the submit button: "Something went wrong sending your request — please call or text us at 480-815-4711 instead."
- **Map placeholder section** below the form: 16:5 bordered block with a pin icon + "Service map — Mesa, Gilbert, Scottsdale & Phoenix, AZ" — **replace with a real embedded map** (Google Maps embed or similar) in production.
- **FAQ section:** 2×2 grid of Q&A cards (response time, service areas, deposit policy, "not sure which service" guidance).

## Interactions & Behavior
- **Nav scroll behavior:** background/border fade in past `24px` scroll (see SiteNav above). No scale/transform — color/opacity only, ~200ms.
- **Hover states (site-wide):** gold buttons darken to `var(--gold-dark)` (`#917300`); ghost/ghost-bordered buttons fill teal (`var(--teal-action)`, `#1EAEDB`) on hover; text links brighten from ash/chrome to white or gold. Never scale or translate — color-only, matching the bound design system's motion rules.
- **Mobile nav menu:** hamburger toggles a full-bleed dropdown; state is local component state (`menuOpen`).
- **Services page FAQ accordions:** native `<details>/<summary>` elements — no custom JS.
- **Contact form:**
  - Client-side state holds all field values; "Drop-Off"/"Mobile" is a custom two-button toggle (not a native radio) reflecting `serviceType` state.
  - On submit: POSTs JSON to a Formspree endpoint (`https://formspree.io/f/{FORM_ID}`) with all fields, `_replyto` set to the submitter's email, and `_subject` set to `New quote request from {name}`.
  - **⚠️ Formspree form ID is currently a placeholder** (`YOUR_FORM_ID` in the script). Whoever owns the destination inbox (`quoteme@bravuradetailing.com` was specified) needs to create a Formspree form and the real ID substituted — until then, submissions will fail and show the fallback error message. In a rebuilt codebase, this can be swapped for whatever backend/email service the target stack prefers (Formspree, a serverless function, etc.) — the design's job is just the form UI + success/error states above.
  - Success/error are local React-style state, not routes — no page navigation on submit.

## State Management
- **SiteNav:** `scrolled` (boolean, driven by a scroll listener), `menuOpen` (boolean), `hover`/`ctaHover` (for per-link/button hover styling since these are inline-styled, not CSS `:hover` — a CSS-based codebase can use real `:hover` instead).
- **Contact form:** one flat state object — `submitted`, `submitting`, `error`, and one field per form input (`name`, `phone`, `email`, `vehicle`, `date`, `service`, `message`, `serviceType`). Transitions: idle → submitting (on submit, if not already submitting) → submitted (on 2xx response) or error (on failure/non-2xx, error message set, returns to idle/submitting=false so the user can retry).
- No other pages carry client state beyond the shared nav.

## Design Tokens
Pull all values from the bound **Bravura Detailing Design System** tokens rather than hand-copying hexes where possible; key values for reference:
- **Colors:** true black `#000000` (primary surface), Bravura Gold `#FFC000` (`--gold`, only chromatic accent), gold-dark `#917300` (hover), gold-text (a slightly desaturated gold for small text on dark), charcoal `#202020` (card fill), iron (a mid-dark section background, lighter than `#000` / `#181818`), abyss (darkest secondary surface), ash/smoke/chrome-2/chrome-3/steel/slate (a grayscale text ramp light→dark), teal action `#1EAEDB` (ghost-button hover fill), border-hairline `#202020` @ low opacity, border-ghost (white @ ~50% opacity).
- **Typography:** Single family **Saira** for both display and body (Barlow as fallback). Display/headings: uppercase, weight 400, tight line-height (0.92–1.19), sizes from `12px` eyebrows up to `clamp(46px,7.4vw,96px)` hero H1. Body: sentence case, `14–18px`, line-height `1.6–1.7`.
- **Spacing:** 8px base unit; section vertical padding `76–130px` desktop (drops to `~70–76px` on mobile via `.bd-sec` media override), horizontal `40px` desktop / `24px` mobile; content max-widths `1200px` (body sections) / `1440px` (nav/footer).
- **Corner radius:** `0px` everywhere — no rounded corners on any card, button, image, or input in this site (only the design system's Switch component, unused here, would ever be rounded).
- **Borders:** `1px` hairline dividers only; ghost buttons/cards use white-at-~50%-opacity borders.
- **Elevation:** no drop shadows — depth comes from surface layering (black → iron → charcoal → abyss), consistent with the design system's "elevation without shadow" rule.

## Assets
- **Logo:** `assets/bravura-logo.png` — chrome-shield mark, used in nav (`44px` h) and footer (`56px` h).
- **Service photography (client-provided):**
  - `assets/service-full-detail.png` — BMW M4 (Full Detail service, used on Home + Services).
  - `assets/service-paint-correction.png` — Ford F-250 (Paint Correction service, used on Home + Services).
  - `assets/service-ceramic-coating.png` — Toyota 4Runner (Ceramic Coating service, used on Home + Services).
- **Portfolio imagery:** none real yet — current Portfolio page uses gradient placeholder blocks; needs real before/after photos before publishing.
- **Icons:** inline stroke SVGs (1.5–1.6px stroke weight) drawn ad hoc for feature icons, social icons, checkmarks, and the map pin — no icon library dependency. A production build can standardize these on Lucide/Feather per the design system's guidance, or keep them as inline SVG.

## Files
- `Home.dc.html` — homepage
- `About.dc.html` — About page
- `Services.dc.html` — Services page (4 services + Add-Ons CTA banner)
- `Addons.dc.html` — hidden Add-Ons upsell page (linked only from Services)
- `Contact.dc.html` — Contact page + quote form
- `Portfolio.dc.html` — Portfolio page (built, not yet linked/published)
- `SiteNav.dc.html` — shared nav component, imported by every page
- `SiteFooter.dc.html` — shared footer component, imported by every page
- `assets/` — logo + service photos referenced above

All of the above are included in this handoff bundle for reference. Open any `.dc.html` file directly in a browser to preview it (they're self-contained; a small runtime script embedded in each file makes the custom template tags render as plain HTML/JS).
