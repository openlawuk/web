import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import "./globals.css";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

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
    <html lang="en" className={`${hanken.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-on-background font-sans bg-blueprint relative overflow-x-hidden">
        <div className="fixed inset-0 z-[-2] bg-gradient-to-br from-surface-container-low via-white/80 to-secondary-fixed/30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary-fixed/50 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-[40%] left-[-10%] w-[500px] h-[500px] bg-tertiary-fixed/60 blur-[120px] rounded-full pointer-events-none -z-10" />
        <Header />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
