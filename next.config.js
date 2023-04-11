/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["upcdn.io"]
  }
}

module.exports = nextConfig
