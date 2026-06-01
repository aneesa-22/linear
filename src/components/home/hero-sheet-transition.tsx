"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import styles from "./hero-sheet-transition.module.css";

type HeroSheetTransitionProps = Readonly<{
  hero: ReactNode;
  sheet: ReactNode;
}>;

export function HeroSheetTransition({ hero, sheet }: HeroSheetTransitionProps) {
  const transitionRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: transitionRef,
    offset: ["start start", "end start"],
  });
  const sheetY = useTransform(
    scrollYProgress,
    [0, 0.18],
    ["14vh", "0vh"],
  );

  if (shouldReduceMotion) {
    return (
      <>
        {hero}
        {sheet}
      </>
    );
  }

  return (
    <div className={styles.transition} ref={transitionRef}>
      <div className={styles.heroLayer}>{hero}</div>
      <m.div className={styles.sheetLayer} style={{ y: sheetY }}>
        {sheet}
      </m.div>
    </div>
  );
}
