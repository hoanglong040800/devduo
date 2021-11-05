import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signIn, useSession } from 'next-auth/client'
import { changeUserMoney } from 'common/store/userInfoSlice'
import { Box, CircularProgress } from '@material-ui/core'
import RightSidebarTemplate from 'common/template/RightSidebarTemplate'
import BookModal from 'modules/booking/BookModal'
import ListMentor from 'modules/mentor/ListMentor'
import MainInfo from 'modules/mentor/detail/MainInfo'
import SideInfo from 'modules/mentor/detail/SideInfo'
import {
  addBooking,
  getCurrentBooking,
  updateBookingStatus,
} from 'modules/booking/fetch-booking'
import { getLimitMentors, getMentorById } from 'modules/mentor/fetch-mentors'

export async function getServerSideProps(ctx) {
  const apiUrl = process.env.API_URL
  const initDetails = await getMentorById(apiUrl, ctx.params.id)
  const limitMentors = await getLimitMentors(apiUrl, 4)

  if (!initDetails || !limitMentors) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      apiUrl,
      initDetails,
      limitMentors,
    },
  }
}

export default function MentorDetail({ apiUrl, initDetails, limitMentors }) {
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
      const data = await getCurrentBooking(apiUrl, session.user.id, details.id)
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

    data['mentee'] = {}
    data.mentee['id'] = session.user.id
    data.mentee['full_name'] = session.user.full_name
    data.mentee['thumnail'] = session.user.thumnail

    data['mentor'] = {}
    data.mentor['id'] = details.id
    data.mentor['full_name'] = details.full_name
    data.mentor['thumnail'] = details.thumnail

    // data['mentee_id'] = session.user.id
    // data['mentor_id'] = details.id
    data['status'] = 'ongoing'

    const resData = await addBooking(apiUrl, data)

    if (resData) {
      dispatch(changeUserMoney(-resData.total_price))
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

      {
        //
        details ? (
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
          </>
        ) : (
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        )
      }

      <Box my={5}>
        <h1>Mentors you may like</h1>

        <ListMentor list={limitMentors} />
      </Box>
    </>
  )
}
