import React from 'react'
import Head from 'next/head'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import { Provider } from 'react-redux'
import theme from 'styles/theme/Theme'
import 'styles/globals.css'
import store from 'store'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/devduo.svg" />
        <title>DevDuo</title>
      </Head>

      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  )
}
