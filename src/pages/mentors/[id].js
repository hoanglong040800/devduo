import { Box } from '@material-ui/core'
import RightSidebarTemplate from 'common/template/RightSidebarTemplate'
import BookModal from 'modules/booking/BookModal'
import { addBooking, getCurrentBooking } from 'modules/booking/fetch-booking'
import MainInfo from 'modules/mentor/detail/MainInfo'
import SideInfo from 'modules/mentor/detail/SideInfo'
import { getLimitMentors, getMentorById } from 'modules/mentor/fetch-mentors'
import ListMentor from 'modules/mentor/ListMentor'
import { signIn, useSession } from 'next-auth/client'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export async function getServerSideProps(ctx) {
  const apiUrl = process.env.API_URL

  return {
    props: {
      apiUrl,
      details: await getMentorById(apiUrl, ctx.params.id),
      limitMentors: await getLimitMentors(apiUrl, 4),
    },
  }
}

export default function MentorDetail({ apiUrl, details, limitMentors }) {
  const router = useRouter()
  const [session, loading] = useSession()
  const [openBookModal, setOpenBookModal] = useState(false)
  const [booking, setBooking] = useState({ id: null, status: '' })

  useEffect(async () => {
    if (session) {
      const data = await getCurrentBooking(
        apiUrl,
        session.user.id,
        details.user_id
      )
      if (data) setBooking(data)
      else setBooking({ id: null, status: '' })
    } else setBooking({ id: null, status: '' })
  }, [session])

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
    data.mentor['id'] = details.user_id
    data.mentor['full_name'] = details.full_name
    data.mentor['thumnail'] = details.thumnail

    // data['mentee_id'] = session.user.id
    // data['mentor_id'] = details.user_id
    data['status'] = 'ongoing'

    const resData = await addBooking(apiUrl, data)

    console.log({ resData })

    setBooking(resData)
  }

  function handleCancel() {
    setBooking({ status: 'cancel', ...booking })
  }

  if (router.isFallback) {
    return (
      <>
        <Head>
          <title>Mentor Detail - DevDuo</title>
        </Head>

        <div>Loading...</div>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{details.full_name}</title>
      </Head>

      <RightSidebarTemplate
        sidebar={
          <SideInfo
            details={details}
            status={booking.status}
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
      />

      <Box my={5}>
        <h1>Mentors you may like</h1>

        <ListMentor list={limitMentors} />
      </Box>
    </>
  )
}
