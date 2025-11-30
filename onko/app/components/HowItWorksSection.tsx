import React from "react";
import { Container } from "./Container";

export function HowItWorksSection() {
  return (
    <section
      id="hoe-het-werkt"
      className="bg-white text-slate-900"
    >
      <Container className="py-24">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center rounded-full bg-yellow px-3 py-1 text-s font-semibold uppercase tracking-wide text-white ">
            Hoe het werkt
          </span>
          <h2 className="text-4xl font-normal leading-tight tracking-tight sm:text-5xl">
            In 3 simpele stappen             <span className="bg-gradient-to-r from-orange-400 to-orange-400  bg-clip-text text-transparent font-black">
              je eigen ondernemersassistent.
            </span>
          </h2>
          <p className="text-base text-slate-600 sm:text-lg font-bold">
            Geen lange implementatie, geen cursus. In een paar minuten heb je je
            eigen assistent draaien.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <StepCard
            number="01"
            title="Maak je account"
            description="Log in met je e-mailadres. Geef kort aan wat voor type ondernemer je bent: zzp, winkel, kleine bv…"
          />
          <StepCard
            number="02"
            title="Kies je focus"
            description="Selecteer waar je nu vooral mee worstelt: regels, geld, zichtbaarheid – of een combinatie."
          />
          <StepCard
            number="03"
            title="Je persoonlijke startpagina"
            description="Zie in één oogopslag wat nu belangrijk is, welke vragen je kunt stellen en welke acties je vandaag al helpen."
          />
        </div>

        <p className="mt-6 text-sm text-slate-500">
          Je kunt op elk moment stoppen. Geen verplichtingen, geen verborgen
          kleine lettertjes.
        </p>
      </Container>
    </section>
  );
}

type StepCardProps = {
  number: string;
  title: string;
  description: string;
};

function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <div className="mb-3 inline-flex items-center rounded-full bg-white px-3 py-1 text-3xl font-semibold text-slate-600 ring-1 ring-slate-200">
        <span className="mr-2 text-3xl text-amber-500">{number}</span>
      
      </div>
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
    </div>
  );
}
