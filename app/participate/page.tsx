import type { Metadata } from "next";
import { PageHero, pageMetadata } from "@/components/site/page-hero";

export const metadata: Metadata = pageMetadata(
  "Participate",
  "How firms, TSPs, and app builders join the Open Law ecosystem.",
);

export default function ParticipatePage() {
  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin w-full pb-20">
      <PageHero
        eyebrow="Participate"
        title="Join the Open Law marketplace"
        description="Register as a Directory participant, publish software credentials, implement or consume Open Law APIs, and attest with the conformance suite."
        primaryHref="/docs/directory"
        primaryLabel="Directory guide"
        secondaryHref="/docs/getting-started"
        secondaryLabel="Getting started"
      />
      <div className="prose-openlaw max-w-3xl">
        <h2>Typical path</h2>
        <ol>
          <li>Read the ecosystem and participation models</li>
          <li>Stand up against the reference TSP and Directory</li>
          <li>Register software and obtain an SSA</li>
          <li>Complete Dynamic Client Registration at firm TSPs</li>
          <li>Run the conformance suite and publish attestation</li>
        </ol>
        <h2>Commercial option</h2>
        <p>
          App builders who prefer not to operate SSAs, DCR, PAR, and token
          lifecycle themselves can use Mattertwo Connect — still built on Open
          Law standards.
        </p>
      </div>
    </main>
  );
}
