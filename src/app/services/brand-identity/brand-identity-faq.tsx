"use client";

import { useId, useState } from "react";
import styles from "../website-launch/website-launch.module.css";

const faqItems = [
  {
    question: "Can you redesign an existing brand?",
    answer:
      "Yes. We can refine and evolve an existing brand while keeping the parts that still work.",
  },
  {
    question: "Do I need a logo already?",
    answer:
      "No. We can create a new identity from scratch or evolve an existing one.",
  },
  {
    question: "How many concepts are included?",
    answer:
      "We explore a focused set of creative directions, then develop the strongest route into a complete identity system.",
  },
  {
    question: "Will I own all the files?",
    answer:
      "Yes. Once the project is complete and paid for, you receive the final approved brand files for your business to use.",
  },
  {
    question: "Can you build my website afterwards?",
    answer:
      "Yes. Brand identity and website work can sit together, or the website can begin once the identity foundation is ready.",
  },
  {
    question: "Can I use the branding on social media and print?",
    answer:
      "Yes. The identity is built to work across digital, social and print, with files and guidance for common uses.",
  },
  {
    question: "What happens if I need changes later?",
    answer:
      "We include two weeks of support after delivery, and further changes or rollout support can be scoped separately.",
  },
  {
    question: "Can we start with branding and add the website later?",
    answer:
      "Yes. Starting with the brand first is often the clearest route, especially if the website needs to feel more consistent and confident.",
  },
] as const;

export function BrandIdentityFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();

  return (
    <div className={styles.faqList}>
      {faqItems.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${baseId}-question-${index}`;
        const panelId = `${baseId}-answer-${index}`;

        return (
          <div className={styles.faqItem} key={item.question}>
            <button
              id={buttonId}
              className={styles.faqButton}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span>{item.question}</span>
              <span className={styles.faqIcon} aria-hidden="true">
                <span className={styles.faqIconLine} />
                <span
                  className={styles.faqIconLine}
                  data-open={isOpen ? "true" : "false"}
                />
              </span>
            </button>

            <div
              id={panelId}
              className={styles.faqPanel}
              role="region"
              aria-labelledby={buttonId}
              data-open={isOpen ? "true" : "false"}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
