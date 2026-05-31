# Brainstorm — Northstowe Volleyball Club Website

> Date: 2026-05-31

## Problem

The club has a bare "Coming soon" Google Site. They want a **good-looking,
modern website to attract young people** while also serving existing members.
Must be free, deploy via GitHub Actions, use a modern language/Markdown, and
ideally embed a calendar schedule + feedback form.

## Decisions

| Topic | Decision |
|-------|----------|
| Host | **GitHub Pages** |
| Framework | **Astro + Tailwind CSS** (Markdown content, near-zero JS, fast on mobile) |
| Form | **Web3Forms** (free unlimited, native styling, no backend) |
| Calendar | **Google Calendar embed** (later) + repo schedule data option |
| Primary goal | **Both** — recruit newcomers AND inform members |
| First milestone | **Polished home page first**, then expand |
| Who edits later | Owner, comfortable with Git → clean, commented files |
| Placeholders | **Realistic but clearly TODO-marked** |

## Design direction — "Court Energy"

- Anchor: forest green `#3A5A40`. Energy: electric lime `#C7F24B`. Spark: coral.
- Surface: warm court-sand `#F7F4EA`.
- Display **Archivo**, body **Hanken Grotesk** (self-hosted, Latin subset).
- CSS/SVG volleyball + court-line motifs, not stock photos.
- Mobile-first, accessible (skip link, focus styles, reduced-motion).

## Open questions (non-blocking)

- Final logo/wordmark treatment.
- Custom domain? (free via CNAME later.)
- Real photos — biggest single upgrade when available.
