import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/cn";

export function Hero() {
  return (
    <section className="py-stack-lg md:pt-24 md:pb-32 grid grid-cols-1 md:grid-cols-12 gap-gutter items-center relative">
      <div className="md:col-span-6 flex flex-col gap-stack-md relative z-10 bg-gradient-to-br from-white/80 to-secondary-fixed/20 p-6 tech-border backdrop-blur-md shadow-[0_0_40px_rgba(75,65,225,0.05)] border-l-secondary/20">
        <div className="corner-accent-tl-secondary" />
        <div className="node-sky -top-1 -left-1" />
        <div className="absolute -top-3 right-4 bg-white px-2 font-mono text-[10px] text-brand-emerald border border-brand-emerald/30">
          SYS.INIT_01
        </div>
        <div className="hidden md:block vector-path-h w-24 -right-24 top-1/2" />
        <div className="hidden md:block node-tertiary -right-24 top-1/2 -translate-y-1/2" />

        <div className="inline-flex items-center gap-2 px-3 py-1 border border-brand-emerald/30 bg-brand-emerald/5 w-fit">
          <span className="material-symbols-outlined text-brand-emerald text-sm">
            verified
          </span>
          <span className="text-label-caps text-brand-emerald">
            The Standard for Legal Data Portability
          </span>
        </div>

        <h1 className="text-headline-lg-mobile md:text-headline-lg text-brand-navy font-semibold tracking-tight">
          The Framework &amp; Directory Layer for Global Law.
        </h1>

        <p className="text-body-lg text-on-surface-variant max-w-xl">
          Open Law establishes the foundational trust anchor, enabling secure
          discovery, robust verification, and seamless portability of legal data
          across disparate technology providers.
        </p>

        <div className="flex flex-wrap gap-4 mt-stack-sm">
          <Link
            href="/ecosystem"
            className={cn(buttonVariants({ variant: "primary" }), "px-6 py-3")}
          >
            Explore ecosystem
          </Link>
          <Link
            href="/standards"
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "px-6 py-3",
            )}
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
          className="w-full h-full object-contain opacity-90 relative z-0 scale-105"
          priority
        />
        <div className="absolute top-1/4 right-0 bg-white/90 backdrop-blur-md p-2 border border-brand-emerald/30 flex items-center gap-3 shadow-[0_0_20px_rgba(16,185,129,0.15)] tech-border">
          <div className="corner-accent-tl" />
          <div className="w-2 h-2 bg-brand-emerald animate-pulse" />
          <span className="text-label-caps text-brand-navy">System Secure</span>
        </div>
      </div>
    </section>
  );
}
