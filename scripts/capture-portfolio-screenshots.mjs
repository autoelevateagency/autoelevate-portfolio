/**
 * Captures viewport hero screenshots for portfolio concept demos.
 * Landscape 1440×810 (16:9) — matches slider aspect-ratio.
 */
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "public", "assets", "work");

const CONCEPTS = [
  { id: "prestige-auto-salon", url: "https://prestige-auto-salon.vercel.app/" },
  { id: "mz-extraordinary-details", url: "https://mz-extraordinary-details.vercel.app/" },
  { id: "831-ricardo-detailing", url: "https://831-ricardo-detailing.vercel.app/" },
  { id: "duarte-mobile-detailing", url: "https://duarte-mobile-detailing.vercel.app/" },
  { id: "refine-auto-detailing", url: "https://refine-auto-detailing-eight.vercel.app/" },
  { id: "safeguard-window-tinting", url: "https://safeguard-window-tinting.vercel.app/" },
  { id: "all-star-auto-detailing", url: "https://all-star-auto-detailing.vercel.app/" },
  { id: "trujillos-premium-detailing", url: "https://trujillos-premium-detailing-beryl.vercel.app/" },
  { id: "degreef-car-detailing", url: "https://degreef-car-detailing.vercel.app/" },
  { id: "carotic", url: "https://carotic.vercel.app/" },
  { id: "yaad-boyz-detail", url: "https://yaad-boyz-detail.vercel.app/" },
  { id: "gold-shine", url: "https://goldshine.vercel.app/" },
  { id: "empire-tint-lab", url: "https://empire-tint-lab.vercel.app/" },
  { id: "luxe-auto-detailing", url: "https://luxe-auto-detailing.vercel.app/" },
  { id: "pcs-auto-detailing", url: "https://pcs-auto-detailing.vercel.app/" },
  { id: "yb-detailing", url: "https://yb-detailing.vercel.app/" },
  { id: "maldos-mobile-detailing", url: "https://maldosmobiledetailing.vercel.app/" },
  { id: "schorr-shine-mobile-detailing", url: "https://schorr-shine-mobile-detailing.vercel.app/" },
  { id: "detail-zone", url: "https://detail-zone-virid.vercel.app/" },
  { id: "luciano-auto-boutique", url: "https://luciano-auto-boutique.vercel.app/" },
  { id: "nbg-detailing", url: "https://nbg-detailing.vercel.app/" },
  { id: "garcia-epic-detailing", url: "https://garcia-epic-detailing.vercel.app/" },
  { id: "refresh-detailing", url: "https://refresh-detailing.vercel.app/" },
  { id: "hogans-auto-detailing", url: "https://hogans-detailing.vercel.app/" },
  { id: "the-detailing-studio", url: "https://the-detailing-studio.vercel.app/" },
  { id: "falkirk-car-care", url: "https://falkirk-car-care.vercel.app/" },
  { id: "jrs-detailing", url: "https://jrs-detailing.vercel.app/" },
  { id: "detailed-by-chery", url: "https://detailed-by-cherry.vercel.app/" },
  { id: "tandem-car-hub", url: "https://tandem-car-hub.vercel.app/" },
  { id: "autoelevate-portfolio", url: "https://autoelevate-portfolio.vercel.app/" },
];

fs.mkdirSync(outDir, { recursive: true });

const results = [];

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 810 },
  deviceScaleFactor: 1,
  colorScheme: "dark",
});

const page = await context.newPage();

for (const concept of CONCEPTS) {
  const outPath = path.join(outDir, `${concept.id}.webp`);
  try {
    const response = await page.goto(concept.url, {
      waitUntil: "domcontentloaded",
      timeout: 90000,
    });
    const status = response?.status() ?? 0;
    if (status >= 400) {
      results.push({ id: concept.id, ok: false, error: `HTTP ${status}` });
      console.error(`FAIL ${concept.id}: HTTP ${status}`);
      continue;
    }

    // Settle hero imagery / fonts without hanging on long-polling.
    await page.waitForLoadState("networkidle", { timeout: 45000 }).catch(() => {});
    await page.evaluate(async () => {
      window.scrollTo(0, 0);
      if (document.fonts?.ready) await document.fonts.ready;
      const imgs = [...document.images];
      await Promise.all(
        imgs.map(
          (img) =>
            img.complete
              ? Promise.resolve()
              : new Promise((resolve) => {
                  img.addEventListener("load", resolve, { once: true });
                  img.addEventListener("error", resolve, { once: true });
                }),
        ),
      );
    });
    await page.waitForTimeout(2500);
    await page.evaluate(() => window.scrollTo(0, 0));

    await page.screenshot({
      path: outPath,
      type: "webp",
      quality: 82,
      fullPage: false,
      animations: "disabled",
    });

    const bytes = fs.statSync(outPath).size;
    results.push({ id: concept.id, ok: true, bytes, path: outPath });
    console.log(`OK   ${concept.id} (${Math.round(bytes / 1024)} KB)`);
  } catch (err) {
    results.push({
      id: concept.id,
      ok: false,
      error: err instanceof Error ? err.message : String(err),
    });
    console.error(`FAIL ${concept.id}:`, err instanceof Error ? err.message : err);
  }
}

await browser.close();

const summaryPath = path.join(outDir, "_capture-report.json");
fs.writeFileSync(
  summaryPath,
  JSON.stringify(
    {
      capturedAt: new Date().toISOString(),
      viewport: { width: 1440, height: 810 },
      results,
    },
    null,
    2,
  ),
);

const ok = results.filter((r) => r.ok).length;
const fail = results.filter((r) => !r.ok);
console.log(`\nDone: ${ok}/${results.length} captured`);
if (fail.length) {
  console.log("Failures:", fail);
  process.exitCode = 1;
}
