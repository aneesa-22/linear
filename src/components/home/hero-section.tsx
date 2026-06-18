"use client";

import { useRef } from "react";
import { HeroTrack } from "@/components/hero/hero-track";
import { WhatWeDo } from "@/components/what-we-do/what-we-do";
import styles from "@/app/page.module.css";

export function HeroSection() {
  const sheetRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <HeroTrack sheetRef={sheetRef} />
      <div ref={sheetRef} className={styles.whatWeDoSheet}>
        <WhatWeDo />
      </div>
    </>
  );
}
