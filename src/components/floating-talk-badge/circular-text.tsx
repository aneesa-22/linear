"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import { m, useReducedMotion } from "framer-motion";
import styles from "./floating-talk-badge.module.css";

type CircularTextProps = Readonly<{
  text: string;
  spinDuration?: number;
  onHover?: "speedUp" | "pause" | "none";
}>;

export function CircularText({
  text,
  spinDuration = 20,
  onHover = "speedUp",
}: CircularTextProps) {
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const characters = Array.from(text);
  const hoverDuration =
    onHover === "speedUp" ? Math.max(spinDuration * 0.45, 6) : spinDuration;
  const duration = isHovered ? hoverDuration : spinDuration;
  const motionProps = shouldReduceMotion
    ? {}
    : {
        animate: { rotate: 360 },
        transition: {
          duration,
          ease: "linear" as const,
          repeat: Infinity,
          repeatType: "loop" as const,
        },
      };

  return (
    <m.span
      className={styles.circularText}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      {...motionProps}
    >
      {characters.map((character, index) => {
        const angle = (360 / characters.length) * index;

        return (
          <span
            aria-hidden="true"
            className={styles.character}
            key={`${character}-${index}`}
            style={{ "--char-angle": `${angle}deg` } as CSSProperties}
          >
            {character}
          </span>
        );
      })}
    </m.span>
  );
}
