// Single source of truth for firm/contact details.
// ⚠️ Values marked PLACEHOLDER in REVIEW.md must be confirmed before launch.

export const siteConfig = {
  firmName: "Kuveikis Injury Attorney",
  attorney: "Steven Kuveikis",
  attorneyTitle: "Personal Injury Attorney",
  tagline: "Accidents Happen. I Can Help.",
  shortName: "Kuveikis Law",
  domain: "https://www.wpblawyer.com",

  phone: "(561) 354-6969",
  phoneHref: "tel:+15613546969",
  email: "steve@wpblawyer.com",
  emailHref: "mailto:steve@wpblawyer.com",

  address: {
    street: "601 Heritage Drive, Suite 136",
    city: "Jupiter",
    state: "FL",
    zip: "33458",
    full: "601 Heritage Drive, Suite 136, Jupiter, FL 33458",
  },

  hours: "Monday–Friday, 9:00 AM – 5:00 PM",
  hoursNote: "Calls answered 24/7 · Weekend & hospital visits available",

  serviceArea:
    "Jupiter, Palm Beach Gardens, Tequesta, Juno Beach, West Palm Beach & all of South Florida",
  serviceAreaShort: "Serving Palm Beach County & South Florida",
  licensedStates: "Florida & Georgia",
  licensedIn: "Licensed in Florida & Georgia",

  // Google Maps embed for the Jupiter office (query-based, no API key required)
  mapEmbedSrc:
    "https://www.google.com/maps?q=601+Heritage+Drive+Suite+136+Jupiter+FL+33458&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=601+Heritage+Drive+Suite+136+Jupiter+FL+33458",
} as const;

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Personal Injury", href: "/personal-injury" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;
