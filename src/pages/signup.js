import { Link } from '@material-ui/core'
import CenterTemplate from 'common/template/CenterTemplate'
import SignupForm from 'modules/auth/SignupForm'
import Head from 'next/head'

export default function Signup() {
  return (
    <>
      <Head>
        <title>Signup | DevDuo</title>
      </Head>

      <CenterTemplate>
        <h1>Signup</h1>
        <p>
          Already have an account? <Link href="/login">Login now</Link>
        </p>
        
        <SignupForm />
      </CenterTemplate>
    </>
  )
}
