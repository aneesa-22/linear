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
    >
      <p id="hero-title" className={styles.intro}>
        <Reveal delay={0.18}>
          Hi, we’re Linear Studio.
          <br />
          We design websites, brands and digital experiences for businesses that
          have outgrown where they started.
        </Reveal>
      </p>

      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          <div className={styles.marqueeGroup}>{marqueeItems}</div>
          <div className={styles.marqueeGroup}>{marqueeItems}</div>
        </div>
      </div>
    </section>
  );
}
