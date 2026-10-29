import type { Metadata } from "next";

import { ServicePage } from "@/components/pages/service-page";
import { AUTOMOTIVE_WEBSITE_DESIGN } from "@/data/service-pages";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(
  AUTOMOTIVE_WEBSITE_DESIGN.seo,
);

export default function AutomotiveWebsiteDesignPage(): React.ReactElement {
  return <ServicePage content={AUTOMOTIVE_WEBSITE_DESIGN} />;
}
