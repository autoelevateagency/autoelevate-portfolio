import type { MetadataRoute } from "next";

import { SITE_CONFIG } from "@/data/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Do not disallow /_next/ — Google needs CSS/JS assets to render pages.
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
    host: SITE_CONFIG.url.replace(/^https?:\/\//, ""),
  };
}
