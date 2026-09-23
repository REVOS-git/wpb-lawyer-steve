import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeroBg from "@/components/PageHeroBg";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.firmName} collects, uses, and protects the information you share through this website.`,
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: false },
};

const sections = [
  {
    h: "Information we collect",
    p: [
      "When you contact us through this website — by submitting the contact form, calling, or emailing — you may share personal information such as your name, phone number, email address, and details about your legal matter. We only collect information you choose to provide.",
      "Like most websites, we may also automatically collect limited technical information such as your browser type, device, and general usage, which helps us keep the site working and improve it.",
    ],
  },
  {
    h: "How we use your information",
    p: [
      "We use the information you provide solely to respond to your inquiry, evaluate a potential legal matter, and communicate with you. We do not sell, rent, or trade your personal information to third parties.",
    ],
  },
  {
    h: "Confidentiality and no attorney-client relationship",
    p: [
      "Contacting the firm through this website does not create an attorney-client relationship. Please do not send confidential or time-sensitive information through the website until such a relationship has been established in writing. Information you submit before we agree to represent you may not be treated as privileged.",
    ],
  },
  {
    h: "How we protect your information",
    p: [
      "We take reasonable measures to protect the information you share with us. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    h: "Third-party services",
    p: [
      "This site may use third-party services (for example, embedded maps) that have their own privacy practices. We encourage you to review the privacy policies of any third-party services you interact with.",
    ],
  },
  {
    h: "Your choices",
    p: [
      "You may contact us at any time to ask what information we have about you, to correct it, or to request that we delete it. If you'd rather not use the website form, you can always reach us by phone or email.",
    ],
  },
  {
    h: "Changes to this policy",
    p: [
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page. Your continued use of the website after changes are posted constitutes acceptance of the updated policy.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-sapphire">
        <PageHeroBg />
        <div className="relative mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
          <h1 className="mt-6 font-serif text-4xl font-semibold text-white sm:text-5xl">Privacy Policy</h1>
          <p className="mt-3 text-white/70">Last updated: June 2026</p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <p className="leading-relaxed text-ink">
          {siteConfig.firmName} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;the firm&rdquo;) respects your privacy. This
          policy explains what information we collect through this website and how we use and protect it.
        </p>

        {sections.map((s) => (
          <section key={s.h} className="mt-10">
            <h2 className="font-serif text-2xl font-semibold text-ink">{s.h}</h2>
            {s.p.map((para, i) => (
              <p key={i} className="mt-4 leading-relaxed text-ink-muted">
                {para}
              </p>
            ))}
          </section>
        ))}

        <section className="mt-10 rounded-2xl border border-line bg-white p-6 shadow-card">
          <h2 className="font-serif text-2xl font-semibold text-ink">Contact us</h2>
          <p className="mt-4 leading-relaxed text-ink-muted">
            If you have any questions about this Privacy Policy, please reach out:
          </p>
          <ul className="mt-4 space-y-1.5 text-ink">
            <li>
              <a href={siteConfig.phoneHref} className="font-semibold text-sapphire hover:underline">{siteConfig.phone}</a>
            </li>
            <li>
              <a href={siteConfig.emailHref} className="font-semibold text-sapphire hover:underline">{siteConfig.email}</a>
            </li>
            <li className="text-ink-muted">{siteConfig.address.full}</li>
          </ul>
        </section>
      </article>
    </>
  );
}
