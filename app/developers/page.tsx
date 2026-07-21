import type { Metadata } from "next";
import { PageHero, pageMetadata } from "@/components/site/page-hero";
import { siteUrls } from "@/lib/site-nav";

export const metadata: Metadata = pageMetadata(
  "Developers",
  "Sandbox, reference TSP, specs, and conformance for Open Law implementers.",
);

export default function DevelopersPage() {
  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin w-full pb-20">
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
        {[
          {
            title: "Reference TSP",
            body: "Full demo firm stack: authorisation, resource APIs, and consent web UI for local testing.",
            href: "https://github.com/openlawuk/reference-tsp",
          },
          {
            title: "Conformance suite",
            body: "CLI covering Directory, DCR, auth, FAPI hygiene, and client data boundaries.",
            href: "https://github.com/openlawuk/conformance-suite",
          },
          {
            title: "Specification",
            body: "Ontology, JSON Schema, and participation models for legal practice data.",
            href: "https://github.com/openlawuk/specification",
          },
        ].map((card) => (
          <a
            key={card.title}
            href={card.href}
            target="_blank"
            rel="noreferrer"
            className="tech-border bg-white/90 p-6 hover:border-secondary/40 transition-colors"
          >
            <h2 className="text-headline-sm text-brand-navy font-semibold mb-2">
              {card.title}
            </h2>
            <p className="text-body-sm text-on-surface-variant">{card.body}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
