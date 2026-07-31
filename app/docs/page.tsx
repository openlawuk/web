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
      <p className="text-label-md text-accent mb-4">Documentation</p>
      <h1 className="font-heading text-headline-lg text-indigo tracking-tight mb-3">
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
              className="block border-t border-indigo/15 py-4 hover:border-accent transition-colors"
            >
              <span className="font-heading text-headline-sm text-indigo">
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
