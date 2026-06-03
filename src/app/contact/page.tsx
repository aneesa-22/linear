import type { Metadata } from "next";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Linear Studio about a website, brand, or digital project.",
};

const projectTypes = ["Website", "Brand & Identity", "Not sure yet"] as const;

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
              brand identity, or you’re not sure yet — we’ll help shape the next
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
            <form className={styles.form} aria-label="Contact Linear Studio">
              <div className={styles.twoColumn}>
                <FormField id="name" label="Name" autoComplete="name" />
                <FormField
                  id="email"
                  label="Email"
                  type="email"
                  autoComplete="email"
                />
              </div>

              <FormField
                id="business"
                label="Business"
                autoComplete="organization"
              />

              <FormField
                id="website"
                label="Website (optional)"
                type="url"
                autoComplete="url"
              />

              <fieldset className={styles.projectGroup}>
                <legend className={styles.legend}>
                  What are you looking for?<br></br>
                </legend>

                <div className={styles.projectOptions}>
                  {projectTypes.map((projectType) => (
                    <label className={styles.projectOption} key={projectType}>
                      <input
                        className={styles.projectRadio}
                        type="radio"
                        name="projectType"
                        value={projectType}
                      />
                      <span>{projectType}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <label className={styles.textareaField} htmlFor="project">
                <span className={styles.label}>Tell us about your project</span>
                <textarea
                  id="project"
                  name="project"
                  className={styles.textarea}
                  rows={8}
                />
              </label>

              <div className={styles.submitArea}>
                <button className={styles.submitButton} type="submit">
                  <span>Send message</span>
                  <span className={styles.submitArrow} aria-hidden="true">
                    ↗
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

type FormFieldProps = Readonly<{
  id: string;
  label: string;
  type?: "email" | "text" | "url";
  autoComplete?: string;
}>;

function FormField({ id, label, type = "text", autoComplete }: FormFieldProps) {
  return (
    <label className={styles.field} htmlFor={id}>
      <span className={styles.label}>{label}</span>
      <input
        id={id}
        name={id}
        className={styles.input}
        type={type}
        autoComplete={autoComplete}
      />
    </label>
  );
}
