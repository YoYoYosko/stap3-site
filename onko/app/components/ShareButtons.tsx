"use client";

import { useEffect, useState } from "react";

type ShareButtonsProps = {
  title: string;
};

export function ShareButtons({ title }: ShareButtonsProps) {
  const [shareUrl, setShareUrl] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareUrl(window.location.href);
    }
  }, []);

  if (!shareUrl) return null;

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const links = {
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
    x: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20-%20${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
  };

  return (
    <section className="mt-10 border-t border-slate-200 pt-6">
      <h2 className="text-sm font-semibold text-slate-800 mb-3">
        Deel dit artikel
      </h2>

      <div className="flex flex-wrap gap-2 text-xs">

        {/* LINKEDIN */}
        <a
          href={links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-sky-700 text-white px-3 py-1.5 font-medium hover:bg-sky-800 transition"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="opacity-90"
          >
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.82v2.16H12c.53-1.02 1.84-2.16 3.97-2.16 4.24 0 5.03 2.71 5.03 6.23V24h-4v-8.28c0-1.97-.04-4.51-2.75-4.51-2.75 0-3.17 2.15-3.17 4.37V24H8V8z" />
          </svg>
          <span>LinkedIn</span>
        </a>

        {/* X / Twitter */}
        <a
          href={links.x}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 text-white px-3 py-1.5 font-medium hover:bg-black transition"
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="opacity-90"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.5 11.24H16.52l-5.31-6.972-6.09 6.972H1.81l7.73-8.85L1.5 2.25h6.953l4.79 6.356 5.001-6.356z" />
          </svg>
          <span>X</span>
        </a>

        {/* WHATSAPP */}
        <a
          href={links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500 text-white px-3 py-1.5 font-medium hover:bg-emerald-600 transition"
        >
          <svg
            width="14"
            height="14"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="opacity-90"
          >
            <path d="M20.52 3.48A11.8 11.8 0 0 0 12.04 0C5.42.02.1 5.33.1 11.96c0 2.1.55 4.14 1.6 5.94L0 24l6.3-1.58a12 12 0 0 0 5.75 1.47h.02c6.63 0 11.94-5.3 11.96-11.92a11.8 11.8 0 0 0-3.51-8.49zM12.07 22c-1.85 0-3.67-.5-5.23-1.44l-.38-.22-3.7.94.99-3.6-.25-.39a10.32 10.32 0 0 1-1.58-5.47C1.92 6.1 6.17 1.83 12.07 1.83c2.68 0 5.22 1.04 7.12 2.93a10.1 10.1 0 0 1 3 7.14C22.17 17.92 17.92 22 12.07 22zm5.12-7.63c-.27-.14-1.62-.8-1.87-.9-.25-.1-.43-.14-.62.14-.18.27-.7.9-.85 1.08-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.58-1.5-1.85-.16-.27-.02-.41.12-.55.13-.13.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.62-1.5-.85-2.05-.22-.55-.44-.47-.62-.47-.16 0-.34-.02-.52-.02-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3 0 1.35.99 2.66 1.13 2.84.14.18 1.94 2.96 4.82 4.04.67.27 1.19.43 1.6.55.67.21 1.28.18 1.76.11.54-.08 1.62-.66 1.85-1.3.23-.64.23-1.19.16-1.3-.07-.11-.25-.18-.52-.32z" />
          </svg>
          <span>WhatsApp</span>
        </a>

        {/* EMAIL */}
        <a
          href={links.email}
          className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 text-amber-800 px-3 py-1.5 font-medium hover:bg-amber-100 transition border border-amber-200"
        >
          <svg
            width="14"
            height="14"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="opacity-90"
          >
            <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-.4 2-7.6 5L4.4 6h15.2zM4 18V8l8 5 8-5v10H4z" />
          </svg>
          <span>E-mail</span>
        </a>

      </div>
    </section>
  );
}
