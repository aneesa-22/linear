import Link from "next/link";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.bottomRow}>
          <a href="mailto:hello@linearstudio.co.uk">hello@linearstudio.co.uk</a>
          <nav className={styles.links} aria-label="Footer links">
            <Link href="/privacy">Privacy Policy</Link>
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
