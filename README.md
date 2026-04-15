# bhinu.dev

Personal portfolio website for [Bhinu Puvvala](https://linkedin.com/in/bhinu-santosh) — Software Engineer & Data Scientist @ UW–Madison.

## Stack

- **Framework** — Next.js 15 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS + CSS custom properties
- **Animations** — Framer Motion
- **Fonts** — Inter, JetBrains Mono
- **Design system** — [Bento](https://typeui.sh) dark theme

## Design

Dark bento grid layout. Cards of varying widths arranged in a 12-column grid, with a warm peach (`#FAD4C0`) accent against a near-black (`#080809`) background. Scroll-triggered entrance animations via Framer Motion.

**Sections:** Hero · Experience · Education · Skills · Projects · Contact

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Deployed on Vercel. Push to `main` triggers a production deploy automatically.

```bash
git push origin main
```

## Project Structure

```
src/
└── app/
    ├── components/
    │   └── Portfolio.tsx   # entire site — data, components, layout
    ├── globals.css          # design tokens, CSS classes, hover effects
    ├── layout.tsx           # font loading, metadata
    └── page.tsx             # entry point
```
