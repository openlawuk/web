import type { Metadata } from "next";
import { PageHero, pageMetadata } from "@/components/site/page-hero";

export const metadata: Metadata = pageMetadata(
  "Apps (TPPs)",
  "Build client-facing or firm-facing software on Open Law standards.",
);

export default function AppsPage() {
  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin w-full pb-20">
      <PageHero
        eyebrow="Ecosystem · TPPs"
        title="Third-party providers"
        description="TPPs register software in the Directory, obtain SSAs, dynamically register at firm TSPs, and access Read/Write APIs under client consent — or use hosted connectivity such as Mattertwo Connect."
        primaryHref="/developers"
        primaryLabel="Developer path"
        secondaryHref="/documentation/dcr"
        secondaryLabel="Dynamic Client Registration"
      />
      <div className="prose-openlaw max-w-3xl">
        <h2>Client-facing vs firm-facing</h2>
        <p>
          <strong>Client-facing</strong> software uses{" "}
          <code>softwareAudience: client-facing</code> and connects without firm
          procurement allowlists. <strong>Firm-facing</strong> software follows
          the firm-delegation model for B2B tools.
        </p>
        <h2>What you gain</h2>
        <ul>
          <li>One domain model across practice systems</li>
          <li>Cryptographic identity via Directory SSAs</li>
          <li>Client-sovereign consent journeys</li>
          <li>Optional commercial glue (Mattertwo) if you do not want to operate DCR yourself</li>
        </ul>
      </div>
    </main>
  );
}
