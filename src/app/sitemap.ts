import type { MetadataRoute } from "next";
import { metadataBase } from "./layout";

/**
 * Sitemap covering every indexable route on the site. Next.js will serve
 * this at /sitemap.xml automatically.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = metadataBase.toString().replace(/\/$/, "");
  const lastModified = new Date();

  const routes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { path: "/", changeFrequency: "weekly", priority: 1.0 },
    { path: "/about", changeFrequency: "monthly", priority: 0.9 },
    { path: "/record", changeFrequency: "weekly", priority: 0.9 },
    { path: "/issues", changeFrequency: "monthly", priority: 0.8 },
    { path: "/endorsements", changeFrequency: "weekly", priority: 0.7 },
    { path: "/volunteer", changeFrequency: "monthly", priority: 0.8 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.6 },
    { path: "/donate", changeFrequency: "monthly", priority: 0.8 },
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
