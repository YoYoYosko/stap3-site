import React from "react";
import { Container } from "./Container";

export function ContextFeelSection() {
  return (
    <section className="bg-white text-slate-900">
      <Container className="py-24">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600 ring-1 ring-slate-200">
            Hoe het voelt
          </span>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Zo voelt ondernemen met een Kompas:
          </h2>
          <p className="text-base text-slate-600 sm:text-lg">
            Geen nieuwe “drukke tool”, maar een rustige, veilige ruimte die je
            helpt keuzes te maken zonder oordeel.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <FeelCard
            title="Rustig overzicht"
            description="Je opent je dashboard en ziet precies wat nu belangrijk is – geen twintig grafieken, geen paniek."
          />
          <FeelCard
            title="Heldere taal"
            description="Geen juridische puzzels. Geen vage marketingtermen. Alleen stappen die jij vandaag kunt zetten."
          />
          <FeelCard
            title="Altijd iemand om het aan te vragen"
            description="Twijfel je? Dan stel je een vraag. Je hoeft het niet “even zelf uit te zoeken” om 23:30 ’s avonds."
          />
        </div>
      </Container>
    </section>
  );
}

type FeelCardProps = {
  title: string;
  description: string;
};

function FeelCard({ title, description }: FeelCardProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
    </div>
  );
}
