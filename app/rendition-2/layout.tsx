import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Compassionate Guardian | Calming Jupiter Injury Attorney | Steven Kuveikis",
  description:
    "Take a deep breath. You don't have to carry this alone. Steven Kuveikis provides compassionate, 1-on-1 personal injury representation in Jupiter and Palm Beach County. $0 upfront cost.",
  alternates: { canonical: "/rendition-2" },
  openGraph: {
    title: "The Compassionate Guardian | Steven Kuveikis, Esq.",
    description:
      "Take a deep breath. You don't have to carry this alone. Compassionate personal injury representation in Jupiter, FL.",
    url: "https://www.wpblawyer.com/rendition-2",
  },
};

export default function RenditionTwoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
