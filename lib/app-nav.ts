export const mainNav = [
  {
    href: "/what-is-open-law",
    label: "What is Open Law?",
    match: "/what-is-open-law",
  },
  { href: "/ecosystem", label: "Ecosystem", match: "/ecosystem" },
  { href: "/standards", label: "Standards", match: "/standards" },
  { href: "/news", label: "News & Insights", match: "/news" },
  { href: "/developers", label: "Developers", match: "/developers" },
] as const;

export const footerColumns = [
  {
    title: "Explore",
    links: [
      { href: "/what-is-open-law", label: "What is Open Law?" },
      { href: "/ecosystem", label: "Ecosystem" },
      { href: "/standards", label: "Standards" },
      { href: "/news", label: "News & Insights" },
      { href: "/standards/directory", label: "Directory" },
      { href: "/developers", label: "Developers" },
    ],
  },
  {
    title: "Participate",
    links: [
      { href: "/participate", label: "For law firms" },
      { href: "/ecosystem/providers", label: "For TSPs" },
      { href: "/ecosystem/apps", label: "For app builders" },
      { href: "/standards/conformance", label: "Conformance" },
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
