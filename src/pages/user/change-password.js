import { Divider } from '@material-ui/core'
import SidebarUser from 'modules/user/SidebarUser'
import { getSession } from 'next-auth/client'
import Head from 'next/head'

export async function getServerSideProps(context) {
  const session = await getSession(context)

  return {
    props: { session },
  }
}

export default function UserChangePassword() {
  return (
    <>
    <Head>
      <title>Change Password</title>
    </Head>
      <SidebarUser value="/user/change-password">
        <h1>Change Password</h1>

        <Divider />
      </SidebarUser>
    </>
  )
}

UserChangePassword.auth=true
