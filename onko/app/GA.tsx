"use client";

import Script from "next/script";

export function GA() {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-D5D50M10ER"
      />
      <Script id="ga-init">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-D5D50M10ER');
        `}
      </Script>
    </>
  );
}
