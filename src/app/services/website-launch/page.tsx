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
        data-floating-badge-hero
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
              WEBSITES
            </h1>
          </Reveal>

          <Reveal as="div" delay={0.2}>
            <div className={styles.websitesHeroCopy}>
              <p id="service-intro">
                Custom websites designed and built for businesses that have
                outgrown where they started.
              </p>
              <p></p>
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
        data-floating-badge-start
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
        id="ongoing-support"
        className={`${styles.section} ${styles.websitesSplitSection} ${styles.websitesSupportSection}`}
        aria-labelledby="support-title"
      >
        <div className={`${styles.inner} ${styles.websitesInner}`}>
          <div
            className={`${styles.websitesSplitGrid} ${styles.websitesSupportLayout}`}
          >
            <div
              className={`${styles.websitesPanel} ${styles.websitesSupportLabel}`}
            >
              <SectionLabel id="support-title">ONGOING SUPPORT</SectionLabel>
            </div>

            <div
              className={`${styles.websitesPanel} ${styles.websitesSupportContent}`}
            >
              <div className={styles.websitesSupportIntro}>
                <h2>Your website shouldn’t be left on its own after launch.</h2>
                <p>
                  Hosting, security updates, small content changes and technical
                  support available from £70/month.
                </p>
              </div>

              <div className={styles.websitesSupportRows}>
                {supportItems.map((item) => (
                  <article
                    className={`${styles.includedRow} ${styles.websitesSupportRow}`}
                    key={item.title}
                  >
                    <h3 className={styles.includedTitle}>{item.title}</h3>
                    <p className={styles.includedDescription}>
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>

              <div className={styles.websitesSupportPrice}>
                <p>From</p>
                <strong className={styles.investmentAmount}>
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
