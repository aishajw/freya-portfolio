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
  - **Shortcut:** once the developer tools are open (Cmd + Option + I), click anywhere inside that panel, then press **Cmd + Shift + M** to switch between laptop and mobile view.
- **Looking for nice fonts?** Browse https://facetypes.xyz/ for ideas. When you find one you like, tell Claude its name and Claude can add it to the site.

---

## File structure

| File | What it is |
|------|------------|
| `index.html` | **Homepage** — hero with your name and a scrolling row of photos, "here's some of my work" cards, About section, and the teal "Let's connect!" footer |
| `case-study.html` | **Case study template** — copy this file and rename it for each project (e.g. `visa-checkout.html`) |

### To create a new case study page

1. Duplicate `case-study.html` and rename it (e.g. `visa-checkout.html`)
2. Ask Claude to fill in your content — project title, role, company, timeline, methods, sections, images
3. On `index.html`, update the Selected Works card to link to the new file
4. Commit and push

---

## Design system

**Homepage (`index.html`)**
- **Fonts:** Pecita, a handwritten font, for "Freya Young", "my work", "It's nice to meet you! I'm Freya" and "Let's connect!". Poppins for body text, labels and chips. Raleway for the other About headings.
- **Colours:** white background (`#fff`) / text `--ink: #1C1916` / grey text `--mid: #5A5450` / teal `--teal: #3AB5AD` (Contact button and footer) / brown links `--accent: #7A5C3A`
- **Layout:** hero = name in the middle, scrolling row of square photos underneath. Work cards = overlapping collage on desktop, stacked full cards in white frames on mobile. About = text on the left, a pinned photo on the right that changes for each section (on mobile the photo is pinned at the top).

**Case study page (`case-study.html`)**
- Still uses the older styling: Cormorant Garamond headings, DM Sans body, Raleway labels, cream background. It hasn't been restyled to match the homepage yet.

---

## Notes for Claude

- Hosting is GitHub Pages from the `version-2` branch (`version-1` = old design, not published) (no Netlify). After pushing, check `gh api repos/aishajw/freya-portfolio/pages/builds/latest` until `built`, then tell Freya to refresh
- The homepage hero carousel uses image files `images/hero-slide-1.jpg` to `hero-slide-5.jpg`
- About headings: the first (`data-step="0"`) is Pecita, the rest are Raleway 400. About paragraphs are Poppins
- Work section background is `#fff`
- Hero height is `100svh` on desktop; on mobile it's shorter (`78svh + 12vw`) so the work heading sits just under the carousel
- Spacing: 24px side gutters on mobile, 72px on desktop; 16px under bars/search/chips/tabs; 8px between chip rows
- Chips use `border-radius:0` (square), `text-transform:uppercase`
- Case study page: hero is `position:sticky;top:0;z-index:1` so the cream body scrolls over it
