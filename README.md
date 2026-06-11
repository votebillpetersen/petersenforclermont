# Bill Petersen for Clermont City Council — Seat 5

Campaign website for **William "Bill" Petersen**, incumbent candidate for Clermont City Council Seat 5 in the **November 3, 2026** municipal election.

**Theme:** *Protecting Our Quality of Life.*

## Pages

- **Home** — Hero, theme, top issues, calls to action.
- **About Bill** — Biography, service record, family, community involvement.
- **Issues** — Policy positions organized around the quality-of-life theme.
- **Endorsements** — Supporters, elected officials, community leaders, organizations.
- **Volunteer** — Sign-up form for canvassing, phone banking, events, yard signs.
- **Contact** — Campaign contact details and inquiry form.
- **Donate** — Contribution page (compliant with Florida municipal campaign finance rules).

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- ESLint (`eslint-config-next`)
- `src/` directory layout with `@/*` import alias

## Getting Started

Install dependencies (one-time):

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local dev server with hot reload |
| `npm run build` | Build the production bundle |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
  app/
    layout.tsx       # Root layout
    page.tsx         # Home page
    globals.css      # Tailwind directives + global styles
```

Additional page routes (`/about`, `/issues`, `/endorsements`, `/volunteer`, `/contact`, `/donate`) will be added under `src/app/` as the build progresses.

## Compliance

All campaign-finance disclosures, paid-for-by language, and contribution limits must conform to Florida statutes governing municipal candidates and the City of Clermont's local requirements. Confirm disclaimers with the campaign treasurer before publishing the Donate page.
