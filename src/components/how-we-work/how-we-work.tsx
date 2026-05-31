"use client";

import { useId, useRef, useState } from "react";
import type { MotionValue } from "framer-motion";
import {
  m,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import styles from "./how-we-work.module.css";

const steps = [
  {
    number: "01",
    title: "Understand",
    paragraphs: [
      "Before layouts, colours or code, we start by understanding the business behind the website.",
      "We look at your goals, audience, competitors and the challenges standing in the way of growth. The aim isn't to make something that simply looks better - it's to build something that works harder for your business.",
    ],
    covers: [
      "Business goals",
      "Audience research",
      "Existing website review",
      "Content gaps",
      "Project direction",
    ],
  },
  {
    number: "02",
    title: "Shape",
    paragraphs: [
      "Once we understand the problem, we shape the solution.",
      "We define structure, content and direction before visuals. This is where the website starts becoming a clear system instead of a collection of random pages.",
    ],
    covers: [
      "Sitemap planning",
      "User journeys",
      "Page structure",
      "Content direction",
      "Wireframes",
    ],
  },
  {
    number: "03",
    title: "Build",
    paragraphs: [
      "With the foundations in place, we turn the strategy into a real website.",
      "Design and development work together from the start, so the final site feels considered, responsive, fast and built around how people actually use it.",
    ],
    covers: [
      "Visual design",
      "Responsive layouts",
      "Development",
      "CMS setup if needed",
      "Performance basics",
    ],
  },
  {
    number: "04",
    title: "Launch",
    paragraphs: [
      "Before anything goes live, we test, refine and prepare everything properly.",
      "We check responsiveness, functionality, performance and content so the launch feels smooth instead of rushed.",
    ],
    covers: [
      "QA testing",
      "Browser checks",
      "Performance checks",
      "Domain setup",
      "Go-live support",
    ],
  },
  {
    number: "05",
    title: "Support",
    paragraphs: [
      "Most projects don't end at launch.",
      "Neither do we.",
      "As your business grows, your website should grow with it. Whether it's content updates, new pages, small improvements or technical guidance, we stay around to support what comes next.",
    ],
    covers: [
      "Post-launch support",
      "Content updates",
      "New pages",
      "Website improvements",
      "Technical guidance",
    ],
  },
] as const;

const easing = [0.22, 1, 0.36, 1] as const;

export function HowWeWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (shouldReduceMotion) {
      return;
    }

    const nextStep = Math.min(
      steps.length - 1,
      Math.max(0, Math.floor(latest * steps.length)),
    );

    setActiveStep((currentStep) =>
      currentStep === nextStep ? currentStep : nextStep,
    );
  });

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="how-we-work-title"
    >
      <div className={styles.desktopExperience}>
        <div className={styles.stickyViewport}>
          <div className={styles.shell}>
            <p id="how-we-work-title" className={styles.label}>
              HOW WE WORK
            </p>

            <div className={styles.desktopDeck}>
              <div className={styles.deckHeaders} aria-hidden="true">
                {steps.map((step, index) => (
                  <DesktopDeckHeader
                    index={index}
                    key={step.number}
                    progress={scrollYProgress}
                    shouldReduceMotion={shouldReduceMotion}
                    step={step}
                  />
                ))}
              </div>

              <div className={styles.deckSheetStage}>
                {steps.map((step, index) => (
                  <DesktopDeckSheet
                    activeStep={activeStep}
                    index={index}
                    key={step.number}
                    progress={scrollYProgress}
                    shouldReduceMotion={shouldReduceMotion}
                    step={step}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.staticExperience}>
        <StaticSteps labelledBy="how-we-work-static-title" />
      </div>

      <div className={styles.mobileExperience}>
        <MobileSteps />
      </div>
    </section>
  );
}

type Step = (typeof steps)[number];

type DesktopDeckHeaderProps = Readonly<{
  index: number;
  progress: MotionValue<number>;
  shouldReduceMotion: boolean | null;
  step: Step;
}>;

function DesktopDeckHeader({
  index,
  progress,
  shouldReduceMotion,
  step,
}: DesktopDeckHeaderProps) {
  const isFinalStep = index === steps.length - 1;
  const revealStart = isFinalStep
    ? 0
    : Math.min(1, Math.max(0, (index + 0.55) / steps.length));
  const revealEnd = isFinalStep
    ? 1
    : Math.min(1, Math.max(0, (index + 1) / steps.length));
  const maxHeight = useTransform(
    progress,
    [revealStart, revealEnd],
    isFinalStep ? ["0rem", "0rem"] : ["0rem", "4.85rem"],
  );
  const paddingY = useTransform(
    progress,
    [revealStart, revealEnd],
    isFinalStep ? ["0rem", "0rem"] : ["0rem", "0.9rem"],
  );
  const opacity = useTransform(
    progress,
    [revealStart, revealEnd],
    isFinalStep ? [0, 0] : [0, 1],
  );

  return (
    <m.div
      className={styles.deckHeader}
      style={{
        maxHeight: shouldReduceMotion ? "0rem" : maxHeight,
        opacity: shouldReduceMotion ? 0 : opacity,
        paddingBottom: shouldReduceMotion ? "0rem" : paddingY,
        paddingTop: shouldReduceMotion ? "0rem" : paddingY,
      }}
    >
      <span className={styles.stepNumber}>{step.number}</span>
      <span className={styles.deckHeaderTitle}>{step.title}</span>
    </m.div>
  );
}

type DesktopDeckSheetProps = Readonly<{
  activeStep: number;
  index: number;
  progress: MotionValue<number>;
  shouldReduceMotion: boolean | null;
  step: Step;
}>;

function DesktopDeckSheet({
  activeStep,
  index,
  progress,
  shouldReduceMotion,
  step,
}: DesktopDeckSheetProps) {
  const segmentStart = Math.max(0, (index - 0.45) / steps.length);
  const segmentEnd = Math.max(0, index / steps.length);
  const isFinalStep = index === steps.length - 1;
  const collapseStart = isFinalStep
    ? 0
    : Math.min(1, Math.max(0, (index + 0.55) / steps.length));
  const collapseEnd = isFinalStep
    ? 1
    : Math.min(1, Math.max(0, (index + 1) / steps.length));
  const y = useTransform(
    progress,
    [segmentStart, segmentEnd],
    index === 0 ? ["0vh", "0vh"] : ["100vh", "0vh"],
  );
  const contentOpacity = useTransform(
    progress,
    [collapseStart, collapseEnd],
    isFinalStep ? [1, 1] : [1, 0],
  );
  const contentY = useTransform(
    progress,
    [collapseStart, collapseEnd],
    isFinalStep ? ["0rem", "0rem"] : ["0rem", "-1rem"],
  );

  return (
    <m.article
      aria-hidden={index !== activeStep}
      className={styles.deckSheet}
      style={{
        y: shouldReduceMotion ? "0%" : y,
        zIndex: index + 1,
      }}
    >
      <m.header
        className={styles.sheetHeader}
        style={{
          opacity: shouldReduceMotion ? 1 : contentOpacity,
          y: shouldReduceMotion ? "0rem" : contentY,
        }}
      >
        <span className={styles.stepNumber}>{step.number}</span>
        <h2 className={styles.sheetTitle}>{step.title}</h2>
      </m.header>

      <m.div
        className={styles.sheetBody}
        style={{
          opacity: shouldReduceMotion ? 1 : contentOpacity,
          y: shouldReduceMotion ? "0rem" : contentY,
        }}
      >
        <StepContent step={step} />
      </m.div>
    </m.article>
  );
}

function StepContent({ step }: Readonly<{ step: Step }>) {
  return (
    <div className={styles.contentGrid}>
      <div className={styles.copy}>
        {step.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className={styles.coverage}>
        <p className={styles.coverageTitle}>What we cover:</p>
        <ul className={styles.coverageList}>
          {step.covers.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function StaticSteps({ labelledBy }: Readonly<{ labelledBy: string }>) {
  return (
    <div className={styles.listLayout} aria-labelledby={labelledBy}>
      <p id={labelledBy} className={styles.label}>
        HOW WE WORK
      </p>

      <div className={styles.staticRows}>
        {steps.map((step) => (
          <article className={styles.staticStep} key={step.number}>
            <header className={styles.stepHeader}>
              <span className={styles.stepNumber}>{step.number}</span>
              <h2 className={styles.stepTitle}>{step.title}</h2>
            </header>
            <div className={styles.staticBody}>
              <StepContent step={step} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function MobileSteps() {
  const headingId = useId();
  const [openStep, setOpenStep] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={styles.listLayout} aria-labelledby={headingId}>
      <p id={headingId} className={styles.label}>
        HOW WE WORK
      </p>

      <div className={styles.mobileRows}>
        {steps.map((step, index) => {
          const isOpen = index === openStep;
          const panelId = `${headingId}-${step.number}`;

          return (
            <article className={styles.mobileStep} key={step.number}>
              <button
                type="button"
                className={styles.mobileTrigger}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenStep(index)}
              >
                <span className={styles.stepNumber}>{step.number}</span>
                <span className={styles.mobileTitle}>{step.title}</span>
              </button>

              <m.div
                id={panelId}
                className={styles.mobilePanel}
                initial={false}
                animate={{
                  height: isOpen ? "auto" : 0,
                  opacity: isOpen ? 1 : 0,
                }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { duration: 0.42, ease: easing }
                }
                aria-hidden={!isOpen}
              >
                <div className={styles.mobilePanelInner}>
                  <StepContent step={step} />
                </div>
              </m.div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
