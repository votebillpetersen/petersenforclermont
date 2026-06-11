import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Allows all search engines to crawl the entire site and points them at
 * the sitemap. Served at /robots.txt by Next.js.
 */
export default function robots(): MetadataRoute.Robots {
  const base = SITE_URL.toString().replace(/\/$/, "");
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
