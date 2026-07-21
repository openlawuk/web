import Link from "next/link";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/cn";
import { siteUrls } from "@/lib/site-nav";

const providers = [
  {
    id: "TSP_MT",
    name: "Mattertwo",
    href: siteUrls.mattertwo,
    external: true,
    featured: true,
    note: "Commercial connectivity TSP",
  },
  {
    id: "TSP_01",
    name: "LexData",
    href: "/ecosystem/providers",
    external: false,
    featured: false,
    note: "Illustrative placeholder",
  },
  {
    id: "TSP_02",
    name: "JurisNode",
    href: "/ecosystem/providers",
    external: false,
    featured: false,
    note: "Illustrative placeholder",
  },
  {
    id: "TSP_03",
    name: "StructLaw",
    href: "/ecosystem/providers",
    external: false,
    featured: false,
    note: "Illustrative placeholder",
  },
] as const;

export function TspGrid() {
  return (
    <section className="py-stack-lg relative">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-stack-lg gap-4 bg-white/80 p-4 tech-border backdrop-blur-sm relative">
        <div className="corner-accent-tl-secondary" />
        <div>
          <h2 className="text-headline-md text-brand-navy font-semibold">
            Technology Service Providers
          </h2>
          <p className="text-body-md text-on-surface-variant">
            Infrastructure powering Open Law firm endpoints. Live Directory
            listings will replace illustrative names as participants join.
          </p>
        </div>
        <Link
          href="/ecosystem/providers"
          className={cn(buttonVariants({ variant: "ghost" }), "px-3 py-2")}
        >
          View TSPs
          <span className="material-symbols-outlined text-sm">
            arrow_forward
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-stack-md">
        {providers.map((provider) => {
          const className = cn(
            "bg-gradient-to-br from-white/90 backdrop-blur-sm tech-border p-stack-md flex flex-col items-center justify-center h-28 transition-all group relative",
            provider.featured
              ? "to-primary-container/10 border-b-brand-emerald/40 hover:border-brand-emerald/60 hover:shadow-[0_0_20px_rgba(16,185,129,0.12)]"
              : "to-secondary-fixed/10 border-b-secondary/20 hover:border-secondary/50 hover:bg-secondary/5",
          );

          const inner = (
            <>
              <div
                className={cn(
                  "opacity-0 group-hover:opacity-100 transition-opacity",
                  provider.featured ? "corner-accent-tl" : "corner-accent-br",
                )}
              />
              <div className="absolute top-1 left-1 font-mono text-[8px] text-secondary/60">
                {provider.id}
              </div>
              <div
                className={cn(
                  "text-headline-sm font-bold tracking-tight transition-colors",
                  provider.featured
                    ? "text-brand-navy group-hover:text-brand-emerald"
                    : "text-brand-navy/60 group-hover:text-secondary",
                )}
              >
                {provider.name}
              </div>
              <p className="text-[10px] text-on-surface-variant mt-1 text-center px-2">
                {provider.note}
              </p>
            </>
          );

          if (provider.external) {
            return (
              <a
                key={provider.id}
                href={provider.href}
                className={className}
                target="_blank"
                rel="noreferrer"
              >
                {inner}
              </a>
            );
          }

          return (
            <Link key={provider.id} href={provider.href} className={className}>
              {inner}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
