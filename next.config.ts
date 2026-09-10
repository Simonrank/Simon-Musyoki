import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "1";

const nextConfig: NextConfig = {
  ...(isGitHubPages
    ? {
        output: "export" as const,
        basePath: "/Simon-Musyoki",
        assetPrefix: "/Simon-Musyoki",
        trailingSlash: true,
      }
    : {}),
  images: {
    unoptimized: isGitHubPages,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPages ? "/Simon-Musyoki" : "",
  },
};

export default nextConfig;
