"use client";

import { useId, useState } from "react";
import styles from "../website-launch/website-launch.module.css";

const faqItems = [
  {
    question: "What is included in a brand identity?",
    answer:
      "A complete visual system including identity direction, typography, colour and supporting assets.",
  },
  {
    question: "Do I need a logo already?",
    answer:
      "No. We can create a new identity from scratch or evolve an existing one.",
  },
  {
    question: "Will I receive brand guidelines?",
    answer:
      "Yes. Every project includes guidance on how the identity should be used consistently.",
  },
  {
    question: "Can you redesign an existing identity?",
    answer:
      "Yes. We can refine and evolve an existing brand while keeping the parts that still work.",
  },
  {
    question: "Can this be combined with a website project?",
    answer:
      "Absolutely. Many website projects begin with a brand identity phase first.",
  },
  {
    question: "What files will I receive?",
    answer:
      "You will receive all final logo files, colour specifications, typography recommendations and supporting brand assets.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We remain available to support implementation and help the identity grow alongside the business.",
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
