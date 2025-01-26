import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["next-mdx-remote"],
  async redirects() {
    return [
      {
        source: "/writing/vc-os",
        destination: "/blog/vc-os",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
