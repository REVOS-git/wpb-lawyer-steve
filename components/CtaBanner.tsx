import { siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/Button";
import { PhoneIcon } from "@/components/Icons";

export default function CtaBanner({
  heading = "Talk to Steve directly — free, no obligation",
  sub = "Every call comes straight to me, not a screening service. I'll listen to what happened, tell you honestly whether you have a case, and explain your options. There's no fee unless I win.",
}: {
  heading?: string;
  sub?: string;
}) {
  return (
    <section className="bg-sapphire">
      <div className="mx-auto max-w-5xl px-6 py-16 text-center sm:py-20">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-amber-light">
          {siteConfig.tagline}
        </p>
        <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold text-white sm:text-4xl">
          {heading}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80">
          {sub}
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={siteConfig.phoneHref} variant="amber" size="lg">
            <PhoneIcon className="h-5 w-5" />
            Call {siteConfig.phone}
          </Button>
          <Button
            href="/contact"
            variant="outline"
            size="lg"
            className="border-white/40 text-white hover:bg-white hover:text-sapphire"
          >
            Request a free consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
