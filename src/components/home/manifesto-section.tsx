"use client";

import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";
import styles from "./manifesto-section.module.css";

const ease = [0.22, 1, 0.36, 1] as const;

const manifestoParts = [
  "Most projects don't start with answers. They start with a feeling. A half-finished idea. A note in your phone. A vision that hasn't quite found its shape yet.",
  "That's where we come in.",
  "We help turn fragments into identities, and identities into places people remember.",
] as const;

function getWordOffset(index: number) {
  return ((index * 11) % 17) - 8;
}

function AnimatedWords({
  text,
  delay,
  shouldReduceMotion,
}: {
  text: string;
  delay: number;
  shouldReduceMotion: boolean;
}) {
  const words = text.split(" ");

  return (
    <span className={styles.copySegment}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`}>
          <m.span
            aria-hidden="true"
            className={styles.copyWord}
            {...(shouldReduceMotion
              ? {}
              : {
                  initial: {
                    opacity: 0,
                    x: getWordOffset(index),
                    y: 10 + (index % 4) * 2,
                  },
                  transition: {
                    delay: delay + index * 0.02,
                    duration: 0.52,
                    ease,
                  },
                  viewport: { once: true, amount: 0.78 },
                  whileInView: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                  },
                })}
          >
            {word}
          </m.span>{" "}
        </span>
      ))}
    </span>
  );
}

export function ManifestoSection() {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const fullCopy = manifestoParts.join(" ");

  return (
    <section
      className={styles.section}
      aria-label="Linear Studio manifesto"
      data-header-theme="dark"
    >
      <m.div
        className={styles.inner}
        {...(shouldReduceMotion
          ? {}
          : {
              initial: { opacity: 0.94 },
              transition: { duration: 0.45, ease },
              viewport: { once: true, amount: 0.65 },
              whileInView: { opacity: 1 },
            })}
      >
        <p aria-label={fullCopy} className={styles.copy}>
          <AnimatedWords
            delay={0}
            shouldReduceMotion={shouldReduceMotion}
            text={manifestoParts[0]}
          />
          <br />
          <br />
          <AnimatedWords
            delay={0.68}
            shouldReduceMotion={shouldReduceMotion}
            text={manifestoParts[1]}
          />
          <br />
          <br />
          <AnimatedWords
            delay={0.95}
            shouldReduceMotion={shouldReduceMotion}
            text={manifestoParts[2]}
          />
        </p>

        <Link className={styles.cta} href="/contact">
          <span>let&apos;s talk</span>
          <span className={styles.ctaArrow} aria-hidden="true">
            ↗
          </span>
        </Link>
      </m.div>
    </section>
  );
}
