# shahidkhanghouri.com

Academic CV site for Shahid Khan Ghouri, LLB candidate at Hazara University — Next.js 16 (App Router, Turbopack), React 19, Tailwind CSS 4, TypeScript.

## Getting started

```bash
pn install
cp .env.example .env
pn dev
```

The site runs at http://localhost:3000.

## Content

Copy is written inline in the section components under `app/_components/` (`hero`, `profile`, `education`, `legal-experience`, `moots-advocacy`, `areas-of-interest`, `skills`, `contact`, `footer`). The same copy is mirrored by hand in `app/page.md`, which is served at `/index.md`, to `Accept: text/markdown` requests, and indexed from `/llms.txt`. Edit both when changing copy.

Metadata lives in `app/layout.tsx`, the `Person` JSON-LD in `app/page.tsx`, and the social preview in `app/opengraph-image.tsx`.

## Environment

| Variable  | Required | Purpose |
|-----------|----------|---------|
| `NODE_ENV` | yes | `development` or `production`. Next sets it for `dev`/`build`/`start` and a `.env` value never overrides that; it is listed so `env.ts` validates when loaded outside Next. |
| `CV_LINK` | yes | Google Docs URL of the CV (no trailing slash, no `/export`). `app/cv/route.ts` fetches `$CV_LINK/export?format=pdf` server-side and streams the PDF back, because Google's export endpoint sends no CORS headers. The document must be shared as "Anyone with the link can view". |

Validated in `env.ts` via `@t3-oss/env-nextjs`.

## Scripts

| Script | Purpose |
|--------|---------|
| `pn dev` | Dev server (Turbopack) |
| `pn build` | Production build |
| `pn typecheck` | `tsc --noEmit` |
| `pn biome:check` | Lint + format, **writes** fixes |
| `pn knip` | Unused files, exports, and dependencies |

Lefthook runs `typecheck` + `biome:check` on commit and `build` + `knip` on push. Deploys are handled by Vercel; there is no GitHub Actions workflow.
