import Link from "next/link";
import type { Metadata } from "next";
import { PageHero, pageMetadata } from "@/features/app/components/page-hero";
import { getAllNews } from "@/features/news/lib/news";

export const metadata: Metadata = pageMetadata(
  "News & Insights",
  "Updates, standards news, and ecosystem insights from Open Law.",
);

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function NewsIndexPage() {
  const articles = getAllNews();

  return (
    <main className="section-inner w-full pb-20">
      <PageHero
        eyebrow="News & Insights"
        title="Updates from Open Law"
        description="Standards releases, ecosystem news, and perspectives on open legal data portability."
      />
      {articles.length === 0 ? (
        <p className="text-body-lg text-on-surface-variant">
          No articles yet. Check back soon.
        </p>
      ) : (
        <ul className="flex flex-col gap-3">
          {articles.map((article) => (
            <li key={article.slug}>
              <Link
                href={`/news/${article.slug}`}
                className="block border-t border-indigo py-6 hover:border-accent transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
                  {article.frontmatter.eyebrow ? (
                    <span className="text-label-md text-accent">
                      {article.frontmatter.eyebrow}
                    </span>
                  ) : null}
                  <time
                    dateTime={article.frontmatter.date}
                    className="text-label-sm text-on-surface-variant"
                  >
                    {formatDate(article.frontmatter.date)}
                  </time>
                </div>
                <span className="font-heading text-headline-sm text-indigo">
                  {article.frontmatter.title}
                </span>
                <p className="text-body-md text-on-surface-variant mt-2 max-w-2xl">
                  {article.frontmatter.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
