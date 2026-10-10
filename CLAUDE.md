# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project state

Freshly bootstrapped Create React App (TypeScript template, `react-scripts` 5) with React 19. `src/` still contains the CRA starter (`App.tsx`, `App.test.tsx`, etc.); there is no app-specific architecture, routing, or state management yet. The Firebase project and hosting sites are named "hethera".

## Commands

- `npm install` — `.npmrc` sets `legacy-peer-deps=true` (needed because React 19 conflicts with peer ranges in the CRA toolchain). CI uses `npm ci --legacy-peer-deps`.
- `npm start` — dev server at http://localhost:3000
- `npm run build` — production build into `build/` (the directory Firebase Hosting serves)
- `npm test` — Jest + React Testing Library in watch mode
  - Single run (non-watch): `CI=true npm test`
  - Single file: `npm test -- src/App.test.tsx`
  - Single test by name: `npm test -- -t "renders learn react link"`
- Type-check: `npx tsc --noEmit` (`strict` is on)
- Lint: no separate script; ESLint (`react-app`, `react-app/jest`) runs inside `start`/`build`. Note that `build` with `CI=true` treats lint warnings as errors.

## Deployment

Firebase Hosting, project `hethera-9264e`, with three hosting targets defined in `.firebaserc` / `firebase.json`. GitHub Actions (`.github/workflows/`) deploy automatically on push (Node 20):

| Branch    | Target    | Hosting site      | `REACT_APP_ENV` |
| --------- | --------- | ----------------- | --------------- |
| `main`    | `dev`     | `hethera-dev`     | `DEV`           |
| `staging` | `staging` | `hethera-staging` | `STAGING`       |
| `prod`    | `prod`    | `phlen-prod`      | `PROD`          |

- Pushing to `main` deploys to dev — there is no PR-gated step.
- `REACT_APP_ENV` is set at build time and is the intended way to branch on environment in app code (`process.env.REACT_APP_ENV`); it is not referenced in `src/` yet.
- Staging and dev send `X-Robots-Tag: noindex, nofollow`; all targets cache `/static/**` as immutable and use `cleanUrls`. If you change hosting config, keep the three target blocks in `firebase.json` in sync.
- Workflows require the `FIREBASE_SERVICE_ACCOUNT` repo secret.
- No SPA rewrite (`** → /index.html`) is configured; add one to each target if client-side routing is introduced.
