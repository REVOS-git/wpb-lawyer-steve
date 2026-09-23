import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import SettlementsBanner from "@/components/SettlementsBanner";
import PracticeGrid from "@/components/PracticeGrid";
import Testimonials from "@/components/Testimonials";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBanner from "@/components/CtaBanner";
import { Button } from "@/components/Button";
import { ArrowRight, CheckIcon } from "@/components/Icons";
import { siteConfig } from "@/lib/siteConfig";

const stats = [
  { value: "13+", label: "Years fighting for the injured" },
  { value: "1-on-1", label: "You work directly with Steve" },
  { value: "$0", label: "Up front — no fee unless you win" },
  { value: "24/7", label: "Calls answered, day or night" },
];

const steps = [
  {
    n: "01",
    phase: "Initial Call",
    title: "Tell me what happened",
    body: "Call or send a message. You'll talk directly to me — not a call center or an intake clerk. I'll listen, assess your situation, and tell you honestly whether you have a viable case, free of charge.",
    highlight: "Direct Attorney Call · 100% Free & Confidential",
  },
  {
    n: "02",
    phase: "Case Building",
    title: "I build your case",
    body: "I immediately preserve critical evidence, handle all insurance adjuster communications, coordinate with your doctors, and calculate the full value of your damages while you focus on recovery.",
    highlight: "Zero Upfront Cost · Total Insurance Defense Shield",
  },
  {
    n: "03",
    phase: "Resolution",
    title: "We pursue what you're owed",
    body: "I negotiate relentlessly for a maximum settlement. Because I prepare every file for trial, insurers know I won't settle for lowball offers when your future is on the line.",
    highlight: "Trial-Ready Tenacity · No Fee Unless You Win",
  },
];

const whyPoints = [
  "You call, I answer — not a receptionist or a junior associate",
  "I once defended insurance companies, so I know their playbook",
  "Small by design: fewer cases, more attention on yours",
  "Raised in Palm Beach County · Lifelong Resident — this is my community",
  "Honest advice, even when it means telling you that you don't have a case",
  "No fee unless I recover money for you",
];

const homeFaqs = [
  {
    q: "How much does it cost to hire you?",
    a: "Nothing up front. I work on a contingency fee, which means my fee comes out of the recovery only if I win your case. The initial consultation is always free, with no obligation.",
  },
  {
    q: "How long do I have to file a claim in Florida?",
    a: "For most personal injury cases, Florida now gives you just two years from the date of the accident. Wrongful death claims also generally run two years from the date of death. Waiting can cost you the case, so it's best to call early.",
  },
  {
    q: "What if I was partly at fault?",
    a: "You may still recover. Florida uses modified comparative negligence — as long as you're found 50% or less at fault, you can recover a reduced amount. I push back hard when insurers try to overstate your share of the blame.",
  },
  {
    q: "Do I have to go to court?",
    a: "Most cases settle without a trial. But I prepare every case as if it may go to court, because that's what motivates insurance companies to make a fair offer.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Stats strip */}
      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-4 py-2 sm:px-6 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="px-4 py-6 text-center">
              <p className="font-serif text-3xl font-semibold text-sapphire sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-ink-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Past Verdicts & Settlements banner */}
      <SettlementsBanner />

      {/* Practice areas */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-dark">How I can help</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
            Personal injury is all I do
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            Focusing on one area means I know it deeply. Whatever kind of accident turned your life upside down,
            there&rsquo;s a good chance I&rsquo;ve handled one like it.
          </p>
        </div>
        <div className="mt-12">
          <PracticeGrid />
        </div>
        <div className="mt-10 text-center">
          <Button href="/personal-injury" variant="ghost" size="md">
            See all personal injury cases <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* How it works - Enlarged cards & prominent step guidance */}
      <section className="bg-cream/60 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-dark">Simple from the start</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">How working together looks</h2>
            <p className="mt-4 text-base text-ink-muted">
              Clear, transparent, and designed to remove stress so you can focus entirely on your physical recovery.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.n}
                className="group relative flex flex-col justify-between rounded-3xl border border-line bg-white p-8 sm:p-9 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-amber/60 hover:shadow-lift"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-line/70 pb-4">
                    <span className="rounded-full bg-sapphire/10 px-3 py-1 text-xs font-semibold text-sapphire">
                      {step.phase}
                    </span>
                    <span className="font-serif text-3xl font-bold text-amber-dark">
                      {step.n}
                    </span>
                  </div>
                  <h3 className="mt-5 font-serif text-2xl font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3.5 text-base leading-relaxed text-ink-muted">
                    {step.body}
                  </p>
                </div>

                <div className="mt-8 border-t border-line/70 pt-4">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-amber-dark">
                    <CheckIcon className="h-4 w-4 shrink-0" />
                    {step.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Reassurance strip */}
          <div className="mt-12 rounded-2xl border border-line bg-white/90 p-5 text-center shadow-sm">
            <p className="text-sm font-medium text-ink">
              <span className="font-semibold text-sapphire">The Kuveikis Commitment:</span> Every case is handled directly by Steve — never handed off to rotating associates or case managers.
            </p>
          </div>
        </div>
      </section>

      {/* Why choose me - Paired with visual card to break up text */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-dark">Why work with me</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
              Big-firm results, without the big-firm runaround
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              I built my own practice so I could do things differently: stay small, stay personal, and stay
              focused on my clients. When you hire me, you get me — not a rotating cast of paralegals.
            </p>
            <blockquote className="mt-6 border-l-4 border-amber pl-5 font-serif text-xl italic text-ink">
              &ldquo;I don&rsquo;t hand off cases. I don&rsquo;t avoid calls. If you work with me, you work with me.&rdquo;
              <span className="mt-2 block font-sans text-sm not-italic text-ink-muted">— Steven Kuveikis</span>
            </blockquote>
            <div className="mt-8">
              <Button href="/about" variant="sapphire" size="md">
                Meet Steve <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right: Visual feature card & checklist points */}
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-3xl border border-line bg-sapphire p-7 text-white shadow-lift sm:p-8">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-amber/20 blur-3xl"
                aria-hidden
              />
              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold text-amber-light backdrop-blur-sm">
                  Steven Kuveikis, Esq. · Solo Practice
                </span>
                <p className="mt-4 font-serif text-2xl font-semibold leading-snug">
                  Personal dedication on every case — from accident investigation to settlement check.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/15 pt-5 text-xs">
                  <div>
                    <span className="block font-serif text-2xl font-bold text-amber-light">30+ Yrs</span>
                    <span className="text-white/70">Florida Bar Admitted (1995)</span>
                  </div>
                  <div>
                    <span className="block font-serif text-2xl font-bold text-amber-light">100%</span>
                    <span className="text-white/70">Direct Lawyer Contact</span>
                  </div>
                </div>
              </div>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {whyPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5 rounded-xl border border-line bg-white p-3.5 text-sm text-ink shadow-sm">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber/15 text-amber-dark">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-sapphire-dark">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-light">Real Results &amp; Relationships</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Clients Steve has helped
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/80">
              Direct, 1-on-1 representation means real relationships and real advocacy. Client testimonial letters and case reviews are being updated with Steve&rsquo;s current client letters.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-dark">Good to know</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">Questions people ask first</h2>
        </div>
        <div className="mt-10">
          <FaqAccordion items={homeFaqs} />
        </div>
        <p className="mt-8 text-center text-ink-muted">
          Have a different question?{" "}
          <Link href="/contact" className="font-semibold text-sapphire underline-offset-4 hover:underline">
            Ask me directly
          </Link>{" "}
          or call{" "}
          <a href={siteConfig.phoneHref} className="font-semibold text-sapphire underline-offset-4 hover:underline">
            {siteConfig.phone}
          </a>
          .
        </p>
      </section>

      <CtaBanner />
    </>
  );
}
