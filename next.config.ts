import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true,
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.devtool = "eval-source-map";
    }
    return config;
  },
  experimental: {
    turbo: {
      resolveAlias: {
        "@": "src",
        "@shared": "shared_components/src",
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pics.craiyon.com",
        port: "",
        pathname: "/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "cannele-bucket.nyc3.cdn.digitaloceanspaces.com",
        port: "",
        pathname: "/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
