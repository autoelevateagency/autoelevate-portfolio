import { CONCEPT_DETAILS, type ConceptDetail } from "@/data/concept-details";
import { conceptScreenshotPath } from "@/data/site-images";
import { SITE_ROUTES, workConceptPath } from "@/data/site-config";

const shot = (slug: string, alt: string) =>
  ({
    screenshot: conceptScreenshotPath(slug),
    screenshotAlt: alt,
  }) as const;

export type PortfolioNiche =
  | "detailing"
  | "ppf"
  | "tint"
  | "wraps"
  | "multi"
  | "other";

export type PortfolioItem = {
  id: string;
  name: string;
  description: string;
  previewUrl: string;
  domain: string;
  niches: readonly PortfolioNiche[];
  /** Verified city/region from concept brief only — never invent. */
  location?: string;
  /** Local screenshot path when a real capture exists — never invent. */
  screenshot?: string;
  screenshotAlt?: string;
  featuredOnHome?: boolean;
  /** Agency own site — excluded from client concept grids. */
  isAgencySite?: boolean;
  label: "Website concept" | "Live demo";
};

export const PORTFOLIO: readonly PortfolioItem[] = [
  {
    id: "prestige-auto-salon",
    name: "Prestige Auto Salon",
    description:
      "Luxury protection-studio concept for a certified XPEL installer — built around paint protection, ceramic, and appointment-led enquiry.",
    previewUrl: "https://prestige-auto-salon.vercel.app/",
    domain: "prestige-auto-salon.vercel.app",
    niches: ["ppf", "detailing", "multi"],
    featuredOnHome: true,
    label: "Website concept",
    ...shot(
      "prestige-auto-salon",
      "Prestige Auto Salon homepage hero — luxury protection studio layout with vehicle photography and precision protection headline",
    ),
  },
  {
    id: "mz-extraordinary-details",
    name: "MZ Extraordinary Details",
    description:
      "Booking-focused luxury detailing concept for DFW — clean service hierarchy, studio photography, and enquiry-first navigation.",
    previewUrl: "https://mz-extraordinary-details.vercel.app/",
    domain: "mz-extraordinary-details.vercel.app",
    niches: ["detailing"],
    location: "DFW",
    featuredOnHome: true,
    label: "Website concept",
    ...shot(
      "mz-extraordinary-details",
      "MZ Extraordinary Details homepage hero — DFW luxury detailing studio photography and booking-focused layout",
    ),
  },
  {
    id: "831-ricardo-detailing",
    name: "831 Ricardo Detailing",
    description:
      "Bold black-and-white detailing concept that leads with craft, finish quality, and a confident studio presence.",
    previewUrl: "https://831-ricardo-detailing.vercel.app/",
    domain: "831-ricardo-detailing.vercel.app",
    niches: ["detailing"],
    featuredOnHome: true,
    label: "Website concept",
    ...shot(
      "831-ricardo-detailing",
      "831 Ricardo Detailing homepage hero — bold black-and-white automotive detailing typography and photography",
    ),
  },
  {
    id: "duarte-mobile-detailing",
    name: "Duarte Mobile Detailing",
    description:
      "Mobile detailing concept centered on precision service wherever the client parks — clear packages and local enquiry paths.",
    previewUrl: "https://duarte-mobile-detailing.vercel.app/",
    domain: "duarte-mobile-detailing.vercel.app",
    niches: ["detailing"],
    label: "Website concept",
    ...shot("duarte-mobile-detailing",
      "Duarte Mobile Detailing homepage hero — mobile detailing packages and enquiry-led layout",
    ),
  },
  {
    id: "refine-auto-detailing",
    name: "Refine Auto Detailing",
    description:
      "San Antonio detailing concept with refined service storytelling and a conversion-minded layout for local bookings.",
    previewUrl: "https://refine-auto-detailing-eight.vercel.app/",
    domain: "refine-auto-detailing-eight.vercel.app",
    niches: ["detailing"],
    location: "San Antonio",
    label: "Website concept",
    ...shot("refine-auto-detailing",
      "Refine Auto Detailing homepage hero — San Antonio detailing service storytelling and booking layout",
    ),
  },
  {
    id: "safeguard-window-tinting",
    name: "Safeguard Window Tinting",
    description:
      "Window tint studio concept built around film options, installation standards, project galleries, and quote-led CTAs.",
    previewUrl: "https://safeguard-window-tinting.vercel.app/",
    domain: "safeguard-window-tinting.vercel.app",
    niches: ["tint"],
    label: "Website concept",
    ...shot("safeguard-window-tinting",
      "Safeguard Window Tinting homepage hero — film-first tint studio layout with quote-led CTAs",
    ),
  },
  {
    id: "all-star-auto-detailing",
    name: "All-Star Auto Detailing",
    description:
      "Houston detailing concept with a confident brand voice, service clarity, and mobile-ready enquiry flows.",
    previewUrl: "https://all-star-auto-detailing.vercel.app/",
    domain: "all-star-auto-detailing.vercel.app",
    niches: ["detailing"],
    location: "Houston",
    label: "Website concept",
    ...shot("all-star-auto-detailing",
      "All-Star Auto Detailing homepage hero — Houston detailing brand presence and service hierarchy",
    ),
  },
  {
    id: "trujillos-premium-detailing",
    name: "Trujillo's Premium Detailing",
    description:
      "Milwaukee mobile detailing concept focused on premium positioning and straightforward booking intent.",
    previewUrl: "https://trujillos-premium-detailing-beryl.vercel.app/",
    domain: "trujillos-premium-detailing-beryl.vercel.app",
    niches: ["detailing"],
    location: "Milwaukee",
    label: "Website concept",
    ...shot("trujillos-premium-detailing",
      "Trujillo's Premium Detailing homepage hero — Milwaukee mobile detailing premium positioning",
    ),
  },
  {
    id: "degreef-car-detailing",
    name: "Degreef Car Detailing",
    description:
      "Mobile car detailing concept with a sharp visual system and clear paths from services to contact.",
    previewUrl: "https://degreef-car-detailing.vercel.app/",
    domain: "degreef-car-detailing.vercel.app",
    niches: ["detailing"],
    label: "Website concept",
    ...shot("degreef-car-detailing",
      "Degreef Car Detailing homepage hero — sharp mobile detailing visual system and service paths",
    ),
  },
  {
    id: "carotic",
    name: "Carotic",
    description:
      "Houston wraps and custom-build concept — color-change wraps, lighting, tint, and a horizontal archive of shop work.",
    previewUrl: "https://carotic.vercel.app/",
    domain: "carotic.vercel.app",
    niches: ["wraps", "tint", "multi"],
    location: "Houston",
    label: "Website concept",
    ...shot("carotic",
      "Carotic homepage hero — Houston wraps and custom-build shop archive layout",
    ),
  },
  {
    id: "yaad-boyz-detail",
    name: "Yaad Boyz Detail",
    description:
      "Chesapeake luxury detailing concept with an owner-operated brand story and package-led structure.",
    previewUrl: "https://yaad-boyz-detail.vercel.app/",
    domain: "yaad-boyz-detail.vercel.app",
    niches: ["detailing"],
    location: "Chesapeake",
    label: "Website concept",
    ...shot("yaad-boyz-detail",
      "Yaad Boyz Detail homepage hero — Chesapeake luxury detailing brand story and packages",
    ),
  },
  {
    id: "gold-shine",
    name: "Gold Shine",
    description:
      "Dubai protection studio concept spanning PPF, ceramic, polishing, detailing, tint, and decals.",
    previewUrl: "https://goldshine.vercel.app/",
    domain: "goldshine.vercel.app",
    niches: ["ppf", "detailing", "tint", "multi"],
    location: "Dubai",
    label: "Website concept",
    ...shot("gold-shine",
      "Gold Shine homepage hero — Dubai multi-service protection studio layout for PPF, ceramic, and tint",
    ),
  },
  {
    id: "empire-tint-lab",
    name: "Empire Tint Lab",
    description:
      "Ceres, CA multi-service concept for tint, PPF, vinyl wraps, graphics, and detailing — film-first brand presence.",
    previewUrl: "https://empire-tint-lab.vercel.app/",
    domain: "empire-tint-lab.vercel.app",
    niches: ["tint", "ppf", "wraps", "detailing", "multi"],
    location: "Ceres, CA",
    label: "Website concept",
    ...shot("empire-tint-lab",
      "Empire Tint Lab homepage hero — Ceres multi-service tint, PPF, and wraps film-first layout",
    ),
  },
  {
    id: "luxe-auto-detailing",
    name: "Luxe Auto Detailing",
    description:
      "Interior and exterior detailing concept supporting both mobile and drop-off service models.",
    previewUrl: "https://luxe-auto-detailing.vercel.app/",
    domain: "luxe-auto-detailing.vercel.app",
    niches: ["detailing"],
    label: "Website concept",
    ...shot("luxe-auto-detailing",
      "Luxe Auto Detailing homepage hero — interior and exterior detailing with mobile and drop-off framing",
    ),
  },
  {
    id: "pcs-auto-detailing",
    name: "PCS Auto Detailing",
    description:
      "Precision-focused detailing concept with clear service storytelling and enquiry-oriented CTAs.",
    previewUrl: "https://pcs-auto-detailing.vercel.app/",
    domain: "pcs-auto-detailing.vercel.app",
    niches: ["detailing"],
    label: "Website concept",
    ...shot("pcs-auto-detailing",
      "PCS Auto Detailing homepage hero — precision detailing studio with luxury interior photography",
    ),
  },
  {
    id: "yb-detailing",
    name: "YB Detailing",
    description:
      "Automotive detailing concept built around precision positioning and a clean digital service menu.",
    previewUrl: "https://yb-detailing.vercel.app/",
    domain: "yb-detailing.vercel.app",
    niches: ["detailing"],
    label: "Website concept",
    ...shot("yb-detailing",
      "YB Detailing homepage hero — clean precision detailing service menu layout",
    ),
  },
  {
    id: "maldos-mobile-detailing",
    name: "Maldos Mobile Detailing",
    description:
      "Lake County, FL mobile detailing concept with local service emphasis and straightforward contact paths.",
    previewUrl: "https://maldosmobiledetailing.vercel.app/",
    domain: "maldosmobiledetailing.vercel.app",
    niches: ["detailing"],
    location: "Lake County, FL",
    label: "Website concept",
    ...shot("maldos-mobile-detailing",
      "Maldos Mobile Detailing homepage hero — Lake County FL mobile detailing local service layout",
    ),
  },
  {
    id: "schorr-shine-mobile-detailing",
    name: "Schorr Shine Mobile Detailing",
    description:
      "Premium mobile detailing concept with a polished brand tone and conversion-ready layout.",
    previewUrl: "https://schorr-shine-mobile-detailing.vercel.app/",
    domain: "schorr-shine-mobile-detailing.vercel.app",
    niches: ["detailing"],
    label: "Website concept",
    ...shot("schorr-shine-mobile-detailing",
      "Schorr Shine Mobile Detailing homepage hero — premium mobile detailing conversion-ready layout",
    ),
  },
  {
    id: "detail-zone",
    name: "Detail Zone",
    description:
      "Hertfordshire mobile detailing concept with a premium UK studio voice and clear service presentation.",
    previewUrl: "https://detail-zone-virid.vercel.app/",
    domain: "detail-zone-virid.vercel.app",
    niches: ["detailing"],
    location: "Hertfordshire",
    label: "Website concept",
    ...shot("detail-zone",
      "Detail Zone homepage hero — Hertfordshire mobile detailing premium UK studio layout",
    ),
  },
  {
    id: "luciano-auto-boutique",
    name: "Luciano Auto Boutique",
    description:
      "Las Vegas boutique concept for paint correction, ceramic coating, and detailing — editorial and high-end.",
    previewUrl: "https://luciano-auto-boutique.vercel.app/",
    domain: "luciano-auto-boutique.vercel.app",
    niches: ["detailing"],
    location: "Las Vegas",
    label: "Website concept",
    ...shot("luciano-auto-boutique",
      "Luciano Auto Boutique homepage hero — Las Vegas paint correction and ceramic boutique layout",
    ),
  },
  {
    id: "nbg-detailing",
    name: "NBG Detailing",
    description:
      "DFW mobile detailing concept focused on visible quality, local reach, and enquiry conversion.",
    previewUrl: "https://nbg-detailing.vercel.app/",
    domain: "nbg-detailing.vercel.app",
    niches: ["detailing"],
    location: "DFW",
    label: "Website concept",
    ...shot("nbg-detailing",
      "NBG Detailing homepage hero — DFW mobile detailing quality-led enquiry layout",
    ),
  },
  {
    id: "garcia-epic-detailing",
    name: "Garcia Epic Detailing",
    description:
      "Miami-Dade & Broward mobile detailing concept with premium positioning and service-area clarity.",
    previewUrl: "https://garcia-epic-detailing.vercel.app/",
    domain: "garcia-epic-detailing.vercel.app",
    niches: ["detailing"],
    location: "Miami-Dade & Broward",
    label: "Website concept",
    ...shot("garcia-epic-detailing",
      "Garcia Epic Detailing homepage hero — Miami-Dade and Broward mobile detailing regional layout",
    ),
  },
  {
    id: "refresh-detailing",
    name: "Refresh Detailing",
    description:
      "Premium mobile car detailing concept for Liverpool & Sydney — interior, exterior, and ceramic paint protection.",
    previewUrl: "https://refresh-detailing.vercel.app/",
    domain: "refresh-detailing.vercel.app",
    niches: ["detailing"],
    location: "Liverpool & Sydney",
    label: "Website concept",
    ...shot("refresh-detailing",
      "Refresh Detailing homepage hero — Liverpool and Sydney mobile detailing dual-market layout",
    ),
  },
  {
    id: "hogans-auto-detailing",
    name: "Hogan's Auto Detailing",
    description:
      "North Idaho mobile detailing concept based in Hauser — tiered packages and on-site service clarity.",
    previewUrl: "https://hogans-detailing.vercel.app/",
    domain: "hogans-detailing.vercel.app",
    niches: ["detailing"],
    location: "Hauser, Idaho",
    label: "Website concept",
    ...shot("hogans-auto-detailing",
      "Hogan's Auto Detailing homepage hero — North Idaho mobile detailing with luxury vehicle collage",
    ),
  },
  {
    id: "the-detailing-studio",
    name: "The Detailing Studio",
    description:
      "Greater Toronto Area mobile detailing concept with interior, exterior, and ceramic-grade protection framing.",
    previewUrl: "https://the-detailing-studio.vercel.app/",
    domain: "the-detailing-studio.vercel.app",
    niches: ["detailing"],
    location: "Greater Toronto Area",
    label: "Website concept",
    ...shot("the-detailing-studio",
      "The Detailing Studio homepage hero — Greater Toronto Area mobile detailing precision layout",
    ),
  },
  {
    id: "falkirk-car-care",
    name: "Falkirk Car Care",
    description:
      "Falkirk, Scotland detailing concept spanning ceramic coatings, machine polishing, valeting, and full reconditioning.",
    previewUrl: "https://falkirk-car-care.vercel.app/",
    domain: "falkirk-car-care.vercel.app",
    niches: ["detailing"],
    location: "Falkirk, Scotland",
    label: "Website concept",
    ...shot("falkirk-car-care",
      "Falkirk Car Care homepage hero — Scotland detailing studio with ceramic and correction messaging",
    ),
  },
  {
    id: "jrs-detailing",
    name: "JRS Detailing",
    description:
      "Leesburg, VA student-owned mobile detailing concept with clear packages and nearby-area service framing.",
    previewUrl: "https://jrs-detailing.vercel.app/",
    domain: "jrs-detailing.vercel.app",
    niches: ["detailing"],
    location: "Leesburg, VA",
    label: "Website concept",
    ...shot("jrs-detailing",
      "JRS Detailing homepage hero — Leesburg VA student-owned mobile detailing package layout",
    ),
  },
  {
    id: "detailed-by-chery",
    name: "Detailed by Chery",
    description:
      "Port Saint Lucie interior and exterior detailing concept with paint correction and package-led structure.",
    previewUrl: "https://detailed-by-cherry.vercel.app/",
    domain: "detailed-by-cherry.vercel.app",
    niches: ["detailing"],
    location: "Port Saint Lucie, Florida",
    label: "Website concept",
    ...shot("detailed-by-chery",
      "Detailed by Chery homepage hero — Port Saint Lucie interior and exterior detailing studio layout",
    ),
  },
  {
    id: "tandem-car-hub",
    name: "Tandem Car Hub",
    description:
      "Winnipeg multi-service studio concept for ceramic, PPF, window tint, vinyl wraps, and premium detailing.",
    previewUrl: "https://tandem-car-hub.vercel.app/",
    domain: "tandem-car-hub.vercel.app",
    niches: ["detailing", "ppf", "tint", "wraps", "multi"],
    location: "Winnipeg",
    label: "Website concept",
    ...shot("tandem-car-hub",
      "Tandem Car Hub homepage hero — Winnipeg multi-service ceramic, PPF, tint, wraps, and detailing layout",
    ),
  },
  {
    id: "autoelevate-portfolio",
    name: "AutoElevate Portfolio",
    description:
      "AutoElevate agency portfolio presence — excluded from client concept grids.",
    previewUrl: "https://autoelevate-portfolio.vercel.app/",
    domain: "autoelevate-portfolio.vercel.app",
    niches: ["other"],
    isAgencySite: true,
    label: "Live demo",
    ...shot("autoelevate-portfolio",
      "AutoElevate Portfolio homepage hero — agency portfolio brand presence and selected work layout",
    ),
  },
] as const;

/**
 * Exact 31-name master inventory. Agency site is listed but excluded from
 * client sliders via `isAgencySite`. Gaps are inventory items without a
 * recoverable AutoElevate demo URL — do not invent previews.
 */
export const MASTER_PORTFOLIO_INVENTORY = [
  "831 Ricardo Detailing",
  "Prestige Auto Salon",
  "Refresh Detailing",
  "Hogan's Auto Detailing",
  "The Detailing Studio",
  "Falkirk Car Care",
  "MZ Extraordinary Details",
  "Wazny Works",
  "JRS Detailing",
  "Detailed by Chery",
  "Tandem Car Hub",
  "Duarte Mobile Detailing",
  "Refine Auto Detailing",
  "Safeguard Window Tinting",
  "All-Star Auto Detailing",
  "Trujillo's Premium Detailing",
  "Degreef Car Detailing",
  "Carotic",
  "AutoElevate Portfolio",
  "Yaad Boyz Detail",
  "Gold Shine",
  "Empire Tint Lab",
  "Luxe Auto Detailing",
  "PCS Auto Detailing",
  "YB Detailing",
  "Maldos Mobile Detailing",
  "Schorr Shine Mobile Detailing",
  "Detail Zone",
  "Luciano Auto Boutique",
  "NBG Detailing",
  "Garcia Epic Detailing",
] as const;

/** Inventory items audited but not wired — missing recoverable demo URL. */
export const PORTFOLIO_INVENTORY_GAPS = [
  {
    name: "Wazny Works",
    intendedSlug: "wazny-works",
    missing: [
      "previewUrl",
      "detailPage",
      "serviceSliders",
      "screenshot",
    ] as const,
    notes:
      "No AutoElevate Vercel demo URL recovered after exhaustive probe. Commercial site waznyworks.com verifies Bartlett, IL and services (ceramic coating, window tinting, paint correction, detailing) — not used as a substitute demo URL. Hero screenshot omitted until a recoverable demo exists.",
  },
] as const;

export const CLIENT_PORTFOLIO = PORTFOLIO.filter((item) => !item.isAgencySite);

/** Automotive studio concepts — excludes agency / non-auto entries. */
export const AUTOMOTIVE_PORTFOLIO = CLIENT_PORTFOLIO.filter(
  (item) => item.niches[0] !== "other",
);

export const HOME_FEATURED_WORK = CLIENT_PORTFOLIO.filter(
  (item) => item.featuredOnHome,
);

export const getPortfolioByNiche = (
  niche: PortfolioNiche,
): PortfolioItem[] =>
  CLIENT_PORTFOLIO.filter((item) => item.niches.includes(niche));

export const NICHE_RELATED_ROUTES: Record<
  Exclude<PortfolioNiche, "other" | "multi">,
  string
> = {
  detailing: SITE_ROUTES.carDetailingWebsiteDesign,
  ppf: SITE_ROUTES.ppfWebsiteDesign,
  tint: SITE_ROUTES.windowTintWebsiteDesign,
  wraps: SITE_ROUTES.carWrapWebsiteDesign,
};

export type AutomotiveConcept = PortfolioItem & {
  slug: string;
  href: string;
  detail: ConceptDetail;
};

export const getConceptSlugs = (): string[] =>
  AUTOMOTIVE_PORTFOLIO.map((item) => item.id);

export const getAutomotiveConcept = (
  slug: string,
): AutomotiveConcept | undefined => {
  const item = AUTOMOTIVE_PORTFOLIO.find((entry) => entry.id === slug);
  if (!item) return undefined;
  const detail = CONCEPT_DETAILS[item.id];
  if (!detail) return undefined;
  return {
    ...item,
    slug: item.id,
    href: workConceptPath(item.id),
    detail,
  };
};

export const getAutomotiveConcepts = (): AutomotiveConcept[] =>
  AUTOMOTIVE_PORTFOLIO.map((item) => {
    const concept = getAutomotiveConcept(item.id);
    if (!concept) {
      throw new Error(`Missing concept detail for ${item.id}`);
    }
    return concept;
  });

export const primaryServiceHref = (item: PortfolioItem): string => {
  const niche = item.niches.find(
    (entry): entry is Exclude<PortfolioNiche, "other" | "multi"> =>
      entry !== "other" && entry !== "multi",
  );
  if (!niche) return SITE_ROUTES.automotiveWebsiteDesign;
  return NICHE_RELATED_ROUTES[niche];
};
