import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { WebsiteLaunchFaq } from "./website-launch-faq";
import styles from "./website-launch.module.css";

export const metadata: Metadata = {
  title: "Websites",
  description:
    "Custom websites designed and built for businesses that have outgrown where they started.",
};

const includedItems = [
  {
    title: "Discovery",
    description:
      "We learn about your business, audience and goals before any design work begins.",
  },
  {
    title: "Site Structure",
    description:
      "Page planning, navigation and content hierarchy designed around how people actually use your website.",
  },
  {
    title: "Custom Design",
    description:
      "A bespoke visual direction built around your business. No templates and no page builders.",
  },
  {
    title: "Development",
    description:
      "Built responsively for desktop, tablet and mobile with performance in mind.",
  },
  {
    title: "SEO Foundations",
    description:
      "Metadata, page structure, indexing and technical setup to help your site get found.",
  },
  {
    title: "Forms & Enquiries",
    description:
      "Contact forms and enquiry flows connected directly to your business.",
  },
  {
    title: "CMS",
    description:
      "Content management setup where appropriate so you can edit content yourself.",
  },
  {
    title: "Launch",
    description: "Domain connection, deployment, testing and handover.",
  },
  {
    title: "Aftercare",
    description:
      "14 days of support after launch for fixes, questions and adjustments.",
  },
] as const;

const perfectForItems = [
  "Businesses with no website yet.",
  "Businesses stuck on Wix, Squarespace or WordPress templates.",
  "Businesses that have grown beyond their current site.",
  "Founders who want something custom, credible and professional.",
] as const;

const processItems = [
  {
    number: "01",
    title: "Discover",
    description: "We learn about your business, audience and goals.",
  },
  {
    number: "02",
    title: "Plan",
    description: "We map the structure, content and user experience.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We create a visual direction that feels clear, distinctive and on-brand.",
  },
  {
    number: "04",
    title: "Build",
    description:
      "We develop your website with clean code and performance in mind.",
  },
  {
    number: "05",
    title: "Launch",
    description: "We test, deploy and hand over everything properly.",
  },
] as const;

const optionalAdditions = [
  {
    title: "Brand & Identity",
    description: "Logo, colour, typography and visual direction.",
  },
  {
    title: "E-commerce",
    description: "Sell products or services online.",
  },
  {
    title: "Logo Design",
    description: "A refined mark or wordmark for your business.",
  },
  {
    title: "Custom Integrations",
    description: "Bespoke features, APIs, automations or third-party tools.",
  },
  {
    title: "Copywriting",
    description: "Support writing and structuring your website content.",
  },
  {
    title: "Additional Pages",
    description: "Extra pages outside the agreed project scope.",
  },
  {
    title: "Booking Systems",
    description: "Let customers book directly through your website.",
  },
  {
    title: "Ongoing Support",
    description: "Monthly care, updates and small improvements after launch.",
  },
] as const;

const supportItems = [
  {
    title: "Hosting",
    description: "Reliable hosting setup and management.",
  },
  {
    title: "Security Updates",
    description: "Regular updates to keep your website protected.",
  },
  {
    title: "Backups",
    description: "Backups in place so your site can be restored if needed.",
  },
  {
    title: "Small Content Edits",
    description: "Minor text, image or content updates included each month.",
  },
  {
    title: "Technical Support",
    description: "Help with small issues, questions and website maintenance.",
  },
] as const;

export default function WebsitesPage() {
  return (
    <main
      className={`${styles.page} ${styles.websitesPage}`}
      aria-labelledby="service-title"
    >
      <section
        className={`${styles.hero} ${styles.websitesHero}`}
        aria-describedby="service-intro service-details"
      >
        <div
          className={`${styles.inner} ${styles.websitesInner} ${styles.websitesHeroInner}`}
        >
          <Reveal as="div" delay={0.12}>
            <h1
              id="service-title"
              className={`${styles.heroTitle} ${styles.websitesHeroTitle}`}
            >
              Websites
            </h1>
          </Reveal>

          <Reveal as="div" delay={0.2}>
            <div className={styles.websitesHeroCopy}>
              <p id="service-intro">
                Custom websites designed and built for businesses that have
                outgrown where they started.
              </p>
              <p>
                Whether you’re starting from scratch, replacing a template, or
                rebuilding a site that no longer reflects where you’re going.
              </p>
            </div>
          </Reveal>

          <Reveal as="div" delay={0.28}>
            <dl id="service-details" className={styles.websitesMeta}>
              <div>
                <dt>FROM</dt>
                <dd>£1,100+</dd>
              </div>
              <div>
                <dt>TIMELINE</dt>
                <dd>4–8 WEEKS</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.websitesSection}`}
        aria-labelledby="included-title"
      >
        <div className={`${styles.inner} ${styles.websitesInner}`}>
          <div className={styles.websitesSectionGrid}>
            <SectionLabel id="included-title">WHAT’S INCLUDED</SectionLabel>

            <div className={styles.websitesIncludedGrid}>
              {includedItems.map((item) => (
                <article
                  className={styles.websitesIncludedItem}
                  key={item.title}
                >
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.websitesSplitSection}`}
        aria-label="Who the service is for and how the process works"
      >
        <div className={`${styles.inner} ${styles.websitesInner}`}>
          <div className={styles.websitesSplitGrid}>
            <div className={styles.websitesPanel}>
              <SectionLabel id="perfect-for-title">PERFECT FOR</SectionLabel>
              <ul
                className={styles.websitesRows}
                aria-labelledby="perfect-for-title"
              >
                {perfectForItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={styles.websitesPanel}>
              <SectionLabel id="process-title">THE PROCESS</SectionLabel>
              <ol
                className={styles.websitesProcess}
                aria-labelledby="process-title"
              >
                {processItems.map((item) => (
                  <li key={item.number}>
                    <span>{item.number}</span>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.websitesSplitSection}`}
        aria-label="Investment and optional additions"
      >
        <div className={`${styles.inner} ${styles.websitesInner}`}>
          <div className={styles.websitesSplitGrid}>
            <div
              className={`${styles.websitesPanel} ${styles.websitesInvestment}`}
            >
              <SectionLabel id="investment-title">INVESTMENT</SectionLabel>
              <div aria-labelledby="investment-title">
                <p className={styles.websitesInvestmentPrefix}>From</p>
                <p className={styles.websitesInvestmentAmount}>£1,100+</p>
              </div>
              <div className={styles.websitesInvestmentCopy}>
                <p>
                  Most projects sit between £1,100–£3,500 depending on scope,
                  content and functionality.
                </p>
                <p>Every project is scoped individually.</p>
              </div>
            </div>

            <div className={styles.websitesPanel}>
              <SectionLabel id="optional-title">
                OPTIONAL ADDITIONS
              </SectionLabel>
              <p className={styles.websitesOptionalIntro}>
                Add what your project needs. These are scoped separately so your
                quote reflects the work involved.
              </p>
              <div
                className={styles.websitesOptionalGrid}
                aria-labelledby="optional-title"
              >
                {optionalAdditions.map((item) => (
                  <article key={item.title}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.websitesSupportSection}`}
        aria-labelledby="support-title"
      >
        <div className={`${styles.inner} ${styles.websitesInner}`}>
          <div className={styles.websitesSupportLayout}>
            <div className={styles.websitesSupportLabel}>
              <SectionLabel id="support-title">ONGOING SUPPORT</SectionLabel>
            </div>

            <div className={styles.websitesSupportContent}>
              <div className={styles.websitesSupportIntro}>
                <h2>Your website shouldn’t be left on its own after launch.</h2>
                <p>
                  Hosting, security updates, small content changes and technical
                  support available from £70/month.
                </p>
              </div>

              <div className={styles.websitesSupportRows}>
                {supportItems.map((item) => (
                  <article key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>

              <div className={styles.websitesSupportPrice}>
                <p>From</p>
                <strong>
                  £70<span>/month</span>
                </strong>
                <p>Available after launch. Cancel anytime.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.websitesSection} ${styles.websitesFaqSection}`}
        aria-labelledby="faq-title"
      >
        <div className={`${styles.inner} ${styles.websitesInner}`}>
          <div className={styles.websitesSectionGrid}>
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
