# Open Law Web

Public marketing and documentation site for Open Law — the standards, directory, and trust framework for legal practice data portability.

## Stack

- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- pnpm
- Base UI (`@base-ui/react`) for interactive primitives
- Local MDX docs via `next-mdx-remote` (`content/docs/`)

## Develop

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the development server |
| `pnpm build` | Production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Run ESLint |

## Site map

- Marketing: `/`, `/ecosystem/*`, `/standard`, `/developers`, `/participate`
- Legal: `/about`, `/privacy`, `/governance`
- Docs: `/docs/[slug]`

Edit MDX under `content/docs/`. Design system: Technical Clarity tokens in `app/globals.css`.
