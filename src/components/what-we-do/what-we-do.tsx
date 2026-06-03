"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  m,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import styles from "./what-we-do.module.css";

const services = [
  {
    number: "01",
    title: "WEBSITES",
    copy: "Custom websites designed and built for businesses that have outgrown where they started.",
    summary:
      "Build a clear, credible website around where your business is going.",
    href: "/services/website-launch",
  },
  {
    number: "02",
    title: "BRAND & IDENTITY",
    copy: "For businesses that need a stronger visual foundation before the website is built.",
    summary:
      "Shape the visual foundation that makes the website feel distinct.",
    href: "/services/brand-identity",
  },
] as const;

export function WhatWeDo() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const trackX = useTransform(
    scrollYProgress,
    [0, 0.24, 0.74, 1],
    ["0%", "0%", "-50%", "-50%"],
  );

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.5) {
      setActiveStep(0);
      return;
    }

    setActiveStep(1);
  });

  useEffect(() => {
    if (shouldReduceMotion) return;

    const section = sectionRef.current;
    if (!section) return;

    const handleWheel = (e: WheelEvent) => {
      // Only intercept when there's meaningful horizontal scroll intent
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Only act when the section's sticky viewport is active
      if (rect.top > 0 || rect.bottom < viewportHeight) return;

      e.preventDefault();

      // How far into the section we currently are (in px)
      const currentScrollY = window.scrollY;
      const sectionTop = currentScrollY + rect.top;
      const scrollableRange = sectionHeight - viewportHeight;

      // Convert horizontal delta to vertical scroll
      const newScrollY = Math.max(
        sectionTop,
        Math.min(sectionTop + scrollableRange, currentScrollY + e.deltaX),
      );

      window.scrollTo({ top: newScrollY, behavior: "instant" });
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [shouldReduceMotion]);

  return (
    <section
      id="what-we-do"
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

          <ProgressIndicator activeStep={activeStep} />
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

function ProgressIndicator({ activeStep }: Readonly<{ activeStep: number }>) {
  return (
    <div
      className={styles.progress}
      role="progressbar"
      aria-label="Service section progress"
      aria-valuemin={1}
      aria-valuemax={services.length}
      aria-valuenow={activeStep + 1}
    >
      <span
        className={styles.progressNumber}
        data-active={activeStep === 0}
        aria-hidden="true"
      >
        01
      </span>
      <span className={styles.progressLine} aria-hidden="true" />
      <span
        className={styles.progressNumber}
        data-active={activeStep === 1}
        aria-hidden="true"
      >
        02
      </span>
    </div>
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
  if ("href" in service) {
    return (
      <Link
        className={styles.card}
        href={service.href}
        aria-label={`View ${service.title} service`}
      >
        <ServiceCardContent service={service} />
      </Link>
    );
  }

  return (
    <article className={styles.card} tabIndex={0}>
      <ServiceCardContent service={service} />
    </article>
  );
}

function ServiceCardContent({ service }: Readonly<{ service: Service }>) {
  return (
    <>
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
    </>
  );
}
