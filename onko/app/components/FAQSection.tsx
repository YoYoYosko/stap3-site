// app/components/FAQSection.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "./Container";

type FAQItem = {
  question: string;
  answer: string;
};

const FAQS: FAQItem[] = [
  {
    question: "Wat is Stap3 precies?",
    answer:
      "Stap3 is een slimme assistent voor Nederlandse zzp’ers en kleine ondernemers. Het helpt je met regels, geldzaken en zichtbaarheid, zodat jij minder tijd kwijt bent aan uitzoekwerk en meer aan ondernemen.",
  },
  {
    question: "Voor wie is het bedoeld?",
    answer:
      "Voor zzp’ers, eenmanszaken en kleine teams (1–10 medewerkers) in Nederland. Van florist tot webdesigner, van coach tot timmerman: als jij regelmatig denkt “doe ik dit eigenlijk wel goed?”, dan is dit voor jou.",
  },
  {
    question: "Wat kost het na de beta?",
    answer:
      "Tijdens de beta kun je Stap3 gratis gebruiken. Daarna werken we met een simpel maandabonnement. Early adopters krijgen een blijvende korting ten opzichte van de standaard prijs.",
  },
  {
    question: "Heb ik boekhoudkennis nodig?",
    answer:
      "Nee. De assistent legt dingen uit in gewone taal en vertaalt regels naar concrete stappen. Je hoeft geen fiscalist te zijn om te begrijpen wat je moet doen.",
  },
  {
    question: "Vervangt dit mijn boekhouder of accountant?",
    answer:
      "Nee. Stap3 helpt je om beter voorbereid te zijn en minder te vergeten, maar vervangt geen professionele boekhouder. Zie het als je eerste hulplijn en overzichtstool.",
  },
  {
    question: "Wat gebeurt er met mijn gegevens?",
    answer:
      "We gebruiken je gegevens alleen om je account te laten werken en je relevante reminders en inzichten te geven. Geen doorverkoop van data, geen verborgen fratsen.",
  },
  {
    question: "Moet ik direct alles instellen?",
    answer:
      "Nee. Je kunt klein beginnen: eerst alleen je basisprofiel en een paar doelen. De assistent helpt je stap voor stap om je persoonlijke omgeving verder in te richten.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative border-y border-slate-100 bg-white text-slate-900 overflow-hidden"
    >
      {/* Stickman illustration (absolute right) */}
      <div className="pointer-events-none absolute right-50 top-120 -translate-y-1/2 hidden lg:block opacity-90">

      </div>

      <Container className="relative py-24 z-10">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center rounded-full bg-yellow px-3 py-1 text-s font-semibold uppercase tracking-wide text-white ">
            Veelgestelde vragen
          </span>

          <h2 className="text-3xl font-normal leading-tight tracking-tight sm:text-4xl md:text-5xl text-slate-800">
            Heb je nog vragen over             <span className="bg-gradient-to-r t-orange bg-clip-text text-transparent font-black">
              Stap3
            </span>?
          </h2>

          <p className="text-base text-slate-600 sm:text-lg font-bold">
            Dit zijn de vragen die we het vaakst horen van ondernemers zoals jij.
          </p>
        </div>

        {/* FAQ items */}
        <div className="mt-8 max-w-3xl space-y-3">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="rounded-2xl border border-slate-200 bg-yellow px-4 py-3 sm:px-5 sm:py-4 shadow-sm shadow-slate-900/5"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between gap-3 text-left"
                >
                  <span className="text-sm font-semibold text-slate-800 sm:text-base">
                    {item.question}
                  </span>

                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-full border text-s font-bold transition ${
                      isOpen
                        ? "border-slate-400 bg-slate-800 text-white"
                        : "border-slate-200 bg-white text-slate-500"
                    }`}
                  >
                    {isOpen ? "–" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-3 text-sm text-slate-700 sm:text-[15px]">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <p className="mt-8 max-w-3xl text-sm text-slate-500 font-bold">
          Staat jouw vraag er niet tussen? In de beta kun je ons direct feedback sturen —
          we gebruiken die input om Stap3 steeds beter te maken.
        </p>
      </Container>
    </section>
  );
}
