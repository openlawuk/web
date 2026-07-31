import type { MetadataRoute } from "next";
import { getDocSlugs } from "@/lib/docs";

const baseUrl = "https://www.openlaw.org.uk";

const staticRoutes = [
  "",
  "/ecosystem",
  "/ecosystem/firms",
  "/ecosystem/apps",
  "/ecosystem/providers",
  "/ecosystem/regulatory",
  "/standards",
  "/developers",
  "/participate",
  "/about",
  "/privacy",
  "/governance",
  "/documentation",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const docs = getDocSlugs().map((slug) => ({
    url: `${baseUrl}/documentation/${slug}`,
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
    ...docs,
  ];
}
