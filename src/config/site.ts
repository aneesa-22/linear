const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const siteConfig = {
  name: "Linear Studio",
  description: "Brand-led websites. Built to be remembered.",
  url: siteUrl,
} as const;
