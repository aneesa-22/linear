"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { CircularText } from "./circular-text";
import styles from "./floating-talk-badge.module.css";

const BADGE_TEXT = "let’s talk • let’s talk • let’s talk • ";
const VISIBLE_ROUTES = ["/", "/privacy"];

function shouldRenderForPath(pathname: string) {
  if (pathname === "/contact" || pathname.startsWith("/contact/")) {
    return false;
  }

  return VISIBLE_ROUTES.includes(pathname) || pathname.startsWith("/services");
}

export function FloatingTalkBadge() {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const [isPastHero, setIsPastHero] = useState(false);
  const shouldRender = shouldRenderForPath(pathname);
  const isVisible = shouldReduceMotion || isPastHero;

  useEffect(() => {
    if (!shouldRender || shouldReduceMotion) {
      return;
    }

    let frame = 0;

    const updateVisibility = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const startMarker = document.querySelector<HTMLElement>(
          "[data-floating-badge-start]",
        );

        if (startMarker) {
          setIsPastHero(
            startMarker.getBoundingClientRect().top <= window.innerHeight,
          );
          return;
        }

        const hero = document.querySelector<HTMLElement>(
          "[data-floating-badge-hero]",
        );

        if (!hero) {
          setIsPastHero(window.scrollY > window.innerHeight * 0.45);
          return;
        }

        setIsPastHero(hero.getBoundingClientRect().bottom <= 0);
      });
    };

    updateVisibility();

    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, [pathname, shouldReduceMotion, shouldRender]);

  if (!shouldRender) {
    return null;
  }

  return (
    <Link
      aria-label="Let's talk"
      className={styles.badge}
      data-visible={isVisible}
      href="/contact"
    >
      <CircularText text={BADGE_TEXT} spinDuration={20} onHover="speedUp" />
      <span className={styles.centerArrow} aria-hidden="true">
        ↗
      </span>
    </Link>
  );
}
