import { NextResponse } from "next/server";

type CareerPayload = {
  name: string;
  email?: string;
  phone?: string;
  resume_link?: string;
  linkedin_url: string;
  message?: string;
};

export async function POST(req: Request) {
  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbymVVzZJ6uUOOyM8rKLKnMXlpUHKDKq47_to7cZmeWI5f60EDu_nKprGsXEY82wFtWm/exec";

  if (!scriptUrl) {
    return NextResponse.json(
      { error: "Missing career script URL." },
      { status: 500 },
    );
  }

  let payload: CareerPayload;

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

  if (!payload.name || !payload.linkedin_url) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 },
    );
  }

  // ✅ Email OR Phone required
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
    console.error("Career script request failed:", error);
    return NextResponse.json(
      { error: "Failed to connect to Google Script." },
      { status: 502 },
    );
  }
}
