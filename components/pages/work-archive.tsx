"use client";

import { useCallback, useRef } from "react";
import Link from "next/link";

import {
  PortfolioSlider,
  type PortfolioSliderHandle,
} from "@/components/portfolio/portfolio-slider";
import { PortfolioCard } from "@/components/pages/portfolio-card";
import { WorkNicheNav } from "@/components/pages/work-niche-nav";
import type { PortfolioItem, PortfolioNiche } from "@/data/portfolio";
import { SITE_ROUTES } from "@/data/site-config";
import type { PortfolioSlideItem } from "@/lib/portfolio-labels";

type WorkArchiveProps = {
  projects: readonly PortfolioSlideItem[];
  adjacent: readonly PortfolioItem[];
  heading: string;
};

export const WorkArchive = ({
  projects,
  adjacent,
  heading,
}: WorkArchiveProps): React.ReactElement => {
  const sliderRef = useRef<PortfolioSliderHandle>(null);

  const onNicheSelect = useCallback((niche: PortfolioNiche | "all"): void => {
    sliderRef.current?.goToNiche(niche);
  }, []);

  return (
    <>
      <WorkNicheNav onSelect={onNicheSelect} />

      <section
        id="all-concepts"
        className="inner-section inner-section--graphite work-archive-section"
      >
        <div className="inner-section-head">
          <p className="section-eyebrow">Full archive</p>
          <h2 className="inner-h2">{heading}</h2>
        </div>
        <p className="work-filter-note">
          Open any live demo to review layout, messaging, and conversion
          structure. Screenshots appear only where a real local capture exists.
          These are website concepts and demos — not fabricated client case
          studies.
        </p>

        <PortfolioSlider
          ref={sliderRef}
          projects={projects}
          ariaLabel="Automotive website concepts portfolio"
          listenToHash
          className="work-archive-slider"
        />

        <div className="work-archive-niches" aria-label="Niche pages">
          <Link className="text-link" href={SITE_ROUTES.carDetailingWebsiteDesign}>
            Detailing website design →
          </Link>
          <Link className="text-link" href={SITE_ROUTES.ppfWebsiteDesign}>
            PPF website design →
          </Link>
          <Link className="text-link" href={SITE_ROUTES.windowTintWebsiteDesign}>
            Window tint website design →
          </Link>
          <Link className="text-link" href={SITE_ROUTES.carWrapWebsiteDesign}>
            Car wrap website design →
          </Link>
        </div>
      </section>

      {adjacent.length > 0 ? (
        <section className="inner-section inner-section--muted">
          <div className="inner-section-head">
            <p className="section-eyebrow">Adjacent</p>
            <h2 className="inner-h2">Other concepts</h2>
          </div>
          <p className="work-filter-note">
            Included for completeness from the concept archive; not automotive
            studio niches.
          </p>
          <div className="portfolio-grid">
            {adjacent.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
};
