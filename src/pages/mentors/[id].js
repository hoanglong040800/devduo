import { Box, makeStyles, Typography } from '@material-ui/core'
import RightSidebarTemplate from 'common/template/RightSidebarTemplate'
import MainInfo from 'modules/mentor/detail/MainInfo'
import SideInfo from 'modules/mentor/detail/SideInfo'
import { getAllMentor, getMentorById } from 'modules/mentor/fetch-mentors'
import ListMentor from 'modules/mentor/ListMentor'
import Head from 'next/head'
import { useRouter } from 'next/router'

export async function getServerSideProps(ctx) {
  return {
    props: {
      details: await getMentorById(process.env.API_URL, ctx.params.id),
      allMentors: await getAllMentor(process.env.API_URL),
    },
  }
}

export default function MentorDetail({ details, allMentors }) {
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
        <Typography variant="h3" gutterBottom>Mentors you may like</Typography>

        <ListMentor list={allMentors} />
      </Box>
    </>
  )
}
