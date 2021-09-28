import { Divider } from '@material-ui/core'
import { url } from 'common/utils/constants'
import SidebarUser from 'modules/user/SidebarUser'
import { getSession } from 'next-auth/client'
import Head from 'next/head'

export async function getServerSideProps(context) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: url.notLogin,
        permanent: false,
      },
    }
  }

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
