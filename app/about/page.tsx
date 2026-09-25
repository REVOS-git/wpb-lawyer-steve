import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHeroBg from "@/components/PageHeroBg";
import CtaBanner from "@/components/CtaBanner";
import { Button } from "@/components/Button";
import { PhoneIcon, CheckIcon, PinIcon } from "@/components/Icons";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "About Steven Kuveikis | Jupiter Injury Attorney",
  description:
    "Steven Kuveikis grew up in Palm Beach Gardens and has spent over a decade representing injured people. Learn why he built a solo practice around personal attention.",
  alternates: { canonical: "/about" },
};

const credentials = [
  { label: "University of Florida", detail: "B.S., 1991 · J.D., 1994" },
  { label: "The Florida Bar", detail: "Admitted 1995" },
  { label: "State Bar of Georgia", detail: "Admitted 2000" },
  { label: "Palm Beach County Trial Lawyers Association", detail: "Member since 2001" },
  { label: "Florida Justice Association", detail: "Member since 2004" },
];

const values = [
  {
    title: "You work with me — not a middleman",
    body: "No case managers, no rotating associates. From the first call to the final check, I'm the attorney handling your case.",
  },
  {
    title: "I know the other side's playbook",
    body: "Before representing injured people, I worked on the insurance-defense side. I've seen how these companies value claims and where they cut corners — and I use that knowledge for you.",
  },
  {
    title: "Small on purpose",
    body: "I take fewer cases than a high-volume firm so I can give each one the attention it deserves. You're a person to me, not a file number.",
  },
  {
    title: "Honest, even when it's not what you hoped",
    body: "If you have a strong case, I'll fight for it. If you don't, I'll tell you plainly and save you the trouble. Straight answers, every time.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-sapphire">
        <PageHeroBg />
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-amber/20 blur-3xl" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-light/30 bg-white/5 px-4 py-1.5 text-sm font-semibold text-amber-light">
              <PinIcon className="h-4 w-4" /> Raised in Palm Beach County · Lifelong Resident
            </span>
            <h1 className="mt-5 text-balance font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Meet Steven Kuveikis
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
              A hometown attorney who spent his career learning how insurance companies think — and then chose to
              spend it standing up to them, one client at a time.
            </p>
            <div className="mt-8">
              <Button href={siteConfig.phoneHref} variant="amber" size="lg">
                <PhoneIcon className="h-5 w-5" /> Call {siteConfig.phone}
              </Button>
            </div>
          </div>

          {/* Portrait frame for client photo */}
          <div className="mx-auto w-full max-w-sm">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border-2 border-white/20 bg-gradient-to-br from-sapphire-light/80 via-sapphire to-sapphire-dark shadow-lift ring-1 ring-white/10">
              <div className="absolute inset-0 flex flex-col items-center justify-between p-8 text-center">
                {/* Top Badge */}
                <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-amber-light backdrop-blur-sm">
                  <span>Steven Kuveikis, Esq.</span>
                </div>

                {/* Center Emblem & Avatar Slot */}
                <div className="flex flex-col items-center">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-amber/40 bg-white/10 p-2 shadow-inner backdrop-blur-md">
                    <span className="font-serif text-5xl font-bold text-white tracking-wider">
                      SK
                    </span>
                  </div>
                  <p className="mt-4 font-serif text-xl font-semibold text-white">
                    Steven Kuveikis
                  </p>
                  <p className="text-xs text-amber-light font-medium">
                    Personal Injury Attorney
                  </p>
                </div>

                {/* Bottom Frame Indicator */}
                <div className="w-full rounded-xl border border-white/15 bg-black/25 px-4 py-2 text-center text-xs text-white/70">
                  <span>Photo slot: &ldquo;me at desk&rdquo;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-6 text-lg leading-relaxed text-ink">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-dark">
              Local Heritage &amp; Legal Career
            </span>
            <h2 className="font-serif text-3xl font-semibold text-ink sm:text-4xl">Raised here. Rooted here.</h2>
            <p>
              I grew up in Palm Beach Gardens, and this community shaped who I am. After earning both my undergraduate
              degree and my law degree from the University of Florida, I built a career in personal injury law — and I&rsquo;ve
              spent more than a decade helping accident victims put their lives back together.
            </p>
            <p>
              Earlier in my career, I saw the system from the other side, working in the world of insurance-defense
              litigation. I learned exactly how insurers evaluate claims, where they look to save money, and the tactics
              they use to pay injured people less than they deserve. That experience is one of the most valuable things I
              bring to every case I take today.
            </p>
            <p>
              At some point I realized I wanted to do things differently. So I built my own practice — small, personal, and
              focused entirely on the people I represent. No layers of staff between you and your lawyer. No feeling like
              just another file. Just me, doing the work, answering the phone, and doing right by my clients.
            </p>
            <blockquote className="border-l-4 border-amber pl-6 font-serif text-2xl italic leading-snug text-ink">
              &ldquo;I chose to build my own practice so I could do things differently: stay small, stay personal, and stay
              focused on clients.&rdquo;
            </blockquote>
            <p>
              When you call my office, you get me. When you have a question, I&rsquo;m the one who answers it. And when it&rsquo;s
              time to fight for what you&rsquo;re owed, you&rsquo;ll have a lawyer who treats your case like it&rsquo;s the only one that
              matters — because to you, it is.
            </p>
          </div>

          {/* Visual local photos column */}
          <div className="space-y-6">
            <div className="group relative overflow-hidden rounded-2xl border border-line bg-white shadow-card">
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src="/images/palm-beach-courthouse.png"
                  alt="Palm Beach County Courthouse"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="inline-block rounded-full bg-sapphire-light/90 px-2.5 py-0.5 text-[10px] font-semibold text-white">
                    Palm Beach County Courts
                  </span>
                  <p className="mt-1 font-serif text-sm font-semibold text-white">
                    Decades of Courtroom Experience
                  </p>
                </div>
              </div>
              <div className="p-4 text-xs leading-relaxed text-ink-muted">
                Admitted to The Florida Bar in 1995, representing injured clients across Palm Beach County circuit and county courts.
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-line bg-white shadow-card">
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src="/images/jupiter-lighthouse-dock.jpg"
                  alt="Jupiter Inlet Lighthouse and coastal waterway"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="inline-block rounded-full bg-amber/90 px-2.5 py-0.5 text-[10px] font-semibold text-ink">
                    Jupiter &amp; North County Roots
                  </span>
                  <p className="mt-1 font-serif text-sm font-semibold text-white">
                    Lifelong Local Resident
                  </p>
                </div>
              </div>
              <div className="p-4 text-xs leading-relaxed text-ink-muted">
                From Jupiter and Tequesta to Palm Beach Gardens and West Palm Beach, Steve has spent his entire life in this community.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-dark">What I stand for</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">How I practice law</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-line bg-white p-7 shadow-card">
                <h3 className="font-serif text-xl font-semibold text-ink">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-muted">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-dark">Background</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">Education &amp; admissions</h2>
        </div>
        <ul className="mx-auto mt-10 max-w-2xl divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
          {credentials.map((c) => (
            <li key={c.label} className="flex items-start gap-4 px-6 py-5">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sapphire/10 text-sapphire">
                <CheckIcon className="h-4 w-4" />
              </span>
              <div>
                <p className="font-semibold text-ink">{c.label}</p>
                <p className="text-sm text-ink-muted">{c.detail}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-4 max-w-2xl text-center text-xs text-ink-muted">
          Licensed to practice in Florida and Georgia.
        </p>
      </section>

      <CtaBanner heading="Have a case you'd like me to look at?" />
    </>
  );
}
