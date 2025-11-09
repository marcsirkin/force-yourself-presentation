/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yavuzceliker.github.io",
        pathname: "/sample-images/**",
      },
    ],
  },
};

export default nextConfig;
