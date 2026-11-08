# Alchemist Behavior

Website for Amanda Ferrer's private mindset and manifestation coaching (the 3-Month Quantum Shift Program) and her book *Alchemist Behavior: A Guide to Becoming a Master Manifestor*. Served at www.alchemistbehavior.com.

## Pages

- `index.html`: homepage. Static HTML, so every word is readable by Google and AI search without JavaScript. Includes Organization, Person, Service, Book and FAQ structured data.
- `manifestation-journal-prompts.html`: 45 free journal prompts organized by the book's chapters. Targets "manifestation journal prompts" style searches and links to the book and the call.
- `guides.html`: hub linking every guide (CollectionPage + ItemList schema).
- Guides (Article, FAQPage, HowTo and Breadcrumb schema; each has a Starter Kit opt-in and links to the book):
  `how-to-script-manifestation.html`, `30-day-manifestation-challenge.html`, `how-to-manifest-money.html`, `signs-from-the-universe.html`, `how-to-make-a-vision-board.html`.
- `404.html`: custom not-found page (noindex).
- `robots.txt` welcomes search and AI crawlers; `llms.txt` summarises the site for AI answer engines; `sitemap.xml` lists every page.
- `intake.html`: the Quantum Shift intake form (unchanged; uses `assets-intake/`).

## Shared files (`site/`)

- `site.css`: the brand design system from the book (pink to sunshine gradients, teal, Anton, Playfair Display, Pacifico, DM Sans; self-hosted under SIL OFL).
- `site.js`: mobile menu, scroll reveals, lead forms with instant kit download, the manifestation quiz, the book order dialog and a one-time exit offer.
- `amanda-ferrer.webp`, `book-cover.webp`, `signature-dark.png`, `og-image.jpg` (1200x630 share image).
- `manifesting-starter-kit.pdf`: the free lead magnet delivered after every opt-in.

## Forms and leads

- All forms (hero, quiz, kit section, exit offer, prompts page, book order and intake) post to Web3Forms with the same access key, so submissions arrive in one inbox. Lead forms include a `source` field (and `result` for the quiz) to show which form converted. A hidden `botcheck` field blocks spam bots.

- Book orders: Amanda emails a payment link after each order.
- Intake submits via Web3Forms from `intake.html`.

## Adding a guide

Guides are generated from one template (the prompts page header and footer) so they stay consistent. Copy an existing guide, change the title (under 60 characters), description (under 160), canonical URL, H1, content and JSON-LD, then add it to `guides.html`, the homepage guides grid, `sitemap.xml` and `llms.txt`.
