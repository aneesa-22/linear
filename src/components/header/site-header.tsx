"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import styles from "./site-header.module.css";

const menuLinks = [
  { label: "home", href: "/" },
  { label: "services", href: "/#what-we-do" },
  { label: "websites", href: "/services/website-launch" },
  { label: "brand & identity", href: "/services/brand-identity" },
  {
    label: "ongoing support",
    href: "/services/website-launch#ongoing-support",
  },
  { label: "contact", href: "/contact" },
] as const;

const menuTransition = {
  duration: 0.45,
  ease: [0.22, 1, 0.36, 1],
} as const;

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [isHeaderDark, setIsHeaderDark] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);
  const lastScrollYRef = useRef(0);

  function closeMenu() {
    setIsMenuOpen(false);
    window.requestAnimationFrame(() => {
      menuButtonRef.current?.focus();
    });
  }

  function handleMenuLinkClick(
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    event.preventDefault();
    setIsMenuOpen(false);
    router.push(href);
  }

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.setAttribute("data-menu-open", "true");

    const focusTimer = window.setTimeout(() => {
      firstMenuLinkRef.current?.focus();
    }, 50);

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenu();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) {
        return;
      }

      const panelFocusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );
      const focusable = menuButtonRef.current
        ? [menuButtonRef.current, ...panelFocusable]
        : panelFocusable;

      if (!focusable.length) {
        return;
      }

      const firstElement = focusable[0]!;
      const lastElement = focusable[focusable.length - 1]!;

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      document.body.removeAttribute("data-menu-open");
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      return;
    }

    lastScrollYRef.current = window.scrollY;

    function handleScroll() {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollYRef.current;

      if (Math.abs(scrollDelta) < 6) {
        return;
      }

      if (currentScrollY < 24 || scrollDelta < 0) {
        setIsHeaderHidden(false);
      } else {
        setIsHeaderHidden(true);
      }

      lastScrollYRef.current = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    function updateHeaderTheme() {
      const checkY = Math.min(window.innerHeight * 0.12, 96);
      const lightSections = Array.from(
        document.querySelectorAll<HTMLElement>('[data-header-theme="light"]'),
      );
      const darkSections = Array.from(
        document.querySelectorAll<HTMLElement>('[data-header-theme="dark"]'),
      );

      const lightSheetIsEntering = lightSections.some((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= window.innerHeight * 0.76 && rect.bottom >= checkY;
      });

      const darkSectionIsActive = darkSections.some((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= checkY && rect.bottom >= checkY;
      });

      setIsHeaderDark(darkSectionIsActive && !lightSheetIsEntering);
    }

    const frame = window.requestAnimationFrame(updateHeaderTheme);

    window.addEventListener("scroll", updateHeaderTheme, { passive: true });
    window.addEventListener("resize", updateHeaderTheme);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateHeaderTheme);
      window.removeEventListener("resize", updateHeaderTheme);
    };
  }, [pathname]);

  const shouldHideHeader = isHeaderHidden && !isMenuOpen;
  const headerClassName = [
    styles.siteHeader,
    shouldHideHeader ? styles.siteHeaderHidden : "",
    isHeaderDark && !isMenuOpen ? styles.siteHeaderDark : "",
    isMenuOpen ? styles.siteHeaderMenuOpen : "",
    "sticky inset-x-0 top-0 z-20 px-[clamp(1.25rem,6vw,4.5rem)] py-6 text-[15px] sm:py-7",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClassName}>
      <Reveal as="div" className={styles.headerNavLayer} delay={0.05}>
        <nav
          aria-label="Primary navigation"
          className="flex items-center justify-between gap-6"
        >
          <Link
            href="/"
            className={styles.navLink}
            aria-label="Linear Studio home"
          >
            home
          </Link>

          <div className={styles.headerActions}>
            <button
              ref={menuButtonRef}
              type="button"
              className={[
                styles.menuButton,
                isMenuOpen ? styles.menuButtonOpen : "",
              ]
                .filter(Boolean)
                .join(" ")}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="site-menu"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <span className={styles.menuIcon} aria-hidden="true">
                <span />
                <span />
              </span>
            </button>
          </div>
        </nav>
      </Reveal>

      <AnimatePresence>
        {isMenuOpen ? (
          <>
            <m.button
              className={styles.backdrop}
              type="button"
              aria-label="Dismiss menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 0.28,
                ease: "easeOut",
              }}
              onClick={closeMenu}
            />

            <m.div
              id="site-menu"
              ref={panelRef}
              className={styles.menuPanel}
              role="dialog"
              aria-modal="true"
              aria-label="Main menu"
              initial={{ x: shouldReduceMotion ? 0 : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: shouldReduceMotion ? 0 : "100%" }}
              transition={
                shouldReduceMotion
                  ? { duration: 0.01, ease: "linear" }
                  : menuTransition
              }
            >
              <nav className={styles.menuNav} aria-label="Mobile navigation">
                {menuLinks.map((link, index) => (
                  <Link
                    ref={index === 0 ? firstMenuLinkRef : undefined}
                    className={styles.menuLink}
                    href={link.href}
                    key={link.href}
                    onClick={(event) => handleMenuLinkClick(event, link.href)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className={styles.menuFooter}>
                <p>
                  Launch websites.
                  <br />
                  Build brands.
                  <br />
                  We’ll figure out
                  <br />
                  the rest together.
                </p>

                <p>
                  Projects from £1,100
                  <br />
                  Manchester, UK
                </p>
              </div>
            </m.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
