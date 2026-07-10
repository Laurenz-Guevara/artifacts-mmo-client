import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://artifactsmmo.com/images/characters/**")],
  },
};

export default nextConfig;
