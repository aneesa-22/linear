"use client";

import { useId, useState } from "react";
import styles from "./website-launch.module.css";

const faqItems = [
  {
    question: "What if I don’t have a website yet?",
    answer:
      "That is exactly what Website Launch is for. We help shape the structure, content direction, design and build from the ground up.",
  },
  {
    question: "What if I already have a Wix, Squarespace or template site?",
    answer:
      "We can use what exists as context, then rebuild the experience into something clearer, faster and more aligned with your business.",
  },
  {
    question: "Can you help me choose a domain?",
    answer:
      "Yes. We can advise on domain options, setup and launch basics so the technical side feels straightforward.",
  },
  {
    question: "Will I be able to update the website myself?",
    answer:
      "Yes. We set up a manageable CMS and hand it over with the essentials you need to keep the site current.",
  },
  {
    question: "What if I need bookings, APIs or custom functionality?",
    answer:
      "We can scope that during the strategy stage and recommend the simplest reliable approach for launch.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We stay close through handover, testing and launch support. If you need ongoing improvements, we can continue from there.",
  },
] as const;

export function WebsiteLaunchFaq() {
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
