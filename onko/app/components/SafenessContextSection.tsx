// app/components/SafenessContextSection.tsx
import React from "react";
import { Container } from "./Container";

export function SafenessContextSection() {
  return (
    <section className="bg-yellow text-slate-900 py-16 md:py-20" id="top1">
      <Container className="max-w-5xl">
        <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)] items-center">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-900/70">
              De ruimte achter Stap3
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              Dit is een plek waar je niet perfect hoeft te zijn.
            </h2>

            <p className="text-lg leading-relaxed">
              Stap3 is niet gebouwd voor ondernemers die alles al op orde hebben. 
              Het is gemaakt voor mensen zoals jij: met goede intenties, een volle agenda 
              en soms het gevoel dat er meer bij komt kijken dan iemand ooit vertelt.
            </p>

            <ul className="space-y-2 text-base leading-relaxed">
              <li>• die af en toe iets vergeten of uitstellen</li>
              <li>• die twijfelen of ze &quot;het wel goed doen&quot;</li>
              <li>• die wél grip willen, maar niet nóg een ingewikkeld systeem erbij</li>
            </ul>

            <p className="text-base leading-relaxed">
              Hier hoef je je niet beter voor te doen dan je bent. 
              Je mag gewoon binnenlopen, ademen en denken:{' '}
              <span className="font-semibold">&quot;Oké… dit kan ik aan.&quot;</span>
            </p>
          </div>

          <div className="rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-yellow-100">
            <h3 className="text-xl font-semibold mb-3">
              Een rustige omgeving voor drukke hoofden
            </h3>
            <p className="text-sm leading-relaxed text-slate-700">
              De app is bewust eenvoudig en overzichtelijk ontworpen. Geen vakjargon, 
              geen ingewikkeld dashboard, maar korte, duidelijke aanwijzingen. 
              Zodat jij weer toegang krijgt tot de versie van jezelf die wél grip heeft.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
