"use client";

import styles from "./cookie-settings-button.module.css";

export function CookieSettingsButton() {
  return (
    <button
      className={styles.button}
      type="button"
      onClick={() => {
        window.dispatchEvent(new Event("linear:open-cookie-settings"));
      }}
    >
      Cookie Settings
    </button>
  );
}
