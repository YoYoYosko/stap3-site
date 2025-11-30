"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Container } from "./Container";

const BG_IMAGES = ["/forwho-1.png", "/forwho-2.png", "/forwho-3.png"];

export function ForWhoSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (BG_IMAGES.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % BG_IMAGES.length);
    }, 8000); // 8s per slide

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="voor-wie" className="relative overflow-hidden bg-white text-slate-900">
      {/* FULL-WIDTH BACKGROUND CAROUSEL */}
      <div className="pointer-events-none absolute inset-0 ">
        {BG_IMAGES.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            loading="lazy"
            priority={index === 0}
            className={`object-cover transition-opacity duration-[1500ms] ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Soft overlay voor leesbaarheid + samenhang */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />
      </div>

      {/* CONTENT */}
      <Container className="relative py-24">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center rounded-full bg-yellow px-3 py-1 text-s font-semibold uppercase tracking-wide text-white ">
            Voor wie
          </span>
          <h2 className="text-3xl font-normal leading-tight tracking-tight sm:text-5xl">
            Voor wie is de             <span className="bg-gradient-to-r from-orange-400 to-orange-400  bg-clip-text text-transparent font-black">
              Stap3
            </span> App gemaakt?
          </h2>
          <p className="text-base text-slate-700 sm:text-lg font-bold">
            Voor ondernemers die niet nóg een ingewikkelde tool willen, maar één
            centrale plek voor overzicht en geruststelling.
          </p>
        </div>

        <div className="mt-8 max-w-3xl space-y-3">
          {[
            "Zzp’ers en eenmanszaken in Nederland – van creatief tot bouw, van coach tot consultant.",
            "Kleine retailers met 1–10 medewerkers die overzicht willen over regels, geld en zichtbaarheid.",
            "Ondernemers die geen zin hebben in jargon, maar wél in duidelijkheid en concrete stappen.",
            "Mensen die regelmatig denken: “Waarom is dit allemaal zó ingewikkeld?”",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white/95 px-4 py-3 text-sm text-slate-800 shadow-sm shadow-slate-900/5"
            >
              <div className="mt-1 h-5 w-5 shrink-0 rounded-full bg-emerald-500/10 text-center text-[11px] font-semibold leading-5 text-emerald-600">
                ✓
              </div>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 max-w-3xl text-sm text-slate-900 font-bold">
          Als jij ondernemer bent in Nederland en regelmatig denkt:{" "}
          <span className="italic">“Doe ik dit eigenlijk wel goed?”</span>, dan
          is deze tool voor jou bedoeld.
        </p>
      </Container>
    </section>
  );
}
