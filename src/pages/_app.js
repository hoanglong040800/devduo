import React from 'react'
import Head from 'next/head'
import { ThemeProvider, CssBaseline } from '@material-ui/core'

import theme from 'styles/theme/Theme'
import 'styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

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

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        {/* <CssBaseline /> */}
      </ThemeProvider>
    </>
  )
}
