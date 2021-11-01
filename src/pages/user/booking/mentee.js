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

export default function BookingMentor() {
  return (
    <>
      <Head>
        <title>Your booking</title>
      </Head>

      <SidebarUser value="/user/booking/mentor">
        <BookingTabs value="/user/booking/mentee">

        </BookingTabs>
      </SidebarUser>
    </>
  )
}

BookingMentor.auth = true
