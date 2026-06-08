# Fresh Strategies — Work Showcase

A static, single‑page portfolio that showcases the kind of custom operational apps Fresh Strategies
builds — each entry is a **representation** paired with a **clickable interactive demo** filled with
invented data. Pure HTML/CSS/JS, no build step, designed to drop straight onto **GitHub Pages**.

🔗 **Live:** _enable Pages, then this becomes_ `https://freshstrategies.github.io/<repo>/`

## What's here

| | |
|---|---|
| `index.html` | The landing page — hero, sector‑grouped app cards (need → solve), capabilities, process, and contact/booking. |
| `assets/css/site.css` | Brand foundation + landing styles. |
| `assets/js/apps.js` | The app catalog — titles and need/solve copy (edit copy here). |
| `assets/js/site.js` | Renders the cards + wires the contact form. |
| `demos/*.html` | 10 self‑contained interactive mockups, each seeded with fictional data. |
| `demos/_shared/` | Shared demo shell — `demo.css` (app frame, tables, badges, phone frame) and `demo.js` (tabs, drawers, toasts). |

### The 10 demos

**Agriculture & Fresh Produce** — Field‑to‑Cooling Operations · Produce QC Inspection ·
Weekly Harvest Estimate · Planting Schedule & Reports · Grower Block Prep · Invoice QC Review ·
Promo & Ad‑Group Tracker
**Electrical & Trade Contracting** — Job Operations & Daily Reports · Time Cards & CA Compliance
**Finance & Distribution** — QuickBooks Financial Analysis

Every demo runs entirely in the browser on **invented demo data** — not a real client's system or
records. Nothing persists; a refresh (or the **↺ Reset** button) restores the demo data.

## Run locally

It's static — any web server works:

```bash
python -m http.server 5180      # then open http://localhost:5180
```

> Open `index.html` via a server (not `file://`) so the relative asset/demo links resolve.

## Deploy to GitHub Pages

1. Push this repo to the **FreshStrategies** org.
2. **Settings → Pages → Source: GitHub Actions** (the included
   [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) publishes the whole repo on every push to `main`).
   - Or, **Source: Deploy from a branch → `main` / root** works too.
3. The included **`.nojekyll`** file is required — it stops Pages' Jekyll from ignoring the
   `demos/_shared/` folder (underscore‑prefixed paths are skipped otherwise), which would break every demo.

All links are **relative**, so the site works at any base path (`/<repo>/` or a custom domain).

## Customizing

- **App copy** (titles, need/solve, tags) lives in [`assets/js/apps.js`](assets/js/apps.js).
- **Booking link** and **contact email** are in [`index.html`](index.html) / [`assets/js/site.js`](assets/js/site.js).
  The contact form currently composes a `mailto:` — swap in a [Formspree](https://formspree.io) endpoint
  in `site.js` if you'd rather capture submissions.
- **Brand colors** are CSS variables at the top of [`assets/css/site.css`](assets/css/site.css);
  per‑sector demo themes are in [`demos/_shared/demo.css`](demos/_shared/demo.css).

---
Fresh Strategies LLC · custom operational software
