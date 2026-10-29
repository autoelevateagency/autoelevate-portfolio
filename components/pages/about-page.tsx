import Link from "next/link";

import { SiteImage } from "@/components/autoelevate/site-image";
import { PageShell } from "@/components/layout/page-shell";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import {
  ABOUT_FOCUS_LINKS,
  ABOUT_FOUNDERS,
  ABOUT_WHAT_WE_DO,
} from "@/data/about";
import { PAGE_SEO } from "@/data/page-seo";
import { SITE_CONFIG, SITE_ROUTES } from "@/data/site-config";
import { SITE_IMAGES } from "@/data/site-images";
import {
  getBreadcrumbSchema,
  getOrganizationSchema,
} from "@/lib/structured-data";

import "./about-page.css";

const seo = PAGE_SEO.about;

const breadcrumbs = [
  { name: "Home", path: SITE_ROUTES.home },
  { name: "About", path: SITE_ROUTES.about },
];

export const AboutPage = (): React.ReactElement => (
  <PageShell>
    <JsonLd
      data={[getOrganizationSchema(), getBreadcrumbSchema(breadcrumbs)]}
    />

    <header className="about-hero">
      <div className="about-hero-copy">
        <Breadcrumbs items={breadcrumbs} />
        <p className="about-hero-kicker">About AutoElevate</p>
        <h1 className="about-hero-title">
          Digital partners for{" "}
          <em>automotive businesses.</em>
        </h1>
        <p className="about-hero-lead">
          We build websites, branding, SEO, and digital growth for detailing
          studios, PPF installers, tint shops, and car wrap businesses — so your
          online presence works as hard as your craft.
        </p>
        <nav className="about-hero-links" aria-label="Focus areas">
          {ABOUT_FOCUS_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div>
        <div className="about-hero-media">
          <SiteImage
            src={SITE_IMAGES.aboutHero}
            alt="Luxury automotive photography — black Porsche on an obsidian floor"
            priority
            sizes="(max-width: 900px) 100vw, 48vw"
          />
        </div>
        <p className="about-hero-caption" aria-hidden="true">
          Automotive by focus
        </p>
      </div>
    </header>

    <section className="about-do" aria-labelledby="about-do-heading">
      <div className="about-do-intro">
        <div>
          <p className="about-do-eyebrow">What we do</p>
          <h2 id="about-do-heading" className="about-do-title">
            From presence to <em>acquisition.</em>
          </h2>
        </div>
        <p className="about-do-lead">
          AutoElevate helps automotive businesses look premium online — then
          turn that presence into a practical channel for enquiries, bookings,
          and qualified customers.
        </p>
      </div>

      <ul className="about-do-list">
        {ABOUT_WHAT_WE_DO.map((item) => (
          <li key={item.num}>
            <Link className="about-do-item" href={item.href}>
              <span className="about-do-num">{item.num}</span>
              <span>
                <span className="about-do-item-title">{item.title}</span>
                <span className="about-do-item-body">{item.body}</span>
              </span>
              <span className="about-do-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>

    <section
      className="about-founders"
      aria-labelledby="about-founders-heading"
    >
      <div className="about-founders-head">
        <p className="about-founders-eyebrow">Leadership</p>
        <h2 id="about-founders-heading" className="about-founders-title">
          The people behind <em>AutoElevate.</em>
        </h2>
        <p className="about-founders-note">
          A specialist studio under {SITE_CONFIG.parentOrganization.name} —
          focused entirely on the automotive industry.
        </p>
      </div>

      <div className="about-founders-grid">
        {ABOUT_FOUNDERS.map((founder) => (
          <article
            key={founder.id}
            className={`about-founder${founder.role === "Founder" ? " about-founder--lead" : ""}`}
          >
            <div className="about-founder-portrait">
              <SiteImage
                src={founder.image}
                alt={founder.imageAlt}
                sizes="(max-width: 900px) 100vw, 42vw"
                objectFit="cover"
              />
            </div>
            <div className="about-founder-meta">
              <p className="about-founder-role">{founder.role}</p>
              <h3 className="about-founder-name">{founder.name}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="about-cta" aria-labelledby="about-cta-heading">
      <div className="about-cta-inner">
        <p className="about-cta-eyebrow">Start a conversation</p>
        <h2 id="about-cta-heading" className="about-cta-title">
          Ready to elevate your studio online?
        </h2>
        <p className="about-cta-body">
          Tell us about your detailing, PPF, tint, or wrap business — and what a
          stronger digital presence should deliver.
        </p>
        <a
          className="cta-button"
          href={SITE_CONFIG.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat on WhatsApp
        </a>
        <div>
          <Link className="about-cta-secondary" href={SITE_ROUTES.work}>
            View our work
          </Link>
        </div>
      </div>
    </section>
  </PageShell>
);
