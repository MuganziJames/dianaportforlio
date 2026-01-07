"use client";

import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import Watermark from "@/components/ui/Watermark";

interface PageLayoutProps {
  children: React.ReactNode;
  watermarkText?: string;
  footerCtaText?: string;
  footerCtaHref?: string;
  noScroll?: boolean;
}

export default function PageLayout({
  children,
  watermarkText,
  footerCtaText,
  footerCtaHref,
  noScroll = false,
}: PageLayoutProps) {
  return (
    <div className="grid-background h-screen overflow-hidden relative flex flex-col">
      <CustomCursor />
      <Header />

      <main
        className={`relative z-10 flex-1 ${
          noScroll ? "overflow-hidden" : "overflow-y-auto"
        }`}
      >
        {children}
        <Footer ctaText={footerCtaText} ctaHref={footerCtaHref} />
      </main>

      {watermarkText && <Watermark text={watermarkText} />}
    </div>
  );
}
