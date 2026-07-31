import Link from "next/link";

const offers = [
  {
    icon: "account_balance",
    title: "Firms (LSPs)",
    body: "Legal service providers host practice data behind Open Law APIs. Clients authorise access to their own data — firms do not gate which apps clients use.",
    href: "/ecosystem/firms",
  },
  {
    icon: "devices",
    title: "Apps (TPPs)",
    body: "Third-party providers build client-facing or firm-facing software on a common trust and data model — without rebuilding per practice system.",
    href: "/ecosystem/apps",
  },
  {
    icon: "dns",
    title: "Providers (TSPs)",
    body: "Technical service providers implement Directory-backed DCR, consent, and Read/Write APIs for one or many firms.",
    href: "/ecosystem/providers",
  },
  {
    icon: "gavel",
    title: "Regulatory",
    body: "Open standards, client-visible data boundaries, and self-attested conformance support transparency and marketplace safety.",
    href: "/ecosystem/regulatory",
  },
] as const;

export function WhatWeOffer() {
  return (
    <section
      id="what-is-open-law"
      className="section-full-bleed section-lime py-module scroll-mt-24"
    >
      <div className="section-inner">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <p className="text-label-md text-indigo/70 mb-3">What we offer</p>
            <h2 className="font-heading text-headline-md text-indigo">
              One framework for every participant
            </h2>
          </div>
          <p className="text-body-md text-indigo/80 max-w-md">
            Open Law is the vendor-neutral layer for legal practice data
            portability — Directory trust, Dynamic Client Registration, and
            standardised Access APIs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer) => (
            <Link
              key={offer.title}
              href={offer.href}
              className="group flex flex-col h-full bg-white p-6 gap-4 hover:ring-1 hover:ring-indigo/15 transition-shadow"
            >
              <span className="material-symbols-outlined text-2xl text-indigo">
                {offer.icon}
              </span>
              <h3 className="font-heading text-headline-sm text-indigo">
                {offer.title}
              </h3>
              <p className="text-body-sm text-on-surface-variant flex-1">
                {offer.body}
              </p>
              <span className="inline-flex items-center gap-2 text-label-md font-medium text-indigo group-hover:text-accent transition-colors">
                Find out more
                <span className="material-symbols-outlined text-base">
                  arrow_forward
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
