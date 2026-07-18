import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,
  basePath: isGitHubPages ? "/hangzhou-food-wheel" : "",
  assetPrefix: isGitHubPages ? "/hangzhou-food-wheel/" : "",
  typescript: {
    tsconfigPath: isGitHubPages ? "./tsconfig.github.json" : "./tsconfig.json",
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
