import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/Button";
import { PhoneIcon, PinIcon, CheckIcon } from "@/components/Icons";

const trustPoints = [
  "Every case handled by Steve — never handed off",
  "No fee unless you win",
  "Free consultation, calls answered 24/7",
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background: Jupiter Inlet Lighthouse at sunset */}
      <Image
        src="/jupiter-lighthouse.jpg"
        alt="The Jupiter Inlet Lighthouse at sunset over Palm Beach County"
        fill
        priority
        quality={95}
        sizes="100vw"
        className="-z-10 object-cover object-center"
      />
      {/* Legibility overlays: darker sapphire on the left where the text sits */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-sapphire-dark/95 via-sapphire-dark/80 to-sapphire-dark/35"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-sapphire-dark/85 via-transparent to-sapphire-dark/30"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
        {/* Left: message */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-light/40 bg-white/10 px-4 py-1.5 text-sm font-semibold text-amber-light backdrop-blur-sm">
            <PinIcon className="h-4 w-4" />
            Raised in Palm Beach County · Lifelong Resident
          </span>

          <h1 className="mt-6 text-balance font-serif text-4xl font-semibold leading-[1.08] text-white drop-shadow-sm sm:text-5xl lg:text-6xl">
            Your hometown injury lawyer{" "}
            <span className="text-amber-light">&mdash; And yes, I answer my own phone.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            After an accident in Jupiter or anywhere in Palm Beach County, you shouldn&rsquo;t have to fight the
            insurance company alone. I&rsquo;m Steven Kuveikis — a solo attorney who takes on your case personally,
            start to finish.
          </p>

          <ul className="mt-8 space-y-3">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-[15px] font-medium text-white">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber text-white">
                  <CheckIcon className="h-4 w-4" />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" variant="amber" size="lg">
              Free consultation
            </Button>
            <Button
              href={siteConfig.phoneHref}
              variant="outline"
              size="lg"
              className="border-white/50 text-white hover:bg-white hover:text-sapphire"
            >
              <PhoneIcon className="h-5 w-5" />
              {siteConfig.phone}
            </Button>
          </div>
        </div>

        {/* Right: Attorney profile & local office card */}
        <div className="animate-fade-up [animation-delay:120ms] lg:justify-self-end">
          <div className="w-full max-w-sm rounded-3xl border border-white/25 bg-white/10 p-6 shadow-lift backdrop-blur-md">
            {/* Attorney Photo */}
            <div className="group relative aspect-[4/4] sm:aspect-[4/4.2] w-full overflow-hidden rounded-2xl border-2 border-white/25 bg-sapphire-dark/60 shadow-lift">
              <Image
                src="/images/steve-headshot-suit.png"
                alt="Steven Kuveikis, Esq. - Personal Injury Attorney"
                fill
                priority
                quality={95}
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sapphire-dark/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4">
                <p className="font-serif text-lg font-semibold text-white drop-shadow-sm">
                  Steven Kuveikis, Esq.
                </p>
                <p className="text-xs font-medium text-amber-light">
                  Direct Attorney Representation
                </p>
              </div>
            </div>

            {/* Direct Contact & Office Details */}
            <div className="mt-5 space-y-3">
              <div className="flex items-center justify-between gap-2 border-b border-white/15 pb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-light">
                  Solo Practice
                </span>
                <span className="rounded-full bg-amber/20 px-2.5 py-0.5 text-[11px] font-semibold text-amber-light">
                  Calls Answered 24/7
                </span>
              </div>

              <div>
                <p className="text-xs text-white/60">Office Location</p>
                <p className="font-medium text-white text-sm">
                  {siteConfig.address.full}
                </p>
              </div>

              <div className="pt-1">
                <a
                  href={siteConfig.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-white hover:text-sapphire"
                >
                  <PinIcon className="h-3.5 w-3.5 text-amber-light" /> Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust band — "Serving Palm Beach County & South Florida" */}
      <div className="relative border-t border-white/10 bg-sapphire-dark/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-6 py-4 text-center text-sm font-medium text-white/85">
          <span className="font-semibold text-amber-light">{siteConfig.serviceAreaShort}</span>
          <span className="hidden h-4 w-px bg-white/20 sm:inline-block" />
          <span>Jupiter</span>
          <span>Palm Beach Gardens</span>
          <span>Tequesta</span>
          <span>Juno Beach</span>
          <span>West Palm Beach</span>
          <span className="hidden h-4 w-px bg-white/20 sm:inline-block" />
          <span className="font-semibold text-amber-light">{siteConfig.licensedIn}</span>
        </div>
      </div>
    </section>
  );
}
