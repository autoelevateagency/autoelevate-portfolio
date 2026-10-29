"use client";

import type { PortfolioNiche } from "@/data/portfolio";

type Filter = {
  label: string;
  niche: PortfolioNiche | "all";
  href: string;
};

const FILTERS: readonly Filter[] = [
  { label: "All concepts", niche: "all", href: "#all-concepts" },
  { label: "Detailing", niche: "detailing", href: "#detailing" },
  { label: "PPF", niche: "ppf", href: "#ppf" },
  { label: "Tint", niche: "tint", href: "#tint" },
  { label: "Wraps", niche: "wraps", href: "#wraps" },
] as const;

type WorkNicheNavProps = {
  onSelect: (niche: PortfolioNiche | "all") => void;
};

export const WorkNicheNav = ({
  onSelect,
}: WorkNicheNavProps): React.ReactElement => (
  <div className="inner-hero-actions related-links" aria-label="Jump to niche">
    {FILTERS.map((filter) => (
      <a
        key={filter.href}
        href={filter.href}
        onClick={(event) => {
          event.preventDefault();
          window.history.replaceState(null, "", filter.href);
          onSelect(filter.niche);
          document.getElementById("all-concepts")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }}
      >
        {filter.label}
      </a>
    ))}
  </div>
);
