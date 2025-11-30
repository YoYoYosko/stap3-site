"use client";

// app/components/EarlyAccessSection.tsx
import { useState, FormEvent } from "react";
import Image from "next/image";
import { Container } from "./Container";
import { trackEvent } from "@/lib/analytics";

type Plan = {
  name: string;
  price: string;
  period: string;
  highlight: boolean;
  badge: string;
  description: string;
  features: string[];
  cta: string;
  badgeImage: string | null;
};

const plans: Plan[] = [
  {
    name: "Start",
    price: "GRATIS",
    period: "tijdens de beta",
    highlight: false,
    badge: "Beta toegang",
    description: "Probeer Stap3 zonder risico.",
    features: [
      "Toegang tot de applicatie",
      "RegelRadar met jouw belangrijke deadlines op één plek",
      "Updates over wijzigingen die jouw bedrijf raken",
    ],
    cta: "Start gratis",
    badgeImage: null,
  },
  {
    name: "Groei",
    price: "€24",
    period: "per maand (ex. btw)",
    highlight: true,
    badge: "Meest gekozen",
    description: "Voor serieuze zzp’ers en kleine teams.",
    features: [
      "Alles uit Start",
      "Slimme Assistent voor al je vragen",
      "Uitgebreide reminders & checklists",
      "Extra marketing-sjablonen en contentideeën",
    ],
    cta: "Kies Groei",
    badgeImage: "/badge-14dagen.png",
  },
  {
    name: "Team",
    price: "€39",
    period: "per maand (ex. btw)",
    highlight: false,
    badge: "Teams tot ±10",
    description: "Voor kleine teams die samen willen sturen.",
    features: [
      "Alles uit Groei",
      "Meerdere gebruikers per account",
      "Teamdashboards & gezamenlijke takenlijst",
    ],
    cta: "Kies Team",
    badgeImage: "/badge-14dagen.png",
  },
];

export function EarlyAccessSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleOpenModal = (planName: string) => {
    setSelectedPlan(planName);
    setIsModalOpen(true);
    setSubmitError(null);
    setSubmitSuccess(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!consent || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          plan: selectedPlan,
          name,
          company,
          companyType,
          email,
          consent,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setSubmitError(data?.error || "Er ging iets mis. Probeer het later opnieuw.");
        setIsSubmitting(false);
        return;
      }

      setSubmitSuccess(true);
      setIsSubmitting(false);

      // Form leegmaken
      setName("");
      setCompany("");
      setCompanyType("");
      setEmail("");
      setConsent(false);
    } catch (err) {
      console.error(err);
      setSubmitError("Er ging iets mis bij het versturen. Probeer het later opnieuw.");
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="early-access"
      className="relative border-y border-slate-100 bg-yellow text-slate-900 overflow-hidden"
    >
      {/* STICKMAN DECORATION RECHTS ONDER */}
      <div className="pointer-events-none absolute right-0 bottom-0 translate-y-8 md:translate-y-0 md:bottom-8 lg:bottom-0 lg:translate-y-4 z-0">
        <Image
          src="/stick-sub-w.png"
          alt="stickman pointing"
          width={650}
          height={850}
          loading="lazy"
          className="object-contain"
        />
      </div>

      <Container className="relative z-10 py-24">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-s font-semibold uppercase tracking-wide t-orange">
            Abonnementen
          </span>
          <h2 className="text-3xl font-normal leading-tight tracking-tight sm:text-4xl md:text-5xl text-white">
            Kies het pakket dat bij{" "}
            <span className="bg-gradient-to-r from-orange-600 to-orange-600 bg-clip-text text-transparent font-black">
              jouw ondernemerschap
            </span>{" "}
            past
          </h2>
          <p className="text-base text-white font-bold sm:text-lg max-w-xl">
            Start tijdens de beta gratis met Stap3. Daarna kun je met één klik
            doorgaan in het pakket dat bij je past. Maandelijks opzegbaar – zonder
            gedoe.
          </p>
        </div>

        {/* Plans */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex h-full flex-col rounded-3xl bg-slate-50/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/5 ${
                plan.highlight
                  ? "border-slate-900/80 bg-white shadow-md shadow-slate-900/10 md:scale-[1.03]"
                  : "border-slate-200"
              }`}
            >
              {plan.badgeImage && (
                <div className="absolute -top-7 -right-3 w-22 h-22 z-20">
                  <Image
                    src={plan.badgeImage}
                    alt="14 dagen gratis proberen"
                    fill
                    className="object-contain drop-shadow-lg"
                  />
                </div>
              )}

              {plan.highlight && (
                <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-slate-900/5 via-white to-amber-200/20" />
              )}

              <div className="mb-4 flex items-center justify-between gap-2">
                <span className="inline-flex items-center rounded-full bg-yellow px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                  {plan.badge}
                </span>
              </div>

              <h3 className="text-6xl t-orange font-black">{plan.name}</h3>
              <p className="mt-1 text-sm text-slate-600">{plan.description}</p>

              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-4xl font-bold t-green">{plan.price}</span>
                <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  {plan.period}
                </span>
              </div>

              <div className="mt-4 h-px w-full bg-orange" />

              <ul className="mt-4 flex-1 space-y-2 text-sm text-slate-700">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

<button
  type="button"
  onClick={() => {
    trackEvent("plan_click", {
      plan_name: plan.name,
      plan_price: plan.price,
      plan_type: plan.highlight ? "highlight" : "regular",
      location: "pricing_section",
    });
    handleOpenModal(plan.name);
  }}
  className={`mt-6 w-full rounded-xl px-4 py-2.5 text-sm font-semibold shadow-sm transition ${
    plan.highlight
      ? "bg-green text-white shadow-slate-900/25 hover:bg-slate-800"
      : "bg-yellow text-slate-900  hover:bg-slate-100"
  }`}
>
  {plan.cta}
</button>


              <p className="mt-3 text-[11px] text-slate-500">
                Maandelijks opzegbaar. Geen kleine lettertjes.
              </p>
            </article>
          ))}
        </div>

        <p className="mt-6 text-xs text-slate-600 max-w-xl">
          Tijdens de beta testen we prijzen en functies. Als early adopter behoud
          je blijvend korting.
        </p>
      </Container>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm px-4">
          <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-xl relative">
            <button
              type="button"
              onClick={handleCloseModal}
              className="absolute right-3 top-3 rounded-full p-1 text-slate-500 hover:bg-slate-100"
              aria-label="Sluit"
            >
              ✕
            </button>

            <div className="mb-4 flex items-center gap-2">
              {/* eventueel logo hier */}
              <Image
                src="/stap3-logo.png"
                alt="Stap3 logo"
                width={200}
                height={50}
                className="rounded-full"
              />
              
            </div>

            <h3 className="text-2xl font-semibold text-orange-600 mb-2">
              Bedankt voor je interesse{selectedPlan ? ` in Stap3 ${selectedPlan}` : ""}!
            </h3>
            <p className="text-sm text-slate-600 mb-3">
              We bouwen Stap3 samen met een kleine groep early adopters, zodat
              alles écht goed werkt voordat we verder opschalen. Daarom nemen we
              op dit moment geen nieuwe gebruikers aan.
            </p>
            <p className="text-sm text-slate-600 mb-4">
              Wil je op de wachtlijst? Zodra we weer nieuwe ondernemers toelaten,
              ben jij de eerste die het hoort en Stap3 kunt uitproberen.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3 mt-2">
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    Naam
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-yellow focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    Bedrijfsnaam
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-yellow focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  Soort bedrijf
                </label>
                <input
                  type="text"
                  placeholder="Bijv. coach, kapsalon, webwinkel..."
                  value={companyType}
                  onChange={(e) => setCompanyType(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-yellow focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  E-mailadres
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-yellow focus:border-transparent"
                />
              </div>

              <div className="flex items-start gap-2 mt-2">
                <input
                  id="waitlist-consent"
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  required
                  className="mt-0.5 h-4 w-4 rounded border-slate-300 text-yellow focus:ring-yellow"
                />
                <label
                  htmlFor="waitlist-consent"
                  className="text-xs text-slate-600"
                >
                  Ik geef toestemming om mij per e-mail te benaderen over de
                  wachtlijst, updates over Stap3 en relevante tips voor
                  ondernemers. Je gegevens worden niet gedeeld met derden.
                </label>
              </div>

              {submitError && (
                <p className="text-xs text-red-600">{submitError}</p>
              )}
              {submitSuccess && (
                <p className="text-xs text-emerald-600">
                  Bedankt! Je staat nu op de wachtlijst. 🎉
                </p>
              )}

              <div className="mt-4 flex gap-2 justify-end">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100"
                >
                  Liever later
                </button>
                <button
                  type="submit"
                  disabled={!consent || isSubmitting}
                  className="rounded-lg bg-yellow px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Versturen..." : "Zet mij op de wachtlijst"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
