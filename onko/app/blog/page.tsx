import { groq } from "next-sanity";
import { sanityClient } from "@/lib/sanity.client";
import { Container } from "../components/Container";
import BlogCatalogClient, { BlogPost } from "./BlogCatalogClient";

const BLOG_POSTS_QUERY = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    readTime,
    "tags": tags[]->title,
    publishedAt,
    "imageUrl": mainImage.asset->url
  }
`;

export default async function BlogPage() {
  const posts = await sanityClient.fetch<BlogPost[]>(BLOG_POSTS_QUERY);

  return (
    <section className="border-b border-slate-100 bg-slate-50/60">
      <Container className="py-12 md:py-16 space-y-8">
        {/* header hier */}
        <BlogCatalogClient initialPosts={posts} />
      </Container>
    </section>
  );
}
