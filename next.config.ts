import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Removed turbopack root config as it can cause "Next.js package not found" panics
  output: 'standalone',
};

export default nextConfig;
