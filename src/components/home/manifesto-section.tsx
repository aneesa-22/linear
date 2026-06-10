import Link from "next/link";
import styles from "./manifesto-section.module.css";

export function ManifestoSection() {
  return (
    <section
      className={styles.section}
      aria-label="Linear Studio manifesto"
      data-header-theme="dark"
    >
      <div className={styles.inner}>
        <p className={styles.copy}>
          Most projects don&apos;t start with answers. They start with a
          feeling. A half-finished idea. A note in your phone. A vision that
          hasn&apos;t quite found its shape yet.
          <br />
          <br />
          That&apos;s where we come in.
          <br />
          <br />
          We help turn fragments into identities, and identities into places
          people remember.
        </p>

        <Link className={styles.cta} href="/contact">
          <span>let&apos;s talk</span>
          <span className={styles.ctaArrow} aria-hidden="true">
            ↗
          </span>
        </Link>
      </div>
    </section>
  );
}
