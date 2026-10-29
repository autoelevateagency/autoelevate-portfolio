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

/** Normalize page titles so the root layout template cannot double-append the brand. */
export const absolutePageTitle = (title: string): string => {
  const trimmed = title.trim();
  if (/AutoElevate|Auto Elevate/i.test(trimmed)) {
    return trimmed
      .replace(/\|\s*AutoElevate\s*$/i, `| ${SITE_CONFIG.displayName}`)
      .trim();
  }
  return `${trimmed} | ${SITE_CONFIG.displayName}`;
};

export const buildPageMetadata = (
  page: PageSeo,
  options?: { ogImage?: string },
): Metadata => {
  const url = absoluteUrl(page.path);
  const ogImage = options?.ogImage ?? SITE_CONFIG.ogImage;
  const title = absolutePageTitle(page.title);

  return {
    title: {
      absolute: title,
    },
    description: page.description,
    alternates: {
      canonical: page.path,
    },
    openGraph: {
      type: "website",
      locale: SITE_CONFIG.locale,
      url,
      siteName: SITE_CONFIG.displayName,
      title,
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
      title,
      description: page.description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
};
