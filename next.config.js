/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["freepik.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "freepik.com",
      },
    ],
  },
  reactStrictMode: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

module.exports = nextConfig;
