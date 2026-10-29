import type { Metadata } from "next";

import AutoElevatePage from "@/components/autoelevate/autoelevate-page";
import { StructuredData } from "@/components/seo/structured-data";
import { PAGE_SEO } from "@/data/page-seo";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(PAGE_SEO.home);

export default function Home() {
  return (
    <>
      <StructuredData />
      <AutoElevatePage />
    </>
  );
}
