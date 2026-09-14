import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.goautoelevate.com" }],
        destination: "https://goautoelevate.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
