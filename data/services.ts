import { SITE_ROUTES } from "@/data/site-config";

export type ServiceId =
  | "websites"
  | "booking"
  | "google"
  | "social"
  | "ads";

export type ServiceItem = {
  id: ServiceId;
  num: string;
  name: string;
  titleLines: readonly [string, string];
  description: string;
  visualLabel: string;
  href?: string;
};

export const SERVICES: readonly ServiceItem[] = [
  {
    id: "websites",
    num: "01",
    name: "Automotive Websites",
    titleLines: ["Automotive", "Websites"],
    description:
      "Premium custom websites designed specifically for automotive businesses.",
    visualLabel: "Premium automotive studio website in a browser frame",
    href: SITE_ROUTES.automotiveWebsiteDesign,
  },
  {
    id: "booking",
    num: "02",
    name: "Booking & Lead Systems",
    titleLines: ["Booking &", "Lead Systems"],
    description: "Turn website visitors into calls, inquiries and bookings.",
    visualLabel: "Booking interface and confirmed inquiry ticket",
    href: SITE_ROUTES.automotiveWebsiteDesign,
  },
  {
    id: "google",
    num: "03",
    name: "Google & Local Presence",
    titleLines: ["Google &", "Local Presence"],
    description:
      "Make your business easier to find when local customers search for your services.",
    visualLabel: "Local search listing and map presence composition",
    href: SITE_ROUTES.automotiveSeo,
  },
  {
    id: "social",
    num: "04",
    name: "Social Media Presence",
    titleLines: ["Social Media", "Presence"],
    description:
      "Build a professional digital presence that reflects the quality of your work.",
    visualLabel: "Editorial automotive social profile and content grid",
    href: SITE_ROUTES.automotiveDigitalMarketing,
  },
  {
    id: "ads",
    num: "05",
    name: "Meta Ads",
    titleLines: ["Meta", "Ads"],
    description:
      "Reach local customers and generate new inquiries through targeted advertising.",
    visualLabel: "Premium local ad creative with campaign credits",
    href: SITE_ROUTES.automotiveDigitalMarketing,
  },
] as const;
