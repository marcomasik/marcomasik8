import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: '/skills',
        destination: '/cv',
        permanent: true, // 301 redirect for SEO
      },
    ];
  },
};

export default nextConfig;
