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
          className="text-label-md text-indigo hover:text-accent transition-colors"
        >
          ← Open Law home
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <aside className="md:col-span-3">
          <div className="border-t border-indigo/15 pt-4 sticky top-24">
            <DocsNav />
          </div>
        </aside>
        <div className="md:col-span-9">
          <article className="prose-openlaw border-t border-indigo/15 pt-8 md:pt-10">
            {children}
          </article>
        </div>
      </div>
    </div>
  );
}
