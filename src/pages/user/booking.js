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

export default function UserBooking() {
  return (
    <>
      <Head>
        <title>Your booking</title>
      </Head>

      <SidebarUser value="/user/booking">
        <h1>Booking</h1>

        <Divider />
      </SidebarUser>
    </>
  )
}

UserBooking.auth=true
