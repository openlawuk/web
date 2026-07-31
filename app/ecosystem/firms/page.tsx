import type { Metadata } from "next";
import { PageHero, pageMetadata } from "@/components/site/page-hero";

export const metadata: Metadata = pageMetadata(
  "Firms (LSPs)",
  "How legal service providers participate in Open Law without gating client app choice.",
);

export default function FirmsPage() {
  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin w-full pb-20">
      <PageHero
        eyebrow="Ecosystem · LSPs"
        title="Legal service providers"
        description="Firms host practice infrastructure — usually via a TSP — while clients authorise which applications can access their own matters, documents, and financials."
        primaryHref="/participate"
        primaryLabel="How firms join"
        secondaryHref="/documentation/ecosystem"
        secondaryLabel="Participation models"
      />
      <div className="prose-openlaw max-w-3xl">
        <h2>What firms do</h2>
        <ul>
          <li>Publish Open Law endpoints through a Technical Service Provider</li>
          <li>Present client consent for access to the client&apos;s own data</li>
          <li>Do not allowlist which client-facing apps clients may use</li>
          <li>Rely on Directory SSAs and FAPI for cryptographic trust</li>
        </ul>
        <h2>Open Banking analogy</h2>
        <p>
          LSPs are the ASPSP analogue: they are the authoritative hosts of
          regulated practice data. Clients are data subjects, not Directory
          participants.
        </p>
      </div>
    </main>
  );
}
