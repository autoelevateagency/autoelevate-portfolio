const BASE = "/assets/images";
const WORK = "/assets/work";

/** Landscape hero capture size used for all concept screenshots. */
export const CONCEPT_SCREENSHOT_SIZE = {
  width: 1440,
  height: 810,
} as const;

/** Local WebP hero capture path for a portfolio concept slug. */
export const conceptScreenshotPath = (slug: string): string =>
  `${WORK}/${slug}.webp`;

export const SITE_IMAGES = {
  heroScenes: [
    `${BASE}/Black_Porsche_on_obsidian_floor_202606071731.jpeg`,
    `${BASE}/startegy.jpeg`,
    `${BASE}/Design.jpeg`,
    `${BASE}/702486655_984887874393620_5933982678827203144_n.jpg`,
    `${BASE}/714541445_18599934898032228_7729922358119254558_n.jpg`,
  ],
  caseStudies: [
    `${BASE}/case-01.jpeg`,
    `${BASE}/case-02.jpeg`,
    `${BASE}/case-033.jpeg`,
  ],
  /** Featured home / why-section previews — unique concept heroes. */
  work: [
    conceptScreenshotPath("prestige-auto-salon"),
    conceptScreenshotPath("mz-extraordinary-details"),
    conceptScreenshotPath("831-ricardo-detailing"),
  ],
  services: [
    `${BASE}/service-01.jpeg`,
    `${BASE}/service-02.jpeg`,
    `${BASE}/service-03.jpeg`,
    `${BASE}/service-04.jpeg`,
  ],
  positioning: `${BASE}/Agency Positioning.jpeg`,
  cta: `${BASE}/contact.jpeg`,
  devScene: `${BASE}/development.jpeg`,
  resultsScene: `${BASE}/results.jpeg`,
  aboutHero: `${BASE}/Black_Porsche_on_obsidian_floor_202606071731.jpeg`,
  founders: {
    taha: "/assets/about/taha.png",
    ashadu: "/assets/about/ashadu.png",
  },
} as const;

export type SiteImagePath = (typeof SITE_IMAGES)[keyof typeof SITE_IMAGES] extends readonly string[]
  ? (typeof SITE_IMAGES)[keyof typeof SITE_IMAGES][number]
  : string;
