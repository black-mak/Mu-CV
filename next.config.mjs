/** @type {import('next').NextConfig} */
const isPages = process.env.GITHUB_ACTIONS === "true";
const basePath = isPages ? "/cv" : "";

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  ...(isPages ? { output: "export", basePath, assetPrefix: basePath } : {}),
  images: {
    unoptimized: isPages,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mir-s3-cdn-cf.behance.net",
      },
      {
        protocol: "https",
        hostname: "a5.behance.net",
      },
    ],
  },
};

export default nextConfig;
