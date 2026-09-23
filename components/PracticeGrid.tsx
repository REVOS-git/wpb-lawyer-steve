import Link from "next/link";
import { practiceAreas } from "@/lib/practiceAreas";
import { PracticeIcon, ArrowRight } from "@/components/Icons";

export default function PracticeGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {practiceAreas.map((pa) => (
        <Link
          key={pa.slug}
          href={`/personal-injury/${pa.slug}`}
          className="group relative isolate flex flex-col overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-white to-cream/50 p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-sapphire/30 hover:shadow-lift"
        >
          {/* Themed background: large watermark of this practice area's illustration */}
          <PracticeIcon
            name={pa.icon}
            className="pointer-events-none absolute -bottom-7 -right-6 -z-10 h-44 w-44 text-sapphire/[0.06] transition-all duration-300 group-hover:scale-110 group-hover:text-amber/20"
          />
          {/* Soft corner glow for depth */}
          <span
            aria-hidden
            className="pointer-events-none absolute -right-10 -top-10 -z-10 h-28 w-28 rounded-full bg-amber/0 blur-2xl transition-colors duration-300 group-hover:bg-amber/10"
          />

          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sapphire/10 text-sapphire shadow-sm transition-colors group-hover:bg-sapphire group-hover:text-white">
            <PracticeIcon name={pa.icon} className="h-6 w-6" />
          </span>
          <h3 className="mt-5 font-serif text-lg font-semibold text-ink">{pa.shortTitle}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{pa.cardBlurb}</p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sapphire transition-colors group-hover:text-amber-dark">
            Learn more
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      ))}
    </div>
  );
}
