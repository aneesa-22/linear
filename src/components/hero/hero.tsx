"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { useEffect, useMemo, useState } from "react";
import { m, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import styles from "./hero.module.css";

const HERO_COPY =
  "Brand identities and custom websites for people with something to say. The internet doesn't need another template. It needs something only you could make.";

const wordmarkFonts: CSSProperties[] = [
  {
    fontFamily: '"Times New Roman", Times, serif',
    fontWeight: 400,
    letterSpacing: "-0.065em",
  },
  {
    fontFamily: '"Courier New", Courier, monospace',
    fontWeight: 400,
    letterSpacing: "-0.11em",
  },
  {
    fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
    fontWeight: 400,
    letterSpacing: "-0.08em",
  },
  {
    fontFamily: "Impact, Haettenschweiler, sans-serif",
    fontWeight: 400,
    letterSpacing: "-0.04em",
  },
  {
    fontFamily: "Futura, 'Trebuchet MS', Arial, sans-serif",
    fontWeight: 500,
    letterSpacing: "-0.075em",
  },
  {
    fontFamily: '"Alte Haas Grotesk", Helvetica, Arial, system-ui, sans-serif',
    fontWeight: 400,
    letterSpacing: "-0.065em",
  },
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [fontStep, setFontStep] = useState<number | null>(0);
  const [copyAnimationFinished, setCopyAnimationFinished] = useState(false);
  const copyWords = useMemo(() => HERO_COPY.split(" "), []);
  const activeFontStep = shouldReduceMotion ? null : fontStep;
  const copySettled = Boolean(shouldReduceMotion) || copyAnimationFinished;

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    let step = 0;
    const interval = window.setInterval(() => {
      step += 1;

      if (step >= wordmarkFonts.length) {
        window.clearInterval(interval);
        setFontStep(null);
        return;
      }

      setFontStep(step);
    }, 180);

    return () => {
      window.clearInterval(interval);
    };
  }, [shouldReduceMotion]);

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setCopyAnimationFinished(true);
    }, 1900);

    return () => window.clearTimeout(timeout);
  }, [shouldReduceMotion]);

  return (
    <section
      aria-labelledby="hero-title"
      className={`${styles.hero} px-[clamp(1.25rem,6vw,4.5rem)]`}
      data-floating-badge-hero
    >
      <div className={styles.content}>
        <div className={styles.wordmarkMask}>
          <h1
            id="hero-title"
            className={styles.wordmark}
            style={
              activeFontStep === null ? undefined : wordmarkFonts[activeFontStep]
            }
          >
            linear
          </h1>
        </div>

        <div className={styles.copyMask}>
          <p
            className={`${styles.copy} ${
              copySettled ? "" : styles.copyWaiting
            }`}
          >
            {HERO_COPY}
          </p>

          {!copySettled && !shouldReduceMotion ? (
            <p className={`${styles.copy} ${styles.copyOverlay}`} aria-hidden>
              {copyWords.map((word, index) => (
                <span key={`${word}-${index}`}>
                  <m.span
                    className={styles.copyWord}
                    {...(shouldReduceMotion
                      ? {}
                      : {
                          initial: {
                            opacity: 0,
                            x: index % 2 === 0 ? -10 : 10,
                            y: 8,
                          },
                          animate: { opacity: 1, x: 0, y: 0 },
                          transition: {
                            delay: 0.72 + index * 0.025,
                            duration: 0.54,
                            ease: [0.22, 1, 0.36, 1],
                          },
                    })}
                  >
                    {word}
                  </m.span>{" "}
                </span>
              ))}
            </p>
          ) : null}
        </div>

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
