import { EcosystemArchitecture } from "@/features/home/components/ecosystem-architecture";
import { EcosystemParticipants } from "@/features/home/components/ecosystem-participants";
import { Hero } from "@/features/home/components/hero";
import { StandardsProof } from "@/features/home/components/standards-proof";
import { LatestNews } from "@/features/news/components/latest-news";

export function HomePage() {
  return (
    <main className="w-full">
      <Hero />
      <EcosystemParticipants />
      <EcosystemArchitecture />
      <StandardsProof />
      <LatestNews />
    </main>
  );
}
