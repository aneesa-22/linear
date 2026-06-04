import type { Metadata } from "next";
import { ContactForm } from "./contact-form";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Linear Studio about a website, brand, or digital project.",
};

export default function ContactPage() {
  return (
    <main className={styles.page} aria-labelledby="contact-title">
      <section
        className={styles.contactSection}
        aria-describedby="contact-intro"
      >
        <div className={`${styles.inner} ${styles.contactLayout}`}>
          <aside className={styles.contactIntro}>
            <h1 id="contact-title" className={styles.title}>
              LET’S
              <br />
              TALK
            </h1>

            <p id="contact-intro" className={styles.intro}>
              Tell us a little about your project. Whether you need a website, a
              brand identity, or you’re not sure yet - we’ll help shape the next
              step.
            </p>

            <dl className={styles.introDetails}>
              <div>
                <dt>TYPICAL REPLY</dt>
                <dd>1–2 working days.</dd>
              </div>
              <div>
                <dt>PROJECTS</dt>
                <dd>From £1,100+</dd>
              </div>
            </dl>
          </aside>

          <div className={styles.formReveal}>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
