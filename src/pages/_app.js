import Head from 'next/head'

import 'assets/styles/globals.css'
import DefaultLayout from 'layout/DefaultLayout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/devduo.png" layout="fill" />
        <title>DevDuo</title>
      </Head>

      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  )
}

export default MyApp
