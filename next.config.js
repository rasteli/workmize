const withImages = require("next-images")
const withPlugins = require("next-compose-plugins")

const nextConfig = {
  images: {
    domains: ["avatars.githubusercontent.com"]
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
