// lib/email.ts
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const fromAddress = process.env.EMAIL_FROM || "Stap3 <no-reply@example.com>";

if (!resendApiKey) {
  throw new Error("RESEND_API_KEY is not set");
}

const resend = new Resend(resendApiKey);

type WaitlistEmailPayload = {
  to: string;
  name: string;
  plan: string | null;
};

export async function sendWaitlistConfirmationEmail({
  to,
  name,
  plan,
}: WaitlistEmailPayload) {
  const safeName = name || "ondernemer";
  const safePlan = plan || "Stap3";

  const subject = `Je staat op de wachtlijst voor ${safePlan}`;
  const previewText =
    "Bedankt voor je interesse in Stap3. Je staat nu op de wachtlijst.";

  const html = `
    <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color:#0f172a; line-height:1.6;">
      <h1 style="font-size:20px; margin-bottom:4px;">Bedankt voor je interesse in ${safePlan}!</h1>
      <p style="margin:4px 0 12px 0;">Hi ${safeName},</p>
      <p style="margin:4px 0;">
        Super dat je interesse hebt in <strong>Stap3</strong>. We bouwen Stap3 nu samen met een kleine groep
        early adopters, zodat alles écht goed werkt voordat we verder opschalen.
      </p>
      <p style="margin:4px 0;">
        Je staat vanaf nu op de <strong>wachtlijst</strong>. Zodra we weer nieuwe ondernemers toelaten, ben jij
        één van de eersten die bericht krijgt en ${safePlan} kunt uitproberen.
      </p>
      <p style="margin:12px 0 4px 0;">Met vriendelijke groet,<br/>
        <strong>Het Stap3 team</strong>
      </p>
    </div>
  `;

  return resend.emails.send({
    from: fromAddress,
    to,
    subject,
    html,
    headers: {
      "X-Entity-Ref-ID": `waitlist-${Date.now()}`,
    },
  });
}
