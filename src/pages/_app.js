import Head from 'next/head'
import GlobalStyle from '@/styles/globalStyle'
import defaultTheme from '@/styles/theme'
import { ThemeProvider } from 'styled-components'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Zemo Bank - Relatório Pix</title>
        <meta
          property="og:viewport"
          key="viewport"
          name="viewport"
          content="width=device-width,initial-scale=1"
          link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
