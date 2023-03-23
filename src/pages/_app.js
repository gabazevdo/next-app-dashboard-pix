import Head from 'next/head'
import GlobalStyle from '@/styles/globalStyle'
import defaultTheme from '@/styles/theme'
import { ThemeProvider } from 'styled-components'

export default function App({ Component, pageProps }) {
  return (
    <>

      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}