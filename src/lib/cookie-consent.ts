export const COOKIE_CONSENT_KEY = "linear_cookie_consent";
export const COOKIE_CONSENT_DATE_KEY = "linear_cookie_consent_date";

export type CookieConsentValue = "accepted" | "declined";

export function getCookieConsent(): CookieConsentValue | null {
  if (typeof window === "undefined") return null;

  const value = window.localStorage.getItem(COOKIE_CONSENT_KEY);

  if (value === "accepted" || value === "declined") {
    return value;
  }

  return null;
}

export function setCookieConsent(value: CookieConsentValue) {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
  window.localStorage.setItem(
    COOKIE_CONSENT_DATE_KEY,
    new Date().toISOString(),
  );
}

export function enableOptionalAnalytics() {
  if (typeof window === "undefined") return;

  // Add optional analytics initialisation here. This is intentionally empty
  // until an analytics provider is installed, so no optional cookies are set.
  window.dispatchEvent(new Event("linear:analytics-enabled"));
}

export function disableOptionalAnalytics() {
  if (typeof window === "undefined") return;

  window.dispatchEvent(new Event("linear:analytics-disabled"));
}
