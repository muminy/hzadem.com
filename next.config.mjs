/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "basho.fueko.net",
      },
      {
        protocol: "https",
        hostname: "hzadem.codejs.dev",
      },
    ],
  },
}

export default nextConfig
