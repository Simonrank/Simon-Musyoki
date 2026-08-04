"use client";

import { Download, Mail, MapPin, Phone, Send } from "lucide-react";
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
};

const initial: FormState = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const body = [`Name: ${form.name}`, `Email: ${form.email}`, "", form.message].join("\n");
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      form.subject,
    )}&body=${encodeURIComponent(body)}`;
    setStatus("sent");
    setForm(initial);
  }

  return (
    <SectionShell id="contact">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s discuss your next analytics or AI system"
            lead="Open to senior Data Scientist, AI Engineer, Analytics Engineer, and consulting conversations. I typically reply within one to two business days."
          />

          <ul className="mt-10 space-y-5">
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-5 w-5 text-secondary" />
              <div>
                <p className="text-sm text-muted">Email</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-medium text-foreground underline-offset-4 hover:underline"
                >
                  {siteConfig.email}
                </a>
              </div>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-secondary" />
              <div>
                <p className="text-sm text-muted">Phone</p>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="font-medium text-foreground underline-offset-4 hover:underline"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-secondary" />
              <div>
                <p className="text-sm text-muted">Location</p>
                <p className="font-medium text-foreground">{siteConfig.location}</p>
              </div>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary px-3"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary px-3"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
            <button type="button" onClick={downloadCV} className="btn btn-secondary px-3">
              <Download className="h-4 w-4" />
              CV
            </button>
          </div>
        </div>

        <form onSubmit={onSubmit} className="glass rounded-3xl p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm text-muted">Name</span>
              <input
                required
                value={form.name}
                onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                className="w-full rounded-xl border border-border bg-background/60 px-3.5 py-3 text-foreground outline-none transition focus:border-secondary"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-muted">Email</span>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                className="w-full rounded-xl border border-border bg-background/60 px-3.5 py-3 text-foreground outline-none transition focus:border-secondary"
              />
            </label>
          </div>

          <label className="mt-5 block">
            <span className="mb-2 block text-sm text-muted">Subject</span>
            <input
              required
              value={form.subject}
              onChange={(e) => setForm((p) => ({ ...p, subject: e.target.value }))}
              className="w-full rounded-xl border border-border bg-background/60 px-3.5 py-3 text-foreground outline-none transition focus:border-secondary"
            />
          </label>

          <label className="mt-5 block">
            <span className="mb-2 block text-sm text-muted">Message</span>
            <textarea
              required
              rows={6}
              value={form.message}
              onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
              className="w-full resize-y rounded-xl border border-border bg-background/60 px-3.5 py-3 text-foreground outline-none transition focus:border-secondary"
            />
          </label>

          <button type="submit" className="btn btn-primary mt-6 w-full sm:w-auto">
            <Send className="h-4 w-4" />
            Send Message
          </button>

          {status === "sent" ? (
            <p className="mt-4 text-sm text-secondary" role="status">
              Opening your email client with a drafted message.
            </p>
          ) : null}
        </form>
      </div>
    </SectionShell>
  );
}
