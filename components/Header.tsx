"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig, mainNav } from "@/lib/siteConfig";
import { practiceAreas } from "@/lib/practiceAreas";
import { PhoneIcon, ChevronDown, ArrowRight } from "@/components/Icons";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobilePiOpen, setMobilePiOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      style={{ top: "var(--switcher-height, 0px)" }}
      className="sticky z-50 border-b border-line/70 bg-offwhite/90 backdrop-blur-md"
    >
      {/* Top utility bar */}
      <div className="hidden bg-sapphire text-white md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-1.5 text-xs">
          <span className="text-white/80">
            {siteConfig.serviceAreaShort} ·{" "}
            <span className="text-amber-light">{siteConfig.licensedIn}</span>
          </span>
          <span className="text-white/80">
            {siteConfig.hours} · <span className="text-amber-light">Calls answered 24/7</span>
          </span>
        </div>
      </div>

      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6" aria-label="Primary">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3" aria-label={`${siteConfig.firmName} home`}>
          <Image
            src="/logo-mark.png"
            alt=""
            width={928}
            height={677}
            priority
            className="h-11 w-auto transition-transform group-hover:scale-[1.03]"
          />
          <span className="leading-tight">
            <span className="block font-serif text-base font-semibold text-ink sm:text-lg">
              Kuveikis Law
            </span>
            <span className="block text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted">
              Injury Attorney
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) =>
            item.href === "/personal-injury" ? (
              <li key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href) ? "text-sapphire" : "text-ink hover:text-sapphire"
                  }`}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                </Link>
                {/* Dropdown */}
                <div className="invisible absolute left-1/2 top-full z-50 w-[34rem] -translate-x-1/2 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="grid grid-cols-2 gap-1 rounded-2xl border border-line bg-white p-3 shadow-lift">
                    {practiceAreas.map((pa) => (
                      <Link
                        key={pa.slug}
                        href={`/personal-injury/${pa.slug}`}
                        className="rounded-lg px-3 py-2 text-sm text-ink transition-colors hover:bg-offwhite hover:text-sapphire"
                      >
                        {pa.navLabel}
                      </Link>
                    ))}
                    <Link
                      href="/personal-injury"
                      className="col-span-2 mt-1 flex items-center justify-between rounded-lg bg-offwhite px-3 py-2 text-sm font-semibold text-sapphire hover:bg-cream"
                    >
                      All personal injury cases
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </li>
            ) : (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href) ? "text-sapphire" : "text-ink hover:text-sapphire"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Phone CTA */}
        <div className="flex items-center gap-2">
          <a
            href={siteConfig.phoneHref}
            className="hidden items-center gap-2 rounded-full bg-amber px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-amber-dark sm:inline-flex"
          >
            <PhoneIcon className="h-4 w-4" />
            {siteConfig.phone}
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-ink lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-5 bg-ink transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 bg-ink transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 bg-ink transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div id="mobile-menu" className="border-t border-line bg-white lg:hidden">
          <ul className="mx-auto max-w-6xl space-y-1 px-4 py-4">
            {mainNav.map((item) =>
              item.href === "/personal-injury" ? (
                <li key={item.href}>
                  <button
                    type="button"
                    onClick={() => setMobilePiOpen((v) => !v)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-base font-medium text-ink"
                    aria-expanded={mobilePiOpen}
                  >
                    Personal Injury
                    <ChevronDown className={`h-4 w-4 transition-transform ${mobilePiOpen ? "rotate-180" : ""}`} />
                  </button>
                  {mobilePiOpen && (
                    <div className="ml-3 border-l border-line pl-3">
                      <Link
                        href="/personal-injury"
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-lg px-3 py-2 text-sm font-semibold text-sapphire"
                      >
                        Overview
                      </Link>
                      {practiceAreas.map((pa) => (
                        <Link
                          key={pa.slug}
                          href={`/personal-injury/${pa.slug}`}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-lg px-3 py-2 text-sm text-ink-muted"
                        >
                          {pa.navLabel}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-base font-medium text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
            <li className="pt-2">
              <a
                href={siteConfig.phoneHref}
                className="flex items-center justify-center gap-2 rounded-full bg-amber px-4 py-3 text-base font-semibold text-white"
              >
                <PhoneIcon className="h-4 w-4" /> Call {siteConfig.phone}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
