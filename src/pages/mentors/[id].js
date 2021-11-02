import { Box } from '@material-ui/core'
import RightSidebarTemplate from 'common/template/RightSidebarTemplate'
import BookModal from 'modules/booking/BookModal'
import MainInfo from 'modules/mentor/detail/MainInfo'
import SideInfo from 'modules/mentor/detail/SideInfo'
import { getLimitMentors, getMentorById } from 'modules/mentor/fetch-mentors'
import ListMentor from 'modules/mentor/ListMentor'
import { useSession } from 'next-auth/client'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'

export async function getServerSideProps(ctx) {
  return {
    props: {
      details: await getMentorById(process.env.API_URL, ctx.params.id),
      limitMentors: await getLimitMentors(process.env.API_URL, 4),
    },
  }
}

export default function MentorDetail({ details, limitMentors }) {
  const router = useRouter()
  const [session, loading] = useSession()
  const [openBookModal, setOpenBookModal] = useState(false)
  const [status, setStatus] = useState('')

  function handleClickBook() {
    session ? handleOpenBookModal() : signIn('google')
  }

  function handleOpenBookModal() {
    setOpenBookModal(true)
  }

  function handleCloseBookModal() {
    setOpenBookModal(false)
  }

  function handleBook() {
    alert(`You book ${details.full_name}`)
    setStatus('pending')
    handleCloseBookModal()
  }

  function handleCancel() {
    setStatus('cancel')
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
            status={status}
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
      />

      <Box my={5}>
        <h1>Mentors you may like</h1>

        <ListMentor list={limitMentors} />
      </Box>
    </>
  )
}
