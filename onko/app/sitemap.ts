// app/sitemap.ts
import { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";

const BASE_URL = "https://stap3.nl"; // ← vervang dit met jouw domein

type Post = {
  slug: string;
  _updatedAt: string;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // 1. Statische pagina's → pas deze lijst aan naar jouw routes
  const staticPaths = [
    "/",          // home
    "/voorwaarden",      // over mij/ons
    "/privacy",  // services / aanbod
    "/blog",      // blog overzicht
  ];

  const staticRoutes: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${BASE_URL}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1.0 : 0.8,
  }));

  // 2. Dynamische blogposts uit Sanity
  const posts = await client.fetch<Post[]>(
    `*[_type == "post" && defined(slug.current)]{
      "slug": slug.current,
      _updatedAt
    }`
  );

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post._updatedAt),
    changeFrequency: "daily",
    priority: 0.7,
  }));

  return [...staticRoutes, ...postEntries];
}
