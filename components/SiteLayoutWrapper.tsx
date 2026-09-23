"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SiteLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isRendition = pathname.startsWith("/rendition-");

  useEffect(() => {
    if (pathname === "/rendition-1") {
      document.body.style.backgroundColor = "#0B0F17";
      document.documentElement.style.backgroundColor = "#0B0F17";
    } else if (pathname === "/rendition-2") {
      document.body.style.backgroundColor = "#FDFBF7";
      document.documentElement.style.backgroundColor = "#FDFBF7";
    } else if (pathname === "/rendition-3") {
      document.body.style.backgroundColor = "#ffffff";
      document.documentElement.style.backgroundColor = "#ffffff";
    } else {
      document.body.style.backgroundColor = "#fbf8f2";
      document.documentElement.style.backgroundColor = "#fbf8f2";
    }
  }, [pathname]);

  if (isRendition) {
    return <main id="main" className="flex-1 w-full">{children}</main>;
  }

  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
