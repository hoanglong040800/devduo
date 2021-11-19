import { changeUserMoney } from 'common/store/userInfoSlice'
import BookingTabs from 'modules/booking/BookingTabs'
import { getAllMenteeBooking, updateBookingStatus } from 'modules/booking/fetch-booking'
import BookingList from 'modules/booking/list/BookingList'
import { updateMentorStatus } from 'modules/mentor/fetch-mentors'
import SidebarUser from 'modules/user/SidebarUser'
import { getSession } from 'next-auth/client'
import Head from 'next/head'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

export async function getServerSideProps(ctx) {
  const apiUrl = process.env.API_URL
  const session = await getSession(ctx)

  return {
    props: {
      apiUrl,
      session,
      initAllMenteeBooking: await getAllMenteeBooking(apiUrl, session.user.id),
    },
  }
}

export default function BookingMentee({
  apiUrl,
  session,
  initAllMenteeBooking,
}) {
  const [allMenteeBooking, setAllMenteeBooking] = useState(initAllMenteeBooking)
  const dispatch=useDispatch()

  async function handleCancel(id) {
    const booking = await updateBookingStatus(apiUrl, id, 'cancel')
    dispatch(changeUserMoney(-booking.total_price))


    const data = await getAllMenteeBooking(apiUrl, session.user.mentor_id)
    setAllMenteeBooking(data)
  }

  return (
    <>
      <Head>
        <title>Your mentee</title>
      </Head>

      <SidebarUser value="/user/booking/mentor">
        <BookingTabs value="/user/booking/mentee">
          <BookingList list={allMenteeBooking} type="mentee" onCancel={handleCancel} />
        </BookingTabs>
      </SidebarUser>
    </>
  )
}

BookingMentee.auth = true
