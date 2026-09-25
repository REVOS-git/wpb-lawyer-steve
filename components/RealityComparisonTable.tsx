import React from "react";
import { CheckIcon, ScaleIcon } from "@/components/Icons";

const COMPARISON_ROWS = [
  {
    dimension: "Who actually handles your file?",
    megaFirms: "Junior paralegals handling 200–300 files simultaneously. You rarely speak to a licensed lawyer.",
    insurers: "Trained claims handlers who exploit disorganization and unreturned client calls.",
    kuveikisHighlight: "100% Steven Kuveikis.",
    kuveikisText: " Every motion, negotiation, deposition, and strategy call is run by Steve directly.",
  },
  {
    dimension: "Settlement Strategy",
    megaFirms: 'High-turnover "settlement mills" accept 40%–50% discounted offers quickly to pay overhead and ad spend.',
    insurers: "Feed data into Colossus software that discounts soft tissue and disc injuries unless pushed to trial.",
    kuveikisHighlight: "Ex-Defense Auditing:",
    kuveikisText: " Steve builds trial-ready binders that prove exposure, forcing carriers to tender full policy limits.",
  },
  {
    dimension: "Early Adjuster Contact",
    megaFirms: "Slow intake allows adjusters to contact traumatized victims for recorded statements before representation starts.",
    insurers: "Rushes to record leading statements designed to trick you into admitting partial fault under FL 51% rule.",
    kuveikisHighlight: "Immediate Harassment Shield:",
    kuveikisText: " Steve sends immediate formal representation notices silencing all adjuster calls instantly.",
  },
  {
    dimension: "Trial Readiness",
    megaFirms: "Many billboard firms never step into a courtroom; insurance adjusters know who will fold and who will litigate.",
    insurers: "Tracks trial records of opposing counsel; pays less to lawyers known to be settlement-only.",
    kuveikisHighlight: "30+ Years Florida Bar Trial Veteran:",
    kuveikisText: " Insurers know Steve will file suit and take depositions without hesitation.",
  },
  {
    dimension: "Attorney Access",
    megaFirms: "Routed through 1-800 call center operators, long holds, and rotating caseworkers.",
    insurers: "Hopes client confusion causes missed medical appointments and gaps in treatment.",
    kuveikisHighlight: "Direct Cellular Access:",
    kuveikisText: " Clients receive Steve's direct phone number with real-time case updates.",
  },
];

export default function RealityComparisonTable() {
  return (
    <section id="reality-of-injury-law" className="scroll-mt-20 border-b border-line bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber/30 bg-amber/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-dark">
            <ScaleIcon className="h-3.5 w-3.5" /> The Reality of Injury Law
          </span>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-ink sm:text-4xl">
            Why 90% of Claimants Get Shortchanged
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            Personal injury is an adversarial game. See how billboard mega-firms and insurance adjusters operate — versus the tactical precision of an ex-defense insider.
          </p>
        </div>

        {/* Comparison Matrix Table Card */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-line bg-white shadow-card">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-line bg-slate-50/80 text-xs uppercase tracking-wider">
                  <th className="py-4 px-5 font-semibold text-ink w-1/4">Tactical Dimension</th>
                  <th className="py-4 px-5 font-semibold text-red-700 w-1/4 bg-red-50/60 border-l border-line/60">
                    Billboard Mega-Firms
                  </th>
                  <th className="py-4 px-5 font-semibold text-slate-700 w-1/4 bg-slate-100/60 border-l border-line/60">
                    Insurance Company Playbook
                  </th>
                  <th className="py-4 px-5 font-bold text-sapphire w-1/4 bg-amber-50/80 border-l-2 border-amber/50">
                    <span className="flex items-center gap-1.5 text-amber-dark">
                      <CheckIcon className="h-4 w-4" /> The Kuveikis Law Advantage
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition-colors">
                    {/* Dimension */}
                    <td className="py-5 px-5 font-serif font-semibold text-ink">
                      {row.dimension}
                    </td>

                    {/* Billboard Mega-Firms */}
                    <td className="py-5 px-5 text-xs leading-relaxed text-slate-600 bg-red-50/20 border-l border-line/60">
                      {row.megaFirms}
                    </td>

                    {/* Insurance Company Playbook */}
                    <td className="py-5 px-5 text-xs leading-relaxed text-slate-600 bg-slate-50/40 border-l border-line/60">
                      {row.insurers}
                    </td>

                    {/* The Kuveikis Law Advantage */}
                    <td className="py-5 px-5 text-xs leading-relaxed text-ink bg-amber-50/30 border-l-2 border-amber/50 font-medium">
                      <span className="font-semibold text-amber-dark">{row.kuveikisHighlight}</span>
                      {row.kuveikisText}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer note */}
          <div className="border-t border-line bg-slate-50/60 px-5 py-3 text-center text-xs text-ink-muted">
            * Comparative analysis based on standard high-volume settlement factory operations versus direct solo attorney litigation.
          </div>
        </div>
      </div>
    </section>
  );
}
