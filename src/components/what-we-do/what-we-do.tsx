"use client";

import { m, useReducedMotion } from "framer-motion";
import Link from "next/link";
import styles from "./what-we-do.module.css";

const services = [
  {
    number: "01",
    titleLabel: "website design & development",
    title: (
      <>
        <span className={styles.titleDesktop} aria-hidden="true">
          website design
          <br />
          &amp; development
        </span>
        <span className={styles.titleMobile} aria-hidden="true">
          website
          <br />
          design&nbsp;&amp;
          <br />
          development
        </span>
      </>
    ),
    href: "/services/website-launch",
    description:
      "Custom websites designed and built to reflect who you are, what you do and why it matters. No templates. No shortcuts.",
    included: [
      "UX + Ul Design",
      "Custom Development",
      "Responsive Design",
      "CMS Integration",
      "On-Page SEO",
      "Launch Support",
    ],
  },
  {
    number: "02",
    titleLabel: "brand identity",
    title: "brand identity",
    href: "/services/brand-identity",
    description:
      "For people with a vision that hasn't quite found its shape yet. We create the identity systems, typography, visual language and creative direction that give an idea a world to live in.",
    included: [
      "Discovery",
      "Creative Direction",
      "Website Design",
      "Development",
      "CMS Setup",
      "Launch Support",
    ],
  },
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

function getWordOffset(index: number) {
  return ((index * 13) % 17) - 8;
}

function AnimatedCopy({ text }: { text: string }) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");

  return (
    <p className={styles.copy} aria-label={text}>
      <span aria-hidden="true">
        {words.map((word, index) => (
          <span key={`${word}-${index}`}>
            <m.span
              className={styles.copyWord}
              {...(shouldReduceMotion
                ? {}
                : {
                    initial: {
                      opacity: 0,
                      x: getWordOffset(index),
                      y: 8 + (index % 4) * 2,
                    },
                    whileInView: { opacity: 1, x: 0, y: 0 },
                    viewport: { once: true, amount: 0.7 },
                    transition: {
                      delay: 0.16 + index * 0.035,
                      duration: 0.68,
                      ease,
                    },
                  })}
            >
              {word}
            </m.span>{" "}
          </span>
        ))}
      </span>
    </p>
  );
}

function AnimatedIncludeItem({
  item,
  itemIndex,
}: {
  item: string;
  itemIndex: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const words = item.split(" ");

  return (
    <li aria-label={item}>
      <span aria-hidden="true">
        {words.map((word, wordIndex) => (
          <span key={`${item}-${word}-${wordIndex}`}>
            <m.span
              className={styles.copyWord}
              {...(shouldReduceMotion
                ? {}
                : {
                    initial: {
                      opacity: 0,
                      x: getWordOffset(itemIndex * 5 + wordIndex),
                      y: 8 + (wordIndex % 3) * 2,
                    },
                    whileInView: { opacity: 1, x: 0, y: 0 },
                    viewport: { once: true, amount: 0.72 },
                    transition: {
                      delay: 0.62 + itemIndex * 0.12 + wordIndex * 0.04,
                      duration: 0.62,
                      ease,
                    },
                  })}
            >
              {word}
            </m.span>
            {wordIndex < words.length - 1 ? " " : null}
          </span>
        ))}
      </span>
    </li>
  );
}

export function WhatWeDo() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="what-we-do"
      aria-labelledby="what-we-do-title"
      className={styles.section}
      data-floating-badge-start
    >
      <p id="what-we-do-title" className={styles.label}>
        what we do
      </p>

      <div className={styles.blocks}>
        {services.map((service, index) => (
          <div
            className={styles.panelTrack}
            key={service.number}
            style={{ zIndex: index + 1 }}
          >
            <article className={styles.layout}>
              <div className={styles.service}>
                <p className={styles.number}>{service.number}</p>
                <h2 className={styles.title} aria-label={service.titleLabel}>
                  {service.title}
                </h2>
                <Link className={styles.cta} href={service.href}>
                  <span>see what&apos;s included</span>
                  <span className={styles.ctaArrow} aria-hidden="true">
                    ↗
                  </span>
                </Link>
              </div>

              <div className={styles.rightGroup}>
                <m.div
                  className={styles.divider}
                  aria-hidden="true"
                  {...(shouldReduceMotion
                    ? {}
                    : {
                        initial: { scaleY: 0 },
                        whileInView: { scaleY: 1 },
                        viewport: { once: true, amount: 0.65 },
                        transition: { duration: 0.6, ease },
                      })}
                />

                <div className={styles.detail}>
                  <AnimatedCopy text={service.description} />

                  <ul
                    className={styles.includes}
                    aria-label={`${service.number} service includes`}
                  >
                    {service.included.map((item, itemIndex) => (
                      <AnimatedIncludeItem
                        key={item}
                        item={item}
                        itemIndex={itemIndex}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
