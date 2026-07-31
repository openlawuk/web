import { ArrowButton } from "@/components/ui/arrow-button";

export function ParticipateCta() {
  return (
    <section className="section-full-bleed section-indigo py-module">
      <div className="section-inner flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="max-w-2xl">
          <h2 className="font-heading text-headline-md text-cream">
            Participate in the open marketplace
          </h2>
          <p className="text-body-lg text-cream mt-4">
            Register software, run the conformance suite, and connect against
            the reference TSP. Commercial connectivity is optional — start with
            the open rails.
          </p>
        </div>
        <ArrowButton href="/participate" reverse>
          How to join
        </ArrowButton>
      </div>
    </section>
  );
}
