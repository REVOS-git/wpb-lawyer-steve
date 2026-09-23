import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/siteConfig";
import RenditionSwitcher from "@/components/RenditionSwitcher";
import SiteLayoutWrapper from "@/components/SiteLayoutWrapper";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `${siteConfig.firmName} | Jupiter Personal Injury Lawyer`,
    template: `%s | ${siteConfig.firmName}`,
  },
  description:
    "Jupiter personal injury attorney Steven Kuveikis handles every case personally — car accidents, truck crashes, slip and fall, wrongful death and more across Palm Beach County. Free consultation. No fee unless you win.",
  keywords: [
    "Jupiter personal injury lawyer",
    "Palm Beach Gardens accident attorney",
    "West Palm Beach car accident lawyer",
    "Florida wrongful death attorney",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.domain,
    siteName: siteConfig.firmName,
    title: `${siteConfig.firmName} | Jupiter Personal Injury Lawyer`,
    description:
      "A solo personal injury practice in Jupiter, FL. Every case handled personally by Steven Kuveikis. Free consultation.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Attorney",
  name: siteConfig.firmName,
  description:
    "Solo personal injury law practice serving Jupiter, Palm Beach Gardens, and South Florida.",
  url: siteConfig.domain,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  priceRange: "Free consultation · Contingency fee",
  areaServed: siteConfig.serviceArea,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.zip,
    addressCountry: "US",
  },
  openingHours: "Mo-Fr 09:00-17:00",
  founder: { "@type": "Person", name: siteConfig.attorney },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col bg-offwhite">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <RenditionSwitcher />
        <a href="#main" className="skip-link">Skip to content</a>
        <SiteLayoutWrapper>{children}</SiteLayoutWrapper>
      </body>
    </html>
  );
}
