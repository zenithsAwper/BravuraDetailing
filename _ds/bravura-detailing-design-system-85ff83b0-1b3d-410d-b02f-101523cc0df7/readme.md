# Bravura Detailing — Design System

A dark, cinematic, gold-accented design system for **Bravura Detailing**, a premium auto-detailing brand. The aesthetic is *nocturnal luxury*: a true-black canvas where chrome-silver, white, and a single saturated Bravura Gold emerge from the void like a car under a spotlight. Adapted from a Lamborghini-inspired brief and grounded in Bravura's own chrome-shield logo.

## Sources
- **Logo:** `uploads/PNG WITH BACKGROUND-01.png` (transparent PNG, 3100×2470) → copied to `assets/bravura-logo.png`. A chrome/silver shield with a car silhouette, "BRAVURA" in metallic silver over "DETAILING" in gold.
- **Brand brief:** "Design System Inspired by Lamborghini" (provided as notes) — color, type, component, and layout guidance.
- No codebase or Figma file was provided; the system is authored from the brief + logo.

## The one substitution to know about
**LamboType**, the reference typeface, is proprietary and not licensable. This system substitutes **Saira** (a neo-grotesk superfamily with Normal→Condensed widths and 300–900 weights, on Google Fonts) for all display/body type, with **Barlow** for UI/body fallback. Saira echoes LamboType's aggressive, technical, aerodynamic character but is not identical. **⚠️ If you have the real LamboType (or Bravura's licensed brand font) files, send them and I'll swap them in via `@font-face`.**

---

## CONTENT FUNDAMENTALS
How Bravura writes.

- **Voice:** Confident, exacting, a little intimidating — a craftsman who takes the work more seriously than you do. "Flawless by obsession." "People who refuse ordinary."
- **Casing:** Display and headings are **ALL-CAPS, always.** This is the brand shouting. Body copy is sentence case.
- **Person:** Addresses the customer as **you**; the shop is **we/us**. "Tell us about your vehicle and we'll build a package."
- **Tone:** Aspirational and precise. Uses the vocabulary of the craft — *correction, ceramic, extraction, holograms, concours-level, 9H* — as proof of expertise, not to show off.
- **Length:** Short. A hero is two or three words stacked. Supporting copy is one tight sentence. Never a paragraph where a phrase will do — "singular, bold statements."
- **Numbers as proof:** Stats are terse and confident — `12+ Years`, `9H Ceramic`, `4,800 Cars`, `5.0★`. No decimals-for-show, no filler metrics.
- **No emoji.** A single `★` glyph appears only in a rating context. Punctuation is minimal; the `→` arrow is the only decorative mark.

## VISUAL FOUNDATIONS
- **Color:** True black `#000000` is the dominant surface — never a dark gray substitute. **Bravura Gold `#FFC000`** is the *only* chromatic color and is reserved for primary CTAs and key accents; never decorative. White and chrome-silver are the relief. Cyan/link-blue exist for informational/link states but are used sparingly.
- **Darkness as whitespace:** Generous black expanse *is* the breathing room. A single element floating in black has the weight of a gallery piece.
- **Type:** Single-typeface discipline (Saira). Display is uppercase at extreme scale (up to 120px) with tight line-heights (0.92–1.19) — dense, stamped-from-steel blocks. Weight **400 carries headlines** — the type is distinctive enough not to need bold.
- **Spacing:** 8px base unit. Section padding 48–56px vertical, 40px horizontal.
- **Corner radius:** **0px on everything** — buttons, cards, images, containers. The *only* rounded element is the toggle Switch (20px); badges get a barely-there 2px.
- **Borders:** Hairlines only — 1px `#202020` dividers, or white at 15%/50% opacity. Ghost buttons carry a 1px white border at 50% opacity.
- **Elevation without shadow:** On a black canvas, drop shadows are invisible. Depth comes from **surface layering** — `#000000` → `#181818` → `#202020` → `#494949` — elevated elements are literally *lighter* than their surroundings. No glows, no blur on UI.
- **Backgrounds & imagery:** Full-bleed video/photography carries the emotion — cinematic, high-contrast, dark. 16:9 and wider. Subtle top/bottom protection gradients keep text legible. No pattern textures; the photography is the richness.
- **Animation:** Restrained and **color-only** — background/opacity shifts over ~200ms with a standard ease. **No scale, no translate, no bounce** on hover. Video/progress motion lives in media, not UI.
- **Hover states:** Gold → darker gold `#917300`. Ghost → teal `#1EAEDB` fill, opacity 0.5 → 1. Links → link-blue `#3860BE`.
- **Press states:** Color shift only — never shrink or move.
- **Cards:** Charcoal `#202020` fill, zero radius, no shadow, no border (or a single hairline divider). Optional 16:9 media header with a dark protection gradient.
- **Transparency & blur:** Overlays are flat black at 70/50/25% for modals and video dimming. No backdrop-blur glass effects.
- **Geometric DNA:** Hexagonal motifs appear only in UI controls (the hex play/pause button), echoing the brand's angular character.

## ICONOGRAPHY
- **No proprietary icon set was provided.** UI icons in components (hamburger, search, saved/bookmark) are drawn as inline **stroke SVGs at 1.6px weight** — a thin, technical line style that matches the brand. For production, standardize on a single thin-stroke set: **Lucide** or **Feather** (CDN-available, ~1.5–2px stroke) is the closest match. **⚠️ Substitution flagged** — swap for Bravura's own glyphs if they exist.
- The **hexagonal play/pause control** (`HexPlayButton`) is the one bespoke, brand-specific icon — build media controls from it, not a generic circle.
- **Emoji:** never used. **Unicode glyphs:** only `★` (ratings) and `→` (CTA affordance).
- The **chrome shield logo** (`assets/bravura-logo.png`) is the master brand mark; render the brand name in uppercase Saira wherever the mark can't be used.

---

## INDEX
Root manifest.

- **`styles.css`** — entry point (consumers link this). `@import`s the token files only.
- **`tokens/`** — `colors.css`, `typography.css`, `spacing.css` (spacing + radii + elevation + motion), `fonts.css` (webfont imports).
- **`assets/`** — `bravura-logo.png` (master logo).
- **`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand).
- **`components/`** — reusable primitives:
  - `actions/` — **Button** (accent / ghost / white / dark / gray)
  - `display/` — **Card**, **Badge**
  - `forms/` — **Input**, **Switch**
  - `media/` — **HexPlayButton**, **ProgressBar**
  - `navigation/** — **Navbar**
- **`ui_kits/website/`** — marketing homepage recreation (**Hero**, **Services**, **BookingCTA**, **Footer**).
- **`SKILL.md`** — Agent Skill wrapper for use in Claude Code.

### Components
Button · Card · Badge · Input · Switch · HexPlayButton · ProgressBar · Navbar

### Intentional additions
The brief defined no formal component library, so this set is authored from the brief's described patterns (buttons, cards, badges, ghost/hex controls, nav). `Input`/`Switch` are included because the brief describes form styling (sharp inputs, the 20px toggle) and the booking flow needs them.
