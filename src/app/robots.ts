import type { MetadataRoute } from "next";
import { metadataBase } from "./layout";

/**
 * Allows all search engines to crawl the entire site and points them at
 * the sitemap. Served at /robots.txt by Next.js.
 */
export default function robots(): MetadataRoute.Robots {
  const base = metadataBase.toString().replace(/\/$/, "");
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
