import type { Metadata } from "next";
import { PageHero, pageMetadata } from "@/features/app/components/page-hero";
import { ParticipantRoles } from "@/features/marketing/components/participant-roles";

export const metadata: Metadata = pageMetadata(
  "What is Open Law?",
  "Open Law is the vendor-neutral framework for legal practice data portability.",
);

export function WhatIsOpenLawPage() {
  return (
    <main className="section-inner w-full pb-20">
      <PageHero
        eyebrow="What is Open Law?"
        title="One framework for every participant"
        description="Open Law is the vendor-neutral layer for legal practice data portability — Directory trust, Dynamic Client Registration, and standardised Access APIs."
        primaryHref="/standard/directory"
        primaryLabel="Read the overview"
        secondaryHref="/ecosystem"
        secondaryLabel="Explore ecosystem"
      />
      <div className="mb-10 max-w-3xl prose-openlaw">
        <p>
          Inspired by Open Banking&apos;s separation of standards from commercial
          connectivity, Open Law defines how legal practice data is discovered,
          trusted, and exchanged — so clients can authorise apps of their choice
          without firms gating access.
        </p>
        <h2>Why it exists</h2>
        <p>
          Law firms run on fragmented practice management stacks. Clients
          increasingly expect to choose their own software without waiting for
          firm IT procurement. Open Law separates open rails (standards anyone
          can implement) from commercial connectivity (optional hosted products).
        </p>
        <h2>Stack at a glance</h2>
        <table>
          <thead>
            <tr>
              <th>Layer</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Directory</td>
              <td>Participants, JWKS, Software Statement Assertions</td>
            </tr>
            <tr>
              <td>DCR</td>
              <td>Register at a firm TSP with an SSA</td>
            </tr>
            <tr>
              <td>Read/Write API</td>
              <td>FAPI 2.0 access to matters, documents, financials, and more</td>
            </tr>
            <tr>
              <td>Open Data API</td>
              <td>Public discovery and price transparency without OAuth</td>
            </tr>
            <tr>
              <td>Conformance</td>
              <td>Prove Directory, auth, and client data boundary behaviour</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ParticipantRoles />
    </main>
  );
}
