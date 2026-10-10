# Phlen website — what's left to do

Design canvas: https://claude.ai/artifact/TpbKzKDSZk2dwfnWkvMrXy (homepage, LinkedIn Chuckles as the first product)

## Content to fill in (placeholders on the page)

- [ ] **Chrome Web Store link** — the "Add to Chrome" buttons point to `[CHROME WEB STORE URL]` / `#get`. Publish the extension first (see `../DEPLOYMENT.md`).
- [ ] **Chrome Web Store rating** — testimonials header shows `[Chrome Web Store rating]`.
- [ ] **Testimonials** — three cards have `[Early user quote]`, `[Name]`, `[Role, Company]` and grey avatar circles. Collect real quotes and photos (with permission).
- [ ] **Audience photos** — founders, job seekers, creators/recruiters cards use `[Photo: …]` blocks.
- [ ] **Hero post image** — the mock LinkedIn post has a `[Post image]` block.
- [ ] **Browser support** — FAQ says `[Confirm support for other Chromium browsers such as Edge and Brave.]`. Test and update.
- [ ] **Data retention policy** — FAQ says `[Add server-side retention policy.]`. Decide what the server logs and how long it keeps it.
- [ ] **Article Studio pricing** — FAQ says Pricing is `[TBD]`.
- [ ] **Tagline / positioning** — Phlen is described as "small, sharp AI tools for your professional voice". Confirm or replace.
- [ ] **Demo content** — the sample post and author ("Ada Okafor") are made up. Keep as illustration or swap for a real (permitted) example.

## Pages and links not built yet

- [ ] **Chuckles product page** — the nav "Chuckles" link and "Learn more" only scroll to a section on the homepage.
- [ ] **Pricing page** — free Chuckles vs Phlen Pro (Article Studio).
- [ ] **About, Contact, Terms, Privacy policy pages** — footer links currently point to `#top` / `#privacy`.
- [ ] **Help centre** — footer "Help & FAQ" only scrolls to the homepage FAQ.
- [ ] **Social links** in the footer (LinkedIn, X, etc.).

## Functionality

- [ ] **Article Studio waitlist** — the email box and "Join waitlist" button do nothing. Wire to a backend (e.g. Firestore, since the project is on Firebase) with validation, a success state and spam protection.
- [ ] **Announcement bar** — make it easy to update or rotate (Wispr Flow-style).
- [ ] **Analytics** — track "Add to Chrome" clicks and waitlist sign-ups.
- [ ] **SEO** — page titles, meta descriptions, Open Graph/Twitter images, favicon and `manifest.json` (still the Create React App defaults in `public/`).

## Build it in this repo (`phlen/`)

- [x] Turn the design into React components in `src/` (`src/components/`, styles in `src/App.css`).
- [x] Add the fonts (Geist, Instrument Serif) and colour tokens (CSS variables at the top of `src/App.css`).
- [x] Make the tone switcher and FAQ accordion interactive (tested in `src/App.test.tsx`).
- [x] Waitlist form: validation, success and error states. Saves nowhere until `REACT_APP_WAITLIST_ENDPOINT` is set.
- [x] Page title, description and Open Graph tags in `public/index.html`; manifest renamed to Phlen.
- [ ] Set `REACT_APP_CHROME_STORE_URL` (all "Add to Chrome" buttons fall back to `#get` until then).
- [ ] Phlen favicon and app icons (`public/favicon.ico`, `logo192.png`, `logo512.png` are still the React logo) and an Open Graph image.
- [ ] Add routing if more pages are added, and the SPA rewrite (`** → /index.html`) to each target in `firebase.json` (see `CLAUDE.md`).
- [ ] Accessibility pass: contrast check with real images, screen-reader run-through.
- [ ] Check the layout on a real phone, then on the three Firebase targets (dev → staging → prod).

## Product work the site depends on

- [ ] **Deploy the Chuckles server** to production and point `extension/config.js` at it (see `../DEPLOYMENT.md`).
- [ ] **Publish LinkedIn Chuckles** to the Chrome Web Store.
- [ ] **Build Article Studio** (Pro) — from `../Feature.md`: publish and vet articles, AI search for open-source images that fit the article, optional AI enhancement of the draft, publish as a main or quoted article.
- [ ] **Accounts and payments** for Phlen Pro.
- [ ] **Trademark wording** — keep the "not affiliated with LinkedIn" disclaimer and check the Chuckles name and icon against LinkedIn's brand guidelines before launch.
