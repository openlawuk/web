import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, pageMetadata } from "@/components/site/page-hero";

export const metadata: Metadata = pageMetadata(
  "Standards",
  "Open Law specifications: Directory, DCR, Read/Write, Open Data, FAPI, and conformance.",
);

const standards = [
  {
    href: "/docs/directory",
    title: "Directory",
    body: "Trust anchor: participants, JWKS, and Software Statement Assertions.",
  },
  {
    href: "/docs/dcr",
    title: "Dynamic Client Registration",
    body: "RFC 7591/7592 profile so TPPs register at firm TSPs with a Directory SSA.",
  },
  {
    href: "/docs/read-write-api",
    title: "Read/Write API",
    body: "FAPI 2.0 resource APIs for matters, documents, financials, and more.",
  },
  {
    href: "/docs/open-data-api",
    title: "Open Data API",
    body: "Public discovery: code lists, participants, and published prices.",
  },
  {
    href: "/docs/conformance",
    title: "Conformance",
    body: "CLI suite covering directory, DCR, auth, FAPI hygiene, and client boundaries.",
  },
  {
    href: "/docs/overview",
    title: "Data model",
    body: "Vendor-neutral ontology for legal practice management data.",
  },
] as const;

export default function StandardsPage() {
  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin w-full pb-20">
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
          <Link
            key={item.href}
            href={item.href}
            className="tech-border bg-white/90 p-6 hover:border-primary/40 transition-colors"
          >
            <h2 className="text-headline-sm text-brand-navy font-semibold mb-2">
              {item.title}
            </h2>
            <p className="text-body-sm text-on-surface-variant">{item.body}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
