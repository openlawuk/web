import type { Metadata } from "next";
import { PageHero, pageMetadata } from "@/features/app/components/page-hero";

export const metadata: Metadata = pageMetadata(
  "Regulatory",
  "Transparency, client data boundaries, and conformance for policymakers.",
);

export function RegulatoryPage() {
  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin w-full pb-20">
      <PageHero
        eyebrow="Ecosystem · Regulatory"
        title="Regulators and policymakers"
        description="Open Law supports price transparency via Open Data, mandatory client-visible data boundaries, and self-attested conformance — a regulator-ready posture for an open legal software marketplace."
        primaryHref="/standard/open-data-api"
        primaryLabel="Open Data API"
        secondaryHref="/governance"
        secondaryLabel="Governance"
      />
      <div className="prose-openlaw max-w-3xl">
        <h2>Why it matters</h2>
        <ul>
          <li>Clients choose apps; firms host infrastructure without blocking choice</li>
          <li>Published price aggregates support SRA-style transparency use cases</li>
          <li>Conformance checks include client data boundary behaviour</li>
          <li>Standards are Apache-2.0 and vendor-neutral</li>
        </ul>
      </div>
    </main>
  );
}
