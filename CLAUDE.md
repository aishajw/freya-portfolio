# Freya Young — Portfolio

> **⚠️ This is `version-1`, the old design. It isn't online. Don't make changes here.**
> The current site is **`version-2`**, which is what https://aishajw.github.io/freya-portfolio/ shows. To switch to it, ask Claude to "switch to the version-2 branch", or run `git checkout version-2`.
>
> **Note for Claude:** if someone asks to change the site while this branch is checked out, stop. Tell them they're on the old version and offer to switch to `version-2` first.

**Live repo:** https://github.com/aishajw/freya-portfolio  
**Design reference:** https://anju.design/ (layout, typography feel, case study structure)

---

## Hi Freya 👋

This is your portfolio codebase. Everything is plain HTML, CSS, and a little JavaScript — no frameworks, no build step. You can open any file directly in a browser or edit it here with Claude.

**To make changes with Claude:** open this folder in Claude Code (or drag it into a Claude conversation), describe what you want to change, and Claude will edit the files and show you a preview. You can then commit and push to GitHub.

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

- The homepage hero has 5 images embedded as base64 (large file ~4MB) — use Python for image encoding/replacement rather than trying to edit the base64 directly
- Font for About h2 and About step paragraphs is Raleway
- Work section background is `#fff`
- Hero height is `100svh`
- Spacing: 24px side gutters on mobile, 72px on desktop; 16px under bars/search/chips/tabs; 8px between chip rows
- Chips use `border-radius:0` (square), `text-transform:uppercase`
- The turquoise progress bar colour is `#3AB5AD`
- Case study pages: hero is `position:sticky;top:0;z-index:1` so the cream body scrolls over it with a concave arch (`.cs-body::before` handles the arch shape)
