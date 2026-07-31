export const ecosystemTabs = [
  { href: "/ecosystem", label: "All", match: "/ecosystem" },
  { href: "/ecosystem/firms", label: "Firms", match: "/ecosystem/firms" },
  { href: "/ecosystem/apps", label: "Apps", match: "/ecosystem/apps" },
  {
    href: "/ecosystem/providers",
    label: "Providers",
    match: "/ecosystem/providers",
  },
  {
    href: "/ecosystem/regulatory",
    label: "Regulatory",
    match: "/ecosystem/regulatory",
  },
] as const;

export const ecosystemRoles = [
  {
    href: "/ecosystem/firms",
    title: "Firms (LSPs)",
    description:
      "Law firms and legal service providers that host client practice data behind Open Law APIs.",
    eyebrow: "LSP",
    tone: "green" as const,
  },
  {
    href: "/ecosystem/apps",
    title: "Apps (TPPs)",
    description:
      "Client-facing and firm-facing software that discovers firms and exchanges data under client consent.",
    eyebrow: "TPP",
    tone: "sky" as const,
  },
  {
    href: "/ecosystem/providers",
    title: "Providers (TSPs)",
    description:
      "Technical hosts that implement Directory trust, DCR, consent, and Read/Write endpoints for firms.",
    eyebrow: "TSP",
    tone: "lime" as const,
  },
  {
    href: "/ecosystem/regulatory",
    title: "Regulatory",
    description:
      "Policymakers and oversight bodies who care about transparency, boundaries, and attestation.",
    eyebrow: "Policy",
    tone: "peach" as const,
  },
] as const;
