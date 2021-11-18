import BookingTabs from 'modules/booking/BookingTabs'
import SidebarUser from 'modules/user/SidebarUser'
import { getSession } from 'next-auth/client'
import {
  getAllMentorBooking,
  updateBookingStatus,
} from 'modules/booking/fetch-booking'
import Head from 'next/head'
import BookingList from 'modules/booking/list/BookingList'
import { useState } from 'react'
import { updateMentorStatus } from 'modules/mentor/fetch-mentors'

export async function getServerSideProps(ctx) {
  const apiUrl = process.env.API_URL
  const session = await getSession(ctx)

  return {
    props: {
      apiUrl,
      session,
      initAllMentorBooking: await getAllMentorBooking('http://localhost:8000', session.user.id),
    },
  }
}

export default function BookingMentee({
  apiUrl,
  session,
  initAllMentorBooking,
}) {
  const [allMentorBooking, setAllMentorBooking] = useState(initAllMentorBooking)

  async function handleCancel(id) {
    const booking = await updateBookingStatus(apiUrl, id, 'cancel')
    await updateMentorStatus(apiUrl, booking.mentor.id, true)
    
    const data = await getAllMentorBooking('http://localhost:8000', session.user.id)
    setAllMentorBooking(data)
  }

  return (
    <>
      <Head>
        <title>Your mentor</title>
      </Head>

      <SidebarUser value="/user/booking/mentor">
        <BookingTabs value="/user/booking/mentor">
          <BookingList list={allMentorBooking} onCancel={handleCancel} />
        </BookingTabs>
      </SidebarUser>
    </>
  )
}

BookingMentee.auth = true
