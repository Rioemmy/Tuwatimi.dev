# Tuwatimi Emmanuel — Portfolio

Personal portfolio website for Tuwatimi Emmanuel, Frontend Developer.

---

## Project Structure

```
tuwatimi-portfolio/
│
├── index.html              # Entry point — markup only, no inline CSS or JS
│
├── css/
│   ├── variables.css       # All CSS custom properties (colours, fonts, easing)
│   ├── base.css            # Reset, body defaults, scrollbar, skip-link
│   ├── layout.css          # Section containers, grids, hero/about/contact layout
│   ├── components.css      # All UI components (nav, buttons, cards, terminal, modal…)
│   ├── animations.css      # @keyframes and .reveal scroll-animation utility
│   └── responsive.css      # Breakpoints and prefers-reduced-motion overrides
│
├── js/
│   ├── data.js             # Static data — projects array, resume text
│   ├── cursor.js           # Custom animated cursor
│   ├── theme.js            # Light / dark mode toggle
│   ├── nav.js              # Mobile hamburger menu
│   ├── three-bg.js         # Three.js 3D floating shapes background
│   ├── scroll-reveal.js    # IntersectionObserver scroll-reveal + skill bars
│   ├── projects.js         # Project card renderer, filter buttons, modal
│   ├── terminal.js         # Interactive CLI terminal widget
│   ├── contact.js          # Contact form validation & submit handler
│   └── resume.js           # Resume plain-text download
│
└── assets/
    └── images/
        └── profile.jpg     # ← Replace with your actual profile photo
```

---

## Getting Started

No build tools required — this is a pure HTML/CSS/JS project.

```bash
# Option 1: open directly
open index.html

# Option 2: local dev server (recommended — avoids CORS issues with Three.js)
npx serve .
# or
python3 -m http.server 3000
```

---

## Customisation

| What to change | Where |
|---|---|
| Colours / fonts / spacing | `css/variables.css` |
| Projects list | `js/data.js` → `projects` array |
| Resume text | `js/data.js` → `resumeContent` |
| Contact form endpoint | `js/contact.js` → replace `setTimeout` with real API call |
| Profile photo | `assets/images/profile.jpg` |
| Personal copy (bio, stats) | `index.html` — clearly sectioned with HTML comments |

---

## Tech Stack

- HTML5 · CSS3 (custom properties, grid, animations)
- Vanilla JavaScript (ES6+, no framework)
- [Three.js r128](https://threejs.org/) — 3D background
- [Plus Jakarta Sans · Playfair Display · JetBrains Mono](https://fonts.google.com/) — typography

---

## Deployment

Works on any static host: **GitHub Pages**, **Vercel**, **Netlify**, **Cloudflare Pages**.

GitHub Pages quick-start:

```bash
git init
git add .
git commit -m "initial portfolio"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
# then enable Pages in repo Settings → Pages → Deploy from branch: main
```
