import { Link } from '@material-ui/core'
import CenterTemplate from 'common/template/CenterTemplate'
import LoginForm from 'modules/auth/LoginForm'
import Head from 'next/head'

export default function Login() {
  return (
    <>
      <Head>
        <title>Login | DevDuo</title>
      </Head>

      <CenterTemplate>
        <h1>Login</h1>
        <p>
          Don't have account? <Link href="/signup">Signup now</Link>
        </p>

        <LoginForm />
      </CenterTemplate>
    </>
  )
}
