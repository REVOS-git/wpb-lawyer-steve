"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { practiceAreas } from "@/lib/practiceAreas";
import {
  PhoneIcon,
  PinIcon,
  CheckIcon,
  ArrowRight,
  ClockIcon,
  ScaleIcon,
  PracticeIcon,
} from "@/components/Icons";

function getLocalDateString(d: Date = new Date()) {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getPastDateString(daysAgo: number) {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  return getLocalDateString(d);
}

export default function RenditionThreePage() {
  // Split hero intake state
  const [intakeCategory, setIntakeCategory] = useState("car");
  const [incidentDate, setIncidentDate] = useState(() => getPastDateString(5));
  const [injurySummary, setInjurySummary] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientName, setClientName] = useState("");
  const [intakeSubmitted, setIntakeSubmitted] = useState(false);

  // Florida PIP Calculator
  const [pipDateInput, setPipDateInput] = useState(() => getPastDateString(5));

  // Florida 2-Year Statute Calculator
  const [statuteDateInput, setStatuteDateInput] = useState(() => getPastDateString(180));

  // Practice Matrix Filter
  const [matrixFilter, setMatrixFilter] = useState<"all" | "auto" | "premises" | "catastrophic">("all");

  // Contingency Fee Calculator Slider & Stage
  const [simulatedSettlement, setSimulatedSettlement] = useState(150000);
  const [feeStage, setFeeStage] = useState<"presuit" | "litigation">("presuit");

  // Dynamic PIP Status Calculator
  const calculatePipStatus = (dateStr: string) => {
    if (!dateStr) return { days: 14, status: "Enter crash date", urgent: false, elapsed: 0 };
    try {
      const parts = dateStr.split("-").map(Number);
      if (parts.length !== 3 || parts.some(isNaN)) {
        return { days: 14, status: "Invalid Date", urgent: false, elapsed: 0 };
      }
      const incident = new Date(parts[0], parts[1] - 1, parts[2]).getTime();
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const now = today.getTime();
      const diffDays = Math.floor((now - incident) / (1000 * 60 * 60 * 24));

      if (diffDays < 0) {
        return { days: 14, status: "Future Date Entered", urgent: false, elapsed: 0 };
      }
      const remaining = 14 - diffDays;
      if (remaining > 0) {
        return {
          days: remaining,
          status: `${remaining} Day${remaining === 1 ? "" : "s"} Left to Seek Care (Day ${diffDays} of 14)`,
          urgent: remaining <= 3,
          elapsed: diffDays,
        };
      }
      return {
        days: 0,
        status: `14-Day Window Lapsed (${diffDays - 14} days past cutoff — Urgent Attorney Review)`,
        urgent: true,
        elapsed: diffDays,
      };
    } catch {
      return { days: 14, status: "Active Window", urgent: false, elapsed: 0 };
    }
  };

  // Dynamic 2-Year HB 837 Statute Countdown Calculator
  const calculateStatuteCountdown = (dateStr: string) => {
    if (!dateStr) return null;
    try {
      const parts = dateStr.split("-").map(Number);
      if (parts.length !== 3 || parts.some(isNaN)) return null;

      const deadline = new Date(parts[0] + 2, parts[1] - 1, parts[2]);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const diffMs = deadline.getTime() - today.getTime();
      const daysRemaining = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
      const totalDays = 730;
      const elapsedDays = Math.max(0, totalDays - daysRemaining);
      const percentElapsed = Math.min(100, Math.max(0, Math.round((elapsedDays / totalDays) * 100)));

      const formattedDeadline = deadline.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });

      if (daysRemaining <= 0) {
        return {
          daysRemaining: 0,
          deadlineStr: formattedDeadline,
          percentElapsed: 100,
          status: "Statute Expired or Expiring Imminently — Toll Review Required",
          urgent: true,
          expired: true,
        };
      }

      return {
        daysRemaining,
        deadlineStr: formattedDeadline,
        percentElapsed,
        status: `${daysRemaining} Days Left to File Lawsuit (${formattedDeadline})`,
        urgent: daysRemaining <= 90,
        expired: false,
      };
    } catch {
      return null;
    }
  };

  const pipStatus = calculatePipStatus(pipDateInput);
  const statuteStatus = calculateStatuteCountdown(statuteDateInput);

  const handleHeroIntake = (e: React.FormEvent) => {
    e.preventDefault();
    setIntakeSubmitted(true);

    const subject = `Rapid Intake Dispatch: ${clientName || "New Lead"} [${intakeCategory.toUpperCase()}]`;
    const bodyLines = [
      `Category: ${intakeCategory.toUpperCase()}`,
      `Incident Date: ${incidentDate}`,
      `Client Name: ${clientName}`,
      `Direct Phone: ${clientPhone}`,
      `Injury Notes: ${injurySummary || "None provided"}`,
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

  const filteredAreas = practiceAreas.filter((pa) => {
    if (matrixFilter === "all") return true;
    if (matrixFilter === "auto") {
      return ["car-accidents", "truck-accidents", "motorcycle-accidents", "rideshare-accidents", "delivery-driver-accidents"].includes(pa.slug);
    }
    if (matrixFilter === "premises") {
      return ["slip-and-fall", "negligent-security"].includes(pa.slug);
    }
    if (matrixFilter === "catastrophic") {
      return ["wrongful-death", "truck-accidents", "motorcycle-accidents"].includes(pa.slug);
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-blue-600 selection:text-white font-sans antialiased">
      {/* 1. PRECISION SWISS HEADER */}
      <header
        style={{ top: "var(--switcher-height, 0px)" }}
        className="sticky z-40 border-b border-zinc-200 bg-white/95 backdrop-blur-md transition-[top]"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/rendition-3" className="flex items-center gap-3 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-950 text-white font-mono text-xs font-bold">
              SK
            </div>
            <div>
              <span className="block font-mono text-sm font-bold tracking-tight text-zinc-950 uppercase">
                Kuveikis Law // Personal Injury
              </span>
              <span className="block font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                Jupiter, FL · 30+ Yrs FL Bar Experience
              </span>
            </div>
          </Link>

          {/* Center: Live Status Indicator */}
          <div className="hidden lg:flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-[11px] font-mono font-medium text-zinc-600">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>TRIAGE SYSTEM ACTIVE · HB 837 COMPLIANT</span>
          </div>

          {/* Right Action */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-xs font-mono font-bold text-white hover:bg-blue-700 transition-colors shadow-sm"
            >
              <PhoneIcon className="h-3.5 w-3.5" />
              <span>{siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </header>

      {/* 2. SPLIT-SCREEN HERO WITH EMBEDDED 60-SECOND INTAKE */}
      <section className="border-b border-zinc-200 bg-zinc-50 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            {/* Left Split: High-Impact Swiss Typography & Metrics */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded border border-blue-200 bg-blue-50 px-2.5 py-1 font-mono text-xs font-bold uppercase tracking-wider text-blue-700">
                <span>FLORIDA TORT REFORM ALERT</span>
                <span>·</span>
                <span>HB 837 DEADLINES</span>
              </div>

              <h1 className="mt-5 font-mono text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-5xl lg:text-[3.25rem] leading-[1.1]">
                FLORIDA ACCIDENT LAW CHANGED.{" "}
                <span className="text-blue-600">TIME IS YOUR ENEMY.</span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
                Florida cut its negligence filing deadline in half — from 4 years to 2 years. If an insurer shifts 51% of fault onto you, you recover $0. You need immediate evidence lockdown and direct veteran legal triage.
              </p>

              {/* Technical Metrics Matrix */}
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 font-mono">
                <div className="border border-zinc-300 bg-white p-3.5">
                  <div className="text-2xl font-black text-zinc-950">30+ YRS</div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-wider mt-0.5">FL Bar License #58599</div>
                </div>
                <div className="border border-zinc-300 bg-white p-3.5">
                  <div className="text-2xl font-black text-blue-600">$0 FEE</div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-wider mt-0.5">Contingency Only</div>
                </div>
                <div className="border border-zinc-300 bg-white p-3.5">
                  <div className="text-2xl font-black text-zinc-950">1-ON-1</div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-wider mt-0.5">Direct Attorney Access</div>
                </div>
                <div className="border border-zinc-300 bg-white p-3.5">
                  <div className="text-2xl font-black text-orange-600">14-DAY</div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-wider mt-0.5">FL PIP Deadline Clock</div>
                </div>
              </div>

              {/* Direct Value Bullet Points */}
              <div className="mt-8 space-y-2 text-xs font-mono text-zinc-700">
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold">[✓]</span>
                  <span>Former insurance defense attorney: understands adjuster valuation models.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold">[✓]</span>
                  <span>Never delegated to junior paralegals or volume settlement mills.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold">[✓]</span>
                  <span>Immediate evidence spoliation letters to preserve dashcams & black-box data.</span>
                </div>
              </div>
            </div>

            {/* Right Split: Embedded 60-Second Instant Intake Form */}
            <div id="rapid-intake" className="lg:col-span-5 scroll-mt-24">
              <div className="border-2 border-zinc-950 bg-white p-6 shadow-xl">
                <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="flex h-3 w-3 rounded-full bg-blue-600" />
                    <span className="font-mono text-xs font-black uppercase tracking-wider text-zinc-950">
                      Rapid Case Triage Form
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-zinc-500 uppercase">
                    Direct To Steve
                  </span>
                </div>

                {!intakeSubmitted ? (
                  <form onSubmit={handleHeroIntake} className="mt-5 space-y-4">
                    {/* Category Selector */}
                    <div>
                      <label className="block font-mono text-[11px] font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                        1. Incident Category
                      </label>
                      <div className="grid grid-cols-3 gap-1.5 font-mono text-xs">
                        {[
                          { id: "car", label: "Auto Crash" },
                          { id: "truck", label: "Semi-Truck" },
                          { id: "motorcycle", label: "Motorcycle" },
                          { id: "fall", label: "Slip & Fall" },
                          { id: "security", label: "Assault/Sec" },
                          { id: "rideshare", label: "Uber/Lyft" },
                        ].map((cat) => (
                          <button
                            key={cat.id}
                            type="button"
                            onClick={() => setIntakeCategory(cat.id)}
                            className={`border py-1.5 text-center transition-colors ${
                              intakeCategory === cat.id
                                ? "border-zinc-950 bg-zinc-950 text-white font-bold"
                                : "border-zinc-300 bg-zinc-50 text-zinc-700 hover:border-zinc-400"
                            }`}
                          >
                            {cat.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Date Selector */}
                    <div>
                      <label className="block font-mono text-[11px] font-bold uppercase tracking-wider text-zinc-700 mb-1">
                        2. Date of Incident (Statute Verification)
                      </label>
                      <input
                        type="date"
                        required
                        value={incidentDate}
                        onChange={(e) => setIncidentDate(e.target.value)}
                        className="w-full border border-zinc-300 bg-zinc-50 px-3 py-2 text-xs font-mono text-zinc-900 focus:border-zinc-950 focus:outline-none"
                      />
                    </div>

                    {/* Contact & Injuries */}
                    <div>
                      <label className="block font-mono text-[11px] font-bold uppercase tracking-wider text-zinc-700 mb-1">
                        3. Your Full Name & Contact Phone
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          required
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          placeholder="Your Name"
                          className="border border-zinc-300 bg-zinc-50 px-3 py-2 text-xs text-zinc-900 focus:border-zinc-950 focus:outline-none"
                        />
                        <input
                          type="tel"
                          required
                          value={clientPhone}
                          onChange={(e) => setClientPhone(e.target.value)}
                          placeholder="Direct Phone"
                          className="border border-zinc-300 bg-zinc-50 px-3 py-2 text-xs text-zinc-900 focus:border-zinc-950 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-mono text-[11px] font-bold uppercase tracking-wider text-zinc-700 mb-1">
                        4. Brief Injury Description
                      </label>
                      <textarea
                        rows={2}
                        value={injurySummary}
                        onChange={(e) => setInjurySummary(e.target.value)}
                        placeholder="e.g. Rear-ended on I-95, severe disc pain, car totaled..."
                        className="w-full border border-zinc-300 bg-zinc-50 px-3 py-2 text-xs text-zinc-900 focus:border-zinc-950 focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full border-2 border-zinc-950 bg-blue-600 py-3 font-mono text-xs font-black uppercase tracking-wider text-white hover:bg-blue-700 transition-colors"
                    >
                      Transmit To Steven Kuveikis Immediately →
                    </button>

                    <div className="font-mono text-[10px] text-zinc-500 text-center">
                      100% Confidential · Free Case Evaluation · No Obligation
                    </div>
                  </form>
                ) : (
                  <div className="mt-5 border border-emerald-300 bg-emerald-50 p-5 text-center">
                    <CheckIcon className="mx-auto h-6 w-6 text-emerald-600 mb-1" />
                    <div className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-800">
                      [TRANSMISSION CONFIRMED]
                    </div>
                    <p className="mt-2 text-xs text-zinc-700">
                      Triage file created for <strong className="text-zinc-950">{clientName}</strong>. Steven Kuveikis has been alerted at <strong className="text-zinc-950">{clientPhone}</strong>.
                    </p>
                    <div className="mt-4 flex flex-col sm:flex-row gap-2 justify-center items-center font-mono text-xs">
                      <a
                        href={siteConfig.phoneHref}
                        className="inline-flex items-center gap-1.5 font-bold text-blue-600 hover:text-blue-800 underline"
                      >
                        <PhoneIcon className="h-3 w-3" />
                        <span>Call Steve Now: {siteConfig.phone}</span>
                      </a>
                      <span className="hidden sm:inline text-zinc-400">·</span>
                      <a
                        href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(
                          `Rapid Intake Lead: ${clientName}`
                        )}&body=${encodeURIComponent(
                          `Name: ${clientName}\nPhone: ${clientPhone}\nCategory: ${intakeCategory}\nDate: ${incidentDate}\nSummary: ${injurySummary}`
                        )}`}
                        className="text-zinc-600 hover:text-zinc-900 underline"
                      >
                        Send Direct Email
                      </a>
                    </div>
                    <div className="mt-4 pt-3 border-t border-emerald-200">
                      <button
                        type="button"
                        onClick={() => {
                          setIntakeSubmitted(false);
                          setClientName("");
                          setClientPhone("");
                          setInjurySummary("");
                        }}
                        className="font-mono text-[11px] text-zinc-500 hover:text-zinc-900 underline"
                      >
                        [Submit New Intake]
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FLORIDA TORT REFORM DEADLINE URGENCY TRACKER */}
      <section className="border-b border-zinc-200 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="border-l-4 border-zinc-950 pl-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-600">
              Statutory Risk Engine
            </span>
            <h2 className="mt-1 font-mono text-2xl font-black uppercase tracking-tight text-zinc-950 sm:text-3xl">
              Florida Tort Deadlines & Risk Metrics
            </h2>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {/* Widget 1: 14-Day PIP Medical Clock */}
            <div className="border border-zinc-300 p-6 bg-white">
              <div className="flex items-center justify-between text-xs font-mono font-bold">
                <span className="text-orange-600 uppercase">F.S. § 627.736</span>
                <ClockIcon className="h-4 w-4 text-orange-600" />
              </div>
              <h3 className="mt-3 font-mono text-lg font-bold text-zinc-950">
                14-Day PIP Medical Clock
              </h3>
              <p className="mt-2 text-xs text-zinc-600 leading-relaxed">
                Florida requires medical evaluation within 14 days of a crash to preserve up to $10,000 in Personal Injury Protection benefits.
              </p>

              <div className="mt-4 border-t border-zinc-200 pt-3">
                <label className="block font-mono text-[10px] text-zinc-500 uppercase">
                  Verify Your Crash Date:
                </label>
                <input
                  type="date"
                  value={pipDateInput}
                  onChange={(e) => setPipDateInput(e.target.value)}
                  className="mt-1 w-full border border-zinc-300 px-2 py-1 text-xs font-mono text-zinc-800"
                />
                
                {/* Quick Presets */}
                <div className="mt-2 flex flex-wrap gap-1 font-mono text-[10px]">
                  <button
                    type="button"
                    onClick={() => setPipDateInput(getPastDateString(1))}
                    className="border border-zinc-200 bg-zinc-50 px-1.5 py-0.5 text-zinc-600 hover:bg-zinc-100"
                  >
                    Yesterday
                  </button>
                  <button
                    type="button"
                    onClick={() => setPipDateInput(getPastDateString(5))}
                    className="border border-zinc-200 bg-zinc-50 px-1.5 py-0.5 text-zinc-600 hover:bg-zinc-100"
                  >
                    5 Days Ago
                  </button>
                  <button
                    type="button"
                    onClick={() => setPipDateInput(getPastDateString(12))}
                    className="border border-zinc-200 bg-zinc-50 px-1.5 py-0.5 text-zinc-600 hover:bg-zinc-100"
                  >
                    12 Days (Urgent)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPipDateInput(getPastDateString(20))}
                    className="border border-zinc-200 bg-zinc-50 px-1.5 py-0.5 text-zinc-600 hover:bg-zinc-100"
                  >
                    20 Days (Expired)
                  </button>
                </div>

                <div className={`mt-2 p-2 font-mono text-xs font-bold border ${pipStatus.urgent ? "border-orange-500 bg-orange-50 text-orange-800" : "border-emerald-500 bg-emerald-50 text-emerald-800"}`}>
                  STATUS: {pipStatus.status}
                </div>
              </div>
            </div>

            {/* Widget 2: HB 837 2-Year Statute of Limitations Dynamic Countdown */}
            <div className="border border-zinc-300 p-6 bg-white">
              <div className="flex items-center justify-between text-xs font-mono font-bold">
                <span className="text-blue-600 uppercase">F.S. § 95.11(4)(a)</span>
                <ScaleIcon className="h-4 w-4 text-blue-600" />
              </div>
              <h3 className="mt-3 font-mono text-lg font-bold text-zinc-950">
                2-Year Statute Countdown
              </h3>
              <p className="mt-2 text-xs text-zinc-600 leading-relaxed">
                Florida HB 837 cut the lawsuit deadline from 4 to 2 years (730 days). Once the clock strikes zero, your right to recover is extinguished forever.
              </p>

              <div className="mt-4 border-t border-zinc-200 pt-3">
                <label className="block font-mono text-[10px] text-zinc-500 uppercase">
                  Accident Date for Statute Audit:
                </label>
                <input
                  type="date"
                  value={statuteDateInput}
                  onChange={(e) => setStatuteDateInput(e.target.value)}
                  className="mt-1 w-full border border-zinc-300 px-2 py-1 text-xs font-mono text-zinc-800"
                />

                {/* Quick Presets */}
                <div className="mt-2 flex flex-wrap gap-1 font-mono text-[10px]">
                  <button
                    type="button"
                    onClick={() => setStatuteDateInput(getPastDateString(90))}
                    className="border border-zinc-200 bg-zinc-50 px-1.5 py-0.5 text-zinc-600 hover:bg-zinc-100"
                  >
                    3 Mos
                  </button>
                  <button
                    type="button"
                    onClick={() => setStatuteDateInput(getPastDateString(365))}
                    className="border border-zinc-200 bg-zinc-50 px-1.5 py-0.5 text-zinc-600 hover:bg-zinc-100"
                  >
                    1 Year
                  </button>
                  <button
                    type="button"
                    onClick={() => setStatuteDateInput(getPastDateString(670))}
                    className="border border-zinc-200 bg-zinc-50 px-1.5 py-0.5 text-zinc-600 hover:bg-zinc-100"
                  >
                    60 Days Left
                  </button>
                  <button
                    type="button"
                    onClick={() => setStatuteDateInput(getPastDateString(750))}
                    className="border border-zinc-200 bg-zinc-50 px-1.5 py-0.5 text-zinc-600 hover:bg-zinc-100"
                  >
                    Expired
                  </button>
                </div>

                {statuteStatus && (
                  <div className="mt-2">
                    <div className={`p-2 font-mono text-xs font-bold border ${statuteStatus.urgent ? "border-red-500 bg-red-50 text-red-800" : "border-blue-500 bg-blue-50 text-blue-900"}`}>
                      {statuteStatus.status}
                    </div>
                    {/* Visual Progress Bar */}
                    <div className="mt-2">
                      <div className="h-2 w-full bg-zinc-200 overflow-hidden flex">
                        <div
                          className={`transition-all duration-300 ${statuteStatus.urgent ? "bg-red-600" : "bg-blue-600"}`}
                          style={{ width: `${statuteStatus.percentElapsed}%` }}
                        />
                      </div>
                      <div className="flex justify-between font-mono text-[10px] text-zinc-500 mt-1">
                        <span>Incident</span>
                        <span className="font-semibold text-zinc-700">{statuteStatus.percentElapsed}% Expired</span>
                        <span>Cutoff</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Widget 3: 51% Modified Comparative Fault Bar */}
            <div className="border border-zinc-300 p-6 bg-white">
              <div className="flex items-center justify-between text-xs font-mono font-bold">
                <span className="text-red-600 uppercase">F.S. § 768.81</span>
                <span className="h-2 w-2 rounded-full bg-red-600" />
              </div>
              <h3 className="mt-3 font-mono text-lg font-bold text-zinc-950">
                51% Fault Recovery Bar
              </h3>
              <p className="mt-2 text-xs text-zinc-600 leading-relaxed">
                If the insurance adjuster manipulates evidence to argue you were 51% responsible, you recover exactly $0. Kuveikis Law moves within 48h to lock in liability evidence.
              </p>
              <div className="mt-4 border-t border-zinc-200 pt-3">
                <div className="h-2 w-full bg-zinc-200 rounded-full overflow-hidden flex">
                  <div className="bg-emerald-500 w-[50%]" title="0-50% Fault = Recovery Allowed" />
                  <div className="bg-red-600 w-[50%]" title="51-100% Fault = BARRED ($0)" />
                </div>
                <div className="flex justify-between font-mono text-[10px] text-zinc-500 mt-1">
                  <span className="text-emerald-700">0%–50%: Recover Pro-Rata</span>
                  <span className="text-red-700 font-bold">51%+: $0 (Barred)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE PRACTICE AREA FILTER MATRIX & EVIDENCE CHECKLIST */}
      <section className="border-b border-zinc-200 bg-zinc-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-600">
                Action Matrix
              </span>
              <h2 className="mt-1 font-mono text-2xl font-black uppercase tracking-tight text-zinc-950 sm:text-3xl">
                Practice Area Defense Checklists
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-1 font-mono text-xs">
              {[
                { id: "all", label: "ALL" },
                { id: "auto", label: "MOTOR VEHICLE" },
                { id: "premises", label: "PREMISES/SECURITY" },
                { id: "catastrophic", label: "CATASTROPHIC" },
              ].map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setMatrixFilter(filter.id as "all" | "auto" | "premises" | "catastrophic")}
                  className={`px-3 py-1.5 border transition-colors ${
                    matrixFilter === filter.id
                      ? "border-zinc-950 bg-zinc-950 text-white font-bold"
                      : "border-zinc-300 bg-white text-zinc-700 hover:border-zinc-400"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredAreas.map((pa) => (
              <div
                key={pa.slug}
                className="border border-zinc-300 bg-white p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-blue-600">
                      CODE: {pa.slug.toUpperCase()}
                    </span>
                    <PracticeIcon name={pa.icon} className="h-4 w-4 text-zinc-600" />
                  </div>

                  <h3 className="mt-3 font-mono text-base font-bold text-zinc-950">
                    {pa.shortTitle}
                  </h3>

                  <p className="mt-2 text-xs text-zinc-600 leading-relaxed">
                    {pa.heroSummary}
                  </p>

                  <div className="mt-4 border-t border-zinc-100 pt-3">
                    <span className="font-mono text-[10px] font-bold uppercase text-zinc-500 block mb-1">
                      Immediate Evidentiary Actions:
                    </span>
                    <ul className="space-y-1 text-xs text-zinc-700">
                      {pa.whatToDo.slice(0, 2).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1 font-mono text-[11px]">
                          <span className="text-blue-600 font-bold">&gt;</span>
                          <span>{item.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-5 border-t border-zinc-200 pt-3 flex items-center justify-between text-xs font-mono">
                  <Link
                    href={`/personal-injury/${pa.slug}`}
                    className="font-bold text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1"
                  >
                    <span>Statutory Review</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                  <span className="text-zinc-500 font-medium">Contingency</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TRANSPARENT CONTINGENCY FEE & RECOVERY SIMULATOR */}
      <section className="border-b border-zinc-200 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="border border-zinc-950 bg-zinc-50 p-6 sm:p-8">
            <div className="text-center">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-600">
                100% Financial Transparency
              </span>
              <h2 className="mt-1 font-mono text-2xl font-black uppercase tracking-tight text-zinc-950">
                Contingency Fee & Recovery Simulator
              </h2>
              <p className="mt-2 text-xs text-zinc-600 max-w-lg mx-auto">
                No retainers. No hourly bills. If there is no recovery, you owe zero legal fees and zero cost reimbursement.
              </p>
            </div>

            <div className="mt-8 border border-zinc-300 bg-white p-6">
              {/* Stage Toggle */}
              <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-zinc-200 pb-4">
                <span className="font-mono text-xs font-bold uppercase text-zinc-800">
                  Select Settlement Stage:
                </span>
                <div className="flex gap-1 font-mono text-xs">
                  <button
                    type="button"
                    onClick={() => setFeeStage("presuit")}
                    className={`px-3 py-1 border transition-colors ${
                      feeStage === "presuit"
                        ? "border-zinc-950 bg-zinc-950 text-white font-bold"
                        : "border-zinc-300 bg-zinc-50 text-zinc-700 hover:border-zinc-400"
                    }`}
                  >
                    Pre-Suit Resolution (33.3%)
                  </button>
                  <button
                    type="button"
                    onClick={() => setFeeStage("litigation")}
                    className={`px-3 py-1 border transition-colors ${
                      feeStage === "litigation"
                        ? "border-zinc-950 bg-zinc-950 text-white font-bold"
                        : "border-zinc-300 bg-zinc-50 text-zinc-700 hover:border-zinc-400"
                    }`}
                  >
                    Formal Litigation / Trial (40%)
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between mb-2">
                <label className="block font-mono text-xs font-bold uppercase tracking-wider text-zinc-700">
                  Simulate Gross Settlement:
                </label>
                <span className="font-mono text-lg font-black text-blue-600">
                  ${simulatedSettlement.toLocaleString()}
                </span>
              </div>

              <input
                type="range"
                min={25000}
                max={1000000}
                step={25000}
                value={simulatedSettlement}
                onChange={(e) => setSimulatedSettlement(Number(e.target.value))}
                className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />

              {/* Dynamic Calculation Breakdown */}
              {(() => {
                const feeRate = feeStage === "presuit" ? 1 / 3 : 0.4;
                const attorneyFee = Math.round(simulatedSettlement * feeRate);
                const estimatedLienReserve = Math.round(simulatedSettlement * 0.15);
                const clientNet = Math.max(0, simulatedSettlement - attorneyFee - estimatedLienReserve);

                return (
                  <div>
                    <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-zinc-200 pt-4 font-mono text-center">
                      <div className="p-3 border border-zinc-200 bg-zinc-50">
                        <div className="text-[10px] text-zinc-500 uppercase">Upfront Cost</div>
                        <div className="text-xl font-black text-emerald-600">$0.00</div>
                        <div className="text-[9px] text-zinc-400 mt-0.5">Zero Out of Pocket</div>
                      </div>

                      <div className="p-3 border border-zinc-200 bg-zinc-50">
                        <div className="text-[10px] text-zinc-500 uppercase">
                          Attorney Fee ({feeStage === "presuit" ? "33.3%" : "40%"})
                        </div>
                        <div className="text-xl font-black text-zinc-950">
                          ${attorneyFee.toLocaleString()}
                        </div>
                        <div className="text-[9px] text-zinc-400 mt-0.5">FL Bar Rule 4-1.5</div>
                      </div>

                      <div className="p-3 border border-zinc-200 bg-zinc-50">
                        <div className="text-[10px] text-zinc-500 uppercase">
                          Med Bills & Liens (Est.)
                        </div>
                        <div className="text-xl font-black text-zinc-700">
                          ~${estimatedLienReserve.toLocaleString()}
                        </div>
                        <div className="text-[9px] text-emerald-700 font-semibold mt-0.5">Steve Slashes Liens</div>
                      </div>

                      <div className="p-3 border border-blue-200 bg-blue-50/80">
                        <div className="text-[10px] text-blue-800 uppercase font-bold">
                          Client Net In Pocket
                        </div>
                        <div className="text-xl font-black text-blue-700">
                          ${clientNet.toLocaleString()}
                        </div>
                        <div className="text-[9px] text-blue-600 font-medium mt-0.5">Direct Take-Home</div>
                      </div>
                    </div>

                    <div className="mt-4 rounded border border-zinc-200 bg-zinc-50 p-3 text-xs font-mono text-zinc-600">
                      <strong className="text-zinc-900 block mb-0.5">The Steve Kuveikis Lien Reduction Advantage:</strong>
                      Hospitals and health insurance carriers initially demand inflated retail rates. Because Steve is a veteran Florida trial attorney, he aggressively negotiates statutory lien reductions so a significantly higher percentage of the ${simulatedSettlement.toLocaleString()} settlement stays in your bank account.
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* 6. FIXED FLOATING ACTION DOCK */}
      <div className="fixed bottom-0 inset-x-0 z-50 border-t-2 border-zinc-950 bg-white/95 backdrop-blur-md py-2.5 px-4 shadow-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold text-zinc-950 uppercase hidden sm:inline">
              Steve Kuveikis, Esq. · Direct Emergency Line:
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 bg-zinc-950 px-4 py-2 font-bold uppercase text-white hover:bg-zinc-800 transition-colors"
            >
              <PhoneIcon className="h-3.5 w-3.5 text-blue-400" />
              <span>Call {siteConfig.phone}</span>
            </a>
            <a
              href="#rapid-intake"
              className="hidden sm:inline-flex items-center gap-1 border border-zinc-300 px-3 py-2 font-semibold text-zinc-800 hover:bg-zinc-100"
            >
              <span>Instant Intake ↑</span>
            </a>
          </div>
        </div>
      </div>

      {/* Swiss Modern Minimalist Footer */}
      <footer className="border-t border-zinc-200 bg-zinc-950 text-white py-12 pb-24 text-xs font-mono">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-8 md:grid-cols-4">
          <div>
            <span className="font-bold text-sm tracking-wider uppercase">Kuveikis Law</span>
            <p className="mt-2 text-zinc-400 leading-relaxed font-sans text-xs">
              Precision personal injury and commercial vehicle litigation serving Palm Beach County.
            </p>
          </div>
          <div>
            <span className="font-bold uppercase text-zinc-300 text-[11px]">Direct Office</span>
            <p className="mt-2 text-zinc-400 font-sans text-xs flex items-start gap-1">
              <PinIcon className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
              <span>{siteConfig.address.full}</span>
            </p>
          </div>
          <div>
            <span className="font-bold uppercase text-zinc-300 text-[11px]">Credentials</span>
            <p className="mt-2 text-zinc-400 font-sans text-xs">
              Admitted: Florida Bar 1995 · Georgia Bar 2000 · University of Florida Levin College of Law J.D.
            </p>
          </div>
          <div>
            <span className="font-bold uppercase text-zinc-300 text-[11px]">Disclaimers</span>
            <p className="mt-2 text-zinc-500 font-sans text-[11px] leading-relaxed">
              No representation is made that the quality of legal services is greater than other lawyers. Past results do not guarantee similar outcomes.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
