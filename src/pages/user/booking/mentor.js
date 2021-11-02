import BookingTabs from 'modules/booking/BookingTabs'
import SidebarUser from 'modules/user/SidebarUser'
import { getSession } from 'next-auth/client'
import { getAllMentorBooking } from 'modules/booking/fetch-booking'
import Head from 'next/head'
import { Box } from '@material-ui/core'

export async function getServerSideProps(ctx) {
  const apiUrl = process.env.API_URL
  const session = await getSession(ctx)

  return {
    props: {
      apiUrl,
      allActiveMentorBooking: await getAllMentorBooking(
        apiUrl,
        session.user.id
      ),
    },
  }
}

export default function BookingMentee({ apiUrl, allActiveMentorBooking }) {
  return (
    <>
      <Head>
        <title>Booking Mentor</title>
      </Head>

      <SidebarUser value="/user/booking/mentor">
        <BookingTabs value="/user/booking/mentor">
          {allActiveMentorBooking.map(item => (
            <Box key={item.id} mb={3}>
              <p>{item.mentor.full_name}</p>
              <p>{item.status}</p>
              <p>{item.total_price}</p>
            </Box>
          ))}
        </BookingTabs>
      </SidebarUser>
    </>
  )
}

BookingMentee.auth = true
