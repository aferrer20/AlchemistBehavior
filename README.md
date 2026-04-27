# Alchemist Behavior — Landing Page UI Kit

A high-fidelity recreation of the Alchemist Behavior brand assembled into a working landing page for the **3-Month Quantum Shift Program**.

This is a single product surface — Amanda's brand has one primary digital touchpoint right now: a landing page that sells the program and, secondarily, the book.

## Files

- `index.html` — entry point. Loads React + Babel, the colors_and_type.css tokens, and all components.
- `Hero.jsx` — full-bleed cover-gradient hero with wordmark, tagline, primary CTA, and the book floating on the right.
- `Marquee.jsx` — auto-scrolling tape of vocabulary tags ("babe", "Magnetic AF", "soul-yes…").
- `BookSection.jsx` — book pitch with cover, blurb, and chapter list.
- `ProgramSection.jsx` — the 3-month Quantum Shift offer: what's included, who it's for, three numbered modules.
- `Testimonials.jsx` — three pull-quote cards with sticker-pop frames.
- `FAQ.jsx` — accordion with Amanda-voice answers.
- `SignupCTA.jsx` — the bottom-of-page conversion block — Book Your Quantum Shift Call.
- `Footer.jsx` — small print + socials.
- `Nav.jsx` — minimal sticky nav.

## Interaction
- Sticky nav with scroll-spy.
- Click "Book Your Quantum Shift Call" → opens a fake booking dialog (form with name + manifesting goal + email).
- FAQ items expand/collapse.
- Marquee scrolls infinitely.
- Hover states: sticker-pop CTAs press-down, cards rotate 1°.

## Caveats
- Photos of Amanda + clients are placeholders (gradient blocks). Replace with real imagery.
- No backend — form submit shows a celebratory ✨ overlay.
