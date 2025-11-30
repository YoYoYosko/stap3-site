"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { trackEvent } from "@/lib/analytics";

const navItems = [
  { href: "/#wat-je-krijgt", label: "Wat je krijgt" },
  { href: "/#voor-wie", label: "Voor wie" },
  { href: "/#hoe-het-werkt", label: "Hoe het werkt" },
  { href: "/#faq", label: "Meest gestelde vragen" },
  { href: "/blog", label: "Blog" },
];

export function NavBar() {
  const [open, setOpen] = useState(false);

  const handleNavClick = (
    item: { href: string; label: string },
    device: "desktop" | "mobile"
  ) => {
    trackEvent("nav_click", {
      label: item.label,
      href: item.href,
      device,
      location: "navbar",
    });
  };

  const handleCtaClick = (device: "desktop" | "mobile") => {
    trackEvent("cta_click", {
      label: "Probeer 14 dagen gratis",
      device,
      location: "navbar",
    });
  };

  const handleLogoClick = () => {
    trackEvent("logo_click", {
      location: "navbar",
    });
  };

  const handleToggleMenu = (nextOpen: boolean) => {
    setOpen(nextOpen);
    trackEvent("nav_toggle", {
      location: "navbar",
      state: nextOpen ? "open" : "closed",
      device: "mobile",
    });
  };

  return (
    <header className="sticky top-0 z-40 border-slate-800 bg-white backdrop-blur-sm">
      <Container className="flex items-center justify-between py-3">
        {/* LOGO */}
        <Link
          href="/"
          className="flex flex-col items-start gap-1"
          onClick={handleLogoClick}
        >
          <Image
            src="/stap3-logo.png"
            alt="Stap3 logo"
            width={130}
            height={30}
            priority
          />
          <span className="text-[11px] font-medium text-slate-900 leading-none">
            Je slimme ondernemersassistent
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-6 text-sm text-slate-900 md:flex"
          aria-label="Hoofdnavigatie"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => handleNavClick(item, "desktop")}
              className="text-sm text-slate-900 transition hover:text-amber-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-md"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/#early-access"
            onClick={() => handleCtaClick("desktop")}
            className="rounded-lg bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-md shadow-amber-400/20 transition hover:bg-amber-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Probeer 14 dagen gratis
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => handleToggleMenu(!open)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-slate-200 md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          aria-label={open ? "Sluit navigatiemenu" : "Open navigatiemenu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-4 rounded bg-slate-200" />
            <span className="block h-0.5 w-4 rounded bg-slate-200" />
            <span className="block h-0.5 w-4 rounded bg-slate-200" />
          </div>
        </button>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-nav"
          className="border-t border-slate-800 bg-slate-950 md:hidden"
        >
          <Container className="flex flex-col gap-1 py-3" aria-label="Mobiele navigatie">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => {
                  handleNavClick(item, "mobile");
                  handleToggleMenu(false);
                }}
                className="rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/#early-access"
              onClick={() => {
                handleCtaClick("mobile");
                handleToggleMenu(false);
              }}
              className="mt-2 rounded-lg bg-amber-400 px-3 py-2 text-sm font-semibold text-slate-950 shadow-md shadow-amber-400/20 hover:bg-amber-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Probeer het 14 dagen gratis
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
