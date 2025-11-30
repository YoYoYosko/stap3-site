"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

export type BlogPost = {
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

type Props = {
  initialPosts: BlogPost[];
};

const ALL_TAG_LABEL = "Alle";

export default function BlogCatalogClient({ initialPosts }: Props) {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string>(ALL_TAG_LABEL);
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    initialPosts.forEach((post) => {
      post.tags?.forEach((tag) => tagSet.add(tag));
    });
    return [ALL_TAG_LABEL, ...Array.from(tagSet)];
  }, [initialPosts]);

  const filteredPosts = useMemo(() => {
    let result = [...initialPosts];

    if (activeTag !== ALL_TAG_LABEL) {
      result = result.filter((post) => post.tags?.includes(activeTag));
    }

    if (search.trim()) {
      const q = search.trim().toLowerCase();
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(q) ||
          (post.excerpt || "").toLowerCase().includes(q)
      );
    }

    result.sort((a, b) => {
      const da = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
      const db = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
      return sortOrder === "newest" ? db - da : da - db;
    });

    return result;
  }, [search, activeTag, sortOrder, initialPosts]);

  return (
    <div className="space-y-4">
      {/* Filters / zoekbar */}
      <div className="space-y-4 rounded-2xl bg-white/80 p-4 md:p-5 border border-slate-200 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          {/* search */}
          <div className="relative w-full md:max-w-md">
            <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="none"
              >
                <path
                  d="M15.5 15.5L20 20"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="11"
                  cy="11"
                  r="5.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
              </svg>
            </span>
            <input
              type="search"
              placeholder="Zoek op onderwerp, bijvoorbeeld 'btw' of 'zichtbaarheid'..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-9 pr-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow focus:border-transparent"
            />
          </div>

          {/* sort-toggle */}
          <div className="inline-flex items-center justify-end gap-2 text-xs text-slate-500">
            <span>Volgorde:</span>
            <div className="inline-flex rounded-full bg-slate-100 p-1 text-xs">
              <button
                type="button"
                onClick={() => setSortOrder("newest")}
                className={`px-3 py-1 rounded-full font-medium transition ${
                  sortOrder === "newest"
                    ? "bg-yellow text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-800"
                }`}
              >
                Nieuwste eerst
              </button>
              <button
                type="button"
                onClick={() => setSortOrder("oldest")}
                className={`px-3 py-1 rounded-full font-medium transition ${
                  sortOrder === "oldest"
                    ? "bg-yellow text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-800"
                }`}
              >
                Oudste eerst
              </button>
            </div>
          </div>
        </div>

        {/* tag-bubbles */}
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => {
            const isActive = activeTag === tag;
            return (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag)}
                className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition ${
                  isActive
                    ? "border-yellow bg-yellow text-white shadow-sm"
                    : "border-slate-200 bg-white text-slate-700 hover:border-yellow/60 hover:text-slate-900"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      {/* grid met posts */}
      <div className="mt-4">
        {filteredPosts.length === 0 ? (
          <p className="text-sm text-slate-500">
            Geen artikelen gevonden. Probeer een andere zoekterm of filter.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <article
                key={post._id}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white/90 shadow-sm transition hover:-translate-y-1 hover:shadow-md hover:shadow-slate-900/5"
              >
                <div className="relative h-40 w-full bg-slate-200">
                  {post.imageUrl ? (
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center text-xs text-slate-400">
                      Geen afbeelding
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-4 space-y-3">
                  <div className="flex items-center justify-between gap-2 text-[11px] text-slate-500">
                    <span>
                      {post.publishedAt
                        ? new Date(post.publishedAt).toLocaleDateString(
                            "nl-NL",
                            {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            }
                          )
                        : "Onbekende datum"}
                    </span>
                    {post.readTime && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 font-medium">
                        ⏱ {post.readTime}
                      </span>
                    )}
                  </div>

                  <h2 className="text-base font-semibold text-slate-800 leading-snug">
                    {post.title}
                  </h2>

                  {post.excerpt && (
                    <p className="text-sm text-slate-600 line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}

                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-medium text-amber-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="pt-2">
                    <a
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-sm font-semibold text-orange-600 hover:text-orange-700"
                    >
                      Lees artikel
                      <span className="ml-1" aria-hidden="true">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
