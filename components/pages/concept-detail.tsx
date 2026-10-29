import Link from "next/link";

import { SiteImage } from "@/components/autoelevate/site-image";
import { PageShell } from "@/components/layout/page-shell";
import { PageCta } from "@/components/pages/page-cta";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import type { AutomotiveConcept } from "@/data/portfolio";
import { primaryServiceHref } from "@/data/portfolio";
import { SITE_CONFIG, SITE_ROUTES } from "@/data/site-config";
import { primaryNicheLabel } from "@/lib/portfolio-labels";
import {
  getBreadcrumbSchema,
  getOrganizationSchema,
  type BreadcrumbItem,
} from "@/lib/structured-data";

type ConceptDetailPageProps = {
  concept: AutomotiveConcept;
};

export const ConceptDetailPage = ({
  concept,
}: ConceptDetailPageProps): React.ReactElement => {
  const nicheLabel = primaryNicheLabel(concept);
  const serviceHref = primaryServiceHref(concept);
  const hasShot = Boolean(concept.screenshot && concept.screenshotAlt);

  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", path: SITE_ROUTES.home },
    { name: "Work", path: SITE_ROUTES.work },
    { name: concept.name, path: concept.href },
  ];

  return (
    <PageShell>
      <JsonLd
        data={[
          getOrganizationSchema(),
          getBreadcrumbSchema(breadcrumbs),
        ]}
      />

      <header className="inner-hero concept-detail-hero">
        <Breadcrumbs items={breadcrumbs} />
        <p className="inner-kicker">
          {concept.label}
          {concept.location ? ` · ${concept.location}` : ""}
        </p>
        <h1 className="inner-h1">{concept.name}</h1>
        <p className="inner-lead">{concept.description}</p>
        <p className="concept-detail-disclaimer">
          This is a website concept / live demo from the AutoElevate archive —
          not a fabricated client case study, testimonial, or guaranteed
          business outcome.
        </p>
        <div className="inner-hero-actions">
          <a
            className="cta-button"
            href={concept.previewUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open live demo
          </a>
          <a
            className="text-link"
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Start a Project
          </a>
        </div>
      </header>

      <section className="inner-section concept-detail-preview">
        <div className="concept-detail-stage">
          <div className="work-chrome">
            <span className="work-chrome-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="work-chrome-url">{concept.domain}</span>
          </div>
          <div className={`work-shot${hasShot ? "" : " work-shot--live"}`}>
            {hasShot && concept.screenshot && concept.screenshotAlt ? (
              <SiteImage
                src={concept.screenshot}
                alt={concept.screenshotAlt}
                sizes="(max-width: 900px) 100vw, 1100px"
                objectFit="cover"
                className="object-cover"
                priority
              />
            ) : (
              <div className="live-concept-panel">
                <p className="live-concept-kicker">{nicheLabel}</p>
                <p className="live-concept-domain">{concept.name}</p>
                {concept.location ? (
                  <p className="live-concept-location">{concept.location}</p>
                ) : null}
                <span className="live-concept-cta">Live demo available ↗</span>
              </div>
            )}
          </div>
        </div>
        <p className="concept-detail-meta">
          <span>{nicheLabel}</span>
          {concept.location ? <span>{concept.location}</span> : null}
          <span>{concept.label}</span>
        </p>
      </section>

      <section className="inner-section inner-section--muted">
        <div className="inner-section-head">
          <p className="section-eyebrow">Design direction</p>
          <h2 className="inner-h2">How this concept is shaped</h2>
        </div>
        <p className="concept-detail-prose">{concept.detail.designDirection}</p>
      </section>

      <section className="inner-section">
        <div className="inner-section-head">
          <p className="section-eyebrow">Website features</p>
          <h2 className="inner-h2">What the demo demonstrates</h2>
        </div>
        <ul className="concept-detail-features">
          {concept.detail.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>

      <section className="inner-section inner-section--muted">
        <div className="inner-section-head">
          <p className="section-eyebrow">Customer journey</p>
          <h2 className="inner-h2">From first impression to enquiry</h2>
        </div>
        <p className="concept-detail-prose">{concept.detail.customerJourney}</p>
        <div className="related-links concept-detail-links">
          <Link href={serviceHref}>Related service page →</Link>
          <Link href={SITE_ROUTES.work}>Full portfolio →</Link>
          <a
            href={concept.previewUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live demo ↗
          </a>
        </div>
      </section>

      <PageCta
        title="Want a site shaped for your studio?"
        body="Share your niche, market, and what a qualified enquiry looks like. We’ll outline structure, visuals, and next steps — without inventing case-study claims."
      />
    </PageShell>
  );
};
