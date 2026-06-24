import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, phone, message, website } =
      await request.json();

    if (website) {
      return Response.json({
        success: false,
        error: "Spam gedetecteerd",
      });
    }

    // Mail naar jou
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "tijnadding@hotmail.com",
      subject: `Nieuwe aanvraag van ${name}`,
      html: `
        <h1>Nieuwe aanvraag via Olympus 2000 Gym</h1>
        <p><strong>Naam:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefoon:</strong> ${phone}</p>
        <p><strong>Bericht:</strong></p>
        <p>${message}</p>
      `,
    });

    // Bevestigingsmail naar bezoeker
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Bedankt voor je aanvraag bij Olympus 2000 Gym",
      html: `
        <h1>Bedankt voor je aanvraag! 💪</h1>

        <p>Beste ${name},</p>

        <p>Bedankt voor je interesse in Olympus 2000 Gym.</p>

        <p>We hebben je bericht goed ontvangen en nemen zo snel mogelijk contact met je op.</p>

        <p>Sportieve groet,<br><strong>Olympus 2000 Gym</strong></p>
      `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ success: false, error });
  }
}