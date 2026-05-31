# Northstowe Volleyball Website — Build Plan

## Phase 0 — Research & decisions ✅
- [x] Capture existing Google Site content → `content/site-content.md`
- [x] Capture design notes → `content/design-notes.md`
- [x] Platform analysis → `content/platform-recommendation.md`
- [x] Brainstorm & decisions → `docs/brainstorms/2026-05-31-...md`

## Phase 1 — Project scaffold ✅
- [x] Scaffold Astro project + Tailwind v4
- [x] Configure `astro.config` for GitHub Pages (site/base)
- [x] Self-hosted fonts (Latin subset)

## Phase 2 — Polished home page ✅
- [x] Design tokens (colors, fonts) in global CSS
- [x] Site shell: header nav + footer
- [x] Hero (recruitment CTA + animated volleyball)
- [x] Stats bar
- [x] "Why play" cards
- [x] Training times section
- [x] Contact section (Web3Forms-ready)
- [x] Accessibility: skip link, focus styles, reduced-motion, single h1

## Phase 3 — Deploy pipeline ✅
- [x] GitHub Actions workflow (`withastro/action` + `actions/deploy-pages`)
- [x] README with setup steps

## Phase 4 — Content scaffolding ✅
- [x] `content/TODO-content.md` go-live checklist
- [x] Centralised editable content in `src/config.ts`

## Later (after home page approved)
- [ ] Dedicated Contact / Schedule / About pages
- [ ] Google Calendar embed for live fixtures
- [ ] Team photos + gallery when available
- [ ] Custom domain (optional)
- [ ] Re-verify exact Contact-page wording from the live Google Site

## Review

**Major correction (2026-05-31):** owner supplied real screenshots of all 3
Google Site pages (Home, Events, About). My first capture was substantially
wrong — it missed Purpose / Goal / Story / Meet-the-Coach entirely and invented
"one mixed team competing in the Cambridge Volleyball League" (the club is
actually pre-launch, still organising). Rebuilt everything on the real content.

**Corrected facts now reflected in the site:**
- Name: "Northstowe **Social** Volleyball Club" (Social = core identity).
- Status: pre-launch / organising — no team, no league yet (those are future aims).
- Brand: navy + sage-green + cream (was wrongly forest-green).
- Real sections: Purpose, Our Story, Our Goal, What You'll Gain, What We Offer,
  Meet the Coach (Vasco), honest pre-launch banner + contact form.
- Email: northstowesocialvolleyball@gmail.com. Socials: Instagram + YouTube.

**Verified (real filesystem):**
- `npm run build` → EXIT 0, 0 errors, dist/index.html 18,166 bytes.
- All real content present (purpose/goal/story/gains/offer/coach/Vasco bio/CVC).
- All fabricated claims absent (0× "one mixed team", "competes in", "bump", old hex).
- Structure: 1×h1, 7×h2, 4×h3, skip link. Preview HTTP 200. Real screenshot reviewed.

**Not done by design:**
- No git init/commit yet (will do when asked).
- Still-missing real data (owner to supply): training day/time/venue, pricing,
  the Google Form URL, Instagram/YouTube URLs, logo file, coach photo, Web3Forms key.
  All centralised in src/config.ts with TODO markers; checklist in content/TODO-content.md.
