import Link from "next/link";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/cn";

export function SiteCta() {
  return (
    <section className="section-full-bleed section-indigo py-module">
      <div className="section-inner flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <h2 className="font-heading text-headline-md md:text-headline-lg text-cream max-w-2xl">
          Ready to participate in the open legal data marketplace?
        </h2>
        <Link
          href="/participate"
          className={cn(buttonVariants({ variant: "on-color" }))}
        >
          How to join
        </Link>
      </div>
    </section>
  );
}
