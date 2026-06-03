"use client";

import { useId, useState } from "react";
import styles from "./website-launch.module.css";

const faqItems = [
  {
    question: "What if I don’t have a website yet?",
    answer:
      "That is fine. We can help shape the structure, content direction, design and build from the ground up.",
  },
  {
    question: "What if I already have a Wix, Squarespace or WordPress site?",
    answer:
      "We can use what exists as context, then rebuild the experience into something clearer, faster and more aligned with your business.",
  },
  {
    question: "Will I be able to update the website myself?",
    answer:
      "Yes. If your project needs editable content, we can set up a CMS and hand over the essentials so you can manage updates yourself.",
  },
  {
    question: "Do you provide hosting?",
    answer:
      "We can recommend a reliable hosting setup and handle deployment. Hosting costs are usually paid directly by you to the provider.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We can rebuild an existing website into something clearer, more credible and better suited to where your business is now.",
  },
  {
    question: "Can you help with branding too?",
    answer:
      "Yes. Brand and identity work can be scoped separately or handled before the website if your visual foundation needs work.",
  },
  {
    question: "How long does a website project take?",
    answer:
      "Most website projects take 4–8 weeks depending on scope, content, feedback and functionality.",
  },
  {
    question: "What if I need bookings, ecommerce or custom functionality?",
    answer:
      "Those features can be scoped as optional additions so the project reflects the work involved without forcing every website into the same package.",
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
