"use client";

import { Download, Send } from "lucide-react";
import { type FormEvent, useState } from "react";
import { siteConfig } from "@/data/portfolio";
import { downloadCV } from "@/lib/download-cv";
import { SectionHeading, SectionShell } from "@/components/ui/Section";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
  company: string;
};

const initial: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
  company: "",
};

const channels = [
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  {
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
  },
  { label: "WhatsApp", value: "Fastest response", href: siteConfig.social.whatsapp },
  { label: "LinkedIn", value: "simon-musyoki", href: siteConfig.social.linkedin },
  { label: "GitHub", value: "Simonrank", href: siteConfig.social.github },
] as const;

export default function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const [viaMailto, setViaMailto] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");
    setViaMailto(false);

    const mailto = `mailto:${siteConfig.email}?${new URLSearchParams({
      subject: `Portfolio: ${form.subject}`,
      body: `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    }).toString()}`;

    const openMail = () => {
      window.location.href = mailto;
      setViaMailto(true);
      setStatus("sent");
      setForm(initial);
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = (await response.json()) as {
        ok?: boolean;
        error?: string;
        mailto?: string;
      };

      if (result.mailto) {
        window.location.href = result.mailto;
        setViaMailto(true);
        setStatus("sent");
        setForm(initial);
        return;
      }

      if (!response.ok || !result.ok) {
        openMail();
        return;
      }

      setStatus("sent");
      setForm(initial);
    } catch {
      openMail();
    }
  }

  return (
    <SectionShell id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="If the work is a fit, write."
        lead="Roles, collaborations, and product questions. I typically reply within one to two business days."
      />

      <div className="mt-10 grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
        <form onSubmit={onSubmit} noValidate={false} data-reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="t-label text-muted">Name</span>
              <input
                required
                name="name"
                autoComplete="name"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                className="contact-field"
              />
            </label>
            <label className="block">
              <span className="t-label text-muted">Email</span>
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                className="contact-field"
              />
            </label>
          </div>

          <label className="mt-5 block">
            <span className="t-label text-muted">Subject</span>
            <input
              required
              name="subject"
              placeholder="What this is about"
              value={form.subject}
              onChange={(e) => setForm((p) => ({ ...p, subject: e.target.value }))}
              className="contact-field"
            />
          </label>

          <label className="mt-5 block">
            <span className="t-label text-muted">Message</span>
            <textarea
              required
              name="message"
              rows={5}
              placeholder="A short note is enough."
              value={form.message}
              onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
              className="contact-field resize-y"
            />
          </label>

          <div className="hidden" aria-hidden="true">
            <label>
              Company
              <input
                tabIndex={-1}
                autoComplete="off"
                name="company"
                value={form.company}
                onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
              />
            </label>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <button type="submit" disabled={status === "sending"} className="contact-submit">
              <Send className="h-4 w-4" />
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
            <button
              type="button"
              onClick={downloadCV}
              className="inline-flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.12em] text-muted uppercase transition-colors hover:text-accent-deep"
            >
              <Download className="h-3.5 w-3.5" />
              Download CV
            </button>
          </div>

          <p aria-live="polite" className="sr-only">
            {status === "sending" ? "Sending your message" : ""}
          </p>

          {status === "sent" ? (
            <p className="mt-4 text-sm text-accent-deep" role="status">
              {viaMailto
                ? "Your email app should open with the message ready. Send it from there."
                : "Message sent. I'll get back to you soon."}
            </p>
          ) : null}

          {status === "error" ? (
            <p className="mt-4 text-sm text-accent-deep" role="alert">
              {error}{" "}
              <a href={`mailto:${siteConfig.email}`} className="underline underline-offset-4">
                {siteConfig.email}
              </a>
            </p>
          ) : null}
        </form>

        <aside data-reveal>
          <h3 className="t-label">Direct</h3>
          <ul className="mt-4 border-t border-border">
            {channels.map((channel) => (
              <li key={channel.label} className="border-b border-border">
                <a
                  href={channel.href}
                  {...(channel.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-baseline justify-between gap-4 py-3.5 transition-colors hover:text-accent-deep"
                >
                  <span className="t-meta shrink-0 text-faint">{channel.label}</span>
                  <span className="truncate text-right text-sm text-foreground group-hover:text-accent-deep">
                    {channel.value}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="t-small mt-4">{siteConfig.location}</p>
        </aside>
      </div>
    </SectionShell>
  );
}
