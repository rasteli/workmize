const withImages = require("next-images")
const withPlugins = require("next-compose-plugins")

const nextConfig = {
  images: {
    domains: ["avatars.githubusercontent.com", "hiring-api.workmize.com"]
  }
}

module.exports = withPlugins(
  [
    [
      withImages({
        esModule: true
      })
    ]
  ],
  nextConfig
)
