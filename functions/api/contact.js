// Cloudflare Pages Function — POST /api/contact
// Validates a contact-form submission and emails it via Resend.
// Requires the environment variable RESEND_API_KEY (set in the Cloudflare
// Pages dashboard → Settings → Environment variables).

const TO = "rinalds.derics@gmail.com";
const FROM = "Website contact <onboarding@resend.dev>"; // Resend shared sender (works without a custom domain, delivers to your own address)

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export async function onRequestPost(context) {
  const { request, env } = context;

  let data;
  try {
    data = await request.json();
  } catch {
    return json({ ok: false, error: "invalid_request" }, 400);
  }

  const name = (data.name || "").toString().trim();
  const email = (data.email || "").toString().trim();
  const message = (data.message || "").toString().trim();
  const honeypot = (data.company || "").toString().trim(); // hidden field; bots fill it

  // Silently accept bot submissions so they don't retry, but don't send.
  if (honeypot) return json({ ok: true });

  if (!name || !email || !message) {
    return json({ ok: false, error: "missing_fields" }, 400);
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || email.length > 254) {
    return json({ ok: false, error: "invalid_email" }, 400);
  }
  if (name.length > 120 || message.length > 5000) {
    return json({ ok: false, error: "too_long" }, 400);
  }

  if (!env.RESEND_API_KEY) {
    return json({ ok: false, error: "not_configured" }, 500);
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      reply_to: email,
      subject: `Website message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    }),
  });

  if (!res.ok) {
    return json({ ok: false, error: "send_failed" }, 502);
  }

  return json({ ok: true });
}
