import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // genera HTML estático en /out
  images: { unoptimized: true }, // por si en algún momento usás <Image />
};

export default nextConfig;
