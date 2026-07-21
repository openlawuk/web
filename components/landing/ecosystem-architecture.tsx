const nodes = [
  {
    id: "NODE.01",
    title: "1. Directory",
    phase: "Discovery Phase",
    icon: "travel_explore",
    accent: "secondary" as const,
    body: "Global registry indexing verified legal entities, datasets, and endpoints. The starting point for interoperable legal tech.",
  },
  {
    id: "NODE.02_SECURE",
    title: "2. DCR",
    phase: "Trust Framework",
    icon: "security",
    accent: "emerald" as const,
    body: "Dynamic Client Registration validates the cryptographic identity and permissions of querying systems in real-time.",
  },
  {
    id: "NODE.03",
    title: "3. Access",
    phase: "Data Portability",
    icon: "data_object",
    accent: "tertiary" as const,
    body: "Standardized API gateways facilitate secure, governed transfer of legal datasets between authorized providers.",
  },
];

const accentStyles = {
  secondary: {
    card: "border-l-2 border-l-secondary/30 hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(75,65,225,0.15)]",
    icon: "border-secondary/20 bg-secondary/5 text-secondary",
    phase: "text-secondary",
    meta: "border-secondary/20 text-brand-navy",
    corner: "corner-accent-tl-secondary",
  },
  emerald: {
    card: "border-l-4 border-l-brand-emerald hover:border-brand-emerald/50 shadow-[0_0_30px_rgba(16,185,129,0.08)] hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] from-white/90 to-primary-container/5",
    icon: "border-brand-emerald/30 bg-brand-emerald/10 text-brand-emerald",
    phase: "text-brand-emerald",
    meta: "border-brand-emerald/30 text-brand-emerald",
    corner: "corner-accent-tl",
  },
  tertiary: {
    card: "border-l-2 border-l-tertiary/30 hover:border-tertiary/50 hover:shadow-[0_0_30px_rgba(73,75,214,0.15)]",
    icon: "border-tertiary/20 bg-tertiary/5 text-tertiary",
    phase: "text-tertiary",
    meta: "border-tertiary/20 text-brand-navy",
    corner: "corner-accent-tl",
  },
};

export function EcosystemArchitecture() {
  return (
    <section className="py-stack-lg md:py-16 relative">
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-tertiary-fixed/40 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="text-center mb-16 max-w-2xl mx-auto relative z-10 bg-gradient-to-br from-white/90 to-surface-container-low/50 p-6 tech-border backdrop-blur-md w-full border-t-secondary/30">
        <div className="corner-accent-tl-secondary" />
        <div className="corner-accent-br-tertiary" />
        <h2 className="text-headline-md text-brand-navy mb-stack-sm font-semibold">
          The Ecosystem Architecture
        </h2>
        <p className="text-body-md text-on-surface-variant">
          A streamlined, cryptographic approach to legal data discovery and
          access.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative">
        <div className="hidden md:block absolute top-1/2 left-[16%] right-[16%] h-[2px] bg-brand-navy/10 -translate-y-1/2 z-0" />
        <div className="hidden md:block node-emerald absolute top-1/2 left-[33%] -translate-y-1/2 z-0" />
        <div className="hidden md:block node-tertiary absolute top-1/2 left-[66%] -translate-y-1/2 z-0" />

        {nodes.map((node) => {
          const styles = accentStyles[node.accent];
          return (
            <div
              key={node.id}
              className={`md:col-span-4 bg-gradient-to-b from-white/90 to-surface-container-low/50 backdrop-blur-md tech-border p-stack-lg flex flex-col gap-stack-md group transition-all relative z-10 h-full ${styles.card}`}
            >
              <div
                className={`${styles.corner} opacity-50 group-hover:opacity-100 transition-opacity ${node.accent === "tertiary" ? "border-tertiary" : ""}`}
              />
              <div
                className={`absolute -top-3 left-4 bg-white px-2 font-mono text-[10px] border ${styles.meta}`}
              >
                {node.id}
              </div>
              <div
                className={`w-12 h-12 border flex items-center justify-center ${styles.icon}`}
              >
                <span className="material-symbols-outlined text-2xl">
                  {node.icon}
                </span>
              </div>
              <div>
                <h3 className="text-headline-sm text-brand-navy mb-2 font-semibold">
                  {node.title}
                </h3>
                <p
                  className={`text-body-sm font-semibold uppercase tracking-wider mb-2 ${styles.phase}`}
                >
                  {node.phase}
                </p>
                <p className="text-body-md text-on-surface-variant">
                  {node.body}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
