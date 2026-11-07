# BRO Petroleum Services website

Production-oriented bilingual Astro site for BRO Petroleum Services. The public launch structure is `/en/` and `/ar/`; the root route redirects to English.

## Local development

```powershell
npm install
Copy-Item .env.example .env
npm run dev
```

The public site intentionally does not invent BRO contact details, certifications, client names, project outcomes, or operating claims. Unapproved facts remain bracketed placeholders or disabled document cards until BRO supplies written approval.

Forms use a transactional email provider adapter. Copy `.env.example` to `.env` and set the provider, recipient, site URL, and Turnstile values before enabling production submissions. Without provider configuration, the endpoints return an explicit configuration error instead of a false success.

## Structure

- `src/pages/` — public routes and server endpoints
- `src/components/` — reusable UI components
- `src/lib/` — typed localized content, evidence data, and site configuration
- `src/styles/` — design system and responsive styles
- `public/assets/` — local website assets
- `scripts/smoke.mjs` — route and API smoke test

## Verification states

The transparent BRO logo source is preserved in `public/assets/brand/original/`; production variants are in `public/assets/brand/`. Background images remain local under `public/assets/backgrounds/`.

`src/lib/localized.ts` is the public content model. `src/lib/fleet.ts` remains evidence-only and must not be promoted to public claims without BRO confirmation.

## Production checks

```powershell
npm run check
npm run build
npm run test:smoke
```

Run `npm run dev -- --host 127.0.0.1` before `npm run test:smoke`, or set `SMOKE_BASE_URL` to a running deployment. `npm audit` currently reports dependency advisories that should be reviewed before launch; do not apply a force upgrade without compatibility testing.
