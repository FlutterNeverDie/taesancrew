import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 백엔드 없이 정적 HTML로만 빌드 (out/ 폴더를 그대로 호스팅)
  output: "export",
  images: { unoptimized: true },
  devIndicators: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
