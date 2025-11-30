// app/api/waitlist/route.ts
import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";
import { sendWaitlistConfirmationEmail } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { plan, name, company, companyType, email, consent } = body;

    if (!name || !email || !consent) {
      return NextResponse.json(
        { error: "Naam, e-mail en consent zijn verplicht." },
        { status: 400 }
      );
    }

    // 1) Opslaan in Supabase
    const { error } = await supabaseServer.from("waitlist_signups").insert({
      plan,
      name,
      company,
      company_type: companyType,
      email,
      consent,
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Kon je inschrijving niet opslaan." },
        { status: 500 }
      );
    }

    // 2) Follow-up e-mail sturen (fouten loggen, maar response niet breken)
    try {
      await sendWaitlistConfirmationEmail({
        to: email,
        name,
        plan,
      });
    } catch (mailError) {
      console.error("Error sending waitlist confirmation email:", mailError);
      // Geen throw — de signup is wél gelukt, alleen mail niet.
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Waitlist API error:", err);
    return NextResponse.json(
      { error: "Onverwachte fout." },
      { status: 500 }
    );
  }
}
