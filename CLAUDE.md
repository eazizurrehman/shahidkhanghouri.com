@AGENTS.md

# shahidkhanghouri.com

Personal academic CV site for Shahid Khan Ghouri, an LLB candidate at Hazara University. Next.js 16 (App Router, Turbopack), React 19, Tailwind 4, TypeScript, Biome, pnpm.

## Do not write comments

Zero comments by default. Do not explain what code does, why a change was made, or narrate decisions. The only comments allowed are machine-readable directives that change behavior if removed (`biome-ignore`, `@ts-expect-error`) and constraints the code genuinely cannot express.

## Content rules (legal profession)

Shahid is a law student, not an enrolled advocate. Section 58 of the Legal Practitioners and Bar Councils Act 1973 penalises non-advocates who practise law, and Rule 135 of the 1976 Rules bars soliciting work by advertisement.

- Never describe him as "Advocate", "Lawyer", "Attorney", "Legal Consultant", or "Legal Professional".
- Never offer "legal advice", "consultation", "services", fees, or case intake. Contact is for internships, research, and academic/moot collaboration only.
- No testimonials, outcome claims, superlatives ("best", "expert", "leading"), or stat counters.
- Every fact must come from his CV. Do not invent credentials, dates, publications, memberships, or results.
- Use `Person` JSON-LD, never `Attorney` or `LegalService`.
- Visible copy uses law-CV vocabulary (Profile, Legal Experience, Moots & Advocacy, Areas of Interest). No developer idioms (projects, tech stack, skill chips).

## Content goes directly in the file that renders it

Do not create a content/data module and map over it. There is no `site.ts` or `content.ts`, and none should be added.

- HTML content is written **directly as JSX** in the component that renders it.
- Markdown content is written **directly in a `page.md` sitting next to that route's `page.tsx`**. Route handlers read the file and serve it verbatim.
- Do not introduce a shared helper whose only job is to map data into markup.

**`.md` and `.tsx` must mirror each other exactly** — same folder, same filename, different extension:

```
app/page.tsx                     app/page.md
app/llms.txt/route.ts            app/llms.txt/content.md
```

Next ignores unknown extensions in `app/`, so `page.md` co-exists with `page.tsx` safely.

## Routing

- The homepage is at `/` (`app/page.tsx`). Its markdown mirror is served at `/index.md` and to `Accept: text/markdown` requests via rewrites in `next.config.ts` to `/md/home`.
- **`proxy.ts` is the middleware** (Next 16 renamed it from `middleware.ts`). It handles the vanity redirects `/mail`, `/email`, `/whatsapp`.
- **`config.matcher` in `proxy.ts` must stay a literal array.** Next statically analyses it.

## Content negotiation

**Editing site copy means editing both the `.tsx` and `app/page.md`.** Nothing enforces this; they will silently drift. To find drift, grep a sentence — it should appear in exactly two files.

```bash
curl -s -H "Accept: text/html"     localhost:3000/ | head -c 300
curl -s -H "Accept: text/markdown" localhost:3000/
```

## Structure

- `app/_components/` — all components (named exports; no default exports). One component per home section.
- `app/_shadcn/` — shadcn output. Biome ignores this directory; do not hand-edit or lint-fix it.
- `app/_fonts/` — static TTFs (OFL) used only by `opengraph-image.tsx`, because `next/font` does not apply inside `ImageResponse`.
- `env.ts` — validated env via `@t3-oss/env-nextjs`. Read env through `env`, never `process.env`.

## Things that are the way they are on purpose

- **`/cv` is a route handler, not a client fetch.** Google Docs' export endpoint sends no CORS headers. `app/cv/route.ts` fetches server-side and streams the PDF. `CV_LINK` is server-only and **required**.
- **`/cv` is never cached** (`cache: "no-store"` on the fetch, `Cache-Control: no-store` on the response) so edits to the Google Doc show up on the next download. Do not add `revalidate` or `s-maxage` back.
- **Fonts:** Source Serif 4 (headings, name, small caps) and Inter (body). In custom CSS reference `var(--font-source-serif)` — `--font-serif` lives in `@theme inline` and is not emitted as a CSS variable.
- **Palette:** ink and oxblood on ivory, from the Pakistan Bar Council student dress code (grey coat, maroon tie). Brass (`--brass`) is for rules and the portrait plate frame only — it fails AA as text. Links are underlined because the accent is not distinguishable from body text by colour alone.
- **Portrait:** `public/shahid-khan-ghouri.webp` is a background-removed cutout (transparent WebP). The hero plate supplies the backdrop via `--muted`, so it adapts to both themes — do not bake a background colour into the image. When replacing it, use a new filename (and update `hero.tsx`, the JSON-LD `image`, and `page.md`): `next/image` caches optimised images by URL for 4 hours, so a same-name swap keeps serving the old photo.
- **Reveal-on-scroll is CSS + IntersectionObserver**, with a `<noscript>` fallback in `layout.tsx`. `prefers-reduced-motion` is handled in one block in `globals.css`.

## Workflow

- `pn dev` / `pn build` / `pn typecheck` / `pn biome:check` (writes fixes) / `pn knip`. Use `pn` and `pnx`, not `npm`/`npx`.
- Biome does both lint and format — there is no ESLint or Prettier.
- Lefthook runs `typecheck` + `biome:check` on commit and `build` + `knip` on push. Commits are blocked on `main`/`master`/`prod`/`production`/`staging` — work on `development`.
- Commit messages: conventional, **single line, no body**. Scope must be one of `app, ui, content, seo, a11y, perf, deps, config, root` (see `.commitlintrc.yaml`).
- Deploys run on Vercel. Do not add GitHub Actions CI.
