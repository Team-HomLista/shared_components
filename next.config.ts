import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true,
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.devtool = "eval-source-map";
    }
    const fileLoaderRule = config.module.rules.find((rule: any) => rule.test?.test?.(".svg"));

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/ // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ["@svgr/webpack"]
      }
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
  experimental: {
    turbo: {
      resolveAlias: {
        "@": "src",
        "@shared": "shared_components/src"
      },
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js" // or "*.ts" for TypeScript
        }
      }
    },
    serverActions: {
      allowedOrigins: ["localhost:3000", "dev.homlista.com", "homlista.com"]
    }
  },
  // turbopack: {},
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pics.craiyon.com",
        port: "",
        pathname: "/**",
        search: ""
      },
      {
        protocol: "https",
        hostname: "cannele-bucket.nyc3.cdn.digitaloceanspaces.com",
        port: "",
        pathname: "/**",
        search: ""
      }
    ]
  }
};

export default nextConfig;
