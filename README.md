# CV Website

A statically-exported [Next.js](https://nextjs.org) CV/resume site with English/Russian internationalization, deployed to GitHub Pages.

## Requirements

- Node.js >= 18.17.0 (CI uses Node 22)
- npm

## Setup

```bash
npm ci
```

## Scripts

| Command         | Description                                              |
| --------------- | -------------------------------------------------------- |
| `npm run dev`   | Start the dev server at http://localhost:3000            |
| `npm run build` | Type-check + static export to `out/`                     |
| `npm start`     | Serve a production build (run `npm run build` first)     |
| `npm run lint`  | Lint with ESLint (`eslint-config-next`)                  |
| `npm test`      | Run smoke tests (`node --test`)                          |

## Project structure

```
app/                  # Next.js App Router
  [lang]/             # Internationalized routes (en, ru)
    components/       # CV React components
  providers/          # React context providers (theme, dictionary)
dictionaries/         # Translation JSON (en, ru, common)
tests/                # Smoke tests
i18n-config.ts        # Locale configuration
get-dictionary.ts     # Dictionary loader
next.config.js        # Next.js config (output: 'export')
eslint.config.mjs     # ESLint flat config
```

## Internationalization

Locales are defined in `i18n-config.ts` (`en`, `ru`). Each has a dictionary in
`dictionaries/`. The smoke tests assert all locale dictionaries are valid JSON
and share an identical key structure, so a missing translation key fails CI.

## Deployment

The site builds to a static export (`output: 'export'` in `next.config.js`), so
**API routes and middleware do not run in production** — it is a fully static
site.

GitHub Actions:

- **`ci.yml`** — runs on feature branches and PRs: install, lint, test, build.
- **`nextjs.yml`** — deploys to GitHub Pages on version tag push (`v*`) or
  manual dispatch.

Cut a release by pushing a tag:

```bash
git tag v1.2.3
git push --tags
```
