import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  trailingSlash: false,
  turbopack: {
    // Keep resolution rooted in this app when a parent lockfile exists.
    root: path.resolve(__dirname),
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "goautoelevate.com" }],
        destination: "https://www.goautoelevate.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
