import Link from "next/link";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/cn";

const proofs = [
  {
    label: "Vendor-neutral ontology",
    value: "One model",
    detail: "Parties, matters, documents, financials, scheduling",
  },
  {
    label: "Security profile",
    value: "FAPI 2.0",
    detail: "Read/Write APIs with PAR, PKCE, and client consent",
  },
  {
    label: "Public discovery",
    value: "Open Data",
    detail: "Code lists, participants, published price aggregates",
  },
  {
    label: "Marketplace safety",
    value: "Boundaries",
    detail: "Client-visible data limits attested via conformance",
  },
] as const;

export function StandardsProof() {
  return (
    <section className="section-full-bleed section-peach py-module">
      <div className="section-inner">
        <div className="flex flex-col md:flex-row justify-between gap-6 mb-10">
          <div>
            <p className="text-label-md text-indigo/70 mb-3">
              Standards &amp; open data
            </p>
            <h2 className="font-heading text-headline-md text-indigo">
              Built for transparency and trust
            </h2>
          </div>
          <Link
            href="/standards"
            className={cn(buttonVariants({ variant: "on-color-muted" }), "self-start")}
          >
            See all standards
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {proofs.map((item) => (
            <div key={item.label} className="border-t border-indigo pt-6">
              <p className="text-label-sm text-indigo/60 mb-3">{item.label}</p>
              <p className="font-heading text-headline-sm text-indigo mb-2">
                {item.value}
              </p>
              <p className="text-body-sm text-on-surface-variant">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
