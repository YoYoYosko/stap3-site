import { Container } from "@/app/components/Container";

export default function PrivacyPage() {
  return (
    <section className="border-b border-slate-100 bg-slate-50/60">
      <Container className="py-10 md:py-16 space-y-10">
        {/* Breadcrumb */}
        <div className="text-xs text-slate-500 mb-2">
          <a href="/" className="hover:text-orange-600">
            Home
          </a>{" "}
          <span className="mx-1 text-slate-400">/</span>
          <span>Privacyverklaring</span>
        </div>

        {/* Hero / Titelblok */}
        <header className="max-w-3xl space-y-4">
          <p className="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-orange-600">
            Juridisch
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
            Privacyverklaring
          </h1>
          <p className="text-sm md:text-base text-slate-600">
            Bij Stap3 vinden we privacy belangrijk. Je vertrouwt ons met
            gevoelige gegevens, en daar gaan we zorgvuldig mee om. Op deze
            pagina leggen we uit welke gegevens we verzamelen, waarom we dat
            doen en hoe we ze beveiligen.
          </p>
          <p className="text-xs text-slate-500">
            Laatste update: 30 november 2025
          </p>
        </header>

        {/* Inhoud */}
        <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)] max-w-3xl text-sm md:text-base text-slate-700">
          <div className="space-y-6">
            <section>
              <h2 className="mb-2 text-lg font-semibold text-slate-800">
                1. Wie zijn wij?
              </h2>
              <p className="mb-2">
                Stap3 is een digitale assistent voor zzp’ers en kleine
                ondernemers. Wij zijn verantwoordelijk voor de verwerking van
                persoonsgegevens die via onze website en applicatie worden
                verzameld.
              </p>
              <p>
                <span className="font-semibold">Verwerkingsverantwoordelijke:</span>
                <br />
                Stap3 (OndernemersKompas)
                <br />
                E-mail:{" "}
                <a
                  href="mailto:support@stap3.nl"
                  className="text-orange-600 hover:underline"
                >
                  support@stap3.nl
                </a>
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-slate-800">
                2. Welke gegevens verwerken wij?
              </h2>
              <p className="mb-2">
                We verwerken alleen gegevens die nodig zijn om onze dienst goed
                te kunnen leveren.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <span className="font-semibold">Account- en profielgegevens</span>{" "}
                  – naam, bedrijfsnaam, soort bedrijf, e-mailadres en overige
                  gegevens die je zelf aanvult.
                </li>
                <li>
                  <span className="font-semibold">Gebruik van de app</span> –
                  instellingen, voorkeuren, interacties en feedback.
                </li>
                <li>
                  <span className="font-semibold">
                    Automatisch verzamelde gegevens
                  </span>{" "}
                  – IP-adres, browsertype, apparaat-informatie, anonieme
                  gebruiksstatistieken.
                </li>
                <li>
                  <span className="font-semibold">
                    Wachtlijst- of nieuwsbrieflijsten
                  </span>{" "}
                  – naam, e-mailadres, soort bedrijf en jouw toestemming.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-slate-800">
                3. Waarom verwerken we deze gegevens?
              </h2>
              <p className="mb-2">
                We gebruiken je gegevens alleen voor duidelijke en
                gerechtvaardigde doelen:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Om je account aan te maken en te beheren.</li>
                <li>Om onze dienst technisch te kunnen laten draaien.</li>
                <li>
                  Om je te informeren over wijzigingen, updates en (beta)toegang.
                </li>
                <li>Om feedback om te zetten in verbeteringen van Stap3.</li>
                <li>
                  Om je – alleen met jouw toestemming – e-mails te sturen met
                  tips, nieuws of updates.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-slate-800">
                4. Rechtsgronden
              </h2>
              <p className="mb-2">Wij verwerken gegevens op basis van:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <span className="font-semibold">
                    Uitvoering van een overeenkomst
                  </span>{" "}
                  – bijvoorbeeld om je toegang te geven tot de app.
                </li>
                <li>
                  <span className="font-semibold">Toestemming</span> – bijvoorbeeld
                  voor nieuwsbrieven of de wachtlijst.
                </li>
                <li>
                  <span className="font-semibold">Gerechtvaardigd belang</span> – om
                  Stap3 te verbeteren en te beveiligen.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-slate-800">
                5. Met wie delen we gegevens?
              </h2>
              <p className="mb-2">
                We delen je gegevens alleen met partijen die ons helpen onze
                dienst te leveren. Dit zijn verwerkers, geen zelfstandige
                ontvangers.
              </p>
              <p className="mb-2">Voorbeelden van partijen die we gebruiken:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Supabase (database &amp; opslag)</li>
                <li>Vercel (hosting van de applicatie)</li>
                <li>Sanity (beheersysteem voor content/blog)</li>
                <li>Een e-maildienst voor transactiemails (zoals bevestigingen)</li>
              </ul>
              <p className="mt-2">
                Met deze partijen sluiten we verwerkersovereenkomsten en we
                verkopen je gegevens <span className="font-semibold">nooit</span>.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-slate-800">
                6. Bewaartermijnen
              </h2>
              <p className="mb-2">
                We bewaren je gegevens niet langer dan noodzakelijk voor het
                doel waarvoor ze zijn verzameld.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Wachtlijst- of nieuwsbriefgegevens: tot je je uitschrijft of
                  tot 18 maanden inactiviteit.
                </li>
                <li>
                  Accountgegevens: zolang je account actief is en gedurende een
                  redelijke periode daarna, bijvoorbeeld voor
                  administratieve/boekhoudkundige verplichtingen.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-slate-800">
                7. Jouw rechten
              </h2>
              <p className="mb-2">
                Op basis van de AVG heb je verschillende rechten. Je kunt:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-2">
                <li>inzage vragen in de gegevens die we van je hebben;</li>
                <li>gegevens laten corrigeren of aanvullen;</li>
                <li>vragen om verwijdering van je gegevens;</li>
                <li>de verwerking (tijdelijk) laten beperken;</li>
                <li>bezwaar maken tegen bepaalde verwerkingen;</li>
                <li>
                  je toestemming intrekken (bijvoorbeeld voor nieuwsbrieven).
                </li>
              </ul>
              <p>
                Je kunt deze rechten uitoefenen door een e-mail te sturen naar{" "}
                <a
                  href="mailto:support@stap3.nl"
                  className="text-orange-600 hover:underline"
                >
                  support@stap3.nl
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-slate-800">
                8. Beveiliging
              </h2>
              <p className="mb-2">
                We nemen passende technische en organisatorische maatregelen om
                je gegevens te beveiligen tegen verlies of onrechtmatig gebruik.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Versleutelde verbindingen (HTTPS).</li>
                <li>Beveiligde opslag bij onze hosting- en databasediensten.</li>
                <li>Toegangsbeheer op basis van rollen en noodzaak.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-slate-800">
                9. Cookies
              </h2>
              <p>
                We gebruiken voornamelijk functionele en beperkte analytische
                cookies om de website en app goed te laten werken en te
                verbeteren. Op dit moment gebruiken we geen tracking- of
                advertentiecookies voor derden.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-slate-800">
                10. Wijzigingen
              </h2>
              <p className="mb-2">
                We kunnen deze privacyverklaring van tijd tot tijd wijzigen. De
                meest actuele versie vind je altijd op deze pagina.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-slate-800">
                11. Contact
              </h2>
              <p className="mb-2">
                Heb je vragen, zorgen of een klacht over hoe we met jouw
                gegevens omgaan?
              </p>
              <p>
                Mail ons via{" "}
                <a
                  href="mailto:support@stap3.nl"
                  className="text-orange-600 hover:underline"
                >
                  support@stap3.nl
                </a>
                . We reageren zo snel mogelijk.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </section>
  );
}
