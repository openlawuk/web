import Link from "next/link";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/cn";

const offers = [
  {
    icon: "account_balance",
    title: "Firms (LSPs)",
    body: "Legal service providers host practice data behind Open Law APIs. Clients authorise access to their own data — firms do not gate which apps clients use.",
    href: "/ecosystem/firms",
    links: [
      { href: "/ecosystem/firms", label: "Role overview" },
      { href: "/docs/ecosystem", label: "Participation models" },
      { href: "/participate", label: "Get involved" },
    ],
  },
  {
    icon: "devices",
    title: "Apps (TPPs)",
    body: "Third-party providers build client-facing or firm-facing software on a common trust and data model — without rebuilding per practice system.",
    href: "/ecosystem/apps",
    links: [
      { href: "/ecosystem/apps", label: "For app builders" },
      { href: "/developers", label: "Developer start" },
      { href: "/docs/getting-started", label: "Quickstart" },
    ],
  },
  {
    icon: "dns",
    title: "Providers (TSPs)",
    body: "Technical service providers implement Directory-backed DCR, consent, and Read/Write APIs for one or many firms — including Mattertwo as a commercial TSP.",
    href: "/ecosystem/providers",
    links: [
      { href: "/ecosystem/providers", label: "TSP role" },
      { href: "/docs/conformance", label: "Conformance" },
      { href: "/developers", label: "Reference TSP" },
    ],
  },
  {
    icon: "gavel",
    title: "Regulatory",
    body: "Open standards, client-visible data boundaries, and self-attested conformance support transparency and marketplace safety.",
    href: "/ecosystem/regulatory",
    links: [
      { href: "/ecosystem/regulatory", label: "For policymakers" },
      { href: "/governance", label: "Governance" },
      { href: "/docs/open-data-api", label: "Open Data" },
    ],
  },
] as const;

export function WhatWeOffer() {
  return (
    <section id="what-is-open-law" className="py-stack-lg md:py-20 relative scroll-mt-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-xl">
          <p className="text-label-caps text-brand-emerald mb-3">What we offer</p>
          <h2 className="text-headline-md text-brand-navy font-semibold">
            One framework for every participant
          </h2>
        </div>
        <p className="text-body-md text-on-surface-variant max-w-md">
          Open Law is the vendor-neutral layer for legal practice data
          portability — Directory trust, Dynamic Client Registration, and
          standardised Access APIs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {offers.map((offer) => (
          <article
            key={offer.title}
            className="tech-border bg-white/80 backdrop-blur-sm p-6 flex flex-col gap-4 relative group hover:border-primary/40 transition-colors"
          >
            <div className="corner-accent-tl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-12 h-12 border border-brand-navy/15 flex items-center justify-center text-brand-navy">
              <span className="material-symbols-outlined text-2xl">
                {offer.icon}
              </span>
            </div>
            <h3 className="text-headline-sm text-brand-navy font-semibold">
              {offer.title}
            </h3>
            <p className="text-body-sm text-on-surface-variant flex-1">
              {offer.body}
            </p>
            <ul className="flex flex-col gap-2">
              {offer.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-label-md text-brand-navy font-semibold hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={offer.href}
              className={cn(buttonVariants({ variant: "primary" }), "mt-2 w-full")}
            >
              Find out more
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
