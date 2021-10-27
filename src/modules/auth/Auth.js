import { useEffect } from 'react'
import { signIn, useSession } from 'next-auth/client'
import { url } from 'common/utils/constants'

export default function Auth({ children }) {
  const [session, loading] = useSession()
  const isSignin = !!session?.user

  // console.log('Auth', { session, isSignin, loading })

  useEffect(() => {
    if (loading) return // Do nothing while loading

    // If not authenticated, force log in
    if (!isSignin)
      signIn('google', {
        callbackUrl: url.afterLogin,
      })
  }, [isSignin, loading])

  if (isSignin) {
    return children
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <p>Loading...</p>
}
