type ConnectorProps = {
  variant?: "hero-to-ecosystem" | "ecosystem-to-tsp";
};

export function SectionConnector({
  variant = "hero-to-ecosystem",
}: ConnectorProps) {
  if (variant === "ecosystem-to-tsp") {
    return (
      <div className="w-full relative h-16">
        <div className="vector-path-v h-full left-1/2 -translate-x-1/2" />
        <div className="vector-path-h w-1/4 left-1/2 top-1/2" />
        <div className="node-emerald left-3/4 top-1/2 -translate-y-1/2 -translate-x-1/2" />
      </div>
    );
  }

  return (
    <div className="w-full relative h-16">
      <div className="vector-path-v h-full left-1/2 -translate-x-1/2" />
      <div className="vector-path-h w-1/2 left-1/4 top-1/2" />
      <div className="node-sky left-1/4 top-1/2 -translate-y-1/2 -translate-x-1/2" />
      <div className="node-tertiary left-3/4 top-1/2 -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-brand-navy rounded-full z-10" />
    </div>
  );
}
