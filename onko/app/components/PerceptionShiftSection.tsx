// app/components/PerceptionShiftSection.tsx
import React from "react";
import { Container } from "./Container";

export function PerceptionShiftSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-24" id="top1">
      <Container className="max-w-4xl">
        <div className="space-y-6 text-slate-900">
                          <span className="inline-flex items-center rounded-full bg-yellow px-3 py-1 text-s font-semibold uppercase tracking-wide text-white ">
                Voor ondernemers die zich niet altijd ‘perfect’ voelen
              </span>


          <h2 className="text-3xl font-normal leading-tight tracking-tight sm:text-4xl md:text-5xl text-slate-900">
            Je bent niet de enige die {""} <span className="bg-gradient-to-r from-orange-400 to-orange-400 bg-clip-text text-transparent font-black">
                 ondernemen soms zo zwaar </span>
                 ervaart.
          </h2>

          <p className="text-lg font-bold leading-relaxed text-slate-700">
            Veel kleine ondernemers dragen onbewust hetzelfde verhaal met zich mee: 
            dat je alles zelf moet snappen, zelf moet oplossen en zelf moet onthouden — 
            anders ben je &quot;geen echte ondernemer&quot;. Maar is dat wel zo?
          </p>

          <p className="text-lg leading-relaxed text-slate-700">
            Ondernemen vraagt niet om perfectie. Het vraagt om iemand die leert, 
            fouten durft te maken en toch doorgaat. Juist dát maakt jou een sterke ondernemer.
          </p>

          <div className="rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-slate-100">
            <h3 className="text-xl font-semibold mb-3">
              Stel je voor dat ondernemen anders voelt…
            </h3>
            <p className="leading-relaxed text-slate-700">
              Niet meer als alles alleen moeten dragen, maar als <span className="font-semibold">
              begeleid worden wanneer je vastloopt
              </span>. Alsof er altijd iemand is die met je meekijkt, je waarschuwt voor valkuilen 
              en je <span className="font-semibold">stap voor stap door de belangrijkste keuzes heen loodst.</span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
