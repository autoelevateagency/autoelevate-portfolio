import Image from "next/image";
import Link from "next/link";

import { NAV_SERVICE_LINKS } from "@/data/navigation";
import { SITE_CONFIG, SITE_ROUTES } from "@/data/site-config";

type SiteFooterProps = {
  variant?: "home" | "inner";
};

export const SiteFooter = ({
  variant = "inner",
}: SiteFooterProps): React.ReactElement => {
  const logoHref = variant === "home" ? "#home-hero" : SITE_ROUTES.home;

  return (
    <footer>
      <Link className="footer-logo" href={logoHref} aria-label="AutoElevate home">
        <Image
          src="/assets/logo/logo.png"
          alt="AutoElevate"
          width={669}
          height={373}
        />
      </Link>
      <p className="footer-copy">
        © {new Date().getFullYear()} AutoElevate, a brand of{" "}
        <a
          className="footer-brand-link"
          href={SITE_CONFIG.parentOrganization.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {SITE_CONFIG.parentOrganization.name}
        </a>
        . All rights reserved.
      </p>
      <nav className="footer-nav" aria-label="Footer">
        <Link href={SITE_ROUTES.home}>Home</Link>
        <Link href={SITE_ROUTES.work}>Work</Link>
        <Link href={SITE_ROUTES.about}>About</Link>
        <a
          href={SITE_CONFIG.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Start Project
        </a>
      </nav>
      <nav className="footer-nav footer-nav--services" aria-label="Services">
        {NAV_SERVICE_LINKS.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="footer-socials">
        <a
          href={SITE_CONFIG.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>
      </div>
    </footer>
  );
};
