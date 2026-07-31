import type { Metadata } from "next";
import { CookieBanner } from "@/components/site/cookie-banner";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { SiteCta } from "@/components/site/site-cta";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.openlaw.org.uk"),
  title: {
    default: "Open Law — The Global Standard for Legal Transparency",
    template: "%s · Open Law",
  },
  description:
    "Open Law establishes the foundational trust anchor for secure discovery, verification, and portability of legal data.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Open Law",
    title: "Open Law — The Global Standard for Legal Transparency",
    description:
      "The public standards, directory, and trust framework for legal practice data portability.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Open Law",
    description:
      "The framework and directory layer for legal data portability.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-on-background font-sans relative overflow-x-hidden">
        <Header />
        <div className="flex-1 flex flex-col">{children}</div>
        <div className="mt-auto">
          <SiteCta />
          <Footer />
        </div>
        <CookieBanner />
      </body>
    </html>
  );
}
