import { Reveal } from "@/components/motion/reveal";
import { AnimatedButton } from "@/components/ui/animated-button";
import { HeroWordmark } from "./hero-wordmark";
import styles from "./hero.module.css";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className={`${styles.hero} bg-ivory text-charcoal relative overflow-hidden px-[clamp(1.25rem,6vw,4.5rem)] pt-28 pb-[clamp(2rem,6vh,4rem)]`}
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
          <AnimatedButton label="Let’s talk" />
        </Reveal>
      </div>

      <div className={styles.scrollArrow} aria-hidden="true">
        <span className="block animate-[hero-arrow-bounce_1.7s_ease-in-out_1.75s_infinite] text-[clamp(2.25rem,7svh,3.25rem)] leading-none motion-reduce:animate-none">
          <Reveal delay={0.65}>↓</Reveal>
        </span>
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
