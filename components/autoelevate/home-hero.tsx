"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

import { SiteImage } from "@/components/autoelevate/site-image";
import { SITE_CONFIG, SITE_ROUTES } from "@/data/site-config";
import { SITE_IMAGES } from "@/data/site-images";

export const HomeHero = (): React.ReactElement => {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.classList.add("is-ready");
      return;
    }

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => root.classList.add("is-ready"),
      });

      timeline
        .fromTo(
          ".home-hero-media-frame",
          { opacity: 0, scale: 1.04 },
          { opacity: 1, scale: 1, duration: 1.35 },
          0,
        )
        .fromTo(
          ".home-hero-eyebrow",
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          0.18,
        )
        .fromTo(
          ".home-hero-title",
          { y: 28, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          0.28,
        )
        .fromTo(
          ".home-hero-lead",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.75 },
          0.42,
        )
        .fromTo(
          ".home-hero-actions",
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          0.52,
        );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home-hero"
      ref={rootRef}
      className="home-hero"
      aria-labelledby="home-hero-heading"
    >
      <div className="home-hero-copy">
        <p className="home-hero-eyebrow">Automotive Digital Studio</p>
        <h1 id="home-hero-heading" className="home-hero-title">
          We Build Digital Experiences for{" "}
          <em>Automotive Brands.</em>
        </h1>
        <p className="home-hero-lead">
          Premium websites, branding and digital growth for detailing, PPF, tint
          and wrap businesses.
        </p>
        <div className="home-hero-actions">
          <a
            className="cta-button home-hero-cta"
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Start a Project
          </a>
          <Link className="text-link home-hero-secondary" href="#work">
            Explore Our Work
          </Link>
        </div>
        <p className="home-hero-meta">
          <Link href={SITE_ROUTES.automotiveWebsiteDesign}>Website design</Link>
          <span aria-hidden="true">·</span>
          <Link href={SITE_ROUTES.automotiveBranding}>Branding</Link>
          <span aria-hidden="true">·</span>
          <Link href={SITE_ROUTES.automotiveSeo}>SEO</Link>
        </p>
      </div>

      <div className="home-hero-media">
        <div className="home-hero-media-frame">
          <SiteImage
            src={SITE_IMAGES.heroScenes[0]}
            alt="Black Porsche on an obsidian floor — luxury automotive photography"
            priority
            sizes="(max-width: 900px) 100vw, 58vw"
          />
        </div>
        <p className="home-hero-caption" aria-hidden="true">
          Automotive by focus
        </p>
      </div>
    </section>
  );
};
