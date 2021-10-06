import Head from 'next/head'
import { useSession } from 'next-auth/client'

export default function About() {
  const [session, loading] = useSession()

  return (
    <>
      <Head>
        <title>About - DevDuo</title>
      </Head>

      <h1>About page</h1>
      <pre>{JSON.stringify(session,null,2)}</pre>
    </>
  )
}
