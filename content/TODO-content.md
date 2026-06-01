# Content checklist

All the club's existing copy (Purpose, Goal, Story, What We Offer, Coach bio) is
in the site, taken verbatim from your Google Site. Everything editable lives in
**`src/config.ts`**.

## ✅ Done

- [x] Club name, Purpose, Goal, Story, What We Offer, "What you'll gain"
- [x] Meet the Coach — Vasco bio + **real photo** (`public/coach-vasco.jpg`)
- [x] **Club logo** in the header (`public/logo.png`)
- [x] Real volleyball graphic in the hero — clean volleyball SVG (`public/volleyball.svg`)
- [x] **Web3Forms** contact form — live key, AJAX submit with inline feedback
- [x] **Instagram** + **YouTube** links (footer)
- [x] **"Register your interest"** Google Form button
- [x] **Custom domain** northstowevc.uk — live, HTTPS enforced
- [x] **Live on GitHub Pages** with auto-deploy on every push to `main`
- [x] **Photo gallery** — first-session photos, grid + lightbox (`public/sessions/`)
- [x] **Updated status** — "We've started", with Sat (from 4pm) / Sun morning play times

## Outstanding — needs you

- [ ] **Confirm exact play times & venue** — currently shows "Saturdays from 4pm"
      and "Sundays mornings" (not fixed). Update in `src/config.ts` → `playTimes`
      and the `status.body` text once locked in. A venue/address would help newcomers.
- [ ] **Pricing** — not mentioned anywhere yet. Add when decided.
- [ ] **Events calendar** — the old Events page embedded a Google Calendar that
      showed a "no permission" error. If you make that calendar public, I'll add
      a live events/calendar section.

## Adding more photos later

Drop the next-numbered pair into `public/sessions/` (e.g. `session-9.jpg` +
`session-9-thumb.jpg`) and add an entry to `gallery` in `src/config.ts` with good
alt text. Keep files optimised: large ≈1600px long edge, thumb ≈700px.
(Originals were ~8MB each → optimised to ~430KB large / ~70KB thumb.)

## Nice to have (later)

- [ ] Dedicated About / Events pages (currently one rich single-page site).
- [ ] `www.northstowevc.uk` redirect (CNAME at registrar).
