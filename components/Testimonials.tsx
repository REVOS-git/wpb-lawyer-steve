// NOTE: Client testimonials are awaiting official client letters from Steve.
// Replace with the letters provided by the client before re-enabling on homepage.

const testimonials = [
  {
    quote:
      "Steve answered the phone himself every single time I called. After my accident on I-95 I felt completely lost, and he walked me through every step. I never once felt like just another case number.",
    name: "Maria G.",
    detail: "Car accident client · Jupiter",
  },
  {
    quote:
      "The insurance company was giving me the runaround for months. Within weeks of hiring Steve, everything changed. He knew exactly what to do and got me far more than I expected.",
    name: "David R.",
    detail: "Truck accident client · Palm Beach Gardens",
  },
  {
    quote:
      "After losing my husband, I couldn't imagine dealing with lawyers. Steve was patient, kind, and never pushed. He handled everything so our family could grieve. I'm forever grateful.",
    name: "Linda P.",
    detail: "Wrongful death client · Tequesta",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-amber" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 15l-5.2 2.6 1-5.8L1.5 7.7l5.9-.9z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {testimonials.map((t) => (
        <figure
          key={t.name}
          className="flex flex-col rounded-2xl border border-line bg-white p-7 shadow-card"
        >
          <Stars />
          <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-6 border-t border-line pt-4">
            <span className="block font-serif font-semibold text-ink">{t.name}</span>
            <span className="block text-sm text-ink-muted">{t.detail}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
