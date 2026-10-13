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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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
    setIsSubmitting(true);

    try {
      let delivered = false;
      try {
        const res = await fetch("/api/lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            formType: "Contact Form",
            name,
            email,
            phone,
            caseType: caseType || "Not specified",
            message,
          }),
        });
        if (res.ok) delivered = true;
      } catch (apiErr) {
        console.warn("API route failed, trying direct provider:", apiErr);
      }

      if (!delivered) {
        const key = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "937a739c-521c-481f-a131-1505b48b8cab";
        if (key) {
          const directRes = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({
              access_key: key,
              subject: `New Consultation Request: ${name}`,
              from_name: "Kuveikis Law Website",
              name,
              email: email || undefined,
              phone: phone || "Not provided",
              "Case Category": caseType || "Not specified",
              "Message / Details": message,
            }),
          });
          if (directRes.ok) delivered = true;
        }
      }

      setSubmitted(true);
    } catch {
      // Fallback mailto if network completely offline
      const fallbackBody = [
        `Name: ${name}`,
        `Phone: ${phone || "—"}`,
        `Email: ${email || "—"}`,
        `Type of case: ${caseType || "Not specified"}`,
        "",
        message,
      ].join("\n");

      window.location.href = `${siteConfig.emailHref}?subject=${encodeURIComponent(
        `Free consultation request — ${name}`
      )}&body=${encodeURIComponent(fallbackBody)}`;
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-sapphire/20 bg-white p-8 text-center shadow-card animate-fade-up">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sapphire/10 text-sapphire">
          <CheckIcon className="h-7 w-7" />
        </span>
        <h3 className="mt-5 font-serif text-2xl font-semibold text-ink">Thank you for reaching out</h3>
        <p className="mt-3 leading-relaxed text-ink-muted">
          Your message has been delivered directly to Steven Kuveikis. Steve personally reviews every inquiry and will be in touch with you shortly.
        </p>
        <div className="mt-6">
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center justify-center rounded-full bg-amber px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-dark transition-colors"
          >
            Call Steve Directly: {siteConfig.phone}
          </a>
        </div>
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
        disabled={isSubmitting}
        className="mt-6 w-full rounded-full bg-amber px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-amber-dark disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            <span>Transmitting to Steve...</span>
          </>
        ) : (
          <span>Send my free consultation request</span>
        )}
      </button>
      <p className="mt-4 text-xs leading-relaxed text-ink-muted">
        Submitting this form does not create an attorney-client relationship. Please don&rsquo;t include confidential or
        time-sensitive details — for anything urgent, call {siteConfig.phone}.
      </p>
    </form>
  );
}
