// app/components/FinalCTASection.tsx
import React from "react";
import { Container } from "./Container";
import Image from "next/image";

export function FinalCTASection() {
  return (
    <section
      className="relative bg-yellow text-slate-50 bg-opacity-10 overflow-hidden"
      id="final-cta"
    >
      {/* Stickman Left */}
      <div className="pointer-events-none absolute left-0 bottom-0 z-0
                      max-[1379px]:opacity-40 min-[1380px]:opacity-100">
        <Image
          src="/stick-final-w.png"
          alt="stickman pointing"
          width={550}
          height={850}
          loading="lazy"
          className="object-contain"
        />
      </div>

      {/* Sun Right */}
      <div className="pointer-events-none absolute right-0 bottom-80 z-0
                      max-[1379px]:opacity-40 min-[1380px]:opacity-100">
        <Image
          src="/Sun.png"
          alt="sun"
          width={550}
          height={850}
          loading="lazy"
          className="object-contain"
        />
      </div>

      <Container className="relative z-10 py-20 md:py-24">
        <div className="max-w-3xl space-y-6 text-center mx-auto">
          <div className="inline-flex items-center rounded-full bg-white px-3 py-1 text-sm font-semibold uppercase tracking-wide t-orange">
            Start Vandaag Nog
          </div>

          <h2 className="text-3xl font-normal leading-tight tracking-tight sm:text-4xl md:text-5xl text-white">
            Maak het jezelf{" "}
            <span className="bg-gradient-to-r from-orange-600 to-orange-600 bg-clip-text text-transparent font-black">
              makkelijker
            </span>, omdat het kan.
          </h2>

          <p className="text-base text-white sm:text-lg max-w-xl mx-auto font-bold">
            Ondernemen is al dapper genoeg. Je hoeft niet óók nog je eigen
            jurist, boekhouder, marketeer én beleidsvolger te zijn. Laat Stap3
            de ruis vangen, zodat jij je weer kunt richten op het werk waar je
            voor begonnen bent.
          </p>

          <div className="pt-2">
            <a href="#early-access">
              <button className="inline-flex items-center justify-center rounded-lg bg-orange px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-400/30 transition hover:bg-amber-300">
                Ja, ik wil mijn eigen Stap3 ondernemersassistent
              </button>
            </a>
            <p className="mt-3 text-xs text-slate-950 font-bold">
              Duurt ongeveer 30 seconden. Geen verplichtingen.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
