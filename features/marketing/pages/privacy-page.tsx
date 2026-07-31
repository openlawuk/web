import type { Metadata } from "next";
import { PageHero, pageMetadata } from "@/features/app/components/page-hero";

export const metadata: Metadata = pageMetadata(
  "Privacy",
  "How the Open Law public website handles personal data.",
);

export function PrivacyPage() {
  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin w-full pb-20">
      <PageHero
        eyebrow="Legal"
        title="Privacy notice"
        description="This notice covers the Open Law marketing and documentation website."
      />
      <div className="prose-openlaw max-w-3xl">
        <h2>What this site collects</h2>
        <p>
          The public site is primarily static content. We do not require an
          account to browse documentation. Server logs may retain standard
          technical metadata (IP address, user agent, timestamps) for security
          and reliability.
        </p>
        <h2>Third-party services</h2>
        <p>
          Fonts or analytics providers, if enabled in a given deployment, process
          data under their own terms. Prefer privacy-preserving defaults in
          production configuration.
        </p>
        <h2>Contact</h2>
        <p>
          For privacy enquiries related to this website, contact the Open Law
          project maintainers via the public GitHub organisation.
        </p>
      </div>
    </main>
  );
}
