# OpenLaw UK Web — Design

**Date:** 2026-07-20  
**Repo:** `openlawuk-web` (`https://github.com/openlawuk/web`)  
**Status:** Approved; implementation in progress / complete for v1 scaffold

## Goal

Public marketing and documentation site for Open Law. v1 is a runnable Next.js app with:

1. A **themed marketing landing** matching the provided “Technical Clarity” design (theme tokens + HTML reference + mockup)
2. **Local MDX docs** stubs under `/docs`
3. No CMS yet (content stays in-repo)

## Decisions

| Topic | Choice |
| --- | --- |
| Purpose | Marketing + docs |
| Landing | Initial visual pass from provided theme + HTML mock |
| Brand name in UI | **Open Law** (as in design system / mock) |
| Content | Local MDX/markdown in-repo |
| Scaffold | `create-next-app` — App Router, TypeScript, Tailwind, ESLint |
| Docs tooling | Minimal custom MDX via `@next/mdx` |
| Package manager | pnpm |
| Fonts | Hanken Grotesk (all tiers); Material Symbols Outlined for icons |
| UI primitives | **Base UI** (`@base-ui/react`) for interactive components (Button, Dialog, etc.) |
| TSP cards | Placeholder demo names (LexData, JurisNode, StructLaw, VeriDoc API) |
| CMS | Out of scope; defer |

## Approach

**Minimal MDX + themed landing:** Standard Next.js app. Landing is React components ported from the provided HTML (Tailwind theme tokens in CSS/`@theme`). Interactive controls use **Base UI** primitives, styled with the Open Law theme (not unstyled raw `<button>`/`<a>` where Base UI provides an equivalent). Docs are MDX with a simple sidebar. No content-layer library in v1.

## Visual design system

Source of truth: user-provided theme YAML + HTML mock + landing mockup image.

### Aesthetic

“Technical Clarity”: modern corporate + minimal density. Blueprint feel via **dot-grid background**, **1px hairline** borders/connectors, **node dots** at intersections, **L-shaped corner accents**. Depth via tonal layers and outlines — not heavy shadows. Hover prefers **border-color shift toward primary emerald**.

### Tokens (map into Tailwind / CSS variables)

- **Surfaces:** `background` / `surface` `#f8f9ff`; containers from `#eff4ff` → `#d3e4fe`; `on-surface` / navy `#0b1c30`
- **Primary:** emerald `#006c49` (actions); container/accent `#10b981`
- **Secondary / tertiary:** indigo `#4b41e1`, purple `#494bd6` — accents, secondary outlines, viz/nodes only
- **Aliases used in mock:** `brand-emerald`, `brand-navy`, `brand-sky`
- **Radius:** components `0.5rem` (8px); larger containers `1rem` (16px); pills for chips only
- **Spacing:** 4px unit, 24px gutter, 16px / 40px margins, max-width 1440px
- **Type scale:** display / headline-lg|md / body-lg|md / label-md|sm (Hanken Grotesk); `label-sm` / caps for metadata

### Blueprint utilities (from HTML)

Port as shared CSS/modules: `bg-blueprint`, `tech-border`, `corner-accent-*`, `node-*`, `vector-path-*`, soft atmospheric blurs.

### Assets

- Prefer **local** copies of blueprint/hero images under `public/` (do not hotlink the mock CDN URLs long-term)
- If remote URLs are used temporarily during scaffold, replace before considering the pass done

## Architecture

```
openlawuk-web/
  app/
    layout.tsx              # Fonts, global theme, Header + Footer shell
    page.tsx                # Themed landing
    docs/
      layout.tsx            # Docs sidebar (theme-aligned)
      page.tsx
      [...slug]/page.tsx
  content/docs/             # Local MDX
  components/
    ui/                     # Thin theme wrappers around Base UI (Button, etc.)
    site/                   # Header, Footer
    landing/                # Hero, EcosystemArchitecture, TspGrid, connectors
    docs/                   # DocsNav
  public/                   # Blueprint tile, hero illustration
  app/globals.css           # Theme tokens + blueprint utilities
  mdx-components.tsx
```

### Component layering

1. **Base UI** — accessibility, composition, and interaction behavior
2. **`components/ui/*`** — Open Law visual styling (emerald primary, indigo secondary outline, tech-border, radius tokens)
3. **Site / landing** — page sections compose `ui` + layout chrome

v1 Base UI wrappers: at least **Button** (primary / secondary / ghost). Add further primitives (e.g. Dialog, Menu for mobile nav) only as the landing needs them.

### Routes (v1)

| Route | Role |
| --- | --- |
| `/` | Themed marketing landing (full initial pass) |
| `/docs` | Docs index |
| `/docs/overview` | What Open Law is |
| `/docs/ecosystem` | Directory → DCR → Access |
| `/docs/getting-started` | Stub for exploring standards / reference stack |

### Landing sections (match mock)

1. **Header** — “Open Law”; nav: Directory, Standards, Trust Framework (active), Resources; CTA “Trust Anchor”
2. **Hero** — chip “The Standard for Legal Data Portability”; headline “The Framework & Directory Layer for Global Law.”; body copy from mock; CTAs “Explore Directory” / “View Framework Specs”; hero network illustration + “System Secure” callout; `SYS.INIT_01` meta
3. **Ecosystem Architecture** — three nodes: Directory (Discovery), DCR (Trust Framework), Access (Data Portability)
4. **Technology Service Providers** — four placeholder cards: LexData, JurisNode, StructLaw, VeriDoc API
5. **Footer** — navy `#0b1c30`; copyright + `SYS.STATUS: ONLINE`; links: Public Directory, Technical Specs, Privacy Policy, Governance, API Documentation

### Nav / CTA wiring (v1)

Until real Directory/TSP product surfaces exist on this site:

| Control | Target |
| --- | --- |
| Standards / View Framework Specs / Technical Specs | `/docs` (or `/docs/overview`) |
| Directory / Explore Directory / Public Directory | `/docs/ecosystem` (or placeholder `#` with note) until a live directory URL exists |
| Trust Framework (nav active) | `/docs/ecosystem` |
| Resources / API Documentation | `/docs/getting-started` |
| Trust Anchor CTA | `/docs` or `#` pending product URL |
| Privacy / Governance | stub routes or `#` with “coming soon” — not blocking landing |

Exact hrefs finalized in implementation plan; no dead-looking buttons without a destination.

### Docs shell

- Same header/footer as marketing
- Left sidebar: Overview, Ecosystem, Getting started
- MDX prose styled with theme tokens (navy text, emerald links, hairline rules)

### Data / content flow

- No backend, database, or secrets for v1
- Docs static from local MDX
- No live fetch from sibling repos
- TSP list is static config in code (easy to swap when CMS arrives)

## Error handling

- Missing doc slug → `notFound()`
- Broken MDX → fail at build

## Testing

- Manual: `pnpm install && pnpm dev`
- Check `/` against mock (layout, tokens, sections)
- Check `/docs` + stub pages
- Spot-check mobile (stacked hero, hamburger from mock)

## Out of scope (v1)

- CMS
- Auth, APIs, database
- Live Directory / TSP registry integration
- Syncing content from `openlawuk-specification`
- Filesystem auto-nav / content-layer tooling
- Pixel-perfect dark mode (tokens exist in mock; light mode is the v1 target)

## Success criteria

1. Runnable Next.js app under pnpm
2. Landing matches the provided theme/mock in structure and visual language
3. Theme tokens live in the codebase (not CDN Tailwind config only)
4. Interactive controls use Base UI–backed `components/ui` wrappers
5. At least three local MDX doc pages render
6. No CMS or remote content dependency

## Follow-ups

- CMS migration from `content/docs/`
- Live directory / TSP data (replace placeholder TSP names)
- Docs search and auto-nav
- Dark mode polish
- Expand Base UI wrapper set as interactive surfaces grow
