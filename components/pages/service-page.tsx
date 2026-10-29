import Link from "next/link";

import { SiteImage } from "@/components/autoelevate/site-image";
import { PageShell } from "@/components/layout/page-shell";
import { FaqBlock } from "@/components/pages/faq-block";
import { PageCta } from "@/components/pages/page-cta";
import { PortfolioSlider } from "@/components/portfolio/portfolio-slider";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import type { PortfolioItem } from "@/data/portfolio";
import type { PageSeo } from "@/data/page-seo";
import { SITE_CONFIG, SITE_ROUTES } from "@/data/site-config";
import { toPortfolioSlide } from "@/lib/portfolio-labels";
import {
  getBreadcrumbSchema,
  getOrganizationSchema,
  getPageServiceSchema,
  type BreadcrumbItem,
} from "@/lib/structured-data";

export type ServiceCapability = {
  title: string;
  body: string;
};

export type ServiceProcessStep = {
  title: string;
  body: string;
};

export type ServicePageContent = {
  seo: PageSeo;
  kicker: string;
  lead: string;
  heroLayout: "cinema" | "split" | "editorial";
  heroImage: string;
  heroImageAlt: string;
  serviceType: string | string[];
  introTitle: string;
  introBody: string[];
  asideTitle?: string;
  asideBody?: string;
  capabilitiesTitle: string;
  capabilities: ServiceCapability[];
  processTitle: string;
  process: ServiceProcessStep[];
  conceptsTitle: string;
  conceptsNote: string;
  concepts: PortfolioItem[];
  related: { label: string; href: string }[];
  faqs: { question: string; answer: string }[];
  ctaTitle: string;
  ctaBody: string;
};

export const ServicePage = ({
  content,
}: {
  content: ServicePageContent;
}): React.ReactElement => {
  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", path: SITE_ROUTES.home },
    { name: content.seo.h1, path: content.seo.path },
  ];

  const heroClass =
    content.heroLayout === "cinema"
      ? "inner-hero inner-hero--cinema"
      : content.heroLayout === "split"
        ? "inner-hero inner-hero--split"
        : "inner-hero";

  return (
    <PageShell>
      <JsonLd
        data={[
          getOrganizationSchema(),
          getBreadcrumbSchema(breadcrumbs),
          getPageServiceSchema({
            name: content.seo.h1,
            description: content.seo.description,
            path: content.seo.path,
            serviceType: content.serviceType,
          }),
        ]}
      />

      <header className={heroClass}>
        {content.heroLayout === "cinema" ? (
          <div className="inner-hero-bg" aria-hidden="true">
            <SiteImage
              src={content.heroImage}
              alt=""
              priority
              sizes="100vw"
            />
          </div>
        ) : null}

        <div>
          <Breadcrumbs items={breadcrumbs} />
          <p className="inner-kicker">{content.kicker}</p>
          <h1 className="inner-h1">{content.seo.h1}</h1>
          <p className="inner-lead">{content.lead}</p>
          <div className="inner-hero-actions">
            <a
              className="cta-button"
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Start a Project
            </a>
            <Link className="text-link" href={SITE_ROUTES.work}>
              View Our Work
            </Link>
          </div>
        </div>

        {content.heroLayout === "split" ? (
          <div className="inner-hero-media">
            <SiteImage
              src={content.heroImage}
              alt={content.heroImageAlt}
              priority
              sizes="(max-width: 980px) 100vw, 45vw"
            />
          </div>
        ) : null}
      </header>

      <section className="inner-section">
        <div className="two-col-copy">
          <div>
            <p className="section-eyebrow">Overview</p>
            <h2 className="inner-h2">{content.introTitle}</h2>
            <div className="prose-block" style={{ marginTop: 24 }}>
              {content.introBody.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </div>
          {content.asideTitle && content.asideBody ? (
            <aside className="niche-aside">
              <h3 className="inner-h3">{content.asideTitle}</h3>
              <p>{content.asideBody}</p>
            </aside>
          ) : null}
        </div>
      </section>

      <section className="inner-section inner-section--muted">
        <div className="inner-section-head">
          <p className="section-eyebrow">Capabilities</p>
          <h2 className="inner-h2">{content.capabilitiesTitle}</h2>
        </div>
        <div className="capability-rail">
          {content.capabilities.map((item, index) => (
            <article className="capability-item" key={item.title}>
              <p className="capability-num">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="inner-h3">{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="inner-section work-archive-section">
        <div className="inner-section-head">
          <p className="section-eyebrow">Concepts</p>
          <h2 className="inner-h2">{content.conceptsTitle}</h2>
        </div>
        <p className="work-filter-note">{content.conceptsNote}</p>
        <PortfolioSlider
          projects={content.concepts.map(toPortfolioSlide)}
          ariaLabel={content.conceptsTitle}
          footerHref={SITE_ROUTES.work}
          footerLabel="Full portfolio"
          className="work-archive-slider"
        />
      </section>

      <section className="inner-section inner-section--muted">
        <div className="inner-section-head">
          <p className="section-eyebrow">Process</p>
          <h2 className="inner-h2">{content.processTitle}</h2>
        </div>
        <div className="process-steps">
          {content.process.map((step, index) => (
            <article className="process-step" key={step.title}>
              <p className="capability-num">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="inner-h3">{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="inner-section">
        <div className="inner-section-head">
          <p className="section-eyebrow">Continue exploring</p>
          <h2 className="inner-h2">Related services</h2>
        </div>
        <div className="related-links">
          {content.related.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      <FaqBlock title="Questions studios ask" items={content.faqs} />

      <PageCta title={content.ctaTitle} body={content.ctaBody} />
    </PageShell>
  );
};
