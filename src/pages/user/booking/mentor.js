import BookingTabs from 'modules/booking/BookingTabs'
import SidebarUser from 'modules/user/SidebarUser'
import { getSession } from 'next-auth/client'
import { getAllMentorBooking } from 'modules/booking/fetch-booking'
import Head from 'next/head'
import { Box } from '@material-ui/core'
import Link from 'next/link'
import BookingList from 'modules/booking/list/BookingList'

export async function getServerSideProps(ctx) {
  const apiUrl = process.env.API_URL
  const session = await getSession(ctx)

  return {
    props: {
      apiUrl,
      allMentorBooking: await getAllMentorBooking(apiUrl, session.user.id),
    },
  }
}

export default function BookingMentee({ apiUrl, allMentorBooking }) {
  return (
    <>
      <Head>
        <title>Your mentor</title>
      </Head>

      <SidebarUser value="/user/booking/mentor">
        <BookingTabs value="/user/booking/mentor">
          <BookingList list={allMentorBooking} />
        </BookingTabs>
      </SidebarUser>
    </>
  )
}

BookingMentee.auth = true
