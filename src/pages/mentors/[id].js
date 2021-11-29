import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signIn, useSession } from 'next-auth/client'
import { changeUserMoney } from 'common/store/userInfoSlice'
import { Box, CircularProgress } from '@material-ui/core'
import RightSidebarTemplate from 'common/template/RightSidebarTemplate'
import BookModal from 'modules/booking/BookModal'
import MainInfo from 'modules/mentor/detail/MainInfo'
import SideInfo from 'modules/mentor/detail/SideInfo'
import {
  addBooking,
  getCurrentBooking,
  updateBookingStatus,
} from 'modules/booking/fetch-booking'
import { getLimitMentors, getMentorById } from 'modules/mentor/fetch-mentors'
import RatingList from 'modules/rating/RatingList'
import { getAllMentorRatings } from 'modules/rating/fetch-ratings'

export async function getServerSideProps(ctx) {
  const apiUrl = process.env.API_URL
  const initDetails = await getMentorById(apiUrl, ctx.params.id)
  const mentorRatings = await getAllMentorRatings(apiUrl, ctx.params.id)

  if (!initDetails) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      apiUrl,
      initDetails,
      mentorRatings
    },
  }
}

export default function MentorDetail({ apiUrl, initDetails,mentorRatings }) {
  const router = useRouter()
  const [session, loading] = useSession()
  const userInfo = useSelector(state => state.userInfo)
  const dispatch = useDispatch()

  const [details, setDetails] = useState(initDetails)
  const [openBookModal, setOpenBookModal] = useState(false)
  const [booking, setBooking] = useState({ id: null, status: '' })

  useEffect(async () => {
    const mentorDetail = await getMentorById(apiUrl, router.query.id)
    setDetails(mentorDetail)

    if (session && details) {
      const data = await getCurrentBooking(
        apiUrl,
        session.user.mentor_id,
        details.id
      )
      if (data) setBooking(data)
      else setBooking({ status: '' })
    } else setBooking({ status: '' })
  }, [session, router.query.id])

  function handleClickBook() {
    session ? handleOpenBookModal() : signIn('google')
  }

  function handleOpenBookModal() {
    setOpenBookModal(true)
  }

  function handleCloseBookModal() {
    setOpenBookModal(false)
  }

  async function handleBook(data) {
    handleCloseBookModal()

    data['mentor'] = details.id
    data['mentee'] = session.user.mentor_id
    data['status'] = 'ongoing'
    data['total_price'] = data['total_price']

    const resData = await addBooking(apiUrl, data)

    if (resData) {
      dispatch(changeUserMoney(-data.total_price))
      setBooking(resData)
    }
  }

  async function handleCancel() {
    const resData = await updateBookingStatus(apiUrl, booking.id, 'cancel')

    if (resData) {
      dispatch(changeUserMoney(resData.total_price))
      setBooking({ status: 'cancel', id: null })

      // update UI (status)
      const newDetails = { status: true, ...details }
      setDetails(newDetails)
    }
  }

  return (
    <>
      <Head>
        <title>{details && details.full_name}</title>
      </Head>

      {details && (
        <>
          <RightSidebarTemplate
            sidebar={
              <SideInfo
                details={details}
                bookingStatus={booking.status}
                onClickBook={handleClickBook}
                onCancel={handleCancel}
              />
            }
          >
            <MainInfo details={details} />
          </RightSidebarTemplate>

          <BookModal
            open={openBookModal}
            onClose={handleCloseBookModal}
            onBook={handleBook}
            details={details}
            money={userInfo.user.money}
          />

          <RightSidebarTemplate>
            <RatingList list={mentorRatings} />
          </RightSidebarTemplate>
        </>
      )}
    </>
  )
}
