import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  webpack(config) {
    config.resolve.modules.push(path.resolve('./src'));
    return config;
  }
};

export default nextConfig;
