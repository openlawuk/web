import Link from "next/link";
import type { Metadata } from "next";
import { getDocBySlug } from "@/lib/docs";
import { docsNav } from "@/lib/docs-nav";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Open Law documentation and framework guides.",
};

export default function DocsIndexPage() {
  const docs = docsNav
    .map((item) => getDocBySlug(item.slug))
    .filter((doc): doc is NonNullable<typeof doc> => doc !== null);

  return (
    <div>
      <p className="font-mono text-[10px] text-brand-emerald border border-brand-emerald/30 inline-block px-2 mb-4">
        DOCS.INDEX
      </p>
      <h1 className="text-headline-lg text-brand-navy font-semibold tracking-tight mb-3">
        Documentation
      </h1>
      <p className="text-body-lg text-on-surface-variant mb-8 max-w-2xl">
        Guides for the Open Law public site. Normative specifications live in
        the Open Law GitHub repositories.
      </p>
      <ul className="flex flex-col gap-3">
        {docs.map((doc) => (
          <li key={doc.slug}>
            <Link
              href={`/docs/${doc.slug}`}
              className="block tech-border p-4 hover:border-primary transition-colors bg-surface-container-lowest"
            >
              <span className="text-headline-sm text-brand-navy font-semibold">
                {doc.frontmatter.title}
              </span>
              <p className="text-body-md text-on-surface-variant mt-1">
                {doc.frontmatter.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
