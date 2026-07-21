import Link from "next/link";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/cn";

export function DirectoryIntro() {
  return (
    <section className="py-stack-lg md:py-20 relative">
      <div className="relative overflow-hidden tech-border bg-brand-navy text-white p-8 md:p-14">
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 20% 30%, rgba(16,185,129,0.45), transparent 45%), radial-gradient(circle at 80% 70%, rgba(75,65,225,0.35), transparent 40%)",
          }}
        />
        <div className="relative z-10 max-w-2xl flex flex-col gap-5">
          <p className="text-label-caps text-brand-emerald">Trust anchor</p>
          <h2 className="text-headline-md md:text-headline-lg font-semibold tracking-tight">
            Introducing the Open Law Directory
          </h2>
          <p className="text-body-lg text-white/75">
            Register participants, publish JWKS, and issue Software Statement
            Assertions (SSAs). Client-facing apps present an SSA at Dynamic
            Client Registration — without firm allowlisting for open marketplace
            access.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/docs/directory"
              className={cn(buttonVariants({ variant: "primary" }), "px-6")}
            >
              Directory docs
            </Link>
            <Link
              href="/ecosystem"
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "px-6 bg-white/10 text-white border-white/20 hover:bg-white/15",
              )}
            >
              Explore ecosystem
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
