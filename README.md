# Heva Health App Test

[![CI](https://github.com/autimio/heva-health-app-test/actions/workflows/ci.yml/badge.svg)](https://github.com/autimio/heva-health-app-test/actions/workflows/ci.yml)

Live: https://heva-health-app-test.vercel.app

Two screens:
- Counter + Clock: configurable step (±) + ticking clock.
- OpenFDA Data: searchable table (classification filter + skeleton). Data: https://open.fda.gov/apis/

## Tech Stack

- React 19 + TypeScript + Vite 7
- React Router DOM 7 (HashRouter)
- Tailwind CSS 3 (PostCSS + Autoprefixer)
- ESLint (TypeScript config)

## Requirements
- Node 18+ (20+ recommended), npm, internet access

## Getting Started

```
npm install
npm run dev
```
Hash routing is used, so it works on static hosting.

## Available Scripts

- `npm run dev`: start the dev server
- `npm run build`: type-check and build for production
- `npm run preview`: preview the production build
- `npm run lint`: run ESLint
- `npm run test`: run unit tests (Vitest)
- `npm run test:ui`: interactive test runner
- `npm run cy:open`: open Cypress runner
- `npm run cy:run`: run Cypress headless

## Tests
- Unit: Vitest + Testing Library (happy-dom). Run `npm run test` or `npm run test:ui`.
- E2E: Cypress. Run `npm run cy:open` or `npm run cy:run` (stubs FDA API with `cy.intercept`).
- CI: GitHub Actions runs both on push/PR (`.github/workflows/ci.yml`).

## Structure

```
src/
  components/
    atoms/        # Button, Input, Select, Skeleton
    molecules/    # LabeledField, CounterControls, FilterBar
    organisms/    # CounterPanel, HeaderNav, FDAResults
    templates/    # AppLayout
  pages/          # CounterClock, FDAData
  services/       # openfda (URL builders)
  utils/          # date
  types/          # openfda API types
```

## Notes
- Atomic Design (atoms → molecules → organisms → templates → pages). Ref: https://atomicdesign.bradfrost.com/chapter-2/

## API Details

- Endpoint: `GET https://api.fda.gov/food/enforcement.json?limit=50`
- Filtering: `search` param combines clauses like:
  - `product_description:"term" OR reason_for_recall:"term" OR recalling_firm:"term"`
  - `classification:"Class I|II|III"`
- Docs: https://open.fda.gov/apis/
