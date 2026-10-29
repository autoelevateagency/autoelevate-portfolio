import fs from "node:fs";
import path from "node:path";

const file = path.resolve("data/portfolio.ts");
let source = fs.readFileSync(file, "utf8");

// Drop legacy SITE_IMAGES.work screenshot fields if still present.
source = source.replace(
  /\n    screenshot: SITE_IMAGES\.work\[\d+\],\n    screenshotAlt:\n      "[^"]+",/g,
  "",
);

const alts = {
  "prestige-auto-salon":
    "Prestige Auto Salon homepage hero — luxury protection studio layout with vehicle photography and precision protection headline",
  "mz-extraordinary-details":
    "MZ Extraordinary Details homepage hero — DFW luxury detailing studio photography and booking-focused layout",
  "831-ricardo-detailing":
    "831 Ricardo Detailing homepage hero — bold black-and-white automotive detailing typography and photography",
  "duarte-mobile-detailing":
    "Duarte Mobile Detailing homepage hero — mobile detailing packages and enquiry-led layout",
  "refine-auto-detailing":
    "Refine Auto Detailing homepage hero — San Antonio detailing service storytelling and booking layout",
  "safeguard-window-tinting":
    "Safeguard Window Tinting homepage hero — film-first tint studio layout with quote-led CTAs",
  "all-star-auto-detailing":
    "All-Star Auto Detailing homepage hero — Houston detailing brand presence and service hierarchy",
  "trujillos-premium-detailing":
    "Trujillo's Premium Detailing homepage hero — Milwaukee mobile detailing premium positioning",
  "degreef-car-detailing":
    "Degreef Car Detailing homepage hero — sharp mobile detailing visual system and service paths",
  carotic:
    "Carotic homepage hero — Houston wraps and custom-build shop archive layout",
  "yaad-boyz-detail":
    "Yaad Boyz Detail homepage hero — Chesapeake luxury detailing brand story and packages",
  "gold-shine":
    "Gold Shine homepage hero — Dubai multi-service protection studio layout for PPF, ceramic, and tint",
  "empire-tint-lab":
    "Empire Tint Lab homepage hero — Ceres multi-service tint, PPF, and wraps film-first layout",
  "luxe-auto-detailing":
    "Luxe Auto Detailing homepage hero — interior and exterior detailing with mobile and drop-off framing",
  "pcs-auto-detailing":
    "PCS Auto Detailing homepage hero — precision detailing studio with luxury interior photography",
  "yb-detailing":
    "YB Detailing homepage hero — clean precision detailing service menu layout",
  "maldos-mobile-detailing":
    "Maldos Mobile Detailing homepage hero — Lake County FL mobile detailing local service layout",
  "schorr-shine-mobile-detailing":
    "Schorr Shine Mobile Detailing homepage hero — premium mobile detailing conversion-ready layout",
  "detail-zone":
    "Detail Zone homepage hero — Hertfordshire mobile detailing premium UK studio layout",
  "luciano-auto-boutique":
    "Luciano Auto Boutique homepage hero — Las Vegas paint correction and ceramic boutique layout",
  "nbg-detailing":
    "NBG Detailing homepage hero — DFW mobile detailing quality-led enquiry layout",
  "garcia-epic-detailing":
    "Garcia Epic Detailing homepage hero — Miami-Dade and Broward mobile detailing regional layout",
  "refresh-detailing":
    "Refresh Detailing homepage hero — Liverpool and Sydney mobile detailing dual-market layout",
  "hogans-auto-detailing":
    "Hogan's Auto Detailing homepage hero — North Idaho mobile detailing with luxury vehicle collage",
  "the-detailing-studio":
    "The Detailing Studio homepage hero — Greater Toronto Area mobile detailing precision layout",
  "falkirk-car-care":
    "Falkirk Car Care homepage hero — Scotland detailing studio with ceramic and correction messaging",
  "jrs-detailing":
    "JRS Detailing homepage hero — Leesburg VA student-owned mobile detailing package layout",
  "detailed-by-chery":
    "Detailed by Chery homepage hero — Port Saint Lucie interior and exterior detailing studio layout",
  "tandem-car-hub":
    "Tandem Car Hub homepage hero — Winnipeg multi-service ceramic, PPF, tint, wraps, and detailing layout",
  "autoelevate-portfolio":
    "AutoElevate Portfolio homepage hero — agency portfolio brand presence and selected work layout",
};

const ids = Object.keys(alts);

for (const id of ids) {
  const needle = `id: "${id}",`;
  const idx = source.indexOf(needle);
  if (idx === -1) {
    console.warn("missing id", id);
    continue;
  }
  if (source.includes(`conceptScreenshotPath("${id}")`) || source.includes(`shot("${id}"`)) {
    console.log("already wired", id);
    continue;
  }
  // Insert after label line within this object — find the object's label line.
  const objStart = source.lastIndexOf("{", idx);
  const objEnd = source.indexOf("},", idx);
  const obj = source.slice(objStart, objEnd);
  if (obj.includes("screenshot:")) {
    console.log("has screenshot already", id);
    continue;
  }
  const labelMatch = obj.match(/\n    label: "[^"]+",/);
  if (!labelMatch) {
    console.warn("no label", id);
    continue;
  }
  const insertAt = objStart + obj.indexOf(labelMatch[0]) + labelMatch[0].length;
  const injection = `\n    ...shot("${id}",\n      "${alts[id]}",\n    ),`;
  source = source.slice(0, insertAt) + injection + source.slice(insertAt);
  console.log("wired", id);
}

fs.writeFileSync(file, source);
console.log("done");
