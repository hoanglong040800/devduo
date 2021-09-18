module.exports = {
  reactStrictMode: false,

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
}
