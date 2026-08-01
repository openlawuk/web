# Home Ecosystem Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restore a lime “Our ecosystem” participant-role section on the home page, reusing shared `ParticipantRoles`, and remove the What is Open Law teaser.

**Architecture:** A thin home section shell wraps the existing marketing `ParticipantRoles` grid. Home page composition swaps `WhatWeOffer` for `EcosystemParticipants`. Role data and What is Open Law stay unchanged.

**Tech Stack:** Next.js App Router, React Server Components, existing design-system section utilities (`section-full-bleed`, `section-lime`, `section-inner`).

## Global Constraints

- Role cards must use shared `ParticipantRoles` / `participantRoles` (no duplicated role copy).
- Ecosystem section surface is lime full-bleed.
- No extra section CTA to `/ecosystem`.
- Do not change What is Open Law page structure or Ecosystem Architecture / Standards Proof / Latest News.
- No automated test runner in this repo — verify via TypeScript check and visual inspection on `/`.

## File Structure

| File | Responsibility |
|------|----------------|
| `features/home/components/ecosystem-participants.tsx` | New lime section shell + `ParticipantRoles` |
| `features/home/pages/home-page.tsx` | Compose home sections in order |
| `features/home/components/what-we-offer.tsx` | Delete (teaser removed) |
| `features/marketing/components/participant-roles.tsx` | Unchanged — shared card grid |
| `features/marketing/data/participant-roles.ts` | Unchanged — role data |

---

### Task 1: Add EcosystemParticipants section and wire home page

**Files:**
- Create: `features/home/components/ecosystem-participants.tsx`
- Modify: `features/home/pages/home-page.tsx`
- Delete: `features/home/components/what-we-offer.tsx`

**Interfaces:**
- Consumes: `ParticipantRoles` from `@/features/marketing/components/participant-roles`
- Produces: `export function EcosystemParticipants(): JSX.Element`

- [ ] **Step 1: Create the section component**

Create `features/home/components/ecosystem-participants.tsx` with this exact content:

```tsx
import { ParticipantRoles } from "@/features/marketing/components/participant-roles";

export function EcosystemParticipants() {
  return (
    <section className="section-full-bleed section-lime py-module">
      <div className="section-inner">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <p className="text-label-md text-indigo mb-3">Our ecosystem</p>
            <h2 className="font-heading text-headline-md text-indigo">
              One framework for every participant
            </h2>
          </div>
          <p className="text-body-md text-indigo max-w-md">
            Open Law is the vendor-neutral layer for legal practice data
            portability — Directory trust, Dynamic Client Registration, and
            standardised Access APIs.
          </p>
        </div>
        <ParticipantRoles />
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Update home page composition**

Replace the contents of `features/home/pages/home-page.tsx` with:

```tsx
import { EcosystemArchitecture } from "@/features/home/components/ecosystem-architecture";
import { EcosystemParticipants } from "@/features/home/components/ecosystem-participants";
import { Hero } from "@/features/home/components/hero";
import { StandardsProof } from "@/features/home/components/standards-proof";
import { LatestNews } from "@/features/news/components/latest-news";

export function HomePage() {
  return (
    <main className="w-full">
      <Hero />
      <EcosystemParticipants />
      <EcosystemArchitecture />
      <StandardsProof />
      <LatestNews />
    </main>
  );
}
```

- [ ] **Step 3: Delete the unused teaser**

Delete `features/home/components/what-we-offer.tsx`.

Confirm nothing else imports `WhatWeOffer`:

```bash
rg "WhatWeOffer|what-we-offer" --glob "*.{tsx,ts}"
```

Expected: no matches.

- [ ] **Step 4: Typecheck**

```bash
pnpm exec tsc --noEmit
```

Expected: exit 0 (no errors related to home/ecosystem files).

- [ ] **Step 5: Visual verify on home**

With `pnpm dev` running, open `/` and confirm:

1. Lime “Our ecosystem” section sits directly under the hero.
2. Four role cards (Firms / Apps / Providers / Regulatory) with “Find out more”.
3. No “What is Open Law?” teaser strip.
4. Ecosystem Architecture → Standards Proof → Latest News still follow.

Also open `/what-is-open-law` and confirm the role cards are still present.

- [ ] **Step 6: Commit**

```bash
git add features/home/components/ecosystem-participants.tsx features/home/pages/home-page.tsx
git rm features/home/components/what-we-offer.tsx
git commit -m "feat: restore lime ecosystem section on home"
```

---

## Spec coverage

| Spec requirement | Task |
|------------------|------|
| Lime ecosystem section after hero | Task 1 |
| Shared `ParticipantRoles` | Task 1 Step 1 |
| Eyebrow / headline / supporting copy | Task 1 Step 1 |
| Remove What is Open Law teaser | Task 1 Steps 2–3 |
| Keep What is Open Law roles | Unchanged (verified Step 5) |
| No extra `/ecosystem` CTA | Task 1 Step 1 (omitted) |
| Later home sections unchanged | Task 1 Step 2 order |
