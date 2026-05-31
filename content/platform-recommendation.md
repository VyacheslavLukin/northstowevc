# Platform & Hosting Recommendation

## Criteria recap

1. **Free** to host
2. **Deploy via GitHub Actions**
3. **Modern programming language or markdown** (or similar)
4. *(Optional)* Plug in a **schedule from a calendar** and **feedback form(s)**

## Hosting: GitHub Pages ✅

GitHub Pages meets every hard criterion:

| Criterion | GitHub Pages |
|-----------|-------------|
| Free | ✅ Free for public repos |
| GitHub Actions deploy | ✅ Official `actions/deploy-pages` workflow |
| Modern lang / markdown | ✅ Serves any static output; works with any generator |
| Custom domain | ✅ Free (e.g. `northstowevolleyball.org`), free HTTPS |

**The one constraint:** GitHub Pages is **static hosting only** — no server-side
code or database. Fine for a club site; the optional calendar + form features are
solved with free third-party embeds (below).

### Why GitHub Pages over alternatives
- **Cloudflare Pages / Netlify / Vercel** — also free & great, but the user wants
  GitHub, and Pages keeps code + hosting + Actions in one place. Easy to migrate later.
- **Keep Google Sites** — fails "modern language / GitHub Actions" and is hard to
  make distinctive / good-looking.

## Site framework: Astro (chosen)

| Option | Lang | Content | Verdict |
|--------|------|---------|---------|
| **Astro** ⭐ | TS/JS + Markdown | `.md`/`.mdx` | **Recommended** |
| Hugo | Go | Markdown | Fast but less flexible |
| Jekyll | Ruby | Markdown | GitHub-native but dated |
| Plain HTML/CSS | HTML/CSS | HTML | OK for tiny sites, manual |
| Next.js (static) | React/TS | MDX | Heavier than needed |

**Why Astro:** Markdown/TS content non-technical members can edit, near-zero JS
(fast on mobile), full design control for a distinctive look, trivial GitHub
Pages deploy via the official `withastro/action`.

## Optional feature 4 (all free)

### Schedule from a calendar
- **Google Calendar embed** — club keeps a calendar; embed it, updates appear
  automatically. Zero code.
- Or render fixtures from a Markdown/JSON data file for a custom look.

### Feedback / contact form (static-friendly, free)
| Service | Free tier | Notes |
|---------|-----------|-------|
| **Web3Forms** ⭐ | Unlimited | Access key only, no backend (chosen) |
| Formspree | 50/mo | Popular, easy |
| Google Forms embed | Unlimited | Matches Google setup, less pretty |

## Summary

> **Host:** GitHub Pages · **Framework:** Astro (Markdown content) ·
> **Deploy:** GitHub Actions · **Calendar:** Google Calendar embed ·
> **Forms:** Web3Forms (free). All hard criteria met; both optional features covered.
