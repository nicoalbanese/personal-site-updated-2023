import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["next-mdx-remote"],
  async rewrites() {
    return [
      {
        source: "/aie",
        destination: "https://aie-london-companion.vercel.app/docs",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/writing/vc-os",
        destination: "/blog/vc-os",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        port: "",
        pathname: "**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
