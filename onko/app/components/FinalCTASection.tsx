// app/components/FinalCTASection.tsx
import React from "react";
import { Container } from "./Container";
import Image from "next/image";

export function FinalCTASection() {
  return (
    <section className="bg-yellow text-slate-50 bg-opacity-10 relative" id="final-cta">
      <div className="pointer-events-none absolute left-0 bottom-0 translate-y-8 md:translate-y-0 md:bottom-8 lg:bottom-0 lg:translate-y-4 z-0 ">
        <Image
          src="/stick-final-w.png"
          alt="stickman pointing"
          width={550}
          height={850}
          className="object-contain"
        />
      </div>

            <div className="pointer-events-none absolute right-0  z-0 sun ">
        <Image
          src="/sun.png"
          alt="sun"
          width={550}
          height={850}
          className="object-contain"
        />
      </div>
      <Container className="py-20 md:py-24">
        <div className="max-w-3xl space-y-6 text-center mx-auto">
          <div className="inline-flex items-center justify-self-center rounded-full bg-white px-3 py-1 text-s font-semibold uppercase tracking-wide t-orange ">
            Start Vandaag Nog
          </div>
          <h2 className="text-3xl font-normal leading-tight tracking-tight sm:text-4xl md:text-5xl text-white">
            Je mag jezelf {""}
                        <span className="bg-gradient-to-r from-orange-600 to-orange-600 bg-clip-text text-transparent font-black">
              het makkelijker maken.
            </span> 
            
          </h2>
          <p className="text-base text-white sm:text-lg max-w-xl justify-self-center font-bold">
            Ondernemen is al dapper genoeg. Je hoeft niet óók nog je eigen jurist,
            boekhouder, marketeer én beleidsvolger te zijn. Laat Stap3
            de ruis vangen, zodat jij je weer kunt richten op het werk waar je voor
            begonnen bent.
          </p>
          <div className="pt-2">
            <a href="#early-access">
            <button className="inline-flex items-center justify-center rounded-lg bg-orange px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-400/30 transition hover:bg-amber-300">
              Ja, ik wil mijn eigen Stap3 ondernemersassistent
            </button></a>
            <p className="mt-3 text-xs text-slate-950 font-bold">
              Duurt ongeveer 30 seconden. Geen verplichtingen.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
