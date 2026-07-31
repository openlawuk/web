import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, pageMetadata } from "@/components/site/page-hero";
import { siteUrls } from "@/lib/site-nav";

export const metadata: Metadata = pageMetadata(
  "Providers (TSPs)",
  "Technical service providers that implement Open Law APIs for firms.",
);

export default function ProvidersPage() {
  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin w-full pb-20">
      <PageHero
        eyebrow="Ecosystem · TSPs"
        title="Technical service providers"
        description="TSPs implement Directory-backed Dynamic Client Registration, consent UX, and FAPI Read/Write APIs so firms can participate without building the stack from scratch."
        primaryHref="/docs/conformance"
        primaryLabel="Conformance suite"
        secondaryHref="/developers"
        secondaryLabel="Reference TSP"
      />
      <div className="prose-openlaw max-w-3xl mb-8">
        <h2>Mattertwo — commercial TSP connectivity</h2>
        <p>
          <a href={siteUrls.mattertwo} target="_blank" rel="noreferrer">
            Mattertwo
          </a>{" "}
          provides hosted Open Law Connect so client-facing apps get multi-firm
          discovery, DCR, consent, and a normalised data API with one API key.
          Open Law remains the open standard; Mattertwo is optional commercial
          infrastructure on those rails.
        </p>
        <h2>Illustrative providers</h2>
        <p>
          Names such as LexData, JurisNode, and StructLaw on this site are
          placeholders for Directory listings that are not yet live. Real
          participants will appear via the public Directory when available.
        </p>
        <p>
          Build against the{" "}
          <Link href="/docs/getting-started">reference TSP</Link> and attest
          with the conformance suite before production.
        </p>
      </div>
    </main>
  );
}
