/** @type {import('next').NextConfig} */
const isPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  ...(isPages ? { output: "export", basePath: "/cv" } : {}),
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
