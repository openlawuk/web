import { ParticipantRoles } from "@/features/marketing/components/participant-roles";

export function EcosystemParticipants() {
  return (
    <section className="section-full-bleed section-lime py-module">
      <div className="section-inner">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <p className="text-label-md text-indigo mb-3">Our ecosystem</p>
            <h2 className="font-heading text-headline-md text-indigo">
              One framework for every participant
            </h2>
          </div>
          <p className="text-body-md text-indigo max-w-md">
            Open Law is the vendor-neutral layer for legal practice data
            portability — Directory trust, Dynamic Client Registration, and
            standardised Access APIs.
          </p>
        </div>
        <ParticipantRoles />
      </div>
    </section>
  );
}
