# Multi-site platform (Power Digitizing + tenants)

One Next.js codebase, many websites. The request hostname selects a site config; components never hardcode a brand.

## Run
```
cp .env.example .env.local
npm install
npm run dev
```
Locally every hostname falls back to `DEFAULT_SITE_ID`. To test another tenant, use its domain, e.g. add `127.0.0.1 client-001.example.com` to your hosts file and open `http://client-001.example.com:3000`.

## How tenants resolve
`middleware.ts` forwards the hostname -> `lib/tenant.ts` matches it against `domains` in `config/sites/*` (exact, or `*.sub.domain.com` wildcards) -> layout injects theme CSS variables, fonts, metadata and JSON-LD -> shared components render that site's data.

## Add a site
1. Copy `config/sites/client-001.ts`, change id, domains, theme, content.
2. Register it in `config/sites/index.ts`.
3. Point the domain at your deployment and add it as a domain in your host (Vercel: Project > Domains).
The config is validated with Zod at build time; an invalid colour or missing field fails the build.

## Theme and fonts
Colours are tokens (`background`, `primary`, `accent`, ...) mapped to CSS variables. Fonts are chosen by key from `lib/fonts.ts` (next/font needs static declarations); add a font there and to `FONT_KEYS`.

## Not built yet (next steps)
Header/hero GSAP and Framer Motion polish, patches/portfolio/blog/process/testimonials/stats sections, service detail pages, quote form with uploads and Resend emails, analytics scripts, legal pages, a database/CMS-backed tenant registry.

## Notes
- Next 16 renames `middleware.ts` to `proxy.ts`; the contents are unchanged.
- Placeholder contact email in `powerdigitizing.ts` must be replaced with real business details.

# Power-Digitizing
