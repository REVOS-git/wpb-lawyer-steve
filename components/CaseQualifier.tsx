"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";
import { PhoneIcon, CheckIcon, ScaleIcon, MailIcon } from "@/components/Icons";

const ACCIDENT_TYPES = [
  { slug: "car-accidents", title: "Automobile Crash (I-95 / Local)", note: "Rear-end, T-bone, intersection" },
  { slug: "truck-accidents", title: "Semi-Truck / Commercial Vehicle", note: "18-wheeler, box truck, delivery" },
  { slug: "motorcycle-accidents", title: "Motorcycle / Scooter Crash", note: "Failure to yield, severe road bias" },
  { slug: "slip-and-fall", title: "Premises Fall / Commercial Defect", note: "Supermarket, resort, mall spill" },
  { slug: "negligent-security", title: "Assault / Negligent Security", note: "Apartment complex, bar, parking lot" },
  { slug: "rideshare-accidents", title: "Uber / Lyft / Gig App Crash", note: "Passenger, driver, or struck vehicle" },
];

const INJURY_SEVERITIES = [
  { id: "surgery-specialist", label: "Hospitalized / Surgery Performed or Recommended", badge: "Highest Priority Tier" },
  { id: "disc-spine", label: "Herniated / Bulging Discs or Concussion", badge: "Significant Policy Impact" },
  { id: "fracture-ortho", label: "Broken Bones / Torn Tendons / Orthopedic", badge: "High Valuation Tier" },
  { id: "soft-tissue", label: "Whiplash / Chronic Pain / Physical Therapy", badge: "PIP + Bodily Injury" },
];

const TIMEFRAMES = [
  { id: "within-14-days", label: "Within the last 14 days", alert: "Critical: Florida 14-Day PIP medical clock active!" },
  { id: "1-6-months", label: "1 to 6 months ago", alert: "Evidence preservation window open" },
  { id: "6-24-months", label: "6 months to 2 years ago", alert: "HB 837 2-year statute deadline approaching" },
  { id: "over-2-years", label: "Over 2 years ago", alert: "Special statutory exception review needed" },
];

const ACCIDENT_LABELS: Record<string, string> = {
  "car-accidents": "Automobile Crash",
  "truck-accidents": "Commercial Trucking Collision",
  "motorcycle-accidents": "Motorcycle / Scooter Incident",
  "slip-and-fall": "Premises Liability / Fall",
  "negligent-security": "Assault / Negligent Security",
  "rideshare-accidents": "Rideshare (Uber / Lyft) Crash",
};

const SEVERITY_LABELS: Record<string, string> = {
  "surgery-specialist": "Hospitalized / Surgery",
  "disc-spine": "Herniated Discs / Head Injury",
  "fracture-ortho": "Broken Bones / Torn Tendons",
  "soft-tissue": "Whiplash / Severe Pain",
};

const TIMEFRAME_LABELS: Record<string, string> = {
  "within-14-days": "Within the last 14 days",
  "1-6-months": "1 to 6 months ago",
  "6-24-months": "6 months to 2 years ago",
  "over-2-years": "Over 2 years ago",
};

export default function CaseQualifier() {
  const [qualifierStep, setQualifierStep] = useState(1);
  const [accidentType, setAccidentType] = useState("car-accidents");
  const [injurySeverity, setInjurySeverity] = useState("disc-spine");
  const [timeframe, setTimeframe] = useState("within-14-days");
  const [formData, setFormData] = useState({ name: "", phone: "", notes: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleQualifierSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const subject = `Priority Case Qualifier: ${formData.name || "New Injury Lead"}`;
    const body = `Name: ${formData.name}\nPhone: ${formData.phone}\nType: ${ACCIDENT_LABELS[accidentType] || accidentType}\nSeverity: ${SEVERITY_LABELS[injurySeverity] || injurySeverity}\nTiming: ${TIMEFRAME_LABELS[timeframe] || timeframe}\nNotes: ${formData.notes || "None provided"}`;
    console.log("Qualifier Submitted:", { subject, body });
  };

  return (
    <section id="case-qualifier" className="scroll-mt-20 border-y border-sapphire-dark/20 bg-sapphire-dark py-20 text-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-light/40 bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-light backdrop-blur-sm">
            <ScaleIcon className="h-3.5 w-3.5" /> Free 60-Second Preliminary Triage
          </span>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-white sm:text-4xl">
            Confidential Case Qualifier
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-base text-white/80">
            Run your accident through Steve&rsquo;s preliminary assessment tool to identify statutory deadlines, medical documentation priorities, and potential recovery paths.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-white/15 bg-white/5 p-6 sm:p-10 shadow-lift backdrop-blur-md">
          {!submitted ? (
            <div>
              {/* Step Indicators */}
              <div className="mb-8 grid grid-cols-2 gap-2 border-b border-white/15 pb-5 text-xs font-semibold sm:grid-cols-4">
                {[
                  { step: 1, label: "Accident Type" },
                  { step: 2, label: "Injury Status" },
                  { step: 3, label: "Statute Clock" },
                  { step: 4, label: "Assessment" },
                ].map((s) => (
                  <button
                    key={s.step}
                    type="button"
                    onClick={() => setQualifierStep(s.step)}
                    className={`flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-left transition-colors ${
                      qualifierStep === s.step
                        ? "bg-amber/20 text-amber-light font-bold"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
                        qualifierStep === s.step
                          ? "bg-amber text-ink"
                          : "bg-white/10 text-white/70"
                      }`}
                    >
                      {s.step}
                    </span>
                    <span className="truncate">{s.label}</span>
                  </button>
                ))}
              </div>

              {/* Step 1: Accident Category */}
              {qualifierStep === 1 && (
                <div className="space-y-5 animate-fade-up">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl font-semibold text-white">What type of incident occurred?</h3>
                    <span className="text-xs text-amber-light">Step 1 of 4</span>
                  </div>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {ACCIDENT_TYPES.map((type) => (
                      <button
                        key={type.slug}
                        type="button"
                        onClick={() => setAccidentType(type.slug)}
                        className={`flex flex-col items-start rounded-2xl border p-4 text-left transition-all ${
                          accidentType === type.slug
                            ? "border-amber bg-amber/15 ring-2 ring-amber/50"
                            : "border-white/15 bg-white/5 hover:border-white/30 hover:bg-white/10"
                        }`}
                      >
                        <span className="font-semibold text-white text-sm">{type.title}</span>
                        <span className="mt-1 text-xs text-white/70">{type.note}</span>
                      </button>
                    ))}
                  </div>
                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setQualifierStep(2)}
                      className="rounded-xl bg-amber px-6 py-3 text-xs font-bold text-ink shadow-md hover:bg-amber-light transition-colors"
                    >
                      Next: Injury Status →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Injury Severity */}
              {qualifierStep === 2 && (
                <div className="space-y-5 animate-fade-up">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl font-semibold text-white">
                      What is the medical status of the injured person?
                    </h3>
                    <span className="text-xs text-amber-light">Step 2 of 4</span>
                  </div>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {INJURY_SEVERITIES.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setInjurySeverity(item.id)}
                        className={`flex flex-col items-start rounded-2xl border p-4 text-left transition-all ${
                          injurySeverity === item.id
                            ? "border-amber bg-amber/15 ring-2 ring-amber/50"
                            : "border-white/15 bg-white/5 hover:border-white/30 hover:bg-white/10"
                        }`}
                      >
                        <span className="font-semibold text-white text-sm">{item.label}</span>
                        <span className="mt-2 inline-block rounded-full bg-amber/20 px-2.5 py-0.5 text-[10px] font-bold text-amber-light">
                          {item.badge}
                        </span>
                      </button>
                    ))}
                  </div>
                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setQualifierStep(1)}
                      className="text-xs font-semibold text-white/70 hover:text-white"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setQualifierStep(3)}
                      className="rounded-xl bg-amber px-6 py-3 text-xs font-bold text-ink shadow-md hover:bg-amber-light transition-colors"
                    >
                      Next: Statutory Timing →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Statutory Timing */}
              {qualifierStep === 3 && (
                <div className="space-y-5 animate-fade-up">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl font-semibold text-white">When did the incident take place?</h3>
                    <span className="text-xs text-amber-light">Step 3 of 4</span>
                  </div>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {TIMEFRAMES.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setTimeframe(item.id)}
                        className={`flex flex-col items-start rounded-2xl border p-4 text-left transition-all ${
                          timeframe === item.id
                            ? "border-amber bg-amber/15 ring-2 ring-amber/50"
                            : "border-white/15 bg-white/5 hover:border-white/30 hover:bg-white/10"
                        }`}
                      >
                        <span className="font-semibold text-white text-sm">{item.label}</span>
                        <span className="mt-1.5 text-xs text-amber-light font-medium">{item.alert}</span>
                      </button>
                    ))}
                  </div>
                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setQualifierStep(2)}
                      className="text-xs font-semibold text-white/70 hover:text-white"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setQualifierStep(4)}
                      className="rounded-xl bg-amber px-6 py-3 text-xs font-bold text-ink shadow-md hover:bg-amber-light transition-colors"
                    >
                      Generate Assessment →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Submission & Assessment */}
              {qualifierStep === 4 && (
                <form onSubmit={handleQualifierSubmit} className="space-y-5 animate-fade-up">
                  <div className="rounded-2xl border border-amber/40 bg-amber/10 p-5">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-light">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Preliminary Assessment: High-Exposure Incident Flagged</span>
                    </div>

                    <div className="mt-3.5 space-y-2.5 text-xs sm:text-sm text-white/90">
                      <div className="flex items-start gap-2">
                        <span className="text-amber-light font-bold shrink-0">▸</span>
                        <span>
                          <strong>Case Profile:</strong> {ACCIDENT_LABELS[accidentType] || accidentType} · {SEVERITY_LABELS[injurySeverity] || injurySeverity}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-amber-light font-bold shrink-0">▸</span>
                        <span>
                          <strong>Statutory Window:</strong> {TIMEFRAME_LABELS[timeframe] || timeframe}
                          {timeframe === "within-14-days" && (
                            <span className="ml-1 text-amber-light font-semibold">
                              (Immediate medical evaluation required under Florida 14-Day PIP rule)
                            </span>
                          )}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-amber-light font-bold shrink-0">▸</span>
                        <span>
                          <strong>Tactical Imperative:</strong> Insurers evaluate claims through claims calculation software (like Colossus). Steve constructs evidentiary demand packages specifically engineered to maximize settlement value before recorded statements are taken.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium text-white/80">Your Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Miller"
                        className="mt-1.5 w-full rounded-xl border border-white/20 bg-white/10 px-3.5 py-2.5 text-sm text-white placeholder-white/40 focus:border-amber focus:outline-none focus:ring-1 focus:ring-amber"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-white/80">Phone Number (Direct)</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(561) 000-0000"
                        className="mt-1.5 w-full rounded-xl border border-white/20 bg-white/10 px-3.5 py-2.5 text-sm text-white placeholder-white/40 focus:border-amber focus:outline-none focus:ring-1 focus:ring-amber"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/80">
                      Brief Note on What Happened (Confidential)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Location, vehicles or property involved, or insurance adjuster communication..."
                      className="mt-1.5 w-full rounded-xl border border-white/20 bg-white/10 px-3.5 py-2.5 text-sm text-white placeholder-white/40 focus:border-amber focus:outline-none focus:ring-1 focus:ring-amber"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setQualifierStep(3)}
                      className="text-xs font-semibold text-white/70 hover:text-white"
                    >
                      ← Adjust Details
                    </button>
                    <button
                      type="submit"
                      className="rounded-xl bg-gradient-to-r from-amber to-amber-light px-7 py-3 text-xs font-bold text-ink shadow-lift hover:brightness-105 transition-all"
                    >
                      Lock In Priority Evaluation →
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            <div className="rounded-2xl border border-emerald-500/40 bg-emerald-950/40 p-8 text-center animate-fade-up">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                <CheckIcon className="h-7 w-7" />
              </div>
              <h3 className="mt-4 font-serif text-2xl font-bold text-white">
                Evaluation Submitted Directly to Steven Kuveikis
              </h3>
              <p className="mt-2.5 text-sm text-white/80 max-w-lg mx-auto">
                Thank you, <span className="text-white font-semibold">{formData.name}</span>. Steve will personally review your accident details and follow up with you directly at <span className="text-white font-semibold">{formData.phone}</span>.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex items-center gap-2 rounded-xl bg-amber px-5 py-2.5 text-xs font-bold text-ink hover:bg-amber-light transition-colors"
                >
                  <PhoneIcon className="h-4 w-4" />
                  <span>Call Steve Now: {siteConfig.phone}</span>
                </a>
                <a
                  href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(
                    `Priority Case Qualifier: ${formData.name}`
                  )}&body=${encodeURIComponent(
                    `Client: ${formData.name}\nPhone: ${formData.phone}\nType: ${ACCIDENT_LABELS[accidentType] || accidentType}\nSeverity: ${SEVERITY_LABELS[injurySeverity] || injurySeverity}\nTiming: ${TIMEFRAME_LABELS[timeframe] || timeframe}\nNotes: ${formData.notes || "None"}`
                  )}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-xs font-semibold text-white hover:bg-white/20 transition-colors"
                >
                  <MailIcon className="h-4 w-4 text-amber-light" />
                  <span>Email Steve Directly</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setQualifierStep(1);
                  }}
                  className="rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-semibold text-white/70 hover:text-white transition-colors"
                >
                  Reset Qualifier
                </button>
              </div>
            </div>
          )}
        </div>

        <p className="mt-6 text-center text-xs text-white/50">
          * Information submitted is confidential and reviewed personally by Steven Kuveikis, Esq. Submission does not constitute an attorney-client relationship.
        </p>
      </div>
    </section>
  );
}
