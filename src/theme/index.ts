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

      "::-webkit-scrollbar": {
        width: "6px",
        height: "6px"
      },

      "::-webkit-scrollbar-thumb": {
        background: "none",
        borderRadius: "30px"
      },

      "::-webkit-scrollbar-track": {
        background: "none",
        borderRadius: 0,
        boxShadow: "inset 0px 0px 0px 0px #F0F0F0"
      },

      body: {
        fontFamily: "Inter",
        bg: mode("#F6F7FB", "#22242E")(props)
      }
    })
  }
})
