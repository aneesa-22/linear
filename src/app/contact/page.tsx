import type { Metadata } from "next";
import { HomeContactSection } from "@/components/home/home-contact-section";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "contact",
  description:
    "Tell Linear Studio about your website, brand identity or digital project.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main aria-label="Contact Linear Studio">
      <HomeContactSection titleAs="h1" />
    </main>
  );
}
