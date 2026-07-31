const approaches = [
  {
    title: "We publish openly",
    body: "Directory, DCR, Read/Write, and Open Data specifications live in public repositories — vendor-neutral rails anyone can implement.",
  },
  {
    title: "We verify trust",
    body: "Software Statement Assertions, JWKS, and the conformance suite give firms and regulators confidence in marketplace participants.",
  },
  {
    title: "We enable choice",
    body: "Clients authorise access to their data. Firms host it. Apps and TSPs compete on experience — not on proprietary lock-in.",
  },
] as const;

export function ApproachSection() {
  return (
    <section className="section-full-bleed section-cream py-module border-t border-indigo">
      <div className="section-inner">
        <h2 className="font-heading text-headline-md text-indigo mb-12 max-w-xl">
          Collaborative by design
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {approaches.map((item) => (
            <div key={item.title} className="border-t border-indigo pt-8">
              <h3 className="font-heading text-headline-sm text-indigo mb-4">
                {item.title}
              </h3>
              <p className="text-body-md text-on-surface-variant">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
