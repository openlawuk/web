import { ArrowButton } from "@/components/ui/arrow-button";

export function PromoStrip() {
  return (
    <section className="section-full-bleed section-peach py-12 md:py-16">
      <div className="section-inner flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="max-w-2xl">
          <p className="text-body-lg text-indigo">
            How ready is your organisation for legal data portability?
          </p>
          <p className="text-body-md text-indigo/80 mt-2">
            Explore the conformance suite and participation path in under ten
            minutes.
          </p>
        </div>
        <ArrowButton href="/docs/conformance" slim>
          Evaluate readiness
        </ArrowButton>
      </div>
    </section>
  );
}
