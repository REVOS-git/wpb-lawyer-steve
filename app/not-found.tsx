import Link from "next/link";
import { Button } from "@/components/Button";
import { practiceAreas } from "@/lib/practiceAreas";
import { siteConfig } from "@/lib/siteConfig";
import { PhoneIcon } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <p className="font-serif text-6xl font-semibold text-sapphire/20">404</p>
      <h1 className="mt-4 font-serif text-3xl font-semibold text-ink sm:text-4xl">
        We couldn&rsquo;t find that page
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-ink-muted">
        The page may have moved. Here are some places that might help — or just call and I&rsquo;ll point you the right way.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/" variant="sapphire" size="lg">Back to home</Button>
        <Button href={siteConfig.phoneHref} variant="outline" size="lg">
          <PhoneIcon className="h-5 w-5" /> {siteConfig.phone}
        </Button>
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {practiceAreas.slice(0, 4).map((pa) => (
          <Link
            key={pa.slug}
            href={`/personal-injury/${pa.slug}`}
            className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-sapphire transition-colors hover:border-sapphire/30"
          >
            {pa.shortTitle}
          </Link>
        ))}
      </div>
    </section>
  );
}
