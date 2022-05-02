import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import { SessionProvider as NextAuthProvider } from 'next-auth/react'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <NextAuthProvider session={pageProps.session}>
            <ChakraProvider resetCSS theme={theme}>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </ChakraProvider>
        </NextAuthProvider>
    )
}

export default MyApp
