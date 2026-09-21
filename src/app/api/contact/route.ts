import { NextResponse } from "next/server";
import { siteConfig } from "@/data/portfolio";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  company?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function sendWithWeb3Forms(
  accessKey: string,
  name: string,
  email: string,
  subject: string,
  message: string,
) {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      name,
      email,
      subject: `Portfolio: ${subject}`,
      message,
      from_name: siteConfig.name,
    }),
  });

  const result = (await response.json()) as { success?: boolean; message?: string };
  if (!response.ok || !result.success) {
    throw new Error(result.message || "The message could not be delivered.");
  }
}

async function sendWithFormSubmit(
  name: string,
  email: string,
  subject: string,
  message: string,
) {
  const response = await fetch(`https://formsubmit.co/ajax/${siteConfig.email}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      name,
      email,
      _subject: `Portfolio: ${subject}`,
      message,
      _captcha: "false",
      _template: "table",
    }),
  });

  const result = (await response.json()) as { success?: string; message?: string };
  if (!response.ok || result.success !== "true") {
    throw new Error(result.message || "The message could not be delivered.");
  }
}

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;

  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const subject = body.subject?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { ok: false, error: "Please fill in all fields." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  try {
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY?.trim();
    if (accessKey) {
      await sendWithWeb3Forms(accessKey, name, email, subject, message);
    } else {
      await sendWithFormSubmit(name, email, subject, message);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      {
        ok: false,
        error: err instanceof Error ? err.message : "The message could not be delivered.",
      },
      { status: 502 },
    );
  }
}
