export const mainNav = [
  {
    href: "/what-is-open-law",
    label: "What is Open Law?",
    match: "/what-is-open-law",
  },
  { href: "/ecosystem", label: "Ecosystem", match: "/ecosystem" },
  { href: "/news", label: "News & Insights", match: "/news" },
  { href: "/developers", label: "Developers", match: "/developers" },
  { href: "/standard", label: "Standard", match: "/standard" },
] as const;

export const footerColumns = [
  {
    title: "Explore",
    links: [
      { href: "/what-is-open-law", label: "What is Open Law?" },
      { href: "/ecosystem", label: "Ecosystem" },
      { href: "/standard", label: "Standard" },
      { href: "/news", label: "News & Insights" },
      { href: "/standard/directory", label: "Directory" },
      { href: "/developers", label: "Developers" },
    ],
  },
  {
    title: "Participate",
    links: [
      { href: "/participate", label: "For law firms" },
      { href: "/ecosystem/providers", label: "For TSPs" },
      { href: "/ecosystem/apps", label: "For app builders" },
      { href: "/standard/conformance", label: "Conformance" },
    ],
  },
  {
    title: "Organisation",
    links: [
      { href: "/about", label: "About" },
      { href: "/governance", label: "Governance" },
      { href: "/privacy", label: "Privacy" },
    ],
  },
] as const;

export const appUrls = {
  githubOrg: "https://github.com/openlawuk",
  directory: "https://directory.openlaw.org.uk",
  openData: "https://opendata.openlaw.org.uk",
  standards: "https://standards.openlaw.org.uk",
  mattertwo: "https://www.mattertwo.com",
  mattertwoConnect: "https://openlaw.mattertwo.com",
} as const;
