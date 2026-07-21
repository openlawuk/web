import Link from "next/link";
import { DocsNav } from "@/components/docs/docs-nav";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin w-full py-10 md:py-16">
      <div className="mb-8">
        <Link
          href="/"
          className="text-label-caps text-secondary hover:text-tertiary transition-colors"
        >
          ← Open Law home
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <aside className="md:col-span-3">
          <div className="tech-border bg-white/80 backdrop-blur-sm p-4 sticky top-24">
            <div className="corner-accent-tl-secondary" />
            <DocsNav />
          </div>
        </aside>
        <div className="md:col-span-9">
          <article className="tech-border bg-white/90 backdrop-blur-sm p-6 md:p-10 prose-openlaw relative">
            <div className="corner-accent-tl" />
            {children}
          </article>
        </div>
      </div>
    </div>
  );
}
