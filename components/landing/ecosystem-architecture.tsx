import Link from "next/link";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/cn";

const nodes = [
  {
    title: "1. Directory",
    phase: "Discovery Phase",
    icon: "travel_explore",
    body: "Global registry indexing verified legal entities, datasets, and endpoints. The starting point for interoperable legal tech.",
  },
  {
    title: "2. DCR",
    phase: "Trust Framework",
    icon: "security",
    body: "Dynamic Client Registration validates the cryptographic identity and permissions of querying systems in real-time.",
  },
  {
    title: "3. Access",
    phase: "Data Portability",
    icon: "data_object",
    body: "Standardized API gateways facilitate secure, governed transfer of legal datasets between authorized providers.",
  },
];

export function EcosystemArchitecture() {
  return (
    <section className="section-full-bleed section-indigo py-module">
      <div className="section-inner">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-heading text-headline-md text-cream mb-stack-sm">
            The Ecosystem Architecture
          </h2>
          <p className="text-body-md text-cream/75">
            A streamlined, cryptographic approach to legal data discovery and
            access — anchored by the Open Law Directory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {nodes.map((node) => (
            <div
              key={node.title}
              className="border-t border-cream/20 pt-8 flex flex-col gap-stack-md"
            >
              <div className="w-12 h-12 flex items-center justify-center text-lime">
                <span className="material-symbols-outlined text-2xl">
                  {node.icon}
                </span>
              </div>
              <div>
                <h3 className="font-heading text-headline-sm text-cream mb-2">
                  {node.title}
                </h3>
                <p className="text-label-sm text-lime mb-3">{node.phase}</p>
                <p className="text-body-md text-cream/75">{node.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/docs/directory"
            className={cn(buttonVariants({ variant: "on-color" }))}
          >
            Directory docs
          </Link>
          <Link
            href="/ecosystem"
            className={cn(buttonVariants({ variant: "on-color" }))}
          >
            Explore ecosystem
          </Link>
        </div>
      </div>
    </section>
  );
}
