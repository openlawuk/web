import Link from "next/link";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/cn";

export function ParticipateCta() {
  return (
    <section className="py-stack-lg md:py-20">
      <div className="tech-border bg-gradient-to-br from-white via-surface-container-low to-secondary-fixed/30 p-8 md:p-12 relative">
        <div className="corner-accent-tl-secondary" />
        <div className="corner-accent-br" />
        <div className="max-w-2xl flex flex-col gap-5">
          <h2 className="text-headline-md text-brand-navy font-semibold">
            Participate in the open marketplace
          </h2>
          <p className="text-body-lg text-on-surface-variant">
            Register software, run the conformance suite, and connect against
            the reference TSP. Commercial connectivity is optional — start with
            the open rails.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/participate"
              className={cn(buttonVariants({ variant: "primary" }), "px-6")}
            >
              How to join
            </Link>
            <Link
              href="/docs/getting-started"
              className={cn(buttonVariants({ variant: "secondary" }), "px-6")}
            >
              Getting started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
