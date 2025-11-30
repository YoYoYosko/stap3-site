// app/components/PermissionIntroSection.tsx
import React from "react";
import { Container } from "./Container";

export function PermissionIntroSection() {
  return (
    <section className="py-16 md:py-20" id="top1">
      <Container className="max-w-4xl">
        <div className="space-y-6 text-center text-slate-900">
                        <span className="inline-flex items-center rounded-full bg-yellow px-3 py-1 text-s font-semibold uppercase tracking-wide text-white ">
                Voor je een pakket kiest…
              </span>


          <h2 className="mt-4 text-3xl font-normal leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Je mag {""}
            <span className="bg-gradient-to-r from-orange-400 font-black to-orange-400  bg-clip-text text-transparent">vandaag kiezen voor gemak </span>— dat maakt je niet minder ondernemer.
          </h2>

          {/* <p className="text-lg font-bold leading-relaxed text-slate-700">
            Veel ondernemers geven zichzelf niet de toestemming om hulp te nemen. 
            Ze denken dat ze alles zelf moeten kunnen, of dat assistentie pas &quot;voor later&quot; is.

            Maar eerlijk? Ondernemen is al uitdagend genoeg. 
            Je hebt het recht om dingen simpeler te maken, zodat jij weer kunt focussen 
            op wat jij het beste doet.
          </p>

          <div className="mx-auto max-w-2xl rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
            <p className="text-base leading-relaxed text-slate-700">
              Als je ergens diep van binnen voelt:{' '}
              <span className="italic">
                &quot;Het zou zo fijn zijn als iemand me hierbij kan helpen…&quot;
              </span>{' '}
              — dan is dit precies het moment waarop je jezelf dat mag gunnen. 
              Geen schuldgevoel, geen twijfel. Alleen ruimte.
            </p>
          </div> */}
        </div>
      </Container>
    </section>
  );
}
