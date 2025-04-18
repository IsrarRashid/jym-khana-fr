import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "45.115.86.186",
        port: "153",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
