/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "freepik.com",
      },
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
