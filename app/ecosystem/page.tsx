import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, pageMetadata } from "@/components/site/page-hero";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/cn";

export const metadata: Metadata = pageMetadata(
  "Ecosystem",
  "Participants in Open Law: firms, apps, technical providers, and regulators.",
);

const roles = [
  {
    href: "/ecosystem/firms",
    title: "Firms (LSPs)",
    body: "Law firms and legal service providers that host client practice data behind Open Law APIs.",
  },
  {
    href: "/ecosystem/apps",
    title: "Apps (TPPs)",
    body: "Client-facing and firm-facing software that discovers firms and exchanges data under client consent.",
  },
  {
    href: "/ecosystem/providers",
    title: "Providers (TSPs)",
    body: "Technical hosts that implement Directory trust, DCR, consent, and Read/Write endpoints for firms.",
  },
  {
    href: "/ecosystem/regulatory",
    title: "Regulatory",
    body: "Policymakers and oversight bodies who care about transparency, boundaries, and attestation.",
  },
] as const;

export default function EcosystemPage() {
  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin w-full pb-20">
      <PageHero
        eyebrow="Ecosystem"
        title="Participants transforming legal data exchange"
        description="Open Law maps the Open Banking participant model to legal practice: LSPs host data, TPPs build apps, TSPs run the APIs, and clients remain the data subjects."
        primaryHref="/docs/ecosystem"
        primaryLabel="Ecosystem docs"
        secondaryHref="/participate"
        secondaryLabel="Participate"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {roles.map((role) => (
          <Link
            key={role.href}
            href={role.href}
            className="tech-border bg-white/90 p-8 hover:border-primary/40 transition-colors group relative"
          >
            <div className="corner-accent-tl opacity-0 group-hover:opacity-100 transition-opacity" />
            <h2 className="text-headline-sm text-brand-navy font-semibold mb-3">
              {role.title}
            </h2>
            <p className="text-body-md text-on-surface-variant mb-6">
              {role.body}
            </p>
            <span className={cn(buttonVariants({ variant: "ghost" }), "px-0")}>
              Learn more
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
