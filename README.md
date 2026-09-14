# Cupid Talent

Professional creator-management studio site. White, black, and wine. React + Vite + TanStack Start.

## Run it

Needs **Node 22** and npm.

```bash
npm install
npm run dev
```

Then open the address printed in the terminal (the site is served on port 8080).

```bash
npm run typecheck   # TypeScript
npm run build       # production build
```

## Where to edit

| What | File |
| --- | --- |
| Copy, press, awards, CEO quote, team, testimonials, services | `src/lib/content.ts` |
| Privacy & terms | `src/lib/legal.ts` |
| Home page sections | `src/routes/index.tsx` and `src/components/home/` |
| Apply form | `src/components/contact/contact-form.tsx` |
| Colours, type | `src/styles.css` |
| Logo, cherub, press marks, share card | `public/` |
| Team portraits | drop a photo in `public/team/` and set `photo` on that person in `content.ts` |

Jamie Stewart is named as founder. The other seats stay “forthcoming” until you add a `name` (and optional `photo`).

## Pages

- `/` — home
- `/contact` — apply (18+ confirmation required)
- `/privacy` — privacy
- `/terms` — site terms

Applications are stored in the visitor’s browser only. They are **not** emailed unless you wire that up. The studio address on the site is `apply@cupidtalent.com`.

## Stack

TanStack Start, React 19, Tailwind v4, React Hook Form + Zod, Sonner.

No login and no database on this site.

Send this repo to anyone who should work on it. They clone it, run `npm install && npm run dev`.
