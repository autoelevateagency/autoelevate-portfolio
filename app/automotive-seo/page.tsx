import type { Metadata } from "next";

import { ServicePage } from "@/components/pages/service-page";
import { AUTOMOTIVE_SEO } from "@/data/service-pages";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(AUTOMOTIVE_SEO.seo);

export default function AutomotiveSeoPage(): React.ReactElement {
  return <ServicePage content={AUTOMOTIVE_SEO} />;
}
