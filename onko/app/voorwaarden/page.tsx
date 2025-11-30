import { Container } from "@/app/components/Container";

export default function TermsPage() {
  return (
    <section className="border-b border-slate-100 bg-slate-50/60">
      <Container className="py-10 md:py-16 space-y-10">
        {/* Breadcrumb */}
        <div className="text-xs text-slate-500 mb-2">
          <a href="/" className="hover:text-orange-600">
            Home
          </a>{" "}
          <span className="mx-1 text-slate-400">/</span>
          <span>Algemene voorwaarden</span>
        </div>

        {/* Hero / Titelblok */}
        <header className="max-w-3xl space-y-4">
          <p className="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-orange-600">
            Juridisch
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
            Algemene voorwaarden
          </h1>
          <p className="text-sm md:text-base text-slate-600">
            Dit zijn de algemene voorwaarden van Stap3. Hierin lees je wat je
            van ons mag verwachten, maar ook wat wij van jou verwachten wanneer
            je gebruikmaakt van onze diensten.
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
                1. Definities
              </h2>
              <p className="mb-2">
                In deze voorwaarden wordt verstaan onder:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <span className="font-semibold">Stap3</span>: de aanbieder van
                  de digitale assistent voor zzp&apos;ers en kleine ondernemers.
                </li>
                <li>
                  <span className="font-semibold">Gebruiker</span>: iedere
                  natuurlijke persoon of onderneming die de website, app of
                  dienst van Stap3 gebruikt.
                </li>
                <li>
                  <span className="font-semibold">Diensten</span>: alle
                  functionaliteiten, informatie en tools die Stap3 beschikbaar
                  stelt, waaronder maar niet beperkt tot het ondernemerskompas,
                  reminders, content en advies in gewone taal.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-slate-800">
                2. Toepasselijkheid
              </h2>
              <p className="mb-2">
                Deze algemene voorwaarden zijn van toepassing op elk gebruik van
                de website, app en diensten van Stap3.
              </p>
              <p>
                Door gebruik te maken van Stap3 ga je akkoord met deze
                voorwaarden. Als je het niet eens bent met (een deel van) deze
                voorwaarden, maak dan geen gebruik van onze diensten.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-slate-800">
                3. Gebruik van de dienst
              </h2>
              <p className="mb-2">
                Je mag Stap3 gebruiken voor jouw eigen onderneming, binnen de
                grenzen van de wet en deze voorwaarden.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Je bent zelf verantwoordelijk voor de gegevens die je invoert.
                </li>
                <li>
                  Je mag de dienst niet misbruiken, bijvoorbeeld door te
                  proberen in te breken, data te scrapen of de infrastructuur te
                  overbelasten.
                </li>
                <li>
                  Het is niet toegestaan om Stap3 (of delen daarvan) te
                  reproduceren, te verkopen, door te verhuren of als eigen
                  dienst aan te bieden zonder schriftelijke toestemming.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-slate-800">
                4. Abonnementen en prijzen
              </h2>
              <p className="mb-2">
                Tijdens de beta-fase kan Stap3 (gedeeltelijk) gratis worden
                aangeboden. Zodra betaalde abonnementen beschikbaar zijn:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Worden prijzen duidelijk vermeld op de website voordat je een
                  abonnement afsluit.
                </li>
                <li>
                  Worden abonnementen doorgaans maandelijks vooraf in rekening
                  gebracht.
                </li>
                <li>
                  Kun je in principe maandelijks opzeggen, met inachtneming van
                  de aangegeven opzegtermijn.
                </li>
                <li>
                  Vindt er geen restitutie plaats voor reeds betaalde periodes,
                  tenzij anders expliciet vermeld.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-slate-800">
                5. Wachtlijst en early access
              </h2>
              <p className="mb-2">
                Als je je aanmeldt voor de wachtlijst of early access:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Geef je toestemming om door Stap3 per e-mail benaderd te
                  worden over toegang, updates en relevante informatie.
                </li>
                <li>
                  Kunnen we niet garanderen dat je toegang krijgt; plaatsing
                  op de wachtlijst is geen recht op deelname.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-slate-800">
                6. Intellectueel eigendom
              </h2>
              <p className="mb-2">
                Alle rechten van intellectueel eigendom met betrekking tot de
                website, app, content, designs en software van Stap3 berusten
                bij Stap3 of haar licentiegevers.
              </p>
              <p>
                Het is niet toegestaan om zonder schriftelijke toestemming
                onderdelen van Stap3 te kopiëren, openbaar te maken of te
                verveelvoudigen, anders dan nodig is voor normaal gebruik van
                de dienst.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-slate-800">
                7. Geen individueel (fiscaal/juridisch) advies
              </h2>
              <p className="mb-2">
                De informatie in Stap3 is bedoeld als algemene uitleg en
                ondersteuning. Hoewel we ons best doen om informatie actueel en
                correct te houden, is het géén individueel juridisch, fiscaal of
                boekhoudkundig advies.
              </p>
              <p>
                Voor beslissingen met grote impact op jouw bedrijf raden we aan
                om een professionele adviseur (zoals een accountant, fiscalist
                of jurist) te raadplegen.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-slate-800">
                8. Aansprakelijkheid
              </h2>
              <p className="mb-2">
                We doen ons uiterste best om Stap3 stabiel, veilig en nuttig te
                maken. Toch kunnen we niet garanderen dat de dienst altijd
                foutloos of ononderbroken beschikbaar is.
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-2">
                <li>
                  Stap3 is niet aansprakelijk voor indirecte schade, zoals
                  gederfde winst, gemiste kansen of gevolgschade.
                </li>
                <li>
                  Onze totale aansprakelijkheid is in alle gevallen beperkt tot
                  het bedrag dat je in de laatste drie maanden voor de dienst
                  hebt betaald, tenzij dwingend recht anders bepaalt.
                </li>
              </ul>
              <p>
                Deze beperking geldt niet bij opzet of bewuste roekeloosheid
                van Stap3.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-slate-800">
                9. Wijzigingen in de diensten
              </h2>
              <p className="mb-2">
                We ontwikkelen Stap3 continu door. Dat betekent dat we
                functionaliteiten kunnen toevoegen, wijzigen of verwijderen.
              </p>
              <p>
                Waar mogelijk informeren we je tijdig over wijzigingen die
                impact hebben op jouw gebruik, maar we behouden ons het recht
                voor om de dienst op elk moment aan te passen of te
                beëindigen.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-slate-800">
                10. Opschorting en beëindiging
              </h2>
              <p className="mb-2">
                We mogen je toegang tot Stap3 (tijdelijk) beperken of
                beëindigen als:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>je deze voorwaarden niet naleeft;</li>
                <li>
                  er (vermoeden van) misbruik, fraude of veiligheidsrisico&apos;s
                  zijn;
                </li>
                <li>
                  we daar om technische of juridische redenen toe gedwongen
                  worden.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-slate-800">
                11. Overmacht
              </h2>
              <p>
                Bij overmacht (zoals storingen bij hostingproviders, stroomuitval,
                internetproblemen, cyberaanvallen of andere omstandigheden waar
                wij redelijkerwijs geen invloed op hebben) zijn we niet
                aansprakelijk voor daaruit voortvloeiende schade of dataverlies.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-slate-800">
                12. Toepasselijk recht en geschillen
              </h2>
              <p className="mb-2">
                Op deze algemene voorwaarden is Nederlands recht van toepassing.
              </p>
              <p>
                Geschillen die niet in goed overleg kunnen worden opgelost,
                worden voorgelegd aan de bevoegde rechter in Nederland.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-slate-800">
                13. Contact
              </h2>
              <p className="mb-2">
                Heb je vragen over deze voorwaarden of over je gebruik van
                Stap3?
              </p>
              <p>
                Mail ons via{" "}
                <a
                  href="mailto:support@stap3.nl"
                  className="text-orange-600 hover:underline"
                >
                  support@stap3.nl
                </a>
                . We denken graag met je mee.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </section>
  );
}
