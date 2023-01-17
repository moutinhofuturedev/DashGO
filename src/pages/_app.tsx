import { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "../styles/theme"
import { SidebarDrawerProvider } from "../context/SidebarDrawerContext"
import { makeServer } from "../services/mirage"
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

if (process.env.NODE_ENV === "development") {
  makeServer()
}

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
    </QueryClientProvider>
  )
}

export default MyApp
