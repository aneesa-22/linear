"use client";

import { useRef } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import styles from "./what-we-do.module.css";

const services = [
  {
    number: "01",
    title: "Website Launch",
    copy: "For businesses launching from scratch, replacing a DIY site, or building their first proper online presence.",
    summary: "Launch a clear, credible website from the ground up.",
  },
  {
    number: "02",
    title: "Website Evolution",
    copy: "For businesses that have outgrown their current website and need something stronger, clearer and easier to maintain.",
    summary: "Refine and rebuild what is already there into something sharper.",
  },
  {
    number: "03",
    title: "Brand & Identity",
    copy: "For businesses that need a stronger visual foundation before the website is built.",
    summary:
      "Shape the visual foundation that makes the website feel distinct.",
  },
] as const;

export function WhatWeDo() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const trackX = useTransform(scrollYProgress, [0, 1], ["0%", "-66.666%"]);

  return (
    <section
      ref={sectionRef}
      aria-label="What We Do"
      className={styles.section}
    >
      <div className={styles.desktopExperience}>
        <div className={styles.stickyViewport}>
          <p id="what-we-do-title" className={styles.label}>
            WHAT WE DO
          </p>

          <m.div
            className={styles.track}
            style={{ x: shouldReduceMotion ? "0%" : trackX }}
          >
            {services.map((service) => (
              <article className={styles.panel} key={service.number}>
                <ServiceCard service={service} />
              </article>
            ))}
          </m.div>
        </div>
      </div>

      <div className={styles.staticExperience}>
        <ServiceList labelledBy="what-we-do-static-title" />
      </div>

      <div className={styles.mobileExperience}>
        <ServiceList labelledBy="what-we-do-mobile-title" />
      </div>
    </section>
  );
}

type ServiceListProps = Readonly<{
  labelledBy: string;
}>;

function ServiceList({ labelledBy }: ServiceListProps) {
  return (
    <div className={styles.list} aria-labelledby={labelledBy}>
      <p id={labelledBy} className={styles.label}>
        WHAT WE DO
      </p>

      <div className={styles.cards}>
        {services.map((service) => (
          <ServiceCard service={service} key={service.number} />
        ))}
      </div>
    </div>
  );
}

type Service = (typeof services)[number];

function ServiceCard({ service }: Readonly<{ service: Service }>) {
  return (
    <article className={styles.card} tabIndex={0}>
      <div className={styles.cardTop}>
        <span className={styles.number}>{service.number}</span>
        <span className={styles.arrow} aria-hidden="true">
          ↗
        </span>
      </div>

      <div className={styles.cardMain}>
        <h2 className={styles.title}>{service.title}</h2>
        <p className={styles.copy}>{service.copy}</p>
      </div>

      <div className={styles.cardBottom}>
        <p className={styles.summary}>{service.summary}</p>
        <span className={styles.action}>View service</span>
      </div>
    </article>
  );
}
