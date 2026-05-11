import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        // Temporary (307) until the URL structure is finalized — avoids
        // permanent browser caching of the redirect target.
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
