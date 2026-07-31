import type { Metadata } from "next";
import { PageHero, pageMetadata } from "@/components/site/page-hero";
import { ContentCard } from "@/components/ui/content-card";

export const metadata: Metadata = pageMetadata(
  "Standards",
  "Open Law specifications: Directory, DCR, Read/Write, Open Data, FAPI, and conformance.",
);

const standards = [
  {
    href: "/docs/directory",
    title: "Directory",
    description:
      "Trust anchor: participants, JWKS, and Software Statement Assertions.",
    eyebrow: "Trust",
    tone: "green" as const,
  },
  {
    href: "/docs/dcr",
    title: "Dynamic Client Registration",
    description:
      "RFC 7591/7592 profile so TPPs register at firm TSPs with a Directory SSA.",
    eyebrow: "Security",
    tone: "indigo" as const,
  },
  {
    href: "/docs/read-write-api",
    title: "Read/Write API",
    description:
      "FAPI 2.0 resource APIs for matters, documents, financials, and more.",
    eyebrow: "APIs",
    tone: "lime" as const,
  },
  {
    href: "/docs/open-data-api",
    title: "Open Data API",
    description:
      "Public discovery: code lists, participants, and published prices.",
    eyebrow: "Discovery",
    tone: "peach" as const,
  },
  {
    href: "/docs/conformance",
    title: "Conformance",
    description:
      "CLI suite covering directory, DCR, auth, FAPI hygiene, and client boundaries.",
    eyebrow: "Verification",
    tone: "indigo" as const,
  },
  {
    href: "/docs/overview",
    title: "Data model",
    description: "Vendor-neutral ontology for legal practice management data.",
    eyebrow: "Ontology",
    tone: "green" as const,
  },
] as const;

const capabilities = [
  {
    title: "Discovery & trust",
    items: ["Directory", "JWKS", "Software Statement Assertions"],
  },
  {
    title: "Access & security",
    items: ["Dynamic Client Registration", "FAPI 2.0", "Consent flows"],
  },
  {
    title: "Data & verification",
    items: ["Read/Write APIs", "Open Data", "Conformance suite"],
  },
] as const;

export default function StandardsPage() {
  return (
    <>
      <main className="section-inner w-full pb-16">
        <PageHero
          eyebrow="Standards"
          title="The Open Law specification stack"
          description="Normative specs live in the Open Law GitHub organisation. This site summarises how the pieces fit for implementers and product teams."
          primaryHref="/docs"
          primaryLabel="Browse docs"
          secondaryHref="https://github.com/openlawuk"
          secondaryLabel="GitHub"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {standards.map((item) => (
            <ContentCard key={item.href} {...item} />
          ))}
        </div>
      </main>
      <section className="section-full-bleed section-peach py-module">
        <div className="section-inner">
          <h2 className="font-heading text-headline-md text-indigo mb-10">
            Capabilities
          </h2>
          <p className="text-body-md text-indigo/80 mb-10 max-w-2xl">
            We&apos;re here through every stage of implementing open legal data
            exchange.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {capabilities.map((group) => (
              <div key={group.title} className="border-t border-indigo/20 pt-6">
                <h3 className="font-heading text-headline-sm text-indigo mb-4">
                  {group.title}
                </h3>
                <ul className="flex flex-col gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-body-md text-indigo/80">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
