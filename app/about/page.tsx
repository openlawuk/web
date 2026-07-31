import type { Metadata } from "next";
import { PageHero, pageMetadata } from "@/components/site/page-hero";

export const metadata: Metadata = pageMetadata(
  "About",
  "Open Law is the public standards and directory layer for legal data portability.",
);

export default function AboutPage() {
  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin w-full pb-20">
      <PageHero
        eyebrow="About"
        title="The global standard for legal transparency"
        description="Open Law defines how legal practice data is discovered, trusted, and exchanged — vendor-neutral rails so clients can authorise apps of their choice."
      />
      <div className="prose-openlaw max-w-3xl">
        <p>
          Inspired by Open Banking&apos;s separation of standards from commercial
          connectivity, Open Law publishes Directory, Dynamic Client
          Registration, Read/Write, and Open Data specifications under
          Apache-2.0, with reference implementations and a conformance suite.
        </p>
        <p>
          Mattertwo and other TSPs may offer commercial products on these rails.
          The standards remain public and independent of any single vendor.
        </p>
      </div>
    </main>
  );
}
