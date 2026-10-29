import type { MetadataRoute } from "next";

import { getConceptSlugs } from "@/data/portfolio";
import { PAGE_SEO } from "@/data/page-seo";
import { SITE_CONFIG, workConceptPath } from "@/data/site-config";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages = Object.values(PAGE_SEO).map((page) => ({
    url: absoluteUrl(page.path),
    lastModified,
    changeFrequency:
      page.path === "/"
        ? ("weekly" as const)
        : ("monthly" as const),
    priority: page.path === "/" ? 1 : page.path === "/work" ? 0.9 : 0.8,
  }));

  const concepts = getConceptSlugs().map((slug) => ({
    url: absoluteUrl(workConceptPath(slug)),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...pages, ...concepts];
}

void SITE_CONFIG.url;
