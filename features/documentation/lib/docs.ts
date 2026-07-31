import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { docsNav } from "@/features/documentation/lib/docs-nav";

export { docsNav } from "@/features/documentation/lib/docs-nav";

const docsDirectory = path.join(process.cwd(), "content/docs");

export type DocFrontmatter = {
  title: string;
  description: string;
};

export type Doc = {
  slug: string;
  frontmatter: DocFrontmatter;
  content: string;
};

export function getDocSlugs(): string[] {
  return docsNav.map((item) => item.slug);
}

export function getDocBySlug(slug: string): Doc | null {
  const fullPath = path.join(docsDirectory, `${slug}.mdx`);
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
    },
    content,
  };
}

export function getAllDocs(): Doc[] {
  return getDocSlugs()
    .map((slug) => getDocBySlug(slug))
    .filter((doc): doc is Doc => doc !== null);
}
