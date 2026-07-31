import { Hero } from "@/components/landing/hero";
import { EcosystemArchitecture } from "@/components/landing/ecosystem-architecture";
import { TspGrid } from "@/components/landing/tsp-grid";
import { WhatWeOffer } from "@/components/landing/what-we-offer";
import { StandardsProof } from "@/components/landing/standards-proof";

export default function HomePage() {
  return (
    <main className="w-full">
      <Hero />
      <WhatWeOffer />
      <EcosystemArchitecture />
      <StandardsProof />
      <TspGrid />
    </main>
  );
}
