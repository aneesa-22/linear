import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { WebsiteLaunchFaq } from "./website-launch-faq";
import styles from "./website-launch.module.css";

export const metadata: Metadata = {
  title: "Website Launch",
  description:
    "A complete website, carefully designed and built to launch your business with clarity and confidence.",
};

const includedItems = [
  {
    title: "Strategy & Structure",
    description:
      "We define the right structure for your business and your audience.",
  },
  {
    title: "Design",
    description:
      "A clean, editorial design that reflects who you are and where you’re going.",
  },
  {
    title: "Development",
    description: "Fast, responsive and built for performance from day one.",
  },
  {
    title: "CMS Setup",
    description:
      "Easy to update, so you stay in control without the complexity.",
  },
  {
    title: "Launch Support",
    description:
      "We handle the handover and ensure everything is running smoothly.",
  },
] as const;

export default function WebsiteLaunchPage() {
  return (
    <main className={styles.page} aria-labelledby="service-title">
      <section className={styles.hero} aria-describedby="service-intro">
        <div className={styles.inner}>
          <Reveal as="div" delay={0.12}>
            <h1 id="service-title" className={styles.heroTitle}>
              Website
              <br />
              Launch
            </h1>
          </Reveal>

          <Reveal as="div" delay={0.24}>
            <p id="service-intro" className={styles.heroCopy}>
              A complete website, carefully designed and built to launch your
              business with clarity and confidence.
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
              Businesses ready to launch something new.
              <br />
              Startups with a clear vision.
              <br />
              Founders who want a site that does the job properly from day one.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="timeline-title">
        <div className={styles.inner}>
          <div className={styles.sectionGrid}>
            <SectionLabel id="timeline-title">TIMELINE</SectionLabel>

            <div className={styles.metricBlock}>
              <p className={styles.metric}>4–6 weeks</p>
              <p className={styles.bodySmall}>From strategy to launch.</p>
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
                <p className={styles.investmentAmount}>£1,500+</p>
                <p className={styles.bodySmall}>
                  Every project is scoped individually.
                </p>
              </div>

              <div className={styles.investmentCopy}>
                <p>
                  The final investment depends on scope, functionality and
                  content requirements.
                </p>
                <p>Most launch projects fall between £1,500 – £4,000.</p>
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

              <WebsiteLaunchFaq />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="talk-title">
        <div className={styles.inner}>
          <div className={styles.sectionGrid}>
            <SectionLabel id="talk-title">LET’S TALK</SectionLabel>

            <Link className={styles.largeCta} href="/contact">
              <span>Start your website launch</span>
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
