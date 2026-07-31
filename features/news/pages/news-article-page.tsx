import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getNewsBySlug, getNewsSlugs } from "@/features/news/lib/news";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function generateStaticParams() {
  return getNewsSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  if (!article) {
    return { title: "Not found" };
  }
  return {
    title: article.frontmatter.title,
    description: article.frontmatter.description,
  };
}

export async function NewsArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  if (!article) {
    notFound();
  }

  return (
    <main className="section-inner w-full pb-20">
      <Link
        href="/news"
        className="inline-flex items-center gap-2 text-label-md text-on-surface-variant hover:text-accent transition-colors mb-8"
      >
        <span className="material-symbols-outlined text-base">arrow_back</span>
        News & Insights
      </Link>
      <article className="max-w-3xl">
        <header className="mb-10 animate-fade-up">
          {article.frontmatter.eyebrow ? (
            <p className="text-label-md text-accent mb-3">
              {article.frontmatter.eyebrow}
            </p>
          ) : null}
          <h1 className="font-heading text-headline-lg-mobile md:text-headline-lg text-indigo tracking-tight mb-4">
            {article.frontmatter.title}
          </h1>
          <time
            dateTime={article.frontmatter.date}
            className="text-label-sm text-on-surface-variant"
          >
            {formatDate(article.frontmatter.date)}
          </time>
        </header>
        <div className="prose-openlaw">
          <MDXRemote source={article.content} />
        </div>
      </article>
    </main>
  );
}
