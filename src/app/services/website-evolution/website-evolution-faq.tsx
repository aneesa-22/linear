"use client";

import { useId, useState } from "react";
import styles from "../website-launch/website-launch.module.css";

const faqItems = [
  {
    question: "What does Website Evolution include?",
    answer:
      "It includes reviewing your current website, restructuring the experience, redesigning the interface, rebuilding the site and supporting the launch.",
  },
  {
    question: "Will you redesign the whole site?",
    answer:
      "Usually yes, but we start by understanding what is worth keeping and what needs to change. The goal is to improve the site properly, not change things for the sake of it.",
  },
  {
    question: "Will my current site stay live during the process?",
    answer:
      "Yes. Your current site can stay live while the new version is designed and built separately.",
  },
  {
    question: "Can you keep parts of my existing website?",
    answer:
      "Yes. If there are pages, content or functionality that still work well, we can keep and improve them.",
  },
  {
    question: "Can you add new functionality?",
    answer:
      "Yes. We can scope additional functionality such as booking systems, forms, CMS features, integrations or custom development if needed.",
  },
  {
    question: "What platform will my site be built on?",
    answer:
      "We choose the best-fit setup for the project and explain the reasoning clearly before development begins.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We stay around after launch to support, refine and help you move forward. Most projects do not end at launch, and neither do we.",
  },
] as const;

export function WebsiteEvolutionFaq() {
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
