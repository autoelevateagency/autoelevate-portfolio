import type { Metadata } from "next";

import { ServicePage } from "@/components/pages/service-page";
import { AUTOMOTIVE_BRANDING } from "@/data/service-pages";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(AUTOMOTIVE_BRANDING.seo);

export default function AutomotiveBrandingPage(): React.ReactElement {
  return <ServicePage content={AUTOMOTIVE_BRANDING} />;
}
