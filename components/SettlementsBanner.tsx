"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";

export type Settlement = {
  amount: string;
  type: string;
  category: string;
  location: string;
  summary: string;
};

const settlements: Settlement[] = [
  {
    amount: "$1,450,000",
    type: "Settlement",
    category: "Commercial Truck Collision",
    location: "I-95 & PGA Blvd · Palm Beach County",
    summary:
      "Severe spinal and orthopedic injuries following collision with a commercial freight carrier. Multi-carrier policy limits secured.",
  },
  {
    amount: "$950,000",
    type: "Settlement",
    category: "Highway Car Accident",
    location: "Florida's Turnpike · Palm Beach Gardens",
    summary:
      "High-speed rear-end impact causing cervical disc herniations requiring surgical intervention. Policy limits obtained from at-fault carrier.",
  },
  {
    amount: "$750,000",
    type: "Settlement",
    category: "Motorcycle Crash",
    location: "Indiantown Road · Jupiter",
    summary:
      "Motorcyclist struck by left-turning vehicle. Successfully defeated insurer's comparative fault arguments to maximize recovery.",
  },
  {
    amount: "$620,000",
    type: "Settlement",
    category: "Premises Liability / Fall Injury",
    location: "Commercial Property · Jupiter",
    summary:
      "Severe shoulder and knee trauma caused by unaddressed water intrusion. Critical surveillance footage preserved within 48 hours.",
  },
  {
    amount: "$500,000",
    type: "Settlement",
    category: "Rideshare Passenger Injury",
    location: "Military Trail · West Palm Beach",
    summary:
      "Injured passenger in an active rideshare vehicle. Triggered tier-three commercial corporate coverage after primary insurer denied claim.",
  },
  {
    amount: "$385,000",
    type: "Settlement",
    category: "Intersection T-Bone Collision",
    location: "US-1 & Donald Ross Rd · Juno Beach",
    summary:
      "Red-light runner caused side impact resulting in concussion and cervical fusion. Handled directly with insurance litigation counsel.",
  },
  {
    amount: "$275,000",
    type: "Settlement",
    category: "Bicycle / Vehicle Accident",
    location: "Ocean Way · Jupiter",
    summary:
      "Distracted driver collided with cyclist in designated lane. Recovered combined at-fault liability and uninsured motorist benefits.",
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
                  <span className="inline-flex items-center rounded-full bg-sapphire/10 px-2.5 py-0.5 text-xs font-semibold text-sapphire">
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
