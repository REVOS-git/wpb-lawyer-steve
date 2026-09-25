import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PracticeGrid from "@/components/PracticeGrid";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBanner from "@/components/CtaBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeroBg from "@/components/PageHeroBg";
import { Button } from "@/components/Button";
import { PhoneIcon, CheckIcon, ScaleIcon } from "@/components/Icons";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Personal Injury Lawyer in Jupiter, FL",
  description:
    "Steven Kuveikis handles personal injury cases across Palm Beach County — car and truck accidents, motorcycle crashes, slip and fall, negligent security, rideshare, and wrongful death. Free consultation.",
  alternates: { canonical: "/personal-injury" },
};

const process = [
  { title: "Free case review", body: "We talk about what happened. No cost, no pressure, no obligation." },
  { title: "Investigation", body: "I preserve evidence, obtain reports and footage, and identify every responsible party." },
  { title: "Medical documentation", body: "I work with your providers to document the full scope of your injuries." },
  { title: "Demand & negotiation", body: "I value your claim honestly and push the insurer for a fair settlement." },
  { title: "Litigation if needed", body: "If they won't be fair, I'm prepared to take your case to court." },
];

const hubFaqs = [
  {
    q: "What types of personal injury cases do you handle?",
    a: "Car, truck, and motorcycle accidents; slip and fall and other premises-liability claims; negligent security; Uber, Lyft, and delivery-driver crashes; and wrongful death. Personal injury is the entire focus of my practice.",
  },
  {
    q: "How is a personal injury case paid for?",
    a: "On a contingency fee. You pay nothing up front, and my fee comes out of the recovery only if I win. Your first consultation is always free.",
  },
  {
    q: "How long will my case take?",
    a: "It depends on the severity of your injuries and whether the insurer negotiates in good faith. Some cases resolve in months; more serious or contested cases take longer. I'll give you a realistic picture from the start.",
  },
  {
    q: "Do you only take cases in Jupiter?",
    a: "No. I'm based in Jupiter and know Palm Beach County well, but I represent injured people throughout South Florida — and I'm licensed in both Florida and Georgia.",
  },
];

export default function PersonalInjuryHub() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-sapphire">
        <PageHeroBg />
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-amber/20 blur-3xl" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Personal Injury" }]} />
            <h1 className="mt-6 text-balance font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Personal injury is all I do — and I do it personally
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
              If someone else&rsquo;s carelessness left you hurt, you deserve a lawyer who knows this area of law cold and
              gives your case his full attention. That&rsquo;s the whole reason I built this practice.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={siteConfig.phoneHref} variant="amber" size="lg">
                <PhoneIcon className="h-5 w-5" /> Call {siteConfig.phone}
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white/40 text-white hover:bg-white hover:text-sapphire"
              >
                Free consultation
              </Button>
            </div>
          </div>

          {/* Right: Steve portrait with Jupiter lighthouse */}
          <div className="mx-auto w-full max-w-sm">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl border-2 border-white/20 bg-sapphire-dark shadow-lift ring-1 ring-white/10">
              <Image
                src="/images/steve-outdoor-lighthouse.png"
                alt="Steven Kuveikis, Esq. with Jupiter Inlet Lighthouse in the background"
                fill
                priority
                quality={95}
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-semibold text-amber-light backdrop-blur-md">
                  Palm Beach County Native
                </span>
                <p className="mt-2 font-serif text-lg font-semibold text-white drop-shadow-sm">
                  Steven Kuveikis, Esq.
                </p>
                <p className="text-xs text-white/80">
                  Advocating for injured Floridians since 1995
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice grid */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-dark">Cases I handle</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">Choose the area that fits your situation</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            Each page explains what to do, how Florida law works, and how I approach the case. Not sure where you
            fit? Just call — I&rsquo;ll point you in the right direction.
          </p>
        </div>
        <div className="mt-12">
          <PracticeGrid />
        </div>
      </section>

      {/* Why one focus */}
      <section className="bg-cream/60">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-3">
              <ScaleIcon className="h-7 w-7 text-sapphire" />
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-dark">The Florida basics</p>
            </div>
            <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">Three things every injured Floridian should know</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              Personal injury law changed significantly in Florida in 2023. Here&rsquo;s the short version of what
              now affects nearly every case.
            </p>
          </div>
          <ul className="space-y-4">
            {[
              { t: "You have two years", b: "The deadline to file most injury lawsuits was shortened from four years to two. Miss it and your claim is usually barred." },
              { t: "51% bars recovery", b: "Under modified comparative negligence, if you're found more than 50% at fault, you recover nothing. At 50% or less, your recovery is reduced by your share." },
              { t: "No-fault still applies to autos", b: "Your own PIP coverage pays the first $10,000 of medical bills after a car crash — but only if you seek care within 14 days." },
            ].map((item) => (
              <li key={item.t} className="flex items-start gap-4 rounded-xl border border-line bg-white p-5 shadow-card">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sapphire/10 text-sapphire">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="font-semibold text-ink">{item.t}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-ink-muted">{item.b}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-dark">The process</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">What to expect, step by step</h2>
        </div>
        <ol className="mt-12 space-y-4">
          {process.map((step, i) => (
            <li key={step.title} className="flex items-start gap-5 rounded-2xl border border-line bg-white p-6 shadow-card">
              <span className="font-serif text-3xl font-semibold text-sapphire/25">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-serif text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-1 leading-relaxed text-ink-muted">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 pb-20 sm:px-6">
        <h2 className="text-center text-3xl font-semibold text-ink sm:text-4xl">Common questions</h2>
        <div className="mt-10">
          <FaqAccordion items={hubFaqs} />
        </div>
        <p className="mt-8 text-center text-ink-muted">
          Want to talk it through?{" "}
          <Link href="/contact" className="font-semibold text-sapphire underline-offset-4 hover:underline">
            Request a free consultation
          </Link>
          .
        </p>
      </section>

      <CtaBanner />
    </>
  );
}
