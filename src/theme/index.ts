import { extendTheme, ThemeConfig } from "@chakra-ui/react"
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools"

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false
}

export const theme = extendTheme({
  config,
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        fontFamily: "Inter",
        bg: mode("white", "#464750")(props)
      }
    })
  }
})
