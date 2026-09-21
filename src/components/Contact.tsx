"use client";

import { Download, Send } from "lucide-react";
import { type FormEvent, useState } from "react";
import { siteConfig } from "@/data/portfolio";
import { downloadCV } from "@/lib/download-cv";
import { sendContactMessage } from "@/lib/send-contact";
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
  { label: "WhatsApp", value: "Fastest response", href: siteConfig.social.whatsapp },
  { label: "LinkedIn", value: "simon-musyoki", href: siteConfig.social.linkedin },
  { label: "GitHub", value: "Simonrank", href: siteConfig.social.github },
] as const;

export default function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    if (form.company) {
      setStatus("sent");
      setForm(initial);
      return;
    }

    try {
      await sendContactMessage({
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject.trim(),
        message: form.message.trim(),
      });
      setStatus("sent");
      setForm(initial);
    } catch (err) {
      setError(err instanceof Error ? err.message : "The message could not be delivered.");
      setStatus("error");
    }
  }

  return (
    <SectionShell id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="If the work is a fit, write."
        lead="Roles, collaborations, product questions. I typically reply within one to two days."
      />

      <div className="mt-10 grid items-start gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(16rem,0.85fr)] xl:gap-24">
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
              Message sent. I'll get back to you soon.
            </p>
          ) : null}

          {status === "error" ? (
            <p className="mt-4 text-sm text-accent-deep" role="alert">
              {error}
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
