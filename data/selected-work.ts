import { CLIENT_PORTFOLIO } from "@/data/portfolio";
import {
  toPortfolioSlide,
  type PortfolioSlideItem,
} from "@/lib/portfolio-labels";

export type SelectedWorkItem = PortfolioSlideItem;

/** Curated homepage slider order — real portfolio IDs only. */
const HOME_SLIDER_IDS = [
  "prestige-auto-salon",
  "mz-extraordinary-details",
  "831-ricardo-detailing",
  "safeguard-window-tinting",
  "empire-tint-lab",
  "carotic",
  "gold-shine",
] as const;

const byId = new Map(CLIENT_PORTFOLIO.map((item) => [item.id, item]));

/** Homepage Selected Work slider — concepts that exist in portfolio data. */
export const SELECTED_WORK: SelectedWorkItem[] = HOME_SLIDER_IDS.map((id) => {
  const item = byId.get(id);
  if (!item) {
    throw new Error(`Selected work missing portfolio id: ${id}`);
  }
  return toPortfolioSlide(item);
});
