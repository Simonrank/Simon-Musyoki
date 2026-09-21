import { siteConfig } from "@/data/portfolio";

type ContactFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ProviderResult = {
  success?: boolean | string;
  message?: string;
};

async function parseResult(response: Response): Promise<ProviderResult> {
  const text = await response.text();
  try {
    return JSON.parse(text) as ProviderResult;
  } catch {
    throw new Error("The message could not be delivered.");
  }
}

async function sendWithWeb3Forms(fields: ContactFields, accessKey: string) {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      name: fields.name,
      email: fields.email,
      subject: `Portfolio: ${fields.subject}`,
      message: fields.message,
      from_name: siteConfig.name,
    }),
  });

  const result = await parseResult(response);
  if (!result.success) {
    throw new Error(result.message || "The message could not be delivered.");
  }
}

async function sendWithFormSubmit(fields: ContactFields) {
  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(siteConfig.email)}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name: fields.name,
        email: fields.email,
        _replyto: fields.email,
        _subject: `Portfolio: ${fields.subject}`,
        message: fields.message,
        _captcha: false,
        _template: "table",
      }),
    },
  );

  const result = await parseResult(response);
  const ok = result.success === true || result.success === "true";
  if (!ok) {
    throw new Error(
      result.message ||
        "The message could not be delivered. If this is the first send, check your inbox and confirm the form.",
    );
  }
}

export async function sendContactMessage(fields: ContactFields) {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();
  if (accessKey) {
    await sendWithWeb3Forms(fields, accessKey);
    return;
  }

  await sendWithFormSubmit(fields);
}
