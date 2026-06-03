"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import styles from "./site-header.module.css";

const menuLinks = [
  { label: "HOME", href: "/" },
  { label: "SERVICES", href: "/#what-we-do" },
  { label: "WEBSITES", href: "/services/website-launch" },
  { label: "BRAND & IDENTITY", href: "/services/brand-identity" },
  {
    label: "ONGOING SUPPORT",
    href: "/services/website-launch#ongoing-support",
  },
  { label: "CONTACT", href: "/contact" },
] as const;

const menuTransition = {
  duration: 0.45,
  ease: [0.22, 1, 0.36, 1],
} as const;

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastScrollYRef = useRef(0);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.setAttribute("data-menu-open", "true");

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) {
        return;
      }

      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );

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

  const shouldHideHeader = isHeaderHidden && !isMenuOpen;

  return (
    <header
      className={`${styles.siteHeader} ${
        shouldHideHeader ? styles.siteHeaderHidden : ""
      } text-charcoal bg-ivory sticky inset-x-0 top-0 z-20 px-[clamp(1.25rem,6vw,4.5rem)] py-6 text-[15px] font-semibold tracking-normal sm:py-7`}
    >
      <Reveal as="div" delay={0.05}>
        <nav
          aria-label="Primary navigation"
          className="flex items-center justify-between gap-6"
        >
          <Link
            href="/"
            className={styles.navLink}
            aria-label="Linear Studio home"
          >
            HOME
          </Link>

          <div className="hidden items-center gap-[clamp(1rem,3vw,3.25rem)] md:flex">
            <Link href="/#what-we-do" className={styles.navLink}>
              SERVICES
            </Link>
            <Link href="/contact" className={styles.navLink}>
              CONTACT
            </Link>
          </div>

          <button
            type="button"
            className={styles.menuButton}
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            aria-controls="site-menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <span className="flex w-7 flex-col gap-1.5" aria-hidden="true">
              <span className="h-0.5 w-full bg-current" />
              <span className="h-0.5 w-full bg-current" />
              <span className="h-0.5 w-full bg-current" />
            </span>
          </button>
        </nav>
      </Reveal>

      <AnimatePresence>
        {isMenuOpen ? (
          <>
            <m.button
              className={styles.backdrop}
              type="button"
              aria-label="Close menu"
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
              <button
                ref={closeButtonRef}
                className={styles.closeButton}
                type="button"
                aria-label="Close menu"
                onClick={closeMenu}
              >
                <span aria-hidden="true" />
              </button>

              <nav className={styles.menuNav} aria-label="Mobile navigation">
                {menuLinks.map((link) => (
                  <Link
                    className={styles.menuLink}
                    href={link.href}
                    key={link.href}
                    onClick={closeMenu}
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
