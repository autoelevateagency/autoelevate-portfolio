import Link from "next/link";

import { SITE_CONFIG, SITE_ROUTES } from "@/data/site-config";

type PageCtaProps = {
  title: string;
  body: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export const PageCta = ({
  title,
  body,
  primaryLabel = "Start a Project",
  secondaryHref = SITE_ROUTES.work,
  secondaryLabel = "View Our Work",
}: PageCtaProps): React.ReactElement => (
  <section className="inner-section page-cta-band">
    <p className="section-eyebrow">Next step</p>
    <h2 className="inner-h2 page-cta-title">{title}</h2>
    <p className="inner-lead">{body}</p>
    <div className="page-cta-actions">
      <a
        className="cta-button"
        href={SITE_CONFIG.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {primaryLabel}
      </a>
      <Link className="text-link" href={secondaryHref}>
        {secondaryLabel}
      </Link>
    </div>
    <p className="page-cta-note">
      Message us on WhatsApp with your studio type, location, and timeline. We
      reply with next steps and availability.
    </p>
  </section>
);
