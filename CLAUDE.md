# Freya Young — Portfolio

**Live repo:** https://github.com/aishajw/freya-portfolio  
**Design reference:** https://anju.design/ (layout, typography feel, case study structure)

---

## Hi Freya 👋

This is your portfolio codebase. Everything is plain HTML, CSS, and a little JavaScript — no frameworks, no build step. You can open any file directly in a browser or edit it here with Claude.

**To make changes with Claude:** open this folder in Claude Code (or drag it into a Claude conversation), describe what you want to change, and Claude will edit the files and show you a preview. You can then commit and push to GitHub.

### Good to know

- **There are 2 pages:** `index.html` (your homepage) and `case-study.html` (the case study page). Both are in this folder.
- **Your live site:** https://aishajw.github.io/freya-portfolio/ — it's hosted with **GitHub Pages**, which publishes whatever is on the `version-2` branch. (`version-1` is the old design, with the clickable photos on the right. It isn't online.)
- **Updates take a minute or so to show.** After Claude pushes a change, GitHub Pages rebuilds the site. Wait about a minute, then refresh. If it still looks old, close the tab and open the link again (your phone may be holding on to the old version).
- **To see changes straight away** without waiting, open `index.html` from this folder in your browser — that shows your local copy.
- **To see the mobile view on your laptop:** in Chrome, press **Cmd + Option + I** to open the developer tools. In the top-left corner of the panel that opens, click the **phone-and-tablet icon** (it's next to the arrow icon; hovering over it says "Toggle device toolbar"). Pick a phone, like iPhone 14, from the menu at the top of the page, or drag the edges to change the size. Press **Cmd + Option + I** again to close it.

---

## File structure

| File | What it is |
|------|------------|
| `index.html` | **Homepage** — hero with 5 rotating photos, chips, progress bar, Selected Works cards, About section |
| `case-study.html` | **Case study template** — copy this file and rename it for each project (e.g. `visa-checkout.html`) |

### To create a new case study page

1. Duplicate `case-study.html` and rename it (e.g. `visa-checkout.html`)
2. Ask Claude to fill in your content — project title, role, company, timeline, methods, sections, images
3. On `index.html`, update the Selected Works card to link to the new file
4. Commit and push

---

## Design system

- **Fonts:** Cormorant Garamond (serif headings), DM Sans (body), Raleway (labels/chips/UI)
- **Colours:** `--ink: #1A1A18` / `--mid: #6B6B62` / `--blue: #3D6080` / `--accent: #7A5C3A` / `--cream: #F9F7F4`
- **Style reference:** https://anju.design/ — full-bleed hero, editorial serif type, clean white/cream backgrounds, concave hero-to-content transition, right-side dot nav on case studies

---

## Notes for Claude

- **Never use** `/Users/aishajw/Downloads/profile.jpg` — Freya has explicitly said not to use this image anywhere on the site
- Only use images Freya explicitly provides by filename
- Hosting is GitHub Pages from the `version-2` branch (`version-1` = old design, not published) (no Netlify). After pushing, check `gh api repos/aishajw/freya-portfolio/pages/builds/latest` until `built`, then tell Freya to refresh
- The homepage hero carousel uses image files `images/hero-slide-1.jpg` to `hero-slide-5.jpg`
- Font for About h2 and About step paragraphs is Raleway
- Work section background is `#fff`
- Hero height is `100svh` on desktop; on mobile it's shorter (`78svh + 12vw`) so the work heading sits just under the carousel
- Spacing: 24px side gutters on mobile, 72px on desktop; 16px under bars/search/chips/tabs; 8px between chip rows
- Chips use `border-radius:0` (square), `text-transform:uppercase`
- The turquoise progress bar colour is `#3AB5AD`
- Case study pages: hero is `position:sticky;top:0;z-index:1` so the cream body scrolls over it with a concave arch (`.cs-body::before` handles the arch shape)
