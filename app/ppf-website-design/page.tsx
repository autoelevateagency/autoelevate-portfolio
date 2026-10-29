import type { Metadata } from "next";

import { ServicePage } from "@/components/pages/service-page";
import { PPF_WEBSITE_DESIGN } from "@/data/service-pages";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(PPF_WEBSITE_DESIGN.seo);

export default function PpfWebsiteDesignPage(): React.ReactElement {
  return <ServicePage content={PPF_WEBSITE_DESIGN} />;
}
