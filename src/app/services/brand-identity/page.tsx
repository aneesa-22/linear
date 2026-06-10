import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { Reveal } from "@/components/motion/reveal";
import { createPageMetadata } from "@/lib/seo";
import desktopIcon from "@/styles/icons/desktop-light.svg";
import fileIcon from "@/styles/icons/file-light.svg";
import pdfIcon from "@/styles/icons/file-pdf-light.svg";
import hexagonIcon from "@/styles/icons/hexagon-light.svg";
import instagramIcon from "@/styles/icons/instagram-logo-light.svg";
import intersectSquareIcon from "@/styles/icons/intersect-square-light.svg";
import intersectThreeIcon from "@/styles/icons/intersect-three-light.svg";
import nutIcon from "@/styles/icons/nut-light.svg";
import printerIcon from "@/styles/icons/printer-light.svg";
import textAaIcon from "@/styles/icons/text-aa-light.svg";
import styles from "../website-launch/website-launch.module.css";
import { BrandIdentityFaq } from "./brand-identity-faq";

export const metadata: Metadata = createPageMetadata({
  title: "brand & identity",
  description:
    "Brand identity design for businesses that need consistency, confidence and something people remember.",
  path: "/services/brand-identity",
});

const includedItems = [
  {
    title: "Brand Discovery",
    description:
      "We learn about your business, audience, goals and competitors before making creative decisions.",
  },
  {
    title: "Creative Direction",
    description:
      "Moodboards, references and visual routes that define where the brand should go.",
  },
  {
    title: "Logo System",
    description:
      "Primary logo, secondary marks and practical variations for different uses.",
  },
  {
    title: "Colour Palette",
    description:
      "A flexible colour system built for digital, social and print.",
  },
  {
    title: "Typography",
    description:
      "Type pairings and hierarchy rules that keep everything feeling consistent.",
  },
  {
    title: "Visual Identity",
    description:
      "Graphic elements, image direction and supporting assets that make the brand feel distinct.",
  },
  {
    title: "Brand Guidelines",
    description: "A simple guide showing how everything works together.",
  },
  {
    title: "Launch Assets",
    description:
      "Exported files and ready-to-use formats for web, social and print.",
  },
  {
    title: "Support",
    description:
      "Two weeks of support after delivery for adjustments and questions.",
  },
] as const;

const receivedItems = [
  {
    title: "Primary Logo",
    icon: hexagonIcon,
  },
  {
    title: "Secondary Logo",
    icon: nutIcon,
  },
  {
    title: "Submarks",
    icon: intersectSquareIcon,
  },
  {
    title: "Colour Palette",
    icon: intersectThreeIcon,
  },
  {
    title: "Typography System",
    icon: textAaIcon,
  },
  {
    title: "Brand Guidelines",
    icon: fileIcon,
  },
  {
    title: "Social Profile Assets",
    icon: instagramIcon,
  },
  {
    title: "Website-ready Assets",
    icon: desktopIcon,
  },
  {
    title: "Print-ready Files",
    icon: printerIcon,
  },
  {
    title: "SVG, PNG, PDF & Vector Exports",
    icon: pdfIcon,
  },
] as const;

const optionalAdditions = [
  {
    title: "Website Design",
    description: "Pair the identity with custom website designs.",
  },
  {
    title: "Website Development",
    description: "Turn the designs into a live responsive website.",
  },
  {
    title: "Business Cards",
    description: "Printed collateral and stationery for your brand.",
  },
  {
    title: "Social Templates",
    description: "Branded layouts for Instagram and marketing.",
  },
  {
    title: "Copywriting",
    description: "Support writing and structuring your content.",
  },
  {
    title: "Photography Direction",
    description: "Guidance for imagery, styling and art direction.",
  },
  {
    title: "Illustration",
    description: "Custom visual elements and supporting graphics.",
  },
  {
    title: "Motion Design",
    description: "Simple animated assets and brand movement.",
  },
] as const;

export default function BrandIdentityPage() {
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
              className={`${styles.heroTitle} ${styles.websitesHeroTitle} ${styles.websitesHeroTitleCompact}`}
            >
              BRAND & IDENTITY
            </h1>
          </Reveal>

          <Reveal as="div" delay={0.2}>
            <div className={styles.websitesHeroCopy}>
              <p id="service-intro">
                A visual identity that gives your business consistency,
                confidence and something people remember.
              </p>
              <p></p>
            </div>
          </Reveal>

          <Reveal as="div" delay={0.28}>
            <dl id="service-details" className={styles.websitesMeta}>
              <div>
                <dt>FROM</dt>
                <dd>£900+</dd>
              </div>
              <div>
                <dt>TIMELINE</dt>
                <dd>2–4 WEEKS</dd>
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
        className={`${styles.section} ${styles.websitesReceiveSection}`}
        aria-labelledby="receive-title"
      >
        <div className={`${styles.inner} ${styles.websitesInner}`}>
          <SectionLabel id="receive-title">WHAT YOU RECEIVE</SectionLabel>

          <div className={styles.websitesReceiveGrid}>
            {receivedItems.map((item) => (
              <article className={styles.websitesReceiveItem} key={item.title}>
                <span
                  className={styles.websitesIconPlaceholder}
                  style={
                    {
                      "--receive-icon": `url(${item.icon.src})`,
                    } as CSSProperties
                  }
                  aria-hidden="true"
                />
                <h2>{item.title}</h2>
              </article>
            ))}
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
                <p className={styles.websitesInvestmentAmount}>£900+</p>
                <p>Every project is scoped individually.</p>
              </div>
              <div className={styles.websitesInvestmentCopy}>
                <p>
                  Most brand identity projects sit between £900–£2,500 depending
                  on scope and deliverables.
                </p>
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
        className={`${styles.section} ${styles.websitesSection}`}
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

              <BrandIdentityFaq />
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
