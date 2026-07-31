import { ContentCard } from "@/components/ui/content-card";
import { ArrowButton } from "@/components/ui/arrow-button";

const featured = [
  {
    href: "/ecosystem/firms",
    title: "Firms (LSPs)",
    description:
      "Legal service providers host practice data behind Open Law APIs while clients choose which apps access their information.",
    eyebrow: "Ecosystem",
    tone: "green" as const,
  },
  {
    href: "/ecosystem/apps",
    title: "Apps (TPPs)",
    description:
      "Third-party providers build client-facing software on a common trust and data model — without rebuilding per practice system.",
    eyebrow: "Ecosystem",
    tone: "indigo" as const,
  },
  {
    href: "/docs/directory",
    title: "Open Law Directory",
    description:
      "The trust anchor: register participants, publish JWKS, and issue Software Statement Assertions for marketplace access.",
    eyebrow: "Standards",
    tone: "lime" as const,
  },
] as const;

export function FeaturedWork() {
  return (
    <section className="section-full-bleed section-cream py-module border-t border-indigo/10">
      <div className="section-inner">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <h2 className="font-heading text-headline-md text-indigo">
            Featured framework areas
          </h2>
          <ArrowButton href="/ecosystem" slim>
            More ecosystem
          </ArrowButton>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((item) => (
            <ContentCard key={item.href} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
