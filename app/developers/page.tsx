import type { Metadata } from "next";
import { PageHero, pageMetadata } from "@/components/site/page-hero";
import { ContentCard } from "@/components/ui/content-card";
import { siteUrls } from "@/lib/site-nav";

export const metadata: Metadata = pageMetadata(
  "Developers",
  "Sandbox, reference TSP, specs, and conformance for Open Law implementers.",
);

const resources = [
  {
    title: "Reference TSP",
    description:
      "Full demo firm stack: authorisation, resource APIs, and consent web UI for local testing.",
    href: "https://github.com/openlawuk/reference-tsp",
    eyebrow: "Sandbox",
    tone: "green" as const,
    external: true,
  },
  {
    title: "Conformance suite",
    description:
      "CLI covering Directory, DCR, auth, FAPI hygiene, and client data boundaries.",
    href: "https://github.com/openlawuk/conformance-suite",
    eyebrow: "Verification",
    tone: "indigo" as const,
    external: true,
  },
  {
    title: "Specification",
    description:
      "Ontology, JSON Schema, and participation models for legal practice data.",
    href: "https://github.com/openlawuk/specification",
    eyebrow: "Docs",
    tone: "lime" as const,
    external: true,
  },
] as const;

export default function DevelopersPage() {
  return (
    <main className="section-inner w-full pb-20">
      <PageHero
        eyebrow="Developers"
        title="Build on the open rails"
        description="Run the reference stack locally, explore OpenAPI specs, and prove compliance with the conformance suite. Use Mattertwo Connect only if you want hosted multi-firm connectivity."
        primaryHref="/docs/getting-started"
        primaryLabel="Getting started"
        secondaryHref={siteUrls.githubOrg}
        secondaryLabel="GitHub org"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {resources.map((card) => (
          <ContentCard key={card.title} {...card} />
        ))}
      </div>
    </main>
  );
}
