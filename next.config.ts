import type { NextConfig } from "next";
import "./env";

const acceptsMarkdown = [
  { type: "header" as const, key: "accept", value: "(.*)text/markdown(.*)" },
];

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  rewrites() {
    return Promise.resolve({
      beforeFiles: [
        { source: "/", has: acceptsMarkdown, destination: "/md/home" },
        { source: "/index.md", destination: "/md/home" },
      ],
      afterFiles: [],
      fallback: [],
    });
  },
};

export default nextConfig;
