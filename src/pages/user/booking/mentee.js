import BookingTabs from 'modules/booking/BookingTabs'
import { getAllMenteeBooking } from 'modules/booking/fetch-booking'
import BookingList from 'modules/booking/list/BookingList'
import SidebarUser from 'modules/user/SidebarUser'
import { getSession } from 'next-auth/client'
import Head from 'next/head'

export async function getServerSideProps(ctx) {
  const apiUrl = process.env.API_URL
  const session = await getSession(ctx)

  return {
    props: {
      apiUrl,
      allMenteeBooking: await getAllMenteeBooking(apiUrl, session.user.id),
    },
  }
}

export default function BookingMentor({ apiUrl, allMenteeBooking }) {
  return (
    <>
      <Head>
        <title>Your mentee</title>
      </Head>

      <SidebarUser value="/user/booking/mentor">
        <BookingTabs value="/user/booking/mentee">
          <BookingList list={allMenteeBooking} type="mentee" />
        </BookingTabs>
      </SidebarUser>
    </>
  )
}

BookingMentor.auth = true
