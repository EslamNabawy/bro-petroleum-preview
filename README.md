# BRO Petroleum — preview

Single-page preview build of the BRO Petroleum Services website.

- The homepage (`/en/`) is the new design from the Stitch mock-up.
- Every other route, including `/ar/`, renders a white "this is a preview version" placeholder.
- Forms and quote/careers links are placeholders that point at the preview page.

## Stack

- Astro 5, static output (`output: 'static'`), deployed to GitHub Pages.
- Tailwind CSS v3, compiled locally and scoped to the homepage only (`src/styles/home.css`).
- No client-side framework, no runtime API.

## Commands

```sh
npm install
npm run dev      # local dev server
npm run check    # astro check
npm run build    # type-check + static build to dist/
npm run preview  # serve dist/ locally
npm run test:smoke   # hit every route with SMOKE_BASE_URL pointing at a running server
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml` and publishes `dist/` to GitHub Pages:
<https://eslamnabawy.github.io/bro-petroleum-preview/>

The site is set to `noindex` while it is a preview.

## Structure

```
src/pages/en/index.astro        homepage (new design)
src/pages/en/[...slug].astro    placeholder pages for every other English route
src/pages/ar/                   Arabic placeholders
src/pages/404.astro             not-found page
src/components/home/            header + footer used by the homepage
src/layouts/HomeLayout.astro    homepage document shell
src/layouts/PreviewLayout.astro placeholder page shell
src/lib/urls.ts                 base-path aware link helpers
public/assets/                  logo + background imagery
```
