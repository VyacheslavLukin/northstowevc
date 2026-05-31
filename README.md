# Northstowe Social Volleyball Club — Website

A fast, modern website for **Northstowe Social Volleyball Club**, built to attract
new players and grow the community. Built with [Astro](https://astro.build) +
[Tailwind CSS](https://tailwindcss.com), hosted free on **GitHub Pages** at the
custom domain **[northstowevc.uk](https://northstowevc.uk)**, deployed
automatically via **GitHub Actions**.

## Quick start

```bash
npm install      # one-time
npm run dev      # local dev server at http://localhost:4321/
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

## Editing content

Almost all editable content lives in **`src/config.ts`** — club info, the long-form
Purpose / Goal / Story copy, "What we offer", the coach bio, social links, the
contact-form key, and the register-interest form URL. See
[`content/TODO-content.md`](content/TODO-content.md) for anything still outstanding.

## How deployment works

1. Push this repo to GitHub.
2. On GitHub: **Settings → Pages → Build and deployment → Source → "GitHub
   Actions"**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds the site
   and publishes it.

### Custom domain (northstowevc.uk)

`public/CNAME` already tells GitHub Pages to serve the site at `northstowevc.uk`.
To finish hooking up the domain, set the DNS at your registrar:

- Four `A` records for the apex `northstowevc.uk` →
  `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- (Optional) a `CNAME` for `www` → `<your-github-username>.github.io`

Then in **Settings → Pages**, enter `northstowevc.uk` as the custom domain and
tick **Enforce HTTPS** once the certificate is issued.

## Contact form

Uses [Web3Forms](https://web3forms.com) (free, unlimited). The access key is in
`src/config.ts`; submissions are emailed to the address registered with that key.
The form submits via `fetch` with inline success/error feedback, and falls back to
a standard POST if JavaScript is disabled.

## Project structure

```
src/
  config.ts              ← edit ALL club content here
  layouts/Base.astro     ← page shell (head, header, footer, meta)
  components/            ← Header, Footer, Volleyball (SVG)
  pages/index.astro      ← the home page + contact-form script
  styles/global.css      ← design tokens (colours, fonts, motion)
public/                  ← logo.png, coach-vasco.jpg, favicon.svg, CNAME
content/                 ← research + content checklist (markdown)
.github/workflows/       ← GitHub Actions deploy pipeline
```

## Design

Modernised from the club's real brand: **navy + sage-green + cream**, with the
club logo. Self-hosted fonts (Archivo + Hanken Grotesk), near-zero JavaScript,
mobile-first, and accessible (skip link, focus styles, reduced-motion support).

## Credits

Third-party asset licenses (incl. the CC-BY volleyball icon) are listed in
[`CREDITS.md`](CREDITS.md).

## Research & decisions

- [`content/site-content.md`](content/site-content.md) — full content from the old Google Site
- [`content/design-notes.md`](content/design-notes.md) — brand analysis & direction
- [`content/platform-recommendation.md`](content/platform-recommendation.md) — why GitHub Pages + Astro
- [`docs/brainstorms/`](docs/brainstorms/) — design & scope decisions
