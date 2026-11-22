# Freya Young — Portfolio

## Hi Freya 👋

This is **version 2**.

### Good to know

- Paste this link into Claude so you can start editing: https://github.com/aishajw/freya-portfolio
- There are two versions. The one on the live preview (https://aishajw.github.io/freya-portfolio/) is **version 2**. You can ask Claude to open the index page for both versions so you can see which you prefer.
- There's also a case study page (`case-study.html`) that Aisha started on.
- The live preview uses GitHub Pages, so there's a delay between making an update and seeing it on the live preview link. To see your updates immediately, make sure you have `index.html` open in your browser.
- To see the mobile view on your laptop in Chrome, press **Cmd + Option + I**, then click the phone-and-tablet icon in the top-left corner of the panel.
- This is a nice layout of a portfolio: https://hacklab.framer.website/
- For nice fonts, have a look at https://facetypes.xyz/

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
