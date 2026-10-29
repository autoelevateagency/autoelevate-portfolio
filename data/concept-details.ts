/**
 * Unique concept-page copy. Locations are mirrored only where already
 * stated in portfolio descriptions — never invent addresses or outcomes.
 */
export type ConceptDetail = {
  designDirection: string;
  features: readonly string[];
  customerJourney: string;
  /** Unique meta description for /work/[slug] */
  metaDescription: string;
};

export const CONCEPT_DETAILS: Record<string, ConceptDetail> = {
  "prestige-auto-salon": {
    designDirection:
      "A cinematic protection-studio presence that leads with craftsmanship and film quality. The concept treats paint protection and ceramic as premium products — calm typography, dark surfaces, and appointment-first messaging rather than generic detailing templates.",
    features: [
      "Service hierarchy for PPF, ceramic, and protection packages",
      "Enquiry-led CTAs oriented around booking consultations",
      "Gallery framing that showcases finish quality without clutter",
      "Clear installer-studio positioning without fabricating certifications",
    ],
    customerJourney:
      "Visitors land on a composed hero, scan protection services, review finish photography, then move into a focused enquiry or appointment path — designed for high-intent protection clients.",
    metaDescription:
      "Prestige Auto Salon website concept by AutoElevate — a luxury PPF and ceramic protection studio demo with appointment-led structure. Design concept, not a client case study.",
  },
  "mz-extraordinary-details": {
    designDirection:
      "A DFW-oriented luxury detailing concept built around booking clarity. Studio photography and restrained luxury type set a premium tone while the information architecture keeps packages and enquiry paths unmistakable.",
    features: [
      "Service menu designed for quick scanning on mobile",
      "Booking-oriented navigation and CTAs",
      "Editorial photography layout for studio craft",
      "Local market framing for the Dallas–Fort Worth area",
    ],
    customerJourney:
      "Prospects enter through a polished hero, compare detailing packages, and convert through an enquiry-first booking flow tailored to mobile and drop-off audiences in DFW.",
    metaDescription:
      "MZ Extraordinary Details — AutoElevate website concept for a DFW luxury detailing studio with booking-focused UX. Concept demo with live preview.",
  },
  "831-ricardo-detailing": {
    designDirection:
      "Bold black-and-white visual language that puts craft and finish quality first. The concept uses contrast, confident headlines, and a studio-forward presence instead of soft generic auto templates.",
    features: [
      "High-contrast monochrome brand system",
      "Craft-led storytelling for finish quality",
      "Streamlined service presentation",
      "Strong studio identity signals above the fold",
    ],
    customerJourney:
      "Users feel the brand personality immediately, explore services through a clear hierarchy, and move toward contact with a confident, low-friction CTA path.",
    metaDescription:
      "831 Ricardo Detailing website concept — bold black-and-white automotive detailing demo by AutoElevate. Design concept with live preview.",
  },
  "duarte-mobile-detailing": {
    designDirection:
      "A mobile-detailing concept centered on precision wherever the client parks. Layouts emphasize convenience, package clarity, and local enquiry without inventing service-area claims beyond the concept brief.",
    features: [
      "Mobile-service storytelling and package clarity",
      "Enquiry paths tuned for on-location detailing",
      "Clean service cards with conversion-minded CTAs",
      "Responsive layout for clients browsing on the go",
    ],
    customerJourney:
      "Clients understand the mobile offer quickly, compare packages, and request service through a straightforward contact flow designed for convenience-led detailing.",
    metaDescription:
      "Duarte Mobile Detailing website concept by AutoElevate — mobile detailing demo with package clarity and enquiry-first structure.",
  },
  "refine-auto-detailing": {
    designDirection:
      "A San Antonio detailing concept with refined service storytelling. Visual restraint and conversion-minded sections model how a local studio can feel premium while staying easy to book.",
    features: [
      "Refined typography and calm service storytelling",
      "Local booking orientation for San Antonio audiences",
      "Clear package and process presentation",
      "Mobile-ready enquiry patterns",
    ],
    customerJourney:
      "Visitors move from brand impression to services to local booking intent, with CTAs placed where decision-ready clients expect them.",
    metaDescription:
      "Refine Auto Detailing — San Antonio detailing website concept by AutoElevate. Live demo showcasing refined service storytelling.",
  },
  "safeguard-window-tinting": {
    designDirection:
      "A film-first tint studio concept organized around options, install standards, and quote-led conversion. Galleries and film categories stay scannable without overloading the page.",
    features: [
      "Film options and install-standard storytelling",
      "Project gallery framing for tint work",
      "Quote-led CTAs throughout the journey",
      "Clear category structure for tint services",
    ],
    customerJourney:
      "Prospects explore film types, review install quality cues, then request a quote — a journey built for tint-led studios rather than generic auto shops.",
    metaDescription:
      "Safeguard Window Tinting website concept by AutoElevate — film-first tint studio demo with quote-led conversion paths.",
  },
  "all-star-auto-detailing": {
    designDirection:
      "A Houston detailing concept with confident brand voice and mobile-ready enquiry. Service clarity sits up front so local clients can decide quickly.",
    features: [
      "Confident brand voice for Houston market framing",
      "Clear service hierarchy and package cues",
      "Mobile-first enquiry flows",
      "Strong above-the-fold studio identity",
    ],
    customerJourney:
      "Users land with a clear studio promise, scan services, and convert via mobile-friendly contact paths designed for local detailing demand.",
    metaDescription:
      "All-Star Auto Detailing — Houston detailing website concept by AutoElevate. Live demo with confident brand voice and enquiry clarity.",
  },
  "trujillos-premium-detailing": {
    designDirection:
      "A Milwaukee mobile detailing concept focused on premium positioning with straightforward booking intent. The UI keeps luxury tone without burying the request path.",
    features: [
      "Premium mobile-detailing positioning",
      "Straightforward booking and contact intent",
      "Milwaukee market framing from the concept brief",
      "Clean service presentation for on-location work",
    ],
    customerJourney:
      "Clients grasp the mobile premium offer, review services, and book or enquire through an uncluttered conversion path.",
    metaDescription:
      "Trujillo's Premium Detailing — Milwaukee mobile detailing website concept by AutoElevate. Design demo with booking-first UX.",
  },
  "degreef-car-detailing": {
    designDirection:
      "A sharp visual system for mobile car detailing — crisp hierarchy from services to contact so the brand feels precise and modern.",
    features: [
      "Sharp visual system and typographic clarity",
      "Direct paths from services to contact",
      "Mobile detailing offer framing",
      "Conversion-minded section rhythm",
    ],
    customerJourney:
      "Visitors scan a precise brand presentation, compare services, and reach contact without friction or decorative noise.",
    metaDescription:
      "Degreef Car Detailing website concept by AutoElevate — modern mobile detailing demo with sharp visual hierarchy.",
  },
  carotic: {
    designDirection:
      "A Houston wraps and custom-build concept that treats color-change, lighting, and tint as a horizontal archive of shop work — bold, visual, and shop-forward.",
    features: [
      "Wrap and custom-build storytelling",
      "Horizontal archive patterns for shop work",
      "Multi-service framing for wraps, lighting, and tint",
      "Houston market context from the concept brief",
    ],
    customerJourney:
      "Enthusiasts browse visual work, explore wrap and tint services, then enquire about custom builds through a visually led path.",
    metaDescription:
      "Carotic website concept — Houston wraps and custom-build demo by AutoElevate with tint and lighting services. Live concept preview.",
  },
  "yaad-boyz-detail": {
    designDirection:
      "A Chesapeake luxury detailing concept with owner-operated brand story and package-led structure — personal, premium, and easy to navigate.",
    features: [
      "Owner-operated brand storytelling",
      "Package-led service structure",
      "Chesapeake market framing",
      "Luxury detailing visual tone",
    ],
    customerJourney:
      "Clients connect with the studio story, choose a package, and move into contact with a clear next step.",
    metaDescription:
      "Yaad Boyz Detail — Chesapeake luxury detailing website concept by AutoElevate. Owner-operated brand story and package-led demo.",
  },
  "gold-shine": {
    designDirection:
      "A Dubai protection-studio concept spanning PPF, ceramic, polishing, detailing, tint, and decals — multi-service depth with luxury Gulf-market polish.",
    features: [
      "Multi-service protection menu (PPF, ceramic, tint, more)",
      "Luxury studio presentation for Dubai audiences",
      "Clear category separation across services",
      "Enquiry paths suited to high-touch protection clients",
    ],
    customerJourney:
      "Visitors explore a broad protection offering, drill into a service category, and enquire with confidence in the studio’s multi-discipline positioning.",
    metaDescription:
      "Gold Shine — Dubai PPF, ceramic, and multi-service protection website concept by AutoElevate. Live demo.",
  },
  "empire-tint-lab": {
    designDirection:
      "A Ceres, CA multi-service concept with film-first brand presence across tint, PPF, wraps, graphics, and detailing — organized for shops that wear many hats.",
    features: [
      "Film-first tint and PPF storytelling",
      "Multi-service navigation for wraps and graphics",
      "Ceres, CA market framing from the concept brief",
      "Clear CTAs for quotes and shop visits",
    ],
    customerJourney:
      "Clients identify their need (tint, PPF, wrap), browse relevant work cues, and request a quote through film-forward conversion points.",
    metaDescription:
      "Empire Tint Lab — Ceres, CA tint, PPF, and wraps website concept by AutoElevate. Multi-service film-first demo.",
  },
  "luxe-auto-detailing": {
    designDirection:
      "An interior and exterior detailing concept supporting both mobile and drop-off models — dual-path UX without confusing the offer.",
    features: [
      "Dual mobile and drop-off service framing",
      "Interior and exterior detailing clarity",
      "Balanced CTAs for either service model",
      "Clean luxury detailing presentation",
    ],
    customerJourney:
      "Prospects choose mobile or drop-off, review relevant packages, and enquire through the matching path.",
    metaDescription:
      "Luxe Auto Detailing website concept by AutoElevate — mobile and drop-off detailing demo with clear dual-path UX.",
  },
  "pcs-auto-detailing": {
    designDirection:
      "Precision-focused detailing with crisp service storytelling and enquiry-oriented CTAs — engineered to feel exacting and trustworthy.",
    features: [
      "Precision brand positioning",
      "Enquiry-oriented CTA placement",
      "Clear service storytelling blocks",
      "Conversion-minded section pacing",
    ],
    customerJourney:
      "Users absorb a precision-led brand promise, review services, and convert through prominently placed enquiry actions.",
    metaDescription:
      "PCS Auto Detailing website concept by AutoElevate — precision detailing demo with enquiry-oriented structure.",
  },
  "yb-detailing": {
    designDirection:
      "Automotive detailing with precision positioning and a clean digital service menu — minimal chrome, maximum clarity.",
    features: [
      "Clean digital service menu",
      "Precision-led brand cues",
      "Uncluttered navigation",
      "Direct contact pathways",
    ],
    customerJourney:
      "Visitors scan the service menu, select an offer, and contact the studio through a short, obvious path.",
    metaDescription:
      "YB Detailing website concept by AutoElevate — clean service-menu detailing demo with precision positioning.",
  },
  "maldos-mobile-detailing": {
    designDirection:
      "A Lake County, FL mobile detailing concept with local service emphasis and straightforward contact — practical luxury for on-location work.",
    features: [
      "Lake County, FL local framing",
      "Mobile detailing service emphasis",
      "Straightforward contact paths",
      "Clear package presentation",
    ],
    customerJourney:
      "Local clients confirm the service area fit, review mobile packages, and reach out through a simple contact flow.",
    metaDescription:
      "Maldos Mobile Detailing — Lake County, FL mobile detailing website concept by AutoElevate. Live demo with local service emphasis.",
  },
  "schorr-shine-mobile-detailing": {
    designDirection:
      "Premium mobile detailing with a polished brand tone and conversion-ready layout — soft luxury cues that never hide the booking ask.",
    features: [
      "Polished premium brand tone",
      "Conversion-ready section layout",
      "Mobile detailing offer clarity",
      "Strong CTA hierarchy",
    ],
    customerJourney:
      "Prospects feel premium positioning immediately, review services, and book or enquire without hunting for the next step.",
    metaDescription:
      "Schorr Shine Mobile Detailing website concept by AutoElevate — premium mobile detailing demo with conversion-ready UX.",
  },
  "detail-zone": {
    designDirection:
      "A Hertfordshire mobile detailing concept with a premium UK studio voice — composed, trustworthy, and service-clear.",
    features: [
      "Premium UK studio voice and tone",
      "Hertfordshire market framing",
      "Clear mobile detailing presentation",
      "Editorial service sections",
    ],
    customerJourney:
      "UK clients experience a composed brand, understand mobile services, and contact through a calm, confident CTA path.",
    metaDescription:
      "Detail Zone — Hertfordshire mobile detailing website concept by AutoElevate. Premium UK studio voice, live demo.",
  },
  "luciano-auto-boutique": {
    designDirection:
      "A Las Vegas boutique concept for paint correction, ceramic coating, and detailing — editorial, high-end, and boutique-scaled.",
    features: [
      "Boutique editorial layout",
      "Paint correction and ceramic focus",
      "Las Vegas market framing",
      "High-end typography and spacing",
    ],
    customerJourney:
      "Discerning clients enter an editorial brand world, explore correction and ceramic services, then enquire for boutique-level work.",
    metaDescription:
      "Luciano Auto Boutique — Las Vegas paint correction and ceramic website concept by AutoElevate. Editorial boutique demo.",
  },
  "nbg-detailing": {
    designDirection:
      "A DFW mobile detailing concept focused on visible quality and enquiry conversion — proof of craft paired with local reach cues.",
    features: [
      "Visible quality and craft cues",
      "DFW local reach framing",
      "Enquiry conversion emphasis",
      "Mobile detailing service clarity",
    ],
    customerJourney:
      "Clients see quality signals early, confirm local relevance for DFW, and convert through enquiry-forward CTAs.",
    metaDescription:
      "NBG Detailing — DFW mobile detailing website concept by AutoElevate. Quality-led demo with enquiry conversion focus.",
  },
  "garcia-epic-detailing": {
    designDirection:
      "A Miami-Dade & Broward mobile detailing concept with premium positioning and service-area clarity — regional reach without noisy map widgets.",
    features: [
      "Miami-Dade & Broward service-area clarity",
      "Premium mobile detailing positioning",
      "Regional messaging without fabricated NAP data",
      "Strong enquiry and contact paths",
    ],
    customerJourney:
      "South Florida clients confirm coverage, review premium mobile services, and enquire with a clear regional fit.",
    metaDescription:
      "Garcia Epic Detailing — Miami-Dade & Broward mobile detailing website concept by AutoElevate. Premium regional demo.",
  },
  "refresh-detailing": {
    designDirection:
      "A dual-market mobile detailing concept for Liverpool & Sydney — calm luxury photography, three clear disciplines (interior, exterior, ceramic paint protection), and appointment-only booking cues.",
    features: [
      "Dual-city service framing (Liverpool & Sydney)",
      "Interior, exterior, and paint-protection service hierarchy",
      "Mobile-first ‘we come to you’ storytelling",
      "Appointment-led contact paths without fabricated NAP claims",
    ],
    customerJourney:
      "Clients confirm market fit, compare the three featured disciplines, then book via phone or email through an appointment-oriented close.",
    metaDescription:
      "Refresh Detailing — Liverpool & Sydney mobile detailing website concept by AutoElevate. Live demo with ceramic paint protection.",
  },
  "hogans-auto-detailing": {
    designDirection:
      "A North Idaho mobile detailing concept anchored in Hauser — tiered packages, finish photography, and driveway-delivery messaging without shop-drop friction.",
    features: [
      "Tiered package pricing presentation",
      "Hauser / North Idaho service-area clarity",
      "100% mobile & on-site positioning",
      "Finish-quality gallery framing",
    ],
    customerJourney:
      "Local clients pick a package tier, confirm the mobile service area, and call or email to schedule on-site work.",
    metaDescription:
      "Hogan's Auto Detailing — Hauser, Idaho mobile detailing website concept by AutoElevate. Live North Idaho demo.",
  },
  "the-detailing-studio": {
    designDirection:
      "A Greater Toronto Area mobile studio voice — precision-meets-passion branding with interior, exterior, mobile, and premium-care pillars.",
    features: [
      "GTA / Toronto mobile service framing",
      "Four-pillar service structure",
      "Neighbourhood voice cues across the GTA",
      "Driveway-arrival storytelling",
    ],
    customerJourney:
      "GTA clients see regional coverage, scan interior/exterior/premium care, and contact for on-site detailing.",
    metaDescription:
      "The Detailing Studio — Greater Toronto Area mobile detailing website concept by AutoElevate. Live GTA demo.",
  },
  "falkirk-car-care": {
    designDirection:
      "A Falkirk, Scotland precision studio concept — ceramic coatings, machine polishing, valeting, and full detailing presented as four obsessive disciplines.",
    features: [
      "Four-discipline service architecture",
      "Falkirk / Scotland market framing",
      "Ceramic and correction storytelling",
      "Mobile unit and appointment clarity",
    ],
    customerJourney:
      "UK clients enter a precision brand world, choose detailing or protection, and enquire for Falkirk-area mobile or studio work.",
    metaDescription:
      "Falkirk Car Care — Falkirk, Scotland detailing and ceramic website concept by AutoElevate. Live UK demo.",
  },
  "jrs-detailing": {
    designDirection:
      "A Leesburg, VA student-owned mobile detailing concept — transparent package pricing, add-ons, and nearby-area coverage without overbuilt luxury chrome.",
    features: [
      "Clear package and add-on pricing structure",
      "Leesburg, VA and nearby-area framing",
      "Student-owned brand authenticity",
      "Mobile driveway-service messaging",
    ],
    customerJourney:
      "Clients compare interior, exterior, and full packages, confirm Leesburg-area coverage, and book via phone or email.",
    metaDescription:
      "JRS Detailing — Leesburg, VA mobile detailing website concept by AutoElevate. Student-owned live demo.",
  },
  "detailed-by-chery": {
    designDirection:
      "A Port Saint Lucie detailing studio concept — interior and exterior mastery, paint correction, and ‘no cheap work’ brand voice with package-led exploration.",
    features: [
      "Interior, exterior, full detail, and correction packages",
      "Port Saint Lucie, Florida market framing",
      "Drag-to-explore package presentation",
      "Studio booking CTAs (call / Instagram)",
    ],
    customerJourney:
      "Florida clients absorb the perfectionist brand promise, explore packages, and contact for Port Saint Lucie detailing.",
    metaDescription:
      "Detailed by Chery — Port Saint Lucie interior & exterior detailing website concept by AutoElevate. Live Florida demo.",
  },
  "tandem-car-hub": {
    designDirection:
      "A Winnipeg multi-service customization hub — ceramic, PPF, tint, wraps, and detailing under one obsessive studio standard with consult-first conversion.",
    features: [
      "Multi-niche service carousel (ceramic, PPF, tint, wraps, detailing)",
      "Winnipeg / Brookside studio framing",
      "Consult → inspection → handoff journey",
      "Quote and DM-led CTAs for customization clients",
    ],
    customerJourney:
      "Obsessed car owners pick a discipline, review Winnipeg studio cues, and book a consult for protection or customization work.",
    metaDescription:
      "Tandem Car Hub — Winnipeg ceramic, PPF, tint, wraps, and detailing website concept by AutoElevate. Multi-service live demo.",
  },
};
