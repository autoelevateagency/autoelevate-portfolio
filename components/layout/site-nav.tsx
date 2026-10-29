"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { InstagramLink } from "@/components/layout/instagram-link";
import { isServiceRoute, NAV_SERVICE_LINKS } from "@/data/navigation";
import { SITE_CONFIG, SITE_ROUTES } from "@/data/site-config";

type SiteNavProps = {
  variant?: "home" | "inner";
};

export const SiteNav = ({
  variant = "inner",
}: SiteNavProps): React.ReactElement => {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);
  const closeTimerRef = useRef<number | null>(null);
  const lastScrollYRef = useRef(0);
  const navOpenRef = useRef(false);
  const servicesOpenRef = useRef(false);
  const menuId = useId();

  navOpenRef.current = navOpen;
  servicesOpenRef.current = servicesOpen;

  const logoHref = variant === "home" ? "#home-hero" : SITE_ROUTES.home;
  const servicesActive = isServiceRoute(pathname);
  const workActive = pathname === SITE_ROUTES.work;
  const aboutActive = pathname === SITE_ROUTES.about;
  const homeActive = pathname === SITE_ROUTES.home;

  const clearCloseTimer = useCallback((): void => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const openServices = useCallback((): void => {
    clearCloseTimer();
    setServicesOpen(true);
  }, [clearCloseTimer]);

  const scheduleCloseServices = useCallback((): void => {
    clearCloseTimer();
    closeTimerRef.current = window.setTimeout(() => {
      setServicesOpen(false);
    }, 140);
  }, [clearCloseTimer]);

  const closeAll = useCallback((): void => {
    clearCloseTimer();
    setServicesOpen(false);
    setMobileServicesOpen(false);
    setNavOpen(false);
  }, [clearCloseTimer]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setMobileServicesOpen(false);
        setNavOpen(false);
      }
    };

    const onPointerDown = (event: MouseEvent | TouchEvent): void => {
      const target = event.target as Node | null;
      if (servicesRef.current && target && !servicesRef.current.contains(target)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      clearCloseTimer();
    };
  }, [clearCloseTimer]);

  useEffect(() => {
    closeAll();
  }, [pathname, closeAll]);

  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [navOpen]);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;

    const onScroll = (): void => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollYRef.current;
      lastScrollYRef.current = currentY;

      if (navOpenRef.current || servicesOpenRef.current) {
        setNavHidden(false);
        return;
      }

      if (currentY < 48) {
        setNavHidden(false);
        return;
      }

      if (delta > 6) {
        setNavHidden(true);
      } else if (delta < -6) {
        setNavHidden(false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (active: boolean): string | undefined =>
    active ? "is-active" : undefined;

  return (
    <nav
      className={`site-nav${navOpen ? " is-menu-open" : ""}${navHidden ? " is-hidden" : ""}`}
      aria-label="Primary"
    >
      {navOpen ? (
        <button
          type="button"
          className="site-nav__backdrop"
          aria-label="Close menu"
          onClick={closeAll}
        />
      ) : null}
      <div className="site-nav__shell">
        <InstagramLink className="site-nav__instagram" />
        <div className="site-nav__capsule">
          <Link className="nav-logo" href={logoHref} aria-label="AutoElevate home">
            <Image
              src="/assets/logo/logo.png"
              alt="AutoElevate"
              width={669}
              height={373}
              priority
            />
          </Link>

          <ul className="nav-links">
            <li>
              <Link
                href={SITE_ROUTES.home}
                className={linkClass(homeActive)}
                aria-current={homeActive ? "page" : undefined}
              >
                Home
              </Link>
            </li>

            <li
              className={`nav-item-services${servicesOpen ? " is-open" : ""}`}
              ref={servicesRef}
              onMouseEnter={openServices}
              onMouseLeave={scheduleCloseServices}
            >
              <button
                type="button"
                className={`nav-services-trigger${servicesActive ? " is-active" : ""}`}
                aria-expanded={servicesOpen}
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={() => setServicesOpen((open) => !open)}
                onFocus={openServices}
              >
                Services
                <span className="nav-services-chevron" aria-hidden="true" />
              </button>
              <div
                id={menuId}
                className={`nav-dropdown${servicesOpen ? " is-open" : ""}`}
                role="menu"
                aria-label="Services"
                aria-hidden={!servicesOpen}
                onMouseEnter={openServices}
                onMouseLeave={scheduleCloseServices}
              >
                {NAV_SERVICE_LINKS.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      role="menuitem"
                      className={active ? "is-active" : undefined}
                      aria-current={active ? "page" : undefined}
                      onClick={closeAll}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </li>

            <li>
              <Link
                href={SITE_ROUTES.work}
                className={linkClass(workActive)}
                aria-current={workActive ? "page" : undefined}
              >
                Work
              </Link>
            </li>

            <li>
              <Link
                href={SITE_ROUTES.about}
                className={linkClass(aboutActive)}
                aria-current={aboutActive ? "page" : undefined}
              >
                About
              </Link>
            </li>
          </ul>

          <a
            href={SITE_CONFIG.whatsappUrl}
            className="nav-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Project
          </a>

          <button
            type="button"
            className="nav-toggle"
            aria-expanded={navOpen}
            aria-controls="mobile-nav"
            aria-label={navOpen ? "Close menu" : "Open menu"}
            onClick={() => setNavOpen((open) => !open)}
          >
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
          </button>
        </div>

        <div
          id="mobile-nav"
          className={`nav-mobile-panel${navOpen ? " open" : ""}`}
          aria-hidden={!navOpen}
        >
          <div className="nav-mobile-panel__inner">
            <Link
              href={SITE_ROUTES.home}
              onClick={closeAll}
              aria-current={homeActive ? "page" : undefined}
            >
              Home
            </Link>

            <div className="nav-mobile-services">
              <button
                type="button"
                className={`nav-mobile-services-trigger${servicesActive ? " is-active" : ""}`}
                aria-expanded={mobileServicesOpen}
                aria-controls="mobile-services-list"
                onClick={() => setMobileServicesOpen((open) => !open)}
              >
                Services
                <span className="nav-services-chevron" aria-hidden="true" />
              </button>
              <div
                id="mobile-services-list"
                className={`nav-mobile-services-list${mobileServicesOpen ? " is-open" : ""}`}
                aria-hidden={!mobileServicesOpen}
              >
                {NAV_SERVICE_LINKS.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeAll}
                      aria-current={active ? "page" : undefined}
                      className={active ? "is-active" : undefined}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            <Link
              href={SITE_ROUTES.work}
              onClick={closeAll}
              aria-current={workActive ? "page" : undefined}
            >
              Work
            </Link>
            <Link
              href={SITE_ROUTES.about}
              onClick={closeAll}
              aria-current={aboutActive ? "page" : undefined}
            >
              About
            </Link>
            <a
              href={SITE_CONFIG.whatsappUrl}
              className="nav-cta"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeAll}
            >
              Start Project
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
