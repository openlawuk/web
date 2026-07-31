import type { Metadata } from "next";
import { PageHero, pageMetadata } from "@/components/site/page-hero";

export const metadata: Metadata = pageMetadata(
  "Governance",
  "How Open Law standards are maintained as open, vendor-neutral specifications.",
);

export default function GovernancePage() {
  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin w-full pb-20">
      <PageHero
        eyebrow="Organisation"
        title="Governance"
        description="Open Law specifications and reference implementations are maintained in public repositories under Apache-2.0."
      />
      <div className="prose-openlaw max-w-3xl">
        <h2>Principles</h2>
        <ul>
          <li>Vendor-neutral standards separate from commercial products</li>
          <li>Client sovereignty for client-facing software access</li>
          <li>Mandatory client-visible data boundaries</li>
          <li>Self-attested conformance with published test suites</li>
        </ul>
        <h2>Change process</h2>
        <p>
          Normative changes are proposed and reviewed in the relevant Open Law
          GitHub repositories. Implementers should track releases of the
          specification, Directory, DCR, and API packages.
        </p>
      </div>
    </main>
  );
}
