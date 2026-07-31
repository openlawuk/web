import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/docs",
        destination: "/documentation",
        permanent: true,
      },
      {
        source: "/docs/:slug*",
        destination: "/documentation/:slug*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
