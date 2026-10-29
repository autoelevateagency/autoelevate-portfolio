import { SiteImage } from "@/components/autoelevate/site-image";
import type { PortfolioItem } from "@/data/portfolio";

type PortfolioCardProps = {
  project: PortfolioItem;
  index?: number;
  layout?: "grid" | "editorial";
};

const padIndex = (index: number): string => String(index + 1).padStart(2, "0");

export const PortfolioCard = ({
  project,
  index = 0,
  layout = "grid",
}: PortfolioCardProps): React.ReactElement => {
  const hasShot = Boolean(project.screenshot);

  if (layout === "editorial") {
    const isFlipped = index % 2 === 1;
    return (
      <article
        className={`work-piece${isFlipped ? " work-piece--flip" : ""}`}
      >
        <div className="work-copy">
          <p className="work-num" aria-hidden="true">
            {padIndex(index)}
          </p>
          <p className="concept-label">{project.label}</p>
          <h3 className="work-name">{project.name}</h3>
          <p className="work-desc">{project.description}</p>
          <a
            className="work-preview"
            href={project.previewUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Preview
            <span aria-hidden="true">↗</span>
          </a>
        </div>
        <a
          className="work-stage"
          href={project.previewUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Preview ${project.name}`}
        >
          <div className="work-chrome">
            <span className="work-chrome-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="work-chrome-url">{project.domain}</span>
          </div>
          <div className={`work-shot${hasShot ? "" : " work-shot--live"}`}>
            {hasShot && project.screenshot && project.screenshotAlt ? (
              <SiteImage
                src={project.screenshot}
                alt={project.screenshotAlt}
                sizes="(max-width: 640px) 100vw, 70vw"
                objectFit="contain"
                className="object-contain"
              />
            ) : (
              <div className="live-concept-panel">
                <p className="live-concept-kicker">Live concept</p>
                <p className="live-concept-domain">{project.domain}</p>
                <span className="live-concept-cta">Open demo ↗</span>
              </div>
            )}
          </div>
        </a>
      </article>
    );
  }

  return (
    <article className="portfolio-card">
      <p className="concept-label">{project.label}</p>
      <h3 className="portfolio-card-title">{project.name}</h3>
      <p className="portfolio-card-desc">{project.description}</p>
      <p className="portfolio-card-domain">{project.domain}</p>
      <a
        className="portfolio-card-link"
        href={project.previewUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Open live concept
        <span aria-hidden="true">↗</span>
      </a>
    </article>
  );
};
