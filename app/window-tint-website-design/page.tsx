import type { Metadata } from "next";

import { ServicePage } from "@/components/pages/service-page";
import { WINDOW_TINT_WEBSITE_DESIGN } from "@/data/service-pages";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(
  WINDOW_TINT_WEBSITE_DESIGN.seo,
);

export default function WindowTintWebsiteDesignPage(): React.ReactElement {
  return <ServicePage content={WINDOW_TINT_WEBSITE_DESIGN} />;
}
