import { ContactForm } from "@/app/contact/contact-form";
import styles from "./home-contact-section.module.css";

type HomeContactSectionProps = Readonly<{
  titleAs?: "h1" | "h2";
}>;

export function HomeContactSection({
  titleAs: Title = "h2",
}: HomeContactSectionProps) {
  return (
    <section
      id="contact"
      className={styles.section}
      aria-labelledby="home-contact-title"
      data-header-theme="light"
    >
      <div className={styles.inner}>
        <div className={styles.layout}>
          <div className={styles.intro}>
            <Title id="home-contact-title" className={styles.title}>
              <span>tell us what</span>
              <span>you&rsquo;re</span>
              <span>thinking</span>
            </Title>

            <div className={styles.supportingCopy}>
              <p>
                whether it&apos;s a new idea, a rebrand or a website that no
                longer feels like you.
              </p>
              <p>fill in your details and we will be in touch.</p>
            </div>
          </div>

          <div className={styles.divider} aria-hidden="true" />

          <div className={styles.formColumn}>
            <ContactForm lowercase />
          </div>
        </div>
      </div>
    </section>
  );
}
