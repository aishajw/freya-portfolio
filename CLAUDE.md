# Freya Young — Portfolio

## Hi Freya 👋

This is **version 1**.

### Good to know

- Paste this link into Claude so you can start editing: https://github.com/aishajw/freya-portfolio
- There are two versions. The one on the live preview (https://aishajw.github.io/freya-portfolio/) is **version 2**. You can ask Claude to open the index page for both versions so you can see which you prefer.
- There's also a case study page (`case-study.html`) that Aisha started on.
- To see the mobile view on your laptop in Chrome, press **Cmd + Option + I**, then click the phone-and-tablet icon in the top-left corner of the panel. Shortcut: click inside that panel and press **Cmd + Shift + M**.
- For nice fonts, have a look at https://facetypes.xyz/

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
