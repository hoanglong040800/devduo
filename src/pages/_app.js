import React from 'react'
import Head from 'next/head'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import { Provider } from 'react-redux'
import theme from 'common/theme/theme'
import 'common/styles/globals.css'
import store from 'common/store'
import DefaultLayout from 'common/layout/DefaultLayout'

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
          
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        </ThemeProvider>
      </Provider>
    </>
  )
}
