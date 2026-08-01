import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/standards",
        destination: "/standard",
        permanent: true,
      },
      {
        source: "/standards/:slug*",
        destination: "/standard/:slug*",
        permanent: true,
      },
      {
        source: "/docs",
        destination: "/standard",
        permanent: true,
      },
      {
        source: "/docs/:slug*",
        destination: "/standard/:slug*",
        permanent: true,
      },
      {
        source: "/documentation",
        destination: "/standard",
        permanent: true,
      },
      {
        source: "/documentation/overview",
        destination: "/what-is-open-law",
        permanent: true,
      },
      {
        source: "/documentation/ecosystem",
        destination: "/ecosystem",
        permanent: true,
      },
      {
        source: "/documentation/getting-started",
        destination: "/developers",
        permanent: true,
      },
      {
        source: "/documentation/:slug*",
        destination: "/standard/:slug*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
