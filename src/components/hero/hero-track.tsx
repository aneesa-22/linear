"use client";

import { useRef } from "react";
import { Hero } from "./hero";
import styles from "./hero-track.module.css";

type HeroTrackProps = Readonly<{
  sheetRef: React.RefObject<HTMLElement | null>;
}>;

export function HeroTrack({ sheetRef }: HeroTrackProps) {
  return (
    <div className={styles.track}>
      <div className={styles.stickyPanel}>
        <Hero sheetRef={sheetRef} />
      </div>
    </div>
  );
}
