"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import {
  disableOptionalAnalytics,
  enableOptionalAnalytics,
  getCookieConsent,
  setCookieConsent,
  type CookieConsentValue,
} from "@/lib/cookie-consent";
import cookieIcon from "@/styles/icons/cookie-light.svg";
import styles from "./cookie-consent.module.css";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const consent = getCookieConsent();

      if (consent === "accepted") {
        enableOptionalAnalytics();
      }

      setIsVisible(consent === null);
      setIsReady(true);
    });

    function openSettings() {
      setIsVisible(true);
    }

    window.addEventListener("linear:open-cookie-settings", openSettings);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("linear:open-cookie-settings", openSettings);
    };
  }, []);

  function saveChoice(value: CookieConsentValue) {
    setCookieConsent(value);

    if (value === "accepted") {
      enableOptionalAnalytics();
    } else {
      disableOptionalAnalytics();
    }

    setIsVisible(false);
  }

  if (!isReady || !isVisible) return null;

  return (
    <section
      className={styles.banner}
      role="region"
      aria-labelledby="cookie-consent-title"
    >
      <span
        className={styles.icon}
        style={
          {
            "--cookie-icon": `url(${cookieIcon.src})`,
          } as CSSProperties
        }
        aria-hidden="true"
      />

      <button
        className={styles.closeButton}
        type="button"
        aria-label="Decline optional analytics cookies"
        onClick={() => saveChoice("declined")}
      >
        ×
      </button>

      <div className={styles.copy}>
        <h2 id="cookie-consent-title">We use optional analytics cookies</h2>
        <p>
          They help us understand how people use the website and improve the
          experience.
        </p>
      </div>

      <div className={styles.actions}>
        <button
          className={styles.declineButton}
          type="button"
          onClick={() => saveChoice("declined")}
        >
          Decline
        </button>
        <button
          className={styles.acceptButton}
          type="button"
          onClick={() => saveChoice("accepted")}
        >
          <span>Accept</span>
          <span aria-hidden="true">↗</span>
        </button>
      </div>
    </section>
  );
}
