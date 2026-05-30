"use client";

import { useRef } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import styles from "./what-we-do.module.css";

const services = [
  {
    number: "01",
    title: "Website Launch",
    copy: "Launch a new website from scratch. Built around your business, audience and future growth.",
  },
  {
    number: "02",
    title: "Website Evolution",
    copy: "Refine, expand and improve an existing website so it keeps pace with the business behind it.",
  },
  {
    number: "03",
    title: "Brand & Identity",
    copy: "Shape the visual and verbal foundation that makes the website feel distinct and memorable.",
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
                <div className={styles.panelContent}>
                  <span className={styles.number}>{service.number}</span>
                  <div>
                    <h2 className={styles.title}>{service.title}</h2>
                    <p className={styles.copy}>{service.copy}</p>
                  </div>
                  <span className={styles.arrow} aria-hidden="true">
                    ↗
                  </span>
                </div>
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

      <div className={styles.rows}>
        {services.map((service) => (
          <button className={styles.row} type="button" key={service.number}>
            <span className={styles.rowNumber}>{service.number}</span>
            <span className={styles.rowTitle}>{service.title}</span>
            <span className={styles.rowArrow} aria-hidden="true">
              ↗
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
