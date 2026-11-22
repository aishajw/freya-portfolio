# Freya Young — Portfolio

This is **version 1** of the portfolio (the `version-1` branch). Version 2 is on the `version-2` branch.

**Live repo:** https://github.com/aishajw/freya-portfolio  
**Design reference:** https://anju.design/ (layout, typography feel, case study structure)

---

## Hi Freya 👋

This is your portfolio codebase. Everything is plain HTML, CSS, and a little JavaScript — no frameworks, no build step. You can open any file directly in a browser or edit it here with Claude.

**To make changes with Claude:** open this folder in Claude Code (or drag it into a Claude conversation), describe what you want to change, and Claude will edit the files and show you a preview. You can then commit and push to GitHub.

### Good to know

- **Open the repo in Claude:** copy this link into Claude so it can see the repo and you can start editing: https://github.com/aishajw/freya-portfolio/tree/version-1
- **There are 2 pages:** `index.html` (your homepage) and `case-study.html` (the case study page). There's also `hero-exploration.html`, an extra page for trying out hero ideas.
- **Your live site** (https://aishajw.github.io/freya-portfolio/) shows **version 2**. Version 1 isn't published, so changes here won't show on the live site.
- **To see version 1**, open `index.html` from this folder in your browser.
- **To see the mobile view on your laptop:** in Chrome, press **Cmd + Option + I** to open the developer tools. In the top-left corner of the panel that opens, click the **phone-and-tablet icon** (it's next to the arrow icon; hovering over it says "Toggle device toolbar"). Pick a phone, like iPhone 14, from the menu at the top of the page, or drag the edges to change the size. Press **Cmd + Option + I** again to close it.
  - **Shortcut:** once the developer tools are open (Cmd + Option + I), click anywhere inside that panel, then press **Cmd + Shift + M** to switch between laptop and mobile view.
- **Looking for nice fonts?** Browse https://facetypes.xyz/ for ideas. When you find one you like, tell Claude its name and Claude can add it to the site.

---

## File structure

| File | What it is |
|------|------------|
| `index.html` | **Homepage** — hero with 4 rotating photos (`images/hero-slide-2.jpg` to `hero-slide-5.jpg`), chips, progress bar, Selected Works cards, About section |
| `case-study.html` | **Case study template** — copy this file and rename it for each project (e.g. `visa-checkout.html`) |

### To create a new case study page

1. Duplicate `case-study.html` and rename it (e.g. `visa-checkout.html`)
2. Ask Claude to fill in your content — project title, role, company, timeline, methods, sections, images
3. On `index.html`, update the Selected Works card to link to the new file
4. Commit and push

---

## Design system

- **Fonts:** Cormorant Garamond (serif headings), DM Sans (body), Raleway (labels/chips/UI)
- **Colours:** `--ink: #1C1916` / `--mid: #5A5450` / `--blue: #3D6080` / `--accent: #7A5C3A` / `--teal: #3AB5AD` / cream background `--bg: #F8F4EE`
- **Style reference:** https://anju.design/ — full-bleed hero, editorial serif type, clean white/cream backgrounds, right-side dot nav on case studies

---

## Notes for Claude

- The homepage hero photos are image files in `images/` (`hero-slide-2.jpg` to `hero-slide-5.jpg`)
- Version 1 isn't published. GitHub Pages publishes the `version-2` branch
- Font for About h2 and About step paragraphs is Raleway
- Work section background is `#fff`
- Hero height is `100svh` on desktop; on mobile it stacks and is at least `100svh + 3rem`
- Spacing: 24px side gutters on mobile, 72px on desktop; 16px under bars/search/chips/tabs; 8px between chip rows
- Chips use `border-radius:0` (square), `text-transform:uppercase`
- The turquoise progress bar colour is `#3AB5AD`
- Case study pages: hero is `position:sticky;top:0;z-index:1` so the cream body scrolls over it
