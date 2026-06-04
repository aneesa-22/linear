import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookie-consent";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.ctaStrip}>
        <p>You don&apos;t need all the answers.</p>
        <Link className={styles.ctaLink} href="/contact">
          <span>LET&apos;S TALK</span>
          <span aria-hidden="true">↗</span>
        </Link>
      </div>

      <div className={styles.inner}>
        <div className={styles.bottomRow}>
          <a href="mailto:hello@linearstudio.co.uk">hello@linearstudio.co.uk</a>
          <nav className={styles.links} aria-label="Footer links">
            <Link href="/privacy">Privacy Policy</Link>
            <CookieSettingsButton />
            <a
              href="https://www.instagram.com/"
              rel="noreferrer"
              target="_blank"
            >
              Instagram
            </a>
            <a href="https://www.tiktok.com/" rel="noreferrer" target="_blank">
              TikTok
            </a>
          </nav>
          <p>© 2026 Linear Studio</p>
        </div>
      </div>
    </footer>
  );
}
