import Link from "next/link";
import type { PracticeArea } from "@/lib/practiceAreas";
import { practiceAreas } from "@/lib/practiceAreas";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeroBg from "@/components/PageHeroBg";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBanner from "@/components/CtaBanner";
import { Button } from "@/components/Button";
import { siteConfig } from "@/lib/siteConfig";
import {
  PracticeIcon,
  PhoneIcon,
  CheckIcon,
  ScaleIcon,
  ArrowRight,
} from "@/components/Icons";

export default function PracticeAreaLayout({ area }: { area: PracticeArea }) {
  const related = practiceAreas.filter((p) => p.slug !== area.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-sapphire">
        <PageHeroBg />
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-amber/20 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Personal Injury", href: "/personal-injury" },
              { label: area.shortTitle },
            ]}
          />
          <div className="mt-6 flex items-center gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-amber-light">
              <PracticeIcon name={area.icon} className="h-7 w-7" />
            </span>
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-light">
              Jupiter · Palm Beach County
            </span>
          </div>
          <h1 className="mt-5 text-balance font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            {area.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">{area.heroSummary}</p>
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
      </section>

      {/* Body */}
      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        {/* Intro */}
        <div className="space-y-5 text-lg leading-relaxed text-ink">
          {area.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Local angle */}
        <div className="mt-10 rounded-2xl border border-amber/25 bg-amber/5 p-6 sm:p-8">
          <h2 className="font-serif text-xl font-semibold text-ink">Local knowledge that matters</h2>
          <p className="mt-3 leading-relaxed text-ink-muted">{area.localAngle}</p>
        </div>

        {/* What to do */}
        <section className="mt-14">
          <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
            What to do after {area.shortTitle.toLowerCase()}
          </h2>
          <ol className="mt-6 space-y-4">
            {area.whatToDo.map((step, i) => (
              <li key={i} className="flex gap-4 rounded-xl border border-line bg-white p-5 shadow-card">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sapphire font-serif text-sm font-semibold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-ink">{step.title}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-ink-muted">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Two-column: injuries + florida law */}
        <section className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8">
            <h2 className="font-serif text-xl font-semibold text-ink">Common injuries I see</h2>
            <ul className="mt-5 space-y-3">
              {area.commonInjuries.map((inj) => (
                <li key={inj} className="flex items-start gap-3 text-[15px] text-ink">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-amber-dark" />
                  {inj}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-sapphire/15 bg-sapphire/5 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <ScaleIcon className="h-6 w-6 text-sapphire" />
              <h2 className="font-serif text-xl font-semibold text-ink">How Florida law applies</h2>
            </div>
            <dl className="mt-5 space-y-4">
              {area.floridaLaw.map((item) => (
                <div key={item.title}>
                  <dt className="font-semibold text-sapphire">{item.title}</dt>
                  <dd className="mt-1 text-[15px] leading-relaxed text-ink-muted">{item.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* How I help */}
        <section className="mt-14 rounded-2xl bg-ink p-8 text-white sm:p-10">
          <h2 className="font-serif text-2xl font-semibold text-white">How I help with your case</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {area.howIHelp.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-white/85">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber text-white">
                  <CheckIcon className="h-4 w-4" />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href="/contact" variant="amber" size="md">
              Start with a free case review <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
            {area.shortTitle} — frequently asked questions
          </h2>
          <div className="mt-6">
            <FaqAccordion items={area.faqs} />
          </div>
        </section>

        {/* Related */}
        <section className="mt-14 border-t border-line pt-10">
          <h2 className="font-serif text-xl font-semibold text-ink">Related practice areas</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/personal-injury/${r.slug}`}
                className="group flex items-center gap-3 rounded-xl border border-line bg-white p-4 shadow-card transition-colors hover:border-sapphire/30"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-sapphire/10 text-sapphire">
                  <PracticeIcon name={r.icon} className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold text-ink group-hover:text-sapphire">{r.shortTitle}</span>
              </Link>
            ))}
          </div>
        </section>
      </article>

      <CtaBanner
        heading={area.ctaHeading ?? `Hurt in ${area.shortTitle.toLowerCase()}? Let's talk today.`}
      />
    </>
  );
}
