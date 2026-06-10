import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import styles from "./hero.module.css";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className={`${styles.hero} px-[clamp(1.25rem,6vw,4.5rem)]`}
      data-floating-badge-hero
    >
      <div className={styles.content}>
        <Reveal className={styles.wordmarkMask} delay={0.18}>
          <h1 id="hero-title" className={styles.wordmark}>
            linear
          </h1>
        </Reveal>

        <Reveal className={styles.copyMask} delay={0.28}>
          <p className={styles.copy}>
            Brand identities and custom websites for people with something to
            say. The internet doesn&apos;t need another template. It needs
            something only you could make.
          </p>
        </Reveal>

        <Reveal delay={0.38}>
          <Link className={styles.cta} href="/contact">
            <span>let&apos;s talk</span>
            <span className={styles.ctaArrow} aria-hidden="true">
              ↗
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
