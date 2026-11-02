# bhinu.dev

Bhinu Puvvala’s engineering portfolio, built with Next.js 15, React 19, TypeScript, and CSS. Hosted on Vercel; pushes to `main` deploy to [bhinu.dev](https://bhinu.dev).

## Development

```sh
npm ci
npm run dev
```

## Validation

```sh
npm run check
npm run build
```

The portfolio uses a black visual system and a split layout: a sticky profile and section navigation on desktop, with experience and project content in a scrolling column. On mobile the layout stacks. Project descriptions retain benchmark conditions and link directly to source repositories. `public/resume.pdf` is the general SWE resume; private transcript data is never shipped.

Visual tokens and responsive rules are documented in DESIGN.md. Resume content is grounded in the owner’s supplied documents; PRODUCT.md records content constraints.
