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
        destination: '/user/edit-profile',
      },
      {
        source: '/user/booking',
        destination: '/user/booking/mentor',
      },
    ]
  },
}
