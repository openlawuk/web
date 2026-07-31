import { EcosystemArchitecture } from "@/features/home/components/ecosystem-architecture";
import { Hero } from "@/features/home/components/hero";
import { StandardsProof } from "@/features/home/components/standards-proof";
import { WhatWeOffer } from "@/features/home/components/what-we-offer";
import { LatestNews } from "@/features/news/components/latest-news";

export function HomePage() {
  return (
    <main className="w-full">
      <Hero />
      <WhatWeOffer />
      <EcosystemArchitecture />
      <StandardsProof />
      <LatestNews />
    </main>
  );
}
