import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const newsDirectory = path.join(process.cwd(), "content/news");

export type NewsFrontmatter = {
  title: string;
  description: string;
  date: string;
  eyebrow?: string;
};

export type NewsArticle = {
  slug: string;
  frontmatter: NewsFrontmatter;
  content: string;
};

export function getNewsSlugs(): string[] {
  if (!fs.existsSync(newsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(newsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getNewsBySlug(slug: string): NewsArticle | null {
  const fullPath = path.join(newsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    frontmatter: {
      title: String(data.title ?? slug),
      description: String(data.description ?? ""),
      date: String(data.date ?? ""),
      eyebrow: data.eyebrow ? String(data.eyebrow) : undefined,
    },
    content,
  };
}

export function getAllNews(): NewsArticle[] {
  return getNewsSlugs()
    .map((slug) => getNewsBySlug(slug))
    .filter((article): article is NewsArticle => article !== null)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime(),
    );
}
