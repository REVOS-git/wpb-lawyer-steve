import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";
import { practiceAreas } from "@/lib/practiceAreas";
import { PhoneIcon, MailIcon, PinIcon, ClockIcon } from "@/components/Icons";

export default function Footer() {
  const year = 2026; // build-time constant; update on rebuild

  return (
    <footer className="bg-ink text-white/75">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand + contact */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <span className="flex h-12 items-center justify-center rounded-lg bg-offwhite px-2 py-1.5">
                <Image src="/logo-mark.png" alt="" width={928} height={677} className="h-full w-auto" />
              </span>
              <span className="leading-tight">
                <span className="block font-serif text-lg font-semibold text-white">Kuveikis Law</span>
                <span className="block text-[11px] font-medium uppercase tracking-[0.14em] text-white/50">
                  Injury Attorney
                </span>
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              {siteConfig.tagline} A solo personal injury practice serving Jupiter, Palm Beach Gardens, and all of South Florida — licensed in {siteConfig.licensedStates}.
            </p>
          </div>

          {/* Practice areas */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Practice Areas</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {practiceAreas.map((pa) => (
                <li key={pa.slug}>
                  <Link href={`/personal-injury/${pa.slug}`} className="text-white/60 transition-colors hover:text-amber-light">
                    {pa.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Firm links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Firm</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="/about" className="text-white/60 hover:text-amber-light">About Steven Kuveikis</Link></li>
              <li><Link href="/personal-injury" className="text-white/60 hover:text-amber-light">Personal Injury</Link></li>
              <li><Link href="/blog" className="text-white/60 hover:text-amber-light">Legal Resources & Blog</Link></li>
              <li><Link href="/contact" className="text-white/60 hover:text-amber-light">Contact</Link></li>
              <li><Link href="/privacy-policy" className="text-white/60 hover:text-amber-light">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
            <ul className="mt-4 space-y-3.5 text-sm">
              <li>
                <a href={siteConfig.phoneHref} className="flex items-start gap-3 text-white/60 hover:text-amber-light">
                  <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-amber-light" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={siteConfig.emailHref} className="flex items-start gap-3 break-all text-white/60 hover:text-amber-light">
                  <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-amber-light" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={siteConfig.mapLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-white/60 hover:text-amber-light">
                  <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-amber-light" />
                  {siteConfig.address.full}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-amber-light" />
                {siteConfig.hours}
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-14 border-t border-white/10 pt-8 text-xs leading-relaxed text-white/45">
          <p>
            <strong className="text-white/60">Disclaimer:</strong> The information on this website is for general
            informational purposes only and is not legal advice. Viewing this site or contacting the firm does not create
            an attorney-client relationship. Past results do not guarantee a similar outcome. Every case is different and
            must be evaluated on its own facts. Steven Kuveikis is licensed to practice law in Florida and Georgia.
          </p>
          <p className="mt-4">
            © {year} {siteConfig.firmName}. All rights reserved. · Serving Palm Beach County & South Florida · {siteConfig.licensedIn}.
          </p>
        </div>
      </div>
    </footer>
  );
}
