import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Relentless Advocate | High-Stakes Injury Trial Practice | Steven Kuveikis",
  description:
    "Steven Kuveikis, Esq. — Former insurance defense attorney turning the adjusters' playbook against them. 30+ years Florida Bar experience in Jupiter, FL. Direct 1-on-1 trial counsel.",
  alternates: { canonical: "/rendition-1" },
  openGraph: {
    title: "The Relentless Advocate | Steven Kuveikis, Esq.",
    description:
      "Former insurance defense attorney turning the adjusters' playbook against them. High-stakes injury trial practice in Jupiter, FL.",
    url: "https://www.wpblawyer.com/rendition-1",
  },
};

export default function RenditionOneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
