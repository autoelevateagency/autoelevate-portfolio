import type { PortfolioItem, PortfolioNiche } from "@/data/portfolio";
import { workConceptPath } from "@/data/site-config";

const NICHE_LABELS: Record<Exclude<PortfolioNiche, "other" | "multi">, string> =
  {
    detailing: "Detailing",
    ppf: "PPF",
    tint: "Window Tint",
    wraps: "Car Wraps",
  };

export const primaryNicheLabel = (item: PortfolioItem): string => {
  const labels = item.niches
    .filter(
      (niche): niche is Exclude<PortfolioNiche, "other" | "multi"> =>
        niche !== "other" && niche !== "multi",
    )
    .map((niche) => NICHE_LABELS[niche]);

  if (labels.length === 0) return "Automotive";
  return [...new Set(labels)].slice(0, 2).join(" · ");
};

export type PortfolioSlideItem = {
  id: string;
  slug: string;
  href: string;
  name: string;
  description: string;
  screenshot?: string;
  screenshotAlt?: string;
  previewUrl: string;
  domain: string;
  nicheLabel: string;
  niches: readonly PortfolioNiche[];
  location?: string;
  label: PortfolioItem["label"];
};

export const toPortfolioSlide = (item: PortfolioItem): PortfolioSlideItem => ({
  id: item.id,
  slug: item.id,
  href: workConceptPath(item.id),
  name: item.name,
  description: item.description,
  screenshot: item.screenshot,
  screenshotAlt: item.screenshotAlt,
  previewUrl: item.previewUrl,
  domain: item.domain,
  nicheLabel: primaryNicheLabel(item),
  niches: item.niches,
  location: item.location,
  label: item.label,
});
