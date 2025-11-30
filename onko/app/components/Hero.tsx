// app/components/Hero.tsx
"use client";

import React from "react";
import Image from "next/image";
import { Container } from "./Container";
import { trackEvent } from "@/lib/analytics";

export function Hero() {
  return (
    <section className="relative border-b border-slate-200">
      {/* FIXED background image over het hele viewport */}
      <div className="pointer-events-none fixed inset-0 ">
        <Image
          src="/hero-bg.jpg" // public/hero-bg.jpg -> /hero-bg.jpg
          alt="Ondernemer aan het werk"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Lichte overlay voor leesbaarheid */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px]" />
      </div>

      {/* Content ligt nu boven de fixed background */}
      <Container className="relative z-10 flex flex-col items-center gap-12 py-16 md:flex-row md:justify-between md:py-24">
        {/* Text */}
        <div className="max-w-xl space-y-7">
          <p className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-600 ring-1 ring-slate-200">
            Voor Nederlandse zzp’ers en kleine ondernemers
          </p>

          <h1 className="text-4xl font-normal text-slate-700 leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Je hoeft het ondernemerschap  {" "}

            <span className="bg-gradient-to-r from-orange-400 to-orange-400  bg-clip-text text-transparent font-black">
               niet meer alleen te dragen.
            </span>
          </h1>

          <p className="text-base text-slate-700 sm:text-lg">
            Stap3 is je slimme assistent voor regels, geldzaken en
            zichtbaarheid. Speciaal voor Nederlandse zzp’ers en kleine
            ondernemers die minder willen ploeteren en meer willen ondernemen.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#early-access" >
              <button className="inline-flex items-center justify-center rounded-lg bg-yellow px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-amber-300"
  onClick={() =>
    trackEvent("cta_click", {
      location: "hero",
      label: "Probeer gratis als vroege gebruiker",
    })
  }
>
  Probeer gratis als vroege gebruiker
</button>
</a>
            <a href="/#hoe-het-werkt"><button className="text-sm font-semibold text-slate-900 underline-offset-4 hover:underline">
              Bekijk hoe het werkt
            </button></a>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex space-x-1">
              <div className="h-7 w-10 rounded-full bg-amber-100 text-center text-[11px] font-semibold leading-7 text-amber-800">
                ZZP
              </div>
              <div className="h-7 w-10 rounded-full bg-emerald-100 text-center text-[11px] font-semibold leading-7 text-emerald-800">
                Retail
              </div>
              <div className="h-7 w-10 rounded-full bg-sky-100 text-center text-[11px] font-semibold leading-7 text-sky-800">
                Studio
              </div>
            </div>
            <p className="text-xs text-slate-600">
              Gebouwd voor ondernemers die geen zin hebben in gedoe, maar wél in
              duidelijkheid.
            </p>
          </div>
        </div>


{/* Afbeelding rechts */}
<div className="mt-4 w-full md:mt-0 flex justify-center">
  <div className="relative rounded-3xl">
    <div className="pointer-events-none absolute -inset-px rounded-3xl" />

    <div className="relative overflow-hidden rounded-2xl">
      <Image
        src="/app-hero-square.png"
        alt="Stap3 app preview"
        width={600}
        height={600}
        className="w-full   object-contain mx-auto"
        priority
      />
    </div>
  </div>
</div>


      </Container>
    </section>
  );
}
