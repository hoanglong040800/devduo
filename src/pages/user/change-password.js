import { Divider } from '@material-ui/core'
import SidebarUser from 'modules/user/SidebarUser'
import Head from 'next/head'

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
