import type { MetadataRoute } from "next";
import { getDocSlugs } from "@/features/documentation/lib/docs";
import { getNewsSlugs } from "@/features/news/lib/news";

const baseUrl = "https://www.openlaw.org.uk";

const staticRoutes = [
  "",
  "/what-is-open-law",
  "/ecosystem",
  "/ecosystem/firms",
  "/ecosystem/apps",
  "/ecosystem/providers",
  "/ecosystem/regulatory",
  "/news",
  "/standard",
  "/developers",
  "/participate",
  "/about",
  "/privacy",
  "/governance",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const standards = getDocSlugs().map((slug) => ({
    url: `${baseUrl}/standard/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const news = getNewsSlugs().map((slug) => ({
    url: `${baseUrl}/news/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...standards,
    ...news,
  ];
}
