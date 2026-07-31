import type { Metadata } from "next";
import { PageHero, pageMetadata } from "@/features/app/components/page-hero";
import { ContentCard } from "@/components/ui/content-card";
import { FilterTabs } from "@/components/ui/filter-tabs";
import {
  ecosystemRoles,
  ecosystemTabs,
} from "@/features/ecosystem/data/ecosystem";

export const metadata: Metadata = pageMetadata(
  "Ecosystem",
  "Participants in Open Law: firms, apps, technical providers, and regulators.",
);

export function EcosystemPage() {
  return (
    <main className="section-inner w-full pb-20">
      <PageHero
        eyebrow="Ecosystem"
        title="Participants transforming legal data exchange"
        description="Open Law maps the Open Banking participant model to legal practice: LSPs host data, TPPs build apps, TSPs run the APIs, and clients remain the data subjects."
        primaryHref="/ecosystem"
        primaryLabel="Explore ecosystem"
        secondaryHref="/participate"
        secondaryLabel="Participate"
      />
      <FilterTabs tabs={ecosystemTabs} className="mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ecosystemRoles.map((role) => (
          <ContentCard key={role.href} {...role} />
        ))}
      </div>
    </main>
  );
}
