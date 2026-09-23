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
  ChevronDown,
  ArrowRight,
  PracticeIcon,
} from "@/components/Icons";

export default function RenditionTwoPage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Road to recovery active step
  const [activeStep, setActiveStep] = useState(0);
  const [contactMode, setContactMode] = useState<"text" | "call" | "email">("text");
  const [messageSent, setMessageSent] = useState(false);
  const [msgData, setMsgData] = useState({ name: "", contact: "", story: "" });
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const recoverySteps = [
    {
      num: "01",
      title: "Immediate Care & Medical Sanctuary",
      sub: "Protecting your health and the Florida 14-Day PIP clock",
      clientRole:
        "Focus on resting, taking your prescribed medications, and attending your medical appointments. Do not worry about payment up front.",
      steveRole:
        "I ensure your medical care is documented under Florida's 14-day PIP rule, connect you with trusted specialists who accept letters of protection (waiting for settlement to get paid), and open the claim.",
      tip: "Adrenaline often masks spinal disc and soft-tissue trauma for 48–72 hours.",
    },
    {
      num: "02",
      title: "The Harassment Shield Goes Up",
      sub: "All adjuster calls and collection letters stop immediately",
      clientRole:
        "If any insurance adjuster or hospital billing agent calls you, you simply say: 'Steven Kuveikis represents me. Please speak with my attorney.'",
      steveRole:
        "I issue formal legal representation letters to every insurer and medical billing office. Under Florida law, they are strictly prohibited from contacting you once I represent you.",
      tip: "You will never have to endure an intimidating adjuster interrogation.",
    },
    {
      num: "03",
      title: "Quiet, Thorough Investigation",
      sub: "Gathering evidence and witnesses while you heal at home",
      clientRole:
        "Rest at home with your family. Save any receipts for prescription co-pays or ride services, and keep a simple journal of your pain levels.",
      steveRole:
        "I personally secure police collision reports, subpoena nearby business surveillance cameras, interview witnesses, inspect vehicle damage, and verify insurance policy limits.",
      tip: "Critical camera footage around Indiantown Rd and PGA Blvd is often erased within 14–30 days.",
    },
    {
      num: "04",
      title: "Comprehensive Life Restoration Audit",
      sub: "Accounting for medical bills, lost wages, and emotional toll",
      clientRole:
        "Work toward maximum medical improvement with your physicians. Keep Steve updated on how your injuries affect your daily hobbies and family life.",
      steveRole:
        "I collaborate with your physicians and economic specialists to calculate every penny: past bills, projected future physical therapy or surgeries, lost wages, and pain and suffering.",
      tip: "We never rush an early settlement before the true long-term prognosis is fully understood.",
    },
    {
      num: "05",
      title: "Justice, Recovery & Peace of Mind",
      sub: "Settlement disbursement with 100% transparent accounting",
      clientRole:
        "Review and approve the final settlement proposal in a calm, one-on-one meeting with Steve. Receive your check.",
      steveRole:
        "I negotiate aggressively for maximum policy tender, aggressively slash outstanding medical liens so more money goes directly into your pocket, and provide a transparent settlement statement.",
      tip: "$0 fee unless we successfully recover compensation for you. Zero out-of-pocket risk.",
    },
  ];

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessageSent(true);

    const subject = `Warm Case Intake: ${msgData.name || "Injured Client"} (${contactMode.toUpperCase()})`;
    const bodyLines = [
      `Name: ${msgData.name}`,
      `Preferred Contact: ${contactMode.toUpperCase()} via ${msgData.contact}`,
      "",
      `What Happened:`,
      msgData.story || "No details provided",
    ];
    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    try {
      window.location.href = mailto;
    } catch {
      // Fallback
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1E2E3D] selection:bg-teal-200 selection:text-[#1E2E3D] font-sans">
      {/* 1. CALMING COASTAL SLATE HEADER */}
      <header
        style={{ top: "var(--switcher-height, 0px)" }}
        className="sticky z-40 border-b border-[#E5E0D8] bg-[#FDFBF7]/95 backdrop-blur-md transition-[top]"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/rendition-2" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8F3F1] border border-teal-600/20 shadow-sm">
              <Image
                src="/logo-mark.png"
                alt=""
                width={40}
                height={40}
                className="h-7 w-auto transition-transform group-hover:scale-105"
              />
            </div>
            <div>
              <span className="block font-serif text-lg font-bold tracking-tight text-[#1E2E3D]">
                Kuveikis Law
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-teal-700">
                A Safe Harbor After An Accident
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-wider text-[#486581] md:flex">
            <a href="#road-to-recovery" className="hover:text-teal-700 transition-colors">
              Road to Recovery
            </a>
            <a href="#hometown-care" className="hover:text-teal-700 transition-colors">
              Hometown Commitment
            </a>
            <a href="#anxiety-faq" className="hover:text-teal-700 transition-colors">
              Peace of Mind FAQ
            </a>
            <a href="#direct-message" className="hover:text-teal-700 transition-colors">
              Message Steve
            </a>
          </nav>

          {/* Quick Call & Mobile Toggle */}
          <div className="flex items-center gap-2">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-teal-700 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-bold text-white shadow-sm hover:bg-teal-800 transition-all hover:shadow"
            >
              <PhoneIcon className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Talk to Steve:</span>
              <span>{siteConfig.phone}</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#CBD2D9] bg-white text-[#486581] hover:text-[#1E2E3D] md:hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileNavOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileNavOpen && (
          <div className="border-t border-[#E5E0D8] bg-[#FDFBF7] px-4 py-4 md:hidden animate-fade-up">
            <nav className="flex flex-col gap-3 text-xs font-semibold uppercase tracking-wider text-[#334E68]">
              <a
                href="#road-to-recovery"
                onClick={() => setMobileNavOpen(false)}
                className="py-1.5 hover:text-teal-700 border-b border-[#E5E0D8]"
              >
                The 5-Step Road to Recovery
              </a>
              <a
                href="#hometown-care"
                onClick={() => setMobileNavOpen(false)}
                className="py-1.5 hover:text-teal-700 border-b border-[#E5E0D8]"
              >
                Hometown Commitment (Jupiter / PBC)
              </a>
              <a
                href="#anxiety-faq"
                onClick={() => setMobileNavOpen(false)}
                className="py-1.5 hover:text-teal-700 border-b border-[#E5E0D8]"
              >
                Peace of Mind FAQ
              </a>
              <a
                href="#direct-message"
                onClick={() => setMobileNavOpen(false)}
                className="py-1.5 hover:text-teal-700 border-b border-[#E5E0D8]"
              >
                Message Steve Directly
              </a>
              <a
                href={siteConfig.phoneHref}
                className="mt-2 text-center rounded-xl bg-teal-700 py-2.5 font-bold text-white"
              >
                Call Steve (Answered 24/7): {siteConfig.phone}
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* 2. REASSURING HERO: "TAKE A DEEP BREATH" */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-18 lg:pb-26 bg-gradient-to-b from-[#F7F4EB] via-[#FDFBF7] to-[#FDFBF7]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-600/30 bg-teal-50 px-3.5 py-1.5 text-xs font-semibold text-teal-800">
                <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
                <span>30+ Years Serving Jupiter & Palm Beach County Neighbors</span>
              </div>

              <h1 className="mt-5 font-serif text-4xl font-bold leading-[1.15] tracking-tight text-[#1E2E3D] sm:text-5xl lg:text-[3.5rem]">
                Take a deep breath.{" "}
                <span className="text-teal-700 underline decoration-teal-300 decoration-wavy decoration-2">
                  You don&apos;t have to carry this alone.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#486581] sm:text-lg">
                After an accident, you are dealing with painful injuries, missed work, mounting hospital bills, and relentless insurance calls. For over 30 years in Jupiter, Steven Kuveikis has stood between injured neighbors and corporate insurers — lifting the burden so you can focus entirely on healing.
              </p>

              {/* 3 Pillars of Compassionate Care */}
              <div className="mt-8 space-y-3">
                <div className="flex items-start gap-3 rounded-xl border border-[#E5E0D8] bg-white p-3.5 shadow-sm">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                    <CheckIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <strong className="text-sm font-bold text-[#1E2E3D] block">
                      Direct Attorney Relationship
                    </strong>
                    <span className="text-xs text-[#627D98] leading-relaxed">
                      You are never treated like a case file or passed off to junior staff. Steve Kuveikis personally guides every step.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-[#E5E0D8] bg-white p-3.5 shadow-sm">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                    <CheckIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <strong className="text-sm font-bold text-[#1E2E3D] block">
                      Immediate Protection From Harassment
                    </strong>
                    <span className="text-xs text-[#627D98] leading-relaxed">
                      We step in right away to halt aggressive phone calls from claims adjusters and hospital bill collectors.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-[#E5E0D8] bg-white p-3.5 shadow-sm">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                    <CheckIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <strong className="text-sm font-bold text-[#1E2E3D] block">
                      $0 Upfront Cost · No Fee Unless We Win
                    </strong>
                    <span className="text-xs text-[#627D98] leading-relaxed">
                      Our representation is 100% contingency-based. You never pay a dollar out of pocket.
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA Row */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#direct-message"
                  className="inline-flex items-center gap-2 rounded-xl bg-teal-700 px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-teal-800 transition-all hover:scale-[1.02]"
                >
                  <span>Connect Directly With Steve</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#CBD2D9] bg-white px-6 py-3.5 text-sm font-semibold text-[#1E2E3D] hover:bg-[#F0F4F8] transition-colors"
                >
                  <PhoneIcon className="h-4 w-4 text-teal-700" />
                  <span>Call {siteConfig.phone} (24/7 Reassurance)</span>
                </a>
              </div>
            </div>

            {/* Right Column: Serene Reassurance Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-[#E2DBD0] bg-white p-7 shadow-xl">
                <div className="flex items-center gap-3 border-b border-[#F0EBE1] pb-4">
                  <div className="h-12 w-12 rounded-full bg-teal-50 border border-teal-600/20 flex items-center justify-center text-teal-700 font-serif font-bold text-lg">
                    SK
                  </div>
                  <div>
                    <span className="block font-serif text-lg font-bold text-[#1E2E3D]">
                      Steven Kuveikis, Esq.
                    </span>
                    <span className="block text-xs text-[#627D98]">
                      Solo Personal Injury Attorney · Jupiter, FL
                    </span>
                  </div>
                </div>

                <div className="mt-5 space-y-4 text-xs leading-relaxed text-[#486581]">
                  <p className="italic font-serif text-sm text-[#2C4257]">
                    &quot;When someone is hurt in an accident, their world is turned upside down. They don&apos;t need legal jargon or high-pressure sales — they need someone they trust to take the weight off their shoulders.&quot;
                  </p>
                  <p>
                    Steve was admitted to the Florida Bar in 1995 and has lived in Northern Palm Beach County for decades. When you contact this office, you will not speak to a call center or an automated system. You speak to Steve.
                  </p>

                  <div className="rounded-2xl bg-[#F4F9F8] border border-teal-100 p-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-teal-800 block">
                      Local Office in Jupiter
                    </span>
                    <p className="mt-1 text-xs text-[#334E68]">
                      601 Heritage Drive, Suite 136, Jupiter, FL 33458
                    </p>
                    <p className="mt-1 text-[11px] text-teal-700 font-medium">
                      In-person visits, hospital visits, or comfortable telephone consultations.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-[#F0EBE1] pt-4 text-xs">
                  <span className="text-emerald-700 font-semibold flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    Available for consultations today
                  </span>
                  <a
                    href={siteConfig.phoneHref}
                    className="font-bold text-teal-700 hover:text-teal-900 transition-colors"
                  >
                    Direct Dial →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE 5-STEP "ROAD TO RECOVERY" VISUAL JOURNEY */}
      <section id="road-to-recovery" className="scroll-mt-20 border-y border-[#E5E0D8] bg-[#F7F4EB]/60 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="rounded-full border border-teal-600/30 bg-teal-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-teal-800">
              Clear & Transparent Path
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-[#1E2E3D] sm:text-4xl">
              The 5-Step Road to Recovery
            </h2>
            <p className="mt-3 text-sm text-[#486581]">
              Know exactly what happens at every step of your case. Click each phase to see how we divide the work so you can rest.
            </p>
          </div>

          {/* Step Selector Tabs */}
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {recoverySteps.map((step, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                  activeStep === idx
                    ? "bg-teal-700 text-white shadow-md scale-105"
                    : "bg-white text-[#486581] border border-[#D9E2EC] hover:bg-[#F0F4F8]"
                }`}
              >
                <span className="text-[10px] opacity-80">{step.num}</span>
                <span>{step.title.split("&")[0]}</span>
              </button>
            ))}
          </div>

          {/* Active Step Display Card */}
          <div className="mt-8 rounded-3xl border border-[#D9E2EC] bg-white p-6 sm:p-10 shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#F0EBE1] pb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-teal-700">
                  Phase {recoverySteps[activeStep].num} of 05
                </span>
                <h3 className="mt-1 font-serif text-2xl font-bold text-[#1E2E3D] sm:text-3xl">
                  {recoverySteps[activeStep].title}
                </h3>
                <p className="mt-1 text-xs text-[#627D98]">
                  {recoverySteps[activeStep].sub}
                </p>
              </div>

              <div className="rounded-2xl bg-teal-50 border border-teal-100 p-3 sm:text-right">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 block">
                  Important Protection Note
                </span>
                <span className="text-xs text-teal-900 font-medium">
                  {recoverySteps[activeStep].tip}
                </span>
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {/* Client's Role (Rest & Heal) */}
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-200 text-emerald-900 text-[10px]">
                    1
                  </span>
                  <span>What You Do (Rest & Care for Yourself)</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-emerald-950">
                  {recoverySteps[activeStep].clientRole}
                </p>
              </div>

              {/* Steve's Role (The Heavy Lifting) */}
              <div className="rounded-2xl border border-teal-100 bg-teal-50/50 p-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-200 text-teal-900 text-[10px]">
                    2
                  </span>
                  <span>What Steve Handles (The Heavy Legal Lifting)</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-teal-950">
                  {recoverySteps[activeStep].steveRole}
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-between items-center border-t border-[#F0EBE1] pt-6">
              <button
                type="button"
                disabled={activeStep === 0}
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                className="text-xs font-semibold text-[#627D98] hover:text-[#1E2E3D] disabled:opacity-40"
              >
                ← Previous Phase
              </button>
              <div className="flex gap-1.5">
                {recoverySteps.map((_, i) => (
                  <span
                    key={i}
                    className={`h-2 rounded-full transition-all ${activeStep === i ? "w-6 bg-teal-700" : "w-2 bg-[#D9E2EC]"}`}
                  />
                ))}
              </div>
              <button
                type="button"
                disabled={activeStep === recoverySteps.length - 1}
                onClick={() => setActiveStep((prev) => Math.min(recoverySteps.length - 1, prev + 1))}
                className="text-xs font-bold text-teal-700 hover:text-teal-900 disabled:opacity-40"
              >
                Next Phase →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LOCAL PALM BEACH COUNTY HOMETOWN COMMITMENT */}
      <section id="hometown-care" className="scroll-mt-20 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <span className="rounded-full border border-teal-600/30 bg-teal-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-teal-800">
                A True Hometown Advocate
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-[#1E2E3D] sm:text-4xl">
                Rooted in Jupiter. Fighting for South Florida Families.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#486581]">
                Unlike national multi-state billboard networks that treat Florida as just another advertising market, Steven Kuveikis grew up here, earned his degrees in Florida (UF B.S. &apos;91, J.D. &apos;94), and has raised his practice right here in Jupiter for three decades.
              </p>

              <div className="mt-6 space-y-3 text-xs leading-relaxed text-[#334E68]">
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-teal-700">✓</span>
                  <span>
                    <strong>Intimate Roadway Knowledge:</strong> High-risk corridors like Indiantown Road at rush hour, the I-95/Turnpike merge, US-1 bridges, Military Trail, and PGA Boulevard.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-teal-700">✓</span>
                  <span>
                    <strong>Palm Beach County Court Experience:</strong> Over 30 years appearing before local judges and working with the Palm Beach County trial bar.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-teal-700">✓</span>
                  <span>
                    <strong>Local Medical Network:</strong> Deep relationships with trusted local orthopedic surgeons, neurologists, and physical therapists who prioritize patient care over quick insurer settlements.
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-[#E5E0D8] bg-white p-5 shadow-sm">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-700 block">
                    Jupiter & Tequesta
                  </span>
                  <p className="mt-2 text-xs text-[#486581]">
                    Handling collisions along A1A, Indiantown Rd, Central Blvd, and bridge crossings.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E5E0D8] bg-white p-5 shadow-sm">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-700 block">
                    Palm Beach Gardens
                  </span>
                  <p className="mt-2 text-xs text-[#486581]">
                    PGA Blvd traffic, Gardens Mall premises incidents, and Turnpike interchanges.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E5E0D8] bg-white p-5 shadow-sm">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-700 block">
                    West Palm Beach
                  </span>
                  <p className="mt-2 text-xs text-[#486581]">
                    Downtown corridor, Okeechobee Blvd crashes, and 15th Judicial Circuit Court proceedings.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E5E0D8] bg-white p-5 shadow-sm">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-700 block">
                    Juno Beach & Coast
                  </span>
                  <p className="mt-2 text-xs text-[#486581]">
                    Coastal bike and pedestrian accidents along US-1 and beachside routes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COMPASSIONATE PRACTICE MATRIX */}
      <section className="border-t border-[#E5E0D8] bg-[#F7F4EB]/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="rounded-full border border-teal-600/30 bg-teal-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-teal-800">
              Areas of Care
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-[#1E2E3D] sm:text-4xl">
              How We Help You Heal
            </h2>
            <p className="mt-3 text-sm text-[#486581]">
              Every injury case is personal. Steve handles every claim with diligence and warmth.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((pa) => (
              <div
                key={pa.slug}
                className="rounded-2xl border border-[#E5E0D8] bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                  <PracticeIcon name={pa.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-[#1E2E3D]">
                  {pa.shortTitle}
                </h3>
                <p className="mt-2 text-xs text-[#627D98] leading-relaxed">
                  {pa.heroSummary}
                </p>
                <div className="mt-4 border-t border-[#F0EBE1] pt-3 flex items-center justify-between text-xs">
                  <Link
                    href={`/personal-injury/${pa.slug}`}
                    className="font-semibold text-teal-700 hover:text-teal-900 inline-flex items-center gap-1"
                  >
                    <span>Read Guidance</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <span className="text-[11px] text-[#829AB1]">$0 fee unless won</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ANXIETY-RELIEVER FAQ */}
      <section id="anxiety-faq" className="scroll-mt-20 border-t border-[#E5E0D8] py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center">
            <span className="rounded-full border border-teal-600/30 bg-teal-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-teal-800">
              Honest Answers
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-[#1E2E3D] sm:text-4xl">
              Answering the Questions That Keep You Awake
            </h2>
            <p className="mt-3 text-sm text-[#486581]">
              Transparency brings peace of mind. Here is what you need to know right now.
            </p>
          </div>

          <div className="mt-10 space-y-3">
            {[
              {
                q: "I cannot afford to pay an attorney right now. How does this work?",
                a: "You pay nothing out of pocket. We represent you on a pure contingency fee agreement. That means Steven Kuveikis advances all investigative, medical record retrieval, and court filing expenses. If we do not successfully recover money for your claim, you owe us nothing.",
              },
              {
                q: "Will I have to go to court and testify in front of people?",
                a: "The vast majority of injury claims (over 90%) settle out of court once an insurance carrier realizes Steve has constructed an indisputable liability and medical damages file. If court is necessary, Steve will be by your side for every single second.",
              },
              {
                q: "How will my medical bills get paid while I am out of work?",
                a: "We coordinate with Florida PIP coverage, medical payment policies, and health insurers. In addition, Steve connects you with reputable physicians who treat you under 'Letters of Protection' (LOPs), meaning they agree to wait for payment until your case resolves.",
              },
              {
                q: "What if the insurance adjuster is already calling me repeatedly?",
                a: "Tell them politely: 'I am retaining Steven Kuveikis as my attorney. Please direct all future questions to his office at (561) 354-6969.' Once you retain Steve, insurance companies are prohibited by ethical rules and Florida law from contacting you directly.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border border-[#E5E0D8] bg-white transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between p-5 text-left font-serif text-base font-bold text-[#1E2E3D]"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-teal-700 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-xs leading-relaxed text-[#486581] border-t border-[#F0EBE1] pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. "MESSAGE STEVE DIRECTLY" WARM INTAKE */}
      <section id="direct-message" className="scroll-mt-20 border-t border-[#E5E0D8] bg-[#F7F4EB] py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="rounded-3xl border border-[#D9E2EC] bg-white p-8 sm:p-10 shadow-xl">
            <div className="text-center">
              <span className="rounded-full bg-teal-50 border border-teal-200 px-3 py-1 text-xs font-bold text-teal-800 uppercase tracking-wider">
                Direct Line to Steve
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-[#1E2E3D]">
                Tell Steve What Happened In Your Own Words
              </h2>
              <p className="mt-2 text-xs text-[#627D98]">
                No legal jargon needed. Just tell us what hurts and how we can help.
              </p>
            </div>

            {!messageSent ? (
              <form onSubmit={handleMessageSubmit} className="mt-8 space-y-4">
                {/* Contact Mode Selector */}
                <div className="flex justify-center gap-2 pb-2">
                  {[
                    { id: "text", label: "📱 Text me back" },
                    { id: "call", label: "📞 Call me directly" },
                    { id: "email", label: "✉️ Email me first" },
                  ].map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setContactMode(m.id as "text" | "call" | "email")}
                      className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                        contactMode === m.id
                          ? "bg-teal-700 text-white"
                          : "bg-[#F0F4F8] text-[#486581] hover:bg-[#D9E2EC]"
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#334E68]">Your Name</label>
                  <input
                    type="text"
                    required
                    value={msgData.name}
                    onChange={(e) => setMsgData({ ...msgData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="mt-1 w-full rounded-xl border border-[#CBD2D9] px-3.5 py-2.5 text-sm text-[#1E2E3D] focus:border-teal-700 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#334E68]">
                    {contactMode === "email" ? "Your Email Address" : "Your Phone Number (Mobile)"}
                  </label>
                  <input
                    type={contactMode === "email" ? "email" : "tel"}
                    required
                    value={msgData.contact}
                    onChange={(e) => setMsgData({ ...msgData, contact: e.target.value })}
                    placeholder={contactMode === "email" ? "sarah@example.com" : "(561) 555-0192"}
                    className="mt-1 w-full rounded-xl border border-[#CBD2D9] px-3.5 py-2.5 text-sm text-[#1E2E3D] focus:border-teal-700 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#334E68]">
                    What happened? (Take your time)
                  </label>
                  <textarea
                    rows={3}
                    value={msgData.story}
                    onChange={(e) => setMsgData({ ...msgData, story: e.target.value })}
                    placeholder="e.g. I was hit at an intersection on Indiantown Road yesterday, suffering neck pain..."
                    className="mt-1 w-full rounded-xl border border-[#CBD2D9] px-3.5 py-2.5 text-sm text-[#1E2E3D] focus:border-teal-700 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-teal-700 py-3.5 text-sm font-bold text-white shadow-md hover:bg-teal-800 transition-all"
                >
                  Send Confidential Message to Steve →
                </button>

                <p className="text-center text-[11px] text-[#829AB1]">
                  Strictly confidential. No attorney-client relationship is formed until a formal agreement is signed.
                </p>
              </form>
            ) : (
              <div className="mt-8 rounded-2xl bg-teal-50 border border-teal-200 p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-white">
                  <CheckIcon className="h-6 w-6" />
                </div>
                <h3 className="mt-3 font-serif text-xl font-bold text-teal-900">
                  Message Transmitted Personally to Steven Kuveikis
                </h3>
                <p className="mt-2 text-xs text-teal-800">
                  Thank you, <span className="font-semibold text-teal-950">{msgData.name}</span>. Steve has received your note and will reach out via your preferred method ({contactMode}) shortly.
                </p>
                <div className="mt-5 flex flex-wrap justify-center items-center gap-3">
                  <a
                    href={siteConfig.phoneHref}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-teal-700 px-4 py-2 text-xs font-bold text-white hover:bg-teal-800"
                  >
                    <PhoneIcon className="h-3.5 w-3.5" />
                    <span>Call Steve: {siteConfig.phone}</span>
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(
                      `Confidential Inquiry: ${msgData.name}`
                    )}&body=${encodeURIComponent(
                      `Name: ${msgData.name}\nContact: ${msgData.contact} (${contactMode})\n\nMessage:\n${msgData.story}`
                    )}`}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-teal-300 bg-white px-4 py-2 text-xs font-semibold text-teal-800 hover:bg-teal-50"
                  >
                    <MailIcon className="h-3.5 w-3.5 text-teal-700" />
                    <span>Email Directly</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setMessageSent(false);
                      setMsgData({ name: "", contact: "", story: "" });
                    }}
                    className="rounded-xl border border-[#CBD2D9] bg-white px-4 py-2 text-xs font-semibold text-[#486581] hover:text-[#1E2E3D]"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Bespoke Coastal Footer */}
      <footer className="border-t border-[#E5E0D8] bg-white py-12 text-xs text-[#627D98]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-8 md:grid-cols-3">
          <div>
            <span className="font-serif text-base font-bold text-[#1E2E3D]">Kuveikis Law</span>
            <p className="mt-2 leading-relaxed">
              Compassionate personal injury representation for neighbors in Jupiter, Palm Beach Gardens, and across South Florida.
            </p>
          </div>
          <div>
            <span className="font-semibold text-[#1E2E3D] uppercase tracking-wider text-[11px]">Direct Office</span>
            <p className="mt-2 flex items-start gap-1.5">
              <PinIcon className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
              <span>{siteConfig.address.full}</span>
            </p>
            <p className="mt-1 flex items-center gap-1.5">
              <PhoneIcon className="h-4 w-4 text-teal-700 shrink-0" />
              <span>{siteConfig.phone} (Answered 24/7)</span>
            </p>
            <p className="mt-1 flex items-center gap-1.5">
              <MailIcon className="h-4 w-4 text-teal-700 shrink-0" />
              <span>{siteConfig.email}</span>
            </p>
          </div>
          <div>
            <span className="font-semibold text-[#1E2E3D] uppercase tracking-wider text-[11px]">Notice</span>
            <p className="mt-2 leading-relaxed text-[11px]">
              The information on this page is for general support and not formal legal advice. Every case is different. $0 fee unless we recover compensation for you.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-8 border-t border-[#F0EBE1] pt-4 text-center text-[11px] text-[#9FB3C8]">
          © {new Date().getFullYear()} Kuveikis Law · Steven Kuveikis, Esq. · Florida Bar Admitted 1995.
        </div>
      </footer>
    </div>
  );
}
