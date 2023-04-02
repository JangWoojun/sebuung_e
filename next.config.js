/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "sebuung.s3.ap-northeast-2.amazonaws.com",
      "yt3.googleusercontent.com",
      "play-lh.googleusercontent.com",
      "dummyimage.com"
  ]
  }
}
const withImages = require('next-images')
module.exports = withImages({
  webpack(config, options) {
    return config
  }
})
module.exports = nextConfig