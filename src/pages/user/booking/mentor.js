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
import { useDispatch } from 'react-redux'
import { changeUserMoney } from 'common/store/userInfoSlice'

export async function getServerSideProps(ctx) {
  const apiUrl = process.env.API_URL
  const session = await getSession(ctx)

  return {
    props: {
      apiUrl,
      session,
      initAllMentorBooking: await getAllMentorBooking(apiUrl, session.user.id),
    },
  }
}

export default function BookingMentor({
  apiUrl,
  session,
  initAllMentorBooking,
}) {
  const [allMentorBooking, setAllMentorBooking] = useState(initAllMentorBooking)
  const dispatch = useDispatch()

  async function handleCancel(id) {
    const booking = await updateBookingStatus(apiUrl, id, 'cancel')
    dispatch(changeUserMoney(booking.total_price))

    refreshBookings()
  }

  async function handleFinish(id) {
    await updateBookingStatus(apiUrl, id, 'finish')
    refreshBookings()
  }

  async function refreshBookings() {
    const data = await getAllMentorBooking(apiUrl, session.user.mentor_id)
    setAllMentorBooking(data)
  }

  return (
    <>
      <Head>
        <title>Your mentor</title>
      </Head>

      <SidebarUser value="/user/booking/mentor">
        <BookingTabs value="/user/booking/mentor">
          <BookingList list={allMentorBooking} onCancel={handleCancel} onFinish={handleFinish} />
        </BookingTabs>
      </SidebarUser>
    </>
  )
}

BookingMentor.auth = true
