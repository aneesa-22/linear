import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

const routes = [
  {
    path: "/",
    priority: 1,
    changeFrequency: "monthly",
  },
  {
    path: "/services/website-launch",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/services/brand-identity",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/services/website-evolution",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/contact",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/privacy",
    priority: 0.3,
    changeFrequency: "yearly",
  },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
