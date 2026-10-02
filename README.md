# Glory Impact Website

Source for [www.glory-impact.com](https://www.glory-impact.com).

## Stack

- React 18 + Vite
- Tailwind CSS
- GSAP (ScrollTrigger, SplitText) via `@gsap/react`
- Lenis smooth scrolling
- Phosphor icons

All motion respects `prefers-reduced-motion`: pinned sections fall back to a normal stacked layout.

## Develop

```bash
npm install
npm run dev
```

## Deploy (GitHub Pages)

```bash
npm run deploy
```

This builds to `dist/` and pushes it to the `gh-pages` branch. `public/CNAME` keeps the custom domain (`www.glory-impact.com`) on every deploy.

## Images

- Product photos: `src/assets/products/` (converted from the original product artwork)
- Client logos: `src/assets/clients/`
- Stock photography from [Unsplash](https://unsplash.com/license): `src/assets/stock/`

## Agent skills

`.claude/skills/` holds the Claude Code skills used to build the site:

- `scroll-craft` from [nateherkai/scroll-craft](https://github.com/nateherkai/scroll-craft)
- `gsap-*` from [greensock/gsap-skills](https://github.com/greensock/gsap-skills)
- `taste-skill` and `redesign-skill` from [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill)

Each folder keeps its upstream MIT license.
