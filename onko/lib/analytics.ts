// lib/analytics.ts

// Optioneel: haal 'm uit env, maar hardcoden mag ook voorlopig
export const GA_MEASUREMENT_ID = "G-D5D50M10ER";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Stuur een custom event naar Google Analytics 4.
 * Voorbeeld:
 * trackEvent("cta_click", { location: "hero", label: "Probeer gratis" })
 */
export function trackEvent(
  action: string,
  params?: Record<string, any>
) {
  if (typeof window === "undefined") return;
  if (!window.gtag) return;

  window.gtag("event", action, {
    send_to: GA_MEASUREMENT_ID,
    ...params,
  });
}
