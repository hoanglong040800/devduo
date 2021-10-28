import { Box, makeStyles, Paper } from '@material-ui/core'
import RightSidebarTemplate from 'common/template/RightSidebarTemplate'
import MainInfo from 'modules/mentor/detail/MainInfo'
import SideInfo from 'modules/mentor/detail/SideInfo'
import { getMentorById } from 'modules/mentor/fetch-mentors'
import Head from 'next/head'
import { useRouter } from 'next/router'

export async function getServerSideProps(ctx) {
  return {
    props: {
      details: await getMentorById(process.env.API_URL, ctx.params.id),
    },
  }
}

export default function MentorDetail({ details }) {
  const router = useRouter()
  const mui = useStyles()

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
    </>
  )
}

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
  },

  imgContainer: {
    display: 'flex',
    justifyContent: 'center',

    [theme.breakpoints.down('md')]: {
      width: 100,
      height: 100,
    },

    [theme.breakpoints.up('md')]: {
      width: 200,
      height: 200,
    },
  },

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center center',
    borderRadius: 1000,
  },
}))
