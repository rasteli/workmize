import "react-dates/initialize"
import "react-dates/lib/css/_datepicker.css"

import "../styles/react_dates_override.css"

import { AppProps } from "next/app"
import { ApolloProvider } from "@apollo/client"
import { ChakraProvider } from "@chakra-ui/react"

import { theme } from "../theme"
import { client } from "../services/api"
import { AuthContextProvider } from "../contexts/AuthContext"
import { ComboboxProvider } from "../contexts/ComboboxContext"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <AuthContextProvider>
        <ChakraProvider theme={theme}>
          <ComboboxProvider>
            <Component {...pageProps} />
          </ComboboxProvider>
        </ChakraProvider>
      </AuthContextProvider>
    </ApolloProvider>
  )
}

export default MyApp
