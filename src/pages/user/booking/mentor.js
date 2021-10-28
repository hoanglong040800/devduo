import { Divider } from '@material-ui/core'
import BookingTabs from 'modules/booking/BookingTabs'
import SidebarUser from 'modules/user/SidebarUser'
import { getSession } from 'next-auth/client'
import Head from 'next/head'

export async function getServerSideProps(context) {
  const session = await getSession(context)

  return {
    props: { session },
  }
}

export default function BookingMentee() {
  return (
    <>
      <Head>
        <title>Booking Mentor</title>
      </Head>

      <SidebarUser value="/user/booking/mentor">
        <BookingTabs value="/user/booking/mentor">

        </BookingTabs>
      </SidebarUser>
    </>
  )
}

BookingMentee.auth = true
