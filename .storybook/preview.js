import { theme } from "../src/theme"

import * as nextImage from "next/image"

Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: props => <img {...props} />
})

export const parameters = {
  chakra: { theme },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
