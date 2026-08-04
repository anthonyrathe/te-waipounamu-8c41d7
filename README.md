# Te Waipounamu — South Island Grand Loop

The 17-day South Island campervan trip (Justine & Anthony, 5–21 Nov 2026) as a
cinematic, image-rich webapp. One **clockwise** loop, Christchurch ↔ Christchurch:
**9 camp nights** (DOC sites, lakefront holiday parks, one famous free camp) and
**7 boutique-lodge nights**.

The loop runs clockwise on purpose: the new moon falls on **9 Nov 2026**, so going
Banks Peninsula → Mackenzie first puts the Mt John Dark Sky tour on the 6th and the
free Lake Pukaki camp on the 8th — the darkest nights of the trip.

## Live site

**https://anthonyrathe.github.io/te-waipounamu-8c41d7/**

Hosted free on GitHub Pages from this folder (`webapp/` is its own git repo, pushed to
`anthonyrathe/te-waipounamu-8c41d7`, Pages serving `main` at root).

> ⚠ The repo is **public** — GitHub Pages needs a paid plan to serve from a private repo.
> The page carries `<meta name="robots" content="noindex, nofollow, noarchive, nosnippet">`
> so it stays out of search results, and the URL has a random suffix, but anyone with the
> link can read it. It names both travellers and lists the exact dates you're away from home.
> `robots.txt` is included but is **not** what protects it — crawlers only honour robots.txt at
> a domain root, never under `/<repo>/`. The meta tag is the mechanism that works here.

### Redeploy after editing

```bash
cd webapp
git add -A && git commit -m "update itinerary" && git push
# Pages rebuilds in ~1 minute
```

## Open it locally

Easiest: double-click `index.html`.

Nicer: serve it —

```bash
cd webapp
python3 -m http.server 8765
# → http://localhost:8765
```

(Needs internet for map tiles, fonts and photos.)

## What's inside

- **The Loop** — satellite route map: numbered pins (teal ⛺ camp / amber 🏡 lodge),
  hoverable drive legs, clickable popups with the night's stay and price.
- **Seventeen days** — scroll-driven journal: every day with photo galleries (tap any
  photo → lightbox), drive chip, narrative, activities with per-person prices and
  live booking links (plus alternatives), and a "Tonight" card showing the exact
  stay, its price for two, booking buttons and alternative stays.
- **Wild nights** — the 9 camp spots as a gallery, with DOC booking links, FREE
  badges, and the 2026 freedom-camping rules (green warrant!) + the apps to use.
- **Stay finder** — pick any stop, dates pre-filled from the itinerary but editable;
  one tap opens the live search on Booking.com / Airbnb (2 adults, EUR), CamperMate
  or the DOC booking portal.
- **Book it, in order** — flights (the quoted Cathay fare plus 2 alternatives), the
  campervan (5 real vans with per-day rates and quote links), and the full booking
  checklist sorted by sell-out urgency with prices and links.
- **Budget** — the premium programme per person, with a trim-it-back panel.

## Editing

All content lives in `js/data.js` (NIGHTS, DAYS, CAMPER, FLIGHTS, BUDGET,
CHECKLIST…). Image URLs live in `js/images.js` — auto-generated, every URL
HEAD-verified; scenery keys are arrays (galleries). Regenerate via
`/tmp/nz_images/fetch_south.py` + `make_images_south.py`. No build step — edit
and refresh.
