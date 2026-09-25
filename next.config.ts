import type { NextConfig } from "next";

import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 2560, 3840],
    imageSizes: [32, 48, 64, 96, 128, 256, 384, 512, 640],
    qualities: [75, 85, 90, 95, 100],
  },
};

export default nextConfig;
