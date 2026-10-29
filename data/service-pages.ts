import type { ServicePageContent } from "@/components/pages/service-page";
import {
  AUTOMOTIVE_PORTFOLIO,
  getPortfolioByNiche,
  HOME_FEATURED_WORK,
} from "@/data/portfolio";
import { PAGE_SEO } from "@/data/page-seo";
import { SITE_IMAGES } from "@/data/site-images";
import { SITE_ROUTES } from "@/data/site-config";

const sharedProcess = [
  {
    title: "Discovery",
    body: "We clarify your services, market, competitors, and what a qualified enquiry looks like for your studio.",
  },
  {
    title: "Structure & design",
    body: "Information architecture, visual direction, and page compositions tailored to your niche — not a generic template.",
  },
  {
    title: "Build & refine",
    body: "Responsive development, content integration, enquiry paths, and performance-minded implementation.",
  },
  {
    title: "Launch support",
    body: "Go-live checks, analytics readiness, and a clear handoff so your team knows how to keep the site current.",
  },
] as const;

export const AUTOMOTIVE_WEBSITE_DESIGN: ServicePageContent = {
  seo: PAGE_SEO.automotiveWebsiteDesign,
  kicker: "Service / Web Design",
  lead: "Custom automotive websites for detailing, PPF, tint, wrap, and multi-service studios — designed to look premium and convert enquiries.",
  heroLayout: "cinema",
  heroImage: SITE_IMAGES.heroScenes[2],
  heroImageAlt: "Editorial automotive design atmosphere for website design",
  serviceType: [
    "Automotive website design",
    "Custom automotive website development",
  ],
  introTitle: "Built for automotive operators — not generic agencies",
  introBody: [
    "AutoElevate designs and develops websites specifically for automotive service businesses. That means service menus that match how owners sell packages, galleries that show real craft, and enquiry paths that fit mobile-first customers.",
    "Whether you run a detailing bay, a PPF room, a tint shop, or a wrap studio, the site should explain what you do, prove the finish quality, and make the next step obvious — call, WhatsApp, or form enquiry.",
  ],
  asideTitle: "What you receive",
  asideBody:
    "Strategy-led sitemap, custom UI, responsive build, SEO foundations, and conversion-focused CTAs. We do not ship one-size-fit-all theme skins.",
  capabilitiesTitle: "Automotive design capabilities",
  capabilities: [
    {
      title: "Service architecture",
      body: "Package pages, coverage options, and add-ons structured the way automotive clients actually buy.",
    },
    {
      title: "Transformation galleries",
      body: "Layouts that showcase before/after work, film finishes, and wrap archives without clutter.",
    },
    {
      title: "Enquiry systems",
      body: "Quote requests, WhatsApp CTAs, and lead capture flows matched to how your studio closes jobs.",
    },
    {
      title: "Responsive craft",
      body: "Desktop editorial presence with mobile performance — where most local customers decide.",
    },
    {
      title: "Brand consistency",
      body: "Typography, color, and motion that feel like a premium automotive brand, not a template.",
    },
    {
      title: "SEO-ready structure",
      body: "Clean headings, internal links, and page templates ready for niche service content.",
    },
  ],
  processTitle: "How an AutoElevate website project runs",
  process: [...sharedProcess],
  conceptsTitle: "Selected website concepts",
  conceptsNote:
    "Live website concepts from our automotive archive. Labeled as concepts/demos — not invented client results.",
  concepts: [...AUTOMOTIVE_PORTFOLIO],
  related: [
    { label: "Car detailing websites", href: SITE_ROUTES.carDetailingWebsiteDesign },
    { label: "PPF websites", href: SITE_ROUTES.ppfWebsiteDesign },
    { label: "Window tint websites", href: SITE_ROUTES.windowTintWebsiteDesign },
    { label: "Car wrap websites", href: SITE_ROUTES.carWrapWebsiteDesign },
    { label: "Automotive SEO", href: SITE_ROUTES.automotiveSeo },
    { label: "Branding", href: SITE_ROUTES.automotiveBranding },
  ],
  faqs: [
    {
      question: "Do you only build automotive websites?",
      answer:
        "AutoElevate specializes in automotive studios — detailing, PPF, tint, wraps, ceramic, and related protection brands. That focus shapes our design systems and content patterns.",
    },
    {
      question: "Are the portfolio sites live client projects?",
      answer:
        "Many entries are website concepts and live demos created for automotive niches. We label them clearly and do not invent client outcomes or testimonials.",
    },
    {
      question: "Can you rebuild an existing studio site?",
      answer:
        "Yes. We can redesign and rebuild an existing site when the structure, positioning, or conversion path no longer matches the quality of the work in the bay.",
    },
    {
      question: "How do projects start?",
      answer:
        "Message us on WhatsApp with your studio type, location, and goals. We confirm fit, outline scope, and share next steps.",
    },
  ],
  ctaTitle: "Start your automotive website project",
  ctaBody:
    "Share your niche and what you want the site to achieve. We’ll respond with a clear path forward.",
};

export const CAR_DETAILING_WEBSITE_DESIGN: ServicePageContent = {
  seo: PAGE_SEO.carDetailingWebsiteDesign,
  kicker: "Niche / Detailing",
  lead: "Websites for car detailing shops and mobile detailers that present packages, transformations, reviews, and booking enquiries with premium clarity.",
  heroLayout: "split",
  heroImage: SITE_IMAGES.services[0],
  heroImageAlt: "Automotive detailing atmosphere for website design",
  serviceType: "Car detailing website design",
  introTitle: "A detailing site should sell the finish — then the booking",
  introBody: [
    "Detailing customers compare polish quality, package clarity, and trust signals before they enquire. Your website should make services understandable, show the standard of work, and remove friction from booking or quote requests.",
    "We design for shop-based and mobile operators alike — service areas, package tiers, interior/exterior menus, ceramic add-ons, and gallery-led storytelling.",
  ],
  asideTitle: "Ideal for",
  asideBody:
    "Mobile detailers, boutique studios, ceramic-focused shops, and multi-bay detailing businesses ready for a more premium digital presence.",
  capabilitiesTitle: "What a detailing website needs",
  capabilities: [
    {
      title: "Package storytelling",
      body: "Clear tiers for maintenance, enhancement, and correction — without overwhelming first-time visitors.",
    },
    {
      title: "Transformation proof",
      body: "Gallery structures that highlight paint correction, interior revival, and ceramic finishes.",
    },
    {
      title: "Review presentation",
      body: "Space for genuine customer feedback when you have it — never fabricated testimonials.",
    },
    {
      title: "Booking / enquiry paths",
      body: "WhatsApp, call, or form-led flows matched to how your team actually schedules jobs.",
    },
    {
      title: "Mobile-first layouts",
      body: "Most detailing enquiries start on a phone — we design for that reality first.",
    },
    {
      title: "Local relevance",
      body: "Service-area clarity and foundations that support local search content later.",
    },
  ],
  processTitle: "From studio brief to live detailing site",
  process: [...sharedProcess],
  conceptsTitle: "Detailing website concepts",
  conceptsNote:
    "Concepts from our detailing archive. Open the live demos to review structure and tone.",
  concepts: getPortfolioByNiche("detailing"),
  related: [
    { label: "Automotive website design", href: SITE_ROUTES.automotiveWebsiteDesign },
    { label: "Automotive SEO", href: SITE_ROUTES.automotiveSeo },
    { label: "Digital marketing", href: SITE_ROUTES.automotiveDigitalMarketing },
    { label: "Branding", href: SITE_ROUTES.automotiveBranding },
    { label: "Full portfolio", href: SITE_ROUTES.work },
  ],
  faqs: [
    {
      question: "Can the site handle mobile detailing service areas?",
      answer:
        "Yes. We structure service-area messaging and enquiry flows so customers understand where you operate and how to book.",
    },
    {
      question: "Do you write package copy?",
      answer:
        "We help shape clear package naming and descriptions based on how you sell. Final pricing and inclusions always come from your studio.",
    },
    {
      question: "Will you invent before/after photos?",
      answer:
        "No. We use your photography or approved concept imagery. We do not fabricate job results.",
    },
  ],
  ctaTitle: "Build a detailing website that converts",
  ctaBody:
    "Tell us whether you’re mobile, shop-based, or hybrid — and what a good week of enquiries looks like.",
};

export const PPF_WEBSITE_DESIGN: ServicePageContent = {
  seo: PAGE_SEO.ppfWebsiteDesign,
  kicker: "Niche / PPF",
  lead: "Website design for paint protection film installers — coverage options, finish comparisons, project galleries, and quote-ready consultation paths.",
  heroLayout: "cinema",
  heroImage: SITE_IMAGES.caseStudies[0],
  heroImageAlt: "Paint protection and film craft atmosphere",
  serviceType: "Paint protection film website design",
  introTitle: "PPF buyers need clarity before they request a quote",
  introBody: [
    "Paint protection decisions involve coverage packages, film brands, finish options, and trust in installation quality. A strong PPF website explains those choices without burying the enquiry CTA.",
    "We design pages that help prospects understand full-body vs. partial coverage, self-healing finishes, and why precision installation matters — then move them to a consultation or quote request.",
  ],
  asideTitle: "Positioning note",
  asideBody:
    "We showcase protection-studio concepts from our archive, including XPEL-oriented salon positioning where relevant. We do not invent installer certifications.",
  capabilitiesTitle: "PPF website essentials",
  capabilities: [
    {
      title: "Coverage education",
      body: "Partial, track, and full-vehicle packages explained in plain language.",
    },
    {
      title: "Finish comparisons",
      body: "Gloss, matte, and color-change PPF options presented with visual hierarchy.",
    },
    {
      title: "Install expertise",
      body: "Process sections that communicate craft, bay standards, and inspection discipline.",
    },
    {
      title: "Project galleries",
      body: "Layouts for film installs and protection portfolios that feel cinematic, not cluttered.",
    },
    {
      title: "Quote requests",
      body: "Structured paths for year/make/model and coverage interest before the conversation starts.",
    },
    {
      title: "Ceramic pairing",
      body: "Room to present coating + PPF combinations when your studio offers both.",
    },
  ],
  processTitle: "Project workflow",
  process: [...sharedProcess],
  conceptsTitle: "PPF & protection concepts",
  conceptsNote:
    "Concepts tagged for PPF and protection studios. Live demos open in a new tab.",
  concepts: getPortfolioByNiche("ppf"),
  related: [
    { label: "Automotive website design", href: SITE_ROUTES.automotiveWebsiteDesign },
    { label: "Car wrap websites", href: SITE_ROUTES.carWrapWebsiteDesign },
    { label: "Window tint websites", href: SITE_ROUTES.windowTintWebsiteDesign },
    { label: "Automotive branding", href: SITE_ROUTES.automotiveBranding },
    { label: "Full portfolio", href: SITE_ROUTES.work },
  ],
  faqs: [
    {
      question: "Can you feature specific film brands?",
      answer:
        "Yes, when you are authorized to promote them. We will not invent partnerships or certifications.",
    },
    {
      question: "Do you guarantee more PPF leads?",
      answer:
        "No. We build clearer sites and SEO foundations. Lead volume depends on market, offer, and follow-up — we do not promise rankings or enquiry counts.",
    },
  ],
  ctaTitle: "Brief your PPF website",
  ctaBody:
    "Share your coverage packages and whether you also offer ceramic or tint. We’ll outline the right page structure.",
};

export const WINDOW_TINT_WEBSITE_DESIGN: ServicePageContent = {
  seo: PAGE_SEO.windowTintWebsiteDesign,
  kicker: "Niche / Window Tint",
  lead: "Window tint shop websites that present film packages, vehicle galleries, service explanations, quote requests, and appointment enquiries with precision.",
  heroLayout: "cinema",
  heroImage: SITE_IMAGES.services[1],
  heroImageAlt: "Window tint studio atmosphere",
  serviceType: "Window tint website design",
  introTitle: "Tint sites win on film clarity and install confidence",
  introBody: [
    "Customers searching for window tinting want shade options, heat rejection benefits, legal context where relevant, and proof of clean installs. Your site should answer those questions quickly.",
    "We design tint business websites around film menus, automotive vs. architectural offerings when needed, gallery proof, and appointment or quote CTAs that feel premium — never aggressive.",
  ],
  asideTitle: "From the archive",
  asideBody:
    "Safeguard Window Tinting and Empire Tint Lab are live tint-led concepts in our portfolio. Open them to see film-first storytelling patterns.",
  capabilitiesTitle: "Tint website capabilities",
  capabilities: [
    {
      title: "Film packages",
      body: "Ceramic, carbon, and dyed film options structured for easy comparison.",
    },
    {
      title: "Vehicle galleries",
      body: "Project grids that show glass finish quality across truck, SUV, and performance cars.",
    },
    {
      title: "Service education",
      body: "Heat, UV, privacy, and clarity benefits explained without keyword stuffing.",
    },
    {
      title: "Quote & appointment paths",
      body: "Enquiry flows that collect vehicle details and preferred shade ranges.",
    },
    {
      title: "Multi-service support",
      body: "Room for PPF, wraps, or detailing when your shop offers more than tint.",
    },
    {
      title: "Local visibility foundations",
      body: "Page structure ready for local SEO and Google Business Profile alignment.",
    },
  ],
  processTitle: "How we deliver",
  process: [...sharedProcess],
  conceptsTitle: "Window tint concepts",
  conceptsNote: "Tint-tagged concepts from the AutoElevate archive.",
  concepts: getPortfolioByNiche("tint"),
  related: [
    { label: "PPF website design", href: SITE_ROUTES.ppfWebsiteDesign },
    { label: "Car wrap websites", href: SITE_ROUTES.carWrapWebsiteDesign },
    { label: "Automotive SEO", href: SITE_ROUTES.automotiveSeo },
    { label: "Digital marketing", href: SITE_ROUTES.automotiveDigitalMarketing },
    { label: "Full portfolio", href: SITE_ROUTES.work },
  ],
  faqs: [
    {
      question: "Can you include residential or commercial tint?",
      answer:
        "Yes, when those services are part of your real offer. We keep automotive and architectural sections clearly separated.",
    },
    {
      question: "Do you create fake shade percentage charts?",
      answer:
        "No. We present film data you provide or publicly accurate product information you approve.",
    },
  ],
  ctaTitle: "Start a tint website project",
  ctaBody:
    "Send your film lineup and whether you want quote forms, WhatsApp, or call-first conversion.",
};

export const CAR_WRAP_WEBSITE_DESIGN: ServicePageContent = {
  seo: PAGE_SEO.carWrapWebsiteDesign,
  kicker: "Niche / Wraps",
  lead: "Vehicle wrap website design for vinyl wrap studios — finish galleries, color transformations, commercial and personal wraps, and consultation enquiries.",
  heroLayout: "split",
  heroImage: SITE_IMAGES.services[2],
  heroImageAlt: "Vehicle wrap and custom finish atmosphere",
  serviceType: "Car wrap website design",
  introTitle: "Wrap studios need a digital archive that sells transformation",
  introBody: [
    "Wrap buyers respond to color, texture, and craft. Your website should feel like a curated finish library — full color changes, chrome deletes, commercial fleet work, and accent projects — with a clear path to consultation.",
    "We design wrap business sites that prioritize visual storytelling while keeping commercial and personal vehicle offers easy to navigate.",
  ],
  asideTitle: "Concept reference",
  asideBody:
    "Carotic is a Houston wraps and custom-build concept in our archive. Empire Tint Lab also demonstrates multi-service wrap + film positioning.",
  capabilitiesTitle: "Wrap website capabilities",
  capabilities: [
    {
      title: "Finish libraries",
      body: "Satin, gloss, color-change, and printed wrap collections presented with editorial rhythm.",
    },
    {
      title: "Commercial wraps",
      body: "Fleet, food truck, and business branding work separated from personal builds when needed.",
    },
    {
      title: "Project archives",
      body: "Horizontal or grid galleries that showcase transformations without slowing the page.",
    },
    {
      title: "Consultation CTAs",
      body: "Enquiry paths for design consults, wrap quotes, and combined tint/PPF packages.",
    },
    {
      title: "Brand presence",
      body: "Typography and layout that feel like a custom shop, not a generic print vendor.",
    },
    {
      title: "Related services",
      body: "Clean linking to tint, PPF, or detailing pages when your studio offers them.",
    },
  ],
  processTitle: "Project process",
  process: [...sharedProcess],
  conceptsTitle: "Wrap concepts",
  conceptsNote: "Wrap-tagged concepts. Additional multi-service demos appear on the portfolio page.",
  concepts: getPortfolioByNiche("wraps"),
  related: [
    { label: "PPF website design", href: SITE_ROUTES.ppfWebsiteDesign },
    { label: "Window tint websites", href: SITE_ROUTES.windowTintWebsiteDesign },
    { label: "Automotive branding", href: SITE_ROUTES.automotiveBranding },
    { label: "Automotive website design", href: SITE_ROUTES.automotiveWebsiteDesign },
    { label: "Full portfolio", href: SITE_ROUTES.work },
  ],
  faqs: [
    {
      question: "Can the site support printed commercial wraps?",
      answer:
        "Yes. We can structure separate journeys for personal color-change work and commercial fleet graphics.",
    },
    {
      question: "Do you supply wrap photography?",
      answer:
        "We can art-direct layouts around your shop photography. We do not invent project galleries or client vehicles.",
    },
  ],
  ctaTitle: "Plan your wrap studio website",
  ctaBody:
    "Tell us whether you focus on color change, commercial fleet, or both — and we’ll shape the archive and enquiry flow.",
};

export const AUTOMOTIVE_SEO: ServicePageContent = {
  seo: PAGE_SEO.automotiveSeo,
  kicker: "Service / SEO",
  lead: "Automotive SEO for detailing, PPF, tint, and wrap businesses — technical foundations, service-page strategy, local search, and Google Business Profile optimization.",
  heroLayout: "cinema",
  heroImage: SITE_IMAGES.resultsScene,
  heroImageAlt: "Growth and search visibility atmosphere",
  serviceType: [
    "Automotive SEO",
    "Local SEO for automotive businesses",
  ],
  introTitle: "SEO that matches how automotive customers search",
  introBody: [
    "Automotive service searches are often local and intent-heavy: “ceramic coating near me,” “PPF installer,” “mobile detailing,” “window tint shop.” We build SEO programs around those realities — not generic blog volume.",
    "AutoElevate provides technical SEO, on-page optimization, service-page strategy, local search support, and Google Business Profile optimization. We do not guarantee rankings, traffic, or leads.",
  ],
  asideTitle: "Honest scope",
  asideBody:
    "SEO outcomes depend on competition, site history, reviews, and operational consistency. We report on work completed and observed movement — never fabricated metrics.",
  capabilitiesTitle: "SEO services we deliver",
  capabilities: [
    {
      title: "Technical SEO",
      body: "Indexation, crawl health, metadata, sitemap/robots alignment, and performance basics that support discovery.",
    },
    {
      title: "On-page optimization",
      body: "Title tags, headings, internal links, and copy structured for niche commercial intent.",
    },
    {
      title: "Service-page strategy",
      body: "Pages for detailing, PPF, tint, wraps, and location variants when they represent real services.",
    },
    {
      title: "Local SEO",
      body: "NAP consistency guidance, location pages where appropriate, and local landing structure.",
    },
    {
      title: "Google Business Profile",
      body: "Profile optimization support — categories, services, photos guidance, and posting cadence recommendations.",
    },
    {
      title: "Content planning",
      body: "Useful niche content outlines that support search intent without doorway-page spam.",
    },
  ],
  processTitle: "How SEO engagements run",
  process: [
    {
      title: "Audit",
      body: "Review technical issues, content gaps, competitors, and local presence.",
    },
    {
      title: "Prioritize",
      body: "Agree on high-impact fixes and service pages worth creating or improving.",
    },
    {
      title: "Implement",
      body: "Ship on-page, technical, and GBP improvements in clear batches.",
    },
    {
      title: "Iterate",
      body: "Monitor Search Console signals and refine based on real data — not vanity claims.",
    },
  ],
  conceptsTitle: "Sites ready for search foundations",
  conceptsNote:
    "Strong service architecture makes SEO easier. Explore niche website concepts that already model clear service hierarchies.",
  concepts: [
    ...getPortfolioByNiche("detailing").slice(0, 2),
    ...getPortfolioByNiche("ppf").slice(0, 2),
    ...getPortfolioByNiche("tint").slice(0, 2),
  ],
  related: [
    { label: "Automotive website design", href: SITE_ROUTES.automotiveWebsiteDesign },
    { label: "Digital marketing", href: SITE_ROUTES.automotiveDigitalMarketing },
    { label: "Detailing websites", href: SITE_ROUTES.carDetailingWebsiteDesign },
    { label: "Full portfolio", href: SITE_ROUTES.work },
  ],
  faqs: [
    {
      question: "Do you guarantee #1 rankings?",
      answer:
        "No. Anyone promising guaranteed rankings is not being honest. We implement sound SEO work and measure what actually moves.",
    },
    {
      question: "Is SEO useful without a good website?",
      answer:
        "Limited. If the site cannot convert or explain services clearly, SEO traffic wastes budget. We often pair SEO with website improvements.",
    },
    {
      question: "Do you manage Google reviews?",
      answer:
        "We can advise on ethical review generation practices. We do not post fake reviews.",
    },
  ],
  ctaTitle: "Talk through automotive SEO",
  ctaBody:
    "Share your market and primary services. We’ll outline a realistic SEO starting point.",
};

export const AUTOMOTIVE_DIGITAL_MARKETING: ServicePageContent = {
  seo: PAGE_SEO.automotiveDigitalMarketing,
  kicker: "Service / Marketing",
  lead: "Digital marketing for automotive studios — strategic planning, social media management, Meta Ads, and lead-generation journeys for detailing, PPF, and tint brands.",
  heroLayout: "cinema",
  heroImage: SITE_IMAGES.services[3],
  heroImageAlt: "Automotive marketing and campaign atmosphere",
  serviceType: [
    "Automotive digital marketing",
    "Meta advertising for automotive businesses",
  ],
  introTitle: "Marketing that respects how studios actually win work",
  introBody: [
    "AutoElevate helps automotive businesses with strategic planning, social media management, Meta Ads, campaign creative direction, and lead-generation journeys that connect ads and content to a site built for enquiries.",
    "We present only services we can deliver. We do not claim unverified ROAS, invented lead counts, or channels we are not operating.",
  ],
  asideTitle: "Available now",
  asideBody:
    "Strategy, social media management, Meta Ads, creative direction, and conversion journey planning tied to your website and WhatsApp/call flows.",
  capabilitiesTitle: "Marketing services",
  capabilities: [
    {
      title: "Strategic planning",
      body: "Offer positioning, audience definition, and channel priorities for your niche and city.",
    },
    {
      title: "Social media management",
      body: "Consistent presence that reflects bay quality — not random stock-car posting.",
    },
    {
      title: "Meta Ads",
      body: "Local awareness and lead campaigns for studios ready to invest in paid acquisition.",
    },
    {
      title: "Campaign creative",
      body: "Ad concepts and landing alignment that match your brand system.",
    },
    {
      title: "Lead journeys",
      body: "Paths from ad or post → service page → WhatsApp/call with fewer drop-offs.",
    },
    {
      title: "Measurement hygiene",
      body: "Tracking setup guidance so you can see enquiries — without fake dashboards.",
    },
  ],
  processTitle: "Engagement flow",
  process: [
    {
      title: "Align",
      body: "Confirm services, margins, and which enquiries are worth paying for.",
    },
    {
      title: "System",
      body: "Ensure the website and CTAs can handle traffic before scaling ads.",
    },
    {
      title: "Launch",
      body: "Roll out social cadence and/or Meta campaigns with clear creative.",
    },
    {
      title: "Optimize",
      body: "Iterate on creative and targeting based on real enquiry quality.",
    },
  ],
  conceptsTitle: "Creative paired with strong sites",
  conceptsNote:
    "Marketing performs better when the destination site is niche-specific. Browse related concepts below.",
  concepts: [
    ...HOME_FEATURED_WORK,
    ...getPortfolioByNiche("wraps").slice(0, 2),
    ...getPortfolioByNiche("tint").slice(0, 1),
  ].slice(0, 6),
  related: [
    { label: "Automotive SEO", href: SITE_ROUTES.automotiveSeo },
    { label: "Automotive website design", href: SITE_ROUTES.automotiveWebsiteDesign },
    { label: "Automotive branding", href: SITE_ROUTES.automotiveBranding },
    { label: "Full portfolio", href: SITE_ROUTES.work },
  ],
  faqs: [
    {
      question: "Do you run Google Ads today?",
      answer:
        "Our paid acquisition focus here is Meta Ads. If you need search ads, ask and we’ll confirm current availability rather than over-claim.",
    },
    {
      question: "Can you manage social without ads?",
      answer:
        "Yes. Social media management can stand alone or pair with Meta campaigns.",
    },
    {
      question: "Will you promise a cost per lead?",
      answer:
        "No fixed CPL promises. Markets and offers vary. We optimize toward qualified enquiries and report honestly.",
    },
  ],
  ctaTitle: "Plan automotive marketing with us",
  ctaBody:
    "Tell us your niche, city, and monthly marketing budget range. We’ll advise a sensible starting mix.",
};

export const AUTOMOTIVE_BRANDING: ServicePageContent = {
  seo: PAGE_SEO.automotiveBranding,
  kicker: "Service / Branding",
  lead: "Automotive branding for detailing and protection studios — positioning, visual identity, digital consistency, and creative direction that differentiates.",
  heroLayout: "split",
  heroImage: SITE_IMAGES.positioning,
  heroImageAlt: "Automotive brand positioning atmosphere",
  serviceType: "Automotive branding",
  introTitle: "Brand systems that feel as precise as the work in the bay",
  introBody: [
    "Many automotive studios do excellent physical work and still look interchangeable online. Branding fixes that — positioning, naming clarity, visual identity, and digital consistency across site, social, and ads.",
    "We show branding direction through genuine concept work and identity systems we create. We do not invent award shelves or unverifiable brand valuations.",
  ],
  asideTitle: "Deliverables",
  asideBody:
    "Positioning narrative, visual identity direction, typography/color guidance, and digital application rules so the website and marketing stay coherent.",
  capabilitiesTitle: "Branding capabilities",
  capabilities: [
    {
      title: "Brand positioning",
      body: "Who you serve, why you’re different, and how to say it without empty luxury clichés.",
    },
    {
      title: "Visual identity",
      body: "Logo direction, type, color, and imagery rules suited to automotive craft.",
    },
    {
      title: "Digital consistency",
      body: "Application across website, social templates, and ad creative.",
    },
    {
      title: "Creative direction",
      body: "Photo and layout guidance so future content stays on-brand.",
    },
    {
      title: "Studio differentiation",
      body: "Detailing vs. PPF vs. tint vs. wrap brand cues that match the craft.",
    },
    {
      title: "Website pairing",
      body: "Brand systems designed to translate cleanly into a high-end site build.",
    },
  ],
  processTitle: "Branding process",
  process: [
    {
      title: "Discover",
      body: "Interview stakeholders, review competitors, and define the brand job-to-be-done.",
    },
    {
      title: "Define",
      body: "Positioning, messaging pillars, and visual territories.",
    },
    {
      title: "Design",
      body: "Identity exploration and selected system refinement.",
    },
    {
      title: "Apply",
      body: "Digital applications and handoff for website/marketing execution.",
    },
  ],
  conceptsTitle: "Identity expressed through concepts",
  conceptsNote:
    "These website concepts demonstrate brand tone and visual direction for automotive niches. They are concepts/demos, not fabricated rebrand case studies.",
  concepts: [
    ...HOME_FEATURED_WORK,
    ...getPortfolioByNiche("detailing").filter(
      (item) => !item.featuredOnHome,
    ).slice(0, 3),
  ].slice(0, 6),
  related: [
    { label: "Automotive website design", href: SITE_ROUTES.automotiveWebsiteDesign },
    { label: "Digital marketing", href: SITE_ROUTES.automotiveDigitalMarketing },
    { label: "Detailing websites", href: SITE_ROUTES.carDetailingWebsiteDesign },
    { label: "Full portfolio", href: SITE_ROUTES.work },
  ],
  faqs: [
    {
      question: "Do you only deliver a logo?",
      answer:
        "No. We focus on positioning and a usable identity system for digital surfaces — not a lone logo file without application rules.",
    },
    {
      question: "Can branding and website run together?",
      answer:
        "Yes. Many studios benefit from defining brand direction before or during the website build so the site launches with a coherent voice.",
    },
  ],
  ctaTitle: "Start an automotive branding conversation",
  ctaBody:
    "Share your current brand assets and where the studio feels visually inconsistent. We’ll propose a focused identity scope.",
};
