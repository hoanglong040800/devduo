import { useSession } from 'next-auth/client'
import Head from 'next/head'

export default function HomePage() {
  const [session, loading] = useSession()

  return (
    <>
      <Head>
        <title>Home - DevDuo</title>
      </Head>

      {
        //
        session ? (
          <>
            <h1>Hello, {session.user.name}</h1>
          </>
        ) : (
          <h1>Home page</h1>
        )
      }
    </>
  )
}
