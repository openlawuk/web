import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/docs",
        destination: "/standards",
        permanent: true,
      },
      {
        source: "/docs/:slug*",
        destination: "/standards/:slug*",
        permanent: true,
      },
      {
        source: "/documentation",
        destination: "/standards",
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
        destination: "/standards/:slug*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
