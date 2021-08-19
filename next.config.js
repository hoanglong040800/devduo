module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.resolve.modules.push('src')
    return config
  },

  images: {
    domains: ['e7.pngegg.com','media.vneconomy.vn'],
  },
}
