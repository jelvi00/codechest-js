import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [new URL('https://cdn2.thecatapi.com/**')],
    },
  /* config options here */
};

export default nextConfig;
