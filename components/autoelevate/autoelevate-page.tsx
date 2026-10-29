"use client";

import { useEffect, useRef } from "react";

import { AmbientLayer } from "@/components/autoelevate/ambient-layer";
import { BrandMarquee } from "@/components/autoelevate/brand-marquee";
import { CtaSection } from "@/components/autoelevate/cta-section";
import { HomeHero } from "@/components/autoelevate/home-hero";
import { ScrollProgress } from "@/components/autoelevate/scroll-progress";
import { ServicesSection } from "@/components/autoelevate/services-section";
import { TestimonialsSection } from "@/components/autoelevate/testimonials-section";
import { WorkSection } from "@/components/autoelevate/work-section";
import { WhyAutoElevateSection } from "@/components/autoelevate/why-autoelevate-section";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNav } from "@/components/layout/site-nav";
import { initPremiumMotion } from "@/lib/premium-motion";

const AutoElevatePage = (): React.ReactElement => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const applyCursorMode = (): void => {
      document.body.classList.toggle("has-custom-cursor", finePointer.matches);
    };
    applyCursorMode();
    finePointer.addEventListener("change", applyCursorMode);

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let rafId = 0;

    const onMouseMove = (e: MouseEvent): void => {
      if (!finePointer.matches) return;
      mx = e.clientX;
      my = e.clientY;
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${mx}px`;
        cursorDotRef.current.style.top = `${my}px`;
      }
    };

    const tick = (): void => {
      rx += (mx - rx) * 0.11;
      ry += (my - ry) * 0.11;
      if (cursorRingRef.current) {
        cursorRingRef.current.style.left = `${rx}px`;
        cursorRingRef.current.style.top = `${ry}px`;
      }
      rafId = requestAnimationFrame(tick);
    };

    const onMouseEnterInteractive = (): void => {
      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = "translate(-50%, -50%) scale(2.2)";
      }
    };

    const onMouseLeaveInteractive = (): void => {
      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = "translate(-50%, -50%) scale(1)";
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    if (finePointer.matches) {
      rafId = requestAnimationFrame(tick);
    }

    const interactiveEls = document.querySelectorAll("a, button, .work-stage");
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterInteractive);
      el.addEventListener("mouseleave", onMouseLeaveInteractive);
    });

    const cleanupMotion = initPremiumMotion({});

    return () => {
      cleanupMotion();
      finePointer.removeEventListener("change", applyCursorMode);
      document.body.classList.remove("has-custom-cursor");
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMouseMove);
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      <AmbientLayer />
      <ScrollProgress />

      <div className="cursor-dot" ref={cursorDotRef} />
      <div className="cursor-ring" ref={cursorRingRef} />

      <SiteNav variant="home" />

      <main id="main-content">
        <HomeHero />
        <BrandMarquee />
        <ServicesSection />
        <WorkSection />
        <TestimonialsSection />
        <WhyAutoElevateSection />
        <CtaSection />
      </main>

      <SiteFooter variant="home" />
    </>
  );
};

export default AutoElevatePage;
