export const mainNav = [
  { href: "/#what-is-open-law", label: "What is Open Law", match: "/" },
  { href: "/ecosystem", label: "Ecosystem", match: "/ecosystem" },
  { href: "/standards", label: "Standards", match: "/standards" },
  { href: "/developers", label: "Developers", match: "/developers" },
  { href: "/docs", label: "Docs", match: "/docs" },
  { href: "/participate", label: "Participate", match: "/participate" },
] as const;

export const footerColumns = [
  {
    title: "Explore",
    links: [
      { href: "/ecosystem", label: "Ecosystem" },
      { href: "/standards", label: "Standards" },
      { href: "/docs/directory", label: "Directory" },
      { href: "/developers", label: "Developers" },
    ],
  },
  {
    title: "Participate",
    links: [
      { href: "/participate", label: "Join Open Law" },
      { href: "/ecosystem/providers", label: "For TSPs" },
      { href: "/ecosystem/apps", label: "For app builders" },
      { href: "/docs", label: "Documentation" },
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

export const siteUrls = {
  githubOrg: "https://github.com/openlawuk",
  directory: "https://directory.openlaw.org.uk",
  openData: "https://opendata.openlaw.org.uk",
  standards: "https://standards.openlaw.org.uk",
  mattertwo: "https://www.mattertwo.com",
  mattertwoConnect: "https://openlaw.mattertwo.com",
} as const;
