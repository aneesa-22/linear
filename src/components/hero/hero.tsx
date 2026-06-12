"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Reveal } from "@/components/motion/reveal";
import styles from "./hero.module.css";

export function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    const wordmark = wordmarkRef.current;

    if (!content || !wordmark) {
      return;
    }

    const mobileQuery = window.matchMedia("(max-width: 767px)");

    const syncLockupWidth = () => {
      if (!mobileQuery.matches) {
        content.style.removeProperty("--hero-lockup-width");
        return;
      }

      content.style.setProperty(
        "--hero-lockup-width",
        `${Math.ceil(wordmark.getBoundingClientRect().width)}px`,
      );
    };

    const observer = new ResizeObserver(syncLockupWidth);
    observer.observe(wordmark);
    mobileQuery.addEventListener("change", syncLockupWidth);
    syncLockupWidth();

    return () => {
      observer.disconnect();
      mobileQuery.removeEventListener("change", syncLockupWidth);
    };
  }, []);

  return (
    <section
      aria-labelledby="hero-title"
      className={`${styles.hero} px-[clamp(1.25rem,6vw,4.5rem)]`}
      data-floating-badge-hero
    >
      <div ref={contentRef} className={styles.content}>
        <Reveal className={styles.wordmarkMask} delay={0.18}>
          <h1 ref={wordmarkRef} id="hero-title" className={styles.wordmark}>
            linear
          </h1>
        </Reveal>

        <Reveal className={styles.copyMask} delay={0.28}>
          <p className={styles.copy}>
            Brand identities and custom websites for people with something to
            say. The internet doesn&apos;t need another template. It needs
            something only you could make.
          </p>
        </Reveal>

        <Reveal className={styles.ctaMask} delay={0.38}>
          <Link className={styles.cta} href="/contact">
            <span>let&apos;s talk</span>
            <span className={styles.ctaArrow} aria-hidden="true">
              ↗
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
