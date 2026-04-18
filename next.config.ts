import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/notes",
        destination: "/notes/filter/all",
        permanent: false,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        hostname: "ac.goit.global",
      },
    ],
  },
};

export default nextConfig;
