"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";
import { practiceAreas } from "@/lib/practiceAreas";
import {
  PhoneIcon,
  MailIcon,
  PinIcon,
  CheckIcon,
  ArrowRight,
  ScaleIcon,
  PracticeIcon,
} from "@/components/Icons";

const ACCIDENT_LABELS: Record<string, string> = {
  "car-accidents": "Automobile Crash",
  "truck-accidents": "Commercial Semi-Truck",
  "motorcycle-accidents": "Motorcycle Crash",
  "slip-and-fall": "Premises Fall",
  "negligent-security": "Negligent Security",
  "rideshare-accidents": "Uber / Lyft Crash",
};

const SEVERITY_LABELS: Record<string, string> = {
  "surgery-specialist": "Hospitalized / Surgery Performed or Recommended",
  "disc-spine": "Herniated / Bulging Discs or Concussion",
  "fracture-ortho": "Broken Bones / Torn Tendons / Orthopedic",
  "soft-tissue": "Whiplash / Chronic Pain / Physical Therapy",
};

const TIMEFRAME_LABELS: Record<string, string> = {
  "within-14-days": "Within the last 14 days",
  "1-6-months": "1 to 6 months ago",
  "6-24-months": "6 months to 2 years ago",
  "over-2-years": "Over 2 years ago",
};

export default function RenditionOnePage() {
  // Mobile Nav State
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Case Qualifier State
  const [qualifierStep, setQualifierStep] = useState(1);
  const [accidentType, setAccidentType] = useState("car-accidents");
  const [injurySeverity, setInjurySeverity] = useState("surgery-specialist");
  const [timeframe, setTimeframe] = useState("within-14-days");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", notes: "" });

  // Interactive Bento Area Selection
  const [selectedPractice, setSelectedPractice] = useState<string>("car-accidents");

  const currentArea =
    practiceAreas.find((p) => p.slug === selectedPractice) || practiceAreas[0];

  const handleQualifierSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Pre-fill email client dispatch for real case triage
    const subject = `Priority Case Qualifier: ${formData.name || "New Injury Lead"}`;
    const bodyLines = [
      `Client Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Incident Type: ${ACCIDENT_LABELS[accidentType] || accidentType}`,
      `Severity: ${SEVERITY_LABELS[injurySeverity] || injurySeverity}`,
      `Incident Timing: ${TIMEFRAME_LABELS[timeframe] || timeframe}`,
      `Confidential Details: ${formData.notes || "None provided"}`,
    ];
    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    try {
      window.location.href = mailto;
    } catch {
      // Fallback in environments blocking mailto dispatch
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 selection:bg-amber-400 selection:text-slate-950 font-sans">
      {/* 1. BESPOKE PRESTIGE DARK HEADER */}
      <header
        style={{ top: "var(--switcher-height, 0px)" }}
        className="sticky z-40 border-b border-slate-800/80 bg-[#0B0F17]/95 backdrop-blur-md transition-[top]"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/rendition-1" className="flex items-center gap-3 group">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 border border-amber-400/40 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
              <Image
                src="/logo-mark.png"
                alt=""
                width={40}
                height={40}
                className="h-7 w-auto transition-transform group-hover:scale-110"
              />
            </div>
            <div>
              <span className="block font-serif text-lg font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">
                Kuveikis Law
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-400/90">
                High-Stakes Injury Trial Practice
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-wider text-slate-300 md:flex">
            <a href="#insider-advantage" className="hover:text-amber-400 transition-colors">
              The Insider Advantage
            </a>
            <a href="#case-qualifier" className="hover:text-amber-400 transition-colors">
              Case Qualifier
            </a>
            <a href="#bento-practice" className="hover:text-amber-400 transition-colors">
              Battlegrounds
            </a>
            <a href="#litigation-blueprint" className="hover:text-amber-400 transition-colors">
              Litigation Blueprint
            </a>
          </nav>

          {/* Direct Contact Button & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-amber-400/50 bg-gradient-to-r from-amber-500/20 to-amber-600/30 px-3 py-1.5 sm:px-4 sm:py-2 text-xs font-bold text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:bg-amber-400 hover:text-slate-950 transition-all hover:scale-105"
            >
              <PhoneIcon className="h-3.5 w-3.5 text-amber-400 group-hover:text-slate-950" />
              <span className="hidden sm:inline">Direct:</span>
              <span>{siteConfig.phone}</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-slate-300 hover:text-white md:hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileNavOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileNavOpen && (
          <div className="border-t border-slate-800 bg-slate-950/98 px-4 py-4 md:hidden animate-fade-up">
            <nav className="flex flex-col gap-3 text-xs font-semibold uppercase tracking-wider text-slate-300">
              <a
                href="#insider-advantage"
                onClick={() => setMobileNavOpen(false)}
                className="py-1.5 hover:text-amber-400 border-b border-slate-800/60"
              >
                The Insider Advantage
              </a>
              <a
                href="#case-qualifier"
                onClick={() => setMobileNavOpen(false)}
                className="py-1.5 hover:text-amber-400 border-b border-slate-800/60"
              >
                Case Qualifier
              </a>
              <a
                href="#bento-practice"
                onClick={() => setMobileNavOpen(false)}
                className="py-1.5 hover:text-amber-400 border-b border-slate-800/60"
              >
                Battlegrounds (Practice Areas)
              </a>
              <a
                href="#litigation-blueprint"
                onClick={() => setMobileNavOpen(false)}
                className="py-1.5 hover:text-amber-400 border-b border-slate-800/60"
              >
                Litigation Blueprint
              </a>
              <a
                href={siteConfig.phoneHref}
                className="mt-2 text-center rounded-xl bg-amber-400 py-2.5 font-bold text-slate-950"
              >
                Call Steve 24/7: {siteConfig.phone}
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* 2. HERO: "THE FORMER DEFENSE COUNSEL ADVANTAGE" */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
        {/* Glow backdrop */}
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-b from-amber-500/15 via-blue-600/10 to-transparent blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Bold Copy */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-amber-300">
                <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
                FL BAR #58599 · 30+ YEARS EXPERIENCE · FORMER DEFENSE COUNSEL
              </div>

              <h1 className="mt-6 font-serif text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                They have a playbook to devalue your injury.{" "}
                <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                  I used to write it.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Before dedicating his practice solely to injury victims, Steven Kuveikis defended major insurance carriers. He knows the algorithms they use to slash claims, the trap questions adjusters ask within 48 hours, and how to compel full-value policy tenders.
              </p>

              {/* 4 Trust Metrics */}
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3 text-center">
                  <div className="font-serif text-2xl font-bold text-amber-400">30+</div>
                  <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Years Experience</div>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3 text-center">
                  <div className="font-serif text-2xl font-bold text-white">$0</div>
                  <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Upfront Legal Fee</div>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3 text-center">
                  <div className="font-serif text-2xl font-bold text-amber-400">1-on-1</div>
                  <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Direct Attorney Cell</div>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3 text-center">
                  <div className="font-serif text-2xl font-bold text-white">100%</div>
                  <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Contingency Based</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#case-qualifier"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-[0_0_30px_rgba(245,158,11,0.35)] hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(245,158,11,0.5)] transition-all"
                >
                  <span>Evaluate My Case Online</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 px-6 py-3.5 text-sm font-semibold text-white hover:border-amber-400/60 hover:bg-slate-800 transition-colors"
                >
                  <PhoneIcon className="h-4 w-4 text-amber-400" />
                  <span>Call {siteConfig.phone} (24/7)</span>
                </a>
              </div>
            </div>

            {/* Right Column: High-Stakes Insider Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl border border-amber-500/30 bg-gradient-to-b from-slate-900/90 to-slate-950/95 p-6 shadow-2xl backdrop-blur-xl ring-1 ring-amber-500/20">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                      The Kuveikis Guarantee
                    </span>
                    <h3 className="font-serif text-xl font-bold text-white">
                      Never Passed to a Paralegal
                    </h3>
                  </div>
                  <ScaleIcon className="h-8 w-8 text-amber-400" />
                </div>

                <div className="mt-5 space-y-3.5 text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-400/20 text-amber-400">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </div>
                    <p>
                      <strong className="text-white">Direct Line to Steven Kuveikis:</strong> You speak to the trial attorney handling your case — not a junior screener or case manager.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-400/20 text-amber-400">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </div>
                    <p>
                      <strong className="text-white">Exposing Claims Software:</strong> Insurers use Colossus to artificially cap payouts. Steve constructs evidence packages designed specifically to trigger maximum score multipliers.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-400/20 text-amber-400">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </div>
                    <p>
                      <strong className="text-white">Florida HB 837 Tort Immunity:</strong> With Florida&apos;s modified comparative fault law barring recovery at 51% fault, Steve locks in non-rebuttable liability evidence immediately.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-400/20 text-amber-400">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </div>
                    <p>
                      <strong className="text-white">$0 Contingency Retainer:</strong> We front all litigation, medical record subpoenas, and accident reconstruction costs. If we don&apos;t recover funds, you owe zero.
                    </p>
                  </div>
                </div>

                {/* Attorney Card Footnote */}
                <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/80 p-3.5 flex items-center justify-between text-xs text-slate-400">
                  <div>
                    <span className="text-slate-200 font-semibold block">Office Location</span>
                    <span>601 Heritage Drive, Suite 136, Jupiter</span>
                  </div>
                  <span className="rounded bg-amber-400/10 px-2 py-1 font-semibold text-amber-300 border border-amber-400/30">
                    Jupiter Native
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE CASE QUALIFIER WIDGET */}
      <section id="case-qualifier" className="scroll-mt-20 border-y border-slate-800/80 bg-slate-950/70 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center">
            <span className="rounded-full border border-amber-400/40 bg-amber-400/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-300">
              Free 60-Second Case Triage
            </span>
            <h2 className="mt-3 font-serif text-3xl font-extrabold text-white sm:text-4xl">
              Confidential Case Qualifier
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Run your accident through Steve&apos;s preliminary assessment engine to pinpoint immediate legal risks, statutory deadlines, and potential recovery paths.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 shadow-2xl backdrop-blur-md">
            {!submitted ? (
              <div>
                {/* Step Indicators */}
                <div className="mb-6 flex items-center justify-between border-b border-slate-800 pb-4 text-xs font-semibold text-slate-400">
                  <button
                    type="button"
                    onClick={() => setQualifierStep(1)}
                    className={`flex items-center gap-1.5 transition-colors ${qualifierStep === 1 ? "text-amber-400 font-bold" : ""}`}
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-800 text-[10px]">1</span>
                    <span>Accident Type</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setQualifierStep(2)}
                    className={`flex items-center gap-1.5 transition-colors ${qualifierStep === 2 ? "text-amber-400 font-bold" : ""}`}
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-800 text-[10px]">2</span>
                    <span>Injury & Treatment</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setQualifierStep(3)}
                    className={`flex items-center gap-1.5 transition-colors ${qualifierStep === 3 ? "text-amber-400 font-bold" : ""}`}
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-800 text-[10px]">3</span>
                    <span>Statute Clock</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setQualifierStep(4)}
                    className={`flex items-center gap-1.5 transition-colors ${qualifierStep === 4 ? "text-amber-400 font-bold" : ""}`}
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-800 text-[10px]">4</span>
                    <span>Insider Assessment</span>
                  </button>
                </div>

                {/* Step 1: Accident Category */}
                {qualifierStep === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-base font-bold text-white">What type of incident occurred?</h3>
                    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {[
                        { slug: "car-accidents", title: "Automobile Crash (I-95 / Local)", note: "Rear-end, T-bone, intersection" },
                        { slug: "truck-accidents", title: "Semi-Truck / Commercial Vehicle", note: "18-wheeler, box truck, delivery" },
                        { slug: "motorcycle-accidents", title: "Motorcycle / Scooter Crash", note: "Failure to yield, severe road bias" },
                        { slug: "slip-and-fall", title: "Premises Fall / Commercial Defect", note: "Supermarket, resort, mall spill" },
                        { slug: "negligent-security", title: "Assault / Negligent Security", note: "Apartment complex, bar, parking lot" },
                        { slug: "rideshare-accidents", title: "Uber / Lyft / Gig App Crash", note: "Passenger, driver, or struck vehicle" },
                      ].map((type) => (
                        <button
                          key={type.slug}
                          type="button"
                          onClick={() => setAccidentType(type.slug)}
                          className={`flex flex-col items-start rounded-xl border p-3.5 text-left transition-all ${
                            accidentType === type.slug
                              ? "border-amber-400 bg-amber-400/10 ring-1 ring-amber-400"
                              : "border-slate-800 bg-slate-950/60 hover:border-slate-700"
                          }`}
                        >
                          <span className="font-semibold text-white text-sm">{type.title}</span>
                          <span className="text-xs text-slate-400">{type.note}</span>
                        </button>
                      ))}
                    </div>
                    <div className="pt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setQualifierStep(2)}
                        className="rounded-xl bg-amber-400 px-5 py-2.5 text-xs font-bold text-slate-950 hover:bg-amber-300"
                      >
                        Next: Injury Status →
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Injury Severity */}
                {qualifierStep === 2 && (
                  <div className="space-y-4">
                    <h3 className="text-base font-bold text-white">What is the medical status of the injured person?</h3>
                    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {[
                        { id: "surgery-specialist", label: "Hospitalized / Surgery Performed or Recommended", badge: "Highest Priority Tier" },
                        { id: "disc-spine", label: "Herniated / Bulging Discs or Concussion", badge: "Significant Policy Impact" },
                        { id: "fracture-ortho", label: "Broken Bones / Torn Tendons / Orthopedic", badge: "High Valuation Tier" },
                        { id: "soft-tissue", label: "Whiplash / Chronic Pain / Physical Therapy", badge: "PIP + Bodily Injury" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setInjurySeverity(item.id)}
                          className={`flex flex-col items-start rounded-xl border p-3.5 text-left transition-all ${
                            injurySeverity === item.id
                              ? "border-amber-400 bg-amber-400/10 ring-1 ring-amber-400"
                              : "border-slate-800 bg-slate-950/60 hover:border-slate-700"
                          }`}
                        >
                          <span className="font-semibold text-white text-sm">{item.label}</span>
                          <span className="mt-1 rounded bg-amber-400/20 px-2 py-0.5 text-[10px] font-bold text-amber-300">
                            {item.badge}
                          </span>
                        </button>
                      ))}
                    </div>
                    <div className="pt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setQualifierStep(1)}
                        className="text-xs font-semibold text-slate-400 hover:text-white"
                      >
                        ← Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setQualifierStep(3)}
                        className="rounded-xl bg-amber-400 px-5 py-2.5 text-xs font-bold text-slate-950 hover:bg-amber-300"
                      >
                        Next: Statutory Timing →
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Statutory Timing */}
                {qualifierStep === 3 && (
                  <div className="space-y-4">
                    <h3 className="text-base font-bold text-white">When did the incident take place?</h3>
                    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {[
                        { id: "within-14-days", label: "Within the last 14 days", alert: "Critical: Florida 14-Day PIP clock active!" },
                        { id: "1-6-months", label: "1 to 6 months ago", alert: "Evidence preservation window open" },
                        { id: "6-24-months", label: "6 months to 2 years ago", alert: "HB 837 2-year deadline approaching" },
                        { id: "over-2-years", label: "Over 2 years ago", alert: "Special statutory review needed" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setTimeframe(item.id)}
                          className={`flex flex-col items-start rounded-xl border p-3.5 text-left transition-all ${
                            timeframe === item.id
                              ? "border-amber-400 bg-amber-400/10 ring-1 ring-amber-400"
                              : "border-slate-800 bg-slate-950/60 hover:border-slate-700"
                          }`}
                        >
                          <span className="font-semibold text-white text-sm">{item.label}</span>
                          <span className="mt-1 text-xs text-amber-300/90">{item.alert}</span>
                        </button>
                      ))}
                    </div>
                    <div className="pt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setQualifierStep(2)}
                        className="text-xs font-semibold text-slate-400 hover:text-white"
                      >
                        ← Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setQualifierStep(4)}
                        className="rounded-xl bg-amber-400 px-5 py-2.5 text-xs font-bold text-slate-950 hover:bg-amber-300"
                      >
                        Generate Assessment →
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 4: Submission & Insider Triage */}
                {qualifierStep === 4 && (
                  <form onSubmit={handleQualifierSubmit} className="space-y-4">
                    <div className="rounded-xl border border-amber-500/40 bg-amber-400/10 p-4">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300">
                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Preliminary Assessment: High-Exposure Incident Flagged</span>
                      </div>
                      
                      <div className="mt-3 space-y-2 text-xs text-slate-200">
                        <div className="flex items-start gap-2">
                          <span className="text-amber-400 font-bold shrink-0">▸</span>
                          <span>
                            <strong>Case Profile:</strong> {ACCIDENT_LABELS[accidentType] || accidentType} · {SEVERITY_LABELS[injurySeverity] || injurySeverity}
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-amber-400 font-bold shrink-0">▸</span>
                          <span>
                            <strong>Statutory Window:</strong> {TIMEFRAME_LABELS[timeframe] || timeframe}
                            {timeframe === "within-14-days" && (
                              <span className="ml-1 text-amber-300 font-semibold">(Immediate action required under FL 14-Day PIP clock)</span>
                            )}
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-amber-400 font-bold shrink-0">▸</span>
                          <span>
                            <strong>Tactical Imperative:</strong> Insurers assign higher settlement values when an attorney locks down traffic cam video and dispatches spoliation notices before recorded adjuster statements are taken.
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-medium text-slate-300">Your Full Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. John Miller"
                          className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white focus:border-amber-400 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300">Phone Number (Direct)</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(561) 000-0000"
                          className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white focus:border-amber-400 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300">Brief Note on What Happened (Confidential)</label>
                      <textarea
                        rows={2}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Location, vehicles involved, or insurance company already calling..."
                        className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white focus:border-amber-400 focus:outline-none"
                      />
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setQualifierStep(3)}
                        className="text-xs font-semibold text-slate-400 hover:text-white"
                      >
                        ← Adjust Details
                      </button>
                      <button
                        type="submit"
                        className="rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-6 py-2.5 text-xs font-bold text-slate-950 shadow-lg hover:bg-amber-300"
                      >
                        Lock In Priority Evaluation →
                      </button>
                    </div>
                  </form>
                )}
              </div>
            ) : (
              <div className="rounded-xl border border-emerald-500/50 bg-emerald-950/30 p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <CheckIcon className="h-6 w-6" />
                </div>
                <h3 className="mt-3 font-serif text-xl font-bold text-white">
                  Evaluation Submitted Directly to Steven Kuveikis
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  Thank you, <span className="text-white font-semibold">{formData.name}</span>. Steve will personally review your incident data and reach out to you shortly at <span className="text-white font-semibold">{formData.phone}</span>.
                </p>
                <div className="mt-5 flex flex-wrap justify-center gap-3">
                  <a
                    href={siteConfig.phoneHref}
                    className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-4 py-2 text-xs font-bold text-slate-950 hover:bg-amber-300"
                  >
                    <PhoneIcon className="h-3.5 w-3.5" />
                    <span>Call Steve Now: {siteConfig.phone}</span>
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(
                      `Priority Case Qualifier: ${formData.name}`
                    )}&body=${encodeURIComponent(
                      `Client: ${formData.name}\nPhone: ${formData.phone}\nType: ${ACCIDENT_LABELS[accidentType] || accidentType}\nSeverity: ${SEVERITY_LABELS[injurySeverity] || injurySeverity}\nNotes: ${formData.notes || "None"}`
                    )}`}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-200 hover:bg-slate-800"
                  >
                    <MailIcon className="h-3.5 w-3.5 text-amber-400" />
                    <span>Email Steve Directly</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setQualifierStep(1);
                    }}
                    className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
                  >
                    Reset Qualifier
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. "THE INSIDER ADVANTAGE" COMPARISON MATRIX */}
      <section id="insider-advantage" className="scroll-mt-20 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="rounded-full border border-amber-400/40 bg-amber-400/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-300">
              The Reality of Injury Law
            </span>
            <h2 className="mt-3 font-serif text-3xl font-extrabold text-white sm:text-4xl">
              Why 90% of Claimants Get Shortchanged
            </h2>
            <p className="mt-3 text-base text-slate-300">
              Personal injury is an adversarial game. See how billboard mega-firms and insurance adjusters operate — versus the tactical precision of an ex-defense insider.
            </p>
          </div>

          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300 border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-xs uppercase tracking-wider">
                  <th className="py-4 px-4 font-semibold text-slate-400 w-1/4">Tactical Dimension</th>
                  <th className="py-4 px-4 font-semibold text-red-400/90 w-1/4 bg-red-950/10">Billboard Mega-Firms</th>
                  <th className="py-4 px-4 font-semibold text-slate-400 w-1/4 bg-slate-900/40">Insurance Company Playbook</th>
                  <th className="py-4 px-4 font-bold text-amber-300 w-1/4 bg-amber-400/10 border-l border-r border-amber-400/30">The Kuveikis Law Advantage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                <tr>
                  <td className="py-4 px-4 font-medium text-white">Who actually handles your file?</td>
                  <td className="py-4 px-4 text-xs bg-red-950/10">Junior paralegals handling 200–300 files simultaneously. You rarely speak to a licensed lawyer.</td>
                  <td className="py-4 px-4 text-xs bg-slate-900/40">Trained claims handlers who exploit disorganization and unreturned client calls.</td>
                  <td className="py-4 px-4 text-xs font-semibold text-white bg-amber-400/10 border-l border-r border-amber-400/30">
                    <span className="text-amber-400">100% Steven Kuveikis.</span> Every motion, negotiation, deposition, and strategy call is run by Steve.
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-white">Settlement Strategy</td>
                  <td className="py-4 px-4 text-xs bg-red-950/10">High-turnover &quot;settlement mills&quot; accept 40%–50% discounted offers quickly to pay overhead and ad spend.</td>
                  <td className="py-4 px-4 text-xs bg-slate-900/40">Feed data into Colossus software that discounts soft tissue and disc injuries unless pushed to trial.</td>
                  <td className="py-4 px-4 text-xs font-semibold text-white bg-amber-400/10 border-l border-r border-amber-400/30">
                    <span className="text-amber-400">Ex-Defense Auditing:</span> Steve builds trial-ready binders that prove exposure, forcing carriers to tender full policy limits.
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-white">Early Adjuster Contact</td>
                  <td className="py-4 px-4 text-xs bg-red-950/10">Slow intake allows adjusters to contact traumatized victims for recorded statements before representation starts.</td>
                  <td className="py-4 px-4 text-xs bg-slate-900/40">Rushes to record leading statements designed to trick you into admitting partial fault under FL 51% rule.</td>
                  <td className="py-4 px-4 text-xs font-semibold text-white bg-amber-400/10 border-l border-r border-amber-400/30">
                    <span className="text-amber-400">Immediate Harassment Shield:</span> Steve sends immediate formal representation notices silencing all adjuster calls instantly.
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-white">Trial Readiness</td>
                  <td className="py-4 px-4 text-xs bg-red-950/10">Many billboard firms never step into a courtroom; insurance adjusters know who will fold and who will litigate.</td>
                  <td className="py-4 px-4 text-xs bg-slate-900/40">Tracks trial records of opposing counsel; pays less to lawyers known to be settlement-only.</td>
                  <td className="py-4 px-4 text-xs font-semibold text-white bg-amber-400/10 border-l border-r border-amber-400/30">
                    <span className="text-amber-400">30+ Years Florida Bar Trial Veteran:</span> Insurers know Steve will file suit and take depositions without hesitation.
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-white">Attorney Access</td>
                  <td className="py-4 px-4 text-xs bg-red-950/10">Routed through 1-800 call center operators, long holds, and rotating caseworkers.</td>
                  <td className="py-4 px-4 text-xs bg-slate-900/40">Hopes client confusion causes missed medical appointments and gaps in treatment.</td>
                  <td className="py-4 px-4 text-xs font-semibold text-white bg-amber-400/10 border-l border-r border-amber-400/30">
                    <span className="text-amber-400">Direct Cellular Access:</span> Clients receive Steve&apos;s direct phone number with real-time case updates.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. PRESTIGE DARK BENTO PRACTICE GRID */}
      <section id="bento-practice" className="scroll-mt-20 border-t border-slate-800 bg-slate-950/80 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="rounded-full border border-amber-400/40 bg-amber-400/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-300">
                Core Battlegrounds
              </span>
              <h2 className="mt-3 font-serif text-3xl font-extrabold text-white sm:text-4xl">
                High-Stakes Practice Areas
              </h2>
            </div>
            <p className="max-w-md text-xs text-slate-400">
              Select any practice area below to view Steve&apos;s tactical strategy against defense insurers.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((pa) => {
              const isSelected = selectedPractice === pa.slug;
              return (
                <div
                  key={pa.slug}
                  onClick={() => setSelectedPractice(pa.slug)}
                  className={`group cursor-pointer rounded-2xl border p-5 transition-all ${
                    isSelected
                      ? "border-amber-400 bg-slate-900 shadow-[0_0_25px_rgba(245,158,11,0.2)] ring-1 ring-amber-400"
                      : "border-slate-800/80 bg-slate-900/50 hover:border-slate-700 hover:bg-slate-900/80"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-amber-400 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                      <PracticeIcon name={pa.icon} className="h-5 w-5" />
                    </div>
                    {isSelected && (
                      <span className="rounded bg-amber-400/20 px-2 py-0.5 text-[10px] font-bold text-amber-300">
                        Active Focus
                      </span>
                    )}
                  </div>

                  <h3 className="mt-4 font-serif text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {pa.shortTitle}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-slate-400 line-clamp-2">
                    {pa.cardBlurb}
                  </p>

                  <div className="mt-4 flex items-center justify-between border-t border-slate-800/80 pt-3 text-xs">
                    <span className="text-slate-500 font-medium">Insider Tactical Review</span>
                    <span className="text-amber-400 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Inspect →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Tactical Deep-Dive Drawer */}
          {currentArea && (
            <div className="mt-8 rounded-2xl border border-amber-400/40 bg-slate-900/90 p-6 sm:p-8 backdrop-blur-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Tactical Playbook: {currentArea.title}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white mt-1">
                    {currentArea.heroSummary}
                  </h3>
                </div>
                <Link
                  href={`/personal-injury/${currentArea.slug}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-200 hover:bg-slate-700 hover:text-white transition-colors shrink-0"
                >
                  <span>Full Statutory Guide</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-3">
                {/* Column 1: Local Road/Venue Factors */}
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
                    Palm Beach County Factors
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">
                    {currentArea.localAngle}
                  </p>
                </div>

                {/* Column 2: What Steve Executes */}
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
                    Steve&apos;s Strategic Attack
                  </h4>
                  <ul className="mt-2 space-y-1.5 text-xs text-slate-300">
                    {currentArea.howIHelp.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-amber-400 font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 3: The Florida Law Danger */}
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
                    Defense Traps to Neutralize
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">
                    {currentArea.floridaLaw[0]?.body || "Strict adherence to Florida evidence thresholds."}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 6. THE 4-STAGE LITIGATION BLUEPRINT */}
      <section id="litigation-blueprint" className="scroll-mt-20 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="rounded-full border border-amber-400/40 bg-amber-400/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-300">
              Battle-Tested Method
            </span>
            <h2 className="mt-3 font-serif text-3xl font-extrabold text-white sm:text-4xl">
              The 4-Phase Litigation Blueprint
            </h2>
            <p className="mt-3 text-base text-slate-300">
              How Steven Kuveikis builds unyielding pressure on commercial insurers to compel top-dollar resolutions.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "Phase 01",
                title: "Evidence Lockdown",
                timeline: "Days 1–7",
                desc: "Immediate issuance of spoliation letters to preserve traffic cam video, electronic control module (black box) data, and 911 dispatch audio before corporate deletion policies purge them.",
              },
              {
                step: "Phase 02",
                title: "Medical Chronology & Liens",
                timeline: "Weeks 2–8",
                desc: "Coordinating with independent medical specialists to document maximum medical improvement (MMI), future surgical exposure, and protecting against predatory hospital lien charges.",
              },
              {
                step: "Phase 03",
                title: "The Policy Tender Demand",
                timeline: "Weeks 8–12",
                desc: "Crafting bulletproof time-sensitive policy demand packages that place insurance carriers in direct bad-faith liability exposure if they fail to tender their full insured policy limits.",
              },
              {
                step: "Phase 04",
                title: "Aggressive Trial Posture",
                timeline: "Litigation",
                desc: "If adjusters offer a penny less than true value, Steve files suit in Palm Beach County Circuit Court, deposing their defense experts and preparing jury exhibits.",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="relative rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg backdrop-blur-sm"
              >
                <div className="flex items-center justify-between text-xs font-mono text-amber-400">
                  <span className="font-bold">{p.step}</span>
                  <span className="rounded bg-slate-800 px-2 py-0.5 text-[10px] text-slate-400">{p.timeline}</span>
                </div>
                <h3 className="mt-3 font-serif text-lg font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PRESTIGE DIRECT CALL BANNER & FOOTER */}
      <section className="border-t border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400/10 border border-amber-400/40 text-amber-400">
            <PhoneIcon className="h-7 w-7" />
          </div>
          <h2 className="mt-4 font-serif text-3xl font-extrabold text-white sm:text-4xl">
            Do Not Speak to Their Adjuster Without Steve
          </h2>
          <p className="mt-3 text-sm text-slate-300 max-w-xl mx-auto">
            A single recorded sentence can trigger Florida&apos;s 51% comparative fault bar. Get veteran counsel on your side before signing or recording anything.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 text-sm font-bold text-slate-950 hover:bg-amber-300 shadow-[0_0_30px_rgba(245,158,11,0.3)] transition-all hover:scale-105"
            >
              <PhoneIcon className="h-4 w-4" />
              <span>Call Steve Directly: {siteConfig.phone}</span>
            </a>
            <a
              href={siteConfig.emailHref}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white hover:bg-slate-800"
            >
              <MailIcon className="h-4 w-4 text-amber-400" />
              <span>Email: {siteConfig.email}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Bespoke Dark Footer */}
      <footer className="border-t border-slate-900 bg-[#080B10] py-12 text-xs text-slate-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-8 md:grid-cols-4">
          <div>
            <span className="font-serif text-base font-bold text-white">Kuveikis Law</span>
            <p className="mt-2 text-slate-400 leading-relaxed">
              High-stakes personal injury practice dedicated to Palm Beach County and South Florida.
            </p>
            <p className="mt-2 text-amber-400/80">
              Steven Kuveikis, Esq. · FL Bar #58599 (1995) · GA Bar (2000)
            </p>
          </div>

          <div>
            <span className="font-semibold text-white uppercase tracking-wider text-[11px]">Primary Office</span>
            <p className="mt-2 text-slate-400 flex items-start gap-1.5">
              <PinIcon className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
              <span>{siteConfig.address.full}</span>
            </p>
          </div>

          <div>
            <span className="font-semibold text-white uppercase tracking-wider text-[11px]">Practice Areas</span>
            <ul className="mt-2 space-y-1 text-slate-400">
              <li>Car & Highway Collisions</li>
              <li>18-Wheeler & Semi-Truck Litigation</li>
              <li>Motorcycle Crash Defense</li>
              <li>Premises & Negligent Security</li>
            </ul>
          </div>

          <div>
            <span className="font-semibold text-white uppercase tracking-wider text-[11px]">Contingency Notice</span>
            <p className="mt-2 text-slate-400 leading-relaxed">
              No fees or costs owed unless compensation is recovered for your claim. Free confidential case evaluation.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-8 border-t border-slate-900 pt-6 text-center text-slate-600">
          <p>© {new Date().getFullYear()} Kuveikis Law. All rights reserved. Licensed to practice in Florida and Georgia.</p>
        </div>
      </footer>
    </div>
  );
}
