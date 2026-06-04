import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import styles from "./hero.module.css";

const marqueeItems = Array.from({ length: 8 }, (_, index) => (
  <span className={styles.marqueeText} key={index}>
    LINEAR STUDIO
  </span>
));

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className={`${styles.hero} relative overflow-hidden px-[clamp(1.25rem,6vw,4.5rem)]`}
      data-floating-badge-hero
    >
      <div className={styles.content}>
        <Reveal delay={0.18}>
          <div className={styles.copy}>
            <p id="hero-title" className={styles.kicker}>
              Hi, we’re Linear Studio.
            </p>
            <p className={styles.intro}>
              We design websites, brands and
              <br />
              digital experiences for businesses
              <br />
              that have outgrown where they
              <br />
              started.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.28}>
          <Link className={styles.cta} href="/contact">
            <span>LET’S TALK</span>
            <span className={styles.ctaArrow} aria-hidden="true">
              ↗
            </span>
          </Link>
        </Reveal>
      </div>

      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          <div className={styles.marqueeGroup}>{marqueeItems}</div>
          <div className={styles.marqueeGroup}>{marqueeItems}</div>
        </div>
      </div>
    </section>
  );
}
