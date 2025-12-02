import React from "react";
import Image from "next/image";
import { Container } from "./Container";

export function PainSection() {
  return (
    <section id="pain" className="bg-white text-slate-900 z-10 ">
      <Container className="py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Afbeelding links */}
          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-3xl border-2 border-slate-200 bg-slate-50 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
              <Image
                src="/herkenbaarv5.png" // jouw vierkante illustratie
                alt="Ondernemer zoekt naar antwoorden"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Tekst + bullets rechts */}
          <div className="space-y-8">
            <div>
              <span className="inline-flex items-center rounded-full bg-yellow px-3 py-1 text-s font-semibold uppercase tracking-wide text-white ">
                De dagelijkse realiteit
              </span>

              <h2 className="mt-4 text-3xl font-normal leading-tight tracking-tight sm:text-4xl md:text-5xl">
                
                 <span className="bg-gradient-to-r from-orange-400 font-black to-orange-400  bg-clip-text text-transparent">
              Ondernemen voelt nu zo..?!
            </span> Herkenbaar? 
              </h2>

              <p className="mt-3 text-base text-slate-600 sm:text-lg font-bold">
                Dit komt niet omdat jij geen “echte ondernemer” bent – maar omdat het
                systeem waarin je terechtkomt nooit voor kleine ondernemers is
                ontworpen.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Je Googelt je suf op regels, belasting en contracten – en krijgt tien tegenstrijdige antwoorden.",
                "Elke maand is er weer een nieuwe regel, een hogere rekening of een wijziging waar je “iets mee moet”.",
                "Je wilt meer klanten, maar je haat marketingjargon en ingewikkelde tools.",
                "Je vraagt je regelmatig af: “Doe ik dit eigenlijk allemaal wel goed?”",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="mt-1 h-6 w-6 shrink-0 rounded-full bg-rose-50 text-center text-sm font-semibold leading-6 text-rose-500">
                    !
                  </div>
                  <p className="text-s text-slate-700">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-slate-500">
              Het probleem is niet dat jij faalt. Het probleem is dat je alles
              zelf moet dragen in een landschap vol ruis, regels en
              tegenstrijdige informatie.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
