import type { Metadata } from "next";

import { AboutPage } from "@/components/pages/about-page";
import { PAGE_SEO } from "@/data/page-seo";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(PAGE_SEO.about, {
  ogImage: "/assets/about/taha.png",
});

export default function AboutRoute(): React.ReactElement {
  return <AboutPage />;
}
