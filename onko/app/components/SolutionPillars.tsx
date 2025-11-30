"use client";

import React from "react";
import Image from "next/image";
import { Container } from "./Container";

export function SolutionPillars() {
  return (
    <section
      id="wat-je-krijgt"
      className="relative overflow-hidden bg-yellow text-slate-900"
    >
      {/* DECORATIVE BACKGROUND ILLUSTRATION */}
      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 lg:w-[420px] xl:w-[520px]">
        <Image
          src="/ab-img-1-w.png"
          alt=""
          width={600}
          height={600}
          loading="lazy"
          className="object-contain"
        />
      </div>

      <Container className="relative z-10 py-24">
        {/* HEADER */}
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-s font-semibold uppercase tracking-wide t-orange">
            De oplossing
          </span>

          <h2 className="text-3xl font-normal leading-tight tracking-tight sm:text-4xl md:text-5xl text-white">
            Stel je voor dat je             <span className="bg-gradient-to-r from-orange-600 to-orange-600 bg-clip-text text-transparent font-black">
              een vaste vraagbaak in je broekzak
            </span> had…
          </h2>

          <p className="text-base text-white sm:text-lg font-bold">
            Stap3 combineert een slimme AI-assistent met praktische regelhulp én
            marketing-ondersteuning. Geen jargon, geen overload – alleen wat jij
            nu nodig hebt, in gewone mensentaal.
          </p>
        </div>

        {/* 3 PILLARS */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <PillarCard
            icon="/ai-research.png"
            color="emerald"
            title="Slimme Assistent"
            subtitle="Altijd iemand om het aan te vragen"
            points={[
              "Stel elke vraag over ondernemen in Nederland.",
              "Btw, inkomstenbelasting, klanten, facturen, tarieven…",
              "Antwoorden in gewone taal, gebaseerd op actuele bronnen.",
            ]}
          />

          <PillarCard
            icon="/regelradar.png"
            color="sky"
            title="RegelRadar"
            subtitle="Altijd weten wat er op je afkomt"
            points={[
              "Zie welke regels en wijzigingen jou echt raken.",
              "Overzicht van deadlines zoals btw en aangiftes.",
              "Interactieve checklists zodat je niets vergeet.",
            ]}
          />

          <PillarCard
            icon="/marketing-kompas.png"
            color="amber"
            title="Marketing Kompas"
            subtitle="Zichtbaar blijven zonder gedoe"
            points={[
              "AI schrijft social posts en teksten voor je.",
              "Concrete ideeën per branche.",
              "Blijf top-of-mind zonder uren contentplanning.",
            ]}
          />
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------- */
/* PillarCard */
/* ------------------------------------------------------------- */

type PillarCardProps = {
  icon: string;
  title: string;
  subtitle: string;
  points: string[];
  color: "emerald" | "sky" | "amber";
};

const colorMap: Record<PillarCardProps["color"], string> = {
  emerald: "bg-emerald-500/10 text-emerald-700",
  sky: "bg-sky-500/10 text-sky-700",
  amber: "bg-amber-500/10 text-amber-700",
};

function PillarCard({ icon, title, subtitle, points, color }: PillarCardProps) {
  return (
    <div className="relative z-10 flex h-full flex-col rounded-2xl border border-slate-200 bg-white/95 p-6 shadow-sm backdrop-blur-sm">

      {/* ICON + TITLE + SUBTITLE ROW */}
      <div className="flex items-start gap-3 mb-4">
        <Image
          src={icon}
          alt={title}
          width={50}
          height={50}
          loading="lazy"
          className="object-contain shrink-0"
        />

        <div>
          <h3 className="text-lg font-semibold t-orange">
            {title}
          </h3>

          <p className="text-xs uppercase tracking-wide text-slate-500">
            {subtitle}
          </p>
        </div>
      </div>

      {/* POINTS */}
      <ul className="mt-2 flex-1 space-y-2 text-sm text-slate-700">
        {points.map((point) => (
          <li key={point} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
