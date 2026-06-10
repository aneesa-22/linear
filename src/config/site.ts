const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://linearstudio.co.uk"
).replace(/\/$/, "");

export const siteConfig = {
  name: "Linear Studio",
  description:
    "Brand identities and custom websites for people with something to say.",
  url: siteUrl,
  email: "hello@linearstudio.co.uk",
  logo: `${siteUrl}/icon.svg`,
  ogImage: `${siteUrl}/opengraph-image`,
} as const;
