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

## Architecture

- `index.html` is the single-page shell with semantic sections and progressive enhancement in mind.
- CSS is modularized into: `variables.css`, `base.css`, `layout.css`, `components.css`, `animations.css`, `responsive.css`.
- JavaScript is split by feature: `theme.js`, `nav.js`, `scroll-reveal.js`, `projects.js`, `terminal.js`, `contact.js`, `resume.js`, `cursor.js`, and `three-bg.js`.
- Static data lives in `js/data.js`, so content changes do not require structural or script edits.
- Animations and interactions are driven by lightweight DOM updates and `IntersectionObserver` for scroll-based effects.

## Animation Decisions

- Scroll reveals use CSS utility classes plus `IntersectionObserver` for smooth, browser-native motion.
- Animations are intentionally subtle and paced to support readability and keep the interface professional.
- The custom cursor and floating 3D background add polish without blocking core UI interactions.
- `responsive.css` includes `prefers-reduced-motion` overrides to reduce or disable non-essential motion when requested.

## Performance Optimization

- No build step; the project runs as plain static files for fastest deployment and debugging.
- CSS variables reduce repetition and make theme updates lightweight.
- `IntersectionObserver` defers animation work until elements enter view.
- Project cards and modal content are rendered on demand, not hard-coded in HTML.
- Assets are kept minimal; only one profile image is required and third-party dependencies are limited to Three.js.

## Accessibility Considerations

- Semantic HTML structure makes navigation easier for assistive technology.
- A visible skip link in `base.css` supports keyboard users.
- Navigation and modal controls are keyboard accessible, and interactive elements use clear labels.
- `prefers-reduced-motion` is respected to avoid motion discomfort.
- Color contrast is chosen for readability across light and dark themes.

## Trade-offs

- Chose vanilla JavaScript over a framework to minimize bundle size, at the cost of more manual state and DOM handling.
- Kept the site static rather than adding a backend, which simplifies deployment but limits dynamic content.
- The Three.js background adds visual interest but is intentionally lightweight to avoid hurting performance on lower-end devices.
- Animations are more restrained than a fully immersive experience, prioritizing usability and accessibility.

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
