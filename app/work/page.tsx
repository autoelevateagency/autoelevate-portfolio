import type { Metadata } from "next";

import { PageShell } from "@/components/layout/page-shell";
import { PageCta } from "@/components/pages/page-cta";
import { WorkArchive } from "@/components/pages/work-archive";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import {
  ADJACENT_PORTFOLIO,
  AUTOMOTIVE_PORTFOLIO,
} from "@/data/portfolio";
import { PAGE_SEO } from "@/data/page-seo";
import { SITE_ROUTES } from "@/data/site-config";
import { toPortfolioSlide } from "@/lib/portfolio-labels";
import {
  getBreadcrumbSchema,
  getOrganizationSchema,
} from "@/lib/structured-data";
import { buildPageMetadata } from "@/lib/seo";

const seo = PAGE_SEO.work;

export const metadata: Metadata = buildPageMetadata(seo);

const breadcrumbs = [
  { name: "Home", path: SITE_ROUTES.home },
  { name: "Work", path: SITE_ROUTES.work },
];

const automotiveSlides = AUTOMOTIVE_PORTFOLIO.map(toPortfolioSlide);

export default function WorkPage(): React.ReactElement {
  return (
    <PageShell>
      <JsonLd
        data={[
          getOrganizationSchema(),
          getBreadcrumbSchema(breadcrumbs),
        ]}
      />

      <header className="inner-hero">
        <Breadcrumbs items={breadcrumbs} />
        <p className="inner-kicker">Portfolio / Concepts</p>
        <h1 className="inner-h1">{seo.h1}</h1>
        <p className="inner-lead">
          A living archive of automotive website concepts and live demos built
          for detailing, PPF, tint, wrap, and multi-service studios. These are
          design concepts and demos — not fabricated case studies or guaranteed
          client outcomes.
        </p>
      </header>

      <WorkArchive
        projects={automotiveSlides}
        adjacent={ADJACENT_PORTFOLIO}
        heading={`${AUTOMOTIVE_PORTFOLIO.length} automotive concepts`}
      />

      <PageCta
        title="Want a concept tailored to your studio?"
        body="Tell us your niche, market, and what a successful enquiry looks like. We’ll outline the right site structure and next steps."
      />
    </PageShell>
  );
}
