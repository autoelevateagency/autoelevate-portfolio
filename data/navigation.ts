import { SITE_ROUTES } from "@/data/site-config";

export type NavServiceLink = {
  label: string;
  href: string;
};

export const NAV_SERVICE_LINKS: readonly NavServiceLink[] = [
  {
    label: "Automotive Website Design",
    href: SITE_ROUTES.automotiveWebsiteDesign,
  },
  {
    label: "Car Detailing Website Design",
    href: SITE_ROUTES.carDetailingWebsiteDesign,
  },
  {
    label: "PPF Website Design",
    href: SITE_ROUTES.ppfWebsiteDesign,
  },
  {
    label: "Window Tint Website Design",
    href: SITE_ROUTES.windowTintWebsiteDesign,
  },
  {
    label: "Car Wrap Website Design",
    href: SITE_ROUTES.carWrapWebsiteDesign,
  },
  {
    label: "Automotive SEO",
    href: SITE_ROUTES.automotiveSeo,
  },
  {
    label: "Automotive Digital Marketing",
    href: SITE_ROUTES.automotiveDigitalMarketing,
  },
  {
    label: "Automotive Branding",
    href: SITE_ROUTES.automotiveBranding,
  },
] as const;

export const isServiceRoute = (pathname: string): boolean =>
  NAV_SERVICE_LINKS.some((link) => link.href === pathname);
