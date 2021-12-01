import { extendTheme, ThemeConfig } from "@chakra-ui/react"
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools"

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false
}

export const theme = extendTheme({
  config,
  components: {
    Drawer: {
      variants: {
        customWidth: {
          dialog: {
            minWidth: "370px",
            maxWidth: "370px"
          }
        }
      }
    }
  },

  styles: {
    global: (props: StyleFunctionProps) => ({
      ":root": {
        "--calendar-bg-color": "#0f1016",
        "--calendar-text-color": "#718086",
        "--calendar-input-color": "#ffffff",
        "--calendar-border-color": "#cbd5e0",
        "--calendar-input-border-radius": "8px",
        "--calendar-input-border-width": 0
      },

      body: {
        fontFamily: "Inter",
        bg: mode("#F6F7FB", "#22242E")(props)
      }
    })
  }
})
