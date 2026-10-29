import type { Metadata } from "next";

import { ServicePage } from "@/components/pages/service-page";
import { CAR_DETAILING_WEBSITE_DESIGN } from "@/data/service-pages";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(
  CAR_DETAILING_WEBSITE_DESIGN.seo,
);

export default function CarDetailingWebsiteDesignPage(): React.ReactElement {
  return <ServicePage content={CAR_DETAILING_WEBSITE_DESIGN} />;
}
