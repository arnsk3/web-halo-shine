# Senthil Nagappan — Portfolio

A brand-forward single-page portfolio for **Senthil Kumar Nagappan**, showcasing
brand identity systems, logos, and brand guidelines alongside design-systems,
accessibility, and AI-governance work.

Live: https://web-halo-shine.lovable.app · Custom domain: www.senthilnagappan.com

## Highlights

- **Brand-first layout** — hero and identity-systems grid lead the page so brand
  directors immediately see logos, palettes, type systems, and guidelines.
- **WCAG 2.2 AAA-oriented** — semantic HTML, keyboard navigation, and
  AAA-checked color tokens.
- **Design-token driven** — all colors, gradients, and shadows come from
  semantic CSS variables in `src/index.css`; no hardcoded color utilities.

## Tech Stack

- React 18 + TypeScript 5
- Vite 5
- Tailwind CSS v3 + shadcn/ui (Radix primitives)
- TanStack Query
- Vitest (unit) + Playwright (e2e)

## Getting Started

```sh
npm install
npm run dev        # start dev server on http://localhost:8080
```

### Scripts

| Command             | Description                        |
| ------------------- | ---------------------------------- |
| `npm run dev`       | Start the Vite dev server          |
| `npm run build`     | Production build                   |
| `npm run preview`   | Preview the production build       |
| `npm run lint`      | Run ESLint                         |
| `npm run test`      | Run Vitest unit tests              |
| `npm run test:e2e`  | Run Playwright end-to-end tests    |

## Project Structure

```text
.
├── public/                     # Static assets served as-is
│   ├── Senthil_Nagappan_Resume.pdf
│   ├── headshot.jpg
│   ├── llms.txt, robots.txt, sitemap.xml, CNAME
│   └── favicon.*
├── src/
│   ├── components/
│   │   ├── BrandIdentitySection.tsx   # Brand-forward identity showcase
│   │   ├── ExpertiseSection.tsx       # Domain expertise
│   │   ├── AISkillsMatrix.tsx         # AI skills matrix
│   │   ├── NavLink.tsx                # Nav link helper
│   │   ├── ThemeSwitcher.tsx          # Theme toggle
│   │   └── ui/                        # shadcn/ui primitives
│   ├── pages/
│   │   ├── Index.tsx                  # Main single-page portfolio
│   │   └── NotFound.tsx               # 404 route
│   ├── hooks/                         # Reusable hooks (use-mobile, use-toast)
│   ├── lib/                           # Utilities (utils.ts)
│   ├── test/                          # Vitest setup + example tests
│   ├── App.tsx                        # Router + providers
│   ├── main.tsx                       # App entry
│   └── index.css                      # Design tokens & global styles
├── e2e/                        # Playwright specs
├── index.html                  # HTML shell + SEO metadata
└── vite.config.ts
```

## Routing

Single-page app with two routes in `src/App.tsx`:

- `/` → `Index` (full portfolio: hero, brand identity, expertise, case studies,
  about, approach, resume, contact)
- `*` → `NotFound`

## Deployment

Deployed via Lovable and served on the custom domain configured in
`public/CNAME`. SEO metadata lives in `index.html`; the crawler manifest is in
`public/llms.txt` and `public/sitemap.xml`.
