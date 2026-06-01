"use client";

import { useState } from "react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import styles from "./how-it-starts.module.css";

const stages = [
  {
    title: "Reach Out",
    copy: "Start by telling us a little about your project, business and goals. Don’t worry about having all the answers.",
    cell: 8,
  },
  {
    title: "Discovery Call",
    copy: "We’ll talk through your business, goals, audience and vision. You can be as involved in the design process as you’d like.",
    cell: 15,
  },
  {
    title: "Project Proposal",
    copy: "We’ll create a clear proposal covering scope, timeline and investment so you know exactly what happens next.",
    cell: 23,
  },
  {
    title: "Onboarding",
    copy: "If you’re happy to move forward, we’ll get everything set up and officially begin the project.",
    cell: 30,
  },
] as const;

const cellCount = 35;
const weekdays = ["M", "T", "W", "T", "F", "S", "S"] as const;
const ease = [0.22, 1, 0.36, 1] as const;

export function HowItStarts() {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const activeStage = stages[activeIndex] ?? stages[0];

  function goToPrevious() {
    setActiveIndex((current) => Math.max(current - 1, 0));
  }

  function goToNext() {
    setActiveIndex((current) => Math.min(current + 1, stages.length - 1));
  }

  return (
    <section className={styles.section} aria-labelledby="how-it-starts-title">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <p id="how-it-starts-title" className={styles.label}>
            HOW IT STARTS
          </p>
          <p className={styles.copy}>
            A simple first step into working together. Tell us what you’re
            thinking, and we’ll help shape the next move.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.calendarPane} aria-label="Onboarding steps">
            <div className={styles.calendarHeader}>FIRST STEPS</div>

            <div className={styles.calendarGrid}>
              {weekdays.map((weekday, index) => (
                <span
                  className={styles.weekday}
                  aria-hidden="true"
                  key={`${weekday}-${index}`}
                >
                  {weekday}
                </span>
              ))}

              <div className={styles.dotGrid}>
                {Array.from({ length: cellCount }, (_, index) => {
                  const stageIndex = stages.findIndex(
                    (stage) => stage.cell === index,
                  );

                  if (stageIndex >= 0) {
                    const stage = stages[stageIndex] ?? stages[0];
                    const isActive = activeIndex === stageIndex;

                    return (
                      <button
                        className={styles.milestone}
                        type="button"
                        key={stage.title}
                        aria-label={`View ${stage.title} step`}
                        aria-pressed={isActive}
                        aria-current={isActive ? "step" : undefined}
                        onClick={() => setActiveIndex(stageIndex)}
                      >
                        <span className={styles.milestoneDot} />
                      </button>
                    );
                  }

                  return (
                    <span
                      className={styles.dotCell}
                      aria-hidden="true"
                      key={`cell-${index}`}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div className={styles.detailPane}>
            <div className={styles.controls}>
              <button
                className={styles.arrowButton}
                type="button"
                aria-label="Previous step"
                onClick={goToPrevious}
                disabled={activeIndex === 0}
              >
                ↑
              </button>
              <button
                className={styles.arrowButton}
                type="button"
                aria-label="Next step"
                onClick={goToNext}
                disabled={activeIndex === stages.length - 1}
              >
                ↓
              </button>
            </div>

            <div className={styles.stageContent} aria-live="polite">
              <span className={styles.activeMarker} aria-hidden="true" />

              {shouldReduceMotion ? (
                <div key={activeStage.title}>
                  <h2 className={styles.stageTitle}>{activeStage.title}</h2>
                  <p className={styles.stageCopy}>{activeStage.copy}</p>
                </div>
              ) : (
                <AnimatePresence mode="wait" initial={false}>
                  <m.div
                    key={activeStage.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.34, ease }}
                  >
                    <h2 className={styles.stageTitle}>{activeStage.title}</h2>
                    <p className={styles.stageCopy}>{activeStage.copy}</p>
                  </m.div>
                </AnimatePresence>
              )}
            </div>

            <p className={styles.progress}>
              {activeIndex + 1} OF {stages.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
