import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/cn";

export function Hero() {
  return (
    <section className="section-full-bleed section-cream py-stack-lg md:pt-24 md:pb-32">
      <div className="section-inner grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        <div className="md:col-span-6 flex flex-col gap-stack-md">
          <h1 className="font-heading text-headline-lg-mobile md:text-display text-indigo tracking-tight">
            The Framework &amp; Directory Layer for Global Law.
          </h1>

          <p className="text-body-lg text-on-surface-variant max-w-xl">
            Open Law establishes the foundational trust anchor for secure
            discovery, verification, and seamless portability of legal data
            across disparate technology providers.
          </p>

          <div className="flex flex-wrap gap-4 mt-stack-sm">
            <Link
              href="/ecosystem"
              className={cn(buttonVariants({ variant: "primary" }))}
            >
              Explore ecosystem
            </Link>
            <Link
              href="/standards"
              className={cn(buttonVariants({ variant: "secondary" }))}
            >
              View standards
            </Link>
          </div>
        </div>

        <div className="md:col-span-6 relative h-[320px] md:h-[560px] w-full flex items-center justify-center">
          <Image
            src="/hero-network.svg"
            alt="Trust Anchor network illustration"
            width={640}
            height={640}
            className="w-full h-full object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
