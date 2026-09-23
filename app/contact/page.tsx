import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeroBg from "@/components/PageHeroBg";
import { siteConfig } from "@/lib/siteConfig";
import { PhoneIcon, MailIcon, PinIcon, ClockIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact | Free Consultation with Steven Kuveikis",
  description:
    "Contact Jupiter personal injury attorney Steven Kuveikis for a free, no-obligation consultation. Call (561) 354-6969 or send a message. Calls answered 24/7.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const contactItems = [
    { icon: PhoneIcon, label: "Call or text", value: siteConfig.phone, href: siteConfig.phoneHref },
    { icon: MailIcon, label: "Email", value: siteConfig.email, href: siteConfig.emailHref },
    { icon: PinIcon, label: "Office", value: siteConfig.address.full, href: siteConfig.mapLink },
    { icon: ClockIcon, label: "Hours", value: siteConfig.hours, sub: siteConfig.hoursNote },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-sapphire">
        <PageHeroBg />
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <h1 className="mt-6 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Let&rsquo;s talk about your case
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
            The consultation is free and there&rsquo;s no obligation. Call me directly, or send a message and I&rsquo;ll get
            back to you personally.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* Left: details */}
          <div>
            <h2 className="font-serif text-2xl font-semibold text-ink">Reach me directly</h2>
            <ul className="mt-6 space-y-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const inner = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sapphire/10 text-sapphire">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wide text-ink-muted">{item.label}</p>
                      <p className="font-medium text-ink">{item.value}</p>
                      {item.sub && <p className="text-sm text-ink-muted">{item.sub}</p>}
                    </div>
                  </>
                );
                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5 shadow-card transition-colors hover:border-sapphire/30"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5 shadow-card">
                        {inner}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Map */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-line shadow-card">
              <iframe
                title={`Map to ${siteConfig.firmName}`}
                src={siteConfig.mapEmbedSrc}
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: form */}
          <div>
            <h2 className="font-serif text-2xl font-semibold text-ink">Send a message</h2>
            <p className="mt-2 text-ink-muted">Tell me what happened and I&rsquo;ll be in touch.</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
