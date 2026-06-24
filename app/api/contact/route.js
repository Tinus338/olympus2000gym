import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const data = await resend.emails.send({
      from: "Olympus Gym <onboarding@resend.dev>",
      to: "tijnadding@hotmail.com", // 🔴 VERVANG DIT
      subject: "Nieuwe aanvraag via website",
      html: `
        <h2>Nieuwe aanvraag</h2>
        <p><b>Naam:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Bericht:</b> ${message}</p>
      `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}