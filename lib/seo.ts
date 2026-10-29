import type { Metadata } from "next";

import { SITE_CONFIG } from "@/data/site-config";
import type { PageSeo } from "@/data/page-seo";

export const absoluteUrl = (path: string): string => {
  if (!path || path === "/") {
    return SITE_CONFIG.url;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_CONFIG.url}${normalizedPath}`;
};

export const buildPageMetadata = (
  page: PageSeo,
  options?: { ogImage?: string },
): Metadata => {
  const url = absoluteUrl(page.path);
  const ogImage = options?.ogImage ?? SITE_CONFIG.ogImage;

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: page.path,
    },
    openGraph: {
      type: "website",
      locale: SITE_CONFIG.locale,
      url,
      siteName: SITE_CONFIG.displayName,
      title: page.title,
      description: page.description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${SITE_CONFIG.displayName} — ${page.h1}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
};
