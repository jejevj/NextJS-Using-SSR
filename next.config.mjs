/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.aglty.io",
        pathname: "/2engiagu/posts/**",
      },
    ],
  },
};

export default nextConfig;

