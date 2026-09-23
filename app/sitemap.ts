import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { practiceAreas } from "@/lib/practiceAreas";
import { posts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.domain;
  const staticRoutes = ["", "/about", "/personal-injury", "/blog", "/contact", "/privacy-policy"];

  return [
    ...staticRoutes.map((route) => ({
      url: `${base}${route}`,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...practiceAreas.map((pa) => ({
      url: `${base}/personal-injury/${pa.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...posts.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
