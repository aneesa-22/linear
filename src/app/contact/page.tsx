import type { Metadata } from "next";
import { Reveal } from "@/components/motion/reveal";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Linear Studio about a website, brand, or digital project.",
};

const projectTypes = [
  "Website Launch",
  "Website Evolution",
  "Brand & Identity",
  "Not sure yet",
] as const;

export default function ContactPage() {
  return (
    <main className={styles.page} aria-labelledby="contact-title">
      <section className={styles.hero} aria-describedby="contact-intro">
        <div className={styles.inner}>
          <Reveal as="div" delay={0.12}>
            <h1 id="contact-title" className={styles.title}>
              GET IN TOUCH
            </h1>
          </Reveal>

          <Reveal as="div" delay={0.22}>
            <p id="contact-intro" className={styles.intro}>
              Not sure where to start?
              <br />
              That’s normal.
              <br />
              We’ll figure it out together.
            </p>
          </Reveal>

          <Reveal as="div" delay={0.34} className={styles.formReveal}>
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
                label="Current website (optional)"
                type="url"
                autoComplete="url"
              />

              <fieldset className={styles.radioGroup}>
                <legend className={styles.legend}>
                  What are you looking for?
                </legend>

                <div className={styles.radioOptions}>
                  {projectTypes.map((projectType) => (
                    <label className={styles.radioOption} key={projectType}>
                      <input
                        className={styles.radio}
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
                  rows={6}
                />
              </label>

              <div className={styles.submitBlock}>
                <p className={styles.submitPrompt}>Ready when you are.</p>
                <button className={styles.submit} type="submit">
                  <span>Send enquiry</span>
                  <span className={styles.submitArrow} aria-hidden="true">
                    →
                  </span>
                </button>
              </div>
            </form>
          </Reveal>
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
