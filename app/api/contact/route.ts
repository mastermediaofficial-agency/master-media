import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email?: string;
  phone?: string;
  message?: string;
};

export async function POST(req: Request) {
  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbyNBiW36P_CQsRwpSGl5iz9cy4XwjSCJxeib-ieY3eUReI7fpoGy-OvslHlnJVZOkst8g/exec";
  if (!scriptUrl) {
    return NextResponse.json(
      { error: "Missing GOOGLE_SCRIPT_WEB_APP_URL environment variable." },
      { status: 500 },
    );
  }

  let payload: ContactPayload;

  try {
    payload = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON payload." },
      { status: 400 },
    );
  }

  const hasEmail = payload.email && payload.email.trim() !== "";
  const hasPhone = payload.phone && payload.phone.trim() !== "";

  if (!payload.name) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }

  // Email OR Phone required
  if (!hasEmail && !hasPhone) {
    return NextResponse.json(
      { error: "Email or phone number is required." },
      { status: 400 },
    );
  }

  try {
    const upstream = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    if (!upstream.ok) {
      return NextResponse.json(
        { error: "Google Script returned an error." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Google Script request failed:", error);
    return NextResponse.json(
      { error: "Failed to connect to Google Script." },
      { status: 502 },
    );
  }
}
