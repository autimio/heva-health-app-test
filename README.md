# Heva Health App Test

Two-page React app demonstrating a simple counter/clock and an OpenFDA data browser with live search and a skeleton loader.

- Counter + Clock: numeric counter with configurable step (±) and a running digital clock (1s tick, no external libraries).
- OpenFDA Data: fetches Food Enforcement recalls and displays a filterable table with live search (debounced), server-side filtering, skeleton loading, and horizontal scroll for smaller screens.

Source API: https://open.fda.gov/apis/

## Tech Stack

- React 19 + TypeScript + Vite 7
- React Router DOM 7 (HashRouter)
- Tailwind CSS 3 (PostCSS + Autoprefixer)
- ESLint (TypeScript config)

## Requirements

- Node.js 18+ (Node 20+ recommended)
- npm
- Internet access (client fetches OpenFDA directly)

## Getting Started

1) Install dependencies

```
npm install
```

2) Run the app

```
npm run dev
```

3) Navigate using the header tabs

- Counter + Clock → counter with step input and live clock
- OpenFDA Data → table with text/classification filters

Hash-based routing is used so the app works on static hosting (e.g., GitHub Pages) without server rewrites.

## Available Scripts

- `npm run dev`: start the dev server
- `npm run build`: type-check and build for production
- `npm run preview`: preview the production build
- `npm run lint`: run ESLint
- `npm run test`: run unit tests (Vitest)
- `npm run test:ui`: interactive test runner

## Project Structure

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

## Implementation Notes

- Atomic Design: UI is composed from atoms → molecules → organisms → templates → pages. Reference: https://atomicdesign.bradfrost.com/chapter-2/
- Accessibility: high-contrast text, focus rings, keyboard-friendly nav, sticky header; table header stays visible.
- FDA search: input triggers API queries with 450ms debounce; previous requests are aborted. Quotes in search terms are escaped.
- Skeletons: while loading, a table-shaped skeleton is shown (no spinners).
- Table: fixed min-width with horizontal scrolling; long text wraps where appropriate.

## API Details

- Endpoint: `GET https://api.fda.gov/food/enforcement.json?limit=50`
- Filtering: `search` param combines clauses like:
  - `product_description:"term" OR reason_for_recall:"term" OR recalling_firm:"term"`
  - `classification:"Class I|II|III"`
- Docs: https://open.fda.gov/apis/

## Notes & Next Ideas

- Swap HashRouter for BrowserRouter if deploying with server rewrites.
- Add column sorting and pagination to the FDA table.
- Add API error boundary UI.
