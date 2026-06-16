import Link from "next/link";
import styles from "./what-we-do.module.css";

const services = [
  {
    number: "01",
    titleLabel: "website design & development",
    title: (
      <>
        <span className={styles.titleDesktop} aria-hidden="true">
          website design
          <br />
          &amp; development
        </span>
        <span className={styles.titleMobile} aria-hidden="true">
          website
          <br />
          design&nbsp;&amp;
          <br />
          development
        </span>
      </>
    ),
    href: "/services/website-launch",
    description:
      "Custom websites designed and built to reflect who you are, what you do and why it matters. No templates. No shortcuts.",
    included: [
      "UX + Ul Design",
      "Custom Development",
      "Responsive Design",
      "CMS Integration",
      "On-Page SEO",
      "Launch Support",
    ],
  },
  {
    number: "02",
    titleLabel: "brand identity",
    title: "brand identity",
    href: "/services/brand-identity",
    description:
      "For people with a vision that hasn't quite found its shape yet. We create the identity systems, typography, visual language and creative direction that give an idea a world to live in.",
    included: [
      "Discovery",
      "Creative Direction",
      "Website Design",
      "Development",
      "CMS Setup",
      "Launch Support",
    ],
  },
] as const;

export function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      aria-labelledby="what-we-do-title"
      className={styles.section}
      data-floating-badge-start
    >
      <p id="what-we-do-title" className={styles.label}>
        what we do
      </p>

      <div className={styles.blocks}>
        {services.map((service, index) => (
          <div
            className={styles.panelTrack}
            key={service.number}
            style={{ zIndex: index + 1 }}
          >
            <article className={styles.layout}>
              <div className={styles.service}>
                <p className={styles.number}>{service.number}</p>
                <h2 className={styles.title} aria-label={service.titleLabel}>
                  {service.title}
                </h2>
                <Link className={styles.cta} href={service.href}>
                  <span>see what&apos;s included</span>
                  <span className={styles.ctaArrow} aria-hidden="true">
                    ↗
                  </span>
                </Link>
              </div>

              <div className={styles.rightGroup}>
                <div className={styles.divider} aria-hidden="true" />

                <div className={styles.detail}>
                  <p className={styles.copy}>{service.description}</p>

                  <ul
                    className={styles.includes}
                    aria-label={`${service.number} service includes`}
                  >
                    {service.included.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
