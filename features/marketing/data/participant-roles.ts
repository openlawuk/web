export const participantRoles = [
  {
    icon: "account_balance",
    title: "Firms (LSPs)",
    body: "Legal service providers host practice data behind Open Law APIs. Clients authorise access to their own data — firms do not gate which apps clients use.",
    href: "/ecosystem/firms",
  },
  {
    icon: "devices",
    title: "Apps (TPPs)",
    body: "Third-party providers build client-facing or firm-facing software on a common trust and data model — without rebuilding per practice system.",
    href: "/ecosystem/apps",
  },
  {
    icon: "dns",
    title: "Providers (TSPs)",
    body: "Technical service providers implement Directory-backed DCR, consent, and Read/Write APIs for one or many firms.",
    href: "/ecosystem/providers",
  },
  {
    icon: "gavel",
    title: "Regulatory",
    body: "Open standards, client-visible data boundaries, and self-attested conformance support transparency and marketplace safety.",
    href: "/ecosystem/regulatory",
  },
] as const;
