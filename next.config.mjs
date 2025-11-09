/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
