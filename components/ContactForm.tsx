"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";
import { practiceAreas } from "@/lib/practiceAreas";
import { CheckIcon } from "@/components/Icons";

// NOTE: With no backend wired yet, submitting composes a pre-filled email to the
// firm via the visitor's mail client. For production, connect a form service
// (e.g. Formspree) or an API route — see REVIEW.md.

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const caseType = String(data.get("caseType") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || (!email && !phone) || !message) {
      setError("Please add your name, a way to reach you, and a short message.");
      return;
    }
    setError(null);

    const body = [
      `Name: ${name}`,
      `Phone: ${phone || "—"}`,
      `Email: ${email || "—"}`,
      `Type of case: ${caseType || "Not specified"}`,
      "",
      message,
    ].join("\n");

    const subject = `Free consultation request — ${name}`;
    window.location.href = `${siteConfig.emailHref}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-sapphire/20 bg-white p-8 text-center shadow-card">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sapphire/10 text-sapphire">
          <CheckIcon className="h-7 w-7" />
        </span>
        <h3 className="mt-5 font-serif text-2xl font-semibold text-ink">Almost done</h3>
        <p className="mt-3 leading-relaxed text-ink-muted">
          Your email should have opened, pre-filled and ready to send. If it didn&rsquo;t, just call me directly at{" "}
          <a href={siteConfig.phoneHref} className="font-semibold text-sapphire underline-offset-4 hover:underline">
            {siteConfig.phone}
          </a>{" "}
          or email{" "}
          <a href={siteConfig.emailHref} className="font-semibold text-sapphire underline-offset-4 hover:underline">
            {siteConfig.email}
          </a>
          .
        </p>
      </div>
    );
  }

  const field =
    "mt-1.5 w-full rounded-xl border border-line bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-sapphire";
  const label = "block text-sm font-semibold text-ink";

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Full name<span className="text-amber-dark"> *</span></label>
          <input id="name" name="name" type="text" autoComplete="name" required className={field} placeholder="Jane Doe" />
        </div>
        <div>
          <label htmlFor="phone" className={label}>Phone</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} placeholder="(561) 555-0123" />
        </div>
        <div>
          <label htmlFor="email" className={label}>Email</label>
          <input id="email" name="email" type="email" autoComplete="email" className={field} placeholder="you@email.com" />
        </div>
        <div>
          <label htmlFor="caseType" className={label}>Type of case</label>
          <select id="caseType" name="caseType" defaultValue="" className={field}>
            <option value="" disabled>Select one…</option>
            {practiceAreas.map((pa) => (
              <option key={pa.slug} value={pa.navLabel}>{pa.navLabel}</option>
            ))}
            <option value="Not sure / Other">Not sure / Other</option>
          </select>
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="message" className={label}>What happened?<span className="text-amber-dark"> *</span></label>
        <textarea id="message" name="message" required rows={5} className={field} placeholder="Tell me a little about your accident and injuries. Don't worry about getting every detail right." />
      </div>

      {error && (
        <p role="alert" className="mt-4 rounded-lg bg-amber/10 px-4 py-3 text-sm font-medium text-amber-dark">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-amber px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-amber-dark"
      >
        Send my free consultation request
      </button>
      <p className="mt-4 text-xs leading-relaxed text-ink-muted">
        Submitting this form does not create an attorney-client relationship. Please don&rsquo;t include confidential or
        time-sensitive details — for anything urgent, call {siteConfig.phone}.
      </p>
    </form>
  );
}
