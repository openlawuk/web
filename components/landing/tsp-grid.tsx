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
    <section className="section-full-bleed section-cream py-module">
      <div className="section-inner">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-stack-lg gap-4">
          <div>
            <h2 className="font-heading text-headline-md text-indigo">
              Technology Service Providers
            </h2>
            <p className="text-body-md text-on-surface-variant mt-2">
              Infrastructure powering Open Law firm endpoints. Live Directory
              listings will replace illustrative names as participants join.
            </p>
          </div>
          <Link
            href="/ecosystem/providers"
            className={cn(buttonVariants({ variant: "secondary" }))}
          >
            View TSPs
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-stack-md">
          {providers.map((provider) => {
            const className = cn(
              "border border-indigo p-stack-md flex flex-col items-center justify-center h-28 transition-colors group",
              provider.featured
                ? "bg-lime/30 hover:border-accent"
                : "bg-cream hover:border-accent",
            );

            const inner = (
              <>
                <div
                  className={cn(
                    "font-heading text-headline-sm tracking-tight transition-colors",
                    provider.featured
                      ? "text-indigo group-hover:text-accent"
                      : "text-indigo/60 group-hover:text-accent",
                  )}
                >
                  {provider.name}
                </div>
                <p className="text-body-sm text-on-surface-variant mt-1 text-center px-2">
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
      </div>
    </section>
  );
}
