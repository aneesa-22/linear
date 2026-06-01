import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import styles from "../website-launch/website-launch.module.css";
import { BrandIdentityFaq } from "./brand-identity-faq";

export const metadata: Metadata = {
  title: "Brand & Identity",
  description:
    "A visual identity designed to help your business feel clearer, more memorable and more consistent wherever it appears.",
};

const includedItems = [
  {
    title: "Discovery & Positioning",
    description:
      "We explore your business, audience and goals to define the foundations of the brand.",
  },
  {
    title: "Visual Identity",
    description:
      "We create a distinctive visual direction that reflects who you are and how you want to be perceived.",
  },
  {
    title: "Typography & Colour",
    description:
      "We build a flexible visual system using typography, colour and supporting design elements.",
  },
  {
    title: "Brand Guidelines",
    description:
      "We document the system so it can be used consistently across future touchpoints.",
  },
  {
    title: "Launch Support",
    description:
      "We help apply the identity and support the transition into the new brand.",
  },
] as const;

export default function BrandIdentityPage() {
  return (
    <main className={styles.page} aria-labelledby="service-title">
      <section className={styles.hero} aria-describedby="service-intro">
        <div className={styles.inner}>
          <Reveal as="div" delay={0.12}>
            <h1
              id="service-title"
              className={`${styles.heroTitle} ${styles.heroTitleCompact}`}
            >
              Brand &
              <br />
              Identity
            </h1>
          </Reveal>

          <Reveal as="div" delay={0.24}>
            <p id="service-intro" className={styles.heroCopy}>
              A visual identity designed to help your business feel clearer,
              more memorable and more consistent wherever it appears.
            </p>
          </Reveal>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="included-title">
        <div className={styles.inner}>
          <div className={styles.sectionGrid}>
            <SectionLabel id="included-title">WHAT’S INCLUDED</SectionLabel>

            <div className={styles.includedList}>
              {includedItems.map((item) => (
                <article className={styles.includedRow} key={item.title}>
                  <h2 className={styles.includedTitle}>{item.title}</h2>
                  <p className={styles.includedDescription}>
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="perfect-for-title">
        <div className={styles.inner}>
          <div className={styles.sectionGrid}>
            <SectionLabel id="perfect-for-title">PERFECT FOR</SectionLabel>

            <p className={styles.bodyLarge}>
              New businesses building a brand from scratch.
              <br />
              Businesses that have outgrown their current identity.
              <br />
              Companies that feel inconsistent across their website, social
              channels and marketing.
              <br />
              Businesses preparing for a website redesign or relaunch.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="timeline-title">
        <div className={styles.inner}>
          <div className={styles.sectionGrid}>
            <SectionLabel id="timeline-title">TIMELINE</SectionLabel>

            <div className={styles.metricBlock}>
              <p className={styles.metric}>2–4 weeks</p>
              <p className={styles.bodySmall}>
                Depending on scope, deliverables and feedback rounds.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="investment-title">
        <div className={styles.inner}>
          <div className={styles.sectionGrid}>
            <SectionLabel id="investment-title">INVESTMENT</SectionLabel>

            <div className={styles.investmentGrid}>
              <div className={styles.investmentMain}>
                <p className={styles.investmentPrefix}>From</p>
                <p className={styles.investmentAmount}>£1,000+</p>
                <p className={styles.bodySmall}>
                  Every identity project is scoped individually.
                </p>
              </div>

              <div className={styles.investmentCopy}>
                <p>
                  Final investment depends on the depth of strategy, number of
                  deliverables and rollout requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="faq-title">
        <div className={styles.inner}>
          <div className={styles.sectionGrid}>
            <SectionLabel id="faq-title">FAQ</SectionLabel>

            <div className={styles.faqColumn}>
              <Link className={styles.inlineCta} href="/contact">
                <span>Still have questions? Let’s talk</span>
                <span aria-hidden="true">↗</span>
              </Link>

              <BrandIdentityFaq />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="talk-title">
        <div className={styles.inner}>
          <div className={styles.sectionGrid}>
            <SectionLabel id="talk-title">LET’S TALK</SectionLabel>

            <Link className={styles.largeCta} href="/contact">
              <span>Start your brand project</span>
              <span className={styles.ctaArrow} aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

type SectionLabelProps = Readonly<{
  children: string;
  id: string;
}>;

function SectionLabel({ children, id }: SectionLabelProps) {
  return (
    <div className={styles.labelWrap}>
      <span className={styles.labelRule} aria-hidden="true" />
      <p id={id} className={styles.label}>
        {children}
      </p>
    </div>
  );
}
