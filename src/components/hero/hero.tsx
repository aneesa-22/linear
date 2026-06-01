import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { HeroWordmark } from "./hero-wordmark";
import styles from "./hero.module.css";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className={`${styles.hero} bg-ivory text-charcoal relative overflow-hidden px-[clamp(1.25rem,6vw,4.5rem)]`}
    >
      <HeroWordmark />

      <p className={`${styles.supportCopy} ${styles.supportCopyPrimary}`}>
        <Reveal delay={0.42}>
          Brand-led websites.
          <br />
          Built to be remembered.
        </Reveal>
      </p>

      <div className={styles.mobileCta}>
        <Reveal as="div" delay={0.58}>
          <Link className={styles.mobileCtaLink} href="/contact">
            <span>LET’S TALK</span>
            <span className={styles.mobileCtaArrow} aria-hidden="true">
              →
            </span>
          </Link>
        </Reveal>
      </div>

      <p className={`${styles.supportCopy} ${styles.supportCopySecondary}`}>
        <Reveal delay={0.52}>
          Strategy.
          <br />
          Design.
          <br />
          Development.
        </Reveal>
      </p>
    </section>
  );
}
