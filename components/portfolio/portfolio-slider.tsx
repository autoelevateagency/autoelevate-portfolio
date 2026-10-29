"use client";

import {
  useCallback,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  useState,
  forwardRef,
} from "react";
import Link from "next/link";

import { SiteImage } from "@/components/autoelevate/site-image";
import type { PortfolioNiche } from "@/data/portfolio";
import type { PortfolioSlideItem } from "@/lib/portfolio-labels";

const formatSlide = (n: number): string => String(n).padStart(2, "0");

export type PortfolioSliderHandle = {
  goToIndex: (index: number) => void;
  goToNiche: (niche: PortfolioNiche | "all") => void;
  getIndex: () => number;
};

type PortfolioSliderProps = {
  projects: readonly PortfolioSlideItem[];
  ariaLabel: string;
  className?: string;
  footerHref?: string;
  footerLabel?: string;
  listenToHash?: boolean;
  /** When true, prev/next wrap around the ends. */
  loop?: boolean;
};

const SlidePreview = ({
  project,
  priority,
}: {
  project: PortfolioSlideItem;
  priority?: boolean;
}): React.ReactElement => {
  const hasShot = Boolean(project.screenshot && project.screenshotAlt);

  return (
    <Link
      className="work-stage"
      href={project.href}
      aria-label={`View concept page: ${project.name}`}
    >
      <div className="work-chrome">
        <span className="work-chrome-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="work-chrome-url">{project.domain}</span>
      </div>
      <div className={`work-shot${hasShot ? "" : " work-shot--live"}`}>
        {hasShot ? (
          <SiteImage
            src={project.screenshot!}
            alt={project.screenshotAlt!}
            sizes="(max-width: 900px) 88vw, 68vw"
            objectFit="cover"
            className="object-cover"
            priority={priority}
          />
        ) : (
          <div className="live-concept-panel">
            <p className="live-concept-kicker">{project.nicheLabel}</p>
            <p className="live-concept-domain">{project.name}</p>
            {project.location ? (
              <p className="live-concept-location">{project.location}</p>
            ) : null}
            <span className="live-concept-cta">View concept page →</span>
          </div>
        )}
      </div>
    </Link>
  );
};

export const PortfolioSlider = forwardRef<
  PortfolioSliderHandle,
  PortfolioSliderProps
>(function PortfolioSlider(
  {
    projects,
    ariaLabel,
    className = "",
    footerHref,
    footerLabel,
    listenToHash = false,
    loop = false,
  },
  ref,
): React.ReactElement {
  const total = projects.length;
  const [index, setIndex] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<Array<HTMLElement | null>>([]);
  const labelId = useId();
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  const goTo = useCallback(
    (next: number): void => {
      if (total === 0) return;
      const target = loop
        ? ((next % total) + total) % total
        : Math.min(Math.max(next, 0), total - 1);
      const slide = slideRefs.current[target];
      const behavior = reducedMotionRef.current ? "auto" : "smooth";
      slide?.scrollIntoView({
        behavior,
        inline: "start",
        block: "nearest",
      });
      setIndex(target);
    },
    [loop, total],
  );

  const goToNiche = useCallback(
    (niche: PortfolioNiche | "all"): void => {
      if (niche === "all") {
        goTo(0);
        return;
      }
      const target = projects.findIndex((project) =>
        project.niches.includes(niche),
      );
      if (target >= 0) goTo(target);
    },
    [goTo, projects],
  );

  useImperativeHandle(
    ref,
    () => ({
      goToIndex: goTo,
      goToNiche,
      getIndex: () => index,
    }),
    [goTo, goToNiche, index],
  );

  const goPrev = useCallback((): void => goTo(index - 1), [goTo, index]);
  const goNext = useCallback((): void => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    let frame = 0;
    const syncIndex = (): void => {
      frame = 0;
      const slides = slideRefs.current.filter(Boolean) as HTMLElement[];
      if (slides.length === 0) return;

      const viewportLeft = viewport.getBoundingClientRect().left;
      let closest = 0;
      let closestDist = Number.POSITIVE_INFINITY;

      slides.forEach((slide, i) => {
        const dist = Math.abs(
          slide.getBoundingClientRect().left - viewportLeft,
        );
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });

      setIndex((current) => (current === closest ? current : closest));
    };

    const onScroll = (): void => {
      if (frame) return;
      frame = window.requestAnimationFrame(syncIndex);
    };

    viewport.addEventListener("scroll", onScroll, { passive: true });
    syncIndex();

    return () => {
      viewport.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [projects]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent): void => {
      const root = viewportRef.current;
      if (!root) return;
      if (
        !root.contains(document.activeElement) &&
        document.activeElement !== root
      ) {
        return;
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        goNext();
      } else if (event.key === "Home") {
        event.preventDefault();
        goTo(0);
      } else if (event.key === "End") {
        event.preventDefault();
        goTo(total - 1);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [goNext, goPrev, goTo, total]);

  useEffect(() => {
    if (!listenToHash) return;

    const applyHash = (): void => {
      const hash = window.location.hash.replace("#", "");
      if (!hash || hash === "all-concepts") {
        goTo(0);
        return;
      }
      const nicheMap: Record<string, PortfolioNiche> = {
        detailing: "detailing",
        ppf: "ppf",
        tint: "tint",
        wraps: "wraps",
      };
      const niche = nicheMap[hash];
      if (niche) goToNiche(niche);
    };

    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, [goTo, goToNiche, listenToHash]);

  // Ensure final slide can fully enter view — pad end of track via CSS.
  const progress = total > 0 ? ((index + 1) / total) * 100 : 0;
  const atStart = !loop && index <= 0;
  const atEnd = !loop && index >= total - 1;

  // First occurrence of each niche gets an id for progressive enhancement.
  const nicheAnchorIds = new Map<string, string>();
  for (const niche of ["detailing", "ppf", "tint", "wraps"] as const) {
    const first = projects.find((project) => project.niches.includes(niche));
    if (first) nicheAnchorIds.set(first.id, niche);
  }

  return (
    <div className={`work-slider-shell${className ? ` ${className}` : ""}`}>
      <div
        ref={viewportRef}
        className="work-slider"
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-labelledby={labelId}
      >
        <p id={labelId} className="sr-only">
          {ariaLabel}. Use arrow keys or swipe to browse.
        </p>
        {projects.map((project, slideIndex) => {
          const isActive = slideIndex === index;
          const nicheId = nicheAnchorIds.get(project.id);

          return (
            <article
              key={project.id}
              id={nicheId}
              ref={(node) => {
                slideRefs.current[slideIndex] = node;
              }}
              className={`work-slide${isActive ? " is-active" : ""}`}
              aria-label={`${slideIndex + 1} of ${total}: ${project.name}`}
              data-niches={project.niches.join(",")}
            >
              <SlidePreview project={project} priority={slideIndex === 0} />
              <div className="work-slide-meta">
                <div className="work-slide-copy">
                  <p className="work-slide-index" aria-hidden="true">
                    {formatSlide(slideIndex + 1)}
                    <span> / {formatSlide(total)}</span>
                  </p>
                  <p className="work-slide-label">{project.nicheLabel}</p>
                  <p className="work-slide-concept">{project.label}</p>
                  {project.location ? (
                    <p className="work-slide-location">{project.location}</p>
                  ) : null}
                  <h3 className="work-name">{project.name}</h3>
                </div>
                <Link
                  className="work-preview"
                  href={project.href}
                  tabIndex={isActive ? 0 : -1}
                >
                  View Concept
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      <div className="work-slider-footer">
        <div
          className="work-slider-progress"
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={total}
          aria-valuenow={index + 1}
          aria-label="Portfolio progress"
        >
          <span
            className="work-slider-progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="work-slider-count" aria-live="polite">
          <span className="sr-only">
            Project {index + 1} of {total}
          </span>
          <span aria-hidden="true">
            {formatSlide(index + 1)} — {formatSlide(total)}
          </span>
        </p>
        <div className="work-slider-nav">
          <button
            type="button"
            className="work-slider-btn"
            onClick={goPrev}
            aria-label="Previous project"
            disabled={atStart}
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            className="work-slider-btn"
            onClick={goNext}
            aria-label="Next project"
            disabled={atEnd}
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
        {footerHref && footerLabel ? (
          <Link className="work-slider-link" href={footerHref}>
            {footerLabel}
          </Link>
        ) : (
          <span className="work-slider-link work-slider-link--static" aria-hidden="true" />
        )}
      </div>
    </div>
  );
});
