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
    <section className="py-stack-lg md:py-16">
      <div className="flex flex-col md:flex-row justify-between gap-6 mb-10">
        <div>
          <p className="text-label-caps text-secondary mb-3">Standards &amp; open data</p>
          <h2 className="text-headline-md text-brand-navy font-semibold">
            Built for transparency and trust
          </h2>
        </div>
        <Link
          href="/standards"
          className={cn(buttonVariants({ variant: "ghost" }), "self-start")}
        >
          See all standards
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {proofs.map((item) => (
          <div
            key={item.label}
            className="tech-border bg-white/90 p-6 relative hover:border-primary/30 transition-colors"
          >
            <p className="text-label-caps text-on-surface-variant mb-3">
              {item.label}
            </p>
            <p className="text-headline-sm text-brand-navy font-bold mb-2">
              {item.value}
            </p>
            <p className="text-body-sm text-on-surface-variant">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
