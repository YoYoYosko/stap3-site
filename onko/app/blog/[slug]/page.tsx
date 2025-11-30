import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { groq } from "next-sanity";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { sanityClient } from "@/lib/sanity.client";
import { Container } from "@/app/components/Container";
import { ShareButtons } from "../../components/ShareButtons";

type BlogPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  readTime?: string;
  tags?: string[];
  publishedAt?: string;
  imageUrl?: string;
  body?: any;
};

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

const POST_BY_SLUG_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    readTime,
    "tags": tags[]->title,
    publishedAt,
    "imageUrl": mainImage.asset->url,
    body
  }
`;

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-4 text-sm md:text-base text-slate-700 leading-relaxed">
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2 className="mt-8 mb-3 text-xl md:text-2xl font-semibold text-slate-800">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-6 mb-2 text-lg md:text-xl font-semibold text-slate-800">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-yellow bg-amber-50/70 px-4 py-3 text-sm md:text-base text-slate-700 italic">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-4 list-disc pl-6 text-sm md:text-base text-slate-700 space-y-1">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-4 list-decimal pl-6 text-sm md:text-base text-slate-700 space-y-1">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-slate-800">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
  },
};

export async function generateMetadata(
  { params }: BlogPostPageProps
): Promise<Metadata> {
  const { slug } = await params;

  const post = await sanityClient.fetch<BlogPost | null>(
    POST_BY_SLUG_QUERY,
    { slug }
  );

  if (!post) {
    return {
      title: "Artikel niet gevonden – Stap3",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const url = `${siteUrl}/blog/${slug}`;

  const title = `${post.title} – Stap3`;
  const description =
    post.excerpt ??
    "Praktische uitleg over ondernemen, regels en geldzaken – in gewone taal.";

  const ogImage = post.imageUrl;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      siteName: "Stap3",
      images: ogImage
        ? [
            {
              url: ogImage,
              alt: post.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  const post = await sanityClient.fetch<BlogPost | null>(
    POST_BY_SLUG_QUERY,
    { slug }
  );

  if (!post) {
    notFound();
  }

  const dateLabel = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("nl-NL", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <section className="border-b border-slate-100 bg-slate-50/60">
      <Container className="py-10 md:py-16">
        {/* breadcrumb */}
        <div className="mb-4 text-xs text-slate-500">
          <a
            href="/blog"
            className="inline-flex items-center gap-1 hover:text-orange-600"
          >
            ← Terug naar alle artikelen
          </a>
        </div>

        {/* header */}
        <header className="max-w-3xl space-y-4">
          <p className="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-orange-600">
            Artikel
          </p>

          <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
            {dateLabel && <span>{dateLabel}</span>}
            {post.readTime && (
              <>
                <span className="h-1 w-1 rounded-full bg-slate-300" />
                <span>⏱ {post.readTime}</span>
              </>
            )}
            {post.tags && post.tags.length > 0 && (
              <>
                <span className="h-1 w-1 rounded-full bg-slate-300" />
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-medium text-amber-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>

          {post.excerpt && (
            <p className="text-sm md:text-base text-slate-600 max-w-2xl">
              {post.excerpt}
            </p>
          )}
        </header>

        {/* image */}
        {post.imageUrl && (
          <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm">
            <div className="relative h-56 w-full md:h-80">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        )}

        {/* content */}
        <article className="mt-8 max-w-3xl">
          {post.body ? (
            <PortableText value={post.body} components={components} />
          ) : (
            <p className="text-sm text-slate-500">
              Dit artikel heeft nog geen inhoud.
            </p>
          )}
        </article>

        {/* share buttons onderaan */}
        <ShareButtons title={post.title} />
      </Container>
    </section>
  );
}
