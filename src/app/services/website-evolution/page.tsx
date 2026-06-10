import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { createPageMetadata } from "@/lib/seo";
import styles from "../website-launch/website-launch.module.css";
import { WebsiteEvolutionFaq } from "./website-evolution-faq";

export const metadata: Metadata = createPageMetadata({
  title: "website evolution",
  description:
    "Website evolution for businesses that have outgrown their current website and need something clearer, stronger and easier to maintain.",
  path: "/services/website-evolution",
});

const includedItems = [
  {
    title: "Audit & Direction",
    description:
      "We review your existing website, content, performance and goals to understand what needs to change.",
  },
  {
    title: "UX & Structure",
    description:
      "We reorganise the site around clearer journeys, stronger content and easier decision-making.",
  },
  {
    title: "Visual Redesign",
    description:
      "We create a refreshed interface that feels more considered, credible and aligned with your business.",
  },
  {
    title: "Development",
    description:
      "We rebuild the site with clean foundations, responsive layouts and better performance.",
  },
  {
    title: "Launch & Support",
    description:
      "We handle the transition carefully and stay around to support improvements after launch.",
  },
] as const;

export default function WebsiteEvolutionPage() {
  return (
    <main className={styles.page} aria-labelledby="service-title">
      <section
        className={styles.hero}
        data-floating-badge-hero
        aria-describedby="service-intro"
      >
        <div className={styles.inner}>
          <Reveal as="div" delay={0.12}>
            <h1
              id="service-title"
              className={`${styles.heroTitle} ${styles.heroTitleCompact}`}
            >
              Website
              <br />
              Evolution
            </h1>
          </Reveal>

          <Reveal as="div" delay={0.24}>
            <p id="service-intro" className={styles.heroCopy}>
              For businesses that have outgrown their current website and need
              something clearer, stronger and easier to maintain.
            </p>
          </Reveal>
        </div>
      </section>

      <section
        className={styles.section}
        data-floating-badge-start
        aria-labelledby="included-title"
      >
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
              Businesses with an outdated website.
              <br />
              Brands that have grown beyond their current site.
              <br />
              Teams relying on Wix, Squarespace or template setups.
              <br />
              Businesses that need a clearer, more credible online presence.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="timeline-title">
        <div className={styles.inner}>
          <div className={styles.sectionGrid}>
            <SectionLabel id="timeline-title">TIMELINE</SectionLabel>

            <div className={styles.metricBlock}>
              <p className={styles.metric}>4–8 weeks</p>
              <p className={styles.bodySmall}>
                Depending on scope, content and functionality.
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
                <p className={styles.investmentAmount}>£2,500+</p>
                <p className={styles.bodySmall}>
                  Every project is scoped individually.
                </p>
              </div>

              <div className={styles.investmentCopy}>
                <p>
                  The final investment depends on the size of the existing site,
                  functionality, content requirements and the level of rebuild
                  needed.
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

              <WebsiteEvolutionFaq />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="talk-title">
        <div className={styles.inner}>
          <div className={styles.sectionGrid}>
            <SectionLabel id="talk-title">LET’S TALK</SectionLabel>

            <Link className={styles.largeCta} href="/contact">
              <span>Start your website evolution</span>
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
