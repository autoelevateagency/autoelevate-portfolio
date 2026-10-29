import type { Metadata } from "next";

import { ServicePage } from "@/components/pages/service-page";
import { AUTOMOTIVE_DIGITAL_MARKETING } from "@/data/service-pages";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(
  AUTOMOTIVE_DIGITAL_MARKETING.seo,
);

export default function AutomotiveDigitalMarketingPage(): React.ReactElement {
  return <ServicePage content={AUTOMOTIVE_DIGITAL_MARKETING} />;
}
