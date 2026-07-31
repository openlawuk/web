import Link from "next/link";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/cn";
import { getAllNews } from "@/features/news/lib/news";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function LatestNews() {
  const articles = getAllNews().slice(0, 3);

  return (
    <section className="section-full-bleed section-cream py-module">
      <div className="section-inner">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-label-md text-accent mb-3">News & Insights</p>
            <h2 className="font-heading text-headline-md text-indigo">
              Latest news & insights
            </h2>
          </div>
          <Link
            href="/news"
            className={cn(buttonVariants({ variant: "secondary" }), "shrink-0")}
          >
            View all news
          </Link>
        </div>

        {articles.length === 0 ? (
          <p className="text-body-md text-on-surface-variant">
            No articles yet.{" "}
            <Link href="/news" className="text-accent hover:underline">
              Visit News & Insights
            </Link>
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/news/${article.slug}`}
                className="group flex flex-col border-t border-indigo pt-6 hover:border-accent transition-colors"
              >
                <time
                  dateTime={article.frontmatter.date}
                  className="text-label-sm text-on-surface-variant mb-3"
                >
                  {formatDate(article.frontmatter.date)}
                </time>
                <h3 className="font-heading text-headline-sm text-indigo group-hover:text-accent transition-colors mb-2">
                  {article.frontmatter.title}
                </h3>
                <p className="text-body-sm text-on-surface-variant flex-1">
                  {article.frontmatter.description}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
