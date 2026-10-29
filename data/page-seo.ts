import { SITE_ROUTES } from "@/data/site-config";

export type PageSeo = {
  path: string;
  title: string;
  description: string;
  primaryKeyword: string;
  h1: string;
};

export const PAGE_SEO = {
  home: {
    path: SITE_ROUTES.home,
    title:
      "AutoElevate | Luxury Automotive Digital Agency — Web Design, SEO & Growth",
    description:
      "AutoElevate builds high-converting websites, brand systems, and growth funnels for luxury auto detailing, ceramic coating, PPF, and tint studios worldwide.",
    primaryKeyword: "automotive digital agency",
    h1: "Luxury Automotive Digital Agency",
  },
  work: {
    path: SITE_ROUTES.work,
    title: "Automotive Website Concepts & Portfolio",
    description:
      "Browse AutoElevate website concepts for car detailing, PPF, window tint, wraps, and multi-service automotive studios. Live demos and concept showcases.",
    primaryKeyword: "automotive website portfolio",
    h1: "Automotive website concepts",
  },
  about: {
    path: SITE_ROUTES.about,
    title: "About AutoElevate | Automotive Digital Studio",
    description:
      "AutoElevate is a specialist digital studio for automotive businesses — websites, branding, SEO, and growth for detailing, PPF, tint, and wrap studios. Meet the founders.",
    primaryKeyword: "automotive digital studio",
    h1: "Digital partners for automotive businesses",
  },
  automotiveWebsiteDesign: {
    path: SITE_ROUTES.automotiveWebsiteDesign,
    title: "Automotive Website Design Agency",
    description:
      "Specialist automotive website design for detailing, PPF, tint, and wrap studios. Custom, conversion-focused sites built for premium automotive brands.",
    primaryKeyword: "automotive website design",
    h1: "Automotive website design",
  },
  carDetailingWebsiteDesign: {
    path: SITE_ROUTES.carDetailingWebsiteDesign,
    title: "Car Detailing Website Design",
    description:
      "Car detailing website design that showcases packages, transformations, reviews, and booking enquiries. Built for mobile and shop-based detailing studios.",
    primaryKeyword: "car detailing website design",
    h1: "Car detailing website design",
  },
  ppfWebsiteDesign: {
    path: SITE_ROUTES.ppfWebsiteDesign,
    title: "PPF Website Design for Installers",
    description:
      "Paint protection film website design for PPF installers — coverage options, finish comparisons, project galleries, and quote-ready enquiry paths.",
    primaryKeyword: "PPF website design",
    h1: "PPF website design",
  },
  windowTintWebsiteDesign: {
    path: SITE_ROUTES.windowTintWebsiteDesign,
    title: "Window Tint Website Design",
    description:
      "Window tint shop website design covering film packages, vehicle galleries, service explanations, quote requests, and appointment enquiries.",
    primaryKeyword: "window tint website design",
    h1: "Window tint website design",
  },
  carWrapWebsiteDesign: {
    path: SITE_ROUTES.carWrapWebsiteDesign,
    title: "Car Wrap Website Design",
    description:
      "Vehicle wrap website design for vinyl wrap studios — finish galleries, color transformations, commercial wraps, and consultation enquiries.",
    primaryKeyword: "car wrap website design",
    h1: "Car wrap website design",
  },
  automotiveSeo: {
    path: SITE_ROUTES.automotiveSeo,
    title: "Automotive SEO Services",
    description:
      "Automotive SEO for detailing, PPF, tint, and wrap businesses — technical SEO, service pages, local search, and Google Business Profile optimization.",
    primaryKeyword: "automotive SEO services",
    h1: "Automotive SEO services",
  },
  automotiveDigitalMarketing: {
    path: SITE_ROUTES.automotiveDigitalMarketing,
    title: "Automotive Digital Marketing",
    description:
      "Digital marketing for automotive studios: strategy, social media management, Meta Ads, and lead-generation journeys for detailing, PPF, and tint brands.",
    primaryKeyword: "automotive digital marketing",
    h1: "Automotive digital marketing",
  },
  automotiveBranding: {
    path: SITE_ROUTES.automotiveBranding,
    title: "Automotive Branding Agency",
    description:
      "Automotive branding for detailing and protection studios — positioning, visual identity, digital consistency, and creative direction that differentiates.",
    primaryKeyword: "automotive branding",
    h1: "Automotive branding",
  },
} as const satisfies Record<string, PageSeo>;
