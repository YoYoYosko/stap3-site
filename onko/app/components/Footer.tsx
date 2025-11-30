// app/components/Footer.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="border-t border-slate-200 bg-white text-slate-700"
    >
      <Container className="py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* LOGO + MISSION */}
          <div className="max-w-sm space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/stap3-logo.png"
                width={200}
                height={42}
                alt="Stap3 logo"
                className="object-contain"
              />
              <div className="flex flex-col leading-tight">

              </div>
            </div>

            <p className="text-sm text-slate-600">
              Gemaakt voor Nederlandse zzp’ers en kleine ondernemers die minder
              tijd willen verliezen aan ruis en regels — en meer ruimte willen
              creëren voor hun echte werk.
            </p>
          </div>

          {/* LINKS */}
          <div className="flex flex-wrap gap-12 text-sm">

            <div>
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Product
              </h4>
              <ul className="space-y-1">
                <li>
                  <a href="/#wat-je-krijgt" className="hover:text-slate-900 hover:underline">
                    Wat je krijgt
                  </a>
                </li>
                <li>
                  <a href="/#hoe-het-werkt" className="hover:text-slate-900 hover:underline">
                    Hoe het werkt
                  </a>
                </li>
                <li>
                  <a href="/#early-access" className="hover:text-slate-900 hover:underline">
                    Abonnementen
                  </a>
                </li>
                 <li>
                  <a href="/blog" className="hover:text-slate-900 hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Over Ons
              </h4>
              <ul className="space-y-1">
                <li>
                  <Link href="/" className="hover:text-slate-900 hover:underline">
                    Waarom we dit bouwen
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-slate-900 hover:underline">
                    Voor kleine ondernemers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Contact
              </h4>
              <ul className="space-y-1">
                <li>
                  <a
                    href="mailto:hallo@stap3.app"
                    className="hover:text-slate-900 hover:underline"
                  >
                    hallo@stap3.nl
                  </a>
                </li>
                <li className="text-xs text-slate-500">
                  Feedback welkom — Stap3 groeit met jouw input.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-slate-200 pt-4 text-xs text-slate-500 md:flex-row md:items-center">
          <p>© {year} Stap3. Alle rechten voorbehouden.</p>

          <div className="flex flex-wrap gap-4">
            <Link href="/privacy" className="hover:text-slate-900 hover:underline">
              Privacy
            </Link>
            <Link href="/voorwaarden" className="hover:text-slate-900 hover:underline">
              Algemene voorwaarden
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
