import { Divider } from '@material-ui/core'
import SidebarUser from 'modules/user/SidebarUser'
import Head from 'next/head'

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
