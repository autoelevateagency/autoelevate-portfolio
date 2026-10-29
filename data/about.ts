import { SITE_IMAGES } from "@/data/site-images";
import { SITE_ROUTES } from "@/data/site-config";

export type FounderProfile = {
  id: string;
  name: string;
  role: string;
  image: string;
  imageAlt: string;
};

export const ABOUT_FOUNDERS: readonly FounderProfile[] = [
  {
    id: "taha",
    name: "Muhammad Taha",
    role: "Founder",
    image: SITE_IMAGES.founders.taha,
    imageAlt: "Portrait of Muhammad Taha, Founder of AutoElevate",
  },
  {
    id: "ashadu",
    name: "S.M Ash-hadu Faridi",
    role: "Co-Founder",
    image: SITE_IMAGES.founders.ashadu,
    imageAlt: "Portrait of S.M Ash-hadu Faridi, Co-Founder of AutoElevate",
  },
] as const;

export const ABOUT_FOCUS_LINKS = [
  { label: "Automotive website design", href: SITE_ROUTES.automotiveWebsiteDesign },
  { label: "Branding", href: SITE_ROUTES.automotiveBranding },
  { label: "SEO", href: SITE_ROUTES.automotiveSeo },
  { label: "Digital marketing", href: SITE_ROUTES.automotiveDigitalMarketing },
] as const;

export const ABOUT_WHAT_WE_DO = [
  {
    num: "01",
    title: "Websites that convert",
    body: "Custom sites for detailing, PPF, tint, and wrap studios — clear services, strong photography, and enquiry-first structure.",
    href: SITE_ROUTES.automotiveWebsiteDesign,
  },
  {
    num: "02",
    title: "Brand systems",
    body: "Visual identity and digital consistency so your studio looks as premium online as the work in the bay.",
    href: SITE_ROUTES.automotiveBranding,
  },
  {
    num: "03",
    title: "Search & local presence",
    body: "Service pages, local SEO, and Google presence so the right customers find you when they are ready to book.",
    href: SITE_ROUTES.automotiveSeo,
  },
  {
    num: "04",
    title: "Growth channels",
    body: "Social presence and paid campaigns that turn attention into calls, quotes, and appointments.",
    href: SITE_ROUTES.automotiveDigitalMarketing,
  },
] as const;
