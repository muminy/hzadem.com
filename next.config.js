/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["cdn.sanity.io", "cdn.dribbble.com"],
  },
}

module.exports = nextConfig
