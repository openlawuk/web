# Open Law Web v1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Scaffold a Next.js marketing + local MDX docs site for Open Law with the Technical Clarity theme, Base UI primitives, and a landing page matching the approved mock.

**Architecture:** App Router Next.js app with Tailwind theme tokens in `globals.css`, Base UI–backed `components/ui` wrappers, site chrome + landing sections as React components, and docs loaded from `content/docs/*.mdx` via a small filesystem loader + `next-mdx-remote`.

**Tech Stack:** Next.js (App Router), TypeScript, Tailwind CSS v4, pnpm, `@base-ui/react`, `next-mdx-remote`, Hanken Grotesk (`next/font/google`), Material Symbols Outlined (stylesheet link).

## Global Constraints

- Package manager: **pnpm**
- Brand UI name: **Open Law**
- UI primitives: **Base UI** (`@base-ui/react`); style via `components/ui`
- Links that look like buttons: use `buttonVariants` + `next/link` (do **not** render Base UI Button as `<a>`)
- TSP placeholders: LexData, JurisNode, StructLaw, VeriDoc API
- Content: local only under `content/docs/`; no CMS
- Light mode is the v1 target
- Assets: local under `public/` (CSS/SVG preferred over hotlinked CDN images)
- Do not commit unless the user asks

---

## File structure

| Path | Responsibility |
| --- | --- |
| `app/layout.tsx` | Root layout: font, Header, Footer, body blueprint bg |
| `app/page.tsx` | Landing composition |
| `app/globals.css` | Theme tokens, blueprint utilities, prose |
| `app/docs/layout.tsx` | Docs sidebar shell |
| `app/docs/page.tsx` | Docs index |
| `app/docs/[slug]/page.tsx` | Single MDX doc |
| `components/ui/button.tsx` | Base UI Button + `buttonVariants` |
| `components/site/header.tsx` | Top nav + mobile menu |
| `components/site/footer.tsx` | Navy footer |
| `components/landing/*` | Hero, Ecosystem, TspGrid, SectionConnector |
| `components/docs/docs-nav.tsx` | Docs sidebar links |
| `lib/docs.ts` | List/load MDX from `content/docs` |
| `content/docs/*.mdx` | overview, ecosystem, getting-started |
| `mdx-components.tsx` | MDX element map |
| `public/hero-network.svg` | Local hero illustration |

---

### Task 1: Scaffold Next.js app

**Files:**
- Create: Next.js project files in `D:\Repos\openlawuk-web` (alongside existing `docs/superpowers/`)

**Interfaces:**
- Produces: runnable `pnpm dev`, App Router, Tailwind, TypeScript, ESLint

- [ ] **Step 1: Create app in place**

```bash
cd D:\Repos\openlawuk-web
pnpm create next-app@latest . --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*" --turbopack --use-pnpm --yes
```

If non-empty dir blocks creation, scaffold to a temp folder and move files, preserving `docs/superpowers/`.

- [ ] **Step 2: Verify scaffold**

```bash
pnpm install
pnpm build
```

Expected: build succeeds.

- [ ] **Step 3: Install dependencies**

```bash
pnpm add @base-ui/react next-mdx-remote gray-matter
pnpm add -D @types/mdx
```

---

### Task 2: Theme tokens + blueprint utilities

**Files:**
- Modify: `app/globals.css`
- Create: `public/hero-network.svg`

**Interfaces:**
- Produces: Tailwind theme colors (`primary`, `secondary`, `brand-navy`, …), spacing, type utilities, `.bg-blueprint`, `.tech-border`, `.corner-accent-*`, `.node-*`, `.vector-path-*`

- [ ] **Step 1: Replace `globals.css` with Open Law tokens** (map full palette from design YAML into `@theme`)
- [ ] **Step 2: Add local SVG hero** (network nodes; emerald/indigo)
- [ ] **Step 3: CSS dot-grid for `.bg-blueprint`** (no remote image dependency)

---

### Task 3: Base UI Button wrapper

**Files:**
- Create: `lib/cn.ts` (clsx + optional tailwind-merge, or simple join)
- Create: `components/ui/button.tsx`

**Interfaces:**
- Produces: `buttonVariants({ variant, className })` and `<Button variant="primary|secondary|ghost">`
- Consumes: `@base-ui/react/button`

- [ ] **Step 1: Implement `buttonVariants` + Base UI `Button`**
- [ ] **Step 2: Smoke-check in a temporary page or Story-less import via landing later**

Variants:
- `primary`: gradient-brand / emerald solid, white text
- `secondary`: white + indigo outline
- `ghost`: purple/indigo text utility

---

### Task 4: Site Header + Footer

**Files:**
- Create: `components/site/header.tsx` (`"use client"` for mobile menu)
- Create: `components/site/footer.tsx`
- Modify: `app/layout.tsx` — Hanken Grotesk via `next/font/google`, Material Symbols link, wrap children with Header/Footer

**Nav hrefs:**

| Label | href |
| --- | --- |
| Directory | `/docs/ecosystem` |
| Standards | `/docs` |
| Trust Framework | `/docs/ecosystem` |
| Resources | `/docs/getting-started` |
| Trust Anchor | `/docs` |

Footer links: Public Directory → `/docs/ecosystem`; Technical Specs → `/docs`; API Documentation → `/docs/getting-started`; Privacy/Governance → `/docs` (stub).

- [ ] **Step 1: Implement Header** (desktop nav + Base UI Button for Trust Anchor; mobile Menu or simple disclosure)
- [ ] **Step 2: Implement Footer**
- [ ] **Step 3: Wire root layout**

---

### Task 5: Landing sections

**Files:**
- Create: `components/landing/hero.tsx`
- Create: `components/landing/ecosystem-architecture.tsx`
- Create: `components/landing/tsp-grid.tsx`
- Create: `components/landing/section-connector.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: `Button`, `buttonVariants`, site tokens
- Produces: full landing matching mock sections

- [ ] **Step 1: Port Hero** (copy + CTAs + local SVG + System Secure chip)
- [ ] **Step 2: Port Ecosystem Architecture** (3 cards)
- [ ] **Step 3: Port TSP grid** (4 placeholders)
- [ ] **Step 4: Compose `app/page.tsx` with connectors**
- [ ] **Step 5: Visual check** — `pnpm dev`, compare to mock

---

### Task 6: Local MDX docs

**Files:**
- Create: `lib/docs.ts`
- Create: `content/docs/overview.mdx`, `ecosystem.mdx`, `getting-started.mdx`
- Create: `components/docs/docs-nav.tsx`
- Create: `mdx-components.tsx`
- Create: `app/docs/layout.tsx`, `page.tsx`, `[slug]/page.tsx`

**Interfaces:**
- `getDocSlugs(): string[]`
- `getDocBySlug(slug: string): { slug, frontmatter: { title, description }, content }`
- `getAllDocs(): Array<...>`

- [ ] **Step 1: Write three MDX stubs with frontmatter `title` + `description`**
- [ ] **Step 2: Implement `lib/docs.ts` with `fs` + `gray-matter`**
- [ ] **Step 3: Docs layout + nav + MDX render via `MDXRemote`**
- [ ] **Step 4: `notFound()` for unknown slug**
- [ ] **Step 5: `pnpm build` must succeed**

---

### Task 7: README + final verification

**Files:**
- Create/Modify: `README.md`

- [ ] **Step 1: Document `pnpm install`, `pnpm dev`, `pnpm build`**
- [ ] **Step 2: Run `pnpm build` and `pnpm lint`**
- [ ] **Step 3: Confirm success criteria from design spec**

---

## Spec coverage checklist

- Themed landing (header, hero, ecosystem, TSPs, footer) → Tasks 4–5
- Theme tokens + blueprint → Task 2
- Base UI Button → Task 3
- Local MDX docs (3 pages) → Task 6
- pnpm Next.js scaffold → Task 1
- Placeholder TSPs → Task 5
- No CMS → honored throughout
