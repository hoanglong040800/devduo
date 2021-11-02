import { Box } from '@material-ui/core'
import RightSidebarTemplate from 'common/template/RightSidebarTemplate'
import MainInfo from 'modules/mentor/detail/MainInfo'
import SideInfo from 'modules/mentor/detail/SideInfo'
import { getLimitMentors, getMentorById } from 'modules/mentor/fetch-mentors'
import ListMentor from 'modules/mentor/ListMentor'
import Head from 'next/head'
import { useRouter } from 'next/router'

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

      <RightSidebarTemplate sidebar={<SideInfo details={details} />}>
        <MainInfo details={details} />
      </RightSidebarTemplate>

      <Box my={5}>
        <h1>Mentors you may like</h1>

        <ListMentor list={limitMentors} />
      </Box>
    </>
  )
}
