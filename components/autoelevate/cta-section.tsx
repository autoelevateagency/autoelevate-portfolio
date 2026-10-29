import { SITE_CONFIG } from "@/data/site-config";

export const CtaSection = (): React.ReactElement => (
  <section id="cta" className="section cta-section">
    <div className="cta-inner">
      <p className="cta-eyebrow reveal">Start a Project</p>
      <h2 className="cta-headline reveal">
        Ready to <em>Elevate</em>
        <br />
        Your Studio?
      </h2>
      <p className="cta-sub reveal">
        We take on a limited number of luxury automotive studios each quarter.
        If your brand is ready to convert at the level it deserves, let&apos;s
        talk.
      </p>
      <a
        className="cta-button reveal"
        href={SITE_CONFIG.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Chat on WhatsApp
      </a>
    </div>
  </section>
);
