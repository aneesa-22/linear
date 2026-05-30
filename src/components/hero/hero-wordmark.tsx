"use client";

import { useEffect, useState } from "react";
import { m, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import styles from "./hero.module.css";

const flashDelayMs = 1750;
const flashDurationMs = 650;

function isTouchViewport() {
  return window.matchMedia("(hover: none), (pointer: coarse)").matches;
}

export function HeroWordmark() {
  const shouldReduceMotion = useReducedMotion();
  const [isFlashing, setIsFlashing] = useState(false);
  const tapMotion = shouldReduceMotion
    ? {}
    : {
        whileTap: { color: "var(--color-cobalt)" },
      };

  useEffect(() => {
    if (shouldReduceMotion || !isTouchViewport()) {
      return;
    }

    const startFlash = window.setTimeout(() => {
      setIsFlashing(true);
    }, flashDelayMs);

    const stopFlash = window.setTimeout(() => {
      setIsFlashing(false);
    }, flashDelayMs + flashDurationMs);

    return () => {
      window.clearTimeout(startFlash);
      window.clearTimeout(stopFlash);
    };
  }, [shouldReduceMotion]);

  return (
    <m.div
      className={`${styles.wordmarkInteraction} ${styles.wordmarkPosition} group cursor-default`}
      data-flashing={isFlashing ? "true" : undefined}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      {...tapMotion}
    >
      <h1 id="hero-title" className={`${styles.lockup} tracking-normal`}>
        <Reveal
          delay={0.15}
          className={`${styles.line} ${styles.wordmark}`}
          contentClassName={`${styles.lineInner} ${styles.wordmarkInner}`}
        >
          linear
        </Reveal>
        <Reveal
          delay={0.27}
          className={`${styles.line} ${styles.studio}`}
          contentClassName={`${styles.lineInner} font-normal`}
        >
          studio<span className={styles.wordmarkFullStop}>.</span>
        </Reveal>
      </h1>
    </m.div>
  );
}
