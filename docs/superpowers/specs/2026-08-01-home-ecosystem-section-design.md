# Home ecosystem section design

Restore an Open Banking–style participant ecosystem section on the home page, reusing the existing role cards also shown on What is Open Law.

## Goals

- Give the home page a clear “our ecosystem” moment for Firms, Apps, Providers, and Regulatory.
- Reuse one card UI and data source on home and What is Open Law.
- Keep the section visually consistent with the previous lime home block.

## Non-goals

- Richer Open Banking layout with per-role secondary link lists.
- Changing role copy, hrefs, or the What is Open Law page structure.
- Redesigning Ecosystem Architecture, Standards Proof, or Latest News.

## Decisions

| Topic | Choice |
|-------|--------|
| Presence on What is Open Law | Keep role cards there as well (both pages) |
| Card richness | Simple cards: icon, title, body, “Find out more” |
| Home “What is Open Law?” teaser | Remove |
| Ecosystem section surface | Lime full-bleed |
| Extra section CTA to `/ecosystem` | No — cards are sufficient |

## Home page composition

1. Hero  
2. **Ecosystem participants** (new lime section)  
3. Ecosystem Architecture  
4. Standards Proof  
5. Latest News  

## Section content

- **Eyebrow:** Our ecosystem  
- **Headline:** One framework for every participant  
- **Supporting line:** Open Law is the vendor-neutral layer for legal practice data portability — Directory trust, Dynamic Client Registration, and standardised Access APIs.  
- **Body:** Shared `ParticipantRoles` grid (Firms / Apps / Providers / Regulatory → `/ecosystem/...`)

## Implementation

1. Add `features/home/components/ecosystem-participants.tsx`  
   - Lime full-bleed section shell with the eyebrow, headline, and supporting line above.  
   - Render shared `ParticipantRoles` from `@/features/marketing/components/participant-roles`.  
2. Update `features/home/pages/home-page.tsx` to use `EcosystemParticipants` in place of `WhatWeOffer`.  
3. Delete `features/home/components/what-we-offer.tsx` (teaser no longer used).  
4. Leave `features/marketing/data/participant-roles.ts`, `ParticipantRoles`, and What is Open Law unchanged.

## Acceptance criteria

- Home shows the lime ecosystem section immediately after the hero.  
- The four role cards match What is Open Law (same component/data).  
- The home “What is Open Law?” teaser is gone.  
- Existing home sections after the ecosystem block are unchanged in order and behaviour.
