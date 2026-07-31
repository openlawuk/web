import Link from "next/link";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/cn";

export function WhatWeOffer() {
  return (
    <section className="section-full-bleed section-lime py-module">
      <div className="section-inner flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-xl">
          <p className="text-label-md text-indigo mb-3">What is Open Law?</p>
          <h2 className="font-heading text-headline-md text-indigo">
            The vendor-neutral layer for legal data portability
          </h2>
          <p className="text-body-md text-indigo mt-4">
            Directory trust, Dynamic Client Registration, and standardised
            Access APIs — one framework for firms, apps, providers, and
            regulators.
          </p>
        </div>
        <Link
          href="/what-is-open-law"
          className={cn(buttonVariants({ variant: "on-color-muted" }), "shrink-0")}
        >
          What is Open Law?
        </Link>
      </div>
    </section>
  );
}
