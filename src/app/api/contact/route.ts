import { NextRequest, NextResponse } from "next/server";

const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) ?? [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  rateLimitMap.set(ip, recent);

  if (recent.length >= RATE_LIMIT_MAX) {
    return true;
  }
  recent.push(now);
  return false;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { success: false, error: "För många förfrågningar. Försök igen senare." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Ogiltig förfrågan." },
      { status: 400 }
    );
  }

  const { name, email, phone, message, company } = body as Record<
    string,
    string
  >;

  // Honeypot check – bots fill this in, real users don't see it
  if (company) {
    // Silently accept but do nothing
    return NextResponse.json({ success: true });
  }

  // Validation
  if (!name || typeof name !== "string" || name.trim().length === 0) {
    return NextResponse.json(
      { success: false, error: "Namn är obligatoriskt." },
      { status: 400 }
    );
  }

  if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { success: false, error: "Ange en giltig e-postadress." },
      { status: 400 }
    );
  }

  if (!message || typeof message !== "string" || message.trim().length === 0) {
    return NextResponse.json(
      { success: false, error: "Meddelande är obligatoriskt." },
      { status: 400 }
    );
  }

  // Reference build – log instead of sending email
  // TODO: Connect to email service (Resend, Nodemailer, etc.) for production
  console.log("📧 Kontaktformulär (referensbygge – ej skickat):", {
    name: name.trim(),
    email: email.trim(),
    phone: phone?.trim() ?? "",
    message: message.trim(),
  });

  return NextResponse.json({ success: true });
}
