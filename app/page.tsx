import { Hero } from "@/components/landing/hero";
import { EcosystemArchitecture } from "@/components/landing/ecosystem-architecture";
import { TspGrid } from "@/components/landing/tsp-grid";
import { SectionConnector } from "@/components/landing/section-connector";
import { WhatWeOffer } from "@/components/landing/what-we-offer";
import { DirectoryIntro } from "@/components/landing/directory-intro";
import { StandardsProof } from "@/components/landing/standards-proof";
import { ParticipateCta } from "@/components/landing/participate-cta";

export default function HomePage() {
  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin relative w-full">
      <div className="hidden md:block vector-path-v h-16 left-1/2 top-0 -translate-x-1/2" />
      <div className="hidden md:block node-emerald left-1/2 top-16 -translate-x-1/2 -translate-y-1/2" />
      <div className="animate-fade-up">
        <Hero />
      </div>
      <SectionConnector variant="hero-to-ecosystem" />
      <div className="animate-fade-up-delay">
        <WhatWeOffer />
      </div>
      <EcosystemArchitecture />
      <DirectoryIntro />
      <StandardsProof />
      <SectionConnector variant="ecosystem-to-tsp" />
      <TspGrid />
      <ParticipateCta />
    </main>
  );
}
