import type { Metadata } from "next";
import { HeroSection } from "@/components/home/hero-section";
import { HomeContactSection } from "@/components/home/home-contact-section";
import { ManifestoSection } from "@/components/home/manifesto-section";
import { createPageMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata: Metadata = createPageMetadata({
  title: "Brand identities and custom websites",
  description:
    "Linear Studio creates brand identities and custom websites for people with something to say.",
  path: "/",
});

export default function Home() {
  return (
    <main className={styles.page} aria-label="Linear Studio homepage">
      <HeroSection />

      <div className={styles.manifestoTrack}>
        <div className={styles.stickyPanel}>
          <ManifestoSection />
        </div>
      </div>

      <div className={styles.contactTrack} data-header-theme="light">
        <div className={styles.contactSheet}>
          <HomeContactSection />
        </div>
      </div>
    </main>
  );
}
