import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true,
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.devtool = "eval-source-map";
    }
    return config;
  },
  turbopack: {
    resolveAlias: {
      "@": "src",
      "@shared": "shared_components/src",
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
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000", "dev.homlista.com", "homlista.com"],
    },
  },
};

export default nextConfig;
