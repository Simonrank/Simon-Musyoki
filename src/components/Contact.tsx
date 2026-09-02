"use client";

import { Download, Send } from "lucide-react";
import { type FormEvent, useState } from "react";
import { siteConfig } from "@/data/portfolio";
import { downloadCV } from "@/lib/download-cv";
import { SectionHeading, SectionShell } from "@/components/ui/Section";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

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
    <SectionShell id="contact" className="contact-block">
      <SectionHeading
        eyebrow="Contact"
        title="Let's connect. Your questions answered."
      />
      <p className="section-lead">
        If you have any questions, get in touch by phone, email, the form below, or social
        media. I typically reply within one to two business days.
      </p>

      <div className="mt-8 grid items-start gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6">
        <form onSubmit={onSubmit} className="contact-card p-6 sm:p-7">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold text-foreground">Your name</span>
              <input
                required
                name="name"
                autoComplete="name"
                placeholder="John Doe"
                value={form.name}
                onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                className="contact-field"
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-foreground">Your email</span>
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                placeholder="janedoe@gmail.com"
                value={form.email}
                onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                className="contact-field"
              />
            </label>
          </div>

          <label className="mt-5 block">
            <span className="text-sm font-semibold text-foreground">Subject</span>
            <input
              required
              name="subject"
              placeholder="Let me know how I can help you"
              value={form.subject}
              onChange={(e) => setForm((p) => ({ ...p, subject: e.target.value }))}
              className="contact-field"
            />
          </label>

          <label className="mt-5 block">
            <span className="text-sm font-semibold text-foreground">Your message</span>
            <textarea
              required
              name="message"
              rows={4}
              placeholder="Leave a comment..."
              value={form.message}
              onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
              className="contact-field h-28 resize-none"
            />
          </label>

          <div className="hidden" aria-hidden="true">
            <input
              tabIndex={-1}
              autoComplete="off"
              value={form.company}
              onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
            />
          </div>

          <button type="submit" disabled={status === "sending"} className="contact-submit mt-6">
            <Send className="h-4 w-4" />
            {status === "sending" ? "Sending..." : "Send message"}
          </button>

          {status === "sent" ? (
            <p className="mt-4 text-sm font-medium" style={{ color: "var(--contact-ink)" }} role="status">
              {viaMailto
                ? "Your email app should open with the message ready. Send it from there."
                : "Message sent. I'll get back to you soon."}
            </p>
          ) : null}

          {status === "error" ? (
            <p className="mt-4 text-sm" style={{ color: "var(--contact-ink)" }} role="alert">
              {error}{" "}
              <a href={`mailto:${siteConfig.email}`} className="underline">
                {siteConfig.email}
              </a>
            </p>
          ) : null}
        </form>

        <div className="grid gap-5">
          <aside className="contact-card p-6 sm:p-7">
            <h3 className="text-sm font-bold tracking-wide text-foreground uppercase">
              Contact information
            </h3>
            <div className="mt-3 h-px w-full" style={{ background: "var(--contact-line)" }} />

            <div className="mt-6 space-y-6">
              <div>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="text-[0.98rem] font-medium text-foreground"
                >
                  {siteConfig.phone}
                </a>
                <span className="contact-swoosh" aria-hidden />
              </div>
              <div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-[0.98rem] font-medium text-foreground break-all"
                >
                  {siteConfig.email}
                </a>
                <span className="contact-swoosh" aria-hidden />
              </div>
              <p className="text-[0.98rem] text-foreground">{siteConfig.location}</p>
            </div>

            <button
              type="button"
              onClick={downloadCV}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: "var(--contact-ink)" }}
            >
              <Download className="h-4 w-4" />
              Download CV
            </button>
          </aside>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="font-display text-2xl font-medium tracking-tight text-foreground">
          Reach me instantly
        </h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card p-4 transition hover:opacity-90"
          >
            <LinkedInIcon className="h-5 w-5 text-[var(--contact-ink)]" />
            <p className="mt-3 font-semibold text-foreground">LinkedIn</p>
            <p className="mt-1 text-sm text-muted">Connect for professional enquiries</p>
            <p className="mt-3 text-xs font-semibold tracking-wide" style={{ color: "var(--contact-ink)" }}>
              View profile →
            </p>
          </a>
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card p-4 transition hover:opacity-90"
          >
            <GitHubIcon className="h-5 w-5 text-foreground" />
            <p className="mt-3 font-semibold text-foreground">GitHub</p>
            <p className="mt-1 text-sm text-muted">Code, projects &amp; open-source work</p>
            <p className="mt-3 text-xs font-semibold tracking-wide" style={{ color: "var(--contact-ink)" }}>
              View profile →
            </p>
          </a>
          <a
            href={siteConfig.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card p-4 transition hover:opacity-90"
          >
            <svg
              className="h-5 w-5 text-[var(--contact-ink)]"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <p className="mt-3 font-semibold text-foreground">WhatsApp</p>
            <p className="mt-1 text-sm text-muted">{siteConfig.phone} · Fastest response</p>
            <p className="mt-3 text-xs font-semibold tracking-wide" style={{ color: "var(--contact-ink)" }}>
              Open chat →
            </p>
          </a>
        </div>
      </div>
    </SectionShell>
  );
}
