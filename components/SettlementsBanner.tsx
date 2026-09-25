"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";

export type Settlement = {
  amount: string;
  type: "Jury Verdict" | "Settlement";
  category: string;
  location: string;
  summary: string;
};

const settlements: Settlement[] = [
  {
    amount: "$11,000,000",
    type: "Jury Verdict",
    category: "Bicycle Accident · Paralysis",
    location: "Military Trail · Palm Beach County",
    summary:
      "Cyclist struck by a van while riding on Military Trail, resulting in catastrophic paralysis injuries. Substantial trial verdict secured.",
  },
  {
    amount: "$6,350,000",
    type: "Settlement",
    category: "Trucking Collision · Wrongful Death",
    location: "Palm Beach County",
    summary:
      "Intoxicated commercial truck driver driving on the wrong side of the road struck and killed the driver of a pickup truck.",
  },
  {
    amount: "$4,000,000",
    type: "Settlement",
    category: "Commercial Truck · Wrongful Death",
    location: "South Florida",
    summary:
      "Commercial truck driver lost control of his vehicle, striking and killing a 63-year-old mother. Multi-million recovery for grieving family.",
  },
  {
    amount: "$2,500,000",
    type: "Settlement",
    category: "Premises Liability · Foot & Ankle Trauma",
    location: "Florida",
    summary:
      "Woman sustained severe, debilitating foot injuries after falling from an elevated commercial platform constructed without required handrails.",
  },
  {
    amount: "$1,200,000",
    type: "Settlement",
    category: "Car Accident · Traumatic Brain Injury",
    location: "Palm Beach County",
    summary:
      "Woman sustained mild traumatic brain injury (TBI) when a passing vehicle struck her driver's door as she was exiting her vehicle.",
  },
  {
    amount: "$950,000",
    type: "Settlement",
    category: "Work Accident · Head & Neck Injury",
    location: "South Florida",
    summary:
      "Employee suffered serious neck and head trauma when an employer dropped a heavy tree root from the bucket of a modified tractor backhoe.",
  },
  {
    amount: "$850,000",
    type: "Settlement",
    category: "Equipment Accident · Pelvic Fracture",
    location: "Florida",
    summary:
      "Employer held liable for employee who ran over a co-worker while operating a Kubota tractor, resulting in a fractured pelvis.",
  },
  {
    amount: "$850,000",
    type: "Settlement",
    category: "Car Accident · Cervical Spine Surgery",
    location: "Palm Beach County",
    summary:
      "Woman struck by a delivery truck, causing severe cervical spine injuries that required neurosurgical intervention.",
  },
  {
    amount: "$500,000",
    type: "Settlement",
    category: "Car Accident · Neck Surgery",
    location: "Palm Beach County",
    summary:
      "Woman required neck surgery after an impactful intersection collision caused by a negligent motorist.",
  },
  {
    amount: "$400,000",
    type: "Settlement",
    category: "Parking Lot Crash · Back Surgery",
    location: "South Florida",
    summary:
      "Driver severely injured when her car was struck while carefully pulling out of a parking space, necessitating lumbar back surgery.",
  },
  {
    amount: "$345,000",
    type: "Jury Verdict",
    category: "Car Accident · Neck & Back Trauma",
    location: "Palm Beach County",
    summary:
      "Favorable trial verdict obtained for a motorist who suffered cervical and lumbar injuries when struck by an emergency vehicle.",
  },
  {
    amount: "$325,000",
    type: "Settlement",
    category: "Red-Light Collision · Spinal Injury",
    location: "Palm Beach County",
    summary:
      "Man sustained painful spinal and back injuries when an inattentive motorist ran a red light directly into his vehicle.",
  },
];

export default function SettlementsBanner() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 340;
    const offset = direction === "left" ? -cardWidth * 1.5 : cardWidth * 1.5;
    el.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden border-b border-line bg-cream/35 py-16 sm:py-20">
      {/* Decorative subtle background accents */}
      <div
        className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-amber/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-sapphire/10 blur-3xl"
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header row with arrows */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-dark">
              Demonstrated Results
            </span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Past Verdicts &amp; Settlements
            </h2>
            <p className="mt-3 text-base text-ink-muted">
              Every injury case is unique, but our relentless pursuit of maximum compensation never wavers.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll results left"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink shadow-sm transition-all hover:border-amber hover:bg-cream/40 hover:text-amber-dark disabled:cursor-not-allowed disabled:opacity-35"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll results right"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink shadow-sm transition-all hover:border-amber hover:bg-cream/40 hover:text-amber-dark disabled:cursor-not-allowed disabled:opacity-35"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrolling Track */}
        <div
          ref={scrollRef}
          className="mt-8 flex gap-5 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {settlements.map((item, index) => (
            <article
              key={index}
              className="group relative flex w-[300px] shrink-0 flex-col justify-between rounded-2xl border border-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-amber/60 hover:shadow-lift sm:w-[340px] snap-start"
            >
              <div>
                {/* Top Badge: Type & Location */}
                <div className="flex items-center justify-between gap-2 border-b border-line/70 pb-3">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      item.type === "Jury Verdict"
                        ? "border border-amber/35 bg-amber/15 text-amber-dark"
                        : "border border-sapphire/20 bg-sapphire/10 text-sapphire"
                    }`}
                  >
                    {item.type}
                  </span>
                  <span className="text-[11px] font-medium text-ink-muted">
                    {item.location.split("·")[0].trim()}
                  </span>
                </div>

                {/* Big Bold Amount */}
                <div className="mt-4">
                  <span className="block font-serif text-3xl font-bold tracking-tight text-ink group-hover:text-amber-dark sm:text-4xl">
                    {item.amount}
                  </span>
                  <span className="mt-1 block text-sm font-semibold text-sapphire">
                    {item.category}
                  </span>
                </div>

                {/* Summary */}
                <p className="mt-3 text-xs leading-relaxed text-ink-muted line-clamp-3">
                  {item.summary}
                </p>
              </div>

              {/* Bottom footer link/badge */}
              <div className="mt-6 border-t border-line/70 pt-3 flex items-center justify-between text-[11px] text-ink-muted">
                <span>Direct Representation</span>
                <span className="font-semibold text-amber-dark group-hover:underline">
                  Case Details &rarr;
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Florida Bar Legal Disclaimer */}
        <p className="mt-4 text-center text-[11px] leading-relaxed text-ink-muted/80">
          <strong>Florida Bar Disclaimer:</strong> Prospective clients may not obtain the same or similar results.
          Past results do not guarantee future outcomes. Each case is different and must be evaluated on its own merits.
        </p>
      </div>
    </section>
  );
}
