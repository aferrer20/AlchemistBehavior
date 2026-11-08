# Alchemist Behavior

Website for Amanda Ferrer's private mindset and manifestation coaching (the 3-Month Quantum Shift Program) and her book *Alchemist Behavior: A Guide to Becoming a Master Manifestor*. Served at www.alchemistbehavior.com.

## Pages

- `index.html`: homepage. Static HTML, so every word is readable by Google and AI search without JavaScript. Includes Organization, Person, Service, Book and FAQ structured data.
- `manifestation-journal-prompts.html`: 45 free journal prompts organized by the book's chapters. Targets "manifestation journal prompts" style searches and links to the book and the call.
- `intake.html`: the Quantum Shift intake form (unchanged; uses `assets-intake/`).

## Shared files (`site/`)

- `site.css`: the design system (onyx, ivory, champagne gold; Cormorant Garamond + Jost, self-hosted under SIL OFL).
- `site.js`: small enhancements only (sticky nav, mobile menu, scroll reveals, book order dialog).
- `book-cover.webp`, `og-image.jpg` (1200x630 social share image).

## Forms

- Book orders post to Formspree (`xwvydndk`); Amanda emails a payment link.
- Intake submits via Web3Forms from `intake.html`.

## Adding a page

Copy `manifestation-journal-prompts.html`, change the title, description, canonical URL, H1 and content, then add the URL to `sitemap.xml`.
