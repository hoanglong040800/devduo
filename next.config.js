module.exports = {
  reactStrictMode: true,

  webpack(config) {
    config.resolve.modules.push('src')
    return config
  },

  async rewrites() {
    return [
      {
        source: '/user',
        destination: '/user/profile',
      },
    ]
  },

  images: {
    domains: [],
  },
}
