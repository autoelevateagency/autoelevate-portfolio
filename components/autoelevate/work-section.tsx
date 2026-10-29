import Link from "next/link";

import { PortfolioSlider } from "@/components/portfolio/portfolio-slider";
import { SELECTED_WORK } from "@/data/selected-work";
import { SITE_ROUTES } from "@/data/site-config";

export const WorkSection = (): React.ReactElement => (
  <section id="work" className="section work-section">
    <div className="work-intro">
      <p className="work-intro-index reveal">03</p>
      <div className="work-intro-copy">
        <p className="section-eyebrow reveal">Selected Work</p>
        <h2 className="work-intro-title reveal">
          Sites we built
          <br />
          for <em>studios that convert.</em>
        </h2>
        <p className="work-intro-note reveal">
          Featured website concepts with live demos.{" "}
          <Link href={SITE_ROUTES.work}>View the full portfolio</Link>.
        </p>
      </div>
    </div>

    <PortfolioSlider
      className="reveal"
      projects={SELECTED_WORK}
      ariaLabel="Selected work portfolio slider"
      footerHref={SITE_ROUTES.work}
      footerLabel="Full portfolio"
      loop
    />
  </section>
);
