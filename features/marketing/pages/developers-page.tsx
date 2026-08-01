import type { Metadata } from "next";
import { PageHero, pageMetadata } from "@/features/app/components/page-hero";
import { ContentCard } from "@/components/ui/content-card";

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
    tone: "sky" as const,
    external: true,
  },
  {
    title: "Specification",
    description:
      "Ontology, JSON Schema, and participation models for legal practice data.",
    href: "https://github.com/openlawuk/specification",
    eyebrow: "Standard",
    tone: "lime" as const,
    external: true,
  },
] as const;

export function DevelopersPage() {
  return (
    <main className="section-inner w-full pb-20">
      <PageHero
        eyebrow="Developers"
        title="Build on the open rails"
        description="Run the reference stack locally, explore OpenAPI specs, and prove compliance with the conformance suite. Use Mattertwo Connect only if you want hosted multi-firm connectivity."
        primaryHref="/standard/conformance"
        primaryLabel="Conformance suite"
        secondaryHref="/standard/directory"
        secondaryLabel="Directory"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {resources.map((card) => (
          <ContentCard key={card.title} {...card} />
        ))}
      </div>
      <div className="prose-openlaw max-w-3xl">
        <h2>Getting started</h2>
        <p>
          Read <a href="/what-is-open-law">What is Open Law?</a> and the{" "}
          <a href="/ecosystem">Ecosystem</a> pages so Directory → DCR → Access
          is clear before writing code.
        </p>
        <h3>Clone the open rails</h3>
        <table>
          <thead>
            <tr>
              <th>Repository</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="https://github.com/openlawuk/specification">specification</a>
              </td>
              <td>Ontology and schemas</td>
            </tr>
            <tr>
              <td>
                <a href="https://github.com/openlawuk/directory">directory</a>
              </td>
              <td>Trust anchor reference</td>
            </tr>
            <tr>
              <td>
                <a href="https://github.com/openlawuk/dynamic-client-registration">
                  dynamic-client-registration
                </a>
              </td>
              <td>DCR profile</td>
            </tr>
            <tr>
              <td>
                <a href="https://github.com/openlawuk/read-write-api">read-write-api</a>
              </td>
              <td>Resource API standard</td>
            </tr>
            <tr>
              <td>
                <a href="https://github.com/openlawuk/open-data-api">open-data-api</a>
              </td>
              <td>Public discovery</td>
            </tr>
            <tr>
              <td>
                <a href="https://github.com/openlawuk/reference-tsp">reference-tsp</a>
              </td>
              <td>Full demo firm stack</td>
            </tr>
            <tr>
              <td>
                <a href="https://github.com/openlawuk/conformance-suite">
                  conformance-suite
                </a>
              </td>
              <td>Attestation CLI</td>
            </tr>
          </tbody>
        </table>
        <p>Follow each repository README for install and commands.</p>
        <h3>Run a local sandbox</h3>
        <p>
          The reference TSP sandbox scripts start Directory, firm APIs, and
          consent UI together so you can walk a full client journey.
        </p>
        <h3>Optional: hosted connectivity</h3>
        <p>
          If you are building a client-facing app and want one API key instead
          of operating SSA/DCR/token plumbing, evaluate{" "}
          <a href="https://www.mattertwo.com">Mattertwo Connect</a>.
        </p>
      </div>
    </main>
  );
}
