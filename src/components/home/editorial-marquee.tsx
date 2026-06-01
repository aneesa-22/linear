import styles from "./editorial-marquee.module.css";

const marqueeItems = Array.from({ length: 6 }, (_, index) => (
  <span className={styles.item} key={index}>
    LET&apos;S BUILD SOMETHING BETTER
    <span className={styles.dot} aria-hidden="true">
      •
    </span>
  </span>
));

export function EditorialMarquee() {
  return (
    <section className={styles.section} aria-label="Let's build something better">
      <div className={styles.track} aria-hidden="true">
        <div className={styles.group}>{marqueeItems}</div>
        <div className={styles.group}>{marqueeItems}</div>
      </div>
    </section>
  );
}
