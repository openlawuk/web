import type { Metadata } from "next";
import { PageHero, pageMetadata } from "@/components/site/page-hero";
import { ContentCard } from "@/components/ui/content-card";
import { FilterTabs } from "@/components/ui/filter-tabs";

export const metadata: Metadata = pageMetadata(
  "Ecosystem",
  "Participants in Open Law: firms, apps, technical providers, and regulators.",
);

const ecosystemTabs = [
  { href: "/ecosystem", label: "All", match: "/ecosystem" },
  { href: "/ecosystem/firms", label: "Firms", match: "/ecosystem/firms" },
  { href: "/ecosystem/apps", label: "Apps", match: "/ecosystem/apps" },
  {
    href: "/ecosystem/providers",
    label: "Providers",
    match: "/ecosystem/providers",
  },
  {
    href: "/ecosystem/regulatory",
    label: "Regulatory",
    match: "/ecosystem/regulatory",
  },
] as const;

const roles = [
  {
    href: "/ecosystem/firms",
    title: "Firms (LSPs)",
    description:
      "Law firms and legal service providers that host client practice data behind Open Law APIs.",
    eyebrow: "LSP",
    tone: "green" as const,
  },
  {
    href: "/ecosystem/apps",
    title: "Apps (TPPs)",
    description:
      "Client-facing and firm-facing software that discovers firms and exchanges data under client consent.",
    eyebrow: "TPP",
    tone: "sky" as const,
  },
  {
    href: "/ecosystem/providers",
    title: "Providers (TSPs)",
    description:
      "Technical hosts that implement Directory trust, DCR, consent, and Read/Write endpoints for firms.",
    eyebrow: "TSP",
    tone: "lime" as const,
  },
  {
    href: "/ecosystem/regulatory",
    title: "Regulatory",
    description:
      "Policymakers and oversight bodies who care about transparency, boundaries, and attestation.",
    eyebrow: "Policy",
    tone: "peach" as const,
  },
] as const;

export default function EcosystemPage() {
  return (
    <main className="section-inner w-full pb-20">
      <PageHero
        eyebrow="Ecosystem"
        title="Participants transforming legal data exchange"
        description="Open Law maps the Open Banking participant model to legal practice: LSPs host data, TPPs build apps, TSPs run the APIs, and clients remain the data subjects."
        primaryHref="/documentation/ecosystem"
        primaryLabel="Ecosystem documentation"
        secondaryHref="/participate"
        secondaryLabel="Participate"
      />
      <FilterTabs tabs={ecosystemTabs} className="mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {roles.map((role) => (
          <ContentCard key={role.href} {...role} />
        ))}
      </div>
    </main>
  );
}
