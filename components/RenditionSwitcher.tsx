"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const renditions = [
  {
    id: "original",
    path: "/",
    label: "Original",
    tagline: "Coastal Heritage",
    badge: "Warm Classic",
    color: "bg-amber text-ink",
    summary:
      "Traditional Jupiter maritime aesthetic with Fraunces serif typography, cream tones, and personal boutique warmth.",
    highlights: [
      "Jupiter Lighthouse sunset hero",
      "Serif elegance & warm off-white tones",
      "Contingency trust points & 3-step process",
    ],
  },
  {
    id: "rendition-1",
    path: "/rendition-1",
    label: "Rendition 1",
    tagline: "The Relentless Advocate",
    badge: "Prestige Dark",
    color: "bg-amber-400 text-slate-950 font-bold",
    summary:
      "High-stakes litigation boutique feel. Obsidian dark mode with metallic champagne gold. Emphasizes Steven Kuveikis as an ex-insurance defense insider who knows their playbook.",
    highlights: [
      "Former Insurance Defense Insider angle",
      "The 'Insider Advantage' comparison matrix (Mega-Firms vs Insurers vs Steve)",
      "Interactive Case Evaluation Qualifier widget",
      "Dark obsidian glass cards with gold border glow",
    ],
  },
  {
    id: "rendition-2",
    path: "/rendition-2",
    label: "Rendition 2",
    tagline: "Compassionate Guardian",
    badge: "Warm Coastal Slate",
    color: "bg-emerald-500 text-white font-bold",
    summary:
      "Empathy-first, human-centric design. Calming ocean slate and seafoam accents designed to relieve anxiety for stressed, injured victims and families.",
    highlights: [
      "'Take a deep breath' calming reassurance",
      "Interactive 5-step 'Road to Recovery' visual timeline",
      "Direct 'Text Steve Directly' hotline with live availability badge",
      "Palm Beach County hometown landmarks & personal story",
    ],
  },
  {
    id: "rendition-3",
    path: "/rendition-3",
    label: "Rendition 3",
    tagline: "Direct Action Matrix",
    badge: "Swiss Modern",
    color: "bg-blue-600 text-white font-bold",
    summary:
      "Ultra-clean Swiss editorial precision with zero friction. Split-screen hero with embedded 60-second qualification form and Florida tort deadline trackers.",
    highlights: [
      "Split-screen hero with live instant Case Intake Form",
      "Florida 2-Year Tort Reform statute clock & 14-day PIP alert",
      "Interactive Practice Area Filter Matrix with evidence checklists",
      "Sticky mobile/desktop bottom action dock",
    ],
  },
];

export default function RenditionSwitcher() {
  const pathname = usePathname();
  const [minimized, setMinimized] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const switcherRef = useRef<HTMLDivElement>(null);

  const activeRendition =
    renditions.find((r) => r.path === pathname) || renditions[0];

  useEffect(() => {
    const el = switcherRef.current;
    if (!el) return;

    const updateHeight = () => {
      const h = el.offsetHeight;
      document.documentElement.style.setProperty("--switcher-height", `${h}px`);
    };

    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(el);

    return () => {
      observer.disconnect();
      document.documentElement.style.removeProperty("--switcher-height");
    };
  }, [minimized, showNotes]);

  return (
    <div
      ref={switcherRef}
      className="sticky top-0 z-[100] border-b border-amber/30 bg-slate-950/95 text-white backdrop-blur-md shadow-2xl transition-all"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-2 text-xs">
        {/* Left: Branding & Quick Toggle */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 font-semibold text-amber-300">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="uppercase tracking-wider text-[11px]">Rendition Studio:</span>
          </div>

          {minimized ? (
            <span className="text-slate-300 font-medium">
              Current: <span className="text-amber-300 font-semibold">{activeRendition.label} ({activeRendition.tagline})</span>
            </span>
          ) : (
            <div className="flex flex-wrap items-center gap-1">
              {renditions.map((r) => {
                const isActive = pathname === r.path;
                return (
                  <Link
                    key={r.id}
                    href={r.path}
                    className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 font-medium transition-all ${
                      isActive
                        ? "bg-amber-400 text-slate-950 shadow-sm ring-2 ring-amber-300/50 font-semibold"
                        : "bg-slate-800/80 text-slate-200 hover:bg-slate-700 hover:text-white"
                    }`}
                  >
                    <span>{r.label}:</span>
                    <span className="opacity-90">{r.tagline}</span>
                    {isActive && (
                      <span className="ml-0.5 rounded bg-slate-950/20 px-1 py-0.2 text-[10px] font-bold uppercase">
                        Active
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/* Right: Strategy Notes & Minimize controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowNotes(!showNotes)}
            className={`rounded px-2.5 py-1 text-[11px] font-medium transition-colors ${
              showNotes
                ? "bg-amber-400 text-slate-950 font-semibold"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
            }`}
          >
            {showNotes ? "Hide Strategy ✕" : "Strategy Rationale"}
          </button>

          <button
            type="button"
            onClick={() => setMinimized(!minimized)}
            className="rounded bg-slate-800 px-2 py-1 text-[11px] text-slate-400 hover:bg-slate-700 hover:text-white"
            title={minimized ? "Expand switcher" : "Minimize switcher"}
          >
            {minimized ? "Expand ▾" : "Collapse ▴"}
          </button>
        </div>
      </div>

      {/* Expanded Strategy Notes Drawer */}
      {showNotes && (
        <div className="border-t border-slate-800 bg-slate-900/98 px-4 py-4 text-slate-200 animate-fade-up max-h-[75vh] overflow-y-auto">
          <div className="mx-auto max-w-7xl flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs">
            <span className="font-semibold text-amber-300 uppercase tracking-wider">
              Strategic Design Comparison Matrix
            </span>
            <button
              type="button"
              onClick={() => setShowNotes(false)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              ✕ Close Drawer
            </button>
          </div>
          <div className="mx-auto max-w-7xl grid gap-4 md:grid-cols-4">
            {renditions.map((r) => {
              const isCurrent = pathname === r.path;
              return (
                <div
                  key={r.id}
                  className={`rounded-xl border p-3.5 transition-all ${
                    isCurrent
                      ? "border-amber-400/80 bg-slate-800/90 shadow-md ring-1 ring-amber-400/50"
                      : "border-slate-800 bg-slate-950/60 opacity-80 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between gap-1">
                    <span className="font-semibold text-white text-sm">{r.label}</span>
                    <span className="rounded bg-slate-800 px-1.5 py-0.5 text-[10px] text-amber-300">
                      {r.badge}
                    </span>
                  </div>
                  <p className="mt-1 text-xs font-medium text-amber-200/90">{r.tagline}</p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">{r.summary}</p>

                  <ul className="mt-2.5 space-y-1 border-t border-slate-700/60 pt-2 text-[11px] text-slate-400">
                    {r.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-amber-400 font-bold">✓</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {!isCurrent && (
                    <Link
                      href={r.path}
                      className="mt-3 block text-center rounded bg-slate-800 py-1 text-xs font-semibold text-amber-300 hover:bg-slate-700"
                    >
                      View This Rendition →
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
