import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Direct Action Matrix | Rapid Case Triage & Florida Tort Reform Clock | Kuveikis Law",
  description:
    "Florida tort reform cut your accident filing deadline from 4 years to 2 years. Use our 60-second rapid intake triage, 14-day PIP calculator, and contingency fee recovery simulator.",
  alternates: { canonical: "/rendition-3" },
  openGraph: {
    title: "The Direct Action Matrix | Kuveikis Law",
    description:
      "Precision personal injury triage. Florida HB 837 2-year statute clock, 14-day PIP tracker, and 60-second intake in Jupiter, FL.",
    url: "https://www.wpblawyer.com/rendition-3",
  },
};

export default function RenditionThreeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
